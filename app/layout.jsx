import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Ayush Baranwal — Portfolio",
  description: "Full-Stack (MERN) Developer Portfolio of Ayush Baranwal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
