// Generated by CoffeeScript 1.3.3
(function() {
  var fd, fs, mkdirp;

  fd = require('path');

  fs = require('fs');

  mkdirp = module.exports = function(path, mode) {
    if (mode == null) {
      mode = 0x1fd;
    }
    path = fd.resolve(path);
    if (!fd.existsSync(path)) {
      try {
        return fs.mkdirSync(path, mode);
      } catch (err) {
        mkdirp(fd.dirname(path), mode);
        return fs.mkdirSync(path, mode);
      }
    }
  };

}).call(this);