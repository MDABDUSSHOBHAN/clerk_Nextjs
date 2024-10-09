import { ClerkLoaded, ClerkLoading, ClerkProvider, SignIn, SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs'
import './globals.css'
import Navber from './../../comonents/Navber';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <ClerkProvider>

<html lang="en">
        <body>
          <header>
    <ClerkLoading>
    <div className='flex items-center justify-center h-screen text-2xl'>
      LOADING....
    </div>
    </ClerkLoading>


    <SignOutButton>
      <SignInButton/>
    </SignOutButton>


      <SignInButton>
        <UserButton/>
      </SignInButton>
      

    
          </header>
          <ClerkLoaded>
          <div className='max-w-6xl mx-auto'>
              <div className='flex flex-col h-screen'>
                <main>

         
      <Navber/>
                {children}
                </main>
              

              </div>

            </div>



          </ClerkLoaded>
          
            
          {/*  */}
         
        </body>
      </html>




  </ClerkProvider>
     
  )
}