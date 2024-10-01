import React from 'react'
import AvatarComponent from './avatar.component'
import {cat1,cat2,cat3,cat4} from '../assets/index'

const Profilecomponent = () => {
  return (
    <div>
      <AvatarComponent src = {cat1} alt = 'cat1'/>
      <AvatarComponent src = {cat2} alt = 'cat2'/>
      <AvatarComponent src = {cat3} alt = 'cat3'/>
      <AvatarComponent src = {cat4} alt = 'cat4'/>
    </div>
  )
}

export default Profilecomponent
