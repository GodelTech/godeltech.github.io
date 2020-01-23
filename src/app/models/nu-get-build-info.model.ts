import { BuildInfoModel } from './build-info.model';

export class NuGetBuildInfoModel extends BuildInfoModel {
    public azureDevOpsOrganization: string;
    public azureDevOpsProject: string;
    public azureDevOpsBuildId: number;
    public azureDevOpsReleaseProjectId: string;
    public azureDevOpsReleaseId: number;
    public azureDevOpsReleaseEnvironmentId: number;
    public nuGetPackage: string;
    public nuGetPackageVersion: string;
    public nuGetPackageAuthors: string;
    public nuGetPackageCompany: string;
    public nuGetPackageCopyright: string;
    public nuGetPackageIconUrl: string;
    public nuGetPackageTags: string;

    public constructor(fields?: Partial<NuGetBuildInfoModel>) {
        super();

        if (fields) {
            Object.assign(this, fields);
        }
    }
}
