

comedy = [
    {
        title:'Borat',
        director:'Jason Woliner',
        year:2020
    },
    {
        title:'Mean Girls',
        director:'Mark Waters',
        year:2004
    },
    {
        title:'Intouchables',
        director:'Eric Toledano',
        year:2012
    }
]

console.log(comedy);

action = [
    {
        title:'John Wick 3 - Parabellum',
        director:'Chad Stahelski',
        year:2019
    },
    {
        title:'Reservoir Dogs',
        director:'Quentin Tarantino',
        year:1992
    },
    {
        title:'The Old Guard',
        director:'Gina Prince-Bythewood',
        year:2020
    }
]

console.log(action);

fantasy = [
    {
        title:'Monsters. Inc',
        director:'Pete Docter',
        year:2001
    },
    {
        title:'The Lord of Rings',
        director:'Peter Jackson',
        year:2002
    },
    {
        title:'Alice in Wonderland',
        director:'Tim Burton',
        year:2010
    }
]

console.log(fantasy);

//*DESAFIO EXTRA* 

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 

if(action[1].year === 1992){
    console.log(`My favorite movie is ${action[1].title}`);
} else{
    console.log("Not even 5 stars");
}