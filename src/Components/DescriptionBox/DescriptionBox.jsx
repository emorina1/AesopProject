import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p> Established in Melbourne, Australia, in 1987, Aesop's objective has always been to formulate skin, hair and body care products of the finest quality</p>
            <p>It has since expanded to 27 markets around the globe, with each of its 247 signature stores having their own unique design.</p>
        </div>
    </div>
  )
}

export default DescriptionBox