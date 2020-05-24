import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Exporer" />
            <Title>Explorar repositórios do Git.</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/59732403?s=460&u=abdc810569d69ee86cce89f18b3bd2d262d5d21d&v=4"
                        alt="Rodrigo"
                    />
                    <div>
                        <strong>Rockeseat</strong>
                        <p>asdadasd asasdasdad asdas asd asda asdasdasd adada aas a a as a ad asasdasdasdasd</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/59732403?s=460&u=abdc810569d69ee86cce89f18b3bd2d262d5d21d&v=4"
                        alt="Rodrigo"
                    />
                    <div>
                        <strong>Rockeseat</strong>
                        <p>asdadasd asasdasdad asdas asd asda asdasdasd adada aas a a as a ad asasdasdasdasd</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/59732403?s=460&u=abdc810569d69ee86cce89f18b3bd2d262d5d21d&v=4"
                        alt="Rodrigo"
                    />
                    <div>
                        <strong>Rockeseat</strong>
                        <p>asdadasd asasdasdad asdas asd asda asdasdasd adada aas a a as a ad asasdasdasdasd</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
