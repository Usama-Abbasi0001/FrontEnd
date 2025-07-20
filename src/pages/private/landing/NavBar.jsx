import React from 'react'
import Leftbar from '../../../components/nav/Leftbar';
import Rightbar from '../../../components/nav/Rightbar';
function NavBar() {
  return (
    <div className='flex justify-between items-center lg:p-4 p-6'>
      <Leftbar/>
      <Rightbar/>
    </div>
  )
}

export default NavBar
