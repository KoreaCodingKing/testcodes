export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no" style={{ height: "100%" }}>
      <head></head>
      <body style={{ margin: "0px" }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
