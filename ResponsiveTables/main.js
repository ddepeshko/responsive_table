window.onload = function() {
    var tableHeadItems = document.querySelectorAll('thead th');
    var tableBodyItems = document.querySelectorAll('tbody td');
    var tableBodyRows = document.querySelectorAll('tbody tr');
        for (var i = 0; i < tableHeadItems.length; i++) {
            var prependEl = tableHeadItems[i].innerHTML;
            tableBodyItems[i].setAttribute('data-label',prependEl);
        }
};