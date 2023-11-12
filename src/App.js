import { Console } from "@woowacourse/mission-utils";
import InputView from "./views/InputView";
import OutputView from "./views/OutputView";
import { GUIDE_MESSAGE, EVENT_TITLE } from "./constants/Message";
import { WOOTECO_MENU_PRICES } from "./constants/Constant";
import CalculateOriginTotalPrice from "./domain/CalculateOriginTotalPrice";
import CalculateDDayDiscount from "./domain/CalculateDDayDiscount";

class App {
  constructor() {
    this.menuPrices = WOOTECO_MENU_PRICES;
    this.originTotalPriceCalculator = new CalculateOriginTotalPrice(this.menuPrices);
    this.dDayDiscountCalculator = new CalculateDDayDiscount();
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
  }
}

export default App;