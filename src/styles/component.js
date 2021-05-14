import styled, { keyframes } from "styled-components";

//animations
const Appear = keyframes`
from{
 transform: scale(0);
}to{
transform: scale(1);
}
`;

export const Cbox = styled.div`
  background-color: ${(props) => (props.checked ? "#2A9D8F" : "#264653")};
  color: ${(props) => (props.checked ? "white" : "black")};
  padding: 10px;
  border-radius: 4px;
  font-weight: bold;
  transition: color ease-in-out 250ms;
  cursor: pointer;
  margin-top: 4px;
`;

export const Container = styled.div`
  @media (min-width: 768px) {
    margin: 10px;
  }
  @media (min-width: 992px) {
    margin: 100px 20%;
  }
  @media (min-width: 1200px) {
    margin: 100px 30%;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-item: center;

 
  color: white;

  margin-top: 100px;

  padding: 20px;
`;

export const Answers = styled.div`
 margin: 20px 40px;
`;

export const Statement = styled.h1`
 text-align: center;
 font-size: 1.5rem;
 `;

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
    margin 50px 40px;
    cursor: pointer;
`;

export const Tutor = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;


`;

export const InnerContainer = styled.div`
  margin: 10%;
  background-color: white;
  padding: 30px;
  border-radius: 4px;
  position: relative;

  animation: ${Appear} 0.2s linear;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Calculation = styled.div``;

export const Exit = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  transition: all ease-in-out 250ms;
  cursor: pointer;
  border: none;
  background: none;
  color: red;

  &:hover {
    transform: scale(1.1);
  }
`;
