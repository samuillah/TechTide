import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href= "/">Home</Link>
          </li>
          <li><Link href ="/about">About</Link>
          </li>
          <li><Link href = "/contact">Contact</Link>
          </li>
          <li><Link href= "/services">Services</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default page
