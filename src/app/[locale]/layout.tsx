import { unstable_setRequestLocale } from "next-intl/server";

// Can be imported from a shared config
const locales = ['en', 'bn'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({children, params: { locale }}: { children: React.ReactNode; params: { locale: string };
}) {
  
  unstable_setRequestLocale(locale);
  
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}