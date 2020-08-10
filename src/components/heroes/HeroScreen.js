import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import { Button } from 'primereact/button';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if (!hero) { return <Redirect to="/" />; }

    const handleBack = () => { (history.length <= 2) ? history.push('/') : history.goBack() }
    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="container">
            <h1>Hero Screen</h1>
            <div className="p-grid">
                <div className="p-col animate__animated animate__backInLeft">
                    <img src={ `../assets/heroes/${ heroId }.jpg` } alt={ heroId } className="shadow" />
                </div>
                <div className="p-col animate__animated animate__backInRight">
                    <h2>{ superhero }</h2>
                    <h3>{ publisher }</h3>
                    <h4>Alter ego: { alter_ego }</h4>
                    <h5>First appearance: { first_appearance }</h5>
                    <h5>Characters: { characters }</h5>
                    <Button onClick={ handleBack } label="Back" style={{padding:5, paddingLeft:50, paddingRight: 50}} className="p-button-rounded p-button-warning" />
                </div>
            </div>
        </div>
    )
}
