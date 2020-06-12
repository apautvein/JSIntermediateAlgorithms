function addTogether(x, y) {
    if (typeof x !== "number") {
        return undefined;
    }
    if (typeof y === "number") {
        return x + y;
    } else if (y === undefined) {
        return (a) => {
            if (typeof a === "number") {
                return x + a
            }
        };
    }

};

console.log(addTogether(2)([3])); 