var quotes = [
    {'author': 'Oscar Wilde', 
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Albert Einstein', 
        'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },
    {'author': 'Mae West', 
        'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Frank Zappa', 
        'quote': 'So many books, so little time.'
    },
    {'author': 'Nelson Mandela', 
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

var currentQuote = null;
function generateQuote(){
    var random = 0;
    while (random == currentQuote) {
        random = Math.floor(Math.random()*quotes.length);
    }
    currentQuote = random;
    console.log(random);
    document.querySelector('#quoteOutput').textContent = `“ ${quotes[random].quote} ”`;
    document.querySelector('#authorOutput').textContent = `- ${quotes[random].author}`;
}