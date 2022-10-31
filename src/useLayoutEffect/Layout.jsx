import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../examples";

export const Layout = () => {

	const { counter, increment } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	// console.log({ data, isLoading, hasError });

	const { author, quote } = !!data && data[0];


	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			{
				isLoading
					? <LoadingQuote />
					: <Quote author={author} quote={quote} />

			}


			<button
				disabled={isLoading}
				className="btn btn-primary"
				onClick={() => increment()}
			>
				Next quote
			</button>



		</>
	)
}
