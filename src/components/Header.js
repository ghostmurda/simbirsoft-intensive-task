import React from 'react';
import { HeaderWrapper } from '../styles/Header.styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export default function Header() {
    const history = useHistory();

    return (
        <HeaderWrapper>
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => history.push('/leagues')}
            >
                Список лиг
            </Button>
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => history.push('/teams')}
            >
                Список команд
            </Button>
        </HeaderWrapper>
    );
}