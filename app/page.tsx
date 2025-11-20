"use client";

import {
  Alert,
  Button,
  Container,
  Loader,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";

type Status = "idle" | "downloading" | "success" | "error";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) {
      setStatus("error");
      setMessage("Please enter a YouTube URL");
      return;
    }

    setStatus("downloading");
    setMessage("Downloading video...");

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      // Check if response is a file download
      const contentType = response.headers.get("content-type");
      if (
        contentType?.includes("video/") ||
        contentType?.includes("application/octet-stream") ||
        response.headers.get("content-disposition")
      ) {
        // It's a file download - trigger browser download
        const blob = await response.blob();
        const urlObj = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = urlObj;
        a.download =
          response.headers
            .get("content-disposition")
            ?.split("filename=")[1]
            ?.replace(/"/g, "") || "video.mp4";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(urlObj);
        document.body.removeChild(a);

        setStatus("success");
        setMessage("Download complete! Video saved to your Downloads folder.");
        return;
      }

      // Otherwise, it's JSON (error response)
      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          data.message || "Download complete! Video saved to Downloads folder."
        );
      } else {
        setStatus("error");
        setMessage(
          data.error || "Download failed. Please check the URL and try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to connect to server. Please try again.");
    }
  };

  return (
    <Container size="sm" py="xl">
      <Paper shadow="sm" p="xl" radius="md" withBorder>
        <Stack gap="lg">
          <div>
            <Title order={2} mb="xs">
              YouTube Video Downloader
            </Title>
            <Text c="dimmed" size="sm">
              Enter a YouTube URL to download the video
            </Text>
          </div>

          <TextInput
            placeholder="https://www.youtube.com/watch?v=..."
            label="YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={status === "downloading"}
            onKeyDown={(e) => {
              if (e.key === "Enter" && status !== "downloading") {
                handleDownload();
              }
            }}
          />

          <Button
            onClick={handleDownload}
            loading={status === "downloading"}
            disabled={status === "downloading"}
            fullWidth
          >
            Download
          </Button>

          {status === "downloading" && (
            <Alert
              icon={<Loader size={16} />}
              color="blue"
              title="Downloading..."
            >
              {message}
            </Alert>
          )}

          {status === "success" && (
            <Alert
              color="green"
              title="Success!"
              onClose={() => {
                setStatus("idle");
                setMessage("");
                setUrl("");
              }}
              withCloseButton
            >
              {message}
            </Alert>
          )}

          {status === "error" && (
            <Alert
              color="red"
              title="Error"
              onClose={() => {
                setStatus("idle");
                setMessage("");
              }}
              withCloseButton
            >
              {message}
            </Alert>
          )}
        </Stack>
      </Paper>
    </Container>
  );
}
