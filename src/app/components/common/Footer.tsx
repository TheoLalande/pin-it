'use client'
import React from 'react'
import Link from 'next/link'
import { FaPlus, FaMap, FaInfoCircle } from 'react-icons/fa'
import { RiSettings3Fill } from 'react-icons/ri'
import { useCommonStore } from '@/app/store/commonStore'
import { MdAddLocationAlt } from 'react-icons/md'

const Footer = () => {
  const { isMenuShown, isMarkerToolUsed, muteIsMenuShown, muteIsMarkerToolUsed } = useCommonStore()

  function handleButtonClick() {
    muteIsMarkerToolUsed(!isMarkerToolUsed)
  }

  return (
    <footer
      className={`z-20 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl w-3/4 rounded-full transition-all duration-300 ${
        isMenuShown ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <nav className="flex justify-around items-center px-5 py-2">
        <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-green-500">
          <FaMap size={18} onClick={() => muteIsMarkerToolUsed(false)} />
        </Link>
        <Link href="/search" className="flex flex-col items-center text-gray-700 hover:text-green-500">
          <FaPlus
            size={18}
            onClick={() => {
              muteIsMenuShown(true)
              muteIsMarkerToolUsed(false)
            }}
          />
        </Link>
        <button className={`flex flex-col items-center ${isMarkerToolUsed ? 'text-green-500' : 'text-gray-700'}`} onClick={() => handleButtonClick()}>
          <MdAddLocationAlt size={18} />
        </button>
{        /*Configuration */}        
<Link href="/settings" className="flex flex-col items-center text-gray-700 hover:text-green-500">
          <RiSettings3Fill
            size={18}
            onClick={() => {
              muteIsMenuShown(true)
              muteIsMarkerToolUsed(false)
            }}
          />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
