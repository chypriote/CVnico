var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	lang: 'fr',
  	'nav': nav,
  	'timeline': timeline
  });
});

module.exports = router;


var nav = [
	{title:'Accueil', url:'#home'}, 
	{title:'Formation', url:'#education'},
	{title:'Compétences', url:'#skills'},
	{title:'Projets', url:'#portfolio'},
	{title:'Contact', url:'#contact'}
];

var timeline = [
	{	title:'Beijing Jiatong University', 
		time:'2016', 
		text:'Master Degree: Software Engineering', 
		icon: 'fa-train',
		position: 'left'},
	{	title:'Minit-L', 
		time:'2015', 
		subtitle:'Avril 2015 - Juillet 2015', 
		text:'Maintenance et développement de sites web', 
		icon: 'fa-train',
		position: 'right'},
	{	title:'MEGA International', 
		time:'2015', 
		subtitle:'Octobre 2014 - Mars 2015', 
		text:'Détournement de requêtes AJAX vers un traitement local afin de faire fonctionner une page Web dans un navigateur IE intégré à une application Win32.', 
		icon: 'fa-train',
		position: 'right'},
	{	title:'EPITECH Paris', 
		time:'2015', 
		text:'Troisième année', 
		icon: 'fa-train',
		position: 'left'},
	{	title:'PSA Peugeot Citroën', 
		time:'2013', 
		subtitle:'Novembre - Décembre 2013', 
		text:'Développement d’un site intranet en PHP afin de réaliser des gains sur le délai de traitement des mises à jour applicatives, et de permettre leur historisation.', 
		icon: 'fa-train',
		position: 'right'},
	{	title:'F4', 
		time:'2013', 
		subtitle:'Février 2013', 
		text:'Constitution d’une base de données pour le site web F4-Map.', 
		icon: 'fa-train',
		position: 'right'},
	{	title:'PSA Peugeot Citroën', 
		time:'2012', 
		subtitle:'Juillet 2012', 
		text:'Production DMCT sur ligne C3/DS3.', 
		icon: 'fa-car',
		position: 'right'},
	{	title:'HEI Lille', 
		time:'2012', 
		text: 'Deux années de classe préparatoire ingénieure, option Physique-Chimie', 
		icon: 'fa-train',
		position: 'left'},
	{	title:'SNCF', 
		time:'2011', 
		subtitle:'Juillet 2011', 
		text:'Diverses opérations de maintenance et de réparation sur les pantographes.', 
		icon: 'fa-train',
		position: 'right'},
	{	title:'Baccalauréat general', 
		time:'2010', 
		text:'Série scientifique, option SVT, spécialité Physique-Chimie. Mention Assez Bien', 
		icon: 'fa-graduation-cap',
		position: 'left'},
];