class Math {
  constructor() {}

  castNumber = (num) => {
    if (isNaN(num)) {
      throw new Error("Not a number");
    }

    return parseInt(num);
  };

  sum(num1, num2) {
    return this.castNumber(num1) + this.castNumber(num2);
  }
}

export default Math;
