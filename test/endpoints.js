/*
const basicEndpointTest = require('./utils/basicEndpointTest.js')

const tests = [
	{
		requestData: {
			endpoint: 'api/beer/WHQisc',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/WHQisc/breweries',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'data'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/WHQisc/ingredients',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/WHQisc/ingredients/details',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/WHQisc/socialAccounts',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/WHQisc/variations',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/WHQisc/breweries',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/brewery/AqEUBQ',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/brewery/AqEUBQ/beers',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
]


tests.forEach( endpoint => {
	basicEndpointTest(endpoint.requestData, endpoint.expectedResponse, describe, it)
})
*/