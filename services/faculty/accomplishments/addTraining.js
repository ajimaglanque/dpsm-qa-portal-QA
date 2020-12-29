import axios from "axios"

export default async function addPublication(data) {
	try {
		let token = null
		const tokenRes = await axios.post("https://sp-api-test.alun.app/api/token", {
			username: "username",
			password: "password"
		})

		if(tokenRes.data.success) {
			token = tokenRes.data.result
			try {
				const response = await axios.post("https://sp-api-test.alun.app/api/faculty/accomplishment/add/training-seminar", {
					facultyId: "9",
					title: `${data.title}`,
		            role: `${data.role}`,
		            dateFrom: `${data.dateFrom}`,
		            dateTo: `${data.dateTo}`,
		            venue: `${data.venue}`,
		            proof: `${data.proof}`
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
	} catch (err) {
		console.error(err)
		return err
	}
}