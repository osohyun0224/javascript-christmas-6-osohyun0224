import OrderMenusValidator from "../src/validate/OrderMenusValidator";

describe("OrderMenusValidator 테스트", () => {
  const menuPrices = {
    "티본스테이크": 55000,
    "바비큐립": 54000,
    "초코케이크": 15000,
    "제로콜라": 3000,
    "레드와인": 60000,
    "샴페인": 20000
  };

  describe("주문 수량 유효성 검사", () => {
    test("수량이 1 미만인 경우 에러를 발생시킨다", () => {
      const invalidOrder = [["티본스테이크", "0"]];
      const validator = new OrderMenusValidator(invalidOrder, menuPrices);

      expect(() => validator.validateOrder()).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    });
  });

  describe("주문 형식 유효성 검사", () => {
    test("잘못된 형식의 주문에 대해 에러를 발생시킨다", () => {
      const invalidOrder = [["티본스테이크"]];
      const validator = new OrderMenusValidator(invalidOrder, menuPrices);

      expect(() => validator.validateOrder()).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    });
  });

  describe("음료만 주문 유효성 검사", () => {
    test("음료만 주문한 경우 에러를 발생시킨다", () => {
      const invalidOrder = [["제로콜라", "1"], ["레드와인", "1"]];
      const validator = new OrderMenusValidator(invalidOrder, menuPrices);

      expect(() => validator.validateOrder()).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    });
  });

  describe("중복 메뉴 주문 유효성 검사", () => {
    test("중복된 메뉴를 주문한 경우 에러를 발생시킨다", () => {
      const invalidOrder = [["티본스테이크", "1"], ["티본스테이크", "1"]];
      const validator = new OrderMenusValidator(invalidOrder, menuPrices);

      expect(() => validator.validateOrder()).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    });
  });

  describe("총 주문 수량 유효성 검사", () => {
    test("총 주문 수량이 20을 초과하는 경우 에러를 발생시킨다", () => {
      const invalidOrder = Array(21).fill(["티본스테이크", "1"]);
      const validator = new OrderMenusValidator(invalidOrder, menuPrices);

      expect(() => validator.validateOrder()).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    });
  });
});