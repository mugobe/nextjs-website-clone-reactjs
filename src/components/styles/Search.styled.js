import styled from 'styled-components'

export const StyledSearch = styled.div`
    
    margin-left: 160px;
    margin-right: 200px;
    display:flex;
    max-height: 50px;
    border: 2px solid;
    border-radius: 10px;
    border-color: #eaeaea;
    
    

    ${'' /* padding-left: 500px;
    padding-right: 50px; */}

    p {
        margin-left:30px;
        margin-bottom: 10px;
        font-size:13px;
        
    }

    a {
        text-decoration: inherit;
}


`

export const NewButtonStyled = styled.button`
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    font-weight: 50px;
    max-height: 25px;
    width: 40px;
    background-color: ${(color)=>color.color};
    color:#eaeaea;
    margin-left: 10px;

`