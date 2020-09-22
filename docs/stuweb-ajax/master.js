(function() {
  window._edbmaster = {};
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
    console.log.apply(_edbmaster, ['%cmaster.js %c|%c ' + v].concat(['color: cornflowerblue;', 'color: gray;', 'color: currentColor;']).concat(s));
  });
  _edbmaster.const('j', function () {
    if ($) {
      _edbmaster.log(`confirmed jquery loaded %c${Date.now() - _edbmaster.st}ms%c after master.js`, 'color: cornflowerblue; font-weight: bold;', 'color: currentColor; font-weight: normal;');
      $.getScript('https://github.com/processing/p5.js/releases/download/1.1.9/p5.min.js', () => _edbmaster.log('included p5.js'));
    }
  });
  for (let i = 0, m = Object.getOwnPropertyNames(Math).filter(w => typeof Math[w] === 'function'); i < m.length; i++) {
    window[m[i]] = Math[m[i]];
    Number.prototype[m[i]]=function(){return Math[m[i]](this);};
  }
  String.prototype.capitalize = function(p = [0]) {
    let r = this.toString();
    if (!Array.isArray(p) || p.some(isNaN)) {
      p = [0];
    }
    for (let i = 0; i < p.length; i++) {
      if (p[i] < 0) {
        p[i] = r.length + p[i];
      }
      r = r.slice(0, p[i]) + r.charAt(p[i]).toUpperCase() + r.slice(p[i] + 1, r.length);
    }
    return r;
  }
  String.prototype.capitalizeAll = function(d = /[ -]/) {
    let r = "";
    const a = this.toString().split(d);
    for (let i = 0; i < a.length; i++) {
      if (i == 0) {
        r = a[i].charAt(0).toUpperCase() + a[i].slice(1);
      } else {
        r = r + this.toString().substring(a.slice(0, i).join().length, a.slice(0, i).join().length + 1) + a[i].charAt(0).toUpperCase() + a[i].slice(1);
      }
    }
    return r;
  }
})();
