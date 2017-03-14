// Why do I use this again ?????
// 'use strict'


// include modules
const express 	= require ( 'express' )
const fs 		= require ( 'fs' )
const app 		= express ()


// Public files {media/css/js}
app.use( express.static( '/public' ) )


// Visual template { I'll be using pug }
app.set( 'view engine', 'pug' )

app.set( 'views', __dirname + '/views' )


// The /url I want to get
app.get( '/', ( req, res) => {
	console.log( 'rendering page' )

	// read the json file located at...
	// fs.readFile( __dirname + '/data.json', ( error, data ) => {
	// 	if ( error ) throw error
	// 	let parsedData = JSON.parse( data )
	// 	console.log( parsedData )

	// 	// return the content of this page
	// 	res.render( 'index', { parsedData } )
	// })
	res.render( '/index' )
})

// Localhost will be running on
app.listen( 8003, () => {
	console.log( 'Server is running!' )
})