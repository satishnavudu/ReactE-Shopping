
import {useState } from 'react'
import Tree from './Tree';
import right_arrow_icon from'../Assets/right_arrow_icon.svg'
import { Link } from 'react-router-dom'
const TreeNode=({ node }) =>{
    const { children, label,link } = node;
  
    const [showChildren, setShowChildren] = useState(false);
  
    const handleClick = () => {
      setShowChildren(!showChildren);
    };
    return (
      <>
        <div onClick={handleClick} style={{ marginBottom: "10px",display:'flex',cursor:"pointer" }}>
         
          <Link className='menu-label' to={link}>{label}</Link>
          {children && <img  src={right_arrow_icon} alt="" style={{position:"relative",right:'10px',marginLeft:"auto"}}/>}
        </div>
        <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" ,cursor:"pointer"}}>
          {showChildren && <Tree treeData={children} />}
        </ul>
      </>
    );
  }

  export default TreeNode;