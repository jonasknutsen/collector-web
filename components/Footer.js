import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        This is a magic footer
        <style jsx>{`
          footer {
            text-align: center;
            padding: 1rem;
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
