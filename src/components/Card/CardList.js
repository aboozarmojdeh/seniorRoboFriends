import React, { Fragment } from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
    const cardArray = robots.map((robot, i) => {
        return (
            <Card id={robot.id} name={robot.name} email={robot.email} link={robot.link} />
        )
    })
    return (
        <Fragment>
        <div>
            {cardArray}
        </div>
        </Fragment>
    )
};

export default CardList;