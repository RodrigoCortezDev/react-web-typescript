import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Repository } from './interfaces';
import { Title, Form, Repositories, Error } from './styles';

const Dashboard: React.FC = () => {
    const [newRep, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');

    // no momento set do valor padrão ja tenta buscar do localstorage
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        // tenta buscar do localstorage valores anteriores
        const storageRepositories = localStorage.getItem('@ReactWebTypescript:repositories');
        // Se já existe valor faz um parte e devolve, senão volta o valor defavult []
        if (storageRepositories) return JSON.parse(storageRepositories);
        return [];
    });

    // Hooks que é chamado toda vez que o array repositories é disparado
    useEffect(() => {
        localStorage.setItem('@ReactWebTypescript:repositories', JSON.stringify(repositories));
    }, [repositories]);

    // Função que pega o que foi digitado e faz uma consulta na API do GIT e adiciona o array
    // E consequentemente ja chama o useEffect que adiciona no localstorage.
    async function handleAddRepository(ev: FormEvent<HTMLFormElement>): Promise<void> {
        ev.preventDefault();

        if (!newRep) {
            setInputError('Digite o nome do autor/repositorio');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRep}`);
            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (error) {
            setInputError('Erro na busca pelo repositorio!');
        }
    }

    // Processamento da tela
    return (
        <>
            <img src={logoImg} alt="Github Exporer" />
            <Title>Explorar repositórios do Git.</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRep}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {/* Aqui se o inputErro tem valor ele mostra o elemento */}
            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map((repository) => (
                    <Link key={repository.full_name} to={`/RepositoryDetails/${repository.full_name}`}>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
