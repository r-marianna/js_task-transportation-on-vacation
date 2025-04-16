/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_OFF = 50;
  const SMALL_TERM = 3;
  const SMALL_TERM_OFF = 20;

  const rentCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return rentCost - LONG_TERM_OFF;
  }

  if (days >= SMALL_TERM) {
    return rentCost - SMALL_TERM_OFF;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
