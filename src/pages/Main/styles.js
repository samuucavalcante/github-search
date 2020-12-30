import styled, { css, keyframes } from 'styled-components';

import { shade } from 'polished';


export const Container = styled.div`
  width: 700px;
  margin: 50px auto;
  height: 95vh;
  padding: 40px;  
  ::-webkit-scrollbar {
width:8px;
height: 8px;
}
 
::-webkit-scrollbar-track {
background:rgba(0, 0, 0, 0.2);
border-radius: 20px;
  margin-top: 125px;
  margin-bottom: 40px;
}
 

::-webkit-scrollbar-thumb {
border-radius: 20px;
background: #ff6d6d;
}
overflow-y: auto;

`;

export const Lista = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-top: 40px;
  cursor: pointer;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

    transition: transform .2s;
  & + div {
    margin-top: 10px;
  }
  &:hover {
    transform: translateX(30px);


  }
  img {
    width: 60px;
    border-radius: 50%;
  }
  div {
    flex: 1;
    margin-left: 20px;

    line-height: 25px;

    strong {
      font-weight: 500;
      color: #414040
    }

    p {
      font-size: 12px;
      color: gray;
    }
  }

`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  

  input {
    width: 50%;
    padding: 12px;
    border: 2px solid white;
    border-right: 0px;
    border-radius: 5px 0 0 5px;
    ${(props) => props.isErrored && css`
    border-color: #c53030;
  `}
  }
  button {
    padding: 14px 30px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background-color: #42b72a;
    transition: background-color .2s;
    position: relative;
    display: flex;
    justify-content: space-around;
    svg {
      position: absolute;
      left: 7px;
      top: 15px;
    }
    
    &:hover {
      background-color: ${shade(0.2, '#42b72a')};
    }
  }
 
`;


export const Err = styled.div`
  margin-left: 18%;
  height: 0px;
  span {
    color: #c53030;
    font-size: 10px;
  }
`;