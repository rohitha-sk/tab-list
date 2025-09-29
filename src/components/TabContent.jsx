import React, { useState } from 'react'

function TabContent({item}) {
    const[likes, setLikes] = useState(0);

    const handleSetLikes = ()=>{
        setLikes(likes + 1)
    }

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-b-lg shadow-lg p-12">
      {/* Content Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
          {item.summary}
        </h2>
      </div>

      {/* Main Description */}
      <div className="space-y-8 text-center max-w-4xl mx-auto">
        <p className="text-blue-50 text-lg leading-relaxed  text-justify">
          {item.details}
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-blue-100 font-medium">Likes: {likes}</span>
          <button 
            onClick={handleSetLikes} 
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium 
                     transform transition-all duration-200 
                     hover:bg-amber-600 active:scale-95 backdrop-blur-sm"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default TabContent