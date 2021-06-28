import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerItem } from '../styles/Ligues.styles';

const defaultLogo = 'https://img.icons8.com/ios/500/football2--v1.png';

export default function League(props) {
    const history = useHistory();

    const onLeagueClick = () => {
        history.push(`/teams/${props.id}`);
        props.handleCurrentLeague(props.name);
    }

    return (
        <ContainerItem>
            <Card style={{height: 232 }}>
                <CardActionArea onClick={onLeagueClick}>
                    <CardMedia 
                        component="img"
                        image={props?.emblemUrl ? props.emblemUrl : defaultLogo} 
                        alt="Image"
                        width="128"
                        height="160"
                    />
                    <CardContent>
                        <Typography gutterBottom>
                            {props.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ContainerItem>
    );
}