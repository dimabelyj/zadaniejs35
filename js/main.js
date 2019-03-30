let n = document.getElementById("submit");
document.querySelector('button').onclick = function a() {
    /*for (let n = 100; n <= 200; n++) {
        alert("BRAVO");
    }
    if (n < 100) {
        alert("Liczba nie znajduje się pomiędzy 100 a 200");
    } else if (n > 200) {
        alert("Liczba nie znajduje się pomiędzy 100 a 200");
        return a;
    }*/


    if (n >= 100 || n <= 200) {
        alert('BRAVO');
    } else if (n < 100) {
        alert("Liczba nie znajduje się pomiędzy 100 a 200");
    } else if (n > 200) {
        alert("Liczba nie znajduje się pomiędzy 100 a 200");
        return a;
    }
}