
function mode() {
    let body = document.body;
    let cetekan = document.getElementById("toggle");
    let lampu = document.getElementById("lampu");

    console.log('Perubahan Mode');
    body.classList.toggle("dark");

    if (cetekan.checked) {
        lampu.src = "source/on.gif";
    } else {
        lampu.src = "source/off.gif";
    }

}