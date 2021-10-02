function toCamelCase (str) {

    str = String (str);
    str = Array.from (str);

        for (let i = 0; i < str.length; i++) {
            if (str[i] == "_" || str[i] == "-") {
                    str[i+1] = str[i+1].toUpperCase();
                    delete str[i];
            }
        }

    return str = String(str.join(""));
}
