import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  nama: z.string().min(2, "Nama terlalu pendek"),
  instagram: z.string().min(1, "Instagram wajib diisi"),
  email: z.string().email("Format email salah"),
  whatsapp: z.string().min(9, "Nomor WA minimal 9 digit").regex(/^[0-9]+$/, "WA harus angka"),
  alamat: z.string().min(10, "Alamat terlalu pendek"),
  kota: z.string().min(3, "Nama kota tidak valid"),
  kodepos: z.string().min(5, "Kode pos minimal 5 digit"),
  fax: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.fax) {
      console.log("Bot detected & blocked! 🤖");
      return NextResponse.json({ success: true });
    }

    const validation = formSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Data tidak valid", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { nama, email, whatsapp, alamat, kota, kodepos, instagram } = validation.data;

    const data = await resend.emails.send({
      from: 'FitLab Form <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL as string],
      subject: `🔥 Request Sample: ${nama}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h1 style="color: #0B897A;">Order Sampel Gratis Masuk!</h1>
          <p>Ada request pengiriman sampel FitLab baru.</p>
          <hr />
          <h3>Data Pengiriman:</h3>
          <ul>
            <li><strong>Nama:</strong> ${nama}</li>
            <li><strong>Instagram:</strong> ${instagram}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>WhatsApp:</strong>${whatsapp}</li>
            <li><strong>Alamat:</strong> ${alamat}</li>
            <li><strong>Kota:</strong> ${kota}</li>
            <li><strong>Kode Pos:</strong> ${kodepos}</li>
          </ul>
          <hr />
          <p><strong>Status Pembayaran:</strong> GRATIS </p>
          <p style="color: #888; font-size: 12px;">Email ini dikirim otomatis dari Landing Page FitLab.</p>
        </div>
      `,
    });

    return NextResponse.json(data);

  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: "Gagal memproses permintaan" }, { status: 500 });
  }
}