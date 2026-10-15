import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'X SIMULADOS - Plataforma 100% Gratuita de Simulados do Brasil',
  description: 'Pratique com simulados gratuitos para ENEM, SARESP, Provão Paulista, OBMEP, OBA, FUVEST e Concursos Públicos. Sem cadastro, cronômetro oficial e cálculo TRI.',
  openGraph: {
    title: 'X SIMULADOS - Plataforma 100% Gratuita de Simulados do Brasil',
    description: 'Pratique com simulados gratuitos para ENEM, SARESP, Provão Paulista, OBMEP, OBA, FUVEST e Concursos Públicos. Sem cadastro, cronômetro oficial e cálculo TRI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X SIMULADOS - Simulados Gratuitos do Brasil',
    description: 'Simulados oficiais e atualizados para ENEM, SARESP, Provão Paulista, OBMEP, OBA e Concursos.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
