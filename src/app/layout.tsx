// Métadonnées pour le layout
import { Metadata } from 'next';
// src/app/layout.tsx
import './components/styles.css'; // Cela fonctionne si le fichier est dans 'src/app/components'


export const metadata: Metadata = {
  title: "Welcome to Unleashi",
  description:
    "This app is created so you can go wild and discuss everything!!! Here it's war, no one is stopping you from disagreeing so say it, to hell with politics, to hell with surveillance and to hell with devil self-control",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
