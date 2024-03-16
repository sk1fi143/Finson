import '../sass/app.scss';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


export const metadata = {
  title: "Finson Property",
  description: "production by WEKS (telegram: @sk1fir)",
};

export default function RootLayout({children}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
