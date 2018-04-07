var span = document.querySelector('#js-copyright-year');
var creationYear = '2017';
var currentYear = new Date().getFullYear().toString();

span.innerHTML = creationYear + ' - ' + currentYear.toString();
