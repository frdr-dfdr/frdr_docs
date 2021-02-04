## Ajout d’un dépôt au service de découverte du DFDR
Le service de découverte du dépôt fédéré de données de recherche DFDR est conçu pour indexer les dépôts de données de recherche au Canada. Parmi les dépôts indexés par le DFDR, il y a notamment:<br/>

* Des dépôts de données hébergées par des universités canadiennes servant de point de dépôt pour les chercheurs travaillant dans ces établissements ;
* Des portails gouvernementaux ; et
* Des dépôts propres à certains domaines hébergés par des centres de recherche généraux ou indépendants connus des chercheurs travaillant dans des domaines particuliers.

Le personnel du DFDR travaille à l’ajout de nouveaux dépôts indexés. Voici certains des critères qui rendent un dépôt plus susceptible d’être priorisé :

* La prise en charge de l’un des formats d’API de métadonnées actuellement mis en œuvre dans le moissonneur du DFDR. Pour l’instant, il s’agit de OAI-PMH, CKAN, CSW, MarkLogic, OpenDataSoft, Socrata et certains dépôts avec Google Sitemaps. La prise en charge de formats supplémentaires pourrait être ajoutée à l’avenir.
* Si un dépôt contient autre chose en plus des données de recherche — par exemple, certains dépôts institutionnels universitaires contiennent également des thèses et des articles avant impression — il devrait disposer d’une méthode permettant d’interroger uniquement les données de recherche.
* Un flux de travail plausible pour la recherche et l’extraction dans le dépôt d’ensembles de données en texte brut ou par mot-clé.
* La présence d’une personne-ressource fiable au sein de l’établissement hôte pour résoudre les problèmes techniques ou les problèmes de métadonnées.

Pour plus d’informations, veuillez consulter la politique sur le moissonnage de métadonnées.

Si vous souhaitez ajouter les métadonnées de votre dépôt au DFDR, veuillez communiquer à [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca?subject=query%20harvesting%20a%20repository) pour discuter du processus à suivre.

## ProQuest Central Discovery Index
Tous les jeux de données moissonnées par le dépôt fédéré de données de recherche (DFDR) sont maintenant disponibles via le ProQuest Central Discovery Index (CDI). Voici les instructions pour rendre le DFDR découvrable dans les interfaces de ProQuest, y compris Summon, Primo et Alma. En suivant les instructions, vous rendrez toutes les données du DFDR – plus de 117,000 ensembles de données – visible pour vos utilisateurs.<br/>

1. Naviguez au ProQuest Client Center de votre bibliothèque : https://clientcenter.serialssolutions.com/CC/Login/Default.aspx
2. Rechercher Base de données > Nom contient > FRDR <br/>
<img src="/docs/img/screenshots/feed_proquest/1.png" alt="ProQuest Client Center"/><br/>
3. Ouvrez l'enregistrement trouvé (code : MFDEJ). Cliquez sur Modifier et activez l'inclusion dans vos abonnements ProQuest, par exemple Summon.
<br/><img src="/docs/img/screenshots/feed_proquest/2.png" alt="ProQuest Subscription"/><br/>
4. À ce point-ci, tous les enregistrements du DFDR seront visibles pour vos utilisateurs.

Veuillez contacter [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca?subject=query%20ProQuest%20Central%20Discovery%20Index) si vous avez besoins d’aide.

Nous sommes conscients que les utilisateurs d'Alma ne sont pas en mesure d'ajouter la collection du DFDR en ce moment. De plus amples informations et des instructions mises à jour seront ajoutées dès que possible.

## Pour les développeurs
La présente documentation s’adresse aux utilisateurs qui souhaitent développer des applications ou des sites web faisant appel à la technologie du DFDR.

### API de recherche

L’outil de découverte du DFDR se base sur la [plateforme de recherche de Globus](https://docs.globus.org/api/search/), une application dorsale elle-même basée sur ElasticSearch. Le moissonneur du DFDR parcourt les flux de divers dépôts au Canada, y compris le DFDR lui-même, et crée des entrées dans l’index de recherche du DFDR.

L’API de recherche comporte deux formes. Les requêtes simples (par exemple celles qui ne définissent pas les facettes) peuvent être simplement envoyées à l’aide du formulaire GET. Les requêtes plus complexes peuvent être envoyées à l’aide du formulaire POST pour affiner les exigences de recherche. Dans les deux cas, la forme des résultats est la même.

----

*Méthode GET*

URL : https://search.api.globus.org/v1/index/frdr/search?q=term

Paramètres de la requête :

* (requis) **q** : Une chaîne de caractères; la requête à exécuter.
* (optionnel) **offset** : Décalage de base zéro de l’ensemble de résultats; utilisé pour la recherche. Défaut 0, Maximum 10 000.
* (optionnel) **limit**: Nombre maximal de résultats à retourner. Défaut 10.

----

*Méthode POST*

URL : https://search.api.globus.org/v1/index/frdr/search

Paramètre de la requête : Aucun

Paramètres POST :

* (requis) **Corps de la requête** : un document GSearchRequest JSON 

Exemple de GSearchRequest :

```javascript
{
  "@datatype": "GSearchRequest",
  "@version": "2016-11-09",
  "q": "(bears AND black) OR (trees AND green)",
  "offset": "20",
  "limit": "10",
  "advanced": true
}
```

----

*Syntaxe de la requête*

Deux formats de syntaxe pour les requêtes sont supportés : standard et avancé. Le format standard ne permet qu’un simple appariement textuel des requêtes. Toutes les requêtes seront traitées et les résultats qui correspondent le mieux au texte saisi seront retournés comme résultats. Ce format est généralement approprié dans les contextes où les usagers proposent leurs propres textes de requête. Le format avancé (utilisé lorsque les valeurs avancées sont configurées à "vrai") permet les plages, les expressions régulières, l’appariement de champs particuliers et d’autres modes plus sophistiqués. La syntaxe avancée est susceptible aux erreurs d’analyse syntaxique, telles que les plages mal formées ou les erreurs de nom de champs. Ainsi, cette méthode est appropriée lorsque les requêtes sont générées par machine ou si on aide un usager à construire une requête. La syntaxe est basée sur la syntaxe de la chaîne de caractères [Elastic search](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax) avec les exceptions suivantes : 1. Les caractères de remplacement dans les noms de champs ne sont pas pris en charge. Par exemple, la requête « book.*:(quick brown) » n’est pas permise. 2. Les termes de recherche « missing » et « exists » ne sont pas permis. 

### Dépôt d’éléments
** Note : Ces instructions sont pour Linux et Mac. Les instructions sous Windows sont en cours de développement. **

Vous pouvez utiliser le [Globus Python Client](http://globus-sdk-python.readthedocs.io/en/stable/) pour interagir avec les services de Globus, y compris le DFDR. Avant de commencer, vous devez vous connecter au DFDR avec le compte que vous utiliserez pour déposer des données et vous assurer d’avoir les autorisations de dépôt.

Installez [Python](https://www.python.org/downloads/).

Installez Virtualenv :

```bash
sudo pip install virtualenv
```

Installez le module Globus SDK python :

```bash
sudo pip install globus-sdk
```

Obtenez une copie du code client REST API en [communiquant avec nous](/docs/fr/contactez_nous/). Actuellement, ce code n’est pas public.

Changez le répertoire où le code client REST API a été téléchargé, puis installez-le :

```bash
make install
```

Pour obtenir la liste des commandes qui vous sont disponibles, exécutez :

```bash
./globus-publish-client --help
```

Exécutez le code client REST API pour la première fois :

```bash
./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --list-schemas
```

Vous devrez copier et coller l’adresse URL dans votre navigateur web. Assurez-vous de vous connecter à partir de votre navigateur avec le compte de l’usager qui déposera les données. Vous pouvez copier le jeton d’authentification à la ligne de commande. Vous obtiendrez un fichier JSON contenant les jetons d’authentification de votre répertoire principal (mode par défaut 0600).

Pour déposer un élément, le flux binaire du jeu de données doit déjà exister sur un point d’extrémité Globus accessible à l’usager connecté. Les métadonnées de l’élément doivent également exister dans le système de fichiers local en format JSON. 

Vous devez déterminer dans quel groupe de stockage déposer les éléments. Vous pouvez obtenir la liste avec cette commande :

```
./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --list-collections
```

Vous obtiendrez une liste semblable à celle-ci :

```
[
  {
    "name": "Storage Group 1",
    "id": 3
  },
  {
    "name": "Storage Group 2",
    "id": 5
  }
]
```

L’identifiant du groupe de stockage est l’élément important; il sera nécessaire pour la commande de soumissions de l’élément. Dans ce cas, nous choisirons l’ID 3.

La commande de soumission de l’élément (tous les arguments illustrés sont nécessaires) se détaille comme suit :

```bash
./globus-publish-client \
  --service-url "https://demo.frdr-dfdr.ca/v1/api" \
  --create-submission --collection-id 3 \
  --metadata-file item.json \
  --transfer-data \
  --data-endpoint endpoint-uuid-goes-here --data-directory "/my_data/"
```

L’UUID doit pointer vers un point d’extrémité Globus Connect valide et actif, le chemin d’accès doit exister et le déposant doit avoir la permission de lire les données à partir du chemin d’accès de ce point d’extrémité.

Cette commande produira un code JSON semblable à ceci :

```javascript
Dataset record created:
{
  "dc.date.issued": "2018-02-27",
  "dc.contributor.author": "Smith, Jane",
  "globus.shared_endpoint.path": "/1/unpublished/publication_64/",
  "dc.date.accessioned": "2018-02-27",
  "globus.shared_endpoint.name": "49eba39a-9987-11e7-ac63-22000a92523b",
  "id": 64,
  "dc.title": "My Dataset Title",
  "dc.publisher": "University of Somewhere",
  "dc.date.available": "2018-02-27"
}

Transfer request result: {
  "message": "The transfer has been accepted and a task has been created and queued for execution",
  "resource": "/transfer",
  "code": "Accepted",
  "request_id": "qNFY8ByuN",
  "task_link": {
    "resource": "task",
    "title": "related task",
    "DATA_TYPE": "link",
    "rel": "related",
    "href": "task/f25d0050-1cc2-11e8-b718-0ac6873fc732?format=json"
  },
  "submission_id": "f25d0051-1cc2-11e8-b718-0ac6873fc732",
  "DATA_TYPE": "transfer_result",
  "task_id": "f25d0050-1cc2-11e8-b718-0ac6873fc732"
}
id of transfer task is  f25d0050-1cc2-11e8-b718-0ac6873fc732
```

Vous devez noter l’ID du jeu de données. Dans ce cas, 64. Attendez de recevoir un courriel confirmant le transfert de vos données vers le DFDR et vous pourrez finaliser la soumission avec cette commande :

```bash
./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --submission-id 64 --submit --wait
```

Après le retour de la commande, vous obtiendrez le DOI de la soumission. Attendez 15 minutes pour la résolution du DOI, que vous pourrez copier dans un navigateur web pour voir la soumission dans le DFDR.

Si la commande produit une erreur de délai d’attente, vous pouvez l’ignorer. Cependant, afin de chercher l’élément et d’en déterminer le DOI à cette étape, vous pouvez exécuter cette commande :

```bash
./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --dataset-id 64 --display-dataset

```

Ce n’est qu’après la **soumission** complète et réussie de l’élément que l’on parle de **jeu de données**. Ainsi, vous utilisez le même identifiant que précédemment dans la requête, mais cette fois les arguments réfèrent à un jeu de données.

Par ailleurs, plutôt que de procéder à une soumission en 2 étapes distinctes, les indicateurs --submit et --wait peuvent être ajoutés à la commande originale. Cela démarrera le dépôt, le transfert des fichiers du jeu de données, ainsi que la soumission et la finalisation du transfert en une seule transaction. Toutefois, ce faisant, le script ne répondra pas pendant le transfert, ce qui rend cette méthode appropriée uniquement pour les petits jeux de données.

