import React from 'react'
interface Props{
    children: string;
    color?:'primary' | 'secondary' | 'danger'; //? represents that this parameter is optional, what if we give color = 1233 it shows no error but button is missing so give default values to choose from we can use '|' to add more values
    onClick: ()=> void;
}
const Button = ({children, onClick, color ='primary'}:Props) => {
  return (
    <button className={'btn btn-' +color } onClick ={onClick}>{children}</button>
  )
}

export default Button
