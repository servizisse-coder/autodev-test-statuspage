export const metadata = {
  title: 'Autodev Status',
  description: 'Autodev test project - Status Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
