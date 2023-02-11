import React from 'react';
import { useState } from "react";
import { Link, useNavigate,} from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';

const Landing = () => {

    const [email, setEmail,] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  return (
    <div className='logBox'>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
              <br />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" contrast value={email} onChange={e => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" contrast value={password} onChange={e => setPassword(e.target.value)} />

              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="/">Forgot password?</a></p>

              <MDBBtn outline color='light' size='lg'>
                Login
              </MDBBtn>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Landing;
