//import { Fragment } from "react/jsx-runtime";

import { useState } from "react";


interface Props{
    items:  string[];
    heading: string; 
    onSelectItem: (item: string )=> void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  //to render the below elements dynamically

  
  //hook - fn allows us to use inbuilt function in react - so this component or data will chanhe overtime this is the meaning of usesate
  const  [selectedIndex, setSelectedIndex]= useState(-1);
  


  // items = [];
  const getMsg = () => {
    // return items.length === 0? <p>No item found</p> : null;;
    return items.length === 0 && <p>No item found</p>;
    // or we can write `items.length === 0 && <p>No item found</p> ;` because true and <p>  will return <p> when using  &&
  };
  return (
    //<div>
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {getMsg()}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("clicked")} // this will show clicked on console. this can be used to find number of users clicked that one, each time it will increase the clicked count
            // onClick={() => console.log(item, index)} // this will show what item is clicked in console with index
            onClick={() => {
              setSelectedIndex(index); // this make the clicked element active
              onSelectItem(item); // this will pass the item to the parent component

            }}
          >
            {item}
          </li>
        ))}

        {/* <li className="list-group-item active" aria-current="true">
          An active item
        </li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
    //</Fragment>
    //</div>
  ); // to use html in multiple lines inside a return
}
export default ListGroup;
// if we use h1 inside this it wil return error because in react we cant use more than 1 element. so use it we have to wrap it inside an elemnt like above <div> .
// to open a wrap, view>command pallete>wrap with abbreviation> type your element.
// wrapping an element is not the best way instead use fragment
// instead of using line 1, 6,17 we can use <> so it will tell compiler that it is a fragment
// instead printing elements using li , we can call it dynamically by using a map funtion and then you can delete all the lists
// <li>{item }</li> - this shows error in console as each element or prop should have a unique key so that react can uniquely identify them in case of error .so replace it with <li key={item}>{item }</li>
// we cant use if or conditions inside a jsx file so use { } like {items.length === 0? <p>No item found</p> : null} or declare a variable and call it like -
/* const msg = items.length === 0? <p>No item found</p> : null
     <h1>Hi</h1>
      {msg} 
*/
// or like  calling a funtion so that we can pass different parameters for different conditions like above
/* to use event handler
import { MouseEvent } from "react";
// Event handler - click
  const handleClick = (event : MouseEvent) => console.log(event);
  onClick={handleClick}
  */
//shift+alt+f  to format code