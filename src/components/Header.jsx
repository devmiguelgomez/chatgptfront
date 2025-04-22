import React from 'react'
import { FaRobot } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaRobot className="text-3xl text-white" />
          <h1 className="text-2xl font-bold text-white">
            ChatGPT App
          </h1>
        </div>
        <div>
          <span className="text-sm md:text-base text-blue-100">
            Desarrollado con ❤️ para UNICATOLICA 2025
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
