import { D_DAY_DISCOUNT } from "../constants/Constant"

class CalculateDDayDiscount {
  #startDay = D_DAY_DISCOUNT.startDay;
  #endDay = D_DAY_DISCOUNT.endDay;
  #baseDiscount = D_DAY_DISCOUNT.baseDiscount;
  #incrementPerDay = D_DAY_DISCOUNT.incrementPerDay;

  calculate(visitDate) {
    if (this.#isEligibleForDiscount(visitDate)) {
      return this.#calculateDiscount(visitDate);
    }
    return 0;
  }

  #isEligibleForDiscount(visitDate) {
    return visitDate >= this.#startDay && visitDate <= this.#endDay;
  }

  #calculateDiscount(visitDate) {
    return this.#baseDiscount + (visitDate - this.#startDay) * this.#incrementPerDay;
  }
}

export default CalculateDDayDiscount;
