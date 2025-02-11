import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addFacultyLoad(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if (token) {
			try {
				for(var value of formData.values()) {
					console.log(value)
				}
				const response = await axios({
				    method: 'POST',
				    url: process.env.API_URL + '/faculty/load',
				    data: formData,
				    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			    })	
				return response.data
			} catch (err) {
				console.error(err)
				return err
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}