import React from 'react'
import NewChatButton from './NewChatButton'
function SideBar() {
  return (
    <div className='flex flex-col p-2 h-screen'>
      <div className='flex-1'>
        <div>
          {/* new chat button */}
          <NewChatButton/>

          <div>
            {/* select models */}
          </div>
            {/* the chat list, all the rows*/}
        </div>
      </div>    
    </div>
  )
}

export default SideBar