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

const MEASURE_SIZE = 200
export function previewImg(file) {
    return new Promise((resolve) => {
        if (!file.type) {
            return
        }
        const canvas = document.createElement('canvas')
        canvas.width = MEASURE_SIZE
        canvas.height = MEASURE_SIZE
        canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`
        document.body.appendChild(canvas)
        const ctx = canvas.getContext('2d')
        const img = new Image()

        img.onload = () => {
            const { width, height } = img
            let drawWidth = MEASURE_SIZE
            let drawHeight = MEASURE_SIZE
            let offsetX = 0
            let offsetY = 0

            if (width > height) {
                drawHeight = height * (MEASURE_SIZE / width)
                offsetY = -(drawHeight - drawWidth) / 2
            } else {
                drawWidth = width * (MEASURE_SIZE / height)
                offsetX = -(drawWidth - drawHeight) / 2
            }
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
            const dataURL = canvas.toDataURL()
            document.body.removeChild(canvas)
            resolve(dataURL)
        }
        img.src = window.URL.createObjectURL(file)
    })
}
