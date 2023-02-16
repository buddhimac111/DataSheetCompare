import "./Nav.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
    return (
        <>
    
    <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand className="" href='/home'>LOGO</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 ms-5'>
              <MDBNavbarItem>
                <MDBNavbarLink  href='/home'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Products</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true'>
                  Company
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/options' tabIndex={-1} aria-disabled='true'>
                  Options
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true'>
                  More
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className='d-flex w-auto mb-2'>
              <input className='form-control' placeholder="Search...." aria-label="Search" type='Search' />
              <MDBBtn outline>  <FontAwesomeIcon icon={faSearch} /></MDBBtn>
            </MDBInputGroup>
            <button className="btn btn-primary ms-3 mb-2" onClick={() => signOut(getAuth())}>Logout</button>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

        </>
    
    );
    }

export default NavBar;