const primeFactors = (number) => {
  if (number === 1) return [];
  if (number === 2) return [2];
  if (number === 3) return [3];

  let divisor = 2;
  let rest = number;
  let divisors = [];
  while (rest != 0 && divisor <= rest) {
    if (rest % divisor === 0) {
      rest = rest / divisor;
      divisors.push(divisor);
    } else {
      divisor++;
    }
  }
  return divisors;    
};

module.exports = {primeFactors}