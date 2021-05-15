import styled, { keyframes } from "styled-components";

//animations
const Appear = keyframes`
from{
 transform: scale(0);
}to{
transform: scale(1);
}
`;

const HereIam = keyframes`
  0%{
    transform: scale(0.9);
  }50%{
    transform: scale(1.2);
  }100%{
    transform: scale(0.9);
  }
`;

export const Cbox = styled.div`
  background-color: ${props => props.correct ? "red" : props.disabled ? "grey": props.checked ? "#2A9D8F" : "#264653"}; 
  color: ${(props) => (props.disabled ? "white" : props.checked ? "white" : "black")};
  padding: 10px;
  border-radius: 4px;
  font-weight: bold;
  transition: color ease-in-out 250ms;
  cursor: pointer;
  margin-top: 4px;

`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-item: center;

  color: white;

  margin-top: 100px;

  padding: 20px;
`;

export const Answers = styled.div`
  margin: 40px auto;
  min-width: 300px;
`;

export const Statement = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  
  
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
    background-color: grey;
    margin 20px auto;
    cursor: pointer;
    transition: all ease-in-out 250ms;
    box-shadow: 0px 1px 5px rgba(0,0,0,0.3);
    color: black;
    font-weight: bold;
    font-size: 1.3rem;
    width: 100px;
    &:hover {
      background-color: white;
    }
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

export const Sidebar = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 5px;
  background-color: grey;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
`;

export const QuestionNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 50px;
  margin: 10px;
  margin-left: 0;

  font-weight: bold;
  font-size: 1.3rem;

  background-color: white;
  border-radius: 50%;

  color: black;

  box-shadow: 0px 1px 5px rgba(0,0,0,0.4);
`;

export const Points = styled.div`
    color: black;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: grey;
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
 
`;

export const StatementContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    margin: 10px;
  }
  @media (min-width: 992px) {
    margin: 50px 20%;
  }
`;

export const Hint = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: black;
  cursor: pointer;
  animation: ${HereIam} 1s ease-in-out infinite;
  font-weight: bold;
  text-shadow: 1px 2px 5px rgba(0,0,0,0.4);
`;