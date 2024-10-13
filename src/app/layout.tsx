import Headers from "./components/Headers"
import Footers from "./components/Footers"

export const metadata = {
  title: 'Welcome to Unleashi',
  description: 'This app is created so you can go wild and discuss everything!!! Here it\'s war, no one is stopping you from disagreeing so say it, to hell with politics, to hell with surveillance and to hell with devil self-control',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-800 w-full bg-white shadow-md">
          <Headers />
        </header>
        <main className="flex-grow overflow-hidden bg-gradient-to-b from-blue-500 to-white h-screen flex items-center justify-center">
          {children}
        </main>
        <footer className="bg-gray-800 text-white w-full">
          <Footers />
        </footer>
      </body>
    </html>
  )
}
