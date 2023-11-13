import { SPECIAL_DISCOUNT_DAYS, SPECIAL_DISCOUNT_AMOUNT } from "../constants/Constant";

class CalculateSpecialDiscount {
  calculate(visitDate) {
    if (SPECIAL_DISCOUNT_DAYS.includes(visitDate)) {
      return {
        totalDiscount: SPECIAL_DISCOUNT_AMOUNT,
        discountsApplied: [`특별 할인: -${SPECIAL_DISCOUNT_AMOUNT}`]
      };
    }
    return { totalDiscount: 0, discountsApplied: [] };
  }
}

export default CalculateSpecialDiscount;

