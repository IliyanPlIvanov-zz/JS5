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

function flashIfEmpty() {
	
	let title = document.getElementById('title');
	let date = document.getElementById('datepicker');
	
	if (title.value !== '' && date.value !== '') {
		console.log(`${title.value} ${date.value}`);
	} else {
		title.classList.add('flash');
		date.classList.add('flash');
	}
	
	setTimeout(function(){
		title.classList.remove('flash');
		date.classList.remove('flash');
	}, 1500);
}

function addNewItem(newTitle, newDate, delButton) {
	
}

function editItem(arr) {}

function deleteItem(arr) {}

function sortByRelDate(arr) {}

function sortByDateAdded(arr) {}

function sortAlphabetically(arr) {}
