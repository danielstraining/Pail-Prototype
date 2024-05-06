import '@styles/globals.css'
import { AuthProvider } from './Providers'

export const metadata = {
    title: 'Pail Sellers',
    description: 'Sell on the Pail platform.'
}

const RootLayout = ( { children }) => {
  return (
    <html lang='en'>
        <body>
            <AuthProvider>{children}</AuthProvider>
        </body>
    </html>
  )
}

export default RootLayout