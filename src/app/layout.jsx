import "./globals.css";

export const metadata = {
  title: "Greek Epic Gods - CRUD com API Pública",
  description:
    "Projeto de CRUD utilizando uma API pública sobre deuses gregos de Epic: The Musical.",
  icons: {
    icon: "/icons/icons8-zeus-96.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
