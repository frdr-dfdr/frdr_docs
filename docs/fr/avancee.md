## Indexation des autres dépôts
Le Dépôt fédéré des données de recherche (DFDR) est conçu pour indexer des dépôts de données de recherche au Canada. On compte normalement trois catégories : les dépôts de données hébergés dans les universités canadiennes servant de point de dépôt pour les chercheurs de ces établissements; les portails de données des gouvernements et administrations publiques; et les dépôts propres à certains domaines dans les grands centres de recherche indépendants, connus de la communauté de la recherche de ces domaines.

Le personnel du DFDR travaille à ajouter de nouveaux dépôts à l’index. Les critères retenus en vue de la priorisation des dépôts comprennent :

* Le soutien pour l’un des formats d’API de métadonnées actuellement pris en charge par le moissonneur du DFDR. Actuellement, il s’agit d’OAI (normes de métadonnées DC, DDI et FGDC) et de CKAN; d’autres pourront s’ajouter.
* Si un dépôt ne contient pas uniquement des données, par exemple quelques dépôts universitaires contiennent des thèses et la version préimpression d’articles, il devrait offrir la possibilité de lancer une requête uniquement pour les données de recherche.
* La recherche plein texte ou par mots-clés et le repérage des jeux de données doit être supportée; même si le DFDR offre des options de recherche avancées, il est peu probablement que nous offrions l’indexation complexe de données de séquençage des gènes, ce qui a peu de valeur à l’extérieur d’une interface spécialisée.
* Un contact fiable à l’établissement hôte pour résoudre des problèmes techniques et les problèmes de métadonnées.


[Communiquez avec nous](mailto:support@frdr-dfdr.ca?subject=query%20re%20harvesting%20a%20repository) pour discuter du moissonnage par le DFDR des métadonnées de votre dépôt.

## Téléversement de métadonnées
Il est possible de téléverser des fichiers contenant une partie ou l’entièreté des métadonnées du jeu de données déposé, plutôt que d’entrer les métadonnées dans un formulaire web. Le fichier contenant vos métadonnées peut être créé avec un éditeur ou un script pourrait être rédigé pour générer un fichier de métadonnées.
Cliquez sur le bouton « Avancée » au bas de toutes les pages web d’entrée de métadonnées pour faire apparaître la boîte de dialogue.

Cliquez sur le bouton « Télécharger le gabarit » pour obtenir un fichier à éditer et à utiliser comme gabarit pour la rédaction d’un script. Le gabarit contient l’entièreté des champs de métadonnées valides pour le groupe de stockage. Le fichier gabarit est sous format JSON. Vous voudrez probablement « Enregistrer et quitter » votre soumission pour y revenir plus tard.
Pour fournir des métadonnées, éditez les valeurs des champs de métadonnées entre les guillemets (" ") ou ajoutez une ou plusieurs valeurs aux champs qui acceptent plus d’une valeur tel qu’indiqué par les crochets ([ ]).

La plupart des champs de métadonnées proviennent de la norme [Dublin Core](<http://dublincore.org/documents/dces/>) ou [DataCite](https://schema.datacite.org/). D’autres champs additionnels pourraient être ajoutés au DFDR et peuvent être ignorés ou laissés vides. Certains groupes de stockage spéciaux du DFDR pourraient avoir des normes de métadonnées supplémentaires ajoutées. Pour toute question concernant les champs de métadonnées, écrivez à <support@frdr-dfdr.ca>.

Si un champ a pour propriété «"required" :true», la valeur doit être fournie avant de déposer le jeu de données. Tous les champs, même les champs obligatoires, peuvent être omis du fichier lors du téléversement. Les champs obligatoires devront être saisis au moyen du formulaire web avant de déposer le jeu de données, mais il s’agit d’une façon simple de populer les champs communs (éditeur, auteurs, etc.) et de saisir les champs uniques manuellement (p. ex. le titre).

Une fois le fichier de métadonnées créé, enregistrez-le, puis retournez à la boîte de dialogue « Avancé » et cliquez sur le bouton « Parcourir » pour trouver votre fichier. Cliquez sur le bouton « Téléverser » pour lire le fichier de métadonnées.

Si un problème survient lors du téléversement ou du traitement du fichier de métadonnées, un message d’erreur s’affichera et les métadonnées contenues dans le fichier ne s’appliqueront pas au dépôt.

Par exemple, le gabarit de fichier de métadonnées que vous avez téléchargé pour un groupe de stockage pourrait avoir cette apparence :

```
{
    "dc": {
        "title": {
            "value": "",
            "required": true
        },
        "description": {
            "value": "",
            "required": false
        },
        "subject": {
            "value": [],
            "required": false
        },
        "contributor": {"author": {
            "value": [],
            "required": true
        }},
        "date": {"issued": {
            "value": "",
            "required": true
        }},
        "publisher": {
            "value": "",
            "required": true
        }
    }
}
```

Dans cet exemple, vous n’auriez qu’à éditer le fichier de gabarit avec les valeurs suivantes (ou écrire un script pour générer un fichier de métadonnées) pour le téléversement :

```
{
    "dc": {
        "title": {
            "value": "Collection of repository crawls"
        },
        "description": {
            "value": "A dataset collection of research data repository web site crawls."
        },
        "subject": {
            "value": ["Research Data", "Web site"]
        },
        "contributor": {"author": {
            "value": ["Tim Smith", "Jane Doe", "Susie Someone"]
        }},
        "date": {"issued": {
            "value": "2017-04-21",
        }},
        "publisher": {
            "value": "Compute Canada and CARL",
            "required": true
        }
    }
}
```

## Pour les développeurs
La présente documentation s’adresse aux utilisateurs qui souhaitent développer des applications ou des sites web faisant appel à la technologie du DFDR.

### API de recherche

L’outil de découverte du DFDR se base sur la [plateforme de recherche de Globus](https://docs.globus.org/api/search/), une application dorsale elle-même basée sur ElasticSearch. Le moissonneur du DFDR parcourt les flux de divers dépôts au Canada, y compris le DFDR lui-même, et crée des entrées dans l’index de recherche du DFDR.

L’API de recherche comporte deux formes. Les requêtes simples (par exemple celles qui ne définissent pas les facettes) peuvent être simplement envoyées à l’aide du formulaire GET. Les requêtes plus complexes peuvent être envoyées à l’aide du formulaire POST pour affiner les exigences de recherche. Dans les deux cas, la forme des résultats est la même.

----

*Méthode GET*

URL : https://search.api.globus.org/v1/index/frdr-test/search?q=term

Paramètres de la requête :

* (requis) **q** : Une chaîne de caractères; la requête à exécuter.
* (optionnel) **offset** : Décalage de base zéro de l’ensemble de résultats; utilisé pour la recherche. Défaut 0, Maximum 10 000.
* (optionnel) **limit**: Nombre maximal de résultats à retourner. Défaut 10.

L’index de recherche précis est dans l’adresse URL ci-dessus. « frdr-test » est pour la phase de tests et « frdr », pour la phase de production.

----

*Méthode POST*

URL : https://search.api.globus.org/v1/index/frdr-test

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

Deux formats de syntaxe pour les requêtes sont supportés : standard et avancé. Le format standard ne permet qu’un simple appariement textuel des requêtes. Toutes les requêtes seront traitées et les résultats qui correspondent le mieux au texte saisi seront retournés comme résultats. Ce format est généralement approprié dans les contextes où les usagers proposent leurs propres textes de requête. Le format avancé (utilisé lorsque les valeurs avancées sont configurées à "vrai") permet les plages, les expressions régulières, l’appariement de champs particuliers et d’autres modes plus sophistiqués. La syntaxe avancée est susceptible aux erreurs d’analyse syntaxique, telles que les plages mal formées ou les erreurs de nom de champs. Ainsi, cette méthode est appropriée lorsque les requêtes sont générées par machine ou si on aide un usager à construire une requête. La syntaxe est basée sur la syntaxe de la chaîne de caractères [ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax) avec les exceptions suivantes : 1. Lorsqu’un nom de champ est fourni sans se trouver dans un formulaire URI, il sera reconnu comme champ dans tout espace de nommage (préfixe URI) qui contient ce nom. Cette méthode est utile pour rechercher dans divers espaces de nommage lorsque ces espaces de nommage ont choisi des noms communs pour des champs sémantiquement similaires; cependant, cela peut porter à confusion lorsque les noms communs ne sont pas reconnus. Ce formulaire devrait donc être utilisé avec précaution. 2. Les caractères de remplacement dans les noms de champs ne sont pas pris en charge. Par exemple, la requête « book.*:(quick brown) » n’est pas permise. 3. Les termes de recherche « missing » et « exists » ne sont pas permis. 

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

Pour déposer un élément, le flux binaire du jeu de données doit déjà exister sur un point d’extrémité Globus accessible à l’usager connecté. Les métadonnées de l’élément doivent également exister dans le système de fichiers local en format JSON. Le fichier peut contenir des métadonnées pour tout élément, dans tout schéma pris en charge. Voici un exemple et notez que la première ligne est toujours requise :

```javascript
{
    "accept_license": true,
    "dc.contributor.author": "Smith, Jane",
    "datacite.creator.affiliation": "University of Somewhere",
    "dc.rights": "Creative Commons Public Domain Dedication (CC0 1.0) https://creativecommons.org/publicdomain/zero/1.0/",
    "dc.description": "Dataset description",
    "dc.publisher": "University of Somewhere",
    "dc.subject": ["keyword1", "keyword2"],
    "dc.title": "My Dataset Title"
}
```

Rappel : les spécifications JSON ne permettent pas les virgules de fin sur aucune ligne de donnée. Si vous ajoutez une virgule de fin, une erreur sera générée par le code client lors de la soumission de l’élément : "ValueError : Expecting property name enclosed in double quotes".
Voici les choix actuellement valides pour dc.rights :

```
Creative Commons Public Domain Dedication (CC0 1.0) https://creativecommons.org/publicdomain/zero/1.0/
Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) https://creativecommons.org/licenses/by-sa/4.0/
Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0) https://creativecommons.org/licenses/by-nc/4.0/
Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0) https://creativecommons.org/licenses/by-nc-sa/4.0/
Creative Commons Attribution 4.0 International (CC BY 4.0) https://creativecommons.org/licenses/by/4.0/
```

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

