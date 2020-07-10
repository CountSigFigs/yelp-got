import React from 'react';
import {useQuery, gql} from '@apollo/client';
import { List, ListItem } from './shared/list';
import { Badge } from './shared/badge';

const KINGDOM = gql`
    query Kingdom($id: uuid!) {
        Great_Houses_by_pk(id: $id) {
        id
        name
        region
        reviews {
            id
            body
        }
      }
    }
`

const KingdomLoader = ({
    //match prop comes from react router can get match prop with params
    match: {
        params: { id },
    },
}) => {
    const { loading, error, data } = useQuery(KINGDOM, { variables: { id }});

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>;

    const { name, region, sigil, reviews} = data.Great_Houses_by_pk;
    return (
        <div>
            <h3>
                {name} <Badge>{region}</Badge>
            </h3>
            <List>
                {reviews.map((review) => (
                    <ListItem key={review.id}>{review.body}</ListItem>
                ))}
            </List>
        </div>
    )
}

export default KingdomLoader;
