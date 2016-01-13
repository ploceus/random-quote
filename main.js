$(document).ready(function() {
	$('.new-quote').click(changeQuote);
	$("#twitter-btn").click(tweet);
	changQuote();
});

function changeQuote(){
	var randomQuote = Math.floor(Math.random() * (quotes.length));
  $('.quote-content').text(quotes[randomQuote].quote);
  $('.author').text(quotes[randomQuote].author);
}

function tweet(){
	var cita = $('.quote-content').text();
  var author = $('.author').text();
  var tweet = cita + " by " + author;
  $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
}

var quotes = [];

  author: 'Bill Gates'
	quotes[0] = {
	  quote: 'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.',
	  author: 'C.A.R. Hoare'
	}

	quotes[1] = {
	  quote: '"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."',
	  author: 'Martin Golding'
	}

	quotes[2] = {
	  quote: '"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."',
	  author: 'Linus Torvalds'
	}

	quotes[3] = {
	  quote: '"On two occasions I have been asked [by members of Parliament]: \'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?\' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question."',
	  author: 'Charles Babbage'
	}

	quotes[4] = {
	  quote: '“To iterate is human, to recurse divine.”',
	  author: 'L. Peter Deutsch'
	}

	quotes[5] = {
	  quote: '“The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.”',
	  author: 'Seymour Cray'
	}

	quotes[6] = {
	  quote: '“Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.”',
	  author: 'Alan Kay'
	}

	quotes[7] = {
	  quote: '“Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.”',
	  author: 'Larry Wall'
	}

	quotes[8] = {
	  quote: '“First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.”',
	  author: 'George Carrette'
	}

	quotes[9] = {
	  quote: '"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones."',
	  author: 'Donald Knuth'
	}

	quotes[10] = {
	  quote: '"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."',
	  author: 'Brian W. Kernighan'
	}

	quotes[11] = {
	  quote: '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."',
	}

	quotes[12] = {
	  quote: '"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code."',
	  author: 'Christopher Thompson'
	}

	quotes[13] = {
	  quote: '"I don\'t care if it works on your machine! We are not shipping your machine!"',
	  author: "Vidiu Platon"
	}

	quotes[14] = {
	  quote: '"Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success."',
	  author: 'Tom DeMarco'
	}

	quotes[15] = {
	  quote: '"Beware of bugs in the above code; I have only proved it correct, not tried it."',
	  author: 'Donald E. Knuth.'
	}

	quotes[16] = {
	  quote: '“If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.’ “',
	  author: 'Mark Minasi'
	}

	quotes[17] = {
	  quote: '“The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.”',
	  author: 'Randall E. Stross'
	}

	quotes[18] = {
	  quote: '"Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry"',
	  author: 'Ted Nelson'
	}

	quotes[19] = {
	  quote: '"I invented the term \'Object-Oriented\', and I can tell you I did not have C++ in mind."',
	  author: 'Alan Kay'
	}

	quotes[20] = {
	  quote: '"It is easier to port a shell than a shell script."',
	  author: 'Larry Wall'
	}

	quotes[21] = {
	  quote: '"Perl – The only language that looks the same before and after RSA encryption."',
	  author: 'Keith Bostic'
	}

	quotes[22] = {
	  quote: '"Programming is like kicking yourself in the face, sooner or later your nose will bleed."',
	  author: 'Kyle Woodbury'
	}

	quotes[23] = {
	  quote: '"PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals."',
	  author: 'Jon Ribbens'
	}

	quotes[24] = {
	  quote: '“You can’t have great software without a great team, and most software teams behave like dysfunctional families.”',
	  author: 'Jim McCarthy'
	}