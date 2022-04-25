interface IPie {
    properties: {
        name: string;
        value: number;
        color: string;
    }[];
}
interface IInfo extends IPie {
    title: string;
}

export type { IPie, IInfo };
