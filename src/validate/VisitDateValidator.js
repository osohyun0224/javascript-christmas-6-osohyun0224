import { VISIT_DATE_ERROR_MESSGAE } from "../constants/Message";

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
          throw new Error(VISIT_DATE_ERROR_MESSGAE.invalidDate);
      }
  }

  #validateDateRange() {
      const date = Number(this.#visitDate);
      if (date < 1 || date > 31) {
          throw new Error(VISIT_DATE_ERROR_MESSGAE.invalidDate);
      }
  }
}

export default VisitDateValidator;