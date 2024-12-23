import React, { useState } from 'react'

const App = () => {
  const [add, setAdd] = useState(false)
  const [sending, setSending] = useState(false)
  const FriendRequest=()=>{
    if(!add){
      setSending(true);
      setTimeout(() => {
        setSending(false);
        setAdd(!add)
      }, 1000);
    }
      else{
        setAdd(false);
      }

console.log(!add);
  }
  return (
    <div className='p-4 h-screen w-full flex justify-center items-center '>

      <div className='px-2 py-4 w-1/5 text-center border-2 bg-gray-300 rounded border-black '>
        <div className='w-60 py-2   h-60 mx-auto overflow-hidden'>
          <img 
          className='w-full h-full object-center'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRagxotQ0c-jW_uzUJEZvvNRvuviv92JS-Q&s" alt="" />
           </div>
        <h1 className='text-black text-2xl font-semibold'>Mark Manson</h1>
        <p className='bio text-lg text-black mt-4'>Hey i am new to instgram</p>
      <button 
      onClick={()=>{
        FriendRequest()
      }}
      className={`w-52 overflow-hidden px-4 py-2 mt-10 rounded-md outline-none text-2xl font-semibold transition-all border-2 ${      sending? "bg-blue-300 text-gray-200" : add? "bg-white  border-blue-400 text-blue-400 shadow-md " : "bg-blue-400 text-white"}`}> { sending ?"Sending..." : add ? "Remove Friend" : "Sent Request"}</button>
      </div>
    </div>
  )
}

export default App