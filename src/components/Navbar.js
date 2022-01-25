import { StyledNav, Menu, Logo, NavButton, GitLink } from "./styles/Navbar.styled"
import {Container} from "./styles/Container.styled"



const Navbar = () => {
    return (
        <StyledNav>
        <Container> 
                <Menu>
                 <Logo src='./images/next.png' alt='logo'  />
                 <ul>
                     <a>Showcase</a>
                     <a>Docs</a>
                     <a>Blog</a>
                     <a>Analytics</a>
                     <a>Examples</a>
                     <a>Enterprise</a>
                     
                 </ul>
                 <NavButton>Learn</NavButton> 
                 <GitLink src='./images/github.png' alt='logo'  />
                </Menu>
        </Container>
   
        </StyledNav>
    )
}

export default Navbar
