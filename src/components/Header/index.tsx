'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function HeaderIndex() {
  const [isOpen, setIsOpen] = useState(false)

  const menu = [
    { text: '關於計畫' },
    { text: '導入指引' },
    { text: '輔導團' },
    { text: '技術支援' },
    { text: '人才培育' },
    { text: '輔助資源' }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className='w-[100%] h-[60px] lg:w-full fixed top-0 left-1/2 -translate-x-1/2 py-2 px-6 bg-white flex items-center justify-between z-[1102] lg:z-[1100]'>
        <Link href="/">
          <Image src={'/logo.svg'} width={150} height={150} alt='Logo' />
        </Link>
        {/* Desktop Menu */}
        <nav className='hidden lg:flex space-x-6'>
          {menu.map((item, index) => (
            <a key={index} href={`#${item.text}`} className='text-gray-700 hover:text-gray-900'>
              {item.text}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1103]"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu with Slide-in Effect */}
      <div className={`fixed top-0 right-0 h-screen w-[80%] bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-[1104]`}>
        <div className='p-4'>
          <button onClick={toggleMenu} aria-label="Close Menu" className='mb-4'>
            <AiOutlineClose size={24} />
          </button>
          <nav className='flex flex-col space-y-4'>
            {menu.map((item, index) => (
              <a key={index} href={`#${item.text}`} className='text-gray-700 hover:text-gray-900' onClick={toggleMenu}>
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
