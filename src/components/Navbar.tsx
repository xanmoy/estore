import React from 'react'
import Link from 'next/link'
import Menu from './Menu'

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
            <div className="h-full flex items-center justify-between">
                {/* Mobile  */}
                <Link href="/">
                    <div className="text-2xl tracking-wide">
                        <h1>
                            ESTORE
                        </h1>
                   </div>
                </Link>
                <Menu />
           </div>
            
        </div>
    )
}

export default Navbar
