import EstAge from "./estimatedAgeBasedOnWeight";

export default class Child {
  constructor(childData) {
    this.birthWeight = childData.birthWeight || 3200;
    this.age = childData.age;
    this.height = childData.height;
    this.weight = childData.weight;
    this.headCircum = childData.headCircum;
    this.chestCircum = childData.chestCircm;
  }

  get estimatedAge() {
    return EstAge(this.weight, this.birthWeight);
  }
}
