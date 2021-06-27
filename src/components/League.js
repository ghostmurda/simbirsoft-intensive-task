import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LeagueWrapper } from '../styles/Ligues.styles';

const defaultLogo = 'https://img.icons8.com/ios/500/football2--v1.png';

export default function League(props) {
    const history = useHistory();

    return (
        <LeagueWrapper>
            <Card style={{height: 232 }}>
                <CardActionArea onClick={() => history.push(`/teams/${props.id}`)}>
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
        </LeagueWrapper>
    );
}