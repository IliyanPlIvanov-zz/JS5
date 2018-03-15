'use strict';

// Here goes nothing!

let relDate = new Date();
const year = String(relDate.getFullYear());
const month = String(relDate.getMonth()+1);
const day = String(relDate.getDate());

//console.log(oneItem);

/*
const dod = `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
console.log(dod);

document.getElementById("gameslist").innerHTML = `${dod}`;
*/

function showHideList() {
	let list = document.getElementsByClassName('list');
	let buttonTextChange = document.getElementById('toggle');
	for (let i = 0; i < list.length; i++) {
		if ( list[i].style.display === "none" ) {
			list[i].style.display = "block";
			buttonTextChange.value = "Hide";
		} else { 
			list[i].style.display = "none";
			buttonTextChange.value = "Show";
		}
	}
}

function addItem(title, date) {
	title = document.getElementById('title').value;
	date = document.getElementById('datepicker').value;
	if (title !== '' && date !== '')
		console.log(`${title} ${date}`)
	//else {
}

function editItem(arr) {}

function deleteItem(arr) {}

function sortByRelDate(arr) {}

function sortByDateAdded(arr) {}

function sortAlphabetically(arr) {}

