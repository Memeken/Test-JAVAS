var btn = document.querySelector('input');
var txt = document.querySelector('p');
var mesAmis =["Benjamin Gouget",
                "Florian Farris",
                "Said Zenafi",
                "Yannis Aouachria",
                "Pierre Denaes",
                "Morgan Trainoir",
                "Coralie Damery",
                "Quentin Robert",
                "Alexandre Chauvet",
                "Sebastien Cartoux",
                "Davis Haas",
                "Sofiane Sotehi",
                "Yoan Baldacchino",
                "Nicolas Degabriel",
                "Ayman Bratzu",
                "Quentin Queffuris",
                "Killian Pasquier",
                "Jérôme Laurent",
                "Jean-Daniel Pontremoli",
                "Marjorie Ngoupende",
                "Christophe Coutures",
                "Michel Christophe"];

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'ALL') {
    btn.value = 'ALL';
    txt.textContent = mesAmis;
  } else {
    btn.value = 'ALL';
    txt.textContent = '';
  }
}