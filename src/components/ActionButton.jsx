import React from 'react'

const ActionButton = ({text, onclick}) => {
    return (
        <div className='ring ring-3 ring-[#1addba] p-3  font-bold hover:bg-[#1addba] rounded-md cursor-pointer' onClick={onclick}>
            {text}
        </div>
    )
}

export default ActionButton