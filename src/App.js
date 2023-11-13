import { Console } from "@woowacourse/mission-utils";
import InputView from "./views/InputView";
import OutputView from "./views/OutputView";
import CalculateOriginTotalPrice from "./domain/CalculateOriginTotalPrice";
import CalculateDDayDiscount from "./domain/CalculateDDayDiscount";
import CalculateDailyDiscount from "./domain/CalculateDailyDiscount";
import CalculateSpecialDiscount from "./domain/CalculateSpecialDiscount";
import CalculateGiveawayEvent from "./domain/CalculateGiveawayEvent";
import CalculateEventBadge from "./domain/CalculateEventBadge";
import { WOOTECO_MENU_PRICES } from "./constants/Constant";

class App {
    constructor() {
        this.menuPrices = WOOTECO_MENU_PRICES;
        this.originTotalPriceCalculator = new CalculateOriginTotalPrice(this.menuPrices);
        this.dDayDiscountCalculator = new CalculateDDayDiscount();
        this.dailyDiscountCalculator = new CalculateDailyDiscount(this.menuPrices);
        this.specialDiscountCalculator = new CalculateSpecialDiscount();
        this.giveawayEventCalculator = new CalculateGiveawayEvent(this.menuPrices);
        this.eventBadgeCalculator = new CalculateEventBadge();
    }

    async run() {
        OutputView.printIntroMessage();
        try {
            const visitDate = await InputView.readDate();
            const orderItems = await InputView.readOrder();
            this.calculateResult(visitDate, orderItems);
        } catch (error) {
            Console.print(error.message);
        }
    }

    calculateResult(visitDate, orderItems) {
        const totalOrderAmount = this.originTotalPriceCalculator.calculate(orderItems);
        let totalDiscount = this.dDayDiscountCalculator.calculate(visitDate);

        const { totalDiscount: dailyDiscount, discountsApplied: dailyDiscountsApplied } = this.dailyDiscountCalculator.calculate(visitDate, orderItems);
        totalDiscount += dailyDiscount;
        let discountsApplied = [...dailyDiscountsApplied];

        const { totalDiscount: specialDiscount, discountsApplied: specialDiscountsApplied } = this.specialDiscountCalculator.calculate(visitDate);
        totalDiscount += specialDiscount;
        discountsApplied.push(...specialDiscountsApplied);

        const { totalDiscount: giveawayDiscount, discountsApplied: giveawayDiscountsApplied, giftedItem } = this.giveawayEventCalculator.calculate(totalOrderAmount);
        totalDiscount += giveawayDiscount;
        discountsApplied.push(...giveawayDiscountsApplied);

        let finalAmount = totalOrderAmount - (totalDiscount - giveawayDiscount);
        let badge = this.eventBadgeCalculator.calculate(totalDiscount);

        OutputView.printEventPreview(visitDate);
        OutputView.printOrderMenu(orderItems);
        OutputView.printOriginTotalPrice(totalOrderAmount);
        OutputView.printGiveawayMenu(giftedItem);
        OutputView.printBenefitDetails(discountsApplied);
        OutputView.printTotalBenefitAmount(totalDiscount);
        OutputView.printDiscountedTotalAmount(finalAmount);
        OutputView.printEventBadge(badge);
    }
}

export default App;
