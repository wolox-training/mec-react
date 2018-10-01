import isArray from './utils';

export function min(arg) {
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

export function copy(args) {
  if (isArray(args)) {
    return [...args];
  }
  const obje1 = {
    ...args
  };
  return obje1;
}

export function reverseMerge(arr1, arr2) {
  return [...arr2, ...arr1];
}

export function filterAttribs(obj) {
  const {a, b, ...rest } = obj;
  return rest;
}
