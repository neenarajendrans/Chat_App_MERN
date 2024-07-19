import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './logoutButton'

const Sidebar = () => {
  return (
    <div  className= "w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
       <LogoutButton/>
    </div>
  )
}

export default Sidebar