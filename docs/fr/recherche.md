Le DFDR offre des fonctions de recherche puissantes pour rechercher des jeux de données publiés dans les dépôts de données de recherche au Canada, tant dans le DFDR lui-même que dans une panoplie d’autres dépôts dont les métadonnées sont moissonnées par le DFDR.

Une boîte de recherche est disponible sur plusieurs pages web du DFDR. Lancez une recherche en saisissant des termes et en cliquant sur l’icône de recherche. Les résultats apparaissent sur une page montrant les jeux de données pertinents avec des facettes permettant d’affiner les résultats.

Vous pouvez filtrer et raffiner les résultants par :

* Plage de date
* Auteur
* Source

Il existe trois façons de rechercher :

### 1. Recherche de base
Entrez un ou plusieurs termes de recherche dans la boîte. Les résultats (au moyen de l’opérateur logique OU) dresseront la liste de tous les jeux de données correspondant à l’un ou l’autre des termes de recherche.

Prenez note que les caractères accentués sont considérés comme distincts des caractères non accentués. Ainsi, une recherche pour Quebec retournera des résultats différents qu’une recherche pour Québec.

### 2. Interface de recherche avancée
L’interface de [recherche avancée](https://www.frdr-dfdr.ca/discover/html/adv-search.html?lang=fr) prend en charge les fonctionnalités suivantes :

* restreindre les résultats à un dépôt source précis ;
* chercher dans un champ particulier (Author, Date, Description, Keyword, Title) ;
* construire des requêtes booléennes en utilisant AND, OR et NOT (les opérateurs sont sensibles à la casse) ;
* préciser « Tous ces mots », « Un de ces mots » ou « Cette expression exacte » pour chaque terme de recherche.

L’interface de recherche avancée fournit une interface graphique permettant de générer des requêtes sélectionnées en utilisant la syntaxe de requête de recherche décrite précédemment.

### 3. Recherche par syntaxe
Les chercheurs peuvent préciser une requête plus complexe au moyen d’un sous-ensemble de commandes de la syntaxe d’[ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax). Cette syntaxe est puissante, mais ne laisse pas place à l’erreur.

Un exemple de requête serait :

```
title:(fish AND stock~) AND date:[2016-01-01 TO *]
```

Les exceptions à la syntaxe d’[ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax) propres au DFDR comprennent :

* Les caractères de remplacement dans les noms de champs ne sont pas pris en charge
* Le recours aux "expressions régulières" n’est pas pris en charge
* L’utilisation de valeurs « boost » inférieures à 1 (à l’aide de nombres entiers non positifs) n’est pas prise en charge
* Les champs spéciaux _exists_ : et _missing_ : ne sont pas pris en charge

Prenez note que la recherche par syntaxe s’applique à tous les champs de métadonnées dans le DFDR et non seulement aux champs disponibles dans l’interface de Recherche avancée. Par exemple :

```
http://dublincore.org/documents/dcmi-terms#contributor : Smit*
```

Cela comprendrait tous les champs de métadonnées (pleinement définis) créés pour un groupe de stockage particulier dans le DFDR. Veuillez noter que différents dépôts rendent publics différents champs de métadonnées aux fins de moissonnage et qu’il y a des désaccords entre dépôts sur la façon d’utiliser les champs ou encore que certains champs ne sont pas remplis.

## Visualisation ou téléchargement
Sur la page de résultats, chaque jeu de données correspondant à la requête est affiché accompagné des éléments suivants :

* Le **nom du jeu de données**, qui sert également de lien vers la « page d’accueil » du jeu de données.
* Le **nom et le logo du dépôt** où le jeu de données est conservé. Le DFDR recueille l’information concernant chaque jeu de données (métadonnées) dans de nombreux autres dépôts de données de recherche au Canada. Le DFDR ne contient pas les jeux de données. Le logo sert également de lien vers la page d’accueil du dépôt.
* Les **auteurs** du jeu de données
* En cliquant sur le bouton « +Montrer Détails », vous affichez des métadonnées additionnelles sur le jeu de données.

Si vous cliquez sur le nom du jeu de données, vous serez amené à la page d’accueil du jeu de données. Veuillez noter que pour les jeux de données hébergés dans un autre dépôt, si vous cliquez sur le nom du jeu de données, vous serez amené vers cet autre dépôt où les règles et les permissions d’accès ne sont pas contrôlées par le DFDR.

Les pages d’accueil varient pour chaque dépôt, mais comprennent généralement :

* de l’information sur la licence d’utilisation du jeu de données,
* de l’information sur la norme de citation du jeu de données,
* les identifiants persistants de ce jeu de données, tels que son DOI, et
* de l’information sur la manière d’accéder aux fichiers de données pour les visualiser ou les télécharger.

Les jeux de données déposés directement dans le DFDR pourront être assortis de métadonnées plus riches que ce qui est affiché sur la page de recherche. Pour obtenir les métadonnées complètes, cliquez sur le bouton « Affichage détaillé » au bas de la page d’accueil du DFDR.

<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/PvmFxQyMPlQ?list=PLX9EpizS4A0suoSV2N0nn9parl96xHPkz&index=2&list=PLX9EpizS4A0suoSV2N0nn9parl96xHPkz&index=3?cc_lang_pref=fr&cc_load_policy=1" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>

Pour accéder aux fichiers de données déposés directement dans le DFDR, veuillez consulter la section de la page d’accueil du jeu de données intitulée « Fichiers dans le jeu de données ». On peut y consulter les fichiers et dossiers du répertoire principal et développer les dossiers à l’aide de l’icône « + ». Certains fichiers sont accessibles, et peuvent être prévisualisés, dans votre navigateur web. Le type de fichier que l’on peut prévisualiser dépend des capacités et des paramètres de votre navigateur web. Les petits fichiers peuvent être téléchargés par votre navigateur. Cependant, les fichiers volumineux (de plus de 10 Go) doivent être téléchargés à l’aide de Globus Connect. Les jeux de données comprenant de nombreux fichiers ou ayant une arborescence importante devraient être téléchargés à l’aide de Globus Connect plutôt que de télécharger les fichiers un à un.

## Trier les résultats de recherche
La page de résultats comporte un menu déroulant pour préciser l’ordre de tri des résultats obtenus. Le tri peut se faire par auteur, titre ou date. Veuillez noter que le tri est sensible à la casse. Les titres (ou auteurs) débutant par une lettre minuscule (p. ex. « dGPS ») ou avec des caractères accentués (p. ex. « Évaluation de l’impact du programme... ») apparaîtront après « Zooplankton ».

Par défaut, les résultats de recherche sont triés par « pertinence », soit une pondération qui donne la priorité à l’information contenue dans les titres d’abord, puis les sujets, puis les descriptions.

L’ordre des résultats de recherche peut être modifié avec l’opérateur « boost » (consultez [Recherche par syntaxe](recherche.md#3-recherche-par-syntaxe) et [syntaxe de requêtes ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax).)

## Rechercher les métadonnées personnalisées
Le DFDR peut prendre en charge des schémas de métadonnées supplémentaires de sorte que les métadonnées propres à un domaine peuvent être enregistrées avec vos jeux de données, permettant ainsi d’effectuer une recherche en fonction des valeurs de ces champs de métadonnées. Par exemple, un schéma de métadonnées pour les observations astronomiques, le [Common Archive Observation Model (CAOM-2.2)](http://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/caom2/), a été ajouté à la version Démo du DFDR, ainsi qu’un jeu de données organisé selon ce schéma.

Pour effectuer une recherche dans ces métadonnées personnalisées, la requête doit comprendre le chemin complet vers la norme de métadonnées ainsi que la ou les valeurs des champs recherchés. Par exemple, la requête suivante précise la valeur de « 47 » pour le champ de métadonnée « sequenceNumber » de la norme « caom2/1.0 », dont la norme a été copiée dans l’instance de démonstration [du DFDR](http://demo.frdr-dfdr.ca/).

```
https://www.frdr.ca/schema/caom2/1.0/#sequenceNumber : 47
```

Cette recherche pourra repérer un jeu de données du James Clerk Maxwell Telescope (dans [demo.frdr-dfdr.ca](https://demo.frdr-dfdr.ca/)). Les champs de métadonnées autres que les éléments de base de Dublin Core peuvent être consultés en cliquant sur le bouton « Affichage détaillé » au bas de la page d’accueil du jeu de données.

Les champs de métadonnées personnalisés ne sont pas accessibles à partir des menus déroulants de la page de Recherche avancée et ne sont pas accessibles comme facette de recherche. Cependant, tous les schémas de métadonnées personnalisés sont indexés dans le DFDR et disponibles pour la recherche.

### 4. Recherche par carte (beta)
La [recherche cartographique Geodisy (bêta)](https://geo.frdr-dfdr.ca/) du DFDR est un outil de découverte à code source ouvert qui permet aux utilisateurs de trouver des données ouvertes de chercheurs canadiens en utilisant une carte interactive. Les données de recherche sont parfois difficiles à trouver, et encore plus difficiles lorsqu’on cherche des données sur une région ou un lieu en particulier. Geodisy pallie cette difficulté en offrant aux utilisateurs une fenêtre sur le monde des données de recherche grâce à des outils cartographiques simples. Actuellement offerte en version bêta, la recherche cartographique inclut des jeux de données provenant de [dépôts indexés par le DFDR](https://www.frdr-dfdr.ca/discover/html/repository-list.html?lang=fr) avec des métadonnées de cadres englobants. Des jeux de données des dépôts Dataverse avec des métadonnées de localisation ou des fichiers géospatiaux sont également inclus. Le DFDR continuera d’élargir la collection de Geodisy pour inclure davantage des jeux de données provenant de la liste des dépôts institutionnels du DFDR.
