import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "DineDrop | A Food Delivery Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${raleway.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
