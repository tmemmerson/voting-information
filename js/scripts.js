var yourAge = prompt("Please enter your age: ")

if (yourAge >= 18) {
    alert("Vote here!");
    document.getElementById("content").style.display = "block";
} else {
    alert("You are not legally of age yet. Here are some resources though");
    location.href = ("../html/index.html");
}