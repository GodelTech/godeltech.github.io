export class TagModel {
    public name!: string;

    public constructor(fields?: Partial<TagModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
