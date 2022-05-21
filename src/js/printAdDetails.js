import {googleTagReady} from "./helpers/checkIfGoogleTagReady";

function printAdDetails() {
    if (!googleTagReady(true)) {
        return
    }
    const slots = window.googletag.pubads().getSlots()
    const adDetails = slots.map(s => ({
        name: s.getAdUnitPath(),
        div_id: s.getSlotElementId()
    }))
    console.table(adDetails)
}

export default printAdDetails