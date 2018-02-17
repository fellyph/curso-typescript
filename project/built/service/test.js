// module with classes and logic for working with local storage in browsers via JavaScript
// see also: http://professorweb.ru/my/html/html5/level5/5_1.php
var StorageHelper;
// module with classes and logic for working with local storage in browsers via JavaScript
// see also: http://professorweb.ru/my/html/html5/level5/5_1.php
(function (StorageHelper) {
    class StorageItem {
        constructor(data) {
            this.key = data.key;
            this.value = data.value;
        }
    }
    StorageHelper.StorageItem = StorageItem;
    // class for working with local storage in browser (common that can use other classes for store some data)
    class LocalStorageWorker {
        constructor() {
            this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
        }
        // add value to storage
        add(key, item) {
            if (this.localStorageSupported) {
                localStorage.setItem(key, item);
            }
        }
        // get all values from storage (all items)
        getAllItems() {
            var list = new Array();
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                list.push(new StorageItem({
                    key: key,
                    value: value
                }));
            }
            return list;
        }
        // get only all values from localStorage
        getAllValues() {
            var list = new Array();
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                list.push(value);
            }
            return list;
        }
        // get one item by key from storage
        get(key) {
            if (this.localStorageSupported) {
                var item = localStorage.getItem(key);
                return item;
            }
            else {
                return null;
            }
        }
        // remove value from storage
        remove(key) {
            if (this.localStorageSupported) {
                localStorage.removeItem(key);
            }
        }
        // clear storage (remove all items from it)
        clear() {
            if (this.localStorageSupported) {
                localStorage.clear();
            }
        }
    }
    StorageHelper.LocalStorageWorker = LocalStorageWorker;
    // custom class for store emails in local storage
    class EmailStorage {
        constructor(storageKey) {
            this.storageWorker = new LocalStorageWorker();
            this.storageKey = storageKey;
            this.addresses = new Array();
            this.activate();
        }
        // activate custom storage for emails
        activate() {
            //this.clear();
            this.loadAll();
        }
        // load all emails from storage to list for working with it
        loadAll() {
            var storageData = this.storageWorker.get(this.storageKey);
            if (storageData != null && storageData.length > 0) {
                var emails = JSON.parse(storageData);
                console.log(emails);
                if (emails != null) {
                    this.addresses = emails;
                }
                console.log(this.addresses);
            }
        }
        // add new email (without duplicate)
        addEmail(email) {
            if (email.length > 0) {
                // 1. Split email addresses if needed (if we get list of emails)
                var mas = email.split(/,|;/g);
                //console.log(mas);
                // 2. Add each email in the splited list
                for (var i = 0; i < mas.length; i++) {
                    // check if not exist and not add new (duplicate)
                    var index = this.addresses.indexOf(mas[i].trim());
                    if (index < 0) {
                        this.addresses.push(mas[i].trim());
                    }
                }
                console.log(this.addresses);
                // 3. save to storage
                this.save();
            }
        }
        // clear all data about emails
        clear() {
            // remove data by key from storage
            this.storageWorker.add(this.storageKey, "");
            // or remove with key
            //this.storageWorker.remove(this.storageKey);
        }
        // save to storage (save as JSON string)
        save() {
            var jsonEmails = JSON.stringify(this.addresses);
            this.storageWorker.add(this.storageKey, jsonEmails);
        }
    }
    StorageHelper.EmailStorage = EmailStorage;
})(StorageHelper || (StorageHelper = {}));
