import styled from 'styled-components'



export const StyledIntro = styled.div`
    max-width: 100%;
    padding: 0 50px;
    margin: 0 auto;
    
    display: flex;
    text-align: center;

    h1 {
        font-size: 100px;
        font-weight: 750;
        letter-spacing:-3px;
        padding:0px 30px;
        word-spacing:-20px;
        
    }



    h2 {
        font-size: 100px;
        font-weight: 780;
        letter-spacing:-3px;
        margin-top:-80px;
        padding:-100px 30px;
        word-spacing:-20px;
        
    }
    p {
        margin-top:-60px;
    }
    h6 a {

        font-size: 16px;
        margin-right:517px;
        font-weight: normal;
    

    }

    a {

text-decoration:none;
color: #0070f3;


}

    h5 {

font-size: 16px;
font-weight: normal;
margin-left:490px;
margin-top: 28px;
color: #696969;

}



`

export const MyButtons = styled.div`

    display: flex;
    
    justify-content: space-between;

    `

export const IntroButton = styled.button`

justify-content:space-between;
 border-radius: 10px;
    
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 12px 65px;
    background-color: #0070f3;
    color: #fff;
    margin-left: 330px;
   

    &:hover{

        opacity: 0.9;
        transform: scale(0.98);
    }

`
export const IntroButton2 = styled.button`

justify-content:space-between;
 border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 70px;
    background-color: #fff;
    color: black;
    margin-right: 330px;
   

    &:hover{

        opacity: 0.9;
        transform: scale(0.98);
    }
`