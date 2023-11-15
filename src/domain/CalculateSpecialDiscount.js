import { SPECIAL_DISCOUNT_DAYS, SPECIAL_DISCOUNT_AMOUNT } from "../constants/Constant";
import { DISCOUNT_LABELS } from "../constants/Message";

class CalculateSpecialDiscount {
  calculate(visitDate) {
    if (SPECIAL_DISCOUNT_DAYS.includes(visitDate)) {
      return {
        totalDiscount: SPECIAL_DISCOUNT_AMOUNT,
        discountsApplied: [`${DISCOUNT_LABELS.specialDiscount}${SPECIAL_DISCOUNT_AMOUNT}`]
      };
    }
    return { totalDiscount: 0, discountsApplied: [] };
  }
}

export default CalculateSpecialDiscount;
