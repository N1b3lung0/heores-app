import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { heroes } from '../../data/heroes';

export const NavBar = () => {

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
        }
    ];

    return (
        <div>
            <Menubar model={items} className="p-menubar shadow">
                <InputText placeholder="Search ..." type="text" style={{width:600}} />
                <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}} className="p-button-danger" />
            </Menubar>
        </div>
    )
}
