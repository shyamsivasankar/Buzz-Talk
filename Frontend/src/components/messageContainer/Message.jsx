import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-12 rounded-full'>
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
            </div>
        </div>
        <div class="chat-bubble text-white bg-blue-500">It was said that you would, destroy the Sith, not join them.</div>
        <time className="text-xs opacity-50">12:45</time>
    </div>
  )
}

export default Message
