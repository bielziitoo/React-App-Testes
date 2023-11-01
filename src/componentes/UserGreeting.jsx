import PropTypes from 'prop-types';
import { useState } from 'react';

function UserGreeting(props) {

    const [logado, setLogado] = useState(0);

    const greetingTrue = <div className='div-greeting'><h2 className='user-greeting'>Bem vindo, {props.username}</h2></div>;

    if(logado === 1){
        return greetingTrue
    }
    else {
        return(
            <div className='div-greeting'>
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