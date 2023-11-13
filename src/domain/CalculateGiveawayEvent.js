import { GIVEAWAY_EVENT_THRESHOLD, GIVEAWAY_ITEM } from "../constants/Constant";

class CalculateGiveawayEvent {
  #minimumOrderAmount;
  #giftItem;
  #giftItemPrice;

  constructor(menuPrices) {
    this.#minimumOrderAmount = GIVEAWAY_EVENT_THRESHOLD;
    this.#giftItem = GIVEAWAY_ITEM;
    this.#giftItemPrice = menuPrices[this.#giftItem];
  }

  calculate(totalOrderAmount) {
    if (totalOrderAmount >= this.#minimumOrderAmount) {
      return {
        totalDiscount: this.#giftItemPrice,
        discountsApplied: [`증정 이벤트: -${this.#giftItemPrice}`],
        giftedItem: `${this.#giftItem} 1개`
      };
    }

    return { totalDiscount: 0, discountsApplied: [], giftedItem: '없음' };
  }
}

export default CalculateGiveawayEvent;
