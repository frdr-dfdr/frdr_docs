Le DFDR offre une fonction puissante pour la recherche de données de recherche canadiennes. Cet outil fédéré de recherche regroupe des métadonnées provenant de nombreux dépôts, notamment des jeux de données déposés dans la plateforme de dépôt du DFDR. La liste complète des dépôts indexés par le DFDR est disponible ici : [Liste des dépôts du FRDR-DFDR](https://www.frdr-dfdr.ca/discover/html/repository-list.html?lang=fr).

# Conseils pour la recherche

* Afin d’améliorer la recherche, tous les mots de votre terme de recherche subiront un traitement de « racinisation ». Cela signifie en général que différentes formes d’un même mot racine donneront les mêmes résultats : par exemple, le singulier et le pluriel (« arbre » et « arbres ») et différentes formes de verbes (« courons » et « courir »). L’algorithme de racinisation n’inclut pas toujours les mots irréguliers. La racinisation est uniquement appliquée au titre, à la description, au mot-clé et au sujet.
* La recherche distingue les caractères accentués des caractères non accentués. Par exemple, une recherche pour « Quebec » donnera des résultats différents de ceux d’une recherche pour « Québec ».
* Les opérateurs booléens (AND, OR, NOT) sont sensibles à la casse.

# Méthodes de recherche

## 1. Recherche de base

Entrez votre terme de recherche (un mot ou plus) dans la boîte de recherche, puis cliquez sur le bouton de recherche (loupe) ou utilisez la touche Entrer pour soumettre. Les résultats de la recherche afficheront les jeux de données qui correspondent à l’un des mots dans n’importe quel domaine.

## 2. Syntaxe de la requête de recherche

Vous pouvez préciser des recherches plus complexes en utilisant un sous-ensemble de la syntaxe de la chaîne de requête ElasticSearch dans la boîte de recherche de base. La syntaxe est puissante, mais rigide.

### Préciser les noms de champ

Vous pouvez préciser les champs à rechercher dans la syntaxe de la requête.

Cette recherche relève des jeux de données dont le titre contient le mot « forest » ou le mot « trees » :

* title : (forest trees)

Les champs suivants sont inclus dans le schéma de métadonnées et peuvent être recherchés en utilisant le nom de champ dans la syntaxe de recherche indiquée. Ces noms de champ sont sensibles à la casse.

Field name         | Query syntax field name      | Notes[CO1]
-------------------|------------------------------|----------------------------------------------
ACCESS             | frdr_access                  |
AUTHOR             | author                       | dc_contributor_author peut aussi être utilisé
AUTHOR_AFFILIATION | datacite_creatorAffiliation  |
CONTRIBUTOR        | dc_contributor               |
SOURCE             | frdr_origin_id               |
DESCRIPTION_EN     | description                  | dc_description_en peut aussi être utilisé
DESCRIPTION_FR     | dc_description_fr            |
ITEM_URL           | item_url                     |
KEYWORD_EN         | keyword                      | frdr_keyword_en peut aussi être utilisé
KEYWORD_FR         | frdr_keyword_en              |
PUBLISHER          | dc_publisher                 |
RIGHTS             | dc_rights                    |
SERIES             | frdr_series                  |
DATE               | date                         | dc_date peut aussi être utilisé
SUBJECT_EN         | frdr_subject_en              |
SUBJECT_FR         | frdr_subject_fr              |
TITLE_EN           | title                        | dc_title_en peut aussi être utilisé
TITLE_FR           | dc_title_fr                  |
TYPE               | datacite_resourceTypeGeneral | Ceci a toujours la veleur « Dataset ».
DATE_COLLECTED     | datacite_#dateCollected      | Pour les jeux de données déposés directement dans le DFDR uniquement
GEOLOCATION_PLACE  | datacite_geolocationPlace    |
GEOLOCATION_BOX    | datacite_geolocationBox      |
GEOLOCATION_POINT  | datacite_geolocationPoint    |

### Créer des termes de recherche

Lorsqu’un seul terme comprend plusieurs mots (entre parenthèses), il est traité comme l’opérateur booléen « OR ». Ces deux recherches sont équivalentes et renvoient des jeux de données dont le titre comprend le mot « city » ou le mot « urban » :

* title : (urban city)
* title : (urban OR city)

Afin de trouver les correspondances pour tous les mots d’un même terme — dans n’importe quel ordre — utilisez l’opérateur booléen « AND » :

* title : (canada AND census)

Pour trouver les jeux de données dont le titre contient une expression exacte, utilisez les guillemets :

* title : ( “census profile”)

### Combiner des termes de recherche avec des opérateurs booléens

En plus d’utiliser les opérateurs booléens dans un terme de recherche, vous pouvez utiliser AND, OR, et NOT pour jumeler plusieurs termes de recherche.

Par exemple, cette recherche permet de trouver les jeux de données avec « Ontario » dans les champs du titre ou de l’auteur :

* title : (ontario) OR auteur : (ontario)

Cette recherche donne les résultats contenant le mot « lacs » dans tous les champs qui ne contiennent pas le mot « rivières » :

* lacs NOT rivières

### Métacaractères

Les métacaractères peuvent être utilisés pour remplacer un nombre quelconque de caractères (*) ou un caractère individuel (?) dans les champs textuels.

Par exemple, cette recherche permet d’obtenir des résultats contenant des mots commençant par « Canad » (tels que « Canada » et « Canadien ») :

* canad*

Vous pouvez également spécifier le nombre exact de caractères à remplacer en utilisant un point d’interrogation par caractère. Par exemple, cette recherche renvoie des résultats comprenant le mot « booléen » ou « boolien » :

* bool?en

### Flou

Un certain flou est déjà obtenu grâce à la racinisation appliquée aux champs à contenu textuel, tels que le titre, la description et les mots-clés. Par exemple, la racinisation signifie que les termes « économique » et « économie » sont traités comme équivalents. Vous pouvez augmenter le flou pour trouver des mots apparentés en utilisant un tilde, par exemple :

* (économ~)

En plus de renvoyer les résultats avec « économique » et « économie », cela renvoie également les résultats pour « économistes », « économiquement » et autres mots connexes.

### Intervalles

Vous pouvez préciser un intervalle numérique pour le champ de la date en utilisant des crochets.

Par exemple, cette recherche permet de retrouver des jeux de données publiés entre le 1er janvier 2020 et le 31 mars 2020 (inclusivement) :

* date : [2020-01-01 TO 2020-03-31]

Lors de la recherche de dates, notez que les dates AAAA-MM représenteront le premier du mois, et les dates AAAA représenteront le 1er janvier de cette année. Par exemple :

* date : [2020-01 TO 2020-04] cherche du 1er janvier 2020 au 1er avril 2020 inclusivement.
* date : [2019-12 TO 2020] cherche du 1er décembre 2019 au 1er janvier 2020 inclusivement.
* date : [2018 TO *]cherche du 1er janvier 2018 à aujourd’hui.
* date : [* TO 1999-12-31] cherche les jeux de données publiés avant l’an 2000.

Pour plus d’informations sur la syntaxe de requête, consultez la documentation d’ElasticSearch. Voici certaines exceptions à la syntaxe de la chaîne de requête ElasticSearch dans la mise en œuvre du DFDR :

* Les métacaractères dans le champ noms ne sont pas pris en charge.
* L’utilisation d’« expressions régulières » n’est pas prise en charge.
* Les champs spéciaux _exists_ : et _missing_ : ne sont pas pris en charge.

## 3. Interface de recherche avancée
L’interface de [recherche avancée](https://www.frdr-dfdr.ca/discover/html/adv-search.html?lang=fr) prend en charge les fonctionnalités suivantes :

* restreindre les résultats à un dépôt source précis ;
* chercher dans un champ particulier (Author, Date, Description, Keyword, Title) ;
* construire des requêtes booléennes en utilisant AND, OR et NOT (les opérateurs sont sensibles à la casse) ;
* préciser « Tous ces mots », « Un de ces mots » ou « Cette expression exacte » pour chaque terme de recherche.

L’interface de recherche avancée fournit une interface graphique permettant de générer des requêtes sélectionnées en utilisant la syntaxe de requête de recherche décrite précédemment.

## 4. Recherche par carte (beta)
La [recherche cartographique Geodisy (bêta)](https://geo.frdr-dfdr.ca/) du DFDR est un outil de découverte à code source ouvert qui permet aux utilisateurs de trouver des données ouvertes de chercheurs canadiens en utilisant une carte interactive. Les données de recherche sont parfois difficiles à trouver, et encore plus difficiles lorsqu’on cherche des données sur une région ou un lieu en particulier. Geodisy pallie cette difficulté en offrant aux utilisateurs une fenêtre sur le monde des données de recherche grâce à des outils cartographiques simples. Actuellement offerte en version bêta, la recherche cartographique inclut des jeux de données provenant de [dépôts indexés par le DFDR](https://www.frdr-dfdr.ca/discover/html/repository-list.html?lang=fr) avec des métadonnées de cadres englobants. Des jeux de données des dépôts Dataverse avec des métadonnées de localisation ou des fichiers géospatiaux sont également inclus. Le DFDR continuera d’élargir la collection de Geodisy pour inclure davantage des jeux de données provenant de la liste des dépôts institutionnels du DFDR.

# Résultats de recherche

Sur la page de résultats de la recherche, chaque jeu de données correspondant découvert est indiqué par :

* Le **titre du jeu de données**, qui est également un lien vers la « page de renvoi » du jeu de données.
* Le **nom et le logo du dépôt** dans lequel ce jeu de données est conservé. Le DFDR recueille des informations sur les jeux de données (enregistrements de métadonnées) qui se trouvent dans un certain nombre de dépôts de données de recherche canadiens. Le logo est également un lien qui mène à la page de renvoi de ce dépôt.
* Les **auteurs** du jeu de données.
* La **date** de publication du jeu de données.

Cliquez sur le bouton « Show Details » [afficher les détails] pour agrandir les métadonnées affichées pour le jeu de données.

Il y a deux types de résultats de recherche :

* Les jeux de données déposés directement dans la plateforme de dépôt du DFDR
* Les jeux de données moissonnés par le DFDR qui sont hébergés par des dépôts externes

## Pages de renvoi

Cliquez sur le nom du jeu de données pour accéder à la page de renvoi de ce jeu de données.

### Jeux de données moissonnés par le DFDR

Pour un jeu de données qui repose dans un dépôt externe, cliquez sur le nom du jeu de données pour accéder à cet autre dépôt où les règles et les autorisations d’accès ne sont plus contrôlées par le DFDR.

La page de renvoi varie selon les dépôts, mais comprend généralement :

* de l’information sur la licence en vertu de laquelle le jeu de données peut être utilisé ;
* de l’information sur la façon de citer le jeu de données ;
* tous les identifiants permanents du jeu de données, tels que des DOI ;
* de l’information sur la manière d’accéder aux fichiers de données affichables ou téléchargeables.

### Jeux de données déposés dans le DFDR

Les jeux de données déposés directement dans le DFDR peuvent contenir beaucoup plus de métadonnées que ce qui est affiché initialement. Pour accéder à l’enregistrement complet des métadonnées, cliquez sur « Show full record » [afficher enregistrement complet] au bas de la page de renvoi du DFDR.

Pour accéder aux fichiers de données directement déposés dans le DFDR, consultez la section de la page de renvoi du jeu de données intitulée « Files in Dataset » [fichiers dans le jeu de données]. Vous pouvez consulter les fichiers et dossiers de premier niveau, ainsi qu’agrandir les dossiers à l’aide de l’icône « + ». Certains fichiers peuvent être consultés ou prévisualisés à l’aide d’un navigateur web selon les capacités et les paramètres du navigateur. S’il y a plusieurs fichiers dans un dossier, la liste des fichiers sera tronquée. Globus Connect est nécessaire pour visualiser la liste complète et télécharger tous les contenus. Les fichiers plus petits peuvent être téléchargés directement à partir de la page de renvoi des données en utilisant votre navigateur. Toutefois, les fichiers très volumineux (plus de 10 Go) ne peuvent être téléchargés qu’à l’aide de Globus Connect. Les jeux de données comportant de nombreux fichiers ou une grande structure de dossiers doivent être téléchargés à l’aide de Globus Connect plutôt que de télécharger les fichiers un par un. Pour obtenir de l’aide pour l’installation et la configuration de Globus Connect, consultez la vidéo [Get started with FRDR : Download and Install Globus Connect Personal](https://www.youtube.com/watch?v=NJYTl3yhRl4&feature=youtu.be) ou communiquez à support@frdr-dfdr.ca.

## Filtrer

Vous pouvez filtrer et affiner les résultats par :

* Intervalle de dates
* Auteur
* Dépôt source

### Intervalle de dates

Il y a deux façons d’activer le filtre de l’intervalle de dates :

* Choisir l’intervalle de dates sur la visualisation ;
* Saisir l’année de début et l’année de fin dans les boîtes textuelles.

Après avoir indiqué l’intervalle de dates, cliquez sur « Apply filter » [appliquer filtre]. Les dates incluront l’année entière (par exemple, 2018 à 2020 inclura du 1er janvier 2018 au 31 décembre 2020).

Les deux méthodes préciseront un intervalle de dates pour l’année. Pour des intervalles de dates plus précis comprenant des mois et des jours, utilisez la syntaxe de recherche pour les intervalles.

### Auteur et dépôt source

Choisissez des valeurs dans le filtre pour inclure des résultats avec cette valeur. La sélection de plus d’une valeur dans le même filtre inclura les résultats avec toutes les valeurs sélectionnées.

Par défaut, les valeurs dans le filtre « auteur » et « dépôt source » sont triées par le nombre de résultats (en ordre décroissant). Cliquez sur « Load More » [charger plus] pour afficher des résultats supplémentaires.

En utilisant les flèches en haut, vous pouvez changer le filtre pour trier par le nombre de résultats (ascendant) ou le nom (ascendant ou descendant). Cependant, notez que le filtre n’inclut que les résultats qui ont déjà été affichés en cliquant sur « Load More » ; par conséquent, le filtre n’affichera pas une liste complète tant que vous n’aurez pas cliqué plusieurs fois sur « Load More ».

## Trier

La page de résultats de recherche comporte un menu déroulant permettant de déterminer l’ordre d’affichage des résultats de recherche. Le tri peut être défini par pertinence (par défaut), par titre ou par date, mais il est sensible à la casse. Les titres commençant par une lettre minuscule (par exemple, « dGPS ») ou par des caractères accentués (par exemple, « Évaluation de l’impact du programme… ») apparaîtront après « Zooplancton ».

Par défaut, les résultats de la recherche sont triés par « pertinence », un schéma de pondération qui favorise les correspondances trouvées dans le titre d’abord, ensuite le sujet, puis la description.
