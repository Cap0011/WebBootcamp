let order = prompt("What would you like to do?");
let list = [];
while (true) {
    if (order === "new") {
        let what = prompt("Enter new todo!");
        console.log(`${what} added to list`);
        alert(`${what} added to list!`);
        list.push(what);
    }
    else if (order === "list") {
        let print = "===============================\n";
        for (let i = 0; i < list.length; i++) {
            print += (`${i}: ${list[i]}` + "\n");
        }
        print += "===============================";
        alert(print);
        console.log(print);
    }
    else if (order === "delete") {
        if (list.length == 0) {
            alert("It's already empty list!");
        } else {
            let del = prompt("Enter index of todo to delete");
            if (del < list.length && del >= 0) {
                alert(`${list[del]} will be deleted!`);
                console.log(list.splice(del, 1));
            } else {
                alert("unknown index!");
            }
        }
    }
    else if (order === "quit") {
        alert("quit todo list!");
        break;
    }
    else {
        order = prompt("Enter a valid term!".toUpperCase());
    }
    order = prompt("What would you like to do?");
}