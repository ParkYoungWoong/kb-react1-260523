export function delay(ms = 1000) {
  return new Promise((resolve, reject) => {
    if (ms >= 10000) {
      return reject(new Error('10초 이상은 기다리기 싫어!'))
    }
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

export function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img')
    imgEl.addEventListener('load', () => {
      resolve(true)
    })
    imgEl.addEventListener('error', () => {
      reject(new Error('이미지를 불러오지 못했어요~😭'))
    })
    imgEl.src = src
  })
}

// try {
//   const res = await delay(11000)
//   console.log(res) // true
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message) // '10초 이상은 기다리기 싫어!'
//   }
// }
