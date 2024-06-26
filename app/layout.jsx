import '@styles/globals.css'
import { AuthProvider } from './Providers'
import { Footer } from '@components/Footer'

export const metadata = {
    title: 'Pail Sellers',
    description: 'Sell on the Pail platform.'
}

const RootLayout = ( { children }) => {
  return (
    <html lang='en'>
        <body className='font-palanquin text-pail_navy'>
            <AuthProvider>
              <div className='absolute left-0 right-0 top-0 h-fit bg-pail_cream -z-50'>
                {children}
                <Footer/>
              </div>
              
            </AuthProvider>
        </body>
    </html>
  )
}

export default RootLayout