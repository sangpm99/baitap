const usernames = [
    {username: "JACK", result: true},
    {username: "J", result: false},
    {username: "Jo", result: true},
    {username: "Oceans11", result: true},
    {username: "RegexGuru", result: true},
    {username: "007", result: false},
    {username: "9", result: false},
    {username: "A1", result: false},
    {username: "BadUs3rnam3", result: false},
    {username: "Z97", result: true},
    {username: "c57bT3", result: false},
    {username: "AB1", result: true}
];
const checkUsername = (regex) => {
    let results = [/*{"Jack": true, result: true/false}*/];
    let counts = 0
    for(let i = 0, count = usernames.length; i < count; i++){
        const {username, result} = usernames[i];
        results.push(
            {
                [username]: result, 
                result: regex.test(username)
            }
        );
        if(result === regex.test(username)) counts++;
    }
    console.log(results);
    console.log(`result ${counts}/12`)
};

//Username chỉ có thể sử dụng kí tự và só
checkUsername(/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i);

//