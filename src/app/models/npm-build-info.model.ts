import { BuildInfoModel } from './build-info.model';

export class NuGetBuildInfoModel extends BuildInfoModel {
    public npmPackage: string | undefined;

    public constructor(fields?: Partial<NuGetBuildInfoModel>) {
        super();

        if (fields) {
            Object.assign(this, fields);
        }
    }
}
