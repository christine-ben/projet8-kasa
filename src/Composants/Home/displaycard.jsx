import React from 'react';
import housings from '../../datas/logements.json'
import Card from './card'

const DisplayCards = () => {
    return(
        <section className='home_container'>
            <ul className='home_list'>
                {housings.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default DisplayCards;