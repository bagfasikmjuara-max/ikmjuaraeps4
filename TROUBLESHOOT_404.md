# 🔧 TROUBLESHOOT: Page Not Found (404 Error)

## 🚨 MASALAH
Aplikasi menampilkan "Page not found" di Netlify meskipun build berhasil.

## 🔍 PENYEBAB UMUM
1. **Routing Issue**: SPA routing tidak dikonfigurasi dengan benar
2. **Environment Variables**: Tidak terbaca dengan benar
3. **Build Path**: File tidak ter-deploy ke lokasi yang benar
4. **JavaScript Error**: Ada error yang mencegah app load

## ✅ SOLUSI STEP-BY-STEP

### 1️⃣ PERBAIKI ROUTING (SUDAH DILAKUKAN)
File `_redirects` dan `netlify.toml` sudah dibuat untuk menangani SPA routing.

### 2️⃣ CEK ENVIRONMENT VARIABLES DI NETLIFY
1. Masuk ke Netlify Dashboard
2. Pilih site `ikmjuaraeps4`
3. Masuk ke **Site settings** > **Environment variables**
4. Pastikan ada 5 variables ini:

```
AIRTABLE_BASE_ID = your_base_id_here
AIRTABLE_API_KEY = your_api_key_here
AIRTABLE_PROFILES_TABLE = Profiles
AIRTABLE_INQUIRY_TABLE = Inquiry
USE_DUMMY_DATA = false
```

### 3️⃣ REDEPLOY DENGAN PERUBAHAN TERBARU
```bash
# Tambahkan file _redirects yang baru
git add .
git commit -m "Fix: Add _redirects file for SPA routing"
git push origin main
```

### 4️⃣ CEK BUILD LOG DI NETLIFY
1. Masuk ke **Deploys** tab
2. Klik deploy terbaru
3. Lihat **Deploy log** untuk error
4. Pastikan build berhasil 100%

### 5️⃣ TEST MANUAL DI BROWSER
Setelah redeploy, test:
1. Buka URL Netlify
2. Buka Developer Tools (F12)
3. Lihat Console untuk JavaScript errors
4. Cek Network tab untuk failed requests

## 🔧 ALTERNATIF SOLUSI

### Opsi A: Deploy ke Vercel
Jika Netlify masih bermasalah:
1. Login ke https://vercel.com
2. Import project dari GitHub
3. Vercel biasanya lebih baik handle SPA routing

### Opsi B: Gunakan Expo Web Hosting
```bash
# Install Expo CLI
npm install -g @expo/cli

# Login ke Expo
expo login

# Publish ke Expo
expo publish --platform web
```

### Opsi C: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://bagfasikwjuara-max.github.io/ikmjuaraeps4",
"scripts": {
  "predeploy": "npm run build:web",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 🎯 QUICK FIX CHECKLIST

- [ ] Environment variables sudah ditambahkan di Netlify
- [ ] File `_redirects` sudah di-push ke GitHub
- [ ] Redeploy sudah dilakukan
- [ ] Build log menunjukkan sukses
- [ ] Test di browser dengan Developer Tools

## 📞 JIKA MASIH BERMASALAH

1. **Screenshot error** di browser console
2. **Copy build log** dari Netlify
3. **Test URL** langsung: `https://your-site.netlify.app/index.html`
4. **Coba platform lain** (Vercel/GitHub Pages)

## 🚀 EXPECTED RESULT

Setelah perbaikan, aplikasi harus:
- Load halaman login mode
- Tidak ada 404 error
- JavaScript berjalan normal
- Environment variables terbaca