
//data creation
const Quotes = [
    {
        quote:`Love your neighbour as your self`,
        author : `saritha`
    },
    {
        quote:`Success usually comes to those who are too busy to be looking for it.`,
        author : `Henry David Thoreau`
    },
    {
        quote:`If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
        author : `James Cameron`
    },
    {
        quote:`If you are not willing to risk the usual, you will have to settle for the ordinary.`,
        author : `Jim Rohn
        `
    },
    {
        quote:`Stop chasing the money and start chasing the passion.`,
        author : `Tony Hsieh`
    },
    {
        quote:`Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.`,
        author : `Vaibhav Shah`
    },
    {
        quote:`Success is walking from failure to failure with no loss of enthusiasm.`,
        author : `Winston Churchill`
    },
    {
        quote:`Opportunities don't happen. You create them.`,
        author : `Chris Grosser`
    },
    {
        quote:`The best revenge is massive success.`,
        author : `Frank Sinatra`
    },
    {
        quote:`If you're going through hell, keep going.`,
        author : `Winston Churchill`
    },
    {
        quote:`No one can make you feel inferior without your consent.`,
        author : `Eleanor Roosevelt`
    },
    {
        quote:`Don't be afraid to give up the good to go for the great.`,
        author : `John D. Rockefeller`
    },
]




//access the element
const Display_element = document.getElementById('display');
const author_name = document.getElementById('authorname');
const Butt = document.getElementById('generate');

//function to generate different types of quotes
//normal function
//function RandomQuotes(){}

//Arrow function
const RandomQuotes=()=>{
    //the logic to generate the quotes
    let index = Math.floor(Math.random()*(Quotes.length))
    //to display the output
    Display_element.innerHTML = Quotes[index].quote
    author_name.innerHTML = '---'+ Quotes[index].author

}

//button functionality
Butt.addEventListener('click',RandomQuotes)
