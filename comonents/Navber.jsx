import Link from 'next/link'
import React from 'react'

const Navber = () => {
  return (
    <div className='bg-cyan-950 rounded-b-xl'>
         <ul className='flex justify-between  '>

            <div>
                <Link href="/">
                
                <li>Home</li>
                </Link>
              
            </div>

            <div className='flex gap-6 items-center'>
                <Link href="/">
                
                <li>Client page</li>
                </Link>
              
            </div>
            
            
            </ul>   
    </div>
  )
}

export default Navber;
