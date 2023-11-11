import  { Nav, NavLink, Bars, 
         NavMenu } from './NavbarElements.jsx'

export default function NavBar() {
    return (
    <>
    <Nav>
        <Bars />
        <NavMenu>
            <NavLink to="">Home
            </NavLink>
            <NavLink to="/signup">Sign Up
            </NavLink>
        </NavMenu>
    </Nav>
    </>  
    );
}