#Avancée

## Pour les développeurs
La présente documentation s’adresse aux utilisateurs qui souhaitent développer des applications ou des sites web faisant appel à la technologie du DFDR.

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3>Dépôt d’éléments</h3>

        <strong> Note : Ces instructions sont pour Linux et Mac. </strong>

        <div class="mb-3">
            Vous pouvez utiliser le <a href="http://globus-sdk-python.readthedocs.io/en/stable/">Globus Python Client</a> pour interagir avec les services de Globus, y compris le DFDR. Avant de commencer, vous devez vous connecter au DFDR avec le compte que vous utiliserez pour déposer des données et vous assurer d’avoir les autorisations de dépôt.
        </div>

        <div class="mb-3">
            Installez <a href="https://www.python.org/downloads/">Python</a>
        </div>

        <div class="mb-3">
            Installez Virtualenv :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                sudo pip install virtualenv
            </div>
        </div>

        <div class="mb-3">
            Installez le module Globus SDK python :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                sudo pip install globus-sdk
            </div>
        </div>

        <div class="mb-3">
            Obtenez une copie du code client REST API en <a href="/repo/contactus?locale=fr">communiquant avec nous</a>. Actuellement, ce code n’est pas public.
        </div>

        <div class="mb-3">
            Changez le répertoire où le code client REST API a été téléchargé, puis installez-le :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                make install
            </div>
        </div>

        <div class="mb-3">
            Pour obtenir la liste des commandes qui vous sont disponibles, exécutez :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                ./globus-publish-client --help
            </div>
        </div>

        <div class="mb-3">
            Exécutez le code client REST API pour la première fois :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                ./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --list-schemas
            </div>
        </div>

        <div class="mb-3">
            Vous devrez copier et coller l’adresse URL dans votre navigateur web. Assurez-vous de vous connecter à partir de votre navigateur avec le compte de l’usager qui déposera les données. Vous pouvez copier le jeton d’authentification à la ligne de commande. Vous obtiendrez un fichier JSON contenant les jetons d’authentification de votre répertoire principal (mode par défaut 0600).
        </div>

        <div class="mb-3">
            Pour déposer un élément, le flux binaire du jeu de données doit déjà exister sur un point d’extrémité Globus accessible à l’usager connecté. Les métadonnées de l’élément doivent également exister dans le système de fichiers local en format JSON. 
        </div>

        <div class="mb-3">
            Vous devez déterminer dans quel groupe de stockage déposer les éléments. Vous pouvez obtenir la liste avec cette commande :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                ./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --list-collections
            </div>
        </div>

        <div class="mb-3">
            Vous obtiendrez une liste semblable à celle-ci :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                <div class="ml-1">[</div>
                    <div class="ml-3">{</div>
                        <div class="ml-5">"name": "Storage Group 1",</div>
                        <div class="ml-5">"id": 3</div>
                    <div class="ml-3">},</div>
                    <div class="ml-3">{</div>
                        <div class="ml-5">"name": "Storage Group 2",</div>
                        <div class="ml-5">"id": 5</div>
                    <div class="ml-3">}</div>
                <div class="ml-1">]</div>
            </div>
        </div>

        <div class="mb-3">
            L’identifiant du groupe de stockage est l’élément important; il sera nécessaire pour la commande de soumissions de l’élément. Dans ce cas, nous choisirons l’ID 3.
        </div>

        <div class="mb-3">
            La commande de soumission de l’élément (tous les arguments illustrés sont nécessaires) se détaille comme suit :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                <div>./globus-publish-client \</div>
                  <div class="ml-5">--service-url "https://demo.frdr-dfdr.ca/v1/api" \                   </div>
                  <div class="ml-5">--create-submission --collection-id 3 \                              </div>
                  <div class="ml-5">--metadata-file item.json \                                          </div>
                  <div class="ml-5">--transfer-data \                                                    </div>
                  <div class="ml-5">--data-endpoint endpoint-uuid-goes-here --data-directory "/my_data/" </div>
            </div>
        </div>

        <div class="mb-3">
            L’UUID doit pointer vers un point d’extrémité Globus Connect valide et actif, le chemin d’accès doit exister et le déposant doit avoir la permission de lire les données à partir du chemin d’accès de ce point d’extrémité.
        </div>

        <div class="mb-3">
            Cette commande produira un code JSON semblable à ceci :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                <div>Dataset record created:</div>
                <div>{</div>
                <div class="ml-5">"dc.date.issued": "2018-02-27",</div>
                <div class="ml-5">"dc.contributor.author": "Smith, Jane",</div>
                <div class="ml-5">"globus.shared_endpoint.path": "/1/unpublished/publication_64/",</div>
                <div class="ml-5">"dc.date.accessioned": "2018-02-27",</div>
                <div class="ml-5">"globus.shared_endpoint.name": "49eba39a-9987-11e7-ac63-22000a92523b",</div>
                <div class="ml-5">"id": 64,</div>
                <div class="ml-5">"dc.title": "My Dataset Title",</div>
                <div class="ml-5">"dc.publisher": "University of Somewhere",</div>
                <div class="ml-5">"dc.date.available": "2018-02-27"</div>
                <div>}</div>
            </div>
        </div>

        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    <div>Transfer request result: {</div>
                        <div class="ml-3">"message": "The transfer has been accepted and a task has been created and queued for execution",</div>
                        <div class="ml-3">"resource": "/transfer",</div>
                        <div class="ml-3">"code": "Accepted",</div>
                        <div class="ml-3">"request_id": "qNFY8ByuN",</div>
                        <div class="ml-3">"task_link": {</div>
                            <div class="ml-5">"resource": "task",</div>
                            <div class="ml-5">"title": "related task",</div>
                            <div class="ml-5">"DATA_TYPE": "link",</div>
                            <div class="ml-5">"rel": "related",</div>
                            <div class="ml-5">"href": "task/f25d0050-1cc2-11e8-b718-0ac6873fc732?format=json"</div>
                        <div class="ml-3">},</div>
                        <div class="ml-3">"submission_id": "f25d0051-1cc2-11e8-b718-0ac6873fc732",</div>
                        <div class="ml-3">"DATA_TYPE": "transfer_result",</div>
                        <div class="ml-3">"task_id": "f25d0050-1cc2-11e8-b718-0ac6873fc732"</div>
                    <div>}</div>
                    <div>id of transfer task is  f25d0050-1cc2-11e8-b718-0ac6873fc732</div>
                </div>
            </div>
        </div>

        <div class="mb-3">
            Vous devez noter l’ID du jeu de données. Dans ce cas, 64. Attendez de recevoir un courriel confirmant le transfert de vos données vers le DFDR et vous pourrez finaliser la soumission avec cette commande :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                ./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --submission-id 64 --submit --wait
            </div>
        </div>

        <div class="mb-3">
            Après le retour de la commande, vous obtiendrez le DOI de la soumission. Attendez 15 minutes pour la résolution du DOI, que vous pourrez copier dans un navigateur web pour voir la soumission dans le DFDR.
        </div>

        <div class="mb-3">
            Si la commande produit une erreur de délai d’attente, vous pouvez l’ignorer. Cependant, afin de chercher l’élément et d’en déterminer le DOI à cette étape, vous pouvez exécuter cette commande :
        </div>

        <div class="code-panel mb-3">
            <div class="dark-header">Code</div>
            <div class="code-body">
                ./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --dataset-id 64 --display-dataset
            </div>
        </div>

        <div class="mb-3">
            Ce n’est qu’après la <strong>soumission</strong> complète et réussie de l’élément que l’on parle de <strong>jeu de données</strong>. Ainsi, vous utilisez le même identifiant que précédemment dans la requête, mais cette fois les arguments réfèrent à un jeu de données.
        </div>

        <div class="mb-3">
            Par ailleurs, plutôt que de procéder à une soumission en 2 étapes distinctes, les indicateurs --submit et --wait peuvent être ajoutés à la commande originale. Cela démarrera le dépôt, le transfert des fichiers du jeu de données, ainsi que la soumission et la finalisation du transfert en une seule transaction. Toutefois, ce faisant, le script ne répondra pas pendant le transfert, ce qui rend cette méthode appropriée uniquement pour les petits jeux de données.
        </div>
    </div>
</div>












