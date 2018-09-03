import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='title'>in·dex·a·ble</div>
        <style jsx>{`
          header {
            text-align: center;
          }
          .title {
            font-family: 'Ubuntu mono', monospace;
            font-size: 3rem;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
