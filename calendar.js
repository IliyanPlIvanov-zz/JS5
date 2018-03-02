'use strict';

// Here goes nothing!

let oneItem = { 
	title: '',
	date: ''
}

let relDate = new Date();
const year = String(relDate.getFullYear());
const month = String(relDate.getMonth()+1);
const day = String(relDate.getDate());

//console.log(oneItem);

const dod = `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
console.log(dod);

document.getElementById("gameslist").innerHTML = `${dod}`;

function addItem(arr) {}

function editItem(arr) {}

function deleteItem(arr) {}

function sortByRelDate(arr) {}

function sortByDateAdded(arr) {}

function sortAlphabetically(arr) {}

