import React from 'react'
import Link from 'next/link'
import { FaHome, FaPlus, FaUser, FaInfoCircle } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl w-3/4 rounded-full">
      <nav className="flex justify-around items-center px-5 py-2">
        <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FaHome size={18} />
        </Link>
        <Link href="/search" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FaPlus size={18} />
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FaUser size={18} />
        </Link>
        <Link href="/about" className='flex flex-col items-center text-gray-700 hover:text-blue-500"'>
          <FaInfoCircle size={18} />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
