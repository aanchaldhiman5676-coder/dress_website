import React from 'react';
import { kidsimg } from '../assets/assets.js';
import { mensimg } from '../assets/assets.js';
import { picture } from "../assets/assets.js"
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navi = useNavigate();
  const click = () => {
    navi("/Womens")
  }
  const clk = () => {
    navi('/mens')
  }
  const kiid = ()=>{
    navi("/kids")
  }
  return (
    <>

      <div className='container-fluid'>
        <h1 className="text-center text-2xl font-bold my-4 hover:underline "><i>WOMENS CLOTHES</i></h1>

        <div className="flex flex-wrap justify-center gap-5 px-5 bg-slate-800 py-5">
          {[picture.dr1, picture.dr2, picture.dr3, picture.dr4].map((img, index) => (
            <div key={index} className="bg-white rounded w-48 p-3 flex flex-col items-center">
              <img src={img} alt={`${index}`} className="w-full h-60 object-cover rounded" />
              <button onClick={click} className="mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                ADD
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <h1 className='text-center text-2xl font-bold my-4 hover:underline'><i>MENS CLOTHES</i></h1>
        <div className='flex flex-wrap justify-center gap-5 px-5 bg-slate-800  py-5'>
          {[mensimg.m1, mensimg.m2, mensimg.m3, mensimg.m4].map((img, index) => (
            <div key={index} className=' bg-white rounded p-3 flex flex-col items-center'>
              <img src={img} alt={`${index}`} className='w-full h-60 object-cover rounded' />
              <button onClick={clk} className='bg-blue-600 text-white rounded mt-3 px-4 py-1 hover:bg-blue-700'>Add</button>
            </div>
          ))}

        </div>
      </div>
      <div className="container-fluid">
      <h1 className='text-center text-2xl font-bold my-4 hover:underline'><i>KIDS CLOTHES</i></h1>
      <div className=" flex flex-wrap justify-center gap-5 px-5 bg-slate-800 py-5">
       {[kidsimg.k1,kidsimg.k2,kidsimg.k3,kidsimg.k4].map((img,index)=>(
        <div key={index} className='bg-white rounded p-3 flex flex-col items-center'>
          <img src={img} alt={`${index}`} className = 'w-full h-60 object-cover rounded'/>
              <button onClick={kiid} className='bg-blue-600 text-white rounded mt-3 px-4 py-1 hover:bg-blue-700'>Add</button>

        </div>
       ))}
      </div>
      </div>

    </>
    )
}

      export default Home
