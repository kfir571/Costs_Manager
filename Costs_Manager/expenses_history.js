const calenderDate2 = document.getElementById('report-date');
const divReport = document.getElementById('report');
const buttonCreateReport = document.getElementById('create-report');

document.addEventListener('click', function(event) {
    if (event.clientX < window.innerWidth / 2) {
        // Clicked on the left half of the screen
        divReport.style.overflowY = 'hidden';
        divReport.innerHTML = '';
    }
});


//Creates a report for the selected date when clicked
buttonCreateReport.addEventListener('click', function() {
    createReportByDate(calenderDate2.value);
});

//Creates a detailed report by date
function createReportByDate(date) {
    LocalStorageWrapper.getItem(date).then(function(value) {
        const listCosts = value;
        if (listCosts === null) {
            divReport.style.overflowY = 'hidden';
            divReport.innerHTML = "<p>There are no cost items on this date!</p>";
        }
        else {
            divReport.innerHTML = createTable(listCosts);
            divReport.style.overflowY = 'scroll';
        }
    });
}

//Creates and returns a detailed table of an array of items
function createTable(CostItemsArr){
    let len = CostItemsArr.length;
    let sum = 0;
    let table = `<table style='margin-left:auto; margin-right:auto;' cellspacing='0' cellpadding='0'>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Cost</th>
                            </tr>`;
    for(let i = 0; i < len; i++) {
        sum += Number(CostItemsArr[i]['cost']);
        table += `<tr>
                            <td>${CostItemsArr[i]['category']}</td>
                            <td>${CostItemsArr[i]['description']}</td>
                            <td>${CostItemsArr[i]['cost']}</td>
                      </tr>`;
    }
    table += `<tr><td>Sum:</td><td></td><td>${sum}</td></tr></table>`;
    return table;
}