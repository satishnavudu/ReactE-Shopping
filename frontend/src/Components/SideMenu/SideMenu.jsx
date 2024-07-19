import React from 'react'
import right_arrow_icon from '../Assets/right_arrow_icon.svg'
const SideMenu = () => {
  return (
  <div className="side-menu">
<div className="side-menu1">
   <h1>Men's</h1> <img src={right_arrow_icon} alt="" />
   <h2>shirt's</h2>
   <h2>t-shirts</h2>
   <h2>pants</h2>
 </div>
 <div className="catalogue2">
  <h1>Women's</h1> <img src={right_arrow_icon} alt="" />
  <h2>Tops</h2>
  <h2>bottoms</h2>
  <h2>chudidhar's</h2>
  <h2>saree's</h2>
 </div>
 <div className="catalogue3">
  <h1>Accessories</h1> <img src={right_arrow_icon} alt="" />
  <h2>watches</h2>
  <h2>jewellery</h2>
  <h2>handbags</h2>
 </div>
 <div className="catalogue4">
  <h1>Electronics</h1> <img src={right_arrow_icon} alt="" />
  <h2>television</h2>
  <h2>refrigerator</h2>
  <h2>phones</h2>
  <h2>electronic gadgets</h2>
 </div> 
 <div className="catalogue5">
  <h1>Reader's corner</h1> <img src={right_arrow_icon} alt="" />
  <h2>spiritual</h2>
  <h2>Novels</h2>
  <h2>cooking</h2>
  <h2>motivation</h2>
 </div>
</div>
  )
}

export default SideMenu
