import SideBar from '../components/SideBar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className='flex'>
          <div className='bg-customGraySideBar max-w-xs h-screen overflow-y-auto md:min-w-[15rem]'>
            <SideBar/>  
          </div>

          {/* {Notification - clientprovider} */}

          <div className='bg-customGrayMain flex-1'>
            {children}  
          </div>
        </div>
        
        </body>
    </html>
  )
}
