let xhr = new XMLHttpRequest();
xhr.open("GET", "https://discordapp.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);