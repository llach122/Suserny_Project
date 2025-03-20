// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import WhatsAppBubble from './components/WhatsAppBubble';


export const metadata: Metadata = {
  title: 'REFLEJO - Espejos de Diseño',
  description: 'Transformamos espacios con espejos de diseño exclusivo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <About/>
        <Contact 
          phone="+56 **** ****"
          email="info@reflejo.com"
          address="Calle Principal 123, Madrid"
        />
         <WhatsAppBubble phoneNumber="5612345678" />
        <Footer company="SUSERNYS" insta="****" twit="***" face="***"/>
       
      </body>
      
    </html>
  );
}