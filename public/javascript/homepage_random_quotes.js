/**
 * Random quotes / translation from :
 * https://www.freelang.com/expressions/noel.php
*/

// Array with "Merry christmas" in various language 
const quotes = [
    ["Allemand","Frohe weihnachten"],
    ["Alsacien","Scheeni wiehnachta"],
    ["Anglais","Merry christmas"],
    ["Arabe","يلاد مجيد "],
    ["Berbère","Asgwass amaynou"],
    ["Chinois (mandarin)","圣诞快乐"],
    ["Ch'ti","Joïeux noé"],
    ["Danois","Glædelig jul"],
    ["Espagnol","Feliz navidad"],
    ["Espéranto","Gojan kristnaskon"],
    ["Estonien","Häid jõule"],
    ["Filipino","Maligayang pasko"],
    ["Finnois","Hyvää joulua"],
    ["Français","Joyeux noël"],
    ["Grec","Καλά Χριστούγεννα"],
    ["Géorgien","Gilocav shoba axal wels"],
    ["Hawaïen","Mele kalikimaka"],
    ["Indonésien","Selamat natal"],
    ["Islandais","Gleðileg jól"],
    ["Italien","Buon natale"],
    ["Lari","Nowêle yambote"],
    ["Latin","Felicem diem nativitatis"],
    ["Luxembourgeois","Schéi chrëschtdeeg"],
    ["Norvégien","God jul"],
    ["Polonais","Wesołych świąt bożego narodzenia"],
    ["Portugais","Feliz natal"],
    ["Roumain","Un crăciun fericit"],
    ["Rukiga","Noheiri nungi"],
    ["Russe","C Рождеством"],
    ["Serbe","Христос се роди"],
    ["Slovaque","Vesele vianoce"],
    ["Slovène","Vesel božič"],
    ["Sudédois","God jul"],
    ["Swahili","Heri la krismasi"],
    ["Tchèque","Veselé vánoce"],
    ["Thaï","สุขสันต์วันคริสต์มาส"],
    ["Turc","Noeliniz kutlu olsun"],
    ["Ukrainien","З Різдвом Христовим"],
    ["Vitenamien","Mừng chúa giáng sinh"],
    ["Yiddish","אַ גוטע ניטל "],
    ["Yoruba","e kun odun keresimesi"],
    ["Zoulou","UKhisimusi omuhle"],
];

// Load element from HTML document
const quoteTranslation = document.getElementById('quoteTranslation');
const quoteLanguage = document.getElementById('quoteLanguage');

// Define constant
const speed = 2000;
const translation = 1;
const language = 0;

// Generate a random number
function randomQuotesGenerator(){
	let randomNumber = Math.floor(Math.random() * quotes.length) ; 
	quoteTranslation.innerHTML=quotes[randomNumber][translation];
	quoteLanguage.innerHTML=quotes[randomNumber][language];	
}

// Actualiser les citations
setInterval(randomQuotesGenerator, speed)