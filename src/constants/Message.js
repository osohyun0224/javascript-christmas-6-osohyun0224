const GUIDE_MESSAGE = Object.freeze({
  intro: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  insertVisitDate: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
  insertMenus: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
  startEventMonth: "12월 ",
  startEventDay: "일에 ",
  startEventGuide: "우테코 식장에서 받을 이벤트 혜택 미리 보기!"
});

const EVENT_TITLE = Object.freeze({
  orderMenu: "<주문 메뉴>",
  originTotalPrice: "<할인 전 총주문 금액>",
  giveawayMeue: "<증정 메뉴>",
  benefitDetails: "<혜택 내역>",
  totalBenefitPrice: "<총혜택 금액>",
  discountedTotalPrice: "<할인 후 예상 결제 금액>",
  eventBadge: "<12월 이벤트 배지>"
});

export { GUIDE_MESSAGE, EVENT_TITLE }