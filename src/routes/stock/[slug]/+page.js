import symbols from '$lib/stocksymbols.json'

/// @param slug
export function load({ params }) {
	let {slug} = params
	return {"symbol": slug, "name": symbols[slug]}
}