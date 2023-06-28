function calculate() { 
    var x = 2;
    var result = (Math.abs(Math.PI + Math.sin(x) + Math.cbrt(x))) / Math.abs(Math.PI + x - 2 * Math.pow(x, 3))
    document.getElementById("result").value = result;
}

function output() {
    const S1 = "Я люблю Гродно";
    const S2 = "улица Ольги Соломовой";

    const oldword = "Гродно";
    const newword = "политех";

    const lengthS2 = S2.length;
    const char14 = S1.charAt(13);
    const ascii14 = S1.charCodeAt(13);
    const withnew = S1.replace(new RegExp(oldword, "g"), newword);

    document.getElementById("S1").value = S1;
    document.getElementById("S2").value = S2;

    document.getElementById("length").value = lengthS2;
    document.getElementById("char14").value = char14;
    document.getElementById("ascii14").value = ascii14;
    document.getElementById("replace").value = withnew;

}