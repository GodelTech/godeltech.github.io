export class MdModel {
    public download_url!: string;

    public constructor(fields?: Partial<MdModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
