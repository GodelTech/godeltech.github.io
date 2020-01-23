export class RepositoryModel {
    public id: number;
    public name: string;
    public language: string;
    public description: string;

    public constructor(fields?: Partial<RepositoryModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
