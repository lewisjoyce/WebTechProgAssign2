

function bookTickets() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var tickets = document.getElementById('tickets').value;
    var shows = document.getElementById('shows').value;
    var delivery = document.getElementById('delivery').value;

    var output = document.getElementById('output');

    if(!name || !address || !tickets || !shows || !delivery){
        output.innerText = "Please fill in all fields."
        return;
    } else {
        document.getElementById('form').reset();
    }

    var discount;
    var ticketCost = setTicketCost(shows);
    var {deliveryCost, deliveryType} = setDeliveryCost(delivery);

    if(tickets >= 10){
        discount = 0.15;
    } else if(tickets >= 6){
        discount = 0.10
    } else {
        discount = 0
    }

    var discountAmount;
    var discountMessage;

    if(discount !== 0){
        discountAmount = ticketCost - (ticketCost * discount);
        discountMessage = returnDiscountValue(discount) + " discount: £" + discountAmount.toFixed(2) + "\n";
    } else {
        discountAmount = 0;
        discountMessage = "";
    }

    output.innerText = tickets + " tickets for " + shows.slice(0, -6) + " at £" + ticketCost.toFixed(2) + "\n" +
        "Total Cost: £" + (tickets * ticketCost).toFixed(2) + "\n" + discountMessage +
        deliveryType + ": £" + deliveryCost.toFixed(2) + "\n" + "Final cost: £" + returnFinalCost(tickets, ticketCost, discountAmount, deliveryCost);

}

function setTicketCost(shows) {
    var ticketCost;

    if(shows === "Phantom of the Opera - £79"){
        ticketCost = 79
    } else if(shows === "Hamilton - £85"){
        ticketCost = 85
    } else if(shows === "Lion King - £67"){
        ticketCost = 67
    } else if(shows === "Miss Saigon - £83"){
        ticketCost = 83
    }

    return ticketCost;
}

function setDeliveryCost(delivery) {
    var delCost;
    var delType;

    if(delivery === "E-ticket - Free"){
        delCost = 0;
        delType = "E-ticket";
    } else if(delivery === "Collect From Box Office - £1.50"){
        delCost = 1.5;
        delType = "Collect From Box Office";
    } else if(delivery === "Posted - £3.99"){
        delCost = 3.99;
        delType = "Posted";
    }

    return {deliveryCost: delCost, deliveryType: delType};
}

function returnDiscountValue(discount) {
    if(discount === 0.15){
        return "15%";
    } else if(discount === 0.1){
        return "10%";
    }
}

function returnFinalCost(tickets, ticketCost, discountAmount, deliveryCost) {
    return (((tickets * ticketCost) - discountAmount) + deliveryCost).toFixed(2);
}
