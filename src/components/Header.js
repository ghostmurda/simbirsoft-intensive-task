import React from 'react';
import { HeaderWrapper } from '../styles/Header.styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

export default function Header({currentLeague, currentTeam, handleCurrentLeague, handleCurrentTeam}) {
    const history = useHistory();

    const onButtonClick = () => {
        history.push('/leagues');
        handleCurrentLeague(null);
        handleCurrentTeam(null);
    }

    return (
        <HeaderWrapper>
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={onButtonClick}
            >
                Список лиг
            </Button>
            {currentTeam && 
                <Typography variant="h5" component="h5">
                    {currentTeam}
                </Typography>
            }
            {currentLeague && 
                <Typography variant="h5" component="h5">
                    {currentLeague}
                </Typography>
            }
        </HeaderWrapper>
    );
}