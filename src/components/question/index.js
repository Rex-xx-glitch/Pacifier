import React, { useState } from "react";
import Checkbox from "../checkbox";
import {
  Container,
  Answers,
  Statement,
  Button,
  Tutor,
  InnerContainer,
  Image,
  Calculation,
  Exit
} from "../../styles/component";

export default function Question({ id, data, cB }) {
  const [selected, setSelected] = useState(null);
  const [showTutorial, setShowTutorial] = useState(false);

  const select = (id) => {
    setSelected(id);
  };

  const isCorrect = () => {
    const correctAns = data.answers.filter((ans) => ans.isCorrect === true)[0];

    if (correctAns) {
      if (correctAns.id === selected) {
        cB(id);
      } else {
        setSelected(correctAns.id);
        setShowTutorial(true);
      }
    }
  };
  return (
    <>
      {data && (
        <>
          <Container>
            <Statement>{data.statement}</Statement>
            <Answers>
              {data.answers.map((ans) => (
                <Checkbox
                  key={ans.id}
                  checked={selected === ans.id}
                  id={ans.id}
                  label={ans.statement}
                  cB={select}
                />
              ))}
            </Answers>
            <Button disabled={selected === null} onClick={isCorrect}>
              Answer
            </Button>
          </Container>
          {showTutorial && (
            <Tutor>
                <InnerContainer>
                    <Exit onClick={()=> (setShowTutorial(false))}>x</Exit>
              <h1>Tutorial</h1>
              {data.tutor && (
                <>
                  <Image src={data.tutor.image} />
                  <Calculation>{data.tutor.calculation}</Calculation>{" "}
                </>
              )}
              </InnerContainer>
            </Tutor>
          )}
        </>
      )}
    </>
  );
}
