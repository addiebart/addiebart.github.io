"use strict";
(function(){
  if (new URLSearchParams(document.location.search).get("o")==="") {
    const extraLinks = document.createElement("div");
    extraLinks.id = "hidden-social-links-div";
    extraLinks.innerHTML = `<a href="https://twitter.com/BartSSBU">
      <div class="w3-button w3-round-large w3-border w3-border-black social-link-btn">
        <img src="https://proxy.duckduckgo.com/iu/?u=https://abs.twimg.com/favicons/twitter.ico" class="social-img">
        <span class="social-text">@BartSSBU on Twitter</span>
      </div>
    </a><br>
    <a href="https://github.com/BartBoys3">
      <div class="w3-button w3-round-large w3-border w3-border-black social-link-btn">
        <img src="https://proxy.duckduckgo.com/iu/?u=https://github.githubassets.com/favicons/favicon.png" class="social-img">
        <span class="social-text">@BartBoys3 on GitHub</span>
      </div>
    </a><br>
    <a onclick="alert('This is not a link. Discord friends must be added from within the app or discord.com.');">
      <div class="w3-button w3-round-large w3-border w3-border-black social-link-btn">
        <img src="https://proxy.duckduckgo.com/iu/?u=https://discord.com/assets/2c21aeda16de354ba5334551a883b481.png" class="social-img">
        <span class="social-text">BartBoys3#6254 on Discord</span>
      </div>
    </a><br>
    <a href="https://steamcommunity.com/profiles/76561198349315446">
      <div class="w3-button w3-round-large w3-border w3-border-black social-link-btn">
        <img src="https://files.catbox.moe/rdm2os.svg" class="social-img" alt="steam">
        <span class="social-text">BartBoys3 on Steam</span>
      </div>
    </a>`;
    setTimeout(function() {
      document.getElementById('social-links-div').appendChild(extraLinks);
    }, 1);
  }
})();
