export class RepositoryModel {
    public id!: number;
    public name!: string;
    public language!: string;
    public description!: string;
    public topics: string [] = [];
    public forks_count: number = 0;
    public stargazers_count: number = 0;
    public open_issues_count: number = 0; /* TODO: returns sum of issues and pulls ??? */
    public license!: License;
    public archived: boolean = false;
    public visibility!: string;
    public tags_url!: string;
    public svn_url!: string;
    public languages_url!: string;

    public constructor(fields?: Partial<RepositoryModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}

class License {
    spdx_id: string = '';
}
