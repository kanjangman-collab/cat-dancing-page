import { useState } from 'react'
import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>고양이 댄싱 페이지</h1>
        <p>고양이와 함께 춤춰보세요! 🐱✨</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
