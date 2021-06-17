function racoonGen() {
    el = document.getElementById("raccoon");
    console.log(el);
    const rndInt = Math.floor(Math.random() * 26) + 1;
    el.src = "./static/assets/raccoons/" + rndInt + ".jpg";
}

function sclose(element) {
    let id;
    let year = ['2016', '2017', '2018', '2019', '2020'];
    for (let j = 0; j < 5; j++) {
        for (let i = 2; i <= 13; i++) {
            if (element.id !== year[j]) {
                id = document.getElementById(`collapse${year[j]}${i}`);
            }
            if (id) {
                id.classList.remove('show');
            }
        }
    }
    element = document.getElementById(element.id);
    element.scrollIntoView();


}