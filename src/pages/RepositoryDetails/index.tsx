import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { RepositoryParams, Issue } from './interface';
import { Repository } from '../Dashboard/interfaces';
import { Header, RepositoryInfo, Issues } from './styles';

const RepositoryDetails: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        // Pega os dados do repositorio
        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });

        // Pegando a lista de Issues logo em seguida
        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        });

        // Uma outra forma de chamar as 2 API's ao mesmo tempo, pois o resultado de uma não precisa esperar a outra.
        // async function loadData(): Promise<void> {
        //     const [respRepository, respIssues] = await Promise.all([
        //         api.get(`repos/${params.repository}`),
        //         api.get(`repos/${params.repository}/issues`),
        //     ]);
        //     console.log(respRepository.data);
        //     console.log(respIssues.data);
        // }
    }, [params.repository]);

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} /> Voltar
                </Link>
            </Header>
            {repository ? (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            ) : (
                <p>Carregando...</p>
            )}

            <Issues>
                {issues.map((issue) => (
                    <a key={issue.id} href={issue.html_url} target="blank">
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default RepositoryDetails;
