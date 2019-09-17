console.log('Hello world');
console.log('How are you today my friend?');

let FirstName = 'Paul';
let LastName = 'Rodriguez';
const CanBeChangedVar = 'OH';

//console.log(FirstName + LastName + ' ' + CanBeChangedVar);

let Musicien = {
  Username: 'Baltami',
  UserAge: 35.1,
  Password: 'o90890432do09,'
};
//console.log(Musicien.UserAge);
//alert(Musicien.Password);

let Bands = [FirstName, LastName];
Bands[2] = 'The Sainte paix';

//console.log(Bands[2]);

function DisplayVenueCard(VenueName,Location,MusicStyle){
 console.log(VenueName + '/' + Location + MusicStyle);
};

DisplayVenueCard('La sainte paix', 'Drummondville', 'Rock and roll');
