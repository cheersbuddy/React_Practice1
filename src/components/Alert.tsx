 import React, { ReactNode } from 'react'

 interface Props{
    children: ReactNode;// to pass a html code og multiple linesinstead of a single string we use children and its reactnode object
    onClose:() => void;  
    //onClick:()=> void; 
}
    
  
 const Alert = ({children, onClose}: Props) => {
   return (
    <div className=" alert alert-primary alert-dismissible"> {children} 
    
  <button type="button" className="btn-close" onClick ={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
</div>
   )
 }
 
 export default Alert
 