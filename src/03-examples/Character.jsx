

import React from 'react'

export const Character = ({image, name}) => {
  return (
    <>
        <div className="card">
          <img src={image} alt="" className="card-img-top" />
          <div className="card-body">
            <div className="card-title">{name}</div>
          </div>
        </div>
    </>
  )
}
