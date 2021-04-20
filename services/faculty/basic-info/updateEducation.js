import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateEducation(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
		    let header = {
		        headers: {
		            'Authorization': 'Bearer ' + token
		        }
		    }

		    if (`${data.proof}` != null) {
		    	try {
		    		const response = await axios.put(url + "/education", {
						educInfoId: `${data.educInfoId}`,
						institutionSchool: `${data.institutionSchool}`,
						degreeType: `${data.degreeType}`,
						degreeCert: `${data.degreeCert}`,
						majorSpecialization: `${data.majorSpecialization}`,
						startDate: `${data.startDate}`,
						endDate: `${data.endDate}`,
						proof: `${data.proof}`,
					}, {
						headers: {
							Authorization: `Bearer ${token}`
						}
					})	
					if (response.data.success) {
						console.log(response.data)
						return response.data
					} else {
						console.error(response.message)
						return response.data
					}	
		    	} catch (err) {
					console.error(err)
					return err
				}
		    } else {
		    	try {
		    		const response = await axios.put(url + "/education", {
						educInfoId: `${data.educInfoId}`,
						institutionSchool: `${data.institutionSchool}`,
						degreeType: `${data.degreeType}`,
						degreeCert: `${data.degreeCert}`,
						majorSpecialization: `${data.majorSpecialization}`,
						startDate: `${data.startDate}`,
						endDate: `${data.endDate}`,
					}, {
						headers: {
							Authorization: `Bearer ${token}`
						}
					})	
					if (response.data.success) {
						console.log(response.data)
						return response.data
					} else {
						console.error(response.message)
						return response.data
					}	
		    	} catch (err) {
					console.error(err)
					return err
				}
		    }
	    } else {
	        console.log(access.result.message)
		}
	} catch (err) {
		console.error(err)
		return err
	}
}