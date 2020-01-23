export class BuildInfoModel {
    public name: string;
    public description: string;
    public gitHubOwner: string;
    public gitHubRepository: string;
    public info: string;

    public constructor(fields?: Partial<BuildInfoModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
