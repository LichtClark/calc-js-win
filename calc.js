var child = require('child_process').execFile;
var executablePath = "/mnt/c/Windows/System32/calc.exe";
child(executablePath, function(err, data) {});
