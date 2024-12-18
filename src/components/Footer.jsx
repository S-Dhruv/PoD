import React from 'react'

const Footer = (props) => {
    const{showModel,handleToggle,data} = props
  return (
    <footer>
        <div className='bgGradient'></div>
    <div>
        <h1>NASA Pic Of the Day</h1>
        <h2> {data?.title}</h2>
    </div>
    <button onClick={handleToggle}>
    <i className="fa-solid fa-circle-info"></i>
    </button>
    </footer>
  )
}

export default Footer