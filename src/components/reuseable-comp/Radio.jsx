import React, { useState } from 'react'
import { SelectStack } from './SelectStack'

export function Radio({ currentSelected, setCurrentSelected }) {
  function handleSelected(id) {
    setCurrentSelected(id !== currentSelected ? id : {})
  }

  return <>
    <div className="grid grid-cols-2 gap-[10px]">
      {SelectStack.map((select) => (
        <div className={`flex flex-col py-[32px] px-[16px] gap-[16px] items-center border-[1px] border-fb rounded-lg w-[308px] hover:bg-gray cursor-pointer ${select.id === currentSelected ? "bg-gray" : ''}`} key={select.id} onClick={() => handleSelected(select.id)}>
          <img src={select.img} alt="syncu stack icons" className='imgIcon bg-gray border-[1px] border-fb' />
          <h2 className="text-darkBlue font-semibold text-xl">{select.name}</h2>
          <article className='text-or text-base'>{select.article} </article>
        </div>
      ))}
    </div>
  </>
}
