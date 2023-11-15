import { GIVEAWAY_EVENT_THRESHOLD, GIVEAWAY_ITEM } from "../constants/Constant";
import { DISCOUNT_LABELS, GUIDE_MESSAGE } from "../constants/Message";

class CalculateGiveawayEvent {
  #minimumOrderAmount;
  #giftItem;
  #giftItemPrice;

  constructor(menuPrices) {
    this.#minimumOrderAmount = GIVEAWAY_EVENT_THRESHOLD;
    this.#giftItem = GIVEAWAY_ITEM;
    this.#giftItemPrice = menuPrices[this.#giftItem.split(" ")[0]];
  }

  calculate(totalOrderAmount) {
    if (totalOrderAmount >= this.#minimumOrderAmount) {
      return {
        totalDiscount: this.#giftItemPrice,
        discountsApplied: [
          `${DISCOUNT_LABELS.giveawayEvent}${this.#giftItemPrice}`,
        ],
        giftedItem: this.#giftItem,
      };
    }

    return {
      totalDiscount: 0,
      discountsApplied: [],
      giftedItem: GUIDE_MESSAGE.nothing,
    };
  }
}

export default CalculateGiveawayEvent;
