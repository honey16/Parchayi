import React from 'react'

function Stats() {

  const items = [
    {
      count: '30+',
      label: 'Team Members'
    },
    {
      count: '30+',
      label: 'Team Members'
    },
    {
      count: '30+',
      label: 'Team Members'
    }
  ]

  return (
    <div className='bg-black flex items-center justify-center text-white rounded-lg py-14 mt-36'>
      {
        items.map((item, index)=> {
          return(
            <div key={index} className='flex-col px-28'>
              <div className='text-5xl font-bodytext text-center'>{item.count}</div>
              <div className='text-lg text-center'>{item.label}</div>
            </div>
          )
        })
      }  
    </div> 
  )
}

export default Stats;
