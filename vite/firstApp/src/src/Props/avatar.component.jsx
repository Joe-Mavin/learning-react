import React from 'react'

const AvatarComponent = ({alt,src}) => {
  return (
    <div>
      <img 
      className='avatar'
      src={src} 
      alt = {alt}
      width = {100}
      height = {100}
      />
    </div>
  )
}

export default AvatarComponent
