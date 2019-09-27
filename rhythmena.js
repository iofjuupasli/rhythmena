const schemas = [
    [``],
    [`1`],
    [`12`],
    [`123`],
    [`1234`],
    [`12345`],
    [`1tl2tl`],
    [`1tl2ena`, `1ena2tl`],
    [`1n2n3n4n`],
    [`1tl2tl3tl`],
    [`1n2n3n4n5n`],
    [`1tl2n3n4n5n`, `1n2n3n4n5tl`, `1tl2tl3tl4n`],
    [`1tl2tl3tl4tl`, `1ena2ena3ena`],
    [`1ena2tl3tl4tl`, `1tl2tl3tl4ena`, `1ena2tl3ena4n`],
    [`1ena2tl3ena4tl`, `1tl2ena3tl4ena`, `1tl2tl3ena4ena`],
    [`1tl2tl3tl4tl5tl`, `1ena2ena3ena4tl`, `1tl2ena3ena4ena`],
    [`1ena2ena3ena4ena`],
];

const letters = [`b`, `c`, `k`, `t`, `d`, `p`, `s`, `g`];

// const argv = [``, ``, `16`, `2`, `1`, `3`, `1`];

const shuffleString = (str) => {
    const a = str.split("");
    const n = a.length;
    for(var i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};

const generateHtml = (schemaKey, padsStr) => {
    const pads = padsStr.split(` `).map(v => +v);
    const schemasAtKey = schemas[schemaKey];
    const schema = schemasAtKey[Math.floor(Math.random() * schemasAtKey.length)];
    const result = pads.map((count, pad) => {
        return shuffleString(
            letters[pad].repeat(count) +
            `-`.repeat(schemaKey - count),
        ).split(``).map((v, i) => {
            if ('0123456789'.includes(schema[i])) {
                return "<b>" + v + "</b>";
            }
            return v;
        }).join(``);
    }).join(`<br/>`);
    return schema.split(``).map((v, i) => {
        if ('0123456789'.includes(schema[i])) {
            return "<b>" + v + "</b>";
        }
        return v;
    }).join(``) + `<br/>` + result;
};

const generateUniHtml = (schemaKey, padsStr) => {
    const pads = padsStr.split(` `).map(v => +v);
    const schemasAtKey = schemas[schemaKey];
    const padV = pads.map((count, pad) => letters[pad].repeat(count)).join(``);
    const schema = schemasAtKey[Math.floor(Math.random() * schemasAtKey.length)];
    return `${schema.split(``).map((v,i) => '0123456789'.includes(schema[i]) ? `<b>${v}</b>` : v).join(``)}<br/>${shuffleString(padV +
        `-`.repeat(schema.length - padV.length)).split(``).map((v,i) => '0123456789'.includes(schema[i]) ? `<b>${v}</b>` : v).join(``)}`;
};

const generateColored = (schemaKey, padsStr) => {
    const pads = padsStr.map(v => +v);
    const schemasAtKey = schemas[schemaKey];
    const schema = schemasAtKey[Math.floor(Math.random() * schemasAtKey.length)];
    const result = pads.map((count, pad) => {
        return shuffleString(
            letters[pad].repeat(count) +
            ` `.repeat(schemaKey - count),
        ).split(``).map((v, i) => {
            if ('0123456789'.includes(schema[i])) {
                return "\x1b[7m\x1b[1m" + v + "\x1b[0m";
            }
            return "\x1b[2m" + v + "\x1b[0m";
        }).join(``);
    }).join(`\n`);
    return schema + `\n` + result;
};

const main = () => {
    const [,, schemaKey, ...padsStr] = process.argv;
    console.log(generateColored(schemaKey, padsStr));
};

// main();
