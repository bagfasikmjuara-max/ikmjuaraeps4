# ✅ CHECKLIST DEPLOYMENT KE NETLIFY

## 📋 PERSIAPAN SEBELUM UPLOAD KE GITHUB

### ✅ File Assets (SUDAH SELESAI)
- [x] `assets/icon.png` (1024x1024)
- [x] `assets/adaptive-icon.png` (1024x1024)  
- [x] `assets/splash.png` (1242x2208)
- [x] `assets/favicon.png` (32x32)

### ✅ Konfigurasi Build (SUDAH SELESAI)
- [x] `package.json` - script build:web
- [x] `netlify.toml` - konfigurasi Netlify
- [x] `vercel.json` - konfigurasi Vercel
- [x] `.gitignore` - file yang tidak di-upload

### ✅ Dependencies (SUDAH SELESAI)
- [x] `react-native-web` - untuk web support
- [x] `react-dom` - untuk React web
- [x] `@expo/metro-runtime` - Metro runtime

### ✅ Test Build Lokal (SUDAH SELESAI)
- [x] `npm run build:web` - berhasil tanpa error
- [x] Folder `dist/` ter-generate dengan benar

## 🚀 LANGKAH DEPLOYMENT

### 1️⃣ UPLOAD KE GITHUB
Jalankan di Command Prompt/PowerShell:

```bash
# Inisialisasi Git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit - Personal Profile App with assets"

# Set branch utama
git branch -M main

# Hubungkan ke repository GitHub
git remote add origin https://github.com/bagfasikwjuara-max/ikmjuaraeps4.git

# Upload ke GitHub
git push -u origin main
```

### 2️⃣ DEPLOY KE NETLIFY

1. **Login Netlify**
   - Buka: https://netlify.com
   - Klik "Sign up" atau "Log in"
   - Pilih "GitHub" untuk login

2. **Create New Site**
   - Klik "New site from Git"
   - Pilih "GitHub"
   - Cari repository: `ikmjuaraeps4`
   - Klik repository tersebut

3. **Deploy Settings** (Auto-detect dari netlify.toml)
   - **Build command**: `npm run build:web`
   - **Publish directory**: `dist`
   - **Branch**: `main`

4. **Environment Variables**
   - Masuk ke "Site settings" > "Environment variables"
   - Klik "Add variable" untuk setiap item:

   ```
   AIRTABLE_BASE_ID = your_base_id_here
   AIRTABLE_API_KEY = your_api_key_here
   AIRTABLE_PROFILES_TABLE = Profiles
   AIRTABLE_INQUIRY_TABLE = Inquiry
   USE_DUMMY_DATA = false
   ```

5. **Deploy Site**
   - Klik "Deploy site"
   - Tunggu proses build (3-5 menit)
   - Dapatkan URL: `https://random-name.netlify.app`

### 3️⃣ CUSTOM DOMAIN (OPSIONAL)
- Masuk ke "Domain settings"
- Klik "Add custom domain"
- Ikuti instruksi DNS

## 🔧 TROUBLESHOOTING

### ❌ Build Gagal
```bash
# Cek build lokal dulu
npm run build:web

# Jika error, install ulang dependencies
npm install
```

### ❌ Environment Variables Tidak Terbaca
- Pastikan nama variable PERSIS sama
- Restart deployment setelah menambah env vars
- Cek di "Site settings" > "Environment variables"

### ❌ Assets Tidak Muncul
- Pastikan semua file di folder `assets/` ada
- Cek ukuran file (jangan terlalu besar)
- Format harus PNG

### ❌ Airtable Tidak Connect
- Cek API key dan Base ID
- Pastikan tabel "Profiles" dan "Inquiry" ada
- Test di Postman/browser dulu

## 📱 ALTERNATIF: DEPLOY KE VERCEL

Jika Netlify bermasalah:

1. **Login Vercel**: https://vercel.com
2. **Import Project**: Pilih GitHub repo
3. **Auto Deploy**: Vercel detect `vercel.json`
4. **Add Environment Variables**: Sama seperti Netlify
5. **Deploy**: Otomatis

## 🎉 SETELAH DEPLOYMENT BERHASIL

1. **Test Aplikasi**: Buka URL yang diberikan
2. **Test Fitur**: Login, tambah data, dll
3. **Share URL**: Aplikasi sudah online!
4. **Monitor**: Cek logs jika ada error

## 📞 BANTUAN

Jika ada masalah:
- **Netlify Docs**: https://docs.netlify.com
- **Expo Web**: https://docs.expo.dev/workflow/web/
- **GitHub Issues**: Buat issue di repository