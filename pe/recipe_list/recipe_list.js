// JQuery
// 1/c
const rows = $('.row');

console.log(rows);

// 1/e

const listGroups = $('.list-group');

console.log(listGroups);

const listGroupItems = listGroups.find('.list-group-item');

console.log(listGroupItems);

const firstListGroupItems = listGroups.find('.list-group-item:first-child');

console.log(firstListGroupItems);

console.log($('.list-group .list-group-item:first-of-type'));

// 3/c

const headers = $('.card-header');
headers.on('click', (e) => {
  const header = $(e.target);
  const listGroup = header.siblings('.list-group');
  listGroup.toggleClass('d-none');
});

// 4/a

// const headers = $('.card-header');
const listItems = headers
  .map((i, header) => $(header).text())
  .map((i, categoryName) => $(`<li>${categoryName}</li>`));
const list = $('<ul></ul>');
$('body').append(list);
listItems.each((i, listItem) => list.append(listItem));
