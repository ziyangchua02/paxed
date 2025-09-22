import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Locations from './Locations'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'locations':
        return <Locations />
      default:
        return (
          <div className="main-content">
            <div className="content-flex">
              <div className="content-left">
                <div className="vertical-text-container">
                  <div className="vertical-text">start</div>
                  <div className="arrow-down">↓</div>
                </div>
          </div>
              <div className="content-right">
                <h1>
                  PAXED
                </h1>
                <p className="subtitle">
                  Non intrusive crowd detection
                </p>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </>
  )
}

export default App
