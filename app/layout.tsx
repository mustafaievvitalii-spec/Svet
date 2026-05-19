import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocExpert — Відновлення посвідчення водія дистанційно",
  description:
    "Юридичний супровід для українців за кордоном: верифікація посвідчення, внесення в Дію, перевипуск та доставка документів у Європу.",
  openGraph: {
    title: "DocExpert — дистанційне відновлення посвідчення водія",
    description:
      "Офіційна процедура, робота через державні реєстри, супровід клієнтів по Європі.",
    type: "website",
    locale: "uk_UA",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
