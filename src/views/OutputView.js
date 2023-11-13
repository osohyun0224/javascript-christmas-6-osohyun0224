import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE, EVENT_TITLE } from "../constants/Message";

const OutputView = {
    printIntroMessage() {
        Console.print(GUIDE_MESSAGE.intro);
    },

    printEventPreview(visitDate) {
        Console.print(`${GUIDE_MESSAGE.startEventMonth}${visitDate}${GUIDE_MESSAGE.startEventDay}${GUIDE_MESSAGE.startEventGuide}\n`);
    },

    printOrderMenu(orderItems) {
        Console.print(`${EVENT_TITLE.orderMenu}\n${orderItems.map(item => `${item[0]} ${item[1]}${GUIDE_MESSAGE.unitCount}`).join('\n')}\n`);
    },
};

export default OutputView;
