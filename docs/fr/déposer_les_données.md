# Déposer les données

Une fois connecté au DFDR, vous avez accès au Tableau de bord de publication des données. Il affiche l’état de vos soumissions de jeux de données : En cours, Déposée, et Terminée. Pour les jeux de données en cours, vous avez l’option de Continuer, de Voir ou de Supprimer la soumission. Les jeux de données déposés sont en attente de curation. Les jeux de données terminés sont acceptés dans le DFDR et sont recherchables au moyen de l’interface de recherche. Vous pouvez initier une nouvelle soumission en tout temps.

Voici les étapes requises pour initier une soumission dans le DFDR :

* [Sélection d'un groupe de stockage pour la soumission](déposer_les_données.md#selection-dun-groupe-de-stockage)
* [Sélection de la licence d'utilisation des données](déposer_les_données.md#licences-dutilisation-des-donnees)
* [Ajout de collaborateurs](déposer_les_données.md#ajout-de-collaborateurs)
* [Saisie de métadonnées relatives à vos données](déposer_les_données.md#saisie-de-metadonnees)
* [Évaluation externe](déposer_les_données.md#evaluation-externe)
* [Indication d'une période d’embargo (le cas échéant)](déposer_les_données.md#indication-dune-periode-dembargo)
* [Transfert de jeu de données dans le DFDR](déposer_les_données.md#transfert-de-jeux-de-donnees)
* [Finalisation de la soumission](déposer_les_données.md#finaliser-de-la-soumission)

Vous pouvez arrêter le processus de soumission en tout temps, enregistrer l’information entrée et y revenir plus tard. Un [Digital Object Identifier (DOI)](https://www.doi.org/) est assigné à la soumission dès que vous initiez un dépôt de jeu de données. Les DOI de tous les dépôts en cours s’affichent dans la liste des soumissions en cours. Ceci vous permet de partager le DOI de votre jeu de données avec un organisme subventionnaire ou un éditeur immédiatement. Veuillez noter que le lien vers le DOI ne sera pas actif tant que le dépôt ne sera pas approuvé par un curateur. Une fois la soumission terminée, vous ne pourrez plus apporter de modification aux données et aux métadonnées. Tout changement aux données ou aux métadonnées après la soumission devra être apporté en communiquant avec un curateur à [curators@frdr-dfdr.ca](mailto:curators@frdr-dfdr.ca).

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="selection-d’un-groupe-de-stockage">Sélection d’un groupe de stockage</h2>

        <div class="mb-3">
            Les jeux de données du DFDR sont organisés en collections, appelées groupes de stockage. Il existe deux types de groupes de stockage : le groupe de stockage par défaut et les groupes de stockage spéciaux. Le groupe par défaut, <strong>General/Général</strong>, sera présélectionné au commencement d’un dépôt de données.
        </div>

        <div class="mb-3">
            Les groupes de stockage spéciaux permettent aux établissements, aux groupes de recherche ou aux projets spéciaux de créer une collection pour leurs jeux de données dans le DFDR. Chaque groupe de stockage spécial apparaîtra comme dépôt dans la liste des <a href="https://www.frdr-dfdr.ca/repo/community/frdr-dfdr?locale=fr">dépôts de données de recherche au Canada</a> indexés par le DFDR. Les groupes de stockage spéciaux peuvent utiliser un modèle de dépôt personnalisé qui pourrait, par exemple, remplir à l’avance des éléments de métadonnées ou utiliser des champs de métadonnées supplémentaires autres que les éléments Dublin Core ou DataCite par défaut. L’option de dépôt dans des groupes de stockage spéciaux sera limitée aux utilisateurs autorisés. Si vous souhaitez avoir accès à un groupe de stockage spécial, ou si vous croyez que vous devriez avoir accès à un groupe de stockage spécial existant, veuillez communiquer avec <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a>.
        </div>
    </div>
</div>


<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="licences-d’utilisation-des-donnees">Licences d’utilisation des données</h2>

        <div class="mb-3">
            Les usagers qui soumettent des jeux de données peuvent choisir la licence d’utilisation qui s’appliquera aux autres usagers. Les conditions de licence sont indiquées sur la page d’accueil des jeux de données dans le DFDR et font partie intégrante des métadonnées.
        </div>

        <div class="mb-3">
            Les déposants doivent choisir une licence. Voici les options par défaut :
        </div>

        <ul>
            <li><a href="https://creativecommons.org/publicdomain/zero/1.0/deed.fr">Creative Commons Transfert dans le Domaine Public (CC0 1.0)</a></li>
            <li><a href="https://creativecommons.org/licenses/by/4.0/deed.fr">Creative Commons Attribution 4.0 International (CC BY 4.0)</a></li>
        </ul>

        <div class="mb-3">
            Les licences suivantes peuvent également être choisies à partir de l’onglet « Montre plus » :
        </div>

        <ul>
            <li><a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr">Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 International (CC BY-SA 4.0)</a></li>
            <li><a href="https://creativecommons.org/licenses/by-nc/4.0/deed.fr">Creative Commons Attribution - Pas d’Utilisation Commerciale 4.0 International (CC BY-NC 4.0)</a></li>
            <li><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr">Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International (CC BY-NC-SA 4.0)</a></li>
            <li><a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr">Creative Commons Attribution - Pas d’Utilisation Commerciale - Pas de Modification 4.0 International (CC BY-NC-ND 4.0)</a></li>
        </ul>

        <div class="mb-3">
            Prenez note qu’un curateur pourrait vous demander pourquoi vous n'avez pas sélectionné l’une des licences par défaut. Pour d’autres conditions de licence ou pour des conditions de licence personnalisées, écrivez à <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a>.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="ajout-de-collaborateurs">Ajout de collaborateurs</h2>

        <div class="mb-3">
            L’ajout de collaborateurs est une excellente façon pour plusieurs personnes d’entrer des métadonnées et de télécharger des fichiers pour une présentation. Vous pouvez inviter quelqu’un à contribuer à une présentation seulement s’il a ouvert au moins une fois une session dans le DFDR. Vous aurez besoin de l’adresse de courriel qu’il a utilisée pour s’inscrire auprès du DFDR, laquelle se trouve sur sa page de profil.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/MonProfil.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/MonProfil.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            Pour ajouter un collaborateur, amorcez ou reprenez une présentation au tableau de bord lié à la publication de données. Avancez jusqu’à ce que vous atteigniez l’étape de collaboration, entrez son adresse de courriel, puis cliquez sur le bouton « Inviter ». Le collaborateur recevra par courriel un avis contenant un lien, sur lequel il pourra cliquer pour accepter votre invitation.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/InviterAjouter.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/InviterAjouter.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            Il pourra également accepter votre invitation à partir de son propre tableau de bord lié à la publication de données en ouvrant une session, puis en cliquant sur « Accepter » à côté du titre de le jeu de données. Vous recevrez un courriel lorsque votre invitation aura été acceptée ou rejetée.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/InviterAccepter.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/InviterAccepter.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            Après avoir accepté l’invitation, le collaborateur pourra reprendre la présentation à partir du tableau de bord lié à la publication de données et la modifier. Bien que plusieurs collaborateurs puissent travailler à la même présentation, les métadonnées devraient être ajoutées ou modifiées par une seule personne à la fois. La dernière personne à sauvegarder la présentation remplacera les changements apportés aux métadonnées par d’autres.
        </div>

        <div class="mb-3">
            Vous pouvez inviter ou retirer des collaborateurs à tout moment pendant le processus de présentation. Pour ce faire, cliquez sur le bouton « Collaborer » en haut de la page après avoir repris une présentation en cours. Veuillez noter que les collaborateurs ne peuvent pas inviter d’autres personnes à contribuer. Seul le créateur de la présentation initiale peut ajouter et retirer des personnes à l’onglet « Collaborer ».
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/InviterRetour.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/InviterRetour.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="saisie-de-metadonnees">Saisie de métadonnées</h2>

        <div class="mb-3">
            Les métadonnées, comme le titre, les auteurs et leurs affiliations, les mots-clés, les dates et la description, sont utilisées pour décrire votre jeu de données. Les métadonnées aident d’autres personnes à découvrir et à réutiliser les données. Plus vous fournissez de métadonnées, plus il sera facile pour quelqu’un d’autre de les découvrir et de les réutiliser.
        </div>

        <div class="mb-3">
            Un formulaire de soumission de métadonnées est fourni pour vous guider dans le processus de saisie des métadonnées. Veuillez consulter la section <a href="description_de_vos_données.md">Description de vos données</a> pour obtenir des renseignements détaillés sur la façon de remplir le contenu de chaque champ. Lorsque vous travaillez au formulaire de soumission, vous pouvez afficher plus d’information sur chaque champ de métadonnées en plaçant le pointeur de votre souris sur l’étiquette.
        </div>

        <div class="mb-3">
            Vous pouvez naviguer vers l’avant et vers l’arrière dans le formulaire de soumission des métadonnées en utilisant les boutons au bas ou en haut de la page. Lorsque vous naviguez vers un autre écran dans le formulaire de soumission des métadonnées, les métadonnées de votre page actuelle seront automatiquement sauvegardées.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/Navbar.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/Navbar.png" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/PrecedentAnnulerSuivant.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/PrecedentAnnulerSuivant.png" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            Les <strong>champs obligatoires</strong> sont marqués d’un astérisque.
        </div>

        <div class="mb-3">
            Certains champs de métadonnées sont <strong>reproductibles</strong>. Pour ces champs, vous pouvez ajouter des entrées en cliquant sur Ajouter et supprimer des entrées en cliquant sur Supprimer l’entrée.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/Repeatable.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/Repeatable.png" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            D’autres champs permettent d’ajouter plusieurs valeurs dans le champ en saisissant un point-virgule (;) ou en appuyant sur la touche Entrée. Par exemple, vous pouvez ajouter plusieurs affiliations pour le même auteur :
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/Tags.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/Tags.png" class="screenshot"/>
            </a>
        </div>
    </div>
</div>











<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="évaluation-externe">Évaluation externe</h2>

        <div class="mb-3">
            Tous les jeux de données soumis au Dépôt fédéré de données de recherche (DFDR) font l’objet d’une évaluation interne appelée curation avant d’être approuvés pour la publication. Vous pouvez également choisir de partager votre jeu de données avec une évaluatrice ou un évaluateur externe, tel qu’une rédactrice ou un rédacteur en chef de périodique ou une ou un collègue, avant qu’il ne soit rendu public.
        </div>

        <div class="mb-3">
            Pour ce faire, dans l’onglet « Accès » de l’interface de soumission, répondez « oui » à la question « Ce jeu de données aura-t-il besoin d’une période d’évaluation? ». Vous devrez alors ajouter une date d’embargo et une raison d’embargo, par exemple, « Le jeu de données sera partagé aux fins d’évaluation externe ». L’embargo protégera vos fichiers de données contre tout accès public tout au long du processus d’évaluation, mais vous pourrez donner un accès sélectif à vos données en invitant des évaluatrices ou évaluateurs.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/ExternalReview.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/ExternalReview.png" alt="Évaluation externe" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            Votre jeu de données sera placé sous embargo une fois le processus de curation terminé. Vous pourrez alors inviter des évaluatrices ou évaluateurs externes à accéder à votre soumission. Les évaluatrices ou évaluateurs externes n’ont pas besoin d’avoir un compte dans le DFDR. Pour savoir comment les inviter, veuillez consulter la documentation sur <a href="évaluation_externe.md">[l’évaluation externe des jeux de données</a>.
        </div>
    </div>
</div>





<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="indication-d’une-periode-d’embargo">Indication d’une période d’embargo</h2>

        <div class="mb-3">
            Si un jeu de données doit être protégé pendant un certain temps, notamment en raison de restrictions imposées par un éditeur ou un organisme de financement, vous pouvez établir un embargo et préciser la date à laquelle les données deviendront automatiquement accessibles. Pendant la période d’embargo, vos fichiers de données ne seront pas visibles ni disponibles pour téléchargement.
        </div>

        <div class="mb-3">
            Un embargo empêchera toujours la consultation ou le téléchargement de vos fichiers de données, mais vous pouvez choisir si les métadonnées qui décrivent votre jeu de données (titre, auteurs, description, etc.) sont accessibles au public ou non. Sous Advanced → Metadata Access, vous pouvez choisir si les métadonnées sont :
        </div>

        <ul>
            <li><i>Interrogeables et visualisables</i> : votre jeu de données sera accessible dans le DFDR et d’autres outils de recherche sur le Web. Le DOI mènera à votre page de renvoi des données, et les métadonnées qui décrivent votre jeu de données seront visibles. Vos fichiers de données ne seront ni visibles ni téléchargeables. Il s’agit de l’option par défaut.</li>

            <li><i>Visualisables avec un lien</i> : votre jeu de données ne sera pas repérable dans les résultats de recherche. Votre page de renvoi des données et les métadonnées qui décrivent votre jeu de données ne seront accessibles qu’en utilisant le DOI ou l’URL de la page de renvoi. Vos fichiers de données ne seront ni visibles ni téléchargeables.</li>

            <li><i>Visualisables uniquement pour moi</i> : votre jeu de données ne sera pas repérable dans les résultats de recherche. Votre page de renvoi des données et les métadonnées qui décrivent votre jeu de données ne sont pas publiques et ne peuvent être consultées que par vous et vos collaborateurs, lorsque vous ouvrez une session dans le DFDR. Vos fichiers de données ne seront ni visibles ni téléchargeables.</li>
        </ul>

        <div class="mb-3">
            Les auteurs recevront un avis un mois avant l’expiration de l’embargo. Il est possible de demander une prolongation. Le défaut de répondre entraîne la diffusion automatique de le jeu de données sous embargo à la date spécifiée.
        </div>

        <div class="mb-3">
            Le DFDR permet des embargos pouvant aller jusqu’à un an. Toutes les autres demandes d’embargo doivent être approuvées par le gestionnaire de services du DFDR. Veuillez communiquer avec <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> si vous avez besoin de demander un embargo prolongé.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="demander-une-preservation-a-long-terme">Demander une préservation à long terme</h2>

        <div class="mb-3">
            Afin de s’assurer que tous les jeux de données soumis au DFDR sont préservés là où il se doit, le DFDR a mis en œuvre un processus d’évaluation qui assurera une gestion responsable et durable de l’accès à long terme. Tous les jeux de données déposés auprès du DFDR seront considérés pour une préservation à long terme.
        </div>

        <div class="mb-3">
            En tant que déposant, vous pouvez participer au processus d’évaluation en répondant à la question de préservation facultative pendant le processus de soumission : « Avez-vous l’intention de conserver ce jeu de données pendant plus de 10 ans? » (O/N). Vous pouvez également laisser un commentaire décrivant, par exemple, la valeur sociale, scientifique ou historique potentielle à long terme de votre jeu de données.
        </div>

        <div class="mb-3">
            Si vous n’êtes pas certain de la valeur à long terme de votre jeu de données, vous pouvez sauter cette question. Soyez toutefois assurés que votre jeu de données sera évalué pour une préservation à long terme de façon indépendante par l’équipe de curation du DFDR en consultation avec le coordonnatrice de la préservation du DFDR. Si vous avez des questions au sujet de ce processus, n’hésitez pas à communiquer avec <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a>.
        </div>
    </div>
</div>


<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="transfert-de-jeux-de-donnees">Transfert de jeux de données</h2>

        <h3>Téléversement à partir d’un navigateur (petits jeux de données)</h3>

        <div class="mb-3">
            La présente section couvre les activités suivantes :
        </div>

        <ul>
            <li>Comment téléverser des fichiers à l’aide d’un navigateur web</li>
            <li>Comment supprimer des fichiers</li>
        </ul>

        <h4>Comment téléverser des fichiers à l’aide d’un navigateur web</h4>
        <h5>Téléverser avec un gestionnaire de fichiers</h5>

        <ul>
            <li>Cliquez sur le bouton « Cliquez pour choisir le fichier » et utilisez le gestionnaire de fichiers pour trouver le fichier que vous voulez téléverser.</li>
            <li>Cliquez sur le bouton choisir pour démarrer le téléversement.</li>
            <li>Vous pouvez choisir plus d’un fichier en cliquant sur le premier fichier, en appuyant sur la touche Majuscule, puis en cliquant sur le dernier fichier que vous voulez téléverser. Si vous devez téléverser différents fichiers dans une liste, sans qu’ils soient adjacents, appuyez sur la touche Crtl sous Windows ou sur la touche Command sous Mac, puis cliquez sur les fichiers que vous voulez téléverser.</li>
        </ul>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/ClickToUpload.png" class="screenshot-lightbox">
                <img src="/docs/img/screenshots/deposer_les_donees/ClickToUpload.png" alt="Screenshot" style="max-width: 160px"/>
            </a>
        </div>

        <ul>
            <li>Une barre de progression apparaitra pour le téléversement. Cette étape peut être très rapide s’il s’agit d’un petit fichier.</li>
        </ul>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/Uploading.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/Uploading.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            <ul>
                <li>Puis, il y aura une icône en rotation si le fichier a été téléversé avec succès et que le système est en instance de traitement.</li>
            </ul>
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/UploadProcessing.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/UploadProcessing.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <ul>
            <li>L’icône en rotation disparaîtra et une icône supprimer s’affichera à côté du nom du fichier une fois le téléversement terminé.</li>
        </ul>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/UploadFinished.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/UploadFinished.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <ul>
            <li>Si tous les fichiers ont été téléversés, vous pourrez passer à l’étape suivante.</li>
        </ul>
    </div>
</div>

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3>Téléverser des dossiers ou plusieurs fichiers à l’aide de la fonction glisser-déposer</h3>

        <div class="mb-3">

            <div class="video-wrap">
                <a href="https://www.youtube.com/watch?v=ewhEezAObqs&list=PLX9EpizS4A0suoSV2N0nn9parl96xHPkz&cc_lang_pref=fr&cc_load_policy=1" target="_blank">
                  <div class="video-play-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewbox="0 0 150 150" version="1.1">
                        <path stroke="#cccccc" stroke-width="2px" d="M150,0A150,150,0,1,0,300,150,150,150,0,0,0,150,0Zm0,290A140,140,0,1,1,290,150,140,140,0,0,1,150,290Z" transform="matrix(0.5,0,0,0.5,0,0)"></path>
                        <polygon stroke="#cccccc" stroke-width="2px" points="225 150 110 80 110 225 225 150" transform="matrix(0.5,0,0,0.5,0,0)"></polygon>
                    </svg>
                  </div>
                  <img class="video-placeholder" src="/docs/img/video_placeholders/fr/televerser_jeu_de_donnees.png" alt="aperçu vidéo: Téléverser un jeu de données">
                </a>
            </div>
        </div>

        <ul>
            <li>Pour téléverser un dossier, démarrer votre gestionnaire de fichiers.</li>
            <li>Localisez les fichiers ou les dossiers que vous souhaitez téléverser.</li>
            <li>Glissez-les dans votre navigateur web dans la zone de pointillés avec le texte « Faites glisser et déposez les fichiers ici » pour démarrer le téléversement.</li>
        </ul>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/DragAndDrop.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/DragAndDrop.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <ul>
            <li>Une barre de progression apparaitra pour le téléversement de chaque fichier. Cette étape peut être très rapide s’il s’agit d’un petit fichier.</li>
        </ul>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/Uploading.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/Uploading.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <ul>
            <li>Puis, il y aura une icône en rotation si le fichier a été téléversé avec succès et que le système est en instance de traitement.</li>
        </ul>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/UploadProcessing.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/UploadProcessing.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <ul>
            <li>L’icône en rotation disparaîtra et une icône supprimer s’affichera à côté du nom du fichier une fois le téléversement terminé.</li>
        </ul>

        <div class="mb-3">
            <a href="/docs/img/screenshots/deposer_les_donees/UploadFinished.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/deposer_les_donees/UploadFinished.png" alt="Screenshot" class="screenshot"/>
            </a>
        </div>

        <ul>
            <li>Si tous les fichiers ont été téléversés, vous pourrez passer à l’étape suivante.</li>
        </ul>
    </div>
</div>

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3>Transférer des fichiers à l’aide de Globus</h3>

        <ol>
            <li>Sous l’onglet « Transfert des données » cliquez sur le bouton « transfert de fichiers Globus » pour accéder à la page de transfert de fichiers Globus.  <br/>
                <a href="/docs/img/screenshots/deposer_les_donees/GlobusFileTransferButton.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/deposer_les_donees/GlobusFileTransferButton.png" alt="Screenshot" class="screenshot"/>
                </a>
            </li>

             <li>Cliquez sur le lien «  Transfert ou sync à... » situé à droite de l'écran.<br/>
                 <a href="/docs/img/screenshots/deposer_les_donees/TransferToButton.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/deposer_les_donees/TransferToButton.png" alt="Screenshot" class="screenshot"/>
                 </a>
             </li>

             <li>Le DFDR est à gauche, nous devons choisir une source pour les fichiers à droite. Cliquez sur la zone de texte en haut à droite (à côté de la loupe) pour rechercher le point d’extrémité où se trouvent vos fichiers actuellement.<br/>
                 <a href="/docs/img/screenshots/deposer_les_donees/ChooseEndpointTextbox.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/deposer_les_donees/ChooseEndpointTextbox.png" alt="Screenshot" class="screenshot"/>
                 </a>
             </li>

             <li>Commencez à saisir le nom du point d’extrémité Globus contenant vos fichiers. Il peut s'agir du nom que vous avez donné à votre ordinateur portable ou à votre ordinateur, à un site d'hébergement de Calcul Canada (Cedar, Graham, Niagra ou Beluga, par exemple) ou à un autre emplacement de point d’extrémité Globus (par exemple, un serveur institutionnel ou de laboratoire).<br/>
                 <a href="/docs/img/screenshots/deposer_les_donees/ChooseEndpoint.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/deposer_les_donees/ChooseEndpoint.png" alt="Screenshot" class="screenshot"/>
                 </a>
             </li>

             <li>Sélectionnez les fichiers nécessaires pour votre jeu de données. Vous pouvez appuyer sur Maj ou Ctrl pour choisir des fichiers séparés.<br/>
                <a href="/docs/img/screenshots/deposer_les_donees/FileHighlighted.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/deposer_les_donees/FileHighlighted.png" alt="Screenshot" class="screenshot"/></li>
                </a>
            </li>

             <li>Cliquez sur le bouton « Transfert & options de sync.  » en bas au centre de l'écran.<br/>
                 <a href="/docs/img/screenshots/deposer_les_donees/TransferAndSyncButton.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/deposer_les_donees/TransferAndSyncButton.png" alt="Screenshot" class="screenshot"/>
                 </a>
             </li>

             <li>Étiquetez ce transfert : entrez un nom de transfert qui vous permettra de le reconnaître facilement.<br/>
                 <a href="/docs/img/screenshots/deposer_les_donees/TransferAndSync.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/deposer_les_donees/TransferAndSync.png" alt="Screenshot" class="screenshot"/>
                 </a>
             </li>

             <li>Sélectionnez les paramètres de transfert : vous avez diverses options pour contrôler le sort et la sécurité des fichiers. La plupart du temps, les paramètres par défaut seront suffisants. Écrivez à [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca) pour toute question sur les paramètres de transferts additionnels dont vous pourriez avoir besoin pour votre jeu de données.</li>

             <li>Initiez le transfert en cliquant sur le bouton bleu de démarrage en bas de la page. Vous pouvez initier autant de transferts que nécessaire lors d’une même session. Ceci pourrait être requis si, par exemple, vous souhaitez transférer des fichiers dans différents dossiers ou points d’extrémité de la source.<br/>
                 <a href="/docs/img/screenshots/deposer_les_donees/StartTransfer.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/deposer_les_donees/StartTransfer.png" alt="Screenshot" class="screenshot"/>
                 </a>
             </li>

            <li>.	Le statut du transfert sera indiqué à gauche sous « Activité  », mais le transfert se poursuivra indépendamment. Vous pouvez fermer cette fenêtre et revenir au DFDR pour vérifier et compléter votre soumission.<br/>
                <a href="/docs/img/screenshots/deposer_les_donees/Activity.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/deposer_les_donees/Activity.png" alt="Screenshot" class="screenshot"/>
                </a>
            </li>
        </ol>

        <h4>Vérifier l'état du transfert</h4>

        <ol>
             <li>Rendez-vous <a href="https://globus.frdr.ca/activity?locale=fr-ca">à la page d'activité.</a>.</li>
             <li>Cliquez sur le transfert dans la liste (si vous lui avez attribué un titre, celui-ci sera étiqueté comme tel).</li>
             <li>Cette page vous indiquera l'état actuel du transfert (c'est-à-dire le nombre de fichiers transférés, la quantité de données transférée ou si une erreur s'est produite).</li>
             <li>Pour une chronologie, cliquez sur l'onglet « Journal des événements  ».<br/>
                 <a href="/docs/img/screenshots/deposer_les_donees/EventLog.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/deposer_les_donees/EventLog.png" alt="Screenshot" class="screenshot"/>
                 </a>
             </li>
        </ol>

        <h4>Annuler un transfert en cours</h4>

        <ol>
             <li>Rendez-vous <a href="https://globus.frdr.ca/activity?locale=fr-ca">à la page d'activité.</a>.</li>
             <li>Localisez le transfert que vous voulez annulez dans la liste des transferts, en fonction de l'étiquette.</li>
             <li>Cliquez sur le bouton X<br/>
                 <a href="/docs/img/screenshots/deposer_les_donees/CancelTransfer.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/deposer_les_donees/CancelTransfer.png" alt="Screenshot" class="screenshot"/>
                 </a>
             </li>
             <li>Cliquez sur le bouton rouge de terminaison du transfert.</li>
        </ol>

        <h4>Supprimer un fichier déjà transféré</h4>

        <ol>
             <li>Rendez-vous à la soumission du jeu de données, sous l’onglet « En cours » dans <a href="/repo/PublishDashboard?locale=fr" target="_blank">le tableau de bord de publication des données.</a> Cliquez sur « Continuer » pour entrer dans la soumission.</li>

             <li>Cliquez sur l’onglet « Transfert des données »</li>

             <li>Cliquez sur le bouton « transfert de fichiers Globus » pour ouvrir la fenêtre de transfert.</li>

             <li>Localisez le fichier ou le répertoire que vous souhaitez supprimer. Cliquez une fois sur le fichier ou le répertoire pour le mettre en surbrillance.</li>

             <li>Cliquez sur le bouton « Supprimer la sélection » sur le côté droit de l'écran (ou au centre si la source et la destination sont toutes les deux ouvertes) et confirmez-le en cliquant sur le bouton « Supprimer » de l'écran résultant.  <br/>

                <a href="/docs/img/screenshots/deposer_les_donees/DeleteSelected.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/deposer_les_donees/DeleteSelected.png" alt="Screenshot" class="screenshot"/>
                </a>
            </li>
             <li>Répétez jusqu’à ce que tous les fichiers ou répertoires soient supprimés.</li>
        </ol>

        <div class="mb-3">
            Soumettre un jeu de données n’est pas un processus instantané. Plusieurs des étapes peuvent prendre un temps considérable :
        </div>

        <ul>
            <li>Le transfert de jeux de données très volumineux peut prendre des heures, voire plus;</li>
            <li>Un curateur sera affecté à l’évaluation et décidera d’approuver ou non votre soumission;</li>
            <li>Après l’approbation, il faudra compter jusqu’à 24 heures pour que la soumission soit indexée et découvrable dans le portail de recherche du DFDR.</li>
        </ul>

        <div class="mb-3">
            Lorsque possible, nous vous suggérons de conserver une copie de vos données après les avoir soumis. Même si le DFDR crée automatiquement des copies de sauvegarde de tous les jeux de données, ce processus peut prendre jusqu’à 24 heures.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="finaliser-de-la-soumission">Finaliser de la soumission</h2>
        <div class="mb-3">
            Une fois le transfert des données terminé, vous pourrez examiner les métadonnées et la liste des fichiers avant de soumettre le jeu de données pour publication. Revenez à l’un des onglets précédents si vous souhaitez apporter des modifications aux métadonnées ou aux fichiers de données. Une fois que vous avez terminé la soumission, les modifications aux métadonnées et aux fichiers ne peuvent être apportées que par un responsable de l’intendance.
        </div>

        <div class="mb-3">
            Pour soumettre le jeu de données, cliquez sur le bouton Terminer [Terminer]. Votre soumission sera examinée par un Curateur avant d’être publiée dans le DFDR. Une fois que le Curateur aura terminé l’examen de votre soumission, vous serez avisé par courriel et l’état passera à Terminé [Terminé] dans votre tableau de bord de publication.
        </div>

        <div class="mb-3">
            Nous recommandons que toute publication ou référence à votre jeu de données inclue le DOI.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="doi">DOI</h2>

        <div class="mb-3">
            Les DOI sont réservés au début du processus de soumission. Vous pouvez transmettre votre DOI à des éditeurs de revues ou des bureaux de recherche à tout moment; toutefois, le DOI ne sera pas un lien actif enregistré jusqu’à ce que votre jeu de données soit examiné par les responsables de la curation du DFDR et approuvé pour publication.
        </div>
    </div>
</div>




