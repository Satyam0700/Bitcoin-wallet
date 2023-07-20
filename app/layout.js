import './globals.css'

export const metadata = {
  title: 'Wallet',
  description: 'Daily Wallet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
