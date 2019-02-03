

Application react native VRAFAA et site reactJS 

Application react native :

app.js est le corp de notre application ou nous manipulons la navigation des pages 

nous avons cré 6 composants :

login.js ---> page de connexion 
Register.js ---> page d'enregistrement de l'utilisateur
Listvidinvit.js ---> page des videos et nom des artisan en mode invité
Listvid.js ---> page des video et nom des artisan en mode connecté avec la possibilité de l'ajout d'un artisan
Vid.js ---> page de lecture de video connecté et possibilité de voter sur la video
Addvid.js ---> page de l'ajout de l'artisan dans la base de données 

api que nous avont creé sont :

addArtisan.php ---> permet l'ajout de lartisan dans la base de données
idUser.php ---> recuperation id utilisateur connecté afin de savoir qui a ajouter l'artisan 
login.php ---> verification des données utilisateur dans la base afin de se connecter 
register.php ---> enregistrement de l'utilisateur dans la base de données
video.php ---> recuperation de l'url de la video et la lire dans lapplication
vote.php ---> api qui permet de augmenter le nombbbre de vote dans la base de données 

nom de la base de données est artisanjeux.

Ces api et la base de données sont heberger dans le serveur https://artisanjeux.000webhostapp.com/
exemple: pour afficher les artisant qui sont dans la ville avignon on utilise url suivant:
https://artisanjeux.000webhostapp.com/video.php?action=avignon

api utilisé pour la geolocalisation est : 
'http://api.ipinfodb.com/v3/ip-city/?key=6e51641499a6afe3d58e242c7ae647718f84d2cf085f8afd18275a2fefadf070&format=json'

Le site reactJs:
2 composant : 
Home.js ---> affichage des utilisateurs gagnants avec les artisan qui ont obtenu plus de vote 
CustomNavbar.js ---> le menu de site 
Api utiliser est apiSite.php qui est hebergé dans le serveur https://artisanjeux.000webhostapp.com/