import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";
import VisitDateValidator from "../validate/VisitDateValidator";
import OrderMenusValidator from "../validate/OrderMenusValidator";

const InputView = {
  async readDate() {
    while (true) {
      try {
        const visitDate = await Console.readLineAsync(
          GUIDE_MESSAGE.insertVisitDate,
        );
        const validator = new VisitDateValidator(visitDate);
        validator.validateVisitDate();
        return parseInt(visitDate, 10);
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  async readOrder() {
    while (true) {
      try {
        Console.print(GUIDE_MESSAGE.insertMenus);
        const input = await Console.readLineAsync();
        const orderItems = input
          .split(",")
          .map((item) => item.trim().split("-"));
        const validator = new OrderMenusValidator(orderItems);
        validator.validateOrder();
        return orderItems;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
};

export default InputView;
