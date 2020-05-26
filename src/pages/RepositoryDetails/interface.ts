// INTERFACES
// Interface que diz o tipo do parametro de uma pagina para outra
export interface RepositoryParams {
    repository: string;
}

export interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    };
}
