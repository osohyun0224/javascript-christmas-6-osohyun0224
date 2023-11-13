import { BADGE_THRESHOLDS, BADGE_NAMES } from "../constants/Constant";

class CalculateEventBadge {
    constructor() {
        this.thresholds = BADGE_THRESHOLDS;
    }

    calculate(totalDiscount) {
        if (totalDiscount >= this.thresholds.santa) {
            return BADGE_NAMES.santa;
        } 
        if (totalDiscount >= this.thresholds.tree) {
            return BADGE_NAMES.tree;
        }
        if (totalDiscount >= this.thresholds.star) {
            return BADGE_NAMES.star;
        }
        return BADGE_NAMES.none;
    }
}

export default CalculateEventBadge;
