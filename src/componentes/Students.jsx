import PropTypes from 'prop-types'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function Student(props) {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`students-div ${theme === "dark" ? "dark-students" : ""}`}>
            <img src='https://via.placeholder.com/100' alt="foto de perfil do estudante" />
            <div className="students-ps">
                <p>Nome: {props.nome}</p>
                <hr />
                <p>Idade: {props.idade}</p>
                <hr />
                <p>Está estudando: {props.estuda ? 'Sim' : 'Não'}</p>
            </div>
        </div>
    );
}

//checagem caso os tipos primitivos estao de acordo com o esperado
Student.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number,
    estuda: PropTypes.bool,
}

//valores padrao caso algum (ou todos) nao seja enviado 
Student.defaultProps = {
    nome: 'Estudante',
    idade: 0,
    estuda: false
}
export default Student