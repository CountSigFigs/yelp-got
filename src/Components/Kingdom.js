import React, { useEffect, useState } from 'react';
import { useSubscription, useMutation, gql } from '@apollo/client';
import { List, ListItem } from './shared/list';
import { Badge } from './shared/badge';
import InputForm from './shared/inputform';
import { Link } from 'react-router-dom';

const KINGDOM = gql`
    subscription Kingdom($id: uuid!) {
        Great_Houses_by_pk(id: $id) {
        id
        name
        region
        reviews(order_by: {created_at: desc}) {
            id
            body
            created_at
        }
        sigil
      }
    }
`

const ADD_REVIEW = gql`
mutation MyMutation($body: String!, $id: uuid) {
    insert_reviews(objects: {body: $body, house_id: $id}) {
      affected_rows
    }
  }
`;

const KingdomLoader = ({
    //match prop comes from react router can get match prop with params
    match: {
        params: { id },
    },
}) => {

    const [inputVal, setInputVal] = useState(" ")
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { loading, error, data } = useSubscription(KINGDOM, { variables: { id } });
    const [addReview] = useMutation(ADD_REVIEW)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>;

    const { name, region, sigil, reviews } = data.Great_Houses_by_pk;
    return (
        <div>
            <img src={sigil} alt={name} style={{ height: '125px', marginTop: '10px' }} />
            <h3 style={{ color: 'white' }}>
                {name} <Badge>{region}</Badge>
            </h3>
            <InputForm
                inputVal={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onSubmit={() => {
                addReview({ variables: { id, body: inputVal } })
                }}
                buttonText="Submit"
            />
            <List>
                {reviews.map((review) => (
                    <ListItem key={review.id}>{review.body}</ListItem>
                ))}
            </List>
            <Link to='/'><div style={{color:'white'}}>Go Back</div></Link>
        </div>
    )
}

export default KingdomLoader;
