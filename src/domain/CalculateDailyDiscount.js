import { WOOTECO_MAIN_MENUS, WOOTECO_DESSERT_MENUS } from "../constants/Constant";

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
        discountsApplied.push(`${this.#isWeekend(visitDate) ? '주말' : '평일'} 할인: -${discount}`);
      }
    });

    return { totalDiscount, discountsApplied };
  }

  #isWeekend(visitDate) {
    return visitDate % 7 === 0 || visitDate % 7 === 6;
  }
}

export default CalculateDailyDiscount;
