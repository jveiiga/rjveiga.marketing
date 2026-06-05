// app/robots.ts
export default function robots() {
    return {
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://seusite.com.br/sitemap.xml",
    };
  }