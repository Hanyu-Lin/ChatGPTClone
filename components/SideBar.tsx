'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import NewChatButton from './NewChatButton'
import {ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline'
function SideBar() {
  const {data : session}= useSession();
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
      {session && ( 
        <button className=' logOutButton' onClick={() => signOut()}>
          <ArrowRightOnRectangleIcon className=' h-5 w-5'/>
          <p>Log Out</p>
        </button>
        )}   
    </div>
  )
}

export default SideBar