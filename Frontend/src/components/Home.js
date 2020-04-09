import React, { Component } from 'react';
import Header from './Header';
import Modal from './Modal';
import List from './List';
import Loader from './Loader';
import { post, get } from './Rest';
import { requiredValidator } from './Validator';
import { homeConst, systemMsg } from './Constants';
import * as moment from 'moment';
import '../scss/HomeStyle.scss';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      rowData: [],
      msg: null,
      modalVisibility: "none",
      contentType: "Add Task",
      modalTitle: "Add Task",
      loaderVisibility: "none",
    }

    //Binding functions
    this.getUserTask = this.getUserTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.search.bind(this);
    this.modalContent = this.modalContent.bind(this);

  }

  componentDidMount() {
    this.getUserTask();
  }

  //Function to fetch particular user tasks from api
  getUserTask() {
    try {

      this.setState({ loaderVisibility: null });

      get(homeConst.getUserTaskUrl)
        .then((response) => {

          if (response.ok) {
            return response.json()
              .then((res) => {
                this.setState({ rowData: res.response, loaderVisibility: "none" })
              })
          }
          else {
            return response.json()
              .then((res) => {
                alert(res.msg);

                if (res.status === 401) {
                  localStorage.removeItem("Token");
                  localStorage.removeItem("username");

                  window.location.href = "/react-task3";
                }
              })
          }
        })
    } catch (error) {
      alert(systemMsg.internalError);

      window.location.href = "/react-task3";
    }
  }

  //Function to be called when insert form is submitted to add new task
  handleSubmit(e) {
    try {
      e.preventDefault();

      let stime = moment(e.target[2].value, "HH:mm");
      let etime = moment(e.target[3].value, "HH:mm");

      if (stime.diff(etime, 'minute') <= 0) {

        let formData = new FormData();
        formData.append('taskname', e.target[0].value);
        formData.append('projectname', e.target[1].value);
        formData.append('stime', e.target[2].value);
        formData.append('etime', e.target[3].value);
        formData.append('username', localStorage.getItem('username'));
        formData.append('Authorization', localStorage.getItem("Token"));

        post("task", formData)
          .then((response) => {
            if (response.ok) {
              return response.json()
                .then((res) => {
                  this.setState({ msg: res.msg });

                  this.getUserTask();

                  this.refs.form.reset();
                })
            }
            else {
              return response.json()
                .then((res) => {
                  this.setState({ msg: res.msg })
                })
            }
          });

      } else {
        this.setState({ msg: systemMsg.timeValidationError });
      }

    } catch (error) {

      alert(systemMsg.internalError);
    }
  }

  //Function to search user task by date filter from api
  search(e) {
    try {
      e.preventDefault();

      if (moment().diff(e.target.value, 'day') >= 0) {

        this.setState({ msg: null });

        get(homeConst.getUserTaskByDateUrl + e.target.value + "&")
          .then((response) => {

            if (response.ok) {
              return response.json()
                .then((res) => {

                  if (res.status !== "500") {
                    this.setState({ rowData: res.response, msg: "Found " + res.response.length + " tasks." })
                  }
                })
            }
            else {
              return response.json()
                .then((res) => {

                  this.setState({ msg: "Found 0 tasks." })
                })
            }
          })
      }
      else {
        this.setState({ msg: homeConst.futureDateValidationError })
      }

    } catch (error) {

      alert(systemMsg.internalError);
    }
  }

  //Function to decide what will be the content displayed to the user in popup modal.
  modalContent() {

    if (this.state.contentType === "Add Task") {
      return (
        <div className="input-modal-outer-div">
          <form onSubmit={(e) => this.handleSubmit(e)} ref="form">

            <div>
              <div className="label">
                Task Name* : <div ref="taskname" className="error-text"></div>
              </div>

              <textarea name="taskname" cols="24" required="required"
                className="form-control" placeholder="Task Name"
                onKeyUp={(e) =>
                  requiredValidator(e.target.value, "Task Name", this.refs.taskname)
                }
              ></textarea>
            </div>

            <div>
              <div className="label">
                Project* : <div ref="projectname" className="error-text"></div>
              </div>

              <select name="projectname" className="form-control" required="required"
                onChange={(e) =>
                  requiredValidator(e.target.value, "Project Name", this.refs.projectname)
                }>
                <option> Project 1 </option>
                <option> Project 2 </option>
                <option> Project 3 </option>
                <option> Project 4 </option>
                <option> Project 5 </option>
              </select>
            </div>

            <div>
              <div className="label">
                Start Time* : <div ref="stime" className="error-text"></div>
              </div>

              <input type="time" name="stime" className="form-control" required="required"
                onKeyUp={(e) =>
                  requiredValidator(e.target.value, "Start Time", this.refs.stime)
                }
              />
            </div>

            <div>
              <div className="label">
                End Time* : <div ref="etime" className="error-text"></div>
              </div>

              <input type="time" name="etime" className="form-control" required="required"
                onKeyUp={(e) =>
                  requiredValidator(e.target.value, "End Time", this.refs.etime)
                } />
            </div>

            <div>
              <br />
              <input type="submit" value="Submit" className="btn-primary" />
              <input type="reset" className="btn-regular" />
            </div>

          </form>

          <br />
          <div className="error-text"> {this.state.msg} </div>
        </div>
      );

    } else {
      return (

        <div className="input-modal-outer-div">
          <div className="label"> Select Date : </div>
          <input
            type="date"
            className="form-control"
            placeholder="Search"
            onChange={(e) => this.search(e)}
          />

          <br />
          <div className="error-text"> {this.state.msg} </div>
        </div>
      );
    }

  }

  render() {
    return (
      <>
        <Header />

        <div className="outer">
          <input
            type="button"
            value="Add task"
            className="btn-primary"
            onClick={() => this.setState({
              modalVisibility: "",
              contentType: "Add Task",
              modalTitle: "Add Task",
              msg: null,
            })}
          />

          <input
            type="button"
            value="Filter"
            className="btn-regular"
            onClick={() => this.setState({
              modalVisibility: "",
              contentType: "Filter",
              modalTitle: "Filter",
              msg: null,
            })}
          />
          <hr />

        </div>


        <Modal
          title={this.state.modalTitle}
          content={this.modalContent()}
          visibility={this.state.modalVisibility}
          onClose={() => this.setState({ modalVisibility: "none" })}
        />

        <List collection={this.state.rowData.reverse()} />

        <Loader visibility={this.state.loaderVisibility} />

      </>
    );
  }
}

export default Home;
