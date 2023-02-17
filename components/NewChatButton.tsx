import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'

function NewChatButton() {
  return (
    <div className='border border-gray-700 chatRow'>
      <PlusIcon className='h-4 w-4'></PlusIcon>
      <p> New Chat</p>
    
    </div>
  )
}

export default NewChatButton