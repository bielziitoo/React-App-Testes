import pfp from '/src/assets/pfp.jpg'

function Card() {

    return (
        <div className='card'>
            <img src={pfp} alt="foto de perfil" className="pfp"/>
            <h2 className='nome'>Gabriel Pereira</h2>
            <div className='cardP'>
            <p>Programador Front-End e estudante de Sistema Para Internet na Uniasselvi.</p>
            </div>
        </div>
    );

}

export default Card