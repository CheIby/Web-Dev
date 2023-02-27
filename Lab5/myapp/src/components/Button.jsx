import React from 'react'

export const Button = (props) => {
    const voteUnvote=()=>{
        props.vote()
    }

  return (
    <div className='p-2 bg-slate-300 border-black border-2 rounded-lg cursor-pointer h-fit' onClick={voteUnvote}>
        {props.type}
    </div>
  )
}
