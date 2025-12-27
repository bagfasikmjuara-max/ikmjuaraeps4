# 📱 Personal Profile Management App

Aplikasi manajemen profil personal yang dibuat dengan React Native dan Expo. Aplikasi ini menggunakan Airtable sebagai database dan mendukung deployment ke web.

## 🚀 Live Demo
- **Web Version**: [Deploy ke Netlify - Repository: ikmjuaraeps4]
- **Mobile App**: Build dengan Expo EAS
- **GitHub**: https://github.com/bagfasikwjuara-max/ikmjuaraeps4

## ✨ Fitur Utama
- 👤 Manajemen Profil Personal  
- 📝 Sistem Registrasi
- 🔍 Pencarian Data
- 📊 Dashboard Admin & User
- 🗑️ Trash/Recycle Bin
- 📱 Responsive Design (Web & Mobile)
- 🔄 Pull-to-refresh
- 🔐 Login System (Admin/User)

## Fitur

- Menampilkan daftar profil dari Airtable
- Detail profil dengan informasi kontak lengkap
- Navigasi antar halaman
- Integrasi dengan aplikasi eksternal (email, telepon, media sosial)
- Pull-to-refresh untuk memperbarui data

## Setup Airtable

1. Buat base baru di Airtable
2. Buat tabel dengan nama "Profiles" dan kolom berikut:
   - `name` (Single line text)
   - `title` (Single line text)
   - `email` (Email)
   - `mobile` (Phone number)
   - `followers` (Number)
   - `following` (Number)
   - `twitter` (Single line text)
   - `behance` (URL)
   - `facebook` (URL)
   - `photo` (Attachment)
   - `bio` (Long text)

3. Dapatkan API key dari https://airtable.com/account
4. Dapatkan Base ID dari URL Airtable Anda

## Instalasi

1. Install dependencies:
   ```bash
   npm install
   ```

2. Konfigurasi Airtable di `src/services/airtableService.js`:
   ```javascript
   const AIRTABLE_BASE_ID = 'your_base_id_here';
   const AIRTABLE_API_KEY = 'your_api_key_here';
   ```

3. Jalankan aplikasi:
   ```bash
   npm start
   ```

## Struktur Proyek

```
├── App.js                          # Entry point aplikasi
├── src/
│   ├── screens/
│   │   ├── ProfileListScreen.js    # Halaman daftar profil
│   │   └── ProfileDetailScreen.js  # Halaman detail profil
│   └── services/
│       └── airtableService.js      # Service untuk API Airtable
├── package.json
├── app.json
└── babel.config.js
```

## Penggunaan

1. Aplikasi akan menampilkan daftar profil dari Airtable
2. Tap pada profil untuk melihat detail lengkap
3. Tap pada informasi kontak untuk membuka aplikasi terkait
4. Pull down untuk refresh data

## Teknologi

- React Native
- Expo
- React Navigation
- Axios
- Airtable REST API

## 🚀 Deployment ke Web

### 1️⃣ Upload ke GitHub
```bash
git init
git add .
git commit -m "Initial commit - IKM Juara EPS4 App"
git branch -M main
git remote add origin https://github.com/bagfasikwjuara-max/ikmjuaraeps4.git
git push -u origin main
```

### 2️⃣ Deploy ke Netlify
1. Buka https://netlify.com
2. Login dengan GitHub  
3. "New site from Git" → pilih `ikmjuaraeps4`
4. Tambahkan environment variables dari `.env.example`
5. Deploy!

### 3️⃣ Hasil
Aplikasi akan online di URL Netlify yang diberikan.

📋 **Panduan lengkap**: Lihat file `DEPLOY_IKMJUARAEPS4.md`