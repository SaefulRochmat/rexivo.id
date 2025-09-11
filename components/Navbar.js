'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-primary text-dark fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">rexivo.id</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="#">Home</Link>
          <Link href="#features">Fitur</Link>
          <Link href="#pricing">Harga</Link>
          <Link href="#contact">Kontak</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary text-dark px-4 pb-4">
          <Link href="#" className="block py-2">Home</Link>
          <Link href="#features" className="block py-2">Fitur</Link>
          <Link href="#pricing" className="block py-2">Harga</Link>
          <Link href="#contact" className="block py-2">Kontak</Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
