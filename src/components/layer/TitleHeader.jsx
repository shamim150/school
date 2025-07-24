import React from 'react'

const TitleHeader = ({headerText, className}) => {
  return (
    <h2 className={`md:text-3xl text-lg  text-primary font-DM font-bold ${className}`}>{headerText}</h2>
  )
}

export default TitleHeader