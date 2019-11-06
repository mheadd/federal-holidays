const request = require('request');
const HtmlTableToJson = require('html-table-to-json');
require('console.table');

// Get lists for the latest year. E.g., 8th item in array is 2019.
const year = process.argv[2] || 8;
const url = `https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/`;

request(url, function (error, response, body) {
    if (error) {
        console.log(`Sorry. Could not retrieve holidays: ${error}`);
    } else {
        try {
            // Fetch list of federal holidays.
            const jsonTables = new HtmlTableToJson(body);
            let holidays = jsonTables.results[year];   

            // Display holiday list.
            console.log("");
            console.table(holidays);
            console.log(`More information here: ${url}`);
            console.log("");
        }
        catch (e) {
            console.log(`Sorry. Could not display holidays: ${error}`);
        }
    }
});
