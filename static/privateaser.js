/*eslint-disable space-unary-ops*/
'use strict';

const PRIVATEASER = (() => {
  const TREASURY_TAX_PERSON = 1;
  const DEDUCTIBLE_PER_PERSON = 1;

  /**
   * Get bar information
   *
   * @return {Object}
   */
  const getBar = () => {
    return {
      'name': document.querySelector('#bar .name').value,
      'pricePerHour': document.querySelector('#bar .price-by-hour').value,
      'pricePerPerson': document.querySelector('#bar .price-by-person').value
    };
  };

  /**
   * Get discount percent according people
   *
   * @param  {Number} volume
   * @return {Number}
   */
  const discount = persons => {
    if (persons > 60) {
      return 0.5;
    }

    if (persons > 20) {
      return 0.3;
    }

    if (persons > 10) {
      return 0.1;
    }

    return 0;
  };

  /**
   * Compute shipping commission
   *
   * @param  {Number} price
   * @param  {Number} days
   * @return {Object}
   */
  const bookingCommission = (price, persons) => {
    const value = parseFloat((price * 0.3).toFixed(2));
    const insurance = parseFloat((value * 0.5).toFixed(2));
    const treasury = Math.ceil(persons / TREASURY_TAX_PERSON);

    return {
      insurance,
      treasury,
      value,
      'privateaser': parseFloat((value - insurance - treasury).toFixed(2))
    };
  };

  /**
   * Compute the rental price
   *
   * @param  {Object} bar
   * @param  {String} time
   * @param  {String} time
   * @return {String} price
   */
  const bookingPrice = (bar, time, persons) => {
    const percent = discount(persons);
    const pricePerPerson = bar.pricePerPerson - bar.pricePerPerson * percent;

    return parseFloat((time * bar.pricePerHour + persons * pricePerPerson).toFixed(2));
  };

  /**
   * Pay each actors
   *
   * @param  {Object} trucker
   * @param  {String} distance
   * @param  {String} volume
   * @param  {Boolean} option
   * @return {Object}
   */
  const payActors = (bar, time, persons, option) => {
    const price = bookingPrice(bar, time, persons);
    const commission = bookingCommission(price, persons);
    const deductibleOption = option ? DEDUCTIBLE_PER_PERSON * persons : 0;

    var actors = [{
      'who': 'booker',
      'type': 'debit',
      'amount': price + deductibleOption
    }, {
      'who': 'bar',
      'type': 'credit',
      'amount': price - commission.value
    }, {
      'who': 'insurance',
      'type': 'credit',
      'amount': commission.insurance
    }, {
      'who': 'treasury',
      'type': 'credit',
      'amount': commission.treasury
    }, {
      'who': 'privateaser',
      'type': 'credit',
      'amount': commission.privateaser + deductibleOption
    }];

    return actors;
  };

  return {
    'getBar': getBar,
    'payActors': payActors
  };
})();
