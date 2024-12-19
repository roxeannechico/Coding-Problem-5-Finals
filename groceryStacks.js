const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stack = [];
let itemIndex = 0;

function peek() {
    return stack.length > 0 ? stack[stack.length - 1] : "Stack is empty";
}

// Push function to add item to stack
function push(item) {
    stack.push(item);
    console.log(`Added "${item}" to the stack.`);
    console.log("Current Stack: ", stack.join(", "));
}

// Pop function to remove last added item
function pop() {
    if (stack.length === 0) {
        console.log("Stack is empty. Cannot remove an item.");
    } else {
        let removedItem = stack.pop();
        console.log(`Removed "${removedItem}" from the stack.`);
    }
    console.log("Current Stack: ", stack.join(", "));
}

// Function to ask for grocery items
function askForGroceryItem() {
    if (itemIndex < 5) {
        rl.question(`Enter grocery item ${itemIndex + 1}: `, (input) => {
            push(input);
            itemIndex++;
            askForGroceryItem();
        });
    } else {
        performStackOperations();
    }
}

// Function to demonstrate stack operations
function performStackOperations() {
    console.log("Peek at top item: ", peek());
    pop();
    console.log("Peek at top item after popping: ", peek());
    rl.close();
}

askForGroceryItem();