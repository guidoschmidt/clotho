import React from 'react'
import swla from 'sweetalert'

class UserSurvey extends React.Component {
  handleClickNext() {
    const { onClick } = this.props;
    const { age, job, clinical } = this.refs;

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

    if(job.value == '') { swal("Error!", "Please give your job title"); }
    else {
      onClick();
    }
  }

  handleAgeChange(e) {
    var value = Number(this.refs.age.value);
    var ageLabel = document.getElementById('ageLabel');
    ageLabel.innerHTML = " between " + (value - 10) + " and " + value;
  }

  render() {
    return (
      <div>
        <div className="user-survey">
          <div className="explanation">
            <h3>Please fill out theese questions</h3>
            <p>
              Before we can start, please fill out the questions
              on the right
            </p>
          </div>
          <form>
            <h3>How old are you?</h3>

            <label id="ageLabel" htmlFor="age"> between 5 and 15 </label>
            <input
              id="age" type="range" min="10" max="100" defaultValue="10" step="5" ref="age"
              onChange={this.handleAgeChange.bind(this)}/>

            <hr />

            <h3>What is your profession/job title?</h3>
            <label>Job Title:</label>
            <input ref="job" type="text" />

            <hr />

            <h3>Do you work in a clinical environment?</h3>
            <select ref="clinical">
              <option>Yes</option>
              <option>No</option>
            </select>

          </form>
        </div>
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
