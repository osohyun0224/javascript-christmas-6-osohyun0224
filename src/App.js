import { Console } from "@woowacourse/mission-utils";
import InputView from "./views/InputView";
import OutputView from "./views/OutputView";
import CalculateOriginTotalPrice from "./domain/CalculateOriginTotalPrice";
import CalculateDDayDiscount from "./domain/CalculateDDayDiscount";
import CalculateDailyDiscount from "./domain/CalculateDailyDiscount";
import CalculateSpecialDiscount from "./domain/CalculateSpecialDiscount";
import CalculateGiveawayEvent from "./domain/CalculateGiveawayEvent";
import { WOOTECO_MENU_PRICES } from "./constants/Constant";
import { GUIDE_MESSAGE, EVENT_TITLE } from "./constants/Message";

class App {
  constructor() {
    this.menuPrices = WOOTECO_MENU_PRICES;
    this.originTotalPriceCalculator = new CalculateOriginTotalPrice(this.menuPrices);
    this.dDayDiscountCalculator = new CalculateDDayDiscount();
    this.dailyDiscountCalculator = new CalculateDailyDiscount(this.menuPrices);
    this.specialDiscountCalculator = new CalculateSpecialDiscount();
    this.giveawayEventCalculator = new CalculateGiveawayEvent(this.menuPrices);
  }

  async run() {
    OutputView.printIntroMessage();
    try {
      const visitDate = await InputView.readDate();
      const orderItems = await InputView.readOrder();
      this.calculateResult(visitDate,orderItems);
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
    
    if (totalDiscount > 0) {
      discountsApplied.push(`크리스마스 디데이 할인: -${this.formatCurrency(totalDiscount)}`);
    }

    const { totalDiscount: specialDiscount, discountsApplied: specialDiscountsApplied } = this.specialDiscountCalculator.calculate(visitDate);
    totalDiscount += specialDiscount;
    discountsApplied.push(...specialDiscountsApplied);

    const { totalDiscount: giveawayDiscount, discountsApplied: giveawayDiscountsApplied, giftedItem } = this.giveawayEventCalculator.calculate(totalOrderAmount);
    totalDiscount += giveawayDiscount;
    discountsApplied.push(...giveawayDiscountsApplied);

    let finalAmount = totalOrderAmount - (totalDiscount - giveawayDiscount);
  }
}

export default App;