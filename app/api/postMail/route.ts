// app/api/postMail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as yup from 'yup';

const kanaWord = /^[ぁ-ゖァ-ヺ･-ﾟ\s]*$/;
const telephoneRegex = /^(0\d{1,4}-\d{1,4}-\d{4}|0\d{9,10})$/;
// 改行を含む値はメールヘッダー(subject / replyTo)に入れない
const noLineBreak = /^[^\r\n]*$/;

// クライアント側の検証に頼らず、サーバー側でも同じ条件 + 文字数上限で検証する
const mailSchema = yup
  .object({
    name: yup.string().strict().trim().required().max(100).matches(noLineBreak),
    kana: yup
      .string()
      .strict()
      .trim()
      .required()
      .max(100)
      .matches(kanaWord)
      .matches(noLineBreak),
    email: yup
      .string()
      .strict()
      .trim()
      .required()
      .max(254)
      .email()
      .matches(noLineBreak),
    tel: yup
      .string()
      .strict()
      .trim()
      .max(20)
      .test(
        'tel',
        (value) =>
          value === undefined || value === '' || telephoneRegex.test(value)
      ),
    text: yup.string().strict().trim().required().max(5000),
  })
  .noUnknown()
  .required();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  // 罠欄(honeypot)が埋まっていたらボットとみなし、送信せずに成功を装って破棄する
  if (
    typeof body === 'object' &&
    body !== null &&
    'website' in body &&
    body.website
  ) {
    return NextResponse.json(
      { message: 'Mail sent successfully' },
      { status: 200 }
    );
  }

  let data: yup.InferType<typeof mailSchema>;
  try {
    data = await mailSchema.validate(body, { stripUnknown: true });
  } catch {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  const { name, kana, email, tel = '', text } = data;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const toHostMailData = {
    // 送信元は SMTP アカウント自身にし、利用者のアドレスは返信先にだけ使う
    from: process.env.MAIL_USER,
    replyTo: email,
    to: process.env.MAIL_USER,
    subject: `【お問合せ】portfolioサイトから${name}様より`,
    text: `${text} send from ${email}`,
    html: `
      <p>【名前】</p>
      <p>${escapeHtml(name)}</p>
      <p>【フリガナ】</p>
      <p>${escapeHtml(kana)}</p>
      <p>【メールアドレス】</p>
      <p>${escapeHtml(email)}</p>
      <p>【電話番号】</p>
      <p>${escapeHtml(tel)}</p>
      <p>【メッセージ内容】</p>
      <p>${escapeHtml(text).replace(/\r?\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(toHostMailData);
    return NextResponse.json(
      { message: 'Mail sent successfully' },
      { status: 200 }
    );
  } catch {
    // 宛先・本文などの個人情報をログに残さないため、エラー内容は出力しない
    console.error('Failed to send mail');
    return NextResponse.json(
      { message: 'Failed to send mail' },
      { status: 500 }
    );
  }
}
