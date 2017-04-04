// Div which'll display the results
const dataBooks = document.getElementById( 'output')

// Given the “library” array of objects, write a JavaScript function that shows the reading status of each book inside the “#output” div. 
// Paste your jsfiddle link solution below. => https://jsfiddle.net/rykedyeq/9/

// Approach - An if/else statement: If read is true "already read" + "by" if false "You still need to read" + "by"

// BookData
var library = [   
    {  
        title: 'Bill Gates',  
        author: 'The Road Ahead',  
        readingStatus: true  
    },  
    {  
        title: 'Steve Jobs',  
        author: 'Walter Isaacson',  
        readingStatus: true  
    },  
    {  
        title: 'Mockingjay: The Final Book of The Hunger Games',  
        author: 'Suzanne Collins',  
        readingStatus: false  
    }];

function statusBooks( library ) {

		var text = ''
    
		for( i = 0; i < library.length; i++ ) {

  			if( library[i].readingStatus == true ) {

        	text += "<p>" + "Already read '" + library[i].title + "' by " + library[i].author + '.</p>'  

   	 		} else {

        	text += "<p>" + "You still need to read '" + library[i].title + "' by " + library[i].author + '.</p>'
        }
    }
    dataBooks.insertAdjacentHTML( 'beforeend', text )
}

statusBooks(library)