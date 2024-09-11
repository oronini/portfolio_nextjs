// app/api/postMail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, text, kana, tel } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const toHostMailData = {
    from: email,
    to: process.env.MAIL_USER,
    subject: `【お問合せ】portfolioサイトから${name}様より`,
    text: `${text.replace(/\n/g, '\n')} send from ${email}`,
    html: `
      <p>【名前】</p>
      <p>${name}</p>
      <p>【フリガナ】</p>
      <p>${kana}</p>
      <p>【メールアドレス】</p>
      <p>${email}</p>
      <p>【電話番号】</p>
      <p>${tel}</p>
      <p>【メッセージ内容】</p>
      <p>${text.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(toHostMailData);
    return NextResponse.json(
      { message: 'Mail sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to send mail' },
      { status: 500 }
    );
  }
}
