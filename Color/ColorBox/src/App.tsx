import { useState } from 'react'
import './App.css'

import Row from './Modules/ColorRow/Row';

const colors: string[] = ["black", "white", "yellow", "green", "blue", "red", "cyan", "orange", "gray"];

function App() {


  return (
    <div className='Block'>
      <h1>Press the squares to change the color!</h1>
      <Row colors={colors} />
      <Row colors={colors} />
      <Row colors={colors} />
      <Row colors={colors} />
      <Row colors={colors} />
    </div>
  )
}

export default App
