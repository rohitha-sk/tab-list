import React from 'react'

function DifferentTabContent() {
  return (
    <div className="bg-cyan-900 rounded-b-lg rounded-tr-lg shadow-lg p-12 border border-gray-200">
      {/* Content Header */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Importance of IT
        </h2>
      </div>

      <div className="flex items-start gap-6">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Sample"
          className="w-35 h-50 rounded-lg object-cover shadow-md"
        />
        <p className="text-justify text-amber-50">
          Information Technology (IT) plays a vital role in today’s world by connecting people, simplifying tasks, and driving innovation. It helps businesses operate efficiently, enables instant communication, and provides access to vast amounts of knowledge. From education to healthcare, IT supports progress and creates opportunities for a smarter and more connected future
        </p>
      </div>
    </div>
  )
}

export default DifferentTabContent