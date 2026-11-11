/*===============================*/
// Script Dejavu-WaBot
// creator by Rafi hacker
// scriptnya mau yang no enc??
// Bisa bisa!!, chat aja nih developernya
// wa.me/6282284163778

/*===============================*/

// List harga
// NO ENC: 35K NO UPDATE
//           45K FREE UPDATE

/*===============================*/

import { watchFile, unwatchFile } from 'fs'
import fs from "fs"
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'
/*===============================*/

//         SETTINGS BOT

/*===============================*/

global.daerah = "Sawahlunto" // Tulis Di Sini Nama Daerah Kalian, Buat Jadwal Waktu Sholat Daerah Kalian

global.owner = [
  ['6288279166081', 'RafiBukanDeveloper', true],
]

global.setting = {
    prefix: ".", //Atur Prefix Bot Lu Di Sini Ngab
    namabot: "Asisten Rafibot", //Buat menampilkan Nama Bot ngab
    namaowner: "Owner_Fhi", //buat menampilkan nama owner ngab
    bot: "6283183574841", //Buat Pairing Nomor Bot
    owner: "6288279166081", //buat Nomor Owner
    tampilan: "https://files.catbox.moe/85kvdh.jpg", //buat setting Menu tampilan
    sound: "https://files.catbox.moe/bogzjh.mp3", //buat setting sound Menu
    video: "https://files.catbox.moe/2z7o6t.mp4",
    fotopp: "https://files.catbox.moe/itl427.jpg",
    idch: "120363421697084045@newsletter", //Masukin Id Channel Whatsapp Kalian Di Sini Untuk Memperbagus Tampilan Menu
    namach: "Mohon Ikuti Saluran", //Masukin Nama Channel Whatsapp Kalian Di Sini, Agar Nama Channel Kalian Tampil Pas Tampilan Menu Muncul
    linkch: "https://whatsapp.com/channel/0029Vb71djf6mYPJmF7CMg0y", //Masukin Link Ch Kaliam Disini
    linkgc: '', //Masukin link Group Kamu Ngab Di sini
    instagram: "https://instagram.com/rfrdnap", //Masukin Link instagram Lu Ini bakal Tampil Pas Liat Info Owner
    tiktok: "https://tiktok.com/@rfrdnap", //masukin Link tiktok Lu ini Bakal Tampil Pas Liat Info Owner
    website: "rafi-panel.vercel.app" //masukin Link website Kaliam Disini
}
// Konfigurasi per-instance dari panel Rafibot (opsional).
// Nilai default lama tetap dipakai jika bot dijalankan tanpa panel.
if (process.env.BOT_CONFIG_PATH && fs.existsSync(process.env.BOT_CONFIG_PATH)) {
  try {
    const panelConfig = JSON.parse(fs.readFileSync(process.env.BOT_CONFIG_PATH, "utf8"));
    global.setting = { ...global.setting, ...panelConfig };
    if (panelConfig.daerah) global.daerah = panelConfig.daerah;
    if (panelConfig.owner) global.owner = [[String(panelConfig.owner), panelConfig.namaowner || "Owner", true]];
  } catch (error) {
    console.error("[Rafibot] Gagal membaca konfigurasi panel:", error.message);
  }
}
global.TokenVercel = "DHJTkEu1QG1fuojGLvG3VFk5"
/*===============================*/

//        SETTINGS PANEL

/*===============================*/

global.domain = 'https://' //masukin domain panel kalian di sini lagi, samain yang di atas yaa
global.ptla = 'ptla_' //masukin api plta panel kalian, biar cpanelnya work
global.ptlc = 'ptlc_' //masukin api pltc kalian, biar cpanelnya work
//cara dapetin api key panel kalian liat youtube yaa, kalo di sini susah gw kasih tau caranya
global.linkgroup = 'https://' //Tulis Link Group Panel Kalian
global.akhiran = "@RAFIHACKER" //buat akhiran Email Cpanel Ngab
/*===============================*/

//          SETTINGS WM

/*===============================*/

global.wm = `Dibuat Oleh: ${setting.namaowner}\n Mau Bikin Bot??/n Chat: ${setting.owner}` // Opsional boleh ganti atau tidak 
global.author = `${setting.namaowner}\n Mau Bikin Bot??/n Chat: ${setting.owner}` // Opsional boleh ganti atau tidak 
global.stickpack = 'Dibuat Oleh' // Opsional boleh ganti atau tidak 
global.stickauth = `${global.setting.namaowner}\n Mau Bikin Bot??/n Chat:${setting.owner}` // Opsional boleh ganti atau tidak 

/*===============================*/

//          SETTINGS PAYMENT

/*===============================*/

global.payment = {
        qris: "", // Masukin Link Qris Kalian Di Sini
        dana: "088279166081", //Masukin Nomor Dana Kalian Di Sini
        ovo: "tidak ada", //Masukin Nomor Ovo Kalian Di Sini
        gopay: "tidak ada" //Masukin Nomor Gopay Kalian Di Sini
}
global.pakasir = {
    project: "payment-by-rafihacker",
    apikey: "yneAJfVaZxR9PHuSxCmwXNsf86PIOdK3"
}
/*===============================*/

//       JANGAN DI UBAH NGAB

/*===============================*/

const _0x6be49a=_0x5e72;function _0x4693(){const _0x53a985=['Pembaruan\x20\x27./Ruang-Ganti_Ganti.js\x27','settingAnti','instagram','16eikTeW','🛍️','log','1306110UiGpRC','toLowerCase','map','https://raw.githubusercontent.com/RafiNotDev/DatabaseBot/refs/heads/main/Database.json','188923mdacSg','1034244CbNxjI','welcomeMode','menuMode','nomor','rpg','namadev','204872SvgVZI','keys','now','🕸️','test','TampilanMode','🗃️','3370088qSPlZA','119960cFkYtc','tiktok','12RKKCsq','redBright','459326LQUmCS','nama','length'];_0x4693=function(){return _0x53a985;};return _0x4693();}function _0x5e72(_0x4f8de1,_0x8855d1){_0x4f8de1=_0x4f8de1-0x15f;const _0x4693b4=_0x4693();let _0x5e72d5=_0x4693b4[_0x4f8de1];return _0x5e72d5;}(function(_0x5e6536,_0x279576){const _0xe6a7a2=_0x5e72,_0x826741=_0x5e6536();while(!![]){try{const _0x518cf5=parseInt(_0xe6a7a2(0x17c))/0x1+parseInt(_0xe6a7a2(0x170))/0x2+-parseInt(_0xe6a7a2(0x165))/0x3+parseInt(_0xe6a7a2(0x162))/0x4*(-parseInt(_0xe6a7a2(0x178))/0x5)+-parseInt(_0xe6a7a2(0x17a))/0x6*(parseInt(_0xe6a7a2(0x169))/0x7)+parseInt(_0xe6a7a2(0x177))/0x8+-parseInt(_0xe6a7a2(0x16a))/0x9;if(_0x518cf5===_0x279576)break;else _0x826741['push'](_0x826741['shift']());}catch(_0x4bcc18){_0x826741['push'](_0x826741['shift']());}}}(_0x4693,0x450a7),global[_0x6be49a(0x16e)]={'emoticon'(_0x5a3681){const _0x664007=_0x6be49a;_0x5a3681=_0x5a3681[_0x664007(0x166)]();let _0x2a6f27={'level':'📊','limit':'🎫','health':'❤️','exp':'✨','atm':'💳','money':'💰','bank':'🏦','potion':'🥤','diamond':'💎','common':'📦','uncommon':_0x664007(0x163),'mythic':'🎁','legendary':_0x664007(0x176),'superior':'💼','pet':'🔖','trash':'🗑','armor':'🥼','sword':'⚔️','pickaxe':'⛏️','fishingrod':'🎣','wood':'🪵','rock':'🪨','string':_0x664007(0x173),'horse':'🐴','cat':'🐱','dog':'🐶','fox':'🦊','robo':'🤖','petfood':'🍖','iron':'⛓️','gold':'🪙','emerald':'❇️','upgrader':'🧰','bibitanggur':'🌱','bibitjeruk':'🌿','bibitapel':'☘️','bibitmangga':'🍀','bibitpisang':'🌴','anggur':'🍇','jeruk':'🍊','apel':'🍎','mangga':'🥭','pisang':'🍌','botol':'🍾','kardus':'📦','kaleng':'🏮','plastik':'📜','gelas':'🧋','chip':'♋','umpan':'🪱','skata':'🧩'},_0x281f7d=Object[_0x664007(0x171)](_0x2a6f27)[_0x664007(0x167)](_0x33067e=>[_0x33067e,new RegExp(_0x33067e,'gi')])['filter'](_0xaca07a=>_0xaca07a[0x1][_0x664007(0x174)](_0x5a3681));if(!_0x281f7d[_0x664007(0x17e)])return'';else return _0x2a6f27[_0x281f7d[0x0][0x0]];}},global['menuMode']=global[_0x6be49a(0x16c)]||{},global[_0x6be49a(0x175)]=global[_0x6be49a(0x175)]||{},global['welcomeMode']=global[_0x6be49a(0x16b)]||{},global[_0x6be49a(0x160)]=global['settingAnti']||{});const raw=await fetch(_0x6be49a(0x168)),data=await raw['json']();global[_0x6be49a(0x16f)]=''+data[_0x6be49a(0x17d)],global['nodev']=''+data[_0x6be49a(0x16d)],global['sosmed']={'instagram':''+data[_0x6be49a(0x161)],'tiktok':''+data[_0x6be49a(0x179)],'telegram':''+data['telegram']};let file=fileURLToPath(import.meta.url);watchFile(file,()=>{const _0x2125e7=_0x6be49a;unwatchFile(file),console[_0x2125e7(0x164)](chalk[_0x2125e7(0x17b)](_0x2125e7(0x15f))),import(file+'?update='+Date[_0x2125e7(0x172)]());});