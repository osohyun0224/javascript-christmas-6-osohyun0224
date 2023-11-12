import CalculateDailyDiscount from "../src/domain/CalculateDailyDiscount";

describe("평일 및 주말 할인 계산 로직 테스트", () => {

  const WOOTECO_MENU_PRICES = {
    "양송이수프": 6000,
    "타파스": 5500,
    "시저샐러드": 8000,
    "티본스테이크": 55000,
    "바비큐립": 54000,
    "해산물파스타": 35000,
    "크리스마스파스타": 25000,
    "초코케이크": 15000,
    "아이스크림": 5000,
    "제로콜라": 3000,
    "레드와인": 60000,
    "샴페인": 25000
  };

  let dailyDiscountCalculator;

  beforeEach(() => {
    dailyDiscountCalculator = new CalculateDailyDiscount(WOOTECO_MENU_PRICES);
  });

  test("주말에는 주말 메뉴에 대해 할인이 적용되어야 한다", () => {
    const weekendDay = 6; // 토요일
    const orderItems = [["티본스테이크", "2"]];
    const expectedDiscount = 2023 * 2;

    const { totalDiscount, discountsApplied } = dailyDiscountCalculator.calculate(weekendDay, orderItems);
    expect(totalDiscount).toBe(expectedDiscount);
    expect(discountsApplied).toContain(`주말 할인: -${expectedDiscount}`);
  });

  test("평일에는 평일 메뉴에 대해 할인이 적용되어야 한다", () => {
    const weekday = 3; // 수요일
    const orderItems = [["초코케이크", "1"]];
    const expectedDiscount = 2023 * 1;

    const { totalDiscount, discountsApplied } = dailyDiscountCalculator.calculate(weekday, orderItems);
    expect(totalDiscount).toBe(expectedDiscount);
    expect(discountsApplied).toContain(`평일 할인: -${expectedDiscount}`);
  });

  test("주말과 평일 모두 해당하지 않는 메뉴에는 할인이 적용되지 않아야 한다", () => {
    const weekday = 3; // 수요일
    const orderItems = [["양송이수프", "1"]];

    const { totalDiscount, discountsApplied } = dailyDiscountCalculator.calculate(weekday, orderItems);
    expect(totalDiscount).toBe(0);
    expect(discountsApplied).toHaveLength(0);
  });

  test("복수의 메뉴에 대해 올바른 할인이 적용되어야 한다", () => {
    const weekday = 4; // 목요일
    const orderItems = [["티본스테이크", "1"], ["초코케이크", "2"]]; 
    const expectedDiscount = 2023 * 2; 

    const { totalDiscount, discountsApplied } = dailyDiscountCalculator.calculate(weekday, orderItems);
    expect(totalDiscount).toBe(expectedDiscount);
    expect(discountsApplied).toContain(`평일 할인: -${expectedDiscount}`);
  });
});