// declaring an array that will contain
// quotes that were not shown in that cycle
var quotesUnused = [];
// cloning original quotes array
quotesUnused = quotes.slice(0);
// variable containing value needed for
// timer that sets interval for change displayed 
// quotes over time
var interval;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// resetting timer interval after "Show another quote" button click
document.getElementById('loadQuote').addEventListener("click", resetInterval, false);

// function returns random number
// minimum possible number is 0
// maximum possible number equals length of quotesUnused array
function getRandomNumber () {
	var randomNumber = Math.floor(Math.random()*quotesUnused.length);
	return randomNumber;
}


// function returns a random quote object from the quotes array
function getRandomQuote () {
	var randomQuote = quotesUnused[getRandomNumber()];
	// deleting current selected quote from the buffer
	// 'quotesUnused' array
	quotesUnused.splice(quotesUnused.indexOf(randomQuote), 1);
	return randomQuote;
}

// function returns HTML code for background-color
function getRandomColor () {
	var rgbColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' +Math.floor(Math.random() * 256) + ')';
	return rgbColor;
}

// function sets interval for quote renewal and runs printQuote function
function cycleQuote() {
interval = window.setInterval(printQuote, 10000);
console.log('cycleQuote is running');
}

// function needed to reset timer interval
// after user clicks on "load quote" button
function resetInterval(intervalID) {
		clearInterval(interval);
		interval = window.setInterval(printQuote, 10000);
	}


// function prints HTML code in selected <div>
function print(htmlQuote) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = htmlQuote;
}


// printing quote first time
printQuote();
// calling function to print new quotes on the page
// with specified interval
cycleQuote();


// function prints HTML code for selected quote
function printQuote () {
	var quoteYear;
	var quoteCitaion;
	// getting new random quote
	var selectedQuote = getRandomQuote();
	
	// checking if 'citation' and 'year' properties are presenting
	// and if they are - writing HTML code with
	// attributes value to the variables 'quoteYear' and 'quoteCitation'
	if (selectedQuote.citation === undefined) {
		quoteCitaion = '';
	} else {
		quoteCitaion = '<span class="citation">' + selectedQuote.citation + '</span>';
	}
	if (selectedQuote.year === undefined) {
		quoteYear = '';
	} else {
		quoteYear = '<span class="year">' + selectedQuote.year + '</span>';
	}
	//getting HTML code with random color for page background
	document.body.style.backgroundColor = getRandomColor();
	// writing HTML code with quotes and presenting properties values
	var htmlQuote = '<p class="quote">' + selectedQuote.quote + '</p>'; 
		htmlQuote += '<p class="source">' + selectedQuote.source + quoteYear + quoteCitaion + '</p>';
		htmlQuote += '<p class="tag">' + selectedQuote.tag + '</p>';
	//printing result to the page
	print(htmlQuote);
	// checking if we used all unused quotes from our buffer 'unusedQuotes' array
	// if so repeating cloning of our original 'quotes' array to the buffer 'unusedQuotes' array
	if (quotesUnused.length === 0) {
	quotesUnused = quotes.slice(0);
		}
	
}
