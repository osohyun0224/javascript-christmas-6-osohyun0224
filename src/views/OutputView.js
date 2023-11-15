import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE, EVENT_TITLE } from "../constants/Message";
import { NEGATIVE_SIGN, ZERO_AMOUNT } from "../constants/Constant";

function formatCurrency(number) {
    return number.toLocaleString('ko-KR');
}

const OutputView = {
    printIntroMessage() {
        Console.print(GUIDE_MESSAGE.intro);
    },

    printEventPreview(visitDate) {
        Console.print(`${GUIDE_MESSAGE.startEventMonth}${visitDate}${GUIDE_MESSAGE.startEventDay}${GUIDE_MESSAGE.startEventGuide}\n`);
    },

    printOrderMenu(orderItems) {
        Console.print(`${EVENT_TITLE.orderMenu}`);
        Console.print(orderItems.map(item => `${item[0]} ${item[1]}${GUIDE_MESSAGE.unitCount}`).join('\n') + '\n');
    },

    printOriginTotalPrice(totalOrderAmount) {
        Console.print(`${EVENT_TITLE.originTotalPrice}`);
        Console.print(`${formatCurrency(totalOrderAmount)}${GUIDE_MESSAGE.unitMoney}\n`);
    },

    printGiveawayMenu(giftedItem) {
        Console.print(`${EVENT_TITLE.giveawayMenu}`);
        Console.print(`${giftedItem}\n`);
    },

    printBenefitDetails(discountsApplied) {
        Console.print(`${EVENT_TITLE.benefitDetails}`);
        if (discountsApplied.length > 0) {
            const formattedDiscounts = discountsApplied.map(discount => {
                const discountAmount = parseInt(discount.match(/-?\d+/)[0], 10);
                return `${discount.replace(/-?\d+/, formatCurrency(discountAmount))}${GUIDE_MESSAGE.unitMoney}`;
            });
            Console.print(formattedDiscounts.join('\n'));
            return;
        }
        Console.print(`${GUIDE_MESSAGE.nothing}`);
    },

    printTotalBenefitAmount(totalDiscount) {
        Console.print(`${EVENT_TITLE.totalBenefitPrice}`);
        const amountString = totalDiscount > 0 ? `${NEGATIVE_SIGN}${formatCurrency(totalDiscount)}` : `${ZERO_AMOUNT}`;
        Console.print(`${amountString}${GUIDE_MESSAGE.unitMoney}\n`);
    },

    printDiscountedTotalAmount(finalAmount) {
        Console.print(`${EVENT_TITLE.discountedTotalPrice}`);
        Console.print(`${formatCurrency(finalAmount)}${GUIDE_MESSAGE.unitMoney}\n`);
    },

    printEventBadge(badge) {
        Console.print(`${EVENT_TITLE.eventBadge}`);
        Console.print(`${badge}`);
    }
};

export default OutputView;
