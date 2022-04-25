import { useState, useEffect } from 'react';

export function Converter(properties: { color: string; value: number }[]) {
    const values = properties.map((property) => property.value);
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    //select the percentage of each value
    const degre = values.map((value) => (value / sum) * 360);
    const [degrees, setDegre] = useState<number[]>(degre);

    let conicEffect = properties
        .map((properties) => properties.color)
        .reduce((acc, curr, i) => acc + `${curr} ${degrees[i]}deg,0, `, ``)
        .slice(0, -4);
    conicEffect = `conic-gradient(${conicEffect});`;
    useEffect(() => {}, [values]);
    return { conicEffect, sum };
}
