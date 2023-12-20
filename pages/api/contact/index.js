import fetch from 'node-fetch';

const botToken = process.env.NEXT_TELEGRAM_BOT_TOKEN;
const myChatId = process.env.NEXT_TELEGRAM_CHAT_ID;

const sendTelegramMessage = async text => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: myChatId,
          text: text,
        }),
      },
    );

    const data = await response.json();
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const text = `
      New message from your portfolio website:
      Name: ${name}
      Email: ${email}
      Theme: ${subject}
      Message: ${message}
    `;

    await sendTelegramMessage(text);

    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
