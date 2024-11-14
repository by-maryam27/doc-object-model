"use client"

import { useState } from "react";

export default function Home(){
   
  const [count , setCount] = useState(0)

  function Increament(){
    setCount(count + 1)
  }

  function Decreament(){
    setCount(count - 1)
  }

return(
  <>
  <div className="flex justify-center mt-72 space-x-6 text-black">
  <button className="bg-pink-400 hover:bg-pink-600 py-4 px-7 rounded-lg font-bold font-sans text-xl"
  onClick={Increament}
  >Increament</button>

  <button className="bg-purple-400 hover:bg-purple-600 py-4 px-7 rounded-lg font-bold font-sans text-xl"
 onClick={Decreament}
  >Decreament</button>
    </div> 
<div className="flex justify-center text-2xl font-bold font-sans mt-14">
<h2 className={count >=10 ? 'text-pink-700'
 : 'text-purple-700' }> Count:{count}</h2>
</div>
</>
)

}