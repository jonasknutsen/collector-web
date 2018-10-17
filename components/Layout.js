import React from 'react'

import Header from './Header'
import Footer from './Footer'
import GaWrapper from '../lib/analytics'

const Layout = (props) => (
  <div className='wrapper'>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
    <style jsx global>{`
      body {
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #__next {
        height: 100%;
      }
      .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      main {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        flex: 1;
      }
    `}</style>
  </div>
)

export default GaWrapper(Layout)
