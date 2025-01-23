import zIndex from '@mui/material/styles/zIndex'
import React from 'react'

function ShinyEffect({left, right, top, size = 50}) {
    const postionStyle = {
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1
    }
    if(left != undefined){
        postionStyle.left = `${left}px`
    }
    if (right != undefined) {
        postionStyle.right = `${right}px`
    }
  return (
    <div className=' shiny-effect' style={postionStyle}></div>
  )
}

export default ShinyEffect
