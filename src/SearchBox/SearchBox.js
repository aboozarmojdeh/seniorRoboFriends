import React, {Fragment} from 'react';

const SearchBox = () => {
  return (
    <Fragment>
    {/* <form className="pa4 black-80 center">
    <div className="measure">
    <label for="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label> */}
        <input type="search" placeholder="search robots" id="name" className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-50" type="text" aria-describedby="name-desc" />
     {/* <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
   </div>
   </form> */}
    </Fragment>
  )
};

export default SearchBox;