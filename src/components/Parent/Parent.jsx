import React, { useState } from 'react'
import Child from '../Child/Child'


export default function Parent() {
   const[userName,setUserName] = useState('Ahmed')
  return < div className='shadow p-4 m-4 bg-red-700'>
    <h1>Parent</h1>
  <h2>{userName}</h2>
  <Child userName={userName}/>
  <button onClick={()=>setUserName("amgad")}>change name</button>
  </div>
}
