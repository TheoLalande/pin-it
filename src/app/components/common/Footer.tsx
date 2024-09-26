'use client'
import React from 'react'
import Link from 'next/link'
import { FaPlus, FaMap, FaInfoCircle } from 'react-icons/fa'
import { RiSettings3Fill } from 'react-icons/ri'
import { useCommonStore } from '@/app/store/commonStore'

const Footer = () => {
  const { isMenuShown, muteIsMenuShown } = useCommonStore()

  return (
    <footer
      className={`z-20 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl w-3/4 rounded-full transition-all duration-300 ${
        isMenuShown ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <nav className="flex justify-around items-center px-5 py-2">
        <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FaMap size={18} />
        </Link>
        <Link href="/search" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FaPlus size={18} onClick={() => muteIsMenuShown(true)} />
        </Link>
        <Link href="/settings" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <RiSettings3Fill size={18} onClick={() => muteIsMenuShown(true)} />
        </Link>
        <Link href="/about" className='flex flex-col items-center text-gray-700 hover:text-blue-500"'>
          <FaInfoCircle size={18} onClick={() => muteIsMenuShown(true)} />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
