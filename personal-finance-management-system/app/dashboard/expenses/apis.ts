import { apiUrls } from 'lib/apiUrls';

export type ExpenseData = {
	notes: string;
	name: string;
	price: string;
	category: string;
	date: string;
	paid_via: string;
	id: string | null;
};

export const user_add_expense = async (data: ExpenseData) => {
	const res = await fetch(apiUrls.expenses.add, { method: 'POST', body: JSON.stringify(data) });
	if (!res.ok) {
		const error = await res.json();
		throw error;
	}
	return await res.json();
};

export const user_del_expense = async (id: string) => {
	const res = await fetch(apiUrls.expenses.modify, { method: 'DELETE', body: JSON.stringify({ id: [id] }) });
	return await res.json();
};

export const user_edit_expense = async (data: ExpenseData) => {
	const res = await fetch(apiUrls.expenses.modify, { method: 'PUT', body: JSON.stringify(data) });
	return await res.json();
};
