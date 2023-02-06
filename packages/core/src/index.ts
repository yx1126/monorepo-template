import { typeOf } from "./utils/validata";

const isNumber = typeOf(124) === "number";

console.log(isNumber);

export default class {
    constructor(name: string, age: number) {
        return {
            name,
            age,
        };
    }
}
