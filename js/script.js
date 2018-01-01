$('body').scrollspy({ target: '.nav-stacked' })

$(document).ready(function () {
    GetLatestReleaseInfo();
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/fCinema/desktop-app/releases/latest").done(function (release) {
        var asset = release.assets[0];
        var winURL;
        var macURL;
        var latestVersion = release.tag_name;
        
        release.assets.forEach(function(el,i){
          if(el.name === "fCinema.exe"){
            winURL = el.browser_download_url;
          }else if(el.name === "fCinema.dmg"){
            macURL = el.browser_download_url;
          }
        });
        
        $("#winURL").attr("href", winURL);
        $("#macURL").attr("href", macURL);
        $("#latestVersion").text(latestVersion);

    });
}