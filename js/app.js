function writeAlgoDemo1() {
    let side_a = Math.random() * 10 + 5;
    let side_b = Math.random() * 10 + 5;
    document.write("<p>Side a = " + side_a + "</p><p>Side_b = " + side_b + "</p>");
    document.write("<p>Об'єм куба = " + side_a * side_a * side_a + "</p>");
    document.write("<p>Площа квадрата = " + side_a * side_a + "</p>");
    document.write("<p>Площа прямокутника = " + side_a * side_b + "</p>");
}

function writeAlgoDemo2() {
    let side_a = Math.random() * 10 + 5;
    let side_b = Math.random() * 10 + 5;
    document.write("<p>Side a = " + side_a + "</p><p>Side_b = " + side_b + "</p>");
    document.write("<p>Площа прямокутного трикутника = " + side_a * side_b / 2 + "</p>");
}

function writeAlgoDemo3() {
    let radius = Math.random() * 10 + 5;
    let square = Math.PI * radius * radius;
    document.write("<p>Radius = " + radius + "</p>");
    document.write("<p>Площа круга = " + square + "</p>");
}