# Téléchargement de jeux de données

## Recherche de jeux de données
Si vous n’avez pas le lien direct vers un jeu de données hébergé dans le DFDR, vous pouvez naviguer parmi ceux disponibles avec l’outil [découverte du DFDR](/repo/search?locale=fr).

<hr />
<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="recherche-et-telechargement-de-fichiers-a-partir-dun-navigateur-web">Recherche et téléchargement de fichiers à partir d’un navigateur Web</h2>

        <div class="mb-3">
            Le widget de recherche de fichiers se trouve au bas de la page d’accueil de chaque jeu de données.
        </div>

        <div>
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <a href="/docs/img/screenshots/téléchargement_données/toile_télécharger.png" class="screenshot-lightbox">
                <img src="/docs/img/screenshots/téléchargement_données/toile_télécharger.png" alt="Capture d'écran montrant le widget de navigation de fichiers sur la page d'accueil de l'élément FRDR." class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            À partir de votre navigateur, vous pouvez soit cliquer sur le nom du fichier pour le télécharger sur votre appareil, soit utiliser la fonction « Télécharger au format ZIP » pour créer un fichier ZIP avec les données qui vous intéressent.
        </div>

        <div class="mb-3">
            Si vous avez besoin d’un lien stable pour télécharger un fichier, par exemple pour l’insérer dans une publication ou dans un script, veuillez consulter la section <a href="#creation-de-liens-de-telechargement-individuels">Création de liens de téléchargement individuels</a> ci-dessous.
        </div>

        <h3 id="téléchargement-au-format-zip">Téléchargement au format ZIP</h3>

        <div class="mb-3">
            Pour télécharger un jeu de données ou un sous-ensemble de fichiers et de dossiers à partir de votre navigateur, vous pouvez demander à DFDR de les compresser dans un fichier ZIP. Aucune inscription n’est requise, mais si vous n’avez pas de compte du DFDR, vous devrez fournir une adresse courriel valide pour obtenir le lien de téléchargement.
        </div>

        <h4>Première étape</h4>

        <div class="mb-3">
            Pour commencer, cliquez sur le bouton « Télécharger au format ZIP » (sous la liste de fichiers). Si vous avez ouvert une session avec votre compte du DFDR, nous utiliserons le courriel inscrit à nos dossiers, et vous serez dirigé vers la page de demande de téléchargement. Si vous n’avez pas ouvert de session, il faudra fournir votre adresse courriel et cliquer sur « Obtenir le lien ». Vous devriez recevoir un courriel du soutien technique du DFDR qui contiendra le lien pour ouvrir le formulaire de demande.
        </div>

        <h4>Télécharger le formulaire de demande et créer le fichier ZIP</h4>

        <div class="mb-3">
            Choisissez les fichiers et dossiers que vous voulez télécharger. Si vous sélectionnez un dossier, le DFDR en inclura automatiquement tout le contenu (fichier et dossiers imbriqués) dans votre fichier ZIP. Vous pouvez naviguer dans les dossiers pour sélectionner ou désélectionner des fichiers, au besoin. De plus, le DFDR annexera automatiquement à votre fichier, à titre informatif, la LICENCE du jeu de données, la citation recommandée, un fichier README du répertoire de premier niveau, et le nom et les sommes de contrôle de tous les fichiers du jeu de données.
        </div>

        <div class="mb-3">
            Nous avons fixé une limite de 20 Go par téléchargement. À mesure que vous sélectionnez vos fichiers et dossiers, le DFDR calcule la taille approximative du fichier à compresser et affiche le résultat à côté du bouton « Créer un fichier ZIP ». Pour télécharger plus de 20 Go, nous vous recommandons de répartir votre demande en plusieurs fichiers ZIP ou d’utiliser le transfert de fichiers Globus.
        </div>

        <div class="mb-3">
            Après avoir fait votre choix, cliquez sur « Créer un fichier ZIP ». Si votre demande a fonctionné, vous recevrez un message qui précisera la marche à suivre. Si vous recevez un message d’erreur ou rencontrez tout autre type de problème, écrivez à <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> pour obtenir de l’aide.
        </div>

        <h4>Télécharger le fichier ZIP</h4>

        <div class="mb-3">
            Lorsque votre fichier ZIP sera prêt à être téléchargé, le DFDR vous enverra un lien de téléchargement par courriel; vous pouvez aussi cliquer sur « Revenir à la demande de téléchargement » et rafraîchir la page pour vérifier l’état de votre demande (soumise, en traitement, traitée). Le temps de traitement varie en fonction du nombre de fichiers sélectionnés et de leur taille.
        </div>

        <div class="mb-3">
            Une fois que votre fichier ZIP est prêt à être téléchargé, son nom du fichier sous « Fichiers ZIP actuels pour ce jeu de données » devient un hyperlien. Vous aurez 14 jours pour le télécharger au moyen de ce lien du DFDR, après quoi il sera supprimé de notre système.
        </div>

        <div class="mb-3">
            Pour soumettre une demande pour un autre fichier ZIP du même jeu de données, vous devez d’abord supprimer le fichier ZIP actif ou existant.
        </div>

        <h3>Création de liens de téléchargement individuels</h3>

        <div class="mb-3">
            Le DFDR reproduit les données sur plusieurs serveurs. Afin de générer pour un fichier un lien de téléchargement stable qui fonctionnera indépendamment du serveur concerné, faites un clic droit sur le nom du fichier (Ctrl + clic sur Mac), sélectionnez « Copier l’adresse du lien » et collez le résultat. L’adresse sera similaire à celle-ci : https://www.frdr-dfdr.ca/repo/files/1/published/publication_NNN/submitted_data, où « NNN » sera remplacé par un numéro de publication propre au jeu de données dans le DFDR.
        </div>

        <div class="mb-3">
            Bien que ces liens soient assez stables, ils ne remplacent pas le DOI du jeu de données, soit l’identifiant unique et permanent qui conduira toujours à un enregistrement de votre jeu de données. Si vous comptez insérer un lien de téléchargement dans une publication, un fichier de script ou sur votre site Web, nous vous recommandons d’inclure également le DOI du jeu de données. Si vous avez des questions ou si vous avez besoin de générer des liens de téléchargement stables pour un grand nombre de fichiers dans un jeu de données, veuillez écrire à l’équipe de soutien technique du DFDR à l’adresse <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> pour obtenir de l’aide.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="telecharger-des-jeux-de-donnees-avec-globus-transfer">Télécharger des jeux de données avec Globus Transfer</h2>

        <div class="mb-3">
            Globus est un logiciel gratuit qui permet de transférer des fichiers de façon sûre et à haute vitesse. Il s’agit de la méthode la plus efficace pour télécharger une grande quantité de données dans le DFDR. Pour utiliser Globus, vous devez soit accéder à un serveur sur lequel Globus est déjà installé (c’est le cas pour la plupart des <a href="https://alliancecan.ca/fr/services/calcul-informatique-de-pointe/la-federation/sites-dhebergement-nationaux">sites d’hébergement nationaux</a> de l’Alliance de recherche numérique du Canada), soit créer votre propre compte Globus et installer <a href="https://www.globus.org/globus-connect-personal">Globus Connect Personal</a> sur votre appareil.
        </div>

        <div class="mb-3">
            La vidéo ci-dessous présente les étapes détaillées pour configurer un terminal Globus Transfer :
        </div>

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
    </div>
</div>
