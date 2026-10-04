import "./globals.css";

export const metadata = {
  title: "Foanest",
  description: "Real Estate Development & Investment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
