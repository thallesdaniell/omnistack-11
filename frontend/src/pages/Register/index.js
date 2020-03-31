import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logonImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logonImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encotrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                        Não tenho cadastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input placeholder="WhatsApp"></input>

                    <div className="input-group">
                        <input placeholder="Cidade"></input>
                        <input placeholder="UF" style={{ width: 80 }}></input>
                    </div>

                    <button className="button" type="submit"> Cadastrar</button>

                </form>
            </div>
        </div>
    );
}