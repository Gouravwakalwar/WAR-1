import React from 'react'

import { Navbar , Brand , CTA} from './components';
import{Footer, Blog, Possibility, Features, WhatWAR1, Header} from './containers';
import './App.css';


const App = () => {
  return (
    <div className='App'>
   <div className="gradient_bg">
    <Navbar />
    <Header />
   </div>
   <Brand />
   <WhatWAR1 />
   <Features />
   <Possibility />
   <CTA />
   <Blog />
   <Footer />
    </div>
  )
}
export default App;