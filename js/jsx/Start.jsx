import React from 'react';
import 'sweetalert';

class Start extends React.Component {
  handleClick(){
    const { onClick } = this.props;
    if(!this.refs.agree.checked) {
      swal('Error!', 'Please agree');
    } else {
      onClick();
    }
  }

  render() {
    return (
      <div>
        <div className="start">
          <h1>Evaluation</h1>
          <div className="row">
            <div className="left description">
              <p>
                Clinical data is getting more and more every day. The goal of my master thesis is to develop a prototype user interface for a clinical information system which tries to help facing information overload and may advise surgeons in treatment planing with a cognitive assistent. The purpose of this survey is to include potential users at making important design decisions.
                <br/>
                <br/>
                Many thanks in advance!<br/><br/>
                <b>Guido Schmidt</b><br/>
                Master Student, German Cancer Research Center (DKFZ), Heidelberg
              </p>
            </div>
            <div className="right">
              <h2>Instructions</h2>
              <p>
                To find pleasing design decisions for the user interface, a set of color and typeface configurations will be presented to you. You will be asked one question about it and will get two options to choose from. You have to decide which fullfills the asked question better. Please give particular attention on the following aspects:
                <ul className="important">
                  <li>
                    <b>Color perception:</b><br/>
                    How well does a color represent the asked property?<br/>
                    which one do you associate with the given property?
                  </li>
                  <li>
                    <b>Legibility and readability:</b><br/>
                    How well can numbers and letters be distinguished at different sizes?
                  </li>
                  <li>
                    <b>Visual perception:</b><br/>
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <hr />

          <div className="row">
            <img src="./img/adblock.png" alt="" />
            <p>
              In order to fullfill the survey, please <b>turn off your Ad Blocker</b>, if you use any. You can turn them back on afterwards. Result data is collected using <a href="http://mixpanel.com" target="_blank">Mixpanel</a> (a web analytics tool). The survey won't work, if Mixpanel is blocked by an Ad Blocker in your browser. Only information about which option was clicked will be used. The <b>collected data won't be shared</b> with third parties and <b>won't explicitly made public</b> in any other way. The data will only be used for evaluation. The results will be published in my master thesis titled <b>A Visual Interface for Knowledge-Based Liver Treatment Planning</b>.
            </p>
          </div>
          <hr />
          <b className="agreement">
            <input id="agree" ref="agree" type="checkbox"/>
            <label htmlFor="agree" className="important">
              I have read the instructions and agree on the collection of my data to fullfill the survey
            </label>
          </b>
        </div>
        <button onClick={this.handleClick.bind(this)}>Start</button>
      </div>
    )
  }
}
Start.defaultProps = {

}
Start.propTypes = {

}

export default Start
