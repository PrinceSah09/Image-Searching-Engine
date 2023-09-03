import React from 'react'

const Jumbutron = ({ children }) => {
  return (
    <div className="bg-gray-900 flex items-center py-10">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='Image-Logo text-white text-center text-2xl font-bold mb-5'>Image Search Engine</h1>
        {children}
      </div>
    </div>
  )
}

export default Jumbutron