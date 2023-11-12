import { Console } from "@woowacourse/mission-utils";
import InputView from "./views/InputView";
import OutputView from "./views/OutputView";
import { WOOTECO_MENU_PRICES } from "./constants/Constant";
import CalculateOriginTotalPrice from "./domain/CalculateOriginTotalPrice";

class App {
  constructor() {
    this.menuPrices = WOOTECO_MENU_PRICES;
    this.originTotalPriceCalculator = new CalculateOriginTotalPrice(this.menuPrices);
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
  }
}

export default App;