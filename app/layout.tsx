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
  title:
    "RJVEIGA MKT STUDIO - Marketing Político | Estratégia Digital para Candidatos",
  description:
    "Construímos presença digital para candidatos antes da campanha começar. Posicionamento, tráfego e conteúdo político estratégico.",
  keywords: [
    // Intenção principal
    "marketing político",
    "agência de marketing político",
    "produtora para candidatos",
    "produtora política",

    // Serviços específicos
    "assessoria de comunicação política",
    "consultoria eleitoral digital",
    "gestão de redes sociais para candidatos",
    "tráfego pago para campanha eleitoral",
    "conteúdo político para redes sociais",
    "estratégia digital para vereador",
    "estratégia digital para deputado",

    // Termos de descoberta
    "agência eleitoral",
    "marketing para campanha política",
    "como fazer campanha no Instagram",
    "produtora audiovisual política",
  ],
  authors: [{ name: "RJVEIGA MKT STUDIO" }],
  openGraph: {
    title: {
      default:
        "RJVEIGA MKT STUDIO | Agência de Marketing Político e Produtora para Candidatos",
      template: "%s | RJVEIGA MKT STUDIO",
    },
    description:
      "Agência de marketing político e produtora audiovisual para candidatos. Estratégia digital, tráfego eleitoral e conteúdo para vereadores, deputados e prefeitos. São Paulo e todo o Brasil.",
    url: "https://rjveiga.marketing",
    siteName: "RJVEIGA MKT STUDIO",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default:
        "RJVEIGA MKT STUDIO | Agência de Marketing Político e Produtora para Candidatos",
      template: "%s | RJVEIGA MKT STUDIO",
    },
    description:
      "Agência de marketing político e produtora audiovisual para candidatos. Estratégia digital, tráfego eleitoral e conteúdo para vereadores, deputados e prefeitos. São Paulo e todo o Brasil.",
    images: ["/og-image.jpg"],
  },
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "RJVEIGA MKT STUDIO",
              description:
                "Agência especializada em marketing político e produção audiovisual para candidatos e campanhas eleitorais.",
              url: "https://rjveiga.marketing",
              telephone: "+5511915181487",
              email: "rjveiga.marketing@gmail.com",
              areaServed: {
                "@type": "Country",
                name: "Brasil",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Marketing Político",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Assessoria de Comunicação Política",
                      description:
                        "Estratégia de posicionamento, narrativa e presença digital para candidatos.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Produção Audiovisual para Campanhas",
                      description:
                        "Produção e edição de vídeos institucionais e conteúdo para redes sociais políticas.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gestão de Tráfego Eleitoral",
                      description:
                        "Campanhas de tráfego pago segmentadas para eleitores indecisos.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gestão de Redes Sociais Políticas",
                      description:
                        "Criação e gestão de conteúdo orgânico para Instagram, YouTube e outras plataformas.",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.instagram.com/rjveiga.marketing/",
                "https://www.linkedin.com/in/rjveiga/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
