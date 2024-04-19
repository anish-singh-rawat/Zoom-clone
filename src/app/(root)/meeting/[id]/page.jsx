import React from 'react'

const Meeting = ({params}) => {
    console.log(params,"meetings params ")
  return (
    <div>Meeting Room : #{params.id}</div>
  )
}

export default Meeting