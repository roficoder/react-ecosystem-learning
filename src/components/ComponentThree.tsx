import React, { useContext } from 'react'
import USERCONTEXT from "../App.tsx"

const ComponentThree = () => {

    const message = useContext(USERCONTEXT);
    console.log("Message", message);
  return (
      <div>ComponentThree { message}</div>
  )
}

export default ComponentThree