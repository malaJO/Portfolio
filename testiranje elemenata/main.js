/*1. stavi script tagove u html i tu sve pisi
2. Nadji kako da selectujes element preko JS ako je data njegova klasa ili id
3. Kada selectujes element, njega ces prakticno smestiti u neku prmenjivu, n apirmer   var elem = document.getElementById("something")
Videces da li je element vidiljiv. Kako? Preko JS ces naci koliko si scrollovala odzgvo, odnosno koliko si odmakla od pocetka. Too je samo neki broj u pixwlima. To ces sacuvati. Onda ces videti da li je gornja ivica tog elementa vidiljiva, Kako? Tako sto ces videti koliko je ona udaljena od pocetka i uporediti sa tim koliko si scorll ovala. Gornju ivicu elemnta dovijas tako sto si za nadjeni lement pozvala elem.getBoundingClientRect()
4. Kada je element vidiljiv mozes samo da mu oddas klasu koja radi animaciju, dakle da mu dodas CSS klasu. Nadji kako za slecetovani element dodajes CSS klasu preko JS
*/

var anim = document.getElementsByClassName('animdemo');
console.log(anim);

var btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', dole);

function dole () {
   window.scrollTo(300, 500);
}
