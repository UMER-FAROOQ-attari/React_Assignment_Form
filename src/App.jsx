import React from 'react'
import "./App.css"
import "./index.css"
import SignUp from './components/SignUp'
import Login from './components/Login'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
<>
<Routes>
  <Route path='/' element={<SignUp />} />
  <Route path='/Login' element={<Login />} />
</Routes>
<div className="flex flex-wrap bg-amber-200 justify-center p-5">


</div>
</>
  )
}

export default App