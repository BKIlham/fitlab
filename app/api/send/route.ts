import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const api = process.env.RESEND_API_KEY;
const email = process.env.MY_EMAIL;

const resend = new Resend(api);
console.log(api);
console.log(email);
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, whatsapp, alamat, kota, kodepos } = body;

    const data = await resend.emails.send({
      from: 'FitLab Form <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL as string],
      subject: `🔥 Pesanan Sampel Baru: ${nama}`,
      html: `
        <h1>Order Sampel Gratis Masuk!</h1>
        <p>Ada user baru yang minta dikirim sampel FitLab.</p>
        <hr />
        <h3>Data Pengiriman:</h3>
        <ul>
          <li><strong>Nama:</strong> ${nama}</li>
          <li><strong>WhatsApp:</strong> ${whatsapp}</li>
          <li><strong>Alamat:</strong> ${alamat}</li>
          <li><strong>Kota:</strong> ${kota}</li>
          <li><strong>Kode Pos:</strong> ${kodepos}</li>
        </ul>
        <hr />
        <p>Segera proses dan hubungi user via WhatsApp.</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}