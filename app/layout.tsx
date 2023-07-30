import "./globals.css";
import { M_PLUS_1p } from "next/font/google";
import { GoogleAnalytics } from "./_components/google-analytics";
import { Layout } from "./_components/layouts";
import { generateMetadata } from "./_libs/generate-metadata";

const mPlus1P = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
const baseMetadata = generateMetadata();
export const metadata = {
  ...baseMetadata,
  title: {
    default: baseMetadata.title,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://use.typekit.net/wkk8rlj.css" rel="stylesheet" />
        <GoogleAnalytics />
      </head>
      <body className={mPlus1P.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
