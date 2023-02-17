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
          {/* {sidebar} */}

          {/* {Notification - clientprovider} */}

          <div className='bg-darkgray flex-1'>
            {children}  
          </div>
        </div>
        
        </body>
    </html>
  )
}
