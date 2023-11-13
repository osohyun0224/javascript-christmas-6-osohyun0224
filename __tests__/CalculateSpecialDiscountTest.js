import CalculateSpecialDiscount from "../src/domain/CalculateSpecialDiscount";

describe("특별 할인 계산 로직 테스트", () => {
  let specialDiscountCalculator;
  const SPECIAL_DISCOUNT_DAYS = [3, 10, 17, 24, 25, 31];
  const SPECIAL_DISCOUNT_AMOUNT = 1000;

  beforeEach(() => {
    specialDiscountCalculator = new CalculateSpecialDiscount();
  });

  test("특별 할인이 적용되는 날짜에 올바른 할인 금액과 할인 내역을 반환한다", () => {
    const discountDay = SPECIAL_DISCOUNT_DAYS[0]; 
    const expectedDiscountsApplied = [`특별 할인: -${SPECIAL_DISCOUNT_AMOUNT}`];
    const result = specialDiscountCalculator.calculate(discountDay);

    expect(result.totalDiscount).toBe(SPECIAL_DISCOUNT_AMOUNT);
    expect(result.discountsApplied).toEqual(expectedDiscountsApplied);
  });

  test("특별 할인이 적용되지 않는 날짜에 할인 금액이 0원이며, 할인 내역이 없다", () => {
    const nonDiscountDay = 1;
    const result = specialDiscountCalculator.calculate(nonDiscountDay);

    expect(result.totalDiscount).toBe(0);
    expect(result.discountsApplied).toHaveLength(0);
  });
});
