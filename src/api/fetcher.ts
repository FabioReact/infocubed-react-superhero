const BASE_URL = 'http://localhost:4000'

type FetcherOptions = {
	method: 'GET' | 'POST',
	signal?: AbortSignal
}

// Facade
class Fetcher {
	static get (url: string, options?: FetcherOptions) {
		return fetch(url, options).then((response) => response.json())
	}
}

export { Fetcher as default, BASE_URL }