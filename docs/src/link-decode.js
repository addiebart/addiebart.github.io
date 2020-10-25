(function(){
  var a = Array.from(document.querySelectorAll('a.link-decode-edbart'));
  for (let i = 0; i < a; i++) {
    a[i].href = unescape((function() {
      switch(new URLSearchParams('?'+a[i].href.split('?')[1]).get('href')) {
        case 'stuweb':
          return 'mailto%3A%'+(68/2)+'%'+(Math.pow(6,2))+'%'+((15*2)+1)+'%'+(((3*4)+1)*5)+'%'+(Math.pow(8,2)-2)+'%'+(((Math.pow(8,2))/2)-1)+'%'+((8*5)-1)+'%2b%73%74%75%77%65%62%40%73%74%75%64%65%6e%74%73%2e%6f%6c%61%74%68%65%73%63%68%6f%6f%6c%73%2e%63%6f%6d';
          break;
        case 'school':
          return return 'mailto%3A%'+(68/2)+'%'+(Math.pow(6,2))+'%'+((15*2)+1)+'%'+(((3*4)+1)*5)+'%'+(Math.pow(8,2)-2)+'%'+(((Math.pow(8,2))/2)-1)+'%'+((8*5)-1)+'%40%73%74%75%64%65%6e%74%73%2e%6f%6c%61%74%68%65%73%63%68%6f%6f%6c%73%2e%63%6f%6d';
          break;
        case 'ig':
        case 'insta':
        case 'instagram':
          return 'https%3A%2F%2Fwww.instagram.com%2F%'+((15*4)+5)+'%'+(Math.pow(8,2))+'%'+(Math.pow(8,2))+'%'+(23*3)+'%'+((15*4)+5)+'%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'%'+((15*4)+5)+'%'+(1.5*4)+'c%'+(1.5*4)+'c%'+(23*3);
          a[i].querySelector('.social-text').textContent = unescape('@%'+((15*4)+5)+'%'+(Math.pow(8,2))+'%'+(Math.pow(8,2))+'%'+(23*3)+'%'+((15*4)+5)+'%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'%'+((15*4)+5)+'%'+(1.5*4)+'c%'+(1.5*4)+'c%'+(23*3)+' on Instagram');
          break;
        case 'twitter':
          return 'https%3A%2F%2Fwww.twitter.com%2F%'+((15*4)+5)+'%'+(Math.pow(8,2))+'%'+(Math.pow(8,2))+'%'+(23*3)+'%'+((15*4)+5)+'%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'%'+((15*4)+5)+'%'+(1.5*4)+'c%'+(1.5*4)+'c%'+(23*3);
          a[i].querySelector('.social-text').textContent = unescape('@%'+((15*4)+5)+'%'+(Math.pow(8,2))+'%'+(Math.pow(8,2))+'%'+(23*3)+'%'+((15*4)+5)+'%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'%'+((15*4)+5)+'%'+(1.5*4)+'c%'+(1.5*4)+'c%'+(23*3)+' on Twitter');
          break;
        case 'sc':
        case 'snap':
        case 'snapchat':
          return 'https%3A%2F%2Fwww.snapchat.com%2Fadd%2F%'+((15*4)+5)+'%'+(Math.pow(8,2))+'%'+(Math.pow(8,2))+'%'+(23*3)+'%'+((15*4)+5)+'%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'%'+((15*4)+5)+'%'+(1.5*4)+'c%'+(1.5*4)+'c%'+(23*3);
          a[i].querySelector('.social-text').textContent = unescape('@%'+((15*4)+5)+'%'+(Math.pow(8,2))+'%'+(Math.pow(8,2))+'%'+(23*3)+'%'+((15*4)+5)+'%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'%'+((15*4)+5)+'%'+(1.5*4)+'c%'+(1.5*4)+'c%'+(23*3)+' on Snapchat');
          break;
        case 'gh':
        case 'github':
          return 'https%3A%2F%2Fgithub.com%2F%'+((15*4)+5)+'%'+(Math.pow(8,2))+'%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1);
          a[i].querySelector('.social-text').textContent = unescape('@%'+((15*4)+5)+'%'+(Math.pow(8,2))+'%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+' on Github');
          break;
        case 'steam':
          return 'https://steamcommunity.com/profiles/%55%54%53%54%49%49%57%56%51%52%57%51%49%53%52%52%54'
          a[i].querySelector('.social-text').textContent = unescape('B%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'Boys3 on Steam');
          break;
        case 'online-twitter':
        case 'smash-twitter':
        case 'smashtwitter':
        case 'onlinetwitter':
        case 'twitter2':
          return 'https%3A%2F%2Fwww.twitter.com%2F%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'%'+((8*9)+3)+'%'+((8*9)+3)+(Math.pow(8,2)-2)+(25*3);
          a[i].querySelector('.social-text').textContent = unescape('@%'+(Math.pow(8,2)-2)+'%'+((3*20)+1)+'%'+(9*8)+'%'+((25*3)-1)+'%'+((8*9)+3)+'%'+((8*9)+3)+(Math.pow(8,2)-2)+(25*3)+' on Twitter');
          break;
      }
    })());
  }
})();
