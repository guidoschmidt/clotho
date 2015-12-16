import React from 'react'

class UserSurvey extends React.Component {
  handleClickNext() {
    const { onClick } = this.props;
    const { age, job, clinical } = this.refs;

    console.log( age.value + ', ' + job.value + ', ' + clinical.value );

    try {
      const uid = mixpanel.get_distinct_id();
      if(uid != undefined) {
        mixpanel.identify(uid);
        mixpanel.people.set({
            "$age": age.value,
            "$job": job.value,
            "$clinical": clinical.value,
        });
      }
    } catch(e) {

    }

    onClick();
  }

  render() {
    return (
      <div className="user-survey">
        <form>
          <h3>How old are you?</h3>
          <input type="range" min="20" max="100" step="5" ref="age" />
          <hr />
          <h3>What is your profession/job title?</h3>
          <label>Job Title:</label> <input ref="job" type="text" />
          <hr />
          <h3>Do you work in a clinical environment?</h3>
          <select ref="clinical">
            <option>Yes</option>
            <option>No</option>
          </select>
        </form>
        <button onClick={this.handleClickNext.bind(this)}>Next</button>
      </div>
    )
  }
}
UserSurvey.defaultProps = {
  onClick: () => {}
}
UserSurvey.propTypes = {

}

export default UserSurvey
