import React, { useEffect, useState } from 'react';
import { useSubscription, useMutation, gql } from '@apollo/client';
import { List, ListItem } from './shared/list';
import { Badge } from './shared/badge';
import { AddReview } from './shared/inputform';
import { Link } from 'react-router-dom';
import { Button } from './shared/form';
import { timeDifferenceForDate } from './utils';
import Ratings from 'react-ratings-declarative';
import { getAverageRating } from './utils';

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
            rating
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

    const [inputVal, setInputVal] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [userRating, setUserRating] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { loading, error, data } = useSubscription(KINGDOM, { variables: { id } });
    const [addReview] = useMutation(ADD_REVIEW);

    if (loading) return <p style={{ color: 'white' }}>Loading...</p>
    if (error) return <p style={{ color: 'white' }}>Error: {error.message}</p>;

    const { name, region, sigil, reviews } = data.Great_Houses_by_pk;
    let averageRating = getAverageRating(reviews);

    return (
        <div>
            <img src={sigil} alt={name} style={{ height: '150px', marginTop: '25px' }} />
            <br />
            <Ratings
                rating={averageRating}
                widgetDimensions="40px"
                widgetSpacings="15px"
            >
                <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='40px' />
                <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='40px' />
                <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='40px' />
                <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='40px' />
                <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='40px' />
            </Ratings>
            <h3 style={{ color: 'white' }}>
                {name} <Badge>{region}</Badge>
            </h3>
            <p style={{ color: 'white' }}>How was your experience at House {name}? Others want to know!</p>
            <div style={{color:'white'}}>Your Review:</div>
            <Ratings
                rating={userRating}
                widgetRatedColors="yellow"
                changeRating={setUserRating}
            >
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
            </Ratings>
            <AddReview
                inputVal={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onSubmit={() => {
                    if (inputVal.length < 5) { setErrorMessage("Your response must be at least ten characters") } else {
                        addReview({ variables: { id, body: inputVal } })
                        setInputVal("")
                        setErrorMessage("")
                    }
                }}
                buttonText="Submit"
            />
            <p style={{ color: 'red' }}>{errorMessage}</p>
            <List>
                {reviews.map((review) => (
                    <ListItem key={review.id}>
                        <Ratings
                            rating={review.rating}
                            widgetDimensions="40px"
                            widgetSpacings="15px"
                        >
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='25px' />
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='25px' />
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='25px' />
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='25px' />
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='25px' />
                        </Ratings>
                        <br />
                        {review.body}<br />
                        <em style={{ color: 'grey' }}>-{timeDifferenceForDate(review.created_at)}</em>
                    </ListItem>
                ))}
            </List>
            <Link to='/'><Button style={{ marginTop: '25px' }}><i className="fas fa-arrow-left" style={{ marginRight: '2px' }}></i>Go Back</Button></Link>
        </div>
    )
}


export default KingdomLoader;
