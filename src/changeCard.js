let isIgnite = false;
function changeCard(event) {
  const card = event.currentTarget;
  const bgImg = isIgnite 
  ? 'ignite' 
  : 'explorer'
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(../assets/bg-card-${bgImg}.svg)`

  isIgnite 
  ? document.querySelector('body').style.backgroundImage = "linear-gradient(150deg,#4C55D2, #000000)"
  : document.querySelector('body').style.backgroundImage = 'linear-gradient(150deg,#185B34,#000000)' 
}