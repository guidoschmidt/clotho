import React from 'react'
import $ from 'jquery'
import { render } from 'react-dom'
// Custom components
import Start from './Start.jsx'
import OptionPresenter from './OptionPresenter.jsx'
import Finish from './Finish.jsx'
import UserSurvey from './UserSurvey.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: ['start', 'survey', 'options', 'finish'],
      currentConfig: undefined,
      configSequence: [],
      finished: [],
      progress: 0,
      showFinished: false
    };

    $.ajax({
      url: '/js/config.json',
      cache: true,
      dataType: 'json'
    }).success(data => {
      this.setState({configSequence: data});
    }).error((xhr, status, err) => {
      console.error(err);
    });
  }

  handleClickNext() {
    this.setState(state => {
      state.order.splice(0, 1);
      state.progress++;
    });
    if(this.state.order[1] == 'options') {
      this.handlePresentNextOption();
    }
  }

  handlePresentNextOption() {
    if(this.state.configSequence.length == 0) {
      this.handleClickNext();
      return;
    }
    var randomSequenceId = Math.round( Math.random() * this.state.configSequence.length-1 );
    this.setState(state => {
      state.progress++;
      state.currentConfig = state.configSequence.splice(randomSequenceId, 1)[0];
      state.finished.push(state.currentConfig);
    });
  }

  handleOptionSelection(name, config) {
    mixpanel.track( String(name) );
    this.handlePresentNextOption();
  }

  render() {
    // Switch between components
    var render;
    switch(this.state.order[0]) {
      case 'start':
        render = <Start onClick={this.handleClickNext.bind(this)} />;
        break;
      case 'survey':
        render = (
          <UserSurvey onClick={this.handleClickNext.bind(this)} />
        );
        break;
      case 'options':
        render = (
          <OptionPresenter
            config={this.state.currentConfig}
            evaluateSelection={this.handleOptionSelection.bind(this)} />
        );
        break;
      case 'finish':
        render = <Finish />;
        break;
    }

    let progress = this.state.progress;
    console.log( progress );

    return (
      <div className="app-wrapper">
        {render}
        <progress value={progress} max="6" />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app-mount')
)
