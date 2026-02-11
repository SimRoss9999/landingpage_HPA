export const metadata = {
  title: 'Holistic Profile Analysis',
  description: 'Entdecke, wer du wirklich bist - Über 20 Analysesysteme vereint in einem personalisierten Bericht',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
