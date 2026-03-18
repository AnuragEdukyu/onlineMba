export const metadata = {
  title: "Edukyu Calculator Backend",
  description: "Backend testing mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}