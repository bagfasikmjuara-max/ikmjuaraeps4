# 🚀 PANDUAN DEPLOY IKMJUARAEPS4 KE NETLIFY

## 📋 LANGKAH UPLOAD KE GITHUB

### 1️⃣ Buka Command Prompt/PowerShell di folder project
### 2️⃣ Jalankan perintah berikut SATU PER SATU:

```bash
# Inisialisasi Git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit - IKM Juara EPS4 App"

# Set branch utama
git branch -M main

# Hubungkan ke repository ikmjuaraeps4
git remote add origin https://github.com/bagfasikwjuara-max/ikmjuaraeps4.git

# Upload ke GitHub
git push -u origin main
```

## 🌐 LANGKAH DEPLOY KE NETLIFY

### 1️⃣ Login ke Netlify
- Buka: https://netlify.com
- Klik "Log in" 
- Pilih "GitHub" untuk login

### 2️⃣ Create New Site
- Klik "New site from Git"
- Pilih "GitHub" 
- **PENTING**: Cari dan pilih repository **`ikmjuaraeps4`**
- Klik pada repository tersebut

### 3️⃣ Deploy Settings (Otomatis dari netlify.toml)
Netlify akan otomatis detect:
- **Build command**: `npm run build:web`
- **Publish directory**: `dist`
- **Branch to deploy**: `main`

### 4️⃣ Tambahkan Environment Variables
Setelah site dibuat:
1. Masuk ke **"Site settings"**
2. Klik **"Environment variables"** di sidebar
3. Klik **"Add variable"** untuk setiap item berikut:

```
Key: AIRTABLE_BASE_ID
Value: your_base_id_here

Key: AIRTABLE_API_KEY  
Value: your_api_key_here

Key: AIRTABLE_PROFILES_TABLE
Value: Profiles

Key: AIRTABLE_INQUIRY_TABLE
Value: Inquiry

Key: USE_DUMMY_DATA
Value: false
```

### 5️⃣ Deploy Site
- Kembali ke **"Deploys"** tab
- Klik **"Trigger deploy"** → **"Deploy site"**
- Tunggu proses build (3-5 menit)

### 6️⃣ Dapatkan URL
Setelah berhasil, Anda akan mendapat URL seperti:
```
https://wonderful-name-123456.netlify.app
```

## 🔧 JIKA ADA MASALAH

### ❌ Repository tidak ditemukan
- Pastikan repository `ikmjuaraeps4` sudah dibuat di GitHub
- Pastikan Anda sudah login GitHub di Netlify
- Refresh halaman Netlify

### ❌ Build gagal
- Cek di tab "Deploy log" untuk error detail
- Pastikan `npm run build:web` jalan di lokal
- Cek environment variables sudah benar

### ❌ Environment variables tidak terbaca
- Pastikan nama variable PERSIS sama (case-sensitive)
- Tidak ada spasi di awal/akhir
- Redeploy setelah menambah env vars

## 🎯 HASIL AKHIR

Aplikasi IKM Juara EPS4 akan online di:
- URL Netlify: `https://your-site-name.netlify.app`
- Bisa diakses dari browser mana pun
- Responsive untuk mobile dan desktop
- Terintegrasi dengan Airtable

## 📱 CUSTOM DOMAIN (OPSIONAL)

Jika ingin domain sendiri:
1. Masuk ke "Domain settings"
2. Klik "Add custom domain"  
3. Masukkan domain Anda (misal: `ikmjuara.com`)
4. Ikuti instruksi DNS

## ✅ CHECKLIST FINAL

- [ ] Repository `ikmjuaraeps4` berhasil di-upload ke GitHub
- [ ] Site berhasil dibuat di Netlify
- [ ] Environment variables sudah ditambahkan
- [ ] Deploy berhasil (status: Published)
- [ ] URL bisa diakses dan aplikasi jalan
- [ ] Test login dan fitur utama

**Selamat! Aplikasi IKM Juara EPS4 sudah online! 🎉**