import React from 'react';

import './Question.css';

function Question ( props ) {
    return (
        <div className="Question">
            
            <h4>Are You Sure?</h4>
            <img src="http://25.media.tumblr.com/dbdc84892b2fb88d0256565fbd62fc57/tumblr_n0buksxD911rmsldqo1_500.gif" alt="The Very Rude Caterpillar"/>
            <div>
            <button onClick= {(e) => props.changeIndex(e)}>Submit</button>
            </div>
        </div>
    )
  };



export default Question;