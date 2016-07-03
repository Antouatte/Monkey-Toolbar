// ==UserScript==
// @name         Monkey Toolbar
// @version      1
// @author       Twan <3
// @include      https://example.com/*
// @require      https://code.jquery.com/jquery-3.0.0.min.js
// @grant        none
// ==/UserScript==


jQuery.noConflict(true);


$(document).ready(function() {
  // Bar Layout
  var toolbarBar = '<div id="toolbarLine" style="position:fixed; width:100%; background-color:A2C14B; height:5px; z-index:999; bottom:0px; left:0px;"></div>';
  toolbarBar+= '<div id="toolbar" style="position:fixed; width:100%; border-top:3px solid A2C14B; color:A2C14B; padding:3px; font-weight:bold; background-color:white; bottom:0px; left:0px; text-align:left; font-size:14px; text-align:center; z-index:999;">';
  toolbarBar+= '<style type="text/css">body:after { content:""; padding:13px; display:block; width:auto; }</style>';

  // alt + accesskey
  toolbarBar+= '<a href="" id="toolbarToggleCSS" accesskey="t">ToggleCSS</a> ◆ ';
  toolbarBar+= '<a href="" id="toolbarMenu" accesskey="z">DevBar</a> ◆ ';
  toolbarBar+= '<a href="" id="toolbarImages" accesskey="i">Images</a> ';
  toolbarBar+= '</div>';

  // creating & attaching the bar on the page
  var newdiv = document.createElement("div");
  newdiv.innerHTML = toolbarBar;
  document.body.appendChild(newdiv);

  // Hiding it
  $('#toolbar').slideToggle(0);
});


/* ********************************** */

// Scripts

$('#toolbarToggleCSS').click(function() {
  i=0;
  if(document.styleSheets.length>0){
    cs=!document.styleSheets[0].disabled;
    for(i=0;i<document.styleSheets.length;i++)
      document.styleSheets[i].disabled=cs;
  };
  void(cs=true);
  event.preventDefault();
});


$('#toolbarLine, #toolbarMenu').click(function() {
    $('#toolbar').slideToggle();
    event.preventDefault();
});


$('#toolbarImages').click(function() {
  $("img").each(function() {
    $(this).after($("<span/>").text($(this).attr("alt")).css({"background-color": "PaleGoldenRod", "padding": "5px", "color": "black", "border": "2px solid #A69E46", "position": "absolute", "z-index": "100"}));
  })
  event.preventDefault();
});


/* ********************************** */


$(document).ready(function() {
  console.log('%c Script Running ', 'background: #36b5bd; color: white; padding:2px;');
});
