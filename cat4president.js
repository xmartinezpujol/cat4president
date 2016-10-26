/* Cat4President.js */
var MAX_CATS = 6;
var selected = [];

var model = {
  "cats": [{
    "name": "Tirori",
    "image": "img/cats-1.jpg",
    "desc": "Test my might! I am a true hero. Choose me and I will make this world great again!",
    "clicks": 0
  },
  {
    "name": "Musky",
    "image": "img/cats-2.jpg",
    "desc": "Sunny days are the best, right?",
    "clicks": 0
  },
  {
    "name": "Trusky",
    "image": "img/cats-3.jpg",
    "desc": "You deserve better! Choose me and we will conquer the world! #Catsupremacy.",
    "clicks": 0
  },
  {
    "name": "Plusky",
    "image": "img/cats-4.jpg",
    "desc": "Not sure if trolling or meme.",
    "clicks": 0
  },
  {
    "name": "Triki",
    "image": "img/cats-5.jpg",
    "desc": "Im the cutest cat ever. You will always win with me.",
    "clicks": 0
  },
  {
    "name": "Puki",
    "image": "img/cats-6.jpg",
    "desc": "Got some food? o_O",
    "clicks": 0
  }]
}

var cats = model.cats;

for (i = 0; i < MAX_CATS; i++) {

  var cattext = document.createElement("li");
  var catlink = document.createElement("a");
  var cattextnode = document.createTextNode(cats[i].name);
  catlink.appendChild(cattextnode);
  document.getElementById("catlist").appendChild(cattext);

  var cat = cats[i];

  //Les añadimos listeners de click al selector
  catlink.addEventListener('click', (function(catCopy) {
    return function() {
      document.getElementById('catimage').src = catCopy.image;
      document.getElementById('catname').innerHTML = catCopy.name;
      document.getElementById('catdesc').innerHTML = catCopy.desc;
      if (catCopy.clicks == 1) {
        document.getElementById('catclicks').innerHTML = catCopy.clicks + " Vote";
      } else {
        document.getElementById('catclicks').innerHTML = catCopy.clicks + " Votes";
      }
      selected = catCopy;
    };
  })(cat));

  cattext.appendChild(catlink);
}

//Les añadimos listeners de click a la imagen
var catimg = document.getElementById('catimage');
catimg.addEventListener('click', function() {
  if (!isNaN(selected.clicks)) {
    selected.clicks = selected.clicks + 1;
    if (selected.clicks == 1) {
      document.getElementById('catclicks').innerHTML = selected.clicks + " Vote";
    } else {
      document.getElementById('catclicks').innerHTML = selected.clicks + " Votes";
    }
  }
}, false);
