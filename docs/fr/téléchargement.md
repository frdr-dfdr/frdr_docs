## Trouver des jeux de données
Si vous n’avez pas le lien direct vers un jeu de données hébergé dans le DFDR, vous pouvez naviguer parmi les jeux de données disponibles en utilisant le [découverte du DFDR](/repo/search?locale=fr).

## Télécharger des jeux de données à partir d’un navigateur Web
L’outil de recherche de fichiers se trouve au bas de la page d’accueil de chaque jeu de données.

<a href="/docs/img/screenshots/téléchargement_données/toile_télécharger.png" class="screenshot-lightbox">
<img src="/docs/img/screenshots/téléchargement_données/toile_télécharger.png" alt="Capture d'écran montrant le widget de navigation de fichiers sur la page d'accueil de l'élément FRDR." class="screenshot"/>
</a>

Pour télécharger des jeux de données à partir d’un navigateur Web, la marche à suivre est la même que pour tout autre fichier sur Internet. Il suffit de cliquer sur le nom du fichier dans l’outil de recherche du DFDR pour le télécharger sur votre appareil. Gardez à l’esprit que cette méthode comporte plusieurs limites :

* Il faut télécharger chaque fichier individuellement.
* Les transferts Web ne sont pas aussi rapides ni fiables que ceux effectués avec Globus à partir de votre appareil local ou d’un autre terminal. Selon la vitesse de votre Internet, nous vous recommandons d’utiliser Globus pour télécharger les fichiers de plus de 5 Go ainsi que les jeux de données comprenant un grand nombre de fichiers.
* Certains répertoires comprennent trop de fichiers pour être bien recensés sur un navigateur Web. L’outil de recherche de fichiers indiquera si la liste de fichiers est tronquée. Si c’est le cas, cliquez sur « Télécharger le jeu de données » pour ouvrir l’écran de gestion des fichiers de Globus et afficher tous les fichiers du jeu de données ainsi que la liste complète du répertoire.

### Création de liens de téléchargement individuels

Le DFDR reproduit les données sur plusieurs serveurs. Afin de générer pour un fichier un lien de téléchargement stable qui fonctionnera indépendamment du serveur concerné, faites un clic droit sur le nom du fichier (Ctrl + clic sur Mac), sélectionnez « Copier l’adresse du lien » et collez le résultat. L’adresse sera similaire à celle-ci : https://www.frdr-dfdr.ca/repo/files/1/published/publication_NNN/submitted_data. « NNN » sera remplacé par un numéro de publication propre au jeu de données dans le DFDR.

Bien que ces liens soient assez stables, ils ne remplacent pas le DOI du jeu de données, soit l’identifiant unique et permanent qui conduira toujours à un enregistrement de votre jeu de données. Si vous prévoyez d’inclure un lien de téléchargement dans une publication, un fichier de script ou sur votre site Web, nous vous recommandons d’inclure également le DOI du jeu de données. Si vous avez des questions ou si vous avez besoin de générer des liens de téléchargement stables pour un grand nombre de fichiers dans un jeu de données, veuillez écrire à l’équipe de soutien technique du DFDR à l’adresse [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca) pour obtenir de l’aide.



## Télécharger des jeux de données avec Globus Transfer
Globus est un logiciel gratuit qui permet de transférer des fichiers de façon sûre et à haute vitesse. Il s’agit de la méthode la plus efficace pour télécharger une grande quantité de données dans le DFDR. Pour utiliser Globus, vous devez soit accéder à un serveur sur lequel Globus est déjà installé (c’est le cas pour la plupart des [sites d’hébergement nationaux](https://alliancecan.ca/fr/services/calcul-informatique-de-pointe/la-federation/sites-dhebergement-nationaux) de l’Alliance de recherche numérique du Canada), soit créer votre propre compte Globus et installer [Globus Connect Personal](https://www.globus.org/globus-connect-personal) sur votre appareil.

La vidéo ci-dessous présente les étapes détaillées pour configurer un terminal Globus Transfer :

<div class="video-wrap">
<a href="https://www.youtube.com/watch?v=zSdpMNlIlpk&list=PLX9EpizS4A0suoSV2N0nn9parl96xHPkz&index=11" target="_blank">
  <div class="video-play-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewbox="0 0 150 150" version="1.1">
        <path stroke="#cccccc" stroke-width="2px" d="M150,0A150,150,0,1,0,300,150,150,150,0,0,0,150,0Zm0,290A140,140,0,1,1,290,150,140,140,0,0,1,150,290Z" transform="matrix(0.5,0,0,0.5,0,0)"></path>
        <polygon stroke="#cccccc" stroke-width="2px" points="225 150 110 80 110 225 225 150" transform="matrix(0.5,0,0,0.5,0,0)"></polygon>
    </svg>
  </div>
  <img class="video-placeholder" src="/docs/img/video_placeholders/fr/téléchargement_youtube.png" alt="Aperçu vidéo: comment télécharger et installer Globus Connect Personal.">
</a>
</div>
