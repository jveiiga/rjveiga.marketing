import type { Metadata } from "next";
import { Roboto, Montserrat, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "RJVEIGA MKT STUDIO - Marketing Político | Estratégia Digital para Candidatos",
  description:
    "Construímos presença digital para candidatos antes da campanha começar. Posicionamento, tráfego e conteúdo político estratégico.",
  keywords: [
    "marketing político",
    "campanha eleitoral digital",
    "assessoria política",
    "tráfego para candidatos",
  ],
  authors: [{ name: "RJVEIGA MKT STUDIO" }],
  openGraph: {
    title: "RJVEIGA MKT STUDIO - Marketing Político",
    description: "Estratégia digital que transforma candidatos em eleitos.",
    url: "https://rjveiga.marketing",
    siteName: "RJVEIGA MKT STUDIO",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJVEIGA MKT STUDIO - Marketing Político",
    description: "Estratégia digital para candidatos.",
    images: ["/og-image.jpg"],
  },
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "RJVEIGA MKT STUDIO - Marketing Político",
      telephone: "+5511915181487",
      email: "rjveiga.marketing@gmail.com",
      url: "https://rjveiga.marketing",
      areaServed: "BR",
    }),
  }}
/>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${montserrat.variable} ${poppins.variable} ${openSans.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
