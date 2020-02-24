import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        <img alt="rv by the lake" src="https://www.colorado.com/sites/default/files/styles/media-player-large/public/RVing4_StVrainSP_CSP.jpg?itok=1EiPZunc"/>
      </p>
      <div>
        <p>
          HV Rentals is a camper rental business located here in the Twin Cities MN, We believe that some of the best memories made are with friends and families. A great way to do that is to spend quality time with those love ones in the great outdoors. A home, away from home! A breath of fresh air!
        </p>
          <p>Minnesota has 67 state parks, more than 276,000 acres of state forest land, over 7,000 campsites, 15,000+ lakes. The adventures are endless!</p>

For information on campers, availability, rates, and reservations. Please shoot us a message and we’ll love to work with you!
        
      </div>
    </div>
  </div>
);

export default AboutPage;
