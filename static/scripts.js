function addItem() {
    const itemName = document.getElementById("item-name").value;
    if (itemName) {
        const groceryList = document.getElementById("grocery-list");
        const listItem = document.createElement("li");
        listItem.textContent = itemName;
        groceryList.appendChild(listItem);
        // Optionally store in localStorage
        localStorage.setItem(itemName, itemName);
        document.getElementById("item-name").value = "";
    }
}