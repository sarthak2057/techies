import './globals.css'

export const metadata = {
  title: 'Techies',
  description: 'Tech related courses for web dev learner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
