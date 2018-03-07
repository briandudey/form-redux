import React, { Component } from 'react';
import './App.css';
import Question from './Question/Question';
import Cheshire from './Cheshire/Cheshire';

const questions = [
  LandingPage,
  Question,
  Question2,
  Question3,
  Question4
];

// Cheshire = showCheshire;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			showCheshire: false
		};
  }
  
  
  updateIndex(e, choice) {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }

  cheshireReveal(e) {
    this.setState({
      currentIndex: this.state.showCheshire
    })
  }

  // checkTheAnswer(e, answer) {
  //   if (answer !==  ) {

  //   } this.setState({

  //   })
  // }




	render() {
		const Component = questions[this.state.currentIndex];
    return <Component changeIndex={(e) => this.updateIndex(e)}
       cheshireCat={(e) => this.cheshireReveal(e)}/>;
	}
}

function LandingPage(props) {
  return (
<div className="App" >
        <h1>Welcome to Wonderland</h1>
        <h4 onClick={(e) => props.cheshireCat(e)}>Are you ready?</h4>
       <button onClick= {(e) => props.changeIndex(e)}>I'm Ready</button>
        {questions}
      </div>
    ) 
    }

    

    function Question2 ( props ) {
      return (
          <div className="Question">
             
              <h4>What Time Is It?</h4>
              <img src="https://s-media-cache-ak0.pinimg.com/originals/ea/64/d7/ea64d7f39d107412505e68fefe97325f.jpg" alt="The Late White Rabbit"/>
              <div>
       
              <button onClick= {(e) => props.changeIndex(e)}>I'm Ready</button>
              </div>
          </div>
      )
  };

    function Question3 ( props ) {
      return (
          <div className="Question2">
              
              <h4>Who are you?</h4>
              <img src="http://images5.fanpop.com/image/photos/25900000/The-Caterpillar-alice-in-wonderland-25961684-500-250.jpg" alt="The Very Rude Caterpillar"/>
              <div>
              <input type="text"  />
              <button onClick= {(e) => props.changeIndex(e)}>I'm Ready???</button>
              </div>
          </div>
      )
  };

  function Question4 ( props ) {
    return (
        <div className="Question2">
            
            <h4>Are You Dum or Dee?</h4>
            <img src="http://24.media.tumblr.com/tumblr_lham7pg6hN1qgwj4co1_500.gif" alt="The Very Rude Caterpillar"/>
            <div>
            <input type="text"  />
            <button onClick= {(e) => props.changeIndex(e)}>I'm Ready???</button>
            </div>
        </div>
    )
};

export default App;