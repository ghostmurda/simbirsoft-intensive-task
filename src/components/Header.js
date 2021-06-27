import React from 'react';
import { HeaderWrapper } from '../styles/Header.styles';
import Button from '@material-ui/core/Button';

export default function Header() {
    return (
        <HeaderWrapper>
            <Button variant="outlined" color="primary">
                Список лиг
            </Button>
            <Button variant="outlined" color="primary">
                Список команд
            </Button>
        </HeaderWrapper>
    );
}