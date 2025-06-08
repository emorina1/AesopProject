 import React from 'react'
 import './Offers.css'
 import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'
 const Offers = () => {
   return (
     <div className='offers'>
        {/* <div className="offers-left">
           <h1>Aesop</h1>
           <h2>Fragrance</h2>
           <p>Our range of Eaux de Parfum spans the realms of Floral, Fresh,<br/> Woody and Opulent, subverting and redefining these classifications with nuance and nonconformity—as is our way.</p>
           <button>Check Now</button>
        </div> */}
        <div className="offers-right">
           <img src={exclusive_image} alt="" />
           <button className="offers-button">Read More</button>
        </div>
     </div>
   )
 }
 
 export default Offers