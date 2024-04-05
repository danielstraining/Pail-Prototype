import '@styles/globals.css'

export const metadata = {
    title: 'Pail',
    description: 'Stake with other customers to multiply your buying power.'
}

const RootLayout = ( { children }) => {
  return (
    <html lang='en'>
        <body>
            {children}
        </body>
    </html>
  )
}

export default RootLayout