import { BuildInfoModel } from './build-info.model';

export class NuGetBuildInfoModel extends BuildInfoModel {
    public azureDevOpsOrganization: string | undefined;
    public azureDevOpsProject: string | undefined;
    public azureDevOpsBuildId: number | undefined;
    public azureDevOpsReleaseProjectId: string | undefined;
    public azureDevOpsReleaseId: number | undefined;
    public azureDevOpsReleaseEnvironmentId: number | undefined;
    public nuGetPackage: string | undefined;
    public nuGetPackageVersion: string | undefined;
    public nuGetPackageAuthors: string | undefined;
    public nuGetPackageCompany: string | undefined;
    public nuGetPackageCopyright: string | undefined;
    public nuGetPackageIconUrl: string | undefined;
    public nuGetPackageTags: string | undefined;

    public constructor(fields?: Partial<NuGetBuildInfoModel>) {
        super();

        if (fields) {
            Object.assign(this, fields);
        }
    }
}
