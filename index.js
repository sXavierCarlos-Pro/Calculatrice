const btns = document.querySelectorAll(".btn");
console.log(btns);
const result = document.querySelector(".ecran");
const egal = document.querySelector(".egal");
const CE = document.querySelector(".CE");
//Réglages du bouton retour

btns.forEach((element) => {
  console.log(element); //fait apparaitre la totalité des boutons dans la console
  element.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    result.value += event.target.innerText;
  });
});

egal.addEventListener("click", () => {
  result.value = eval(result.value);
}); // console.log(eval("20+30"));

//efface le contenu de l'écran
CE.addEventListener("click", () => {
  result.value = "";
});
//bouton retour en cours
/*retour.addEventListener("click", () => {
  str = result.substr(0, -1);
});*/
