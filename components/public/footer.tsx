'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { Mail, MapPin, Phone, Share2, MessageCircle, Heart } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              PSTC
            </h3>
            <p className="text-sm text-muted-foreground">
              Working towards sustainable development and social change across South Asia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.about')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/who-we-are" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.programs')}
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.impact')}
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.publications')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events-media" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.jobs')}
                </Link>
              </li>
              <li>
                <Link href="/ucon" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.ucon')}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex gap-2 items-start text-muted-foreground">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="mailto:contact@pstc.org" className="hover:text-primary transition-colors">
                  contact@pstc.org
                </a>
              </li>
              <li className="flex gap-2 items-start text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="tel:+880XXXX" className="hover:text-primary transition-colors">
                  +880-2-XXXX-XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 PSTC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Heart className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
