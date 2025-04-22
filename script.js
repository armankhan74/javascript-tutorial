        let currenttime = new Date();
        console.log(date.toJSON()); // New York
        console.log(date.toLocaleString()); // New York
        console.log(date.toLocaleDateString()); // New York
        console.log(date.toLocaleTimeString()); // New York
        console.log(date.toLocaleString('en-US', { timeZone: 'America/New_York' })); // New York
        console.log(date.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })); // Los Angeles
        console.log(date.toLocaleString('en-US', { timeZone: 'America/Chicago' })); // Chicago
        


        let myCreatedate = new Date(2025, 1, 15);
        // console.log(myCreatedate.toLocaleString());
        let currentDate =  Date.now();
        console.log(currentDate );

        console.log(Math.floor(currentDate / 1000));
        
let date = new Date().toLocaleString('default', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});
console.log(date);
