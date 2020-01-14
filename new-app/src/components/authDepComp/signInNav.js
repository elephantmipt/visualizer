import React from 'react'
import { Nav } from 'react-bootstrap'

export const SignInNav = () => {
    return (
        <div className='mr-auto navbar-nav'>
            <Nav.Link href='/sign_in'>Sign In
                <span className="sr-only">(current)
                </span>
            </Nav.Link>
          
            <Nav.Link href="/sign_up">Sign Up
                <span className="sr-only">(current)
                </span>
            </Nav.Link>
        </div>
    )
}
