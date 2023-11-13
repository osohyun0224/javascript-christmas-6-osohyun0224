import { BADGE_THRESHOLDS, BADGE_NAMES } from "../constants/Constant";

class CalculateEventBadge {
  #thresholds = BADGE_THRESHOLDS;
  #badgeNames = BADGE_NAMES;

  calculate(totalDiscount) {
    if (totalDiscount >= this.#thresholds.santa) {
      return this.#badgeNames.santa;
    } 
    if (totalDiscount >= this.#thresholds.tree) {
      return this.#badgeNames.tree;
    }
    if (totalDiscount >= this.#thresholds.star) {
      return this.#badgeNames.star;
    }
    return this.#badgeNames.none;
  }
}

export default CalculateEventBadge;

