import {googleTagReady} from "./helpers/checkIfGoogleTagReady";
import {logSlotInfo} from "./helpers/logSlotInfo";

export function main() {
    if (!googleTagReady()) {
        setTimeout(main, 50)
        return
    }
    const shownAds = []
    let timers = {}
    const onSlotVisibilityChanged = function (event) {
        const {inViewPercentage, slot} = event
        const slotId = slot.getSlotElementId()
        if (shownAds.indexOf(slotId) === -1) {
            if (!timers[slotId] && inViewPercentage >= 50) {
                timers = {
                    ...timers,
                    [slotId]: setTimeout(() => {
                        logSlotInfo(slotId)
                        shownAds.push(slotId)
                    }, 3000)
                }
            } else if (timers[slotId] && inViewPercentage < 50) {
                clearTimeout(timers[slotId])
                delete timers[slotId]
            }
        }
    }
    window.googletag.pubads().addEventListener('slotVisibilityChanged', onSlotVisibilityChanged)
}