import React from 'react'
import useJSONFetch from "./hooks/useJSONFetch.js"
import './App.css';
import Data from './components/Data.jsx'
import Error from './components/Error.jsx'
import Loading from './components/Loading.jsx'

function App() {

  return (
    <div className="container">
      <Data />
      <Error />
      <Loading />
    </div>
  )
}

export default App;
