const textBoxCost = document.getElementById('cost');
const selectedCategory = document.getElementById('category');
const textBoxDescription = document.getElementById('description');
const buttonAddItem = document.getElementById('add');
const calenderDate = document.getElementById('date');

//Checks if the fields were filled and adds a new item accordingly when clicked.
//Also shows an appropriate message if the item was added successfully.
buttonAddItem.addEventListener('click', function() {
    const cost = textBoxCost.value;
    const category = selectedCategory.value;
    const description = textBoxDescription.value;
    const date = calenderDate.value;
    if(cost != '' && category != '' && description != '' && date != '') {
        addItemToDate(date, cost, category, description);
        alert('Item was added successfully for date ' + date);
    }
});

//Adds an item to the local storage, depending on whether the key date already exists or not.
function addItemToDate(date, cost, category, description) {
    let listCostItems;
    const data = {
        'cost': cost,
        'category': category,
        'description': description,
    };
    console.log('item: ' + data + ', listCostItems: ' + listCostItems);
    LocalStorageWrapper.getItem(date).then(function (value) {
        const item = value;
        if (item === null) {
            listCostItems = [data];
        }
        else {
            listCostItems = item;
            listCostItems.push(data);
        }
        LocalStorageWrapper.setItem(date, listCostItems);
    });
}
