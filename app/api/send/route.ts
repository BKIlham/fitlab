import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

const formSchema = z.object({
  nama: z.string()
    .min(2, "Nama terlalu pendek")
    .max(60, "Nama terlalu panjang")
    .refine(s => !/[<>/\{\}]/.test(s), "Nama mengandung karakter terlarang")
    .refine(s => !/(http|https|www|\.com)/i.test(s), "Dilarang memasukkan link di Nama"),

  instagram: z.string()
    .min(1, "Instagram wajib diisi")
    .max(30, "Username terlalu panjang")
    .regex(/^[a-zA-Z0-9._@]+$/, "Format username Instagram tidak valid"),

  email: z.string()
    .email("Format email salah")
    .max(100, "Email terlalu panjang"),

  whatsapp: z.string()
    .min(9, "Nomor WA minimal 9 digit")
    .max(15, "Nomor WA maksimal 15 digit")
    .regex(/^[0-9]+$/, "WA harus berupa angka saja"),

  alamat: z.string()
    .min(10, "Alamat terlalu pendek (min 10 karakter)")
    .max(300, "Alamat terlalu panjang (max 300 karakter)")
    .refine(s => !/(http|https|www|\.com)/i.test(s), "Dilarang memasukkan link di Alamat"),

  kota: z.string()
    .min(3, "Nama kota terlalu pendek")
    .max(50, "Nama kota terlalu panjang")
    .refine(s => !/[<>/]/.test(s), "Karakter tidak valid"),

  kodepos: z.string()
    .length(5, "Kode pos harus 5 digit")
    .regex(/^[0-9]+$/, "Kode pos harus angka"),

  fax: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.fax) {
      console.log("Bot blocked 🤖");
      return NextResponse.json({ success: true });
    }

    const validation = formSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Data tidak valid", details: validation.error.format() },
        { status: 400 }
      );
    }

    const raw = validation.data;

    const cleanData = {
      nama: escapeHtml(raw.nama),
      instagram: escapeHtml(raw.instagram),
      email: escapeHtml(raw.email),
      whatsapp: escapeHtml(raw.whatsapp),
      alamat: escapeHtml(raw.alamat),
      kota: escapeHtml(raw.kota),
      kodepos: escapeHtml(raw.kodepos),
    };

    const data = await resend.emails.send({
      from: 'FitLab Form <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL as string],
      subject: `🔥 Request Sample: ${cleanData.nama}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h1 style="color: #0B897A;">Order Sampel Gratis Masuk!</h1>
          <p>Ada request pengiriman sampel FitLab baru.</p>
          <hr />
          <h3>Data Pengiriman:</h3>
          <ul>
            <li><strong>Nama:</strong> ${cleanData.nama}</li>
            <li><strong>Instagram:</strong> ${cleanData.instagram}</li>
            <li><strong>Email:</strong> ${cleanData.email}</li>
            <li><strong>WhatsApp:</strong>${cleanData.whatsapp}</li>
            <li><strong>Alamat:</strong> ${cleanData.alamat}</li>
            <li><strong>Kota:</strong> ${cleanData.kota}</li>
            <li><strong>Kode Pos:</strong> ${cleanData.kodepos}</li>
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
    return NextResponse.json({ error: "Terjadi kesalahan pada server." }, { status: 500 });
  }
}