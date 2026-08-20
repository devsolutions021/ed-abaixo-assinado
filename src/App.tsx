import { CookieConsent, Footer } from '@/components/layout';
import { PetitionPage } from '@/pages/petition/PetitionPage';

// App do subdomínio do abaixo-assinado: uma única página.
export function App() {
  return (
    <>
      <PetitionPage />
      <Footer />
      <CookieConsent />
    </>
  );
}
