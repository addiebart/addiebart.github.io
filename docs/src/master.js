"use strict";
(function() {
  this._edbmaster = new Object();
  var throwTypeError = function(v, t, n = 'v') {
    if (!(typeof t==='string'||typeof t==='string')&&this) {
      throw new TypeError('TypeError in throwTypeError: t must be a string, got '+typeof t+'.');
    }
    else if (typeof v!==t) {
      throw new TypeError(n+' is not of type "'+t+'", got "'+typeof v+'" instead.');
    }
    return true;
  };
  Object.defineProperty(_edbmaster, 'const', {
    value: function (n, v) {
      Object.defineProperty(this, n, {
        value: v,
        writable: false,
        enumerable: true,
        configurable: false
      });
    },
    writable: false,
    enumerable: true,
    configurable: false
  });
  _edbmaster.const('st', Date.now());
  _edbmaster.const('log', function (v, ...s) {
    console.log.apply(this, ['%cmaster.js %c|%c ' + v].concat(['color: cornflowerblue;', 'color: gray;', 'color: currentColor;']).concat(s));
  });
  _edbmaster.const('j', function () {
    if ($) {
      _edbmaster.log('confirmed jquery loaded %c'+(Date.now()-_edbmaster.st)+'ms%c after master.js', 'color: cornflowerblue; font-weight: bold;', 'color: currentColor; font-weight: normal;');
      $.getScript('https://github.com/processing/p5.js/releases/download/1.1.9/p5.min.js', function(){_edbmaster.log('included p5.js');});
    }
  });
  for (var i = 0, m = Object.getOwnPropertyNames(Math).filter((function(w){return typeof Math[w] === 'function';})()); i < m.length; i++) {
    window[m[i]] = Math[m[i]];
    Number.prototype[m[i]]=function(){return Math[m[i]](this);};
  }
  String.prototype.capitalize = function(p = [0]) {
    var r = this.toString();
    if (!Array.isArray(p) || p.some(isNaN)) {
      p = [0];
    }
    for (var i = 0; i < p.length; i++) {
      if (p[i] < 0) {
        p[i] = r.length + p[i];
      }
      r = r.slice(0, p[i]) + r.charAt(p[i]).toUpperCase() + r.slice(p[i] + 1, r.length);
    }
    return r;
  }
  String.prototype.capitalizeAll = function(d = /[ -]/) {
    var r = "",
    a = this.toString().split(d);
    for (var i = 0; i < a.length; i++) {
      if (i == 0) {
        r = a[i].charAt(0).toUpperCase() + a[i].slice(1);
      } else {
        r = r + this.toString().substring(a.slice(0, i).join().length, a.slice(0, i).join().length + 1) + a[i].charAt(0).toUpperCase() + a[i].slice(1);
      }
    }
    return r;
  }
  String.prototype.unescape = function(n = 1) {
    var r = this.toString();
    for (var i = 0; i < n; i++) {
      r = r.replaceAll('\\\\','\\').replaceAll('\\\n','\n').replaceAll('\\\"','\"').replaceAll('\\\'','\'').replaceAll('\\\r','\r').replaceAll('\\\b','\b').replaceAll('\\\0','\0').replaceAll('\\\t','\t').replaceAll('\\\v','\v').replaceAll('\\\n','\n').replaceAll('\\\f','\f');
    }
    return r;
  }
  String.prototype.escape = function(n = 1) {
    var r = this.toString();
    for (var i = 0; i < n; i++) {
      r = r.replaceAll('\\','\\\\').replaceAll('\n','\\\n').replaceAll('\"','\\\"').replaceAll('\'','\\\'').replaceAll('\r','\\\r').replaceAll('\b','\\\b').replaceAll('\0','\\\0').replaceAll('\t','\\\t').replaceAll('\v','\\\v').replaceAll('\n','\\\n').replaceAll('\f','\\\f');
    }
    return r;
  }
})();
