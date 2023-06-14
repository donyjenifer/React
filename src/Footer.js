import React from 'react'
const Footer = () => {
    const year = new Date();
  return (
   <footer>Thank You &copy;{year.getFullYear()}</footer>
  )
}
export default Footer