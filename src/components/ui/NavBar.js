import React, { useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { getHeroesBySuperhero } from '../../selectors/getHeroesBySuperhero';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useHistory } from 'react-router-dom';

export const NavBar = () => {

    const { user: { name }, dispatch } = useContext( AuthContext );
    const history = useHistory();

    const handleInputChange = (e) => {
        const heroesFiltered = getHeroesBySuperhero(e.target.value);
        console.log(heroesFiltered);
    }

    const handleLogout = () => {
        history.replace('/login');
        dispatch({
            type: types.logout
        })
    }

    const items = [
        {
            label:'Marvel',
            icon:'pi pi-fw pi-power-off',
            url:'/marvel'
        },
        {
            label:'DC',
            icon:'pi pi-fw pi-power-off',
            url:'/dc'
        },
        {
            label:`${ name }`,
            icon:'pi pi-user'
        },
    ];

    return (
        <div>
            <Menubar model={items} className="p-menubar shadow">
                <InputText placeholder="Search ..." type="text" onChange={ handleInputChange } style={{width:600}} />
                <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}} className="p-button-danger" onClick={ handleLogout } />
            </Menubar>
        </div>
    )
}
