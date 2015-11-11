(function(){
  var thumbnails = [
  { src: "img/ricardomoreno-1.jpg", desc:"- Ensaio externo -", alt: "ricardomoreno" },
  { src: "img/onze20-1.jpg", desc:"- Show onze:20 -", alt:"onze20" },
  { src: "img/bailedopiu-1.jpg", desc:"- Festa -", alt:"bailedopiu" },
  { src: "img/victoria-1.jpg", desc:"- Ensaio externo -", alt:"victoria"}
  
  ];

  var ensaios = [

	{ricardomoreno: [
 		{src:"img/ricardomoreno-1.jpg", alt:"- ensaio externo -"},
 		{src:"img/ricardomoreno-2.jpg", alt:"- ensaio externo -"},
 		{src:"img/ricardomoreno-3.jpg", alt:"- ensaio externo -"},
 		{src:"img/ricardomoreno-4.jpg", alt:"- ensaio externo -"}
	]},
 	{victoria: [
  		{src:"img/victoria-1.jpg", alt:"- ensaio externo -"},
  		{src:"img/victoria-2.jpg", alt:"- ensaio externo -"},
  		{src:"img/victoria-3.jpg", alt:"- ensaio externo -"},
  		{src:"img/victoria-4.jpg", alt:"- ensaio externo -"}
 	]},
 	{bailedopiu: [
  		{src:"img/bailedopiu-1.jpg", alt:"- festsa -"},
  		{src:"img/bailedopiu-2.jpg", alt:"- festsa -"},
  		{src:"img/bailedopiu-3.jpg", alt:"- festsa -"},
  		{src:"img/bailedopiu-4.jpg", alt:"- festsa -"}
 	]},
 	{onze20: [
  		{src:"img/onze20-1.jpg", alt:"- show onze:20 -"},
  		{src:"img/onze20-2.jpg", alt:"- show onze:20 -"},
  		{src:"img/onze20-3.jpg", alt:"- show onze:20 -"},
  		{src:"img/onze20-4.jpg", alt:"- show onze:20 -"}
 	]}
  ];
  
  var app = angular.module('PortfolioApp', []);
  app.controller('PortfolioController', function(){
  this.fotos = thumbnails;
  this.ensaio = ensaios;
  });
})();