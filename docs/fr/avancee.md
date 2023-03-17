## Pour les développeurs
La présente documentation s’adresse aux utilisateurs qui souhaitent développer des applications ou des sites web faisant appel à la technologie du DFDR.

### Dépôt d’éléments
** Note : Ces instructions sont pour Linux et Mac. **

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

Obtenez une copie du code client REST API en [communiquant avec nous](/repo/contactus?locale=fr). Actuellement, ce code n’est pas public.

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

