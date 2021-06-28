import React, {useState, useEffect} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    const [user, setUser] = useState({});
    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/users/2`)
       .then(response => response.json())
       .then(data => setUser(data))
      },[]);
      const history = useHistory();
      const singleUser = (user) => {
        history.push(`/user/${user}`);
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" className="menu-style">Home</NavLink>
                    <NavLink to="/users" activeClassName="selected" className="menu-style">Users</NavLink>
                    <NavLink to="/posts" activeClassName="selected" className="menu-style">Posts</NavLink>
                    <NavLink to="/myposts" activeClassName="selected" className="menu-style">My Posts</NavLink>
                    <p className="p-2 font-weight-bold text-info">Logged in as: <a href="#" onClick={() => singleUser(user.id)}>{user.name}</a></p>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
