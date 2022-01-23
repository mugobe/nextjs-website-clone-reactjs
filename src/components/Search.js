import {Container} from "./styles/Container.styled"
import { StyledSearch, NewButtonStyled } from "./styles/Search.styled";


const Search = () => {
  return( 
   
      <Container>
      <StyledSearch>
      <NewButtonStyled color='#ed5760'>New</NewButtonStyled>
      <p>Rust Compiler, Middleware, Edge Functions, Checks, and more! Watch the latest Next.js Conf Keynote →</p>
      </StyledSearch>
      </Container>

    
      )
};

export default Search;
