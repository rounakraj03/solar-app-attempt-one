import Link from 'next/link'
import React from 'react'

const Navlink = ({name, route}) => {
  return (
    <Link  href={route} className='font-semibold mx-5'>{name}</Link>
  )
}

export default Navlink
