import { useState } from "react"

const UserInput = () => {
    const [ input, setInput] = useState("")
  return (
    <div>
      <h2>User Input</h2>
      <input type="text" name="user-input" id="user-input" onChange={(e)=>setInput(e.target.value)}/>
      <p><strong>{input}</strong></p>
    </div>
  )
}

export default UserInput
