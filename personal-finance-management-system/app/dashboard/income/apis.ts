import { apiUrls } from 'lib/apiUrls';

export type IncomeData = {
	notes: string;
	name: string;
	price: string;
	category: string;
	date: string;
};

export const user_add_income = async (data: IncomeData) => {
	const res = await fetch(apiUrls.income.add, { method: 'POST', body: JSON.stringify(data) });
	if (!res.ok) {
		const error = await res.json();
		throw error;
	}
	return await res.json();
};

export const user_del_income = async (id: string) => {
	const res = await fetch(apiUrls.income.modify, { method: 'DELETE', body: JSON.stringify({ id: [id] }) });
	return await res.json();
};

export const user_edit_income = async (data: IncomeData) => {
	const res = await fetch(apiUrls.income.modify, { method: 'PUT', body: JSON.stringify(data) });
	return await res.json();
};
