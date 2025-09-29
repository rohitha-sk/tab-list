import React from 'react'

function Tab({num, handleActiveTab, isActive, label}) {
  return (
    <button
      onClick={()=>{handleActiveTab(num)}}
      className={`px-6 py-3 transition-all duration-300 rounded-t-lg text-sm font-medium tracking-wide
      ${isActive 
        ? "bg-blue-600 text-white shadow-lg translate-y-[-2px] " 
        : "bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-200"}`}
    >
      {label}
    </button>
  )
}

export default Tab