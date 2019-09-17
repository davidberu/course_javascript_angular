console.log('Hello world');
console.log('How are you today my friend?');

let FirstName = 'Paul';
let LastName = 'Rodriguez';
const CanBeChangedVar = 'OH';
const IntroMessage = 'Here are you\'r business informations: \n' ;

let Musicien = {
  Username: 'Baltami',
  UserAge: 35.1,
  Password: 'o90890432do09,'
};

// Array for the Band infos
let Bands = [FirstName, LastName];
Bands[2] = 'The Sainte paix';

// Function to display venu infos
function DisplayVenueCard(VenueName,Location,MusicStyle){
 console.log(VenueName + Location + MusicStyle);
};

console.log(IntroMessage);

DisplayVenueCard(
  'Venue Name: ' + 'La sainte paix \n',
  'Location: ' + 'Drummondville\n',
  'Style of music: ' + 'Rock and roll'
);

let SplitIntroMess = IntroMessage.split(' ');
console.log(SplitIntroMess.length);
console.log(SplitIntroMess);

const EqualMess = 'It is equal!';

/*if(SplitIntroMess.lenght > 6){
  alert('it is bigger!');
}else if(SplitIntroMess < 6){
  alert('It is LOWER bitch!');
}else{
  alert(EqualMess);
};*/

//loops
for(let i = 10; i < 30; i++){
  //console.log(i);
}

//factory functions
function createCircle(){
  const circle {
    radius: 1,
    location: {
      x: 1,
      y: 1
    }
    isVisible: true,
    draw: function(){
      console.log('draw');
    }
  }
  return circle;
}

function createCircle2(radius, x, y){
  return{
    radius: radius,
    location: {
      x: x,
      y: y
    }
    isVisible: true,
    draw: function(){
        //console.log('draw');
    }
  }
}

function Video(title){
  this.title = title;
  console.log(this);
}

const V = new Video('Alladin');
