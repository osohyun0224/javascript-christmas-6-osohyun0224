import CalculateGiveawayEvent from "../src/domain/CalculateGiveawayEvent";

describe("증정 이벤트 계산 로직 테스트", () => {
  const GIVEAWAY_EVENT_THRESHOLD = 120000;
  const GIVEAWAY_ITEM = "샴페인";
  const menuPrices = {
    "샴페인": 25000
  };
  const giveawayEventCalculator = new CalculateGiveawayEvent(menuPrices);

  test("주문 금액이 증정 이벤트 조건을 충족하는 경우 증정 이벤트 적용", () => {
    const totalOrderAmount = GIVEAWAY_EVENT_THRESHOLD + 5000;
    const expectedDiscount = menuPrices[GIVEAWAY_ITEM];

    const result = giveawayEventCalculator.calculate(totalOrderAmount);
    expect(result.totalDiscount).toBe(expectedDiscount);
    expect(result.discountsApplied).toContain(`증정 이벤트: -${expectedDiscount}`);
    expect(result.giftedItem).toBe(`${GIVEAWAY_ITEM} 1개`);
  });

  test("주문 금액이 증정 이벤트 조건에 미치지 못하는 경우 증정 이벤트 미적용", () => {
    const totalOrderAmount = GIVEAWAY_EVENT_THRESHOLD - 5000;
    
    const result = giveawayEventCalculator.calculate(totalOrderAmount);
    expect(result.totalDiscount).toBe(0);
    expect(result.discountsApplied).toHaveLength(0);
    expect(result.giftedItem).toBe('없음');
  });
});
