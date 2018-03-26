'use strict';

// Here goes nothing!

function showHideList() {
	let list = document.getElementsByClassName('list');
	let buttonTextChange = document.getElementById('toggle');
	for (let i = 0; i < list.length; i++) {
		if (list[i].style.display === "none") {
			list[i].style.display = "block";
			buttonTextChange.value = "Hide";
		} else {
			list[i].style.display = "none";
			buttonTextChange.value = "Show";
		}
	}
}

document.getElementById('toggle').addEventListener('click', showHideList, false);

function flashIfEmpty() {
	let title = document.getElementById('title');
	let date = document.getElementById('datepicker');

	if (title.value !== '' && date.value !== '') {
		console.log(`${title.value} ${date.value}`);
	} else {
		title.classList.add('flash');
		date.classList.add('flash');
	}

	setTimeout(function () {
		title.classList.remove('flash');
		date.classList.remove('flash');
	}, 1500);
}

//console.log(document.querySelector('i'));


function addNewItem(newTitle, newDate, delButton) {
	let list = document.getElementsByClassName('list');
	let addBtn = document.querySelector('i');
	
	newTitleTxt = document.getElementById('title');
	newTitle = document.createElement('input').className('row').size(60).requred = true;
	newDateValue = document.getElementById('datepicker');
	newDate = document.createElement('input').className('row').size(15).requred = true;
	delButton = document.createElement('i').className('far fa-trash-alt');
	newTitle.appendChild(newTitleTxt);
	newDate.appendChild(newDateValue);
}

document.querySelector('i').addEventListener('click', flashIfEmpty, addNewItem, false);

function editItem(arr) {}

function deleteItem(arr) {}

function sortByRelDate(arr) {}

function sortByDateAdded(arr) {}

function sortAlphabetically(arr) {}
