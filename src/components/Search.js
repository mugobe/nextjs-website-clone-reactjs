import {Container} from "./styles/Container.styled"
import { StyledSearch, NewButtonStyled } from "./styles/Search.styled";


const Search = () => {

  const Link = "https://nextjs.org/conf?utm_source=next-site&utm_medium=banner&utm_campaign=next-website"
  return( 
   
      <Container>
      <StyledSearch>
      
      <NewButtonStyled color='#ed5760'>New</NewButtonStyled>
      <p>Rust Compiler, Middleware, Edge Functions, Checks, and more! <a style={{color:'#000', fontWeight:'bold'}} href={Link}>Watch the latest Next.js Conf Keynote →</a></p>
  
      </StyledSearch>
      </Container>

    
      )
};

export default Search;
