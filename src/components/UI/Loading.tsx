import React from 'react'
import logo from '../../assets/images/loader.png'

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
    <div className="relative">
      <div className="w-32 h-32 rounded-full border-t-8 border-green-600 border-dotted animate-spin"></div>

      {/* केंद्र में Gatoes का लोगो */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={logo}
          alt="Gatoes Logo"
          className="w-16 h-16"
        />
      </div>
    </div>
  </div>
  )
}

export default Loading