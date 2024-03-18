import React from 'react'
import { Nav, NavItem, NavLink } from 'react-bootstrap'
import Categories from './Categories/Categories'
import './CategoriesNavbar.css'
const CategoriesNavbar = () => {
  return (
    <>
        <Nav className='border-bottom py-0 mt-5'>
        <NavItem className='py-0'>
            <NavLink className='text-orange py-0'>New Arrivals Categories</NavLink>
        </NavItem>
        </Nav>
        <Categories/>
    </>
    
    
  )
}

export default CategoriesNavbar