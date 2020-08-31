// ==UserScript==
// @name         Youtube UI Hider
// @namespace    https://github.com/Sylirana/YT-UI-Hider
// @version      1.0
// @description  Hides the Youtube player UI on the press of a key.
// @author       Sylirana, stefnotch and jscher2000
// @match        *://*.youtube.com/*
// @match        *://youtube.com/*
// @updateURL    https://github.com/Sylirana/YT-UI-Hider/raw/master/yt-ui-hider.user.js
// @downloadURL  https://github.com/Sylirana/YT-UI-Hider/raw/master/yt-ui-hider.user.js
// @homepageURL  https://github.com/Sylirana/YT-UI-Hider
// @grant        none
// ==/UserScript==

document.addEventListener("keydown",
	function(evt)
	{
		if(evt.key.toLowerCase() == 'h')
		{
			var s = document.getElementById("stylehidecontrols");
			if(s)
			{
				s.remove();
			}
			else
			{
				s = document.createElement("style");
				s.id = "stylehidecontrols";
				var r = "#movie_player .ytp-gradient-top, #movie_player .ytp-gradient-bottom, #movie_player .ytp-chrome-top, #movie_player .ytp-chrome-bottom{display:none !important}";
				s.appendChild(document.createTextNode(r));
				document.body.appendChild(s);
			}
		}
		return null;
	}
);