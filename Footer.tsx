"use client";

import Link from "next/link";
import { Sparkles, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="#home" className="flex items-center gap-2 mb-6">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/88CDE6AC-F1FE-4569-A727-2389FABAEF2F-1766953904476.png?width=8000&height=8000&resize=contain" 
                  alt="ST Nettoyage Logo" 
                  className="h-10 w-auto brightness-0 invert"
                />
                <span className="text-2xl font-bold tracking-tight text-background">
                  ST Nettoyage
                </span>
              </Link>
              <p className="text-background/70 max-w-sm mb-6 leading-relaxed">
                Votre expert en propreté pour logements et locations courte durée à Lyon et ses environs. 
                Qualité, rigueur et professionnalisme à chaque intervention.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/stnettoyage" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/st_nettoyage/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#home" className="text-background/70 hover:text-primary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="#about" className="text-background/70 hover:text-primary transition-colors">À propos</Link>
              </li>
              <li>
                <Link href="#services" className="text-background/70 hover:text-primary transition-colors">Nos services</Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="text-background/70">
                  07 66 39 87 85
                </li>
                <li className="text-background/70">
                  st.nettoyagepro@gmail.com
                </li>
                <li className="text-background/70">
                  Lyon et ses environs
                </li>
              </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} ST Nettoyage. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-background transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
