import { Markup } from 'telegraf';

export default async (ctx) => {
    const imageUrl = "https://t.me/OpenUniverse01/20"; 
    const supportUrl = "https://t.me/Pro_Support_All_Time_bot";
    const welcomeText = `<b>PRO MULTIFUNCTIONAL BOT</b>

A powerful all-in-one bot with the following services:

<b>Barcode Generator</b>
Generate barcodes from any text or number.

<b>QR Code Generator</b>
Convert any text or link into a QR code.

<b>URL Shortener</b>
Shorten long URLs instantly.

<b>English Dictionary</b>
Get definitions for any English word.

<b>Password Generator</b>
Generate strong, secure passwords.

<b>IP Geolocation</b>
Look up location details for any IP address.

<b>Text to Speech</b>
Convert any text into an audio message.

Use /help to see all commands.`;

    try {
        await ctx.replyWithPhoto(imageUrl, {
            caption: welcomeText,
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: [[Markup.button.url('SUPPORT', supportUrl)]] }
        });
    } catch (e) {
        await ctx.reply(welcomeText, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: [[Markup.button.url('SUPPORT', supportUrl)]] }
        });
    }
};
