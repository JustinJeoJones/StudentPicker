var list = [
    "Derek DenHartigh",
"Will Morrissey",
"Alex Darmos",
"Megan Schafer",
"Marion Luxem",
"Hannah Barker",
"Eric Medema",
"Michael Brameijer",
"Bob Matyas",
"Jessica Challa",
"David Gillespie",
"Jessica Otte",
"Humberto Flores"
];
function getName(){
    var num = Math.floor(Math.random() * 14); 
    var result = list[num];
    document.getElementById("result").innerHTML = result;
}
