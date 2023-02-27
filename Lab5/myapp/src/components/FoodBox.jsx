import React, { useState } from 'react'
import { Button } from './Button'

export const FoodBox = (props) => {
  const [vote,setVote]=useState(0)
  const increaseVote =()=>{
    if (vote === 10){
      alert("Cannot Vote")
    }else{
      setVote(vote+1)
    }
  }
  const decreaseVote =()=>{
    if (vote === 0){
      alert("Cannot Unvote")
    }else{
      setVote(vote-1)
    }
  }
  
  return (
    <div className='w-[100%] bg-amber-200 border-solid border-black border-4 rounded-lg p-6 mb-5'>
      <div className='flex'>
        <div className=''>
          <h1 className='font-extrabold text-3xl my-4'>{props.kind}</h1>
          <h3 className='font-bold text-xl mb-4'>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className='w-[150%]'>
          <img src={props.img} alt="" />
        </div>
      </div>
      <div className='flex justify-center items-center mt-2'>
          <Button type={"Click to Vote"} vote={increaseVote}/>
          <div className='px-2 py-4 bg-green-500 text-purple-700 rounded-lg mx-5 font-extrabold border-black border-2 text-3xl' >
            <h1>{vote===0?"MIN":vote===10?"MAX":vote}</h1>
          </div>
          <Button type={"Click to Unvote"} vote={decreaseVote}/>
      </div>
    </div>
  )
}
