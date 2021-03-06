// INTERFACES
// Interface para definir o retorno do repositorio do Git
export interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

// Interface para ser usada pois todo parametro extra que precisa criar
// pra trazer algum dado da pagina aqu pro estilo precisa ter interface
export interface FormProps {
    hasError: boolean;
}
