const startTime = new Date()

export function logSlotInfo(slotId) {
    const endTime = new Date()
    const milliseconds = endTime - startTime
    console.log(`%c GPTAssistant %c [${milliseconds}] Ad slot with div id ${slotId} is on-screen`, 'background: #000; color: #fff', 'background: initial; color: initial', );
}