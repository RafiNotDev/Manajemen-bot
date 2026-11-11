# Rafibot WhatsApp Management — Railway

## Deploy ke Railway
1. Upload project ini ke repository GitHub (jangan commit `.env`, kredensial, atau folder sesi).
2. Buat project baru di Railway dan deploy repository tersebut.
3. Tambahkan **Volume** pada service, mount path: `/data`.
4. Tambahkan variable `RAILWAY_VOLUME_MOUNT_PATH=/data`.
5. Pastikan service menjalankan `npm start`. Railway akan menyediakan `PORT` otomatis.
6. Buka domain Railway dan buat akun. Akun pertama otomatis menjadi developer.

## Penyimpanan persisten
Database panel dan sesi bot menggunakan volume:
- `/data/Database/rafibot.json`
- `/data/Cache/SesiBot/<id-bot>/` (konfigurasi + kredensial Baileys)

Sesi Baileys diarahkan ke folder instance melalui `BOT_SESSION_DIR`. Pastikan volume tetap terpasang pada path `/data` ketika redeploy.

## Penting untuk koneksi Baileys
- Gunakan satu Railway service/replica untuk panel ini. Jangan scale ke beberapa replica karena status proses bot disimpan di memori service.
- Hindari menjalankan dua proses bot yang memakai nomor/session WhatsApp sama.
- Railway restart/deploy akan menghentikan proses bot; dashboard dan sesi akan tetap ada di volume. Setelah deploy, tekan Start untuk menyambungkan kembali.
- Pairing code/QR harus diambil dari log service saat ini; dashboard versi ini belum menampilkan QR/pairing code secara visual.
- Bot asal memakai konfigurasi global dan sebagian fitur dapat mengasumsikan satu instance. Beberapa bot paralel perlu uji integrasi dan penyesuaian lebih lanjut.
- Tombol Bekukan menghentikan proses lalu menyimpan status beku, bukan pause proses OS.
- Upload developer menimpa file project pada container. Perubahan tersebut dapat hilang saat redeploy; untuk update permanen, commit perubahan ke GitHub lalu deploy ulang. Jangan gunakan upload panel sebagai satu-satunya mekanisme update di Railway.
- Data akun panel memakai JSON file pada volume; password di-hash scrypt. Sesi login panel berada di memori dan perlu login ulang setelah restart.

## Keamanan sebelum publik
ZIP asal berisi beberapa kredensial/API key hardcoded di konfigurasi. Rotasi semua key/token yang pernah ada di source, pindahkan ke Railway Variables, aktifkan HTTPS melalui domain Railway, dan batasi akses akun developer. Jangan membagikan folder `/data/Cache/SesiBot` karena berisi kredensial perangkat WhatsApp.

## Lokal
`npm install` lalu `npm start`; buka `http://localhost:3000`.
