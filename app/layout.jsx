import '@styles/globals.css'

export const metadata = {
    title: 'Pail Sellers',
    description: 'Sell on the Pail platform.'
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