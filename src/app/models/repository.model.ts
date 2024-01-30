export class RepositoryModel {
    public id: number | undefined;
    public name: string | undefined;
    public language: string | undefined;
    public description: string | undefined;
    public topics: string [] = [];
    public forks_count: number = 0;
    public stargazers_count: number = 0;
    public open_issues_count: number = 0; /* TODO: returns sum of issues and pulls ??? */
    public license: License | undefined;

    public constructor(fields?: Partial<RepositoryModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}

class License {
    spdx_id: string = '';
}
