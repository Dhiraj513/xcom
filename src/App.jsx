import { useState } from 'react'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
function App() {
 

  return (
    <>
  <Header/>
<div className='min-h-80' flex flex-col items-center justify-center>
  <h2 className='text-2xl font-bold'>Welcome to XCOM</h2>
</div>
  <Footer/>
     </>
  )
}

export default App
