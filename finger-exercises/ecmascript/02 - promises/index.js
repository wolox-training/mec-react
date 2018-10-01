// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(TIME) {
  const initialTime = Date.now();
  const e = new Error('This time is too much !');
  return new Promise((resolve, reject) => {
    if (TIME > 1000) {
      reject(e);
    } else {
      setTimeout(() => {
        const delayedTime = Date.now() - initialTime;
        if (delayedTime <= TIME + 100 || delayedTime >= TIME - 100) {
          resolve(delayedTime);
        } else {
          reject(e);
        }
      }, TIME);
    }
  });
}

export const asyncDelay = delay;
