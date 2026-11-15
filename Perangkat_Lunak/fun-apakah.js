let handler = async (m, { command, text }) => replyt(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'].getRandom()}
  `)

handler.help = ['apakah <teks>?']
handler.tags = ['fun']
handler.command = /^apakah$/i

export default handler