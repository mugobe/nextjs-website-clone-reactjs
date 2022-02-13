import styled from 'styled-components'

export const StyledCard = styled.section`

display: center;
text-align: center;
margin-top:100px;


h1 {
    font-size: 30px;
    
}
p {
    font-size:16px;
  
}
    
`
export const Card = styled.div`



display: flex;
justify-content: space-between;
padding: 10px 160px;

h4 {
    text-align: left;
    padding-right:auto;
    padding-left: 10px;
}

p {
   
    font-size: 14px;
    text-align:left;
   
     padding-left: 10px;
     padding-right:20px;
}

a {
    text-decoration:none;
    color: #0070f3;
}

div {

  flex-direction:row;
  border: 1.4px solid #f3f3f3;
border-radius: 7px;
width:300px;
  height:auto;

  






}

div:hover {

box-shadow: 1px 1px 2px rgba(0, 0, 0.1, 0.1);
 }

a:hover {
     text-decoration: underline;
 }



`