let canvas;
let URL1 = 'https://catfact.ninja/fact';
let URL2 = 'https://randomuser.me/api/';
let URL3 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let URL4 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
let URL5 = 'https://dog.ceo/api/breeds/image/random';
let catFact = null;
let randomUser = null;
let coindesk = null;
let dataUsa = null;
let dogImage = null;
let dogImageW;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    button1 = createButton('CAT FACT');
    button1.position(50, 500);
    button1.mousePressed(() => {
        fetch(URL1)
            .then(response => response.json())
            .then(data => {
                catFact = data.fact
                console.log(catFact)
            });
    });

    button2 = createButton('RANDOM USER');
    button2.position(250, 500);
    button2.mousePressed(() => {
        fetch(URL2)
            .then(response => response.json())
            .then(data => {
                randomUser = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
                console.log(randomUser)
            });
    });

    button3 = createButton('COIN DESK');
    button3.position(450, 500);
    button3.mousePressed(() => {
        fetch(URL3)
            .then(response => response.json())
            .then(data => {
                coindesk = data.time.updated
                console.log(coindesk)
            });
    });

    button4 = createButton('DATA USA');
    button4.position(650, 500);
    button4.mousePressed(() => {
        fetch(URL4)
            .then(response => response.json())
            .then(data => {
                dataUsa = data.data[0].Nation + " - " + data.data[0].Year + " - " + data.data[0].Population
                console.log(dataUsa)
            });
    });



    button5 = createButton('DOG IMAGE');
    button5.position(850, 500);
    button5.mousePressed(() => {
        fetch(URL5)
            .then(response => response.json())
            .then(data => {
                dogImage = data
                dogImageW = loadImage(dogImage.message);
            });
    });
}

function draw() {
    //background(0, 50);
    background(80);
    newCursor();

    if (catFact != null) {
        textSize(15);
        textWrap(WORD);
        text(catFact, 50, 50, 180)
    }

    if (randomUser != null) {
        textSize(15);
        textWrap(WORD);
        text(randomUser, 250, 50, 180)
    }

    if (coindesk != null) {
        textSize(15);
        textWrap(WORD);
        text(coindesk, 450, 50, 180)
    }

    if (dataUsa != null) {
        textSize(15);
        textWrap(WORD);
        text(dataUsa, 650, 50, 180)
    }

    if (dogImage != null) {
        image(dogImageW, 850, 50, 180, 180)
    }



}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10); 
}