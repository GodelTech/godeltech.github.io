export class ColorModel {
    public color!: string;
    public url!: string;

    public constructor(fields?: Partial<ColorModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}