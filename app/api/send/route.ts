import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, email, whatsapp, alamat, kota, kodepos, instagram } = body;

    const data = await resend.emails.send({
      from: 'FitLab Form <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL as string],
      subject: `🔥 Request Sample: ${nama}`,
      html: `
        <h1>Order Sampel Gratis Masuk!</h1>
        <p>Ada request pengiriman sampel FitLab baru.</p>
        <hr />
        <h3>Data Pengiriman:</h3>
        <ul>
          <li><strong>Nama:</strong> ${nama}</li>
          <li><strong>Instagram:</strong> ${instagram}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>WhatsApp:</strong> ${whatsapp}</li>
          <li><strong>Alamat:</strong> ${alamat}</li>
          <li><strong>Kota:</strong> ${kota}</li>
          <li><strong>Kode Pos:</strong> ${kodepos}</li>
        </ul>
        <hr />
        <p><strong>Status Pembayaran:</strong> GRATIS</p>
        <p>Segera proses pengiriman.</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}