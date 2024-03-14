import React, { useState } from 'react'
import { Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NewArrivals from '../NewArivals/NewArrivals'

const ProductsNavbar = () => {
    const [state, setState] = useState(false)
  return (
    <div>
        <Nav className='py-3'>
            <NavLink><Link to="./" onClick={()=> setState(true)}>New Arrivals</Link></NavLink>
            <NavLink><Link>Featured</Link></NavLink>
            <NavLink><Link>Top Selling</Link></NavLink>
            
        </Nav>
        {state ? <NewArrivals/> : null}
    </div>
  )
}

export default ProductsNavbar