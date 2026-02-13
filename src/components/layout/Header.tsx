'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isImpiantiOpen, setIsImpiantiOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('IT')

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/vservice-logo.svg" 
              alt="V.Service" 
              width={150} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/azienda" className="text-v-light hover:text-v-dark font-medium">
              Azienda
            </Link>
            
            {/* Impianti Dropdown */}
            <div className="relative">
              <button 
                className="text-v-light hover:text-v-dark font-medium flex items-center space-x-1"
                onMouseEnter={() => setIsImpiantiOpen(true)}
                onMouseLeave={() => setIsImpiantiOpen(false)}
              >
                <span>Impianti</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isImpiantiOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-v-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsImpiantiOpen(true)}
                  onMouseLeave={() => setIsImpiantiOpen(false)}
                >
                  <Link href="/servizi/riscaldamento" className="block px-4 py-2 text-gray-700 hover:text-v-light hover:bg-gray-50">
                    Riscaldamento
                  </Link>
                  <Link href="/servizi/condizionamento" className="block px-4 py-2 text-gray-700 hover:text-v-light hover:bg-gray-50">
                    Condizionamento
                  </Link>
                  
                </div>
              )}
            </div>
            
            <Link href="/assistenza" className="text-v-light hover:text-v-dark font-medium">
              Assistenza Clivet
            </Link>
            
            <Link href="/servizi" className="text-v-light hover:text-v-dark font-medium">
              Servizi
            </Link>
            
            <Link href="/blog" className="text-v-light hover:text-v-dark font-medium">
              Blog
            </Link>
            
            <Link href="/gallery" className="text-v-light hover:text-v-dark font-medium">
              Gallery
            </Link>
            
            <Link href="/contatti" className="text-v-light hover:text-v-dark font-medium">
              Contatti
            </Link>
          </nav>

          {/* Right Side - Language Selector + User Area */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentLang(currentLang === 'IT' ? 'ENG' : 'IT')}
                className="flex items-center space-x-2 text-v-light hover:text-v-dark font-medium"
              >
                <Image 
                  src="/italian-flag.svg" 
                  alt="Italian flag" 
                  width={24} 
                  height={16}
                  className="w-auto h-auto"
                />
                <span>{currentLang === 'IT' ? 'IT' : 'ENG'}</span>
              </button>
            </div>
            
            <Link href="/area-riservata" className="flex items-center space-x-2 text-v-light hover:text-v-dark font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Area riservata</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/azienda" className="text-v-light hover:text-v-dark font-medium py-2">
                Azienda
              </Link>
              <Link href="/servizi" className="text-v-light hover:text-v-dark font-medium py-2">
                Impianti
              </Link>
              <Link href="/assistenza" className="text-v-light hover:text-v-dark font-medium py-2">
                Assistenza Clivet
              </Link>
              <Link href="/servizi" className="text-v-light hover:text-v-dark font-medium py-2">
                Servizi
              </Link>
              <Link href="/blog" className="text-v-light hover:text-v-dark font-medium py-2">
                Blog
              </Link>
              <Link href="/gallery" className="text-v-light hover:text-v-dark font-medium py-2">
                Gallery
              </Link>
              <Link href="/contatti" className="text-v-light hover:text-v-dark font-medium py-2">
                Contatti
              </Link>
              
              <div className="pt-4 border-t">
                {/* Mobile Language Selector */}
                <div className="flex items-center justify-between py-2">
                  <button 
                    onClick={() => setCurrentLang(currentLang === 'IT' ? 'ENG' : 'IT')}
                    className="flex items-center space-x-2 text-v-light hover:text-v-dark font-medium"
                  >
                    <Image 
                      src="/italian-flag.svg" 
                      alt="Italian flag" 
                      width={24} 
                      height={16}
                      className="w-auto h-auto"
                    />
                    <span>{currentLang === 'IT' ? 'IT' : 'ENG'}</span>
                  </button>
                  
                  <Link href="/area-riservata" className="flex items-center space-x-2 text-v-light hover:text-v-dark font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Area riservata</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
