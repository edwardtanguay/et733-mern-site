import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import axios from "axios";

const backendUrl = "http://localhost:4206";

export const PageWelcome = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/employees`);
			const _employees = response.data;
			setEmployees(_employees);
		})();
	}, []);

	return (
		<>
			<h2>There are {employees.length} employees:</h2>
		</>
	);
};
