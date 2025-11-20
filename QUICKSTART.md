# 🚀 Hızlı Başlangıç

Bu uygulama iki ayrı servisten oluşur: **Arka Plan Servisi** (backend) ve **Ön Yüz** (frontend). Her ikisini de çalıştırmanız gerekir.

## 💻 Terminal Nasıl Açılır?

### Windows Kullanıcıları

1. **Windows Tuşu + R** tuşlarına basın
2. Açılan pencerede `cmd` yazın ve **Enter** tuşuna basın
3. Veya **Başlat Menüsü**'nde "Komut İstemi" veya "PowerShell" arayın ve açın

**İpucu:** İki terminal penceresi açmanız gerekecek. İlkini açtıktan sonra, ikinci bir terminal için yukarıdaki adımları tekrarlayın.

### Mac Kullanıcıları

1. **Spotlight** açın: **Cmd (⌘) + Boşluk** tuşlarına basın
2. "Terminal" yazın ve **Enter** tuşuna basın
3. Veya **Uygulamalar > Yardımcı Programlar > Terminal** yolunu takip edin

**İpucu:** İki terminal penceresi açmanız gerekecek. İlkini açtıktan sonra, **Cmd + T** tuşlarına basarak yeni bir sekme açabilir veya **Cmd + N** ile yeni bir pencere açabilirsiniz.

## 📦 Kurulum

### 1. Arka Plan Servisini Kurun

Arka plan servisini indirdiğiniz klasöre gidin. Terminal'de:

```bash
cd ytdownloader-backend
chmod +x install.sh
./install.sh
```

**Windows kullanıcıları için:** `install.bat` dosyasına çift tıklayarak kurulumu başlatabilirsiniz. Terminal kullanmak isterseniz, `chmod +x` komutunu atlayıp doğrudan `install.sh` yazabilirsiniz.

### 2. Ön Yüzü Kurun

Ön yüzü indirdiğiniz klasöre gidin. Terminal'de:

```bash
cd ytdownloader-frontend
chmod +x install.sh
./install.sh
```

**Windows kullanıcıları için:** `install.bat` dosyasına çift tıklayarak kurulumu başlatabilirsiniz.

## ▶️ Çalıştırma

### 1. Arka Plan Servisini Başlatın

**Terminal 1'de (yeni bir terminal açın):**

```bash
cd ytdownloader-backend
./start.sh
```

Arka plan servisi çalışmaya başlayacak. Bu terminal penceresini açık bırakın.

**Windows kullanıcıları için:** `start.bat` dosyasına çift tıklayarak başlatabilirsiniz.

### 2. Ön Yüzü Başlatın

**Terminal 2'de (yeni bir terminal açın):**

```bash
cd ytdownloader-frontend
./start.sh
```

Tarayıcıda `http://localhost:3001` adresi otomatik açılacak.

**Windows kullanıcıları için:** `start.bat` dosyasına çift tıklayarak başlatabilirsiniz.

### 3. Kullanın!

Tarayıcıda YouTube URL'si yapıştırıp indirin!

## ⚠️ Önemli Notlar

- Her iki servisi de çalıştırmanız gerekir
- Arka plan servisi önce başlatılmalı
- Her servis ayrı bir terminal penceresinde çalışır
- Terminal pencerelerini kapatmayın

## 🔧 Sorun Giderme

### Arka plan bağlantı hatası?

- Arka plan servisinin çalıştığından emin olun
- Arka plan servisini önce başlatın

### Port çakışması?

- Arka plan: `ytdownloader-backend/.env` dosyasında `PORT=3000` ayarlayın
- Ön yüz: `ytdownloader-frontend/package.json` dosyasındaki `dev` komutunda portu değiştirin

### Kurulum sorunları?

- Python kontrolü (arka plan): `python3 --version` veya `python --version`
- Node.js kontrolü (ön yüz): `node --version`
- Bağımlılıkları yeniden kurun: `./install.sh`

### Windows'ta komutlar çalışmıyor?

- **Kolay yol:** `.bat` dosyalarına çift tıklayın (`install.bat`, `start.bat`)
- PowerShell kullanmayı deneyin
- Git Bash kullanıyorsanız `.sh` dosyalarını kullanabilirsiniz
