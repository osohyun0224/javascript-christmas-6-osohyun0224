import { ERROR_MESSAGE } from "../constants/Message";
import { WOOTECO_MENU_PRICES, BEVERAGES_MENUS } from "../constants/Constant";

class OrderMenusValidator {
  #orderItems;

  constructor(orderItems) {
    this.#orderItems = orderItems;
  }

  validateOrder() {
    this.#validateMenuExists();
    this.#validateQuantity();
    this.#validateFormat();
    this.#validateOnlyBeverages();
    this.#validateDuplicateMenu();
    this.#validateTotalQuantity();
  }

  #validateMenuExists() {
    const allMenuValid = this.#orderItems.every(
      ([item]) => WOOTECO_MENU_PRICES[item],
    );
    if (!allMenuValid) {
      throw new Error(ERROR_MESSAGE.invalidOrder);
    }
  }

  #validateQuantity() {
    const allQuantityValid = this.#orderItems.every(
      ([, quantity]) => parseInt(quantity, 10) >= 1,
    );
    if (!allQuantityValid) {
      throw new Error(ERROR_MESSAGE.invalidOrder);
    }
  }

  #validateFormat() {
    const correctFormat = this.#orderItems.every((item) => item.length === 2);
    if (!correctFormat) {
      throw new Error(ERROR_MESSAGE.invalidOrder);
    }
  }

  #validateOnlyBeverages() {
    const onlyBeverages = this.#orderItems.every(([item]) =>
      BEVERAGES_MENUS.includes(item),
    );
    if (onlyBeverages) {
      throw new Error(ERROR_MESSAGE.invalidOrder);
    }
  }

  #validateDuplicateMenu() {
    const uniqueMenuItems = new Set(this.#orderItems.map((item) => item[0]));
    if (uniqueMenuItems.size !== this.#orderItems.length) {
      throw new Error(ERROR_MESSAGE.invalidOrder);
    }
  }

  #validateTotalQuantity() {
    const totalQuantity = this.#orderItems.reduce(
      (sum, [, quantity]) => sum + parseInt(quantity, 10),
      0,
    );
    if (totalQuantity > 20) {
      throw new Error(ERROR_MESSAGE.invalidOrder);
    }
  }
}

export default OrderMenusValidator;
