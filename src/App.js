import { ThemeProvider } from 'styled-components'

import Topbanner from './components/Topbanner';
import Navbar from './components/Navbar'
import GlobalStyled from './components/styles/Global.styled';
import Search from './components/Search';
import Introbody from './components/Introbody';
import CardSection from './components/CardSection';


const theme = {
  colors: {

    navbar: '#fff',
    body: '#fff',
    footer: 'Green',
    introbtnColor: '#fff',

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
        <Introbody />
        <CardSection />
      </>

    </ThemeProvider>
  );
}

export default App;
