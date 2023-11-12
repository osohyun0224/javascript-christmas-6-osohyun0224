import { Console } from "@woowacourse/mission-utils";
import InputView from "./views/InputView";
import OutputView from "./views/OutputView";
import { WOOTECO_MENU_PRICES } from "./constants/Constant";
import CalculateOriginTotalPrice from "./domain/CalculateOriginTotalPrice";
import CalculateDDayDiscount from "./domain/CalculateDDayDiscount";
import CalculateDailyDiscount from "./domain/CalculateDailyDiscount";

class App {
  constructor() {
    this.menuPrices = WOOTECO_MENU_PRICES;
    this.originTotalPriceCalculator = new CalculateOriginTotalPrice(this.menuPrices);
    this.dDayDiscountCalculator = new CalculateDDayDiscount();
    this.dailyDiscountCalculator = new CalculateDailyDiscount(this.menuPrices);
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
  }
}

export default App;
