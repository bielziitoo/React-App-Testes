import Footer from '../componentes/Footer.jsx'
/* import Food from './Food.jsx' */
import Card from '../componentes/Card.jsx'
import Students from '../componentes/Students.jsx'
import ListGroup from '../componentes/ListGroup.jsx'
/* import NewList from './componentes/NewList.jsx' */
import UserGreeting from '../componentes/UserGreeting.jsx'
import List from '../componentes/List.jsx'
import ProgressBar from '../componentes/ProgressBar.jsx'
import Button from '../componentes/Button.jsx'
import UseEffect from '../componentes/UseEffect.jsx'
import Header from '../componentes/Header.jsx'

import '../index.css'

const Home = () => {

    const frutas = [{id: 1, nome: 'maça', calorias: 95}, 
                    {id: 2, nome: 'laranja', calorias: 47}, 
                    {id: 3, nome: 'banana', calorias: 89}, 
                    {id: 4, nome: 'abacaxi', calorias: 50}, 
                    {id: 5, nome: 'manga', calorias: 60}];

    const vegetais = [{id: 1, nome: 'cenoura', calorias: 41}, 
                      {id: 2, nome: 'alface', calorias: 1}, 
                      {id: 3, nome: 'batata', calorias: 71}, 
                      {id: 4, nome: 'beterraba', calorias: 65}, 
                      {id: 5, nome: 'tomate', calorias: 16}];
    
    return (
        <div>
            <Header />
            <ProgressBar />
            {/* <Header /> */}
            <UserGreeting username='Gabriel'/>
            <hr />
            <Card />
            {/* <Card />
            <Card /> */}
            <hr />
            <Students nome='Jorge Gordo' idade={30} estuda={true} />
            <Students nome='Magrão da Silva' idade={30} estuda={false} />
            <Students nome='Gerson Flor' idade={34} estuda={false} />
            <Students nome='Gabriela' idade={25} estuda={true} />
            <Students />
            <Students nome='Pedro' />
            <hr />
            <ListGroup title={'Cidades'}/>
            <ListGroup title={'Comidas'} item1={'Torta de Maça'} item2={'Bolo de Cenoura'} item3={'Pavê'} item4={'Bolo de Chocolate'} item5={'Espinafre'}/>
            <ListGroup />
            {/* <NewList /> */}
            <hr />
            <List items={frutas} categoria={'Frutas'} />
            <List items={vegetais} categoria={'Vegetais'}/>
            <List></List>
            <hr />
            <Button />
            <hr />
            <UseEffect />
            <hr />
            <Footer />
        </div>
    )
}

export default Home