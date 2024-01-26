export class BuildInfoModel {
    public name: string | undefined;
    public description: string | undefined;
    public gitHubOwner: string | undefined;
    public gitHubRepository: string | undefined;
    public info: string | undefined;

    public constructor(fields?: Partial<BuildInfoModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
