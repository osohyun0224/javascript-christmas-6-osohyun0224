import { ERROR_MESSAGE } from "../constants/Message";

class VisitDateValidator {
  #visitDate;

  constructor(visitDate) {
    this.#visitDate = visitDate;
  }

  validateVisitDate() {
    this.#validateIsNumber();
    this.#validateDateRange();
  }

  #validateIsNumber() {
    if (isNaN(Number(this.#visitDate))) {
      throw new Error(ERROR_MESSAGE.invalidDate);
    }
  }

  #validateDateRange() {
    const date = Number(this.#visitDate);
    if (date < 1 || date > 31) {
      throw new Error(ERROR_MESSAGE.invalidDate);
    }
  }
}

export default VisitDateValidator;
