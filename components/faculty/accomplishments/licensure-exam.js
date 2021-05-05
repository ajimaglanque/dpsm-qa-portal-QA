import Link from 'next/link'
import LicensureExamForm from './licensure-exam-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import updateLicensure from '../../../services/faculty/accomplishments/updateLicensure'
import deleteLicensure from '../../../services/faculty/accomplishments/deleteLicensure'

function LicensureExam(props) {
    let deleteLic = 0
    let editLic = 0
    const [currData, setData] = React.useState({
        licenseId: 0,
        examName: '',
        examDate:'',
        licenseNumber: '',
        rank: '',
        proof: ''
    })
    let content = Object.keys(props.children).map(key => {
        if(props.children[key].licenseId != null) {
            if(props.children[key].proof != null) {
                return (
                    <tr key = {props.children[key].licenseId}>
                        <td>{props.children[key].examName}</td>
                        <td>{props.children[key].rank}</td>
                        <td>{props.children[key].examDate}</td>
                        <td>{props.children[key].licenseNumber}</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick = {() => {
                                    let file = props.children[key].proof
                                    downloadProof(file, props.token)
                                }}
                            >
                                Download
                            </button>
                            <a
                                className ="btn btn-info"
                                href={"http://localhost:3001/" + props.children[key].proof}
                                style = {{ color: 'white' }}
                                target="_blank">
                                Preview
                            </a>
                        </td>
                        <td>{props.children[key].status}</td>
                        <td>
                            <div className = "btn-group">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editLicensureExam" onClick={() => {
                                    setEdit(props.children.[key].licenseId)
                                    setKey(editLic)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deleteLicensureExam" onClick={() => {
                                    setDelete(props.children.[key].licenseId)
                                }}>Delete</a>
                            </div>
                        </td>
                    </tr>
                );
            } else {
                return (
                    <tr key = {props.children[key].licenseId}>
                        <td>{props.children[key].examName}</td>
                        <td>{props.children[key].rank}</td>
                        <td>{props.children[key].examDate}</td>
                        <td>{props.children[key].licenseNumber}</td>
                        <td>None</td>
                        <td>{props.children[key].status}</td>
                        <td>
                            <div className = "btn-group">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editLicensureExam" onClick={() => {
                                    setEdit(props.children.[key].licenseId)
                                    setKey(editLic)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deleteLicensureExam" onClick={() => {
                                    setDelete(props.children.[key].licenseId)
                                }}>Delete</a>
                            </div>
                        </td>
                    </tr>
                );
            }
        }
    });

    function setEdit(id) {
        editLic = id
    }

    function setDelete(id) {
        deleteLic = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children.[key].licenseId == x) {
                setData(props.children.[key])
            }
        });
    }

    return (
        <div>
        <h2 align = "center"> Licensure Exams </h2>
        <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{props.name}</NameDisplay>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Exam Name</th>
                            <th>Rank</th>
                            <th>Date</th>
                            <th>License Number</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {content}
                    </tbody>
                </table>
            </div>

            <div>
                <LicensureExamForm token = { props.token } />
            </div>   
	
            <div className="modal fade" id="editLicensureExam" tabIndex="-1" role="dialog" aria-labelledby="editLicensureExamLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editLicensureExamLabel">Update Licensure Exam Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let form = document.getElementById('editLicForm')
                            let formData = new FormData(form)
                            formData.append('licenseId', currData.licenseId)
                            await updateLicensure(formData, props.token)
                            Router.reload()
                            // Router.push('/faculty/accomplishment#licensure-exam', '/')
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "editLicForm">
                            <div className="modal-body">
                                <hr />
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "LicensureExamUpdate"> Licensure Exam </label>
                                        <Field className = "form-control" type = "text" name = "examName" id = "examName" placeholder = "Input licensure exam" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "LicensureExamDateUpdate"> Date </label>
                                        <Field type = "date" className = "form-control" name = "examDate" id = "examDate" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "LicensureExamRankUpdate"> Rank </label>
                                        <Field className = "form-control" type = "text" name = "rank" id = "rank" placeholder = "Input rank" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "LicenseNumeberUpdate"> License Number </label>
                                        <Field className = "form-control" type = "text" name = "licenseNumber" id = "licenseNumber" placeholder = "Input licensure number" />
                                    </div>
                                </div>
                                <div className = "form-row">
                                    <div className = "form-group">
                                        <label htmlFor = "LicensureExamProofUpdate"> Proof </label>
                                        <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteLicensureExam" tabIndex="-1" role="dialog" aria-labelledby="deleteLicensureExamLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteLicensureExamLabel">Delete Licensure Exam Information</h5>
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
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {() => {
                            deleteLicensure(deleteLic, props.token)
                            Router.push('/faculty/accomplishment#licensure-exam', '/')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
            
        
        </div>
	
	
    )
  }
  
  export default LicensureExam
