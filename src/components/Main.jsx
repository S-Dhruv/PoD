import React from 'react'

const Main = (props) => {
    const {data} = props;
  return (
    <div className="container">
        <img src={data?.hdurl} alt={data.title || 'bg.img'} className='bgImage'/>
    </div>
  )
}

export default Main