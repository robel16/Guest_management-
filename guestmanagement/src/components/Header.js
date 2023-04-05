import Image from 'next/legacy/image'
import airbnb from '../images/airbnb.png'

import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'


function Header() {
  return (
    <header className='sticky top-0 z-50 grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto' >
        
        <Image src={airbnb} layout="fill"
        objectFit='contain' objectPosition="left"/>
        </div>
        {/* search */}
        <div className=' flex md:border-2 items-center rounded-full py-2 md:shadow-sm'>
          <input type="text" className='flex-grow pl-5 bg-transparent outline-none' placeholder='start your Search' />
         <MagnifyingGlassIcon className=' hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer '/>
        </div>
    </header>
    
  )
}

export default Header