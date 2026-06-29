import HeaderMegaMenu from "@/components/landing/HeaderMegaMenu";
import Footer from "@/components/landing/Footer";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top-button";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderMegaMenu />
      <main className="min-h-screen pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)]">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
