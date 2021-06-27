import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { ContainerItem } from '../styles/Ligues.styles';
import { useHistory } from 'react-router-dom';

const defaultLogo = 'https://img.icons8.com/ios/500/football2--v1.png';

export default function Team(props) {
    const history = useHistory();

    return (
        <ContainerItem>
            <Card style={{height: 232 }}>
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        image={props?.crestUrl ? props.crestUrl : defaultLogo} 
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