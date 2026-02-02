import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: 'ST Nettoyage | Propreté Professionnelle & Airbnb',
  description: 'ST Nettoyage - Service professionnel de ménage pour logements et locations courte durée. Qualité, rigueur et efficacité.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="209932de-c83b-46ba-94ad-f61cd96ffa34"
        />
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
