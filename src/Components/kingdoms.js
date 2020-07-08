import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {Badge} from './shared/badge';
import {List, ListItem} from './shared/list';

const KINGDOMS = gql`
    {
        Great_Houses {
            name
            region
            sigil
        }
    }
`;

export default function Kingdoms() {
    const { loading, error, data } = useQuery(KINGDOMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    return (
        <List>
            {data.Great_Houses.map(({id, name, region, sigil}) => (
                <ListItem key={id}>
                    <p>
                    <img src={sigil} alt={name} width='35px' height='35px'/>  House {name} | <Badge>{region}</Badge>
                    </p>
                </ListItem>
            ))}
        </List>
    )
}