import React from 'react'
import "./App.css"
import "./index.css"
import SignUp from './components/SignUp'
import { Login } from './components/SignUp'
const App = () => {
  return (
<>
<div className="flex bg-amber-200 justify-center p-5">
<SignUp />
<Login />
</div>
</>
  )
}

export default App