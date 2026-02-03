import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        {/* your song list / content here */}
      </main>

      <Footer />
    </div>
    </>
  )
}

export default App
