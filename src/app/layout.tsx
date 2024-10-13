import Headers from "./components/Headers"
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
      <body>
        <header>
          <Headers/>
        </header>
        <main>
        {children}
        </main>
        <footer>
          footer
        </footer>
      </body>
    </html>
  )
}
