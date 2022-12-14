class DescriptiveStatistics {
  calculateMean(values) {
    const sumOfValues = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const numOfValues = values.length;
    return sumOfValues / numOfValues;
  }

  calculateMedian(values) {
    // sort our values
    values.sort((a, b) => a - b);
    values;
    // check if the values length is even or odd
    if (values.length % 2 == 1) {
      // it is odd
      // return values[(values.length /2) - 0.5]
      return values[(values.length - 1) / 2];
    } else {
      // it is even
      return (values[values.length / 2 - 1] + values[values.length / 2]) / 2;
    }
  }

  calculateMode(values) {
    values.sort((a, b) => a - b);
    const hash = {};
    let mode = 0;
    for (const val of values) {
      if (val in hash) {
        // appeared more than onces
        hash[val]++;
        if (hash[val] > mode) {
          mode = val;
        }
      } else {
        // first time it is appearing
        hash[val] = 1;
      }
    }
    return mode;
  }

  calculateVariance(values) {
    const mean = this.calculateMean(values);
    let varianceValues = values.reduce(
      (accumulator, currentValue) =>
        accumulator + (((currentValue - mean) ^ 2) / values.length - 1),
      0
    );
    return Math.abs(varianceValues);
  }

  calculateStandardDeviation(values) {
    return Math.sqrt(varianceValues);
  }

  calculateRange(values) {
    values.sort((a, b) => a - b);
    return [values[0], values[values.length - 1]];
  }

  calculateMeanDeviation(values) {
    const mean = this.calculateMean(values);

    const newArray = values.map((x) => x - mean);

    const finalResult = newArray.reduce((a, b) => a + b);

    const meanDeviation = Math.abs(finalResult);

    return meanDeviation;
  }
  calculateQuartileDeviation(values) {
    // to find q1
    const arr = values;
    let q1 = arr.length + 1;
    let div = 1 / 4;

    let jointCalc = div * q1;

    let jointCalcs = Math.floor(div * q1);

    let remainder = jointCalc - jointCalcs;

    let arrs = arr[jointCalcs - 1];
    let arrayss = arr[jointCalcs];

    let calculated = arrayss - arrs;
    let Q11 = calculated * remainder;
    let Q1 = Q11 + arrs;
    console.log(Q1);
    // for Q3

    let q3 = arr.length + 1;
    let div3 = 3 / 4;
    let jointCalc3 = div3 * q3;

    let jointCalcs3 = Math.floor(div3 * q3);

    let remainder3 = jointCalc3 - jointCalcs3;

    let arrs3 = arr[jointCalcs3 - 1];
    let arrayss3 = arr[jointCalcs3];

    let calculated3 = arrayss3 - arrs3;
    let Q13 = calculated3 * remainder3;
    let Q3 = Q13 + arrs3;
    console.log(Q3);

    let QD1 = Q3 - Q1;
    let QD = QD1 / 2;
    return QD;
  }
}
const values = [1, 2, 3, 4, 5];

const statistics = new DescriptiveStatistics();
console.log(statistics.calculateMean(values));
console.log(statistics.calculateMedian(values));
console.log(statistics.calculateMode(values));
console.log(statistics.calculateVariance(values));
console.log(statistics.calculateMeanDeviation(values));
console.log(statistics.calculateQuartileDeviation(values));
