import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
