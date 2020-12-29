import Link from 'next/link'
import EducationForm from './education-form'

function Education(props) {
    let content = Object.keys(props.children).map(key => {
        // if(props.children[key].status == 'ongoing') {
            return (
                <tr key = {props.children.[key].educInfoId}>
                    <td>{props.children[key].institutionSchool}</td>
                    <td>{props.children[key].degreeCert}</td>
                    <td>{props.children[key].majorSpecialization}</td>
                    <td>{props.children[key].startDate}</td>
                    <td>{props.children[key].endDate}</td>
                    <td><button>{props.children[key].proof}</button></td>
                    <td>{props.children[key].status}</td>
                    <td>
                        <div className = "btn-grp">
                            <a className="btn btn-info" data-toggle="modal" data-target="#editEducation">Edit</a>
                            <a className="btn btn-danger" data-toggle="modal" data-target="#deleteEducation">Delete</a>
                        </div>
                    </td>
                </tr>
            );
        /*} else if(props.children[key].status == 'for verification') {
            return (
                <tr>
                    <td>{props.children[key].institutionSchool}</td>
                    <td>{props.children[key].degreeCert}</td>
                    <td>{props.children[key].majorSpecialization}</td>
                    <td>{props.children[key].startDate}</td>
                    <td>{props.children[key].endDate}</td>
                    <td><button>Preview proof here (img/pdf)</button></td>
                    <td></td>
                    <td>
                        <a 
                            className="btn btn-info"
                            data-toggle="modal"
                            data-target="#forVerif"
                        >
                            {props.children[key].status}
                        </a>
                    </td>
                </tr>
            );
        }*/
    });
    return (
        <div>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Institution/School</th>
                            <th>Degree/Certification</th>
                            <th>Major/Specialization</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {content}
                        {/*<tr>
                            <td>University of the Philippines Diliman</td>
                            <td>Doctor of Philosophy in Computer Science</td>
                            <td>None</td>
                            <td>2020-01-26</td>
                            <td>Present</td>
                            <td></td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#ongoing">Ongoing</a></td>
                        </tr>
                        <tr>
                            <td>University of the Philippines Diliman</td>
                            <td>MS Computer Science</td>
                            <td>Biostat</td>
                            <td>2017-05-26</td>
                            <td>2020-01-25</td>
                            <td></td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#forVerif">For Verification</a></td>
                        </tr>
                        <tr>
                            <td>University of the Philippines Los Banos</td>
                            <td>BS Computer Science</td>
                            <td>Health Informatics</td>
                            <td>2010-09-06</td>
                            <td>2017-05-25</td>
                            <td></td>
                            <td>Verified</td>
                        </tr>*/}
                    </tbody>
                </table>
            </div>

            <div>
                <EducationForm />
            </div>   

            <div className="modal fade" id="editEducation" tabIndex="-1" role="dialog" aria-labelledby="editEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editEducationLabel">Update Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "SchoolEducationHistoryUpdate"> School/Institution </label>
                                    <input className = "form-control" type = "date" name = "SchoolEducationHistoryUpdate" placeholder = "Input school" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "DegreeEducationalHistoryUpdate"> Degree/Certification </label>
                                    <input className = "form-control" type = "text" name = "DegreeEducationalHistoryUpdate" placeholder = "Input degree" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "MajorEducationalHistoryUpdate"> Major/Specialization </label>
                                    <input className = "form-control" type = "text" name = "MajorEducationalHistoryUpdate" placeholder = "Input major" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "StartDateEducationalHistoryUpdate"> Start Date </label>
                                    <input className = "form-control" type = "date" name = "StartDateEducationalHistoryUpdate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "EndDateEducationalHistoryUpdate"> End Date </label>
                                    <input className = "form-control" type = "date" name = "EndDateEducationalHistoryUpdate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "StartDateEducationalHistoryUpdate"> Proof </label>
                                    <input type = "file" className = "form-control-file" name = "ProofEducationalHistoryUpdate" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteEducation" tabIndex="-1" role="dialog" aria-labelledby="deleteEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteEducationLabel">Delete Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this education information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger">Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
	
	
    )
  }
  
  export default Education
