import React, { Fragment } from 'react';

const Card = ({ id, name, email, link }) => {
  return (
    <Fragment>
      <article className="dib mw5 bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 ma2 bw1 shadow-5 grow">
        <div className="tc">
          <img alt='card-img' src={`https://robohash.org/${id}?200x200`} className="br-100 h4 w4 dib ba b--black-05 pa2 bg-white" title="Photo of a kitty staring at you" />
          <h1 className="f3 mb2">{name}</h1>
          <h2 className="f5 fw4 gray mt0">{email}</h2>
          <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1 ma3 grow" href={link}>Link</a>
        </div>
      </article>
    </Fragment>
  )
};

export default Card;
