export default function estAgeBasedOnWeight (currentWeight, birthWeight){
    if (currentWeight >= 30000) {
        const age = Math.floor((currentWeight + 20000) / 5000);
        return [age, "years"];
      } else if (currentWeight < 30000 && currentWeight > 10000) {
        let year = 1;
        let weight = 10500;
        while (weight <= currentWeight) {
          weight += 2000;
          year++;
        }
        return [year - 1, (year - 1 !== 1) ?  "years" : "year"];
      }
      else if(currentWeight > birthWeight + (600 + 800 * 3 + 400 * 8)){
          return [1, "year"];
      } 
      else if (currentWeight > birthWeight + (600 + 800 * 3)) {
        let month = 4;
        let weight = birthWeight + (600 + 800 * 3);
        while (weight <= currentWeight) {
          weight += 400;
          month++;
        }
  
        return [month - 1, "months"];
      } else if (currentWeight > birthWeight + 600) {
        let month = 1;
        let weight = birthWeight + 600;
        while (weight <= currentWeight) {
          weight += 800;
          month++;
        }
  
        return [month - 1, "months"]
      } else {
        return [1, "month"];
      }
}