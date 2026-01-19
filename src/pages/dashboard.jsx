import React, { useState } from "react"
import {
  Phone,
  Plus,
  Search,
  Smile,
  User,
  Video,
  Bell,
  Settings
} from "lucide-react"


const Dashboard = () => {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])



  const handleSendMessage = () => {
    if (!message.trim()) return

    setMessages((prev) => [
      ...prev,
      { text: message, timestamp: new Date() },
    ])
    setMessage("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage()
  }


  return (
    <div className='flex'>

      {/*                      THis is the Server Side Bar                         */}
      <div className='w-max h-screen bg-gray-900'>
        <div className="
         sm:flex
        w-16 md:w-20
        bg-gray-900
        flex-col items-center
        py-3 space-y-2
      ">
        {["bg-red-600","bg-orange-500","bg-lime-400","bg-cyan-400",]
        .map((color, index) => (
          <div
            key={index}
            className={`${color} w-10 h-10 md:w-12 md:h-12 rounded-2xl
              hover:rounded-xl transition-all duration-200 cursor-pointer`}
          />
        ))}
      </div>

      </div>
      {/*             This is the Chats Side bar            */}
        <div className="
        md:flex
        w-56 lg:w-100
        bg-purple-950
        flex-col
      ">
        <div className="h-12 px-4 flex items-center border-b border-purple-900 text-center">
          <span className="text-orange-500 font-semibold">
            Direct Messages
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="px-2 py-1.5 text-gray-400 text-xs font-semibold uppercase">
            Direct Messages
          </div>
        </div>
    </div>


        <div className='flex flex-col w-full h-screen'>
          <div className='flex w-full bg-purple-950 h-max justify-center items-center'>

        {/* This is the top bar with a search input and settings Icons */}

      <div className="relative w-full h-13 flex items-center">
          <Search className="w-6 h-6 text-purple-400 absolute left-7 top-1/2 -translate-y-1/2 " />
          <input
          type="text"
          className="
             bg-purple-950 border border-purple-800 rounded-full h-10
              pl-9 pr-3 py-1.5 text-md w-full ml-5 font-bold 
              focus:outline-none focus:border-purple-600 text-white/60
            "
          />
        </div>

        <div className='flex gap-5 ml-5 mr-5'>
          <Bell className="hidden md:block w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
          <User className="hidden md:block w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
          <Settings className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
        </div>


      {/* The Top bar with the call options and username an icon */}


      </div>
          <div className='flex flex-col h-full w-full'>
      <div className='flex justify-between h-max w-full bg-purple-900'>
        <div className="h-12 px-3 sm:px-4 flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-700 rounded-full flex items-center justify-center">
              <User className="w-7 h-7 text-orange-500" />
            </div>
            <span className="text-orange-500 font-semibold text-sm sm:text-base">
              Username
            </span>
          </div>
          </div>
          <div className='flex items-center justify-center gap-3 mr-5'>
            <Video className="sm:block w-7 h-7 text-gray-400 hover:text-white cursor-pointer" />
            <Phone className="hidden sm:block w-7 h-7 text-gray-400 hover:text-white cursor-pointer" />
          </div>


          {/* This is the container with the messages */}

    </div>
      <div className='h-full'>


        



         {messages.map((msg, index) => (
            <div key={index} className="mb-4 flex items-start gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-700 rounded-full flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-purple-300" />
              </div>

              <div className="bg-violet-900 p-2 rounded-2xl max-w-75">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">You</span>
                  <span className="text-xs text-gray-400">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <p className="text-sm text-gray-200 mt-1 wrap-break-word max-w-[75vw] sm:max-w-none">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}







      </div>
      <div className="p-3 sm:p-4 border-t border-purple-900">
          <div className="relative">
            <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              <Plus className="w-5 h-5" />
            </button>

            <input
              type="text"
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="
                w-full bg-purple-900 bg-opacity-50
                rounded-lg
                pl-10 sm:pl-12
                pr-10 sm:pr-12
                py-2.5 sm:py-3
                text-sm
                focus:outline-none
                focus:ring-2 focus:ring-purple-600 text-white
                placeholder:text-[#a421ef]
                
              "
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300">
              <Smile className="w-5 h-5" />
            </button>
          </div>
    </div>
    </div>
        </div>
        
    </div>
    
  )
}

export default Dashboard