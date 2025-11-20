import { NextRequest, NextResponse } from "next/server";

// Use environment variable for API URL, fallback to localhost for development
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.API_URL ||
  "http://127.0.0.1:8080";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || !url.trim()) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    console.log(`Forwarding request to ${API_URL}/api/download`);

    // Forward request to Flask backend
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 300000); // 5 minute timeout

    try {
      const response = await fetch(`${API_URL}/api/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = {
            error: `HTTP ${response.status}: ${response.statusText}`,
          };
        }
        console.error("Backend error:", errorData);
        // Handle both Flask format (error) and FastAPI format (detail)
        const errorMessage =
          errorData.error || errorData.detail || "Download failed";
        return NextResponse.json(
          { error: errorMessage },
          { status: response.status }
        );
      }

      // Check if response is a file download (video/mp4 or application/octet-stream)
      const contentType = response.headers.get("content-type");
      if (
        contentType?.includes("video/") ||
        contentType?.includes("application/octet-stream") ||
        response.headers.get("content-disposition")
      ) {
        // It's a file download, stream it to the client
        const blob = await response.blob();
        const filename =
          response.headers
            .get("content-disposition")
            ?.split("filename=")[1]
            ?.replace(/"/g, "") || "video.mp4";

        return new NextResponse(blob, {
          headers: {
            "Content-Type": contentType || "video/mp4",
            "Content-Disposition": `attachment; filename="${filename}"`,
          },
        });
      }

      // Otherwise, it's JSON
      const data = await response.json();
      console.log("Backend response:", data);
      return NextResponse.json(data);
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      if (fetchError.name === "AbortError") {
        return NextResponse.json(
          { error: "Request timeout. The download is taking too long." },
          { status: 504 }
        );
      }
      throw fetchError;
    }
  } catch (error: any) {
    console.error("Download error:", error);

    // Check if it's a connection error
    if (
      error.code === "ECONNREFUSED" ||
      error.message?.includes("fetch failed")
    ) {
      return NextResponse.json(
        {
          error:
            "Failed to connect to backend server. Make sure the Flask server is running on port 8080.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error:
          error.message ||
          "Failed to connect to backend server. Make sure the Flask server is running on port 8080.",
      },
      { status: 500 }
    );
  }
}
