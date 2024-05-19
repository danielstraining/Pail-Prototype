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
            <AuthProvider>
              <div className='absolute left-0 right-0 top-0 h-fit bg-pail_cream'>{children}</div>
            </AuthProvider>
        </body>
    </html>
  )
}

export default RootLayout