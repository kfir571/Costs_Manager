// Object that provides a convenient wrapper for interacting with the local storage
const LocalStorageWrapper = {
    //Sets the value in local storage.
    //If there is an error while setting the item,
    //an alert will be shown with the details of the error.
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, JSON.stringify(value));
        }).catch(e => alert('An error occurred while trying to add new item: ' + key + ' -> ' + value + '. Exception: ' + e));
    },
    //retrieves the value associated with the key from local storage.
    //If there is an error while getting the item, the promise will be rejected,
    //and an alert will be shown with the details of the error.
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return JSON.parse(localStorage.getItem(key));
        }).catch(e => alert('An error occurred while trying to get item: ' + key + '. Exception: ' + e));
    }
};

