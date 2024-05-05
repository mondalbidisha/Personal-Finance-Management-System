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
			<h2>Error in handling logging you in the system!</h2>
			<button
				onClick={
					() => reset()
				}
			>
				Kindly try again in sometime
			</button>
		</div>
	);
}
