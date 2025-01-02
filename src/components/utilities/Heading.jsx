import React from 'react'

function Heading({ title, customTitleStyle, subTitle, customSubTitleStyle, containerStyle }) {
  return (
    <div className={`${containerStyle}`}>
      <div className={`${ customTitleStyle }`}>
        {title}
      </div>
      <div className={`${ customSubTitleStyle }`}>
        {subTitle}
      </div>
    </div>
  )
}

export default Heading  
