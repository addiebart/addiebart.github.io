(function(){
  const a = Array.from(document.querySelectorAll('a.email-decode-edbart'));
  for (let i = 0; i < a; i++) {
    a[i].href = unescape((function() {
      switch(new URLSearchParams('?'+a[i].href.split('?')[1]).get('address')) {
        case 'stuweb':
          return '%'+(68/2)+'%'+(Math.pow(6,2))+'%'+((15*2)+1)+'%'+(((3*4)+1)*5)+'%'+(Math.pow(8,2)-2)+'%'+(((Math.pow(8,2))/2)-1)+'%'+((8*5)-1)+'%2b%73%74%75%77%65%62%40%73%74%75%64%65%6e%74%73%2e%6f%6c%61%74%68%65%73%63%68%6f%6f%6c%73%2e%63%6f%6d';
          break;
        case 'school':
          return return '%'+(68/2)+'%'+(Math.pow(6,2))+'%'+((15*2)+1)+'%'+(((3*4)+1)*5)+'%'+(Math.pow(8,2)-2)+'%'+(((Math.pow(8,2))/2)-1)+'%'+((8*5)-1)+'%40%73%74%75%64%65%6e%74%73%2e%6f%6c%61%74%68%65%73%63%68%6f%6f%6c%73%2e%63%6f%6d';
          break
      }
    })());
  }
})();
