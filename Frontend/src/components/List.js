import React, { Component } from 'react';
import Timer from './Timer';
import * as moment from 'moment';
import '../scss/ListStyle.scss';
import { listConst } from './Constants';

class List extends Component {

    render() {
        return (
            <>
                {this.props.collection.length === 0
                    ?
                    <img
                        src={require("../asset/images/empty-list-icon.png")}
                        className="empty-list"
                        alt={listConst.emptyListIconAltText}
                    />

                    :
                    this.props.collection.map((item, index) => (

                        <div className="block">
                            <div className="content">

                                <img
                                    src={require("../asset/images/card-background.jpg")}
                                    width="100%"
                                    alt={listConst.cardBackgroundAltText}
                                />

                                <h5> Task: {item.taskname} </h5>
                                <h6> Project: {item.projectname} </h6>
                                <h6> Created Date: {item.created_date} </h6>

                                <h6 style={{ textAlign: 'center' }}>
                                    <img
                                        src={require("../asset/images/calender-icon.png")}
                                        width="15px"
                                        alt={listConst.calenderIconAltText}
                                    />
                                  &nbsp; {item.sdate} --- {item.edate}
                                </h6>

                                <button
                                    className="btn-primary"
                                    onClick={() => this.refs['timer' + index].style.display = ""} >
                                    Start Timer
                                </button>

                                <font ref={"timer" + index} style={{ display: 'none' }}>
                                    <Timer
                                        time={
                                            Math.abs(
                                                moment(item.sdate, "HH:mm")
                                                    .diff(moment(item.edate, "HH:mm"),
                                                        'minute')
                                            )
                                        }
                                    />
                                </font>

                            </div>
                        </div>
                    ))
                }

            </>
        );
    }
}

export default List;
