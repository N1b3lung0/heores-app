import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="grid-flex container">
            {
                heroes.map( ({ id, superhero, alter_ego, first_appearance, characters }) => (
                    <Card
                        key={ id }
                        title={ superhero }
                        subTitle={ alter_ego }
                        header={ ( <img src={`./assets/heroes/${ id }.jpg`} alt={ id } /> ) }
                        className="container card animate__animated animate__backInUp"
                    >
                        <div>
                            {
                                (alter_ego !== characters) && <p>{ characters }</p>
                            }
                            <p>{ first_appearance }</p>
                            <Link to={`./hero/${ id }`}>Más ...</Link>
                        </div>
                    </Card>
                ) )
            }
        </div>
    )
}
