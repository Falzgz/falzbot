let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkom [082113034413]
│ • Gopay  [082113034413]
│ • Dana  [082113034413]
│ • Saweria  [https://saweria.co/thesadboy01]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6289518022967
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler