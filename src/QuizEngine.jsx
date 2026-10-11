import { Card } from "./Card";
import { Options } from "./Options";
import quizquestions from "./quiz/quizquestions.json";
import { useState } from "react";

export const QuizEngine = () => {
  const questions = quizquestions.questions;
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState({
    survivor: 0,
    goofball: 0,
    predator: 0,
    tactician: 0,
  });

  const question = questions[index];
  const options = questions[index].options;

  const handleclick = (i) => {
    const pickedOption = options[i];
    setScores((prev) => ({
      survivor: prev.survivor + pickedOption.scores.survivor,
      goofball: prev.goofball + pickedOption.scores.goofball,
      predator: prev.predator + pickedOption.scores.predator,
      tactician: prev.tactician + pickedOption.scores.tactician,
    }));
    if (index != 19){
        setIndex(index+1)
        //add result ig
    }
    
    console.log(scores);
  };

  return (
    <>
      <Card question={question.text} />
      <Options
        option={options[0].text}
        card_position={[0.84, 0.98, 0.5]}
        card_rotation={[0, 1.2, 0]}
        click_function={() => handleclick(0)}
      />
      <Options
        option={options[1].text}
        card_position={[0.95, 0.99, 0.3]}
        card_rotation={[0, 0.6, 0]}
        click_function={() => handleclick(1)}
      />
      <Options
        option={options[2].text}
        card_position={[1.13, 0.99, 0.2]}
        card_rotation={[0, 0.4, 0]}
        click_function={() => handleclick(2)}
      />
      <Options
        option={options[3].text}
        card_position={[1.33, 0.98, 0.2]}
        card_rotation={[0, 0.1, 0]}
        click_function={() => handleclick(3)}
      />
    </>
  );
};
