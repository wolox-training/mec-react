import isArray from './utils';

export function min(arg) {
// Si viene un solo argumento, puede o no ser un array. Si es un array se lo paso con el Spread Operator. Si no es un array paso el numero directamente. 
  if (arguments.length === 1) {
    if (isArray(arg)) {
      return Math.min(...arg);
    }
    return Math.min(arg);
  } else if (arguments.length > 1) {
    const args = [...arguments];
    return Math.min(...args);
  }
  return undefined;
}


export function copy() {
}
