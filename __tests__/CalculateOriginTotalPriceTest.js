import CalculateOriginTotalPrice from "../src/domain/CalculateOriginTotalPrice";

describe("CalculateOriginTotalPrice 테스트", () => {
  const menuPrices = {
    "티본스테이크": 55000,
    "바비큐립": 54000,
    "레드와인": 60000, 
  };

  let calculator;

  beforeEach(() => {
    calculator = new CalculateOriginTotalPrice(menuPrices);
  });

  test("할인 전 총주문 금액 계산", () => {
    const orderItems = [["티본스테이크", "1"], ["바비큐립", "2"], ["레드와인", "1"]];
    const expectedTotal = 223000;

    const totalAmount = calculator.calculate(orderItems);
    expect(totalAmount).toBe(expectedTotal);
  });
});