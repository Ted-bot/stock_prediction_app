import React from 'react'

const HeaderLinks = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' }
    ]
    
  return links.map((link, index) => {
    return (
        <a key={index} className="navbar-brand mx-2 text-lg text-green-50" href={link.path}>
            {link.name}
        </a>
    )
  })
}

export default function Header() {
  return (
        <nav className="navbar container w-full bg-green-500">
            <a className="navbar-brand text-lg text-green-50 " href="/">Home</a>
            <div className="navbar-end justify-evenly">
                { HeaderLinks() }
            </div>
        </nav>  
    )
}
