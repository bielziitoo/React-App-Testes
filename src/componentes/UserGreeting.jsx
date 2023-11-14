import PropTypes from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function UserGreeting(props) {

    const {theme} = useContext(ThemeContext);
    const [logado, setLogado] = useState(0);

    let data = new Date().getHours();

    let condicao;
    console.log(`Hora: ${data}`)
    if (data >= 12 && data < 18) {
        condicao = 'Boa tarde, ';
    }
    else if (data >= 18) {
        condicao = 'Boa noite, ';
    }
    else {
        condicao = 'Bom dia, ';
    }

    const greetingTrue = <div className={`div-greeting ${theme === "dark" ? "dark-div-greeting" : ""}`}><h2 className='user-greeting'>{condicao}{props.username}</h2></div>;

    if(logado === 1){
        return greetingTrue
    }
    else {
        return(
            <div className={`div-greeting ${theme === "dark" ? "dark-div-greeting" : ""}`}>
                <button className='btn-greeting' onClick={() => {setLogado(1)}}>Log In</button> 
            </div>
        );
    }
}

UserGreeting.propTypes = {
    taLogado: PropTypes.bool,
    username: PropTypes.string
};

UserGreeting.defaultProps = {
    taLogado: false,
    username: 'Pessoa'
}

export default UserGreeting