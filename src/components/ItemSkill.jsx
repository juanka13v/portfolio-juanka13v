import React from 'react'

const ItemSkill = ({title, icon}) => {
  return (
    <div className='w-[90px] h-[70px] border-2 border-neutral flex flex-col items-center justify-center rounded-md'>
      <i className={`${icon} text-4xl`} ></i>
      <h3 className='text-sm font-bold'>{title}</h3>
    </div>
  )
}

export default ItemSkill;