import React from 'react'

const Button = ({clickFunction, cssid, buttonName}) => {
  return (
    <div>
      <button
        onClick={clickFunction}
        id={cssid}

      >
      {buttonName}

      </button>
    </div>
  )
}

export default Button
