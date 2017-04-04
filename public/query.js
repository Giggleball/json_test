// Using JQuery, write a JavaScript function to GET the photo data from the API 
// via ajax and display images only from albumId 10. This API supports the “albumId” parameter.

// http://jsfiddle.net/6ywem6wn/31/

// Ajax with jQuery
// API: 'http://jsonplaceholder.typicode.com/photos'
// Supported parameter: 'albumId'


// Step 1. Get data
// Step 2. Loop over data
// Step 3. Select iD 10 
// Step 4. Diplay data in html file



// Location of pics in html div
var images = document.getElementById('album')

// Create a connction with the url
var request = new XMLHttpRequest()

// Get photo data from url
request.open( 'GET', 'http://jsonplaceholder.typicode.com/photos' )

// When data is loaded
request.onload = function() {
	// Save data as variable
	var picData = request.responseText
	// Parse the data otherwise the browser will not recognize it as a json file
	picData = JSON.parse(request.responseText)
	// Call picsToHTML function
	picsToHTML(picData)
}

// Send the request
request.send()

// Function to display pictures
function picsToHTML( albums ) {

	var photographs = ''
	// Loop through the array
	for( i = 0; i < albums.length; i++ ) {

		// Select only pictures with albumId[10]
		if( albums[i].albumId == 10 ) {

			// Display images with titles
			photographs += '<img src="' + albums[i]['thumbnailUrl'] + '" />'

			photographs += '<p>' + albums[i].title + '</p>'
		}
	}
	images.insertAdjacentHTML( 'beforeend', photographs )
}




// {
// albumId: 1,
// id: 1,
// title: "accusamus beatae ad facilis cum similique qui sunt",
// url: "http://placehold.it/600/92c952",
// thumbnailUrl: "http://placehold.it/150/92c952"
// },







	

	