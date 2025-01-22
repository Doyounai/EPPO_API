type projectstatus_api = {
    target: string;
    name: string;
    year:{
        startyear: string;
        endyear: string;
    },
    budget: number;
    own: string;
    plan: string;
    status: number;
}[];