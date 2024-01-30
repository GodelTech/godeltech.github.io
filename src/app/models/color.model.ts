export class ColorModel {
    public color: string | undefined;
    public url: string | undefined;

    public constructor(fields?: Partial<ColorModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}