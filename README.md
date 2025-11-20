# YouTube İndirici - Ön Yüz

YouTube videolarını indirmek için web arayüzü.

## ⚠️ Önemli: Arka Plan Servisi Gerekli

Bu ön yüzün çalışması için **arka plan servisi** de gereklidir. Arka plan servisini ayrı bir klasöre indirip kurmanız gerekir.

## 💻 Terminal Nasıl Açılır?

### Windows Kullanıcıları

1. **Windows Tuşu + R** tuşlarına basın
2. Açılan pencerede `cmd` yazın ve **Enter** tuşuna basın
3. Veya **Başlat Menüsü**'nde "Komut İstemi" veya "PowerShell" arayın ve açın

**Kolay Yol:** `install.bat` ve `start.bat` dosyalarına çift tıklayarak da kullanabilirsiniz (terminal açmaya gerek yok).

### Mac Kullanıcıları

1. **Spotlight** açın: **Cmd (⌘) + Boşluk** tuşlarına basın
2. "Terminal" yazın ve **Enter** tuşuna basın
3. Veya **Uygulamalar > Yardımcı Programlar > Terminal** yolunu takip edin

## 🚀 Kurulum ve Çalıştırma

### Windows Kullanıcıları (Kolay Yol)

1. `install.bat` dosyasına çift tıklayın
2. Kurulum tamamlandıktan sonra `start.bat` dosyasına çift tıklayın

### Mac/Linux Kullanıcıları

**1. Ön Yüzü Kurun**

```bash
chmod +x install.sh
./install.sh
```

**2. Arka Plan Servisini Kurun**

Arka plan servisini indirdiğiniz klasöre gidin ve kurun:

```bash
cd ytdownloader-backend
chmod +x install.sh
./install.sh
```

**3. Her İkisini de Başlatın**

**Terminal 1 - Arka Plan:**
```bash
cd ytdownloader-backend
./start.sh
```

**Terminal 2 - Ön Yüz:**
```bash
cd ytdownloader-frontend
./start.sh
```

Tarayıcıda `http://localhost:3001` adresi otomatik açılacak.

## 📋 Gereksinimler

- **Node.js 18+** (https://nodejs.org/ adresinden indirin)
- **Yarn** (önerilir) veya **npm** (Node.js ile birlikte gelir)
- **Arka Plan Servisi** (ayrı bir repo olarak indirilmelidir)

## 🔧 Sorun Giderme

### Arka plan bağlantı hatası?

1. Arka plan servisinin kurulu ve çalıştığından emin olun
2. Arka plan servisini önce başlatın

**Windows:** `start.bat` dosyasına çift tıklayın
**Mac/Linux:** `cd ytdownloader-backend && ./start.sh`

### Port 3001 kullanımda mı?

`package.json` dosyasındaki `dev` komutunda portu değiştirin.

### Bağımlılık sorunları?

**Windows:** `install.bat` dosyasını tekrar çalıştırın

**Mac/Linux:**
```bash
rm -rf node_modules yarn.lock
yarn install
```

Daha fazla bilgi için [QUICKSTART.md](QUICKSTART.md) dosyasına bakın.
