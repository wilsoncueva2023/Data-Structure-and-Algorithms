function timeRequiredToBuy(tickets, k) {
    let time = 0;
    let queue = tickets.map((tickets, index) => ({ tickets, index }));

    while (queue.some(person => person.tickets > 0)) {
        let person = queue.shift();
        if (person.tickets > 0) {
            person.tickets--;
            time++;
            if (person.tickets > 0) {
                queue.push(person);
            }
            // Check if the target person is done buying tickets
            if (person.index === k && person.tickets === 0) {
                return time;
            }
        }
    }
    
    return time;
}

// Test cases
console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([1, 1, 1], 0)); // 1
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8
console.log(timeRequiredToBuy([2, 3, 2], 0)); // 4
