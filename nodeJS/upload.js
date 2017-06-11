var express = require('express');
var expressUpload = require('express-fileupload');
var app = express();

var path = "/home/ederson-jr/Developer/nodeJS/";
// most to use
app.use(expressUpload());

app.get('/', function(req, res) {
	res.sendFile(path + 'upload.html');
});

app.post('/upload', function(req, res) {
	var file = req.files.fileView;
	console.log('receive the file: ' + file.name);
	file.mv(path + file.name, function(err) {
		if (err) {
			throw err;
		}
	})
})

app.listen(8080);
console.log('running...');