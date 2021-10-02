function descendingOrder (value) {
    value = String(value);
    value = Array.from (value);
    for (let n = 0; n < value.length; n++){
        for (let i = 0; i < value.length - 1 - n; i++) {
            if (value[i] < value[i + 1]) {
                const buff = value[i];
                value[i] = value[i + 1];
                value[i + 1] = buff;
        }
    }
}
value = Number(value.join(""));
return (value);
}
