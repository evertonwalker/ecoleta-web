import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img alt="Ecoleta" src={logo} />
                </header>
                <main>
                    <h1>
                        Seu marketplace de coleta resíduos.
                    </h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <Link to="/create-point">
                        <span>
                          <FiLogIn />
                        </span>
                        <strong>
                            Cadastr um ponto de coleta
                        </strong>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;