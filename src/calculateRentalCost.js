/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = days * 40;
  const longTerm = 7;
  const longTermOff = 50;
  const middleTerm = 3;
  const middleTermOff = 20;

  if (days >= longTerm) {
    return rentCost - longTermOff;
  }

  if (days >= middleTerm) {
    return rentCost - middleTermOff;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
