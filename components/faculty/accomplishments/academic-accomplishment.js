import Link from 'next/link'
import AcadAccomplishmentForm from './academic-accomplishment-form'

function AcademicAccomplishment(){
	return(
	<div>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Accomplishment</th>
			    <th>Description</th>
                            <th>Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Earned masteral degreee</td>
                            <td>MS Computer Science</td>
			    <td>2020-02-29</td>
                            <td><button>Preview proof here (img/pdf)</button></td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#ongoing">Ongoing</a></td>
                        </tr>
                        <tr>
                            <td>Attendee of global conference</td>
                            <td>Conference on public health</td>
			    <td>2020-03-20</td>
                            <td><button>Preview proof here (img/pdf)</button></td>
                            <td><a className="btn btn-info" data-toggle="modal" data-target="#forVerif">For Verification</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <AcadAccomplishmentForm />
            </div>   

            <div className="modal fade" id="ongoing" tabindex="-1" role="dialog" aria-labelledby="ongoingLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ongoingLabel">Update Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "EndDate"> End Date </label>
                                    <input type = "date" className = "form-control" name = "EndDate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "Proof"> Proof </label>
                                    <input type = "file" className = "form-control" name = "Proof" />
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
        
            </div>
	)
}

export default AcademicAccomplishment