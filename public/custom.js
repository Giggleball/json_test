// Div for info
const info = document.getElementById( 'displayInfo')
const info1 = document.getElementById( 'displayInfo1')
const info2 = document.getElementById( 'displayInfo2')

// Select the element
const fetch = document.getElementById( 'fetch' )

// Eventlistener for when it gets clicked
fetch.addEventListener( 'click', () => {

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

// Create and add html to div 
function htmlToPage ( infoDiv ) {

	let htmlString = ''

	// Looping through the json file with an array inside an array
	for( i = 0; i < infoDiv.length; i++ ) {
		
		// Because you loop through an object within an array within an object you have to access through [ ] then .
		for( ii = 0; ii < infoDiv[i].celebrations.length; ii++ ) {

			// I want to add a condition to only display the info which contains info in all three sections => HOW
			if ( infoDiv[i].celebrations[ii].title !== 0 ) {
				
				// If the title is not empty => print
				htmlString += '<p>' + 'Is ' + infoDiv[i].weekday + ' your favourite day to celebrate ' + infoDiv[i].celebrations[ii].title + ' and '
			} 
		}
			

		for( ii = 0; ii < infoDiv[i].celebrations.length; ii++ ) {				
			// I want to only display the first colour in the object => HOW
			htmlString += ' wear ' + infoDiv[i].celebrations[ii].colour
			}

		htmlString += '?</p>'
	}

	info.insertAdjacentHTML( 'beforeend', htmlString )

}


// Goal 

// The user needs to be able to navigate the data without reloading the whole page.

// To do list :
// 		1. display only certain data
//		2. display only 1 colour from json
// 		3. link data to a day { if entered wednesday, present all celebrations of that day with fav colour }
//			Then change text to "On [day] we celebrate [celebrations] and wear [colour]"
//		4. make it look decent


//[
// {
	// date: "2017-11-01",
	// season: "ordinary",
	// season_week: 31,
	// celebrations: [
		// {
		// title: "All Saints",
		// colour: "white",
		// rank: "solemnity",
		// rank_num: 1.3
		// }
	// ],
	// weekday: "wednesday"
	// }
//]