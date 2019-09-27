const Discord = require('discord.js')

exports.run = async (client,message,args) => {
        const embed = new Discord.RichEmbed()
                .setTitle("**Key Satin Almakmi İstiyorsun Buyur Bilgilerim**")
                .setThumbnail("https://media.giphy.com/media/Q5vdHqiMrgmDXUrVnm/giphy.gif")
                .setColor("#FF8C00")
                .setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
                .addField("**Banka Adı**\n", "_**Garanti BBVA**_")
                .addField("**Hesap numarasi:**\n", "_**6852670**_")
                .addField("**Sube Kodu**\n", "_**424**_")
                .addField("**İsim Soyad**\n", "_**F K**_")
                .addField("**İBAN NUmarası**\n", "_**TR350006200042400006852670**_")
		.addField("**KEY SATİŞ SİTESİ**\n", "_**https://www.sonteklif.com/dukkan/ferhat0113**_")
                .setTimestamp()
        message.channel.send({embed})
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['bankabilgileri','banka'],
    permLevel: 0,
    kategori: 'kullanıcı'
}

exports.help = {
    komut: 'banka',
    aciklama: 'Bu bir banka komuttur.',
    kullanim: 'banka'
}