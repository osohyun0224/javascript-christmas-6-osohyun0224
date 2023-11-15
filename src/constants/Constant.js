const WOOTECO_MENU_PRICES = Object.freeze({
  양송이수프: 6000,
  타파스: 5500,
  시저샐러드: 8000,
  티본스테이크: 55000,
  바비큐립: 54000,
  해산물파스타: 35000,
  크리스마스파스타: 25000,
  초코케이크: 15000,
  아이스크림: 5000,
  제로콜라: 3000,
  레드와인: 60000,
  샴페인: 25000,
});

const BEVERAGES_MENUS = Object.freeze(["제로콜라", "레드와인", "샴페인"]);

const D_DAY_DISCOUNT = Object.freeze({
  startDay: 1,
  endDay: 25,
  baseDiscount: 1000,
  incrementPerDay: 100,
});

const WOOTECO_MAIN_MENUS = Object.freeze([
  "티본스테이크",
  "바비큐립",
  "해산물파스타",
  "크리스마스파스타",
]);

const WOOTECO_DESSERT_MENUS = Object.freeze(["초코케이크", "아이스크림"]);

const SPECIAL_DISCOUNT_DAYS = Object.freeze([3, 10, 17, 24, 25, 31]);

const SPECIAL_DISCOUNT_AMOUNT = 1000;

const GIVEAWAY_EVENT_THRESHOLD = 120000;

const GIVEAWAY_ITEM = "샴페인 1개";

const BADGE_THRESHOLDS = Object.freeze({
  star: 5000,
  tree: 10000,
  santa: 20000,
});

const BADGE_NAMES = Object.freeze({
  star: "별",
  tree: "트리",
  santa: "산타",
  none: "없음",
});

const NEGATIVE_SIGN = "-";

const ZERO_AMOUNT = "0";

export {
  WOOTECO_MENU_PRICES,
  BEVERAGES_MENUS,
  D_DAY_DISCOUNT,
  WOOTECO_MAIN_MENUS,
  WOOTECO_DESSERT_MENUS,
  SPECIAL_DISCOUNT_DAYS,
  SPECIAL_DISCOUNT_AMOUNT,
  GIVEAWAY_EVENT_THRESHOLD,
  GIVEAWAY_ITEM,
  BADGE_THRESHOLDS,
  BADGE_NAMES,
  NEGATIVE_SIGN,
  ZERO_AMOUNT,
};
