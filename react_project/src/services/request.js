import fetch from 'dva/fetch';

function parseJSON(response) {
	return response.json();
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	//如果状态码不正确，就返回错误信息
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

const parseQuery = (obj) => {
	let str = ''
	// eslint-disable-next-line no-unused-vars
	for (let key in obj) {
		const value = typeof obj[key] === 'string' 
			? obj[key]
			: JSON.stringify(obj[key]) 
		str += '&' + key + '=' + value
	}
	return str.substr(1)
}
/**
 * 请求一次,返回一个promise
 *
 * @param  {string} url       - 要请求的url
 * @param  {object} [options] - 要传递给fetch的选项
 * @return {object}           - 包含data或者err的对象
 */
const request = (url, method = 'get', data) => {
	const options = {
		method: method,   // HTTP请求方法，默认为GET
		headers: {        // HTTP的请求头，默认为{}
			'Content-Type': 'application/json'
		},
		Authorization: localStorage.getItem('token'),
		credentials: 'include' // 是否携带cookie，默认为omit:不携带;same-origi:同源携带、include:同源跨域都携带;
	}
	if (method === 'get') {
		url += '?' + parseQuery(data)
	} else {
		options.body = JSON.stringify(data)
	}
	return fetch(url, options)
		.then(checkStatus)
		.then(parseJSON)
		.then(data => ({ data }))
		.catch(err => ({ err }));
}
export default {
	GET(url, data) {
		return request(url, 'get', data)
	},
	POST(url, data) {
		return request(url, 'post', data)
	}
}
