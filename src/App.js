import React from 'react'
import './categories.style.scss'
import Home from './component/Routes/Home/Home.components'
// import CategoryItems from './component/category-item/category-item.component'
// import Directory from './component/directory/directory.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './component/Routes/Navigation/Navigation.componenet'
import SignIn from './component/Routes/Sign-in/sign-in.component'
export default function App() {

  function Shop() {
    return (
      <div>
        I am Shop
      </div>
    )
  }

  return (
    <Routes>
      <Route path='/' Component={Navigation}>
        <Route index Component={Home} />
        <Route path='/Shop' Component={Shop} />
        <Route path='/sign-In' Component={SignIn} />
      </Route>
    </Routes>
  )
}
