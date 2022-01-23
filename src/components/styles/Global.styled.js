import { createGlobalStyle } from "styled-components"

const  GlobalStyled = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

        *{
            box-sizing: border-box;
        }

        body {
            background: ${({theme})=>theme.colors.body};
            color: hsl(192, 100%, 9%);
            font-family: 'Poppins', Sans-serif;
            font-size: 1.15em;
        }

        p {

            opacity: 0.6;
            line-height: 1.5em;
        }

        img {
            max-width: 100
        }
  `

  export default GlobalStyled