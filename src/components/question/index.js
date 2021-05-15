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
  Exit,
  QuestionNumber,
  StatementContainer,
} from "../../styles/component";

export default function Question({ id, data, cB, qNumber, hint}) {
  const [selected, setSelected] = useState(null);
  const [correctId, setCorrectId] = useState(null);

  const select = (id) => {
    setSelected(id);
  };

  const isCorrect = () => {
    const correctAns = data.answers.filter((ans) => ans.isCorrect === true)[0];

    if (correctAns) {
      if (correctAns.id === selected) {
        cB(correctId === null);
        setCorrectId(null);
      } else {
        setSelected(correctAns.id);
        setCorrectId(correctAns.id);
      }
    }
  };

  const exitNext = () => {
    hint.setHint(false);
  }
  return (
    <>
      {data && (
        <>
          <Container>
            <StatementContainer>
              <QuestionNumber>{qNumber}</QuestionNumber>
              <Statement>{data.statement}</Statement>
            </StatementContainer>
            <Answers>
              {data.answers.map((ans) => (
                <Checkbox
                  key={ans.id}
                  checked={selected === ans.id}
                  id={ans.id}
                  label={ans.statement}
                  cB={select}
                  isCorrect={correctId === ans.id}
                  disabled={correctId !== null && correctId !== ans.id}
                />
              ))}
            </Answers>
            <Button disabled={selected === null} onClick={isCorrect}>
              Answer
            </Button>
          </Container>
          {hint.showHint && (
            <Tutor>
              <InnerContainer>
                <Exit onClick={exitNext}>x</Exit>
                <h1>Tutorial</h1>
                {data.tutor && (
                  <>
                    <Image src={data.tutor.image} alt="Tutorial" />
                    <Calculation>{data.tutor.calculation}</Calculation>
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
