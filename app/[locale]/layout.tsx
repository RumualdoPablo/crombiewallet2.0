import './globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { NextIntlClientProvider } from 'next-intl';
// import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar';
import ToasterAlert from '@/components/ToasterAlert'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'CrombieWallet - Manage your expenses',
  description: 'Generated by create next app',
}

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }]
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string; // Cambia el tipo si locale no es una cadena
  };
}


export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    console.log(error);
    // notFound()

  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthContextProvider>
            <Navbar />
            <ToasterAlert />
            {children}
          </AuthContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
