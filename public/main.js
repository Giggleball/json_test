// Connection with the url
const request = new XMLHttpRequest()

// Method to download data from url
request.open( 'GET', 'https://bitbucket.org/nadjib-l1nda/front-end-test/raw/30ffd45f11ad684579e70123f253ea20d0e7befc/data.json' )

// What to do when data is loaded	
request.onload = function() {
	// Parse the data otherwise the browser will not recognize it as a json file
	const data = JSON.parse(request.responseText)	
	htmlToPage( data )
}	

// Send the request
request.send()
})

function htmlTest( seasonData ) => {
	console.log( 'testinggggg' )
	console.log( htmlTest )
}
