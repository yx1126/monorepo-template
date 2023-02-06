export type BaseTypeOfKeys = "Boolean" | "Number" | "String" | "Function" | "Array" | "Date" | "RegExp" | "Undefined" | "Null" | "Object";
export type TypeOfKey = `[object ${BaseTypeOfKeys}]`;
export type TypeOfValues = Uncapitalize<BaseTypeOfKeys>;
