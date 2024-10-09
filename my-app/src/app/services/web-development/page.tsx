import React from 'react'
import Link from 'next/link'

const WebDevelopment = () => {
  return (
    <div>
      <h1>This is our Web Development Page</h1>
      <li><Link href= "/">Go To Home Page</Link>
          </li>
          <li><Link href = "/about">Go To About Page</Link>
          </li>
          <li><Link href= "/contact">Go To Contact page</Link>
          </li>
          <li><Link href= "/services">Go To Services Page</Link>
          </li>

    </div>
  )
}

export default WebDevelopment