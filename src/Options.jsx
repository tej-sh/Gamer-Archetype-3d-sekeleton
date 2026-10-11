import { Card } from "./Card";
import { useState } from "react";
// import quizquestions from "./quiz/quizquestions.json"
export const Options = ({option,card_position,card_rotation,click_function}) => {
  const [hovered, setHovered] = useState(false);
  // const questions = quizquestions.questions
  // const q1 = questions[0]
  // console.log(q1)
  return (
    <group
      onPointerOver={(e) => {
        e.stopPropagation();
        // console.log("over");
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        // console.log("out");
      }}
      onClick={(e) => {
        e.stopPropagation();
        // console.log(`option clicked ${option}`);
        click_function()
      }}
    >
      <Card 
        question={option}
        
        card_position={card_position}
        card_rotation={card_rotation}
        card_scale={hovered?0.02:0.019}
    
      />
      
    </group>
  );
};
