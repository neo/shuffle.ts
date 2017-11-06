export default function shuffle<T>(array: T[]): T[] {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an Array, got ${typeof array} instead.`);
  }

  const oldArray = [...array];
  let newArray = new Array<T>();

  while (oldArray.length) {
    const i = Math.floor(Math.random() * oldArray.length);
    newArray = newArray.concat(oldArray.splice(i, 1));
  }

  return newArray;
}
