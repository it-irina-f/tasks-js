const city = [
    {from: 'Питер', to: 'Минск'},
    {from: 'Киев', to: 'Новосибирск'},
    {from: 'Череповец', to: 'Москва'},
    {from: 'Минск', to: 'Киев'},
    {from: 'Москва', to: 'Питер'}
];

function ticketSort (ticket) {

    let arr = ticket.filter((a) => !ticket.map(a => a['to']).includes(a['from']));

    arr = [...new Set([ ...arr, ...ticket])];

    arr.sort((a, b) => {
        if (a['to'] != b['from']) return -1;
        return 0;
    });

    return arr.reverse();
}

console.log(ticketSort(city));
