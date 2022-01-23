import styled from 'styled-components'


export const StyledNav = styled.div`
    background-color: ${( {theme} )=> theme.colors.navbar};
    color: ${({color})=> color};
    padding: 0px 0px;

    
    
`

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0px;
    ul {

    display: flex;
    margin-right: 60px;
   
    }

    p {
        padding:0px 30px;
           }
    
    `

export const Logo = styled.img`
    padding: 15px 15px;
    width:100px;

`

export const NavButton = styled.button`
    border-radius: 7px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 8px 15px;
    background-color: #0070f3;
    color: #fff;
   

    &:hover{

        opacity: 0.9;
        transform: scale(0.98);
    }

    `