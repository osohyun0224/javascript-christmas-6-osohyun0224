import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";

const OutputView = {
    printIntroMessage() {
        Console.print(GUIDE_MESSAGE.intro);
    },

    printEventPreview(visitDate) {
        Console.print(`${GUIDE_MESSAGE.startEventMonth}${visitDate}${GUIDE_MESSAGE.startEventDay}${GUIDE_MESSAGE.startEventGuide}\n`);
    },
};

export default OutputView;
