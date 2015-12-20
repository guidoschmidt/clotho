import React from 'react'

class Start extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <div className="start">
          <h1>Evaluation</h1>
          <h2 className="title">A Visual Interface for Knowledge-Based Liver Treatment Planning</h2>

          <div className="row">
            <div className="left">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="right">
              <h2>Instructions</h2>
              <p>
                You will be asked one question and two options to choose from. Please decide for one and click on it.

                <li>Color perception</li>
                <li>Legibility of typefaces</li>
                <li>Visual perception</li>
              </p>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="left">
              <img width="30%" height="auto" src="./img/adblock.png" alt="" />
            </div>
            <div className="right">
              <p>Please turn off your Ad Blocker, if you use any. You can turn them back on afterwards.</p>
            </div>
          </div>

        </div>
        <button onClick={onClick}>Start</button>
      </div>
    )
  }
}
Start.defaultProps = {

}
Start.propTypes = {

}

export default Start
