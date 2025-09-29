import React, { useState } from 'react'
import Tab from './Tab'
import TabContent from './TabContent'
import DifferentTabContent from './DifferentTabContent.jsx';

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    summary: "Components help break the UI into reusable pieces",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    summary: "Hooks let us use state and lifecycle in functional components",
    details:
      "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
];

const TabDetails = [
    {
        id :1,
        label :"Inbox",
    },
    {
        id:2,
        label:"Snoozed"
    },
    {
        id:3,
        label:"Sent"
    },
    {
        id:4,
        label:"All Mail"
    },
    {
        id:5,
        label:"Trash"
    }
]

function TabList() {
    const[num, setNum] = useState(1);

    const handleActiveTab = (tabNum)=>{
        setNum(tabNum);
    }

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex gap-1 px-4 pt-4 bg-gradient-to-r from-gray-50 to-white">
          {
            TabDetails.map((tabItem)=> (
              <Tab 
                key={tabItem.id}
                num={tabItem.id} 
                handleActiveTab={handleActiveTab} 
                isActive={num === tabItem.id} 
                label={tabItem.label}
              />
            ))
          }
        </div>
        <div className="p-1">
          {num <= 4 ? <TabContent item={content[num]} /> : <DifferentTabContent />}
        </div>
      </div>
    </div>
  )
}

export default TabList