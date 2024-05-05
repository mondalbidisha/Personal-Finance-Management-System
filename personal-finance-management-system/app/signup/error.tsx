'use client';

// Error components must be Client Components
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>There is an error in creating your account on PFMS! Please try again</h2>
			<button
				onClick={
					() => reset()
				}
			>
				Try again!
			</button>
		</div>
	);
}
