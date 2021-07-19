
export function loadScript(src) {
    return new Promise((reslove, reject) => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = src
        script.onload = reslove
        script.onerror = reject
        document.head.appendChild(script)
    })
}
