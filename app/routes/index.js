var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	lang: 'fr',
  	'nav': nav,
  	'timeline': timeline,
  	'studies' : studies,
  	'skills' : skills
  });
});

module.exports = router;


var nav = [
	{title:'Accueil', url:'#home'}, 
	{title:'Formation', url:'#education'},
	{title:'Experiences', url:'#experience'},
	{title:'Compétences', url:'#skills'},
	{title:'Projets', url:'#portfolio'},
	{title:'Contact', url:'#contact'}
];

var studies = [
	{	title:'Beijing Jiatong University', 
		subtitle: '2015 - 2016',
		time:'2016', 
		text:'Master Degree: Software Engineering', 
		icon: 'fa-plane',
		color: 'danger',
		position: 'left'},
	{	title:'EPITECH Paris', 
		subtitle: '2013 - 2015',
		time:'2015', 
		text:'Troisième année', 
		icon: 'fa-laptop',
		color: 'success',
		position: 'left'},
	{	title:'HEI Lille', 
		time:'2012', 
		text: 'Deux années de classe préparatoire ingénieure, option Physique-Chimie', 
		icon: 'fa-university',
		color: 'warning',
		position: 'left'},
	{	title:'Baccalauréat general', 
		time:'2010', 
		text:'Série scientifique, option SVT, spécialité Physique-Chimie, Mention Assez Bien', 
		icon: 'fa-graduation-cap',
		color: 'primary',
		position: 'left'},
	{	title:'Brevet des collèges', 
		time:'2006', 
		text:'Mention Assez Bien', 
		icon: 'fa-graduation-cap',
		color: 'info',
		position: 'left'},
	{	title:'Né à Belfort (90)', 
		time:'1992', 
		text:'17 Avril', 
		icon: 'fa-graduation-cap',
		position: 'left'},
]

var timeline = [
	{	title:'Minit-L', 
		time:'2015', 
		subtitle:'Avril 2015 - Juillet 2015', 
		text:'Maintenance et développement de sites web', 
		icon: 'fa-drupal',
		position: 'right'},
	{	title:'MEGA International', 
		time:'2015', 
		subtitle:'Octobre 2014 - Mars 2015', 
		text:'Détournement de requêtes AJAX vers un traitement local afin de faire fonctionner une page Web dans un navigateur IE intégré à une application Win32.', 
		icon: 'fa-cog',
		position: 'right'},
	{	title:'PSA Peugeot Citroën', 
		time:'2013', 
		subtitle:'Novembre - Décembre 2013', 
		text:'Développement d’un site intranet en PHP afin de réaliser des gains sur le délai de traitement des mises à jour applicatives, et de permettre leur historisation.', 
		icon: 'fa-keyboard-o',
		position: 'right'},
	{	title:'F4', 
		time:'2013', 
		subtitle:'Février 2013', 
		text:'Constitution d’une base de données pour le site web F4-Map.', 
		icon: 'fa-database',
		position: 'right'},
	{	title:'PSA Peugeot Citroën', 
		time:'2012', 
		subtitle:'Juillet 2012', 
		text:'Production DMCT sur ligne C3/DS3.', 
		icon: 'fa-car',
		position: 'right'},
	{	title:'SNCF', 
		time:'2011', 
		subtitle:'Juillet 2011', 
		text:'Diverses opérations de maintenance et de réparation sur les pantographes.', 
		icon: 'fa-train',
		position: 'right'},
];

var skills = [
	{
		name: 'programmation',
		values: [
			{ name: 'C',
				percent: 95,
				icon: 'c'
			},
			{ name: 'C++',
				percent: 70,
				icon: 'cplusplus'
			},
			{ name: 'Java',
				percent: 50,
				icon: 'java'
			},
			{ name: 'C#',
				percent: 30,
				icon: 'csharp'
			},
		]
	},
	{
		name: 'web',
		values: [
			{ name: 'HTML',
				percent: 95,
				icon: 'html5'
			},
			{ name: 'CSS',
				percent: 90,
				icon: 'css3'
			},
			{ name: 'Javascript',
				percent: 85,
				icon: 'javascript'
			},
			{ name: 'jQuery',
				percent: 90,
				icon: 'jquery'
			},
			{ name: 'PHP',
				percent: 85,
				icon: 'php'
			},
			{ name: 'MySQL',
				percent: 40,
				icon: 'mysql'
			},
		]
	},
	{
		name: 'frameworks',
		values: [
			{ name: 'Bootstrap',
				percent: 95,
				icon: 'bootstrap'
			},
			{ name: 'Foundation',
				percent: 70,
				icon: 'foundation'
			},
			{ name: 'Drupal',
				percent: 75,
				icon: 'drupal'
			},
			{ name: 'AngularJS',
				percent: 25,
				icon: 'angularjs'
			},
			{ name: 'Wordpress',
				percent: 30,
				icon: 'wordpress'
			},
			{ name: 'Symfony',
				percent: 5,
				icon: 'symfony'
			},
		]
	},
	{
		name: 'outils',
		values: [
			{ name: 'Bower',
				percent: 20,
				icon: 'bower'
			},
			{ name: 'Git',
				percent: 75,
				icon: 'git'
			},
			{ name: 'Grunt',
				percent: 15,
				icon: 'grunt'
			},
			{ name: 'Gulp',
				percent: 10,
				icon: 'gulp'
			},
			{ name: 'Photoshop',
				percent: 10,
				icon: 'photoshop'
			},
		]
	}
];