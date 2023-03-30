const btn = document.querySelector('.container_btn');

const paragrafo = document.querySelector('.container_p');

const heading = document.querySelector('.container_header');

const quotes = [
    {
        quote: '\“Waste no more time arguing about what a good man should be. Be one\”',
        author: 'Marco Aurélio'
    },
    {
        quote: '\“Beware the barrenness of a busy life\”',
        author: 'Sócrates'
    },
    {
        quote: '\“Happiness and freedom begin with one principle. Some things are within your control and some are not.\”',
        author: 'Epíteto'
    },
    {
        quote: '\“Do not say a little in many words but a great deal in few.\”',
        author: 'Pitágoras'
    },
    {
        quote: '\“Difficulties strengthen the mind as labor does the body.\”',
        author: 'Sêneca, o Jovem'
    },
    {
        quote: '\“A room without books is like a body without a soul.\”',
        author: 'Marco Túlio Cicero'
    },
    {
        quote: '\“Happy is the man who has broken the chains which hurt the mind and has given up worrying once and for all.\”',
        author: 'Ovídio'
    },
    {
        quote: '\“Whoever walks with the wise will become wise, but the companion of fools suffers harm.\”',
        author: 'Salomão'
    },
    {
        quote: '\“Our greatest glory is not in never failing, but in rising every time we fail.\”',
        author: 'Confúcio'
    },
    {
        quote: '\“Good character is not formed in a week or a month. It is created little by little, day by day. Protracted and patient effort is needed to develop good character\”',
        author: 'Heráclito'
    },
    {
        quote: '\“If you do not change direction you may end up where you are heading.\”',
        author: 'Lao Tzu'
    },
    {
        quote: '\“Good actions give strength to ourselves and inspire good actions in others\”',
        author: 'Platão'
    },
    {
        quote: '\“Be still my heart; thou hast known worse than this\”',
        author: 'Homério'
    },
    {
        quote: '\“They can conquer who believe they can\”',
        author: 'Virgílio'
    },
    {
        quote: '\“The desire for safety stands against every great and noble enterprise\”',
        author: 'Tácito'
    }
]

btn.addEventListener('click', function (e) {
    let random = Math.floor(Math.random() * quotes.length)

    paragrafo.innerText = quotes[random].quote;

    heading.innerText = quotes[random].author;
})