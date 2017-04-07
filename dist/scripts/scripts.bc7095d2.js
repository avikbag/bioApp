"use strict";angular.module("resumeAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial","chart.js"]).config(["$mdThemingProvider",function(a){a.definePalette("custom",{50:"rgba(84, 110, 122, 0.25)",100:"rgba(84, 110, 122, 0.15)",200:"rgba(32, 40, 122, 0.75)",300:"e57373",400:"ef5350",500:"f44336",600:"e53935",700:"d32f2f",800:"c62828",900:"b71c1c",A100:"ff8a80",A200:"ff5252",A400:"ff1744",A700:"d50000",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100"],contrastLightColors:void 0}),a.theme("default").primaryPalette("orange",{"default":"800"}).backgroundPalette("custom",{"default":"50","hue-1":"100","hue-2":"200"})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/exp",{templateUrl:"views/exp.html",controller:"ExpCtrl",controllerAs:"exp"}).otherwise({redirectTo:"/"})}]),angular.module("resumeAppApp").controller("MainCtrl",["$rootScope","$location",function(a,b){a.loc=b.absUrl(),console.log(a.loc),a.animate=!0,setTimeout(function(){a.animate=!1},2500)}]),angular.module("resumeAppApp").controller("AboutCtrl",["$rootScope","$location",function(a,b){a.loc=b.path(),console.log(a.loc,a.animate)}]),angular.module("resumeAppApp").controller("ExpCtrl",["$rootScope","$scope","$location","grab",function(a,b,c,d){b.options={maintainAspectRatio:!1,defaultFontColor:"#000",title:{display:!0,text:"Programming Languages",fontColor:"white"},animation:{duration:2500},scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{display:!1}}],xAxes:[{ticks:{stacked:!0,beginAtZero:!0,fontColor:"white"},gridLines:{display:!1}}]}},b.labels=["JavaScript","C++/C","VHDL","Python"],b.data=[[4,5,4,5]],b.series=["Languages"],a.loc=c.path(),console.log(b.loc),b.names=[],b.urls=[],b.lang=[],b.map={"C++":"cplusplus",Python:"python",Angularjs:"angularjs",HTML:"html5",CSS:"css3",JavaScript:"angularjs",C:"c"},b.filterFn=function(a){return-1==Object.keys(b.map).indexOf(a)?!1:!0},b.filterFnI=function(a){return-1==Object.keys(b.map).indexOf(a)?!0:!1};var e="https://api.github.com/users/avikbag/repos";d.fetch(e).then(function(a){for(var c=a.data,e=0;e<c.length;e++)b.names.push(c[e].name),b.urls.push(c[e].html_url),d.fetch(c[e].url+"/languages").then(function(a){b.lang.push(Object.keys(a.data))})})}]),angular.module("resumeAppApp").factory("grab",["$http",function(a){return{fetch:function(b){return a.get(b)}}}]),angular.module("resumeAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="view" layout="column"> <md-toolbar class="md-primary"> <div class="md-toolbar-tools"> <md-icon md-font-set="material-icons" style="font-size: 32px; margin-right: 10px; margin-left: 10px; height: 32px; width: 32px"> assignment_ind </md-icon> <h2 class="md-flex">About Me</h2> </div> </md-toolbar> <md-content flex layout-padding style="color: white"> <p> I am a student at the ECE department as an aspiring computer engineer. My main interests are computer architecture, VLSI, ASIC, operating systems, and programming of any flavor. I have always had an interest towards computers from an early age and I always try to pick up new things whether it be a programming language or understanding how a piece of hardware works. </p> <p>Apart from these, I am an avid football fan. I used to play for my high school team, and I also try to play pick up football every now and then. I have always supported Manchester United as a kid, and always will. Cooking is another hobby I like to dabble in. I try to learn how to cook and make recipes from all around. In my spare time, I play some Destiny on my PS4 with my friends.</p> </md-content> </div>'),a.put("views/exp.html",'<div class="skill-banner md-background"> <canvas id="bar" class="chart chart-bar" chart-data="data" chart-labels="labels" chart-options="options"></canvas> </div> <div class="view" layout="column"> <md-toolbar class="md-primary"> <div class="md-toolbar-tools"> <md-icon md-font-set="material-icons" style="font-size: 32px; margin-right: 10px; margin-left: 10px; height: 32px; width: 32px"> assignment_ind </md-icon> <h2 class="md-flex">My Work Experience and Project Work</h2> </div> </md-toolbar> <md-content style="color: white; overflow-x:shidden"> <md-subheader style="" class="md-background md-hue-2 md-primary">Work Experience </md-subheader> <md-list layout-padding flex style="height: 120px"> <md-list-item class="md-3-line md-background md-hue-2"> <md-icon md-font-set="material-icons" style="color: white; font-size: 32px; margin-right: 10px; margin-left: 10px; margin-top: 24.5px; margin-bottom:24.5px; height: 32px; width: 32px" class="md-list-item"> work </md-icon> <div class="md-list-item-text" layout="column"> <h3 style="color: white">Sasquehanna International Group (SIG)</h3> <h4 style="color: white">Software Developer Co-op</h4> </div> <p class="md-list-item-text" style="text-align: right">September 2015 - March 2016</p> </md-list-item> </md-list> <md-subheader style="" class="md-background md-hue-2 md-primary">Projects </md-subheader> <md-list layout-padding flex> <md-list-item class="md-3-line md-background md-hue-2" href="{{urls[$index]}}" ng-repeat="item in names"> <i style="font-size: 40px; padding-top: 26px; padding-bottom: 26px" class="devicon-github-plain-wordmark md-avatar"></i> <div class="md-list-item-text" layout="row"> <h3 style="color: white">{{ item }}</h3> </div> <i ng-repeat="l in lang[$index] | filter:filterFn" style="font-size: 40px; padding-top: 26px; padding-bottom: 26px" class="devicon-{{map[l]}}-plain md-avatar"><br></i> <md-menu md-offset="0 50"> <md-button aria-label="Open demo menu" ng-click="$mdOpenMenu($event)"> <md-icon md-font-set="material-icons" style="font-size: 30px; margin-right: 10px; margin-left: 10px; height: 30px; width: 30px; color: white"> subdirectory_arrow_right <md-tooltip style="color: white" md-direction="top"> Languages Used </md-tooltip> </md-icon> </md-button> <md-menu-content width="3" class="md-background md-hue-2"> <md-menu-item ng-repeat="m in lang[$index]"> <md-button style="color: white; text-align: center"> <span md-menu-align-target>{{m}} </span></md-button> </md-menu-item> </md-menu-content> </md-menu> </md-list-item> </md-list> </md-content> </div>'),a.put("views/main.html",'<div class="welcome-block"> <h1 class="welcome-header"> Welcome </h1> <p class="welcome-text"> Welcome </p> </div> <div class="view-transition" href="#/about"> <a class="fa fa-angle-double-right" aria-hidden="true" href="#/about"></a> </div>')}]);