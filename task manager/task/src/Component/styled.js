import styled from "styled-components";



export const Input=styled.div`
border:4px solid black;
height:auto;
width:700px;
`
export const Mini=styled.div`
border:1px solid black;
height:50px;
width:200px;
`

export const Small=styled.div`
display:flex;
margin-top:20px;
gap:10px;
.circle{
    margin-top:4%;
}
`

export const Todouser=styled.div`
border:4px solid black;`

export const Userdiv=styled.div`
height:30px;
width:100px;
display:flex;
margin-top:10px;
justify-content:space-between;
background:${(prop)=>prop.val}
`
export const Stylebutton=styled.button`
border:none;
background:white;
font-size:25px;
`

export const Threenew=styled.div`
width:30%;
height:100%;
border:4px solid black;
border-bottom:none;
border-top:none;
`