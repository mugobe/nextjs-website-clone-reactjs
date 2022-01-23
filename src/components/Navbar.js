import { StyledNav, Menu, Logo, NavButton } from "./styles/Navbar.styled"
import {Container} from "./styles/Container.styled"



const Navbar = () => {
    return (
        <StyledNav>
        <Container> 
                <Menu>
                 <Logo src='./images/next.png' alt='logo'  />
                 <ul>
                     <p>Showcase</p>
                     <p>Docs</p>
                     <p>Blog</p>
                     <p>Analytics</p>
                     <p>Exampples</p>
                     <p>Enterprise</p>
                 </ul>
                 <NavButton>Learn</NavButton> 
                </Menu>
        </Container>
   
        </StyledNav>
    )
}

export default Navbar
