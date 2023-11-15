import { D_DAY_DISCOUNT } from "../constants/Constant";
import { DISCOUNT_LABELS } from "../constants/Message";

class CalculateDDayDiscount {
  #startDay = D_DAY_DISCOUNT.startDay;
  #endDay = D_DAY_DISCOUNT.endDay;
  #baseDiscount = D_DAY_DISCOUNT.baseDiscount;
  #incrementPerDay = D_DAY_DISCOUNT.incrementPerDay;

  calculate(visitDate) {
    if (this.#isEligibleForDiscount(visitDate)) {
      const discountAmount = this.#calculateDiscount(visitDate);
      return {
        totalDiscount: discountAmount,
        discountDetail: `${DISCOUNT_LABELS.dDayDiscount}${discountAmount}`
      };
    }
    return { totalDiscount: 0, discountDetail: '' };
  }

  #isEligibleForDiscount(visitDate) {
    return visitDate >= this.#startDay && visitDate <= this.#endDay;
  }

  #calculateDiscount(visitDate) {
    return this.#baseDiscount + (visitDate - this.#startDay) * this.#incrementPerDay;
  }
}

export default CalculateDDayDiscount;
