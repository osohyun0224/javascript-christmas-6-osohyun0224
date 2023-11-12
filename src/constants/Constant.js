const WOOTECO_MENU_PRICES = Object.freeze({
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
});

const D_DAY_DISCOUNT = Object.freeze({
  startDay: 1,
  endDay: 25,
  baseDiscount: 1000,
  incrementPerDay: 100
});

export { WOOTECO_MENU_PRICES, D_DAY_DISCOUNT };