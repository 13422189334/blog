const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val: object, key: string | symbol): key is never =>
  hasOwnProperty.call(val, key);

const haha = hasOwn({ a: 1 }, "a");
console.log(haha);

const isArray = (arg: any): arg is any[] => Array.isArray(arg);

export function makeMap(
  str: string,
  expectsLowerCase?: boolean
): (key: string) => boolean {
  const map: Record<string, boolean> = Object.create(null);
  const list: Array<string> = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? (val) => !!map[val.toLowerCase()]
    : (val) => !!map[val];
}

const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null);
  return ((str: string) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  }) as any;
};

const isString = (val: unknown): val is string => typeof val === "string";

let testGenerics = <T extends { length: number }>(params: T, minNum: number): T =>{
  if (params.length >= minNum) {
    return params
  } else {
    return { length: minNum } as T
  }
}

const camelizeRE = /-(\w)/g;
/**
 * @private
 */
export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});
