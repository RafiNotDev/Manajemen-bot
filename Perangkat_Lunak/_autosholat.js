import fetch from "node-fetch"
import fs from "fs"

export async function before(m) {
 let chat = global.db.data.chats[m.chat]
 if (chat.autoSholat) {
    this.autosholat = this.autosholat ? this.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
    let data = await (await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${global.daerah}&country=Indonesia&method=5`)).json();
    let Sholat = data.data.timings;
    if (!data.status == "OK") return
    let jadwalSholat = {
    Subuh: Sholat.Fajr,
    Dzuhur: Sholat.Dhuhr,
    Ashar: Sholat.Asr,
    Maghrib: Sholat.Maghrib,
    Isya: Sholat.Isha
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            this.autosholat[id] = [
                replyt(`*Peringatan!!*\nWaktu Sholat ${sholat} Udah Masuk Untuk Area ${daerah} Dan Sekitarnya\nSelamat Menunaikan Ibadah Sholat`),
                setTimeout(async () => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }
  }
}
export const disabled = false