import Link from 'next/link'
import PublicationForm from './publication-form'

function Publication(props){
    let content = Object.keys(props.children).map(key => {
        let pub = props.children[key].faculty_publishers;
        return (
            <tr>
                <td>{props.children[key].title}</td>
                <td>
                    {Object.keys(pub).map(auth => {
                        return (
                            <a href = "#">{pub[auth].faculty_personal_info.firstName}, </a>
                        );
                    })}
                    {props.children[key].nonFacultyAuthors}
                </td>
                <td>{props.children[key].publicationDate}</td>
                <td>{props.children[key].url}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    });
	return(
		<div>
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Publication</th>
				<th>Author/s</th>
				<th>Publication Date</th>
				<th>URL</th>
				<th>Citation</th>
				<th>Proof</th>
				<th>Status</th>
			</tr>
            {content}
			<tr>
				<td>Principles of Programming Languages</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>2020-01-26</td>
				<td>http://clubpenguin.com</td>
				<td></td>
				<td></td>
				<td><a className="btn btn-info" data-toggle="modal" data-target="#ongoingstatus4">Ongoing</a></td>
			</tr>
			<tr>
				<td>Advanced Computer Systems</td>
				<td></td>
				<td>2017-05-26</td>
				<td></td>
				<td></td>
				<td></td>
				<td><a className="btn btn-info" data-toggle="modal" data-target="#forVerifstatus4">For Verification</a></td>
			</tr>
			<tr>
				<td>Algorithms and Advanced Data Structures I</td>
				<td></td>
				<td>2010-09-06</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>	
	</div>
	<div>
		<PublicationForm />
	</div>

	<div className="modal fade" id="ongoingstatus4" tabIndex="-1" role="dialog" aria-labelledby="ongoingLabel" aria-hidden="true">
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
                                    <input type = "file" className = "form-control-file" name = "Proof" />
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
        
            <div className="modal fade" id="forVerifstatus4" tabIndex="-1" role="dialog" aria-labelledby="forVerifLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="forVerifLabel">Status</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <table className = "table table-striped table-sm">
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Date of Approval</th>
                            </tr>
                            <tr>
                                <td>Unit Head</td>
                                <td>Therese Basco-Uy</td>
                                <td>Approved</td>
                                <td>2020-11-08</td>
                            </tr>
                            <tr>
                                <td>Department Head</td>
                                <td>LOL Dunno</td>
                                <td>For Approval</td>
                                <td></td>
                            </tr>
                            
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>		


		</div>
	)
}

export default Publication
