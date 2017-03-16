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
		htmlString += '<p>' + 'Is ' + infoDiv[i].weekday + ' your favourite day '

		// Because you loop through an object within an array within an object you have to access through [ ] then .
		for( ii = 0; ii < infoDiv[i].celebrations.length; ii++ ) {
			htmlString += ' to celebrate ' + infoDiv[i].celebrations[ii].title
		}
			

		for( ii = 0; ii < infoDiv[i].celebrations.length; ii++ ) {
			htmlString += ' and wear ' + infoDiv[i].celebrations[ii].colour
		}

		htmlString += '?</p>'
	}

	info.insertAdjacentHTML( 'beforeend', htmlString )

}






// for( i = 0; i < infoDiv.length; i++ ) {
// 		htmlString += '<p>' + 'Do you also celebrate ' + infoDiv[i].celebrations.title + ' and wear ' + infoDiv[i].celebrations.colour + '?</p>'

// why isn't it workingggggggg =(


// Goal 

// The user needs to be able to navigate the data without reloading the whole page.
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