var child = require('child_process').execFile;
var executablePath = "C:\\Windows\\System32\\calc.exe";
child(executablePath, function(err, data) {});
