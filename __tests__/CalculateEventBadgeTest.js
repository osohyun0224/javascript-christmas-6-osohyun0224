import CalculateEventBadge from '../src/domain/CalculateEventBadge';

describe('이벤트 뱃지 계산 로직 테스트', () => {
  let eventBadgeCalculator;
  const BADGE_THRESHOLDS = {
    star: 5000,
    tree: 10000,
    santa: 20000
  };
  const BADGE_NAMES = {
    star: "별",
    tree: "트리",
    santa: "산타",
    none: "없음"
  };

  beforeEach(() => {
    eventBadgeCalculator = new CalculateEventBadge();
  });

  test('할인 금액이 별 뱃지 기준 미만일 경우, 뱃지 없음', () => {
    expect(eventBadgeCalculator.calculate(BADGE_THRESHOLDS.star - 1)).toBe(BADGE_NAMES.none);
  });

  test('할인 금액이 별 뱃지 기준 이상일 경우, 별 뱃지 부여', () => {
    expect(eventBadgeCalculator.calculate(BADGE_THRESHOLDS.star)).toBe(BADGE_NAMES.star);
  });

  test('할인 금액이 트리 뱃지 기준 이상일 경우, 트리 뱃지 부여', () => {
    expect(eventBadgeCalculator.calculate(BADGE_THRESHOLDS.tree)).toBe(BADGE_NAMES.tree);
  });

  test('할인 금액이 산타 뱃지 기준 이상일 경우, 산타 뱃지 부여', () => {
    expect(eventBadgeCalculator.calculate(BADGE_THRESHOLDS.santa)).toBe(BADGE_NAMES.santa);
  });
});
