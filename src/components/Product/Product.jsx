import React from 'react'
import { useState } from 'react'
import './Product.css'
export default function Product({imgSrc,index}) {
const [images, setimages] = useState({imgSrc:''})

  const viewedImg=(imgSrc) =>{
    console.log(imgSrc)
    setimages({imgSrc})

  }
const closeImg=()=>{
  setimages({imgSrc:''})


}
       



  return <>
  {
    images.imgSrc&&
    <div style={{
      width:'70%',
      height:'70vh',
      background:'black',
      position:'fixed',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      overflow:'hidden',
      zIndex:'40'
    
    }}>
      <button onClick={()=>closeImg()} style={{position:'absolute',top:'10px',right:'10px'}}>X</button>
<img src={images.imgSrc} style={{width:'100%',maxWidth:'100%',maxHeight:'100%' }
}/>
    </div>
  }
  <div className='col-span-1 text-center rounded-lg bg-white text-slate-950  overflow-hidden relative '>
          
            <img onClick={()=>viewedImg(imgSrc)} className="card" src={imgSrc}/>

          </div>
      
</>
}
