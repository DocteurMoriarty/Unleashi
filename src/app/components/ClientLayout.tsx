"use client";

import { usePathname } from "next/navigation";
import Headers from "./Headers";
import Footers from "./Footers";
import "./styles.css";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const pagesSansLayout = ["/testpage"];

  // Si la page est dans pagesSansLayout, ne pas afficher le layout
  if (pagesSansLayout.includes(pathname)) {
    return <>{children}</>;
  }

  // Pour toutes les autres pages, afficher le layout
  return (
    <>
      <header className="bg-gray-800 w-full bg-white shadow-md">
        <Headers />
      </header>
      <main className="flex-grow overflow-hidden bg-gradient-to-b from-blue-500 to-white h-screen flex items-center justify-center">
        {children}
      </main>
      <footer className="bg-gray-800 text-white w-full">
        <Footers />
      </footer>
    </>
  );
};

export default ClientLayout;
