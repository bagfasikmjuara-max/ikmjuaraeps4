# 🚀 Panduan Deploy Aplikasi Expo ke Web

## 📱 Tentang Aplikasi Ini
Aplikasi ini adalah **React Native dengan Expo** yang bisa di-deploy sebagai:
1. **Web App** (bisa diakses di browser)
2. **Mobile App** (APK/IPA untuk install di HP)

## 🌐 OPSI 1: Deploy ke Web (GRATIS)

### A. Menggunakan Netlify (RECOMMENDED)

1. **Persiapan Lokal:**
   ```bash
   npm install
   npm run build:web
   ```

2. **Upload ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Expo app"
   git branch -M main
   git remote add origin https://github.com/USERNAME/ikmjuaraeps4.git
   git push -u origin main
   ```

3. **Deploy di Netlify:**
   - Masuk ke Site settings > Environment variables
   - Tambahkan:
     ```
     AIRTABLE_BASE_ID=your_base_id_here
     AIRTABLE_API_KEY=your_api_key_here
     AIRTABLE_PROFILES_TABLE=Profiles
     AIRTABLE_INQUIRY_TABLE=Inquiry
     USE_DUMMY_DATA=false
     ```

### B. Menggunakan Vercel

1. **Upload ke GitHub** (sama seperti di atas)

2. **Deploy di Vercel:**
   - Login ke https://vercel.com
   - Klik "New Project"
   - Import dari GitHub
   - Vercel akan otomatis detect `vercel.json`
   - Tambahkan Environment Variables yang sama

### C. Menggunakan GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://USERNAME.github.io/ikmjuaraeps4",
     "scripts": {
       "predeploy": "npm run build:web",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 📱 OPSI 2: Build Mobile App (APK/IPA)

### Menggunakan Expo Application Services (EAS)

1. **Install EAS CLI:**
   ```bash
   npm install -g @expo/cli
   npm install -g eas-cli
   ```

2. **Login Expo:**
   ```bash
   eas login
   ```

3. **Konfigurasi EAS:**
   ```bash
   eas build:configure
   ```

4. **Build APK (Android):**
   ```bash
   eas build --platform android --profile preview
   ```

5. **Build IPA (iOS):**
   ```bash
   eas build --platform ios --profile preview
   ```

## 🔧 Environment Variables

Pastikan file `.env` berisi:
```env
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_PROFILES_TABLE=Profiles
AIRTABLE_INQUIRY_TABLE=Inquiry
USE_DUMMY_DATA=false
```

## 🎯 Rekomendasi

**Untuk Web:** Gunakan **Netlify** - paling mudah dan gratis
**Untuk Mobile:** Gunakan **EAS Build** - official dari Expo

## 🆘 Troubleshooting

1. **Build gagal:** Pastikan semua dependencies terinstall
2. **Environment variables tidak terbaca:** Cek nama variable di platform deploy
3. **App tidak load:** Cek console browser untuk error
4. **Airtable tidak connect:** Pastikan API key dan Base ID benar

## 📞 Support

Jika ada masalah, cek:
- Expo Documentation: https://docs.expo.dev
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs