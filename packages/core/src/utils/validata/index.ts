import type { TypeOfKey, TypeOfValues } from "../../types";

const map: Record<TypeOfKey, TypeOfValues> = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
};

export function typeOf(value: any) {
    return map[Object.prototype.toString.call(value) as TypeOfKey];
}
