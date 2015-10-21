var fs = require('fs')
var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'];
    //html = ejs.render('<%= people.join(", "); %>', {people: people});
read = require('fs').readFileSync;

var data = {
    title:"Hello World",
    supplies:['123','456','789']
}

html = ejs.renderFile('cleaning.ejs',data, function(err,result){
    if(err){
        console.log(err)
        return
    }
    fs.writeFile("test.html", result, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
    ////return result;
    //var template = ejs.compile(read('cleaning.ejs', 'utf-8'));
    //
    //console.log(template());
})

