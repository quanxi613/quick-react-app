import { get, post } from '../utils/api'


export function getData(params) {
	return get('/listPriceBar', {
		params,
	})
}

