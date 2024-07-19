
/*import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useContext,useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import Shop from '../../Pages/Shop'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown_icon.png'
import all_product from '../Assets/all_product'

const Navbar = () => {
const [menu,setMenu]=useState(Shop);
const [search,setSearch]=useState("");
console.log(search);
const {getTotalCartItems}=useContext(ShopContext);
const menuRef=useRef();
const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open');
}
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo}alt="" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle}src={nav_dropdown}alt=""/>
      <ul ref={menuRef}className="nav-menu">
       <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      
      <div className="searchbar">
        <input  onChange={(e)=> setSearch(e.target.value)} type="text" id="mySearch"onkeyup ="myFunction()" placeholder='search' title="type in a category"></input>
        {all_product.filter((item)=>{
          return search.toLowerCase()=== "" ? item:item.first_name.toLowerCase().includes(search);
        })}
        
      
      </div>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
export default Navbar*/
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useContext,useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import Shop from '../../Pages/Shop'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown_icon.png'
import menu_icon from '../Assets/menu_icon.svg'
import right_arrow_icon from'../Assets/right_arrow_icon.svg'
import cross_icon_three from '../Assets/cross_icon_three.svg'
import Tree from '../Tree/Tree'


const Navbar = () => {
const[isOpen,setIsOpen]=useState(false);
const [menu,setMenu]=useState(Shop);
const toggle=()=>{
  setIsOpen(true);
}
const close_menu=()=>{
  setIsOpen(false);
}
const open_menu=()=>{
  setIsOpen(!isOpen);
}
const {getTotalCartItems}=useContext(ShopContext);
const menuRef=useRef();
const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open');
}
const treeData = [
  {
    key: "0",
    label: "Men's",
    link:'/mens',
    children: [
      {
        key: "0",
        label: "shirt's",
        link:'/mens/shirt'
     
      },
      {
        key: "1",
        label: "t-shirts",
        
     
      },
      {
        key: "2",
        label: "pants",
        link:'/mens'
     
      },
    ],
  },
  {
    key: "1",
    label: "Women's",
    link:'/women',
    children: [
      {
        key: "11",
        label: "Tops",
        link:'/women/tops'
      },
      {
        key: "12",
        label: "Bottoms",
      },
      {
        key: "13",
        label: "chudidhar's",
      },
      {
        key: "14",
        label: "saree's",
      },
    ],
  },
  {
    key: "2",
    label: "kids",
    children: [
      {
        key: "11",
        label: "Tops",
        link:'/women/tops'
      },
      {
        key: "12",
        label: "Bottoms",
      },
      {
        key: "13",
        label: "chudidhar's",
      },
      {
        key: "14",
        label: "saree's",
      },
    ],
  },
  {
    key: "3",
    label: "Electronics",
    children: [],
  },
  {
    key: "4",
    label: "Reader's corner"
  },
];
const hMenu=[
  {
  key: "shop",
  label: "Shop",
  link:'/'
},
  {
  key: "mens",
  label: "Men",
  link:'/mens'
},
  {
  key: "womens",
  label: "Women",
  link:'/women'
},
  {
  key: "kids",
  label: "Kids",
  link:'/kids'
},
  {
  key: "beauty",
  label: "Beauty",
  link:'/beauty'
},
]
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo}alt="" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle}src={nav_dropdown}alt=""/>
      <ul ref={menuRef}className="nav-menu">
       <li><span>ALL <img style={{cursor:"pointer"}} onClick={toggle} src={menu_icon}alt="" /></span></li>

       {
       hMenu.map((item)=>(
     <li onClick={()=>{setMenu(item.key)}}><Link style={{textDecoration:'none'}}to={item.link}>{item.label}</Link>{menu===item.key?<hr/>:<></>}</li>
       ))
       /* <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("Beauty")}}><Link style={{textDecoration:'none'}}to='/Beauty'>Beauty</Link>{menu==="Beauty"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("Groceries")}}><Link style={{textDecoration:'none'}}to='/Groceries'>Groceries</Link>{menu==="Groceries"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("Shirt")}}><Link style={{textDecoration:'none'}}to='/Groceries'>Groceries</Link>{menu==="Groceries"?<hr/>:<></>}</li> */
       }
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      : <Link to='/login'><button>Login</button></Link>}
       
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

      <div className="sidemenu">
      
    
  <div className='menu-top' style={{visibility: isOpen ? "visible" :"hidden"}}>
    <div className='menu-shadow' >
    <div  className="cross-icon" style={{opacity: isOpen ? "1" :"0"}}>
       <img onClick={close_menu}src={cross_icon_three}alt="" />
       </div>
    </div>
    <div style={{width: isOpen ? "350px" :"0px"}} className="menulist">
        <Tree treeData={treeData} />
    </div>
  </div>
      
     </div>
    </div>
  )
}
     

export default Navbar

 //<div className='sidebar'>
      //<div className="filter">
      //<p>Shop by Category</p>
      /*<select>
      <option>Men</option>
      <option>Women</option>
      <option>Kid</option>
      <option>Beauty</option>
      <option>Groceries</option>
      <option>Shoes</option>
      <option>Bags</option>
      </select>
      </div>
    </div>*/