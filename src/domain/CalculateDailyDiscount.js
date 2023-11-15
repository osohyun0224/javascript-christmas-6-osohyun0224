import { WOOTECO_MAIN_MENUS, WOOTECO_DESSERT_MENUS } from "../constants/Constant";
import { DISCOUNT_LABELS } from "../constants/Message";

class CalculateDailyDiscount {
  #menuPrices;
  #weekendItems;
  #weekdayItems;
  #weekendDiscountPerItem;
  #weekdayDiscountPerItem;

  constructor(menuPrices, weekendDiscountPerItem = 2023, weekdayDiscountPerItem = 2023) {
    this.#menuPrices = menuPrices;
    this.#weekendItems = WOOTECO_MAIN_MENUS;
    this.#weekdayItems = WOOTECO_DESSERT_MENUS;
    this.#weekendDiscountPerItem = weekendDiscountPerItem;
    this.#weekdayDiscountPerItem = weekdayDiscountPerItem;
  }

  calculate(visitDate, orderItems) {
    let totalDiscount = 0;
    let discountsApplied = [];

    orderItems.forEach(([menuItem, quantity]) => {
      quantity = parseInt(quantity, 10);
      let discount = 0;

      if (this.#isWeekend(visitDate) && this.#weekendItems.includes(menuItem)) {
        discount = this.#weekendDiscountPerItem * quantity;
      }

      if (!this.#isWeekend(visitDate) && this.#weekdayItems.includes(menuItem)) {
        discount = this.#weekdayDiscountPerItem * quantity;
      }

      if (discount > 0) {
        totalDiscount += discount;
        const discountLabel = this.#isWeekend(visitDate) ? DISCOUNT_LABELS.weekendDiscount : DISCOUNT_LABELS.weekdayDiscount;
        discountsApplied.push(`${discountLabel}${discount}`);
      }
    });

    return { totalDiscount, discountsApplied };
  }

  #isWeekend(visitDate) {
    return visitDate % 7 === 5 || visitDate % 7 === 6;
  }
}

export default CalculateDailyDiscount;
