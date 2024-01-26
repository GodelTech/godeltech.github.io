export class RepositoryModel {
    public id: number | undefined;
    public name: string | undefined;
    public language: string | undefined;
    public description: string | undefined;

    public constructor(fields?: Partial<RepositoryModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
