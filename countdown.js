let today = new Date();
let eventDate = new Date("February 3, 2023");
let endDate = new Date("February 6, 2023");
if (today.getTime() > eventDate.getTime() && today.getTime() < endDate.getTime()) {
    document.write("The event is ongoing.");
} else if (today.getTime() > endDate.getTime()) {
    document.write("The event has already ended.")
} else {
    let daysLeft = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    document.write(`${daysLeft} days to the event.`);
}
