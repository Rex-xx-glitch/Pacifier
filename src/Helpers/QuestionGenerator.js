import Child from "./Calculations";
import weightImage from "../images/weight.png";
import {v4} from "uuid";

const Questiontype = [
  {
    type: "aW",
    template: [
      {
        data:
          "A [g], born with the weight of [bw], currently weighs [cw]. What is her expected age?",
      },
      {
        data:
          "A [g], with a birth weight of [bw], Examined by a pediatrician, weighs [cw]. What is her expected age?",
      },
    ],
  },
];

function generateWeight(birth) {
  let weight = 0;

  if (birth) {
    weight = Math.floor(Math.random() * 800) + 2600;
  } else {
    weight = Math.floor(Math.random() * 61600) + 3200;
  }

  return weight >= 9999 ? [weight / 1000, "kg"] : [weight, "g"];
}

function generateGender() {
  const gender = Math.floor(Math.random());
  return gender === 1 ? "boy" : "girl";
}

export default function generateQuestion() {

    const birthWeight = generateWeight(true);
    const cWeight = generateWeight(false);
    const gender = generateGender();

    const child = new Child({
      birthWeight: birthWeight[1] === "kg" ? birthWeight[0] * 1000 : birthWeight[0],
      weight: cWeight[1] === "kg" ? cWeight[0] * 1000 : cWeight[0],
    });


    const rnTemp = Math.floor(Math.random() * 2);
    const statement = Questiontype[0].template[rnTemp].data
      .replace("[g]", gender)
      .replace("[bw]", birthWeight[0] + " " + birthWeight[1])
      .replace("[cw]", cWeight);

    return {
        id: v4(),
        type: "aW",
        statement,
        answers: generateAgeAnswers(child.estimatedAge).sort((a, b) => a.id < b.id),
        tutor: {
            image: weightImage
        }
    }
  
}


function generateAgeAnswers(correctAnswer){
    const answers = [
      {
          id: v4(),
          statement: correctAnswer[0] + " " + correctAnswer[1],
          isCorrect: true
      },{
          id: v4(),
          statement: generateAge(correctAnswer[0])
      },{
          id: v4(),
          statement: generateAge(correctAnswer[0])
      },{
          id: v4(),
          statement: generateAge(correctAnswer[0])
      }
  ];

    

    return shuffle(answers);
}

function generateAge(correct){
    let age = Math.floor(Math.random() * 17) + 1;

    while(age === correct){
        age = Math.floor(Math.random() * 17) + 1;
    }


    let my = "years";
    if(age < 12){
        my = Math.floor(Math.random() * 2) === 0 ? "months": "years"; 
    }

    if(age === 1){
        my.replace("s", "");
    }

    return age + " " + my;
}

function shuffle(array){
  let tempValue = 0, randomIndex = 0;

  for(let i = array.length - 1; i > 0; i--){
    randomIndex = Math.floor(Math.random() * i);
    tempValue = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
}