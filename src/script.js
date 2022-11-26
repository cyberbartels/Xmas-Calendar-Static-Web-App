function clickHandler(id) {
  openDoor(id);
  console.log(id);
  console.log("clicked");
}

function openDoor(id) {
  let checkbox = document.getElementById("check-" + id);
  if (!checkbox.checked) {
    let elementBack = document.getElementById("back-" + id);

    elementBack.style.backgroundImage = "url('./api/calendar/family/item/" + id + "')";
  }
  rotate(id);
  // rotate("front-"+id);
  //  rotate("back-"+id);
}

function rotate(id) {
  console.log("rotate " + id);
  const transform = 'rotateY(180deg)';
  let element = document.getElementById(id);
  console.log("element tyle.transform current " + element.style.transform);
  if (element.style.transform == transform)
    element.style.transform = "none";
  else
    element.style.transform = transform;
  console.log("element tyle.transform after " + element.style.transform);
}

function logTransformState(id) {
  console.log("Transform state of " + id);
  let element = document.getElementById(id);
  console.log("element tyle.transform current " + element.style.transform);
  console.log("Transform state of front-" + id);
  let elementFront = document.getElementById("front-" + id);
  console.log("element tyle.transform current " + elementFront.style.transform);
  console.log("Transform state of back-" + id);
  let elementBack = document.getElementById("back-" + id);
  console.log("element tyle.transform current " + elementBack.style.transform);
}

async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}


