const args = process.argv.slice(2);

fetch(args[0]).then(async response => {
    if (response.ok)
        console.log(await response.text());
    else
        throw new Error(`Response not ok [${response.status}]: ${await response.text()}`);
});