import { ThemeProvider } from 'styled-components'

import Topbanner from './components/Topbanner';
import Navbar from './components/Navbar'
import GlobalStyled from './components/styles/Global.styled';
import Search from './components/Search';


const theme = {
  colors: {

    navbar: '#fff',
    body: '#fff',
    footer: 'Green',

  },

}



function App() {
  return (

    <ThemeProvider theme={theme}>
      <>
        <Topbanner />
        <Navbar />
        <GlobalStyled />
        <Search />
      </>

    </ThemeProvider>
  );
}

export default App;
