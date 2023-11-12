import VisitDateValidator from "../src/validate/VisitDateValidator";

describe("VisitDateValidator 테스트", () => {
  describe("validateIsNumber 메소드", () => {
    test("숫자가 아닌 입력에 대해 에러를 발생시킨다", () => {
      const invalidInput = "abc";
      const validator = new VisitDateValidator(invalidInput);
      
      expect(() => validator.validateVisitDate()).toThrow("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    });

    test("숫자인 입력에 대해 에러를 발생시키지 않는다", () => {
      const validInput = "10";
      const validator = new VisitDateValidator(validInput);
      
      expect(() => validator.validateVisitDate()).not.toThrow("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    });
  });

  describe("validateDateRange 메소드", () => {
    test("범위 밖의 숫자에 대해 에러를 발생시킨다", () => {
      const invalidInput = "32";
      const validator = new VisitDateValidator(invalidInput);
      
      expect(() => validator.validateVisitDate()).toThrow("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    });

    test("유효한 범위 내의 숫자에 대해 에러를 발생시키지 않는다", () => {
      const validInput = "15";
      const validator = new VisitDateValidator(validInput);
      
      expect(() => validator.validateVisitDate()).not.toThrow("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    });
  });
});
