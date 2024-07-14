### Differnce b/w react & angular/vue 
- React is a **library** , it is a tool that provides specific functionality.
 - so library is like a tool 
 - react create dynamic and interactive user inferfaces.
 - React has
   * UI
   * Routing
   * managing app state
   * Internationalization
   * form validation
   * animation
   
- Angular and Vue are **frameworks** , they provide a lot of functionality out of the box. It is a set of tools and guideliness for building apps.
 - so framework is like a toolset

### note: check ListGroup.tsx for more comments and notes and //shift+alt+f  to format code

### Type annotation:
- in js we use type annotations to explicitly say what an element is going to do, because by default every element has impicit type of its metadata and what its going to do.

- using interface we can define the shape and interface of an object

### Props vs state difference
- props are immutable, they are passed down from parent to child, and they are read only. props are input passes to a component, it is similar to function args
- when the element is changed or modified it caause a re-render the component and update the DOM accordingly
- **state** is mutable, it is a local variable that is only accessible to the component that it is a internal data managed by a component, it is similar to variables

### type rafce to get 

```javascript
 import React from 'react'
 
 const Alert = () => {
   return (
     <div>
       
     </div>
   )
 }
 
 export default Alert
```

> **Note:** use react developer tools- chrome extension to inspect all the components in the browser page