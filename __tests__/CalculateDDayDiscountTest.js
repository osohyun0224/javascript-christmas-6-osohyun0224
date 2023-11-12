import CalculateDDayDiscount from "../src/domain/CalculateDDayDiscount";

describe("크리스마스 디데이 할인 계산 로직 테스트", () => {
  let dDayDiscountCalculator;

  beforeEach(() => {
    dDayDiscountCalculator = new CalculateDDayDiscount();
  });

  test("D-Day 할인이 적용되지 않는 날짜에는 할인 금액이 0원이어야 한다", () => {
    const nonDiscountDay = 25 + 1; 
    expect(dDayDiscountCalculator.calculate(nonDiscountDay)).toBe(0);
  });

  test("D-Day 할인이 적용되는 날짜에는 올바른 할인 금액을 반환해야 한다", () => {
    const discountDay = 1; 
    const expectedDiscount = 1000;
    expect(dDayDiscountCalculator.calculate(discountDay)).toBe(expectedDiscount);
  });

  test("D-Day 할인이 적용되는 범위 내의 날짜에 대해서는 증가하는 할인 금액을 반환해야 한다", () => {
    const discountDay = 1 + 5; 
    const expectedDiscount = 1000 + (5 * 100);
    expect(dDayDiscountCalculator.calculate(discountDay)).toBe(expectedDiscount);
  });
});
