export function googleTagReady (logMessage = false) {
    const isAvailable = window.googletag && googletag.apiReady
    if (!isAvailable && logMessage) {
        console.log('Google tag service not available')
    }
    return isAvailable
}