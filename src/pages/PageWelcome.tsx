import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import axios from "axios";
import * as config from '../config';

export const PageWelcome = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${config.backendUrl()}/employees`);
			const _employees = response.data;
			setEmployees(_employees);
		})();
	}, []);

	return (
		<>
			<h2 className="mb-2 text-xl">There are {employees.length} employees:</h2>
			<ul className="list-disc ml-6">
				{employees.map((employee) => {
					return (
						<li key={employee.employeeID}><span className="font-semibold">{employee.firstName} {employee.lastName}</span> - {employee.title}</li>
					);
				})}
			</ul>
		</>
	);
};
