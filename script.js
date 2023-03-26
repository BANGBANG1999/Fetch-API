let p = fetch("https://kontests.net/api/v1/codeforces")
// let cards = document.querySelectorAll(.cards)
p.then((value) => {
  return value.json();
}).then((value) => {
  console.log(value)
  let write = '';
  for (item in value) {
    write += `
      <div class="card my-4" style="width: 22rem;">
        <img src="971.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${value[item].name}</h5>
          <p class="card-text"></p>
          <a href="${value[item].url}" class="btn btn-info">Visit here</a>
        </div>
      </div>
    `
    cards.innerHTML = write;
  }

})