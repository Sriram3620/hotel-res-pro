
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import "./index.css"

function NavBar() {

    const [homebtn,setHome]=useState(false);

  const changeHome=()=>
    {
        setHome(true);
    }

    const cancelHome=()=>
        {
            setHome(false);
        }

 

  return (
    <Navbar  expand="lg" className="p-1 ">
      <Container fluid>
        <Navbar.Brand className='mt-1' style={{width:'18vw'}} href="#">
            <img alt='logo' className='logo m-2' src='https://static.vecteezy.com/system/resources/previews/000/617/161/original/s-logo-and-symbols-template-vector.jpg' />
            PAYALU
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <div className='w-100'>
          <Nav
            className="pr-auto nav-items"
            style={{ maxHeight: '200px'}}
            navbarScroll
          >
            
            <Nav.Link onClick={changeHome} style={{backgroundColor:homebtn?'#F3F4F6':''}}  className='nav-item-home mt-2' href="#action1">Home</Nav.Link>

            <Dropdown onClick={cancelHome}  style={{backgroundColor:homebtn?'':''}} className='nav-item-cities'>
      <Dropdown.Toggle className='' variant="" id="dropdown-basic">
        <span   className='nav-item-cities'>Cities</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
           </Dropdown>  
           
           <Dropdown onClick={cancelHome}   style={{backgroundColor:homebtn?'':''}} className='nav-item-cities '>
      <Dropdown.Toggle className='' variant="" id="dropdown-basic">
        <span   className='nav-item-cities'>Hotels</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
           </Dropdown>  

           <Dropdown  onClick={cancelHome}  style={{backgroundColor:homebtn?'':''}} className='nav-item-cities '>
      <Dropdown.Toggle className='' variant="" id="dropdown-basic">
        <span   className='nav-item-cities'>Others</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
           </Dropdown> 
         
            
          </Nav>
          </div>
          <div className='nav-search-con'>
            <div className='search-con'>
                <input className='search-box'/>
                <button className='search-btn'>
                <i className="fas fa-search fa-xs search-icon" style={{color: "#000000"}}></i>
                </button>
            </div>
          <button className='signup-btn'>Sign up</button>
          </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;