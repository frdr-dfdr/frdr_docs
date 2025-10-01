# Recherche de jeux de données

La version remodelée du service de découverte du DFDR ne sera pas accessible depuis le site Web du DFDR, mais sera plutôt lancée sur une plateforme indépendante, Lunaris, le 29 mars 2023. [Lunaris](https://www.lunaris.ca/fr) regroupe les métadonnées provenant de plus d’une centaine de dépôts, y compris les jeux de données déposés dans la plateforme de dépôt du DFDR, et est assorti d’une puissante fonction de découverte des données de recherche canadiennes qui mise à la fois sur la recherche textuelle et sur la recherche cartographique.

Vous pouvez également rechercher les données déposées dans le DFDR en utilisant notre fonction de <a href="/repo/search?locale=fr" target="_blank">recherche interne</a>, dont vous trouverez la description ci-dessous.

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="methodes-de-recherche">Méthodes de recherche</h2>

        <h3 id="1-recherche-de-base">1. Recherche de base</h3>

        <div class="mb-3">
            Tapez votre terme de recherche (un ou plusieurs mots) dans la zone de recherche, puis cliquez sur le bouton de recherche ou appuyez sur la touche Entrée. Les résultats de la recherche afficheront tous les jeux de données qui correspondent à l’un des mots dans tous les domaines.
        </div>

        <h4 id="conseils">Conseils</h4>

        <ul>
            <li><strong>Racinisation :</strong> Pour améliorer la recherche, tous les mots du terme subiront un traitement de « racinisation ». De façon générale, cela signifie que différentes formes d’un mot ayant la même racine donneront les mêmes résultats. Exemples : les mots au singulier et au pluriel (« arbre » et « arbres »), les différentes formes d’un verbe (« courir » et « cours »). L’algorithme de racinisation n’inclut pas toujours les mots irréguliers. La racinisation ne s’applique qu’au titre, à la description, aux mots-clés et au sujet.</li>
            <li><strong>Phrase exacte :</strong> Pour trouver les jeux de données comportant une phrase exacte, utilisez des guillemets. Exemple : « profil du recensement ».</li>
            <li><strong>Caractères accentués :</strong> Les caractères accentués sont différents des caractères non accentués. Exemple : les mots « Quebec » et « Québec » ne donneront pas les mêmes résultats de recherche.</li>
            <li><strong>Opérateurs booléens :</strong> Les opérateurs booléens (AND, OR et NOT) sont sensibles à la casse et peuvent être utilisés pour relier des termes de recherche. Exemples :</li>
            <ul>
                <li>lacs NOT rivières : Cette recherche permet d’obtenir les résultats contenant le mot « lacs » dans tous les domaines, mais en omettant les résultats qui contiennent aussi le mot « rivières ».</li>
                <li>lacs AND rivières : Cette recherche permet d’obtenir les résultats contenant à la fois le mot « lacs » et le mot « rivières » dans tous les domaines.</li>
                <li>lacs OR rivières : Cette recherche permet d’obtenir les résultats contenant le mot « lacs » ou le mot « rivières » dans tous les domaines.</li>
            </ul>
            <li><strong>Caractères de remplacement :</strong> Les caractères de remplacement peuvent être utilisés pour remplacer un certain nombre de caractères (\*) ou un caractère précis (?) dans les zones de saisie de texte. Par exemple, la recherche suivante permet d’obtenir des résultats contenant des mots commençant par « Canad » (comme « Canada » et « canadien ») : canad\*.</li>
            <li><strong>Flou :</strong> Un certain flou est déjà obtenu grâce à la racinisation appliquée aux zones ayant du contenu textuel, comme le titre, la description et les mots-clés. Par exemple, la racinisation signifie que les termes « économique » et « économie » sont traités comme des mots équivalents.</li>
        </ul>

        <h3 id="2-recherche-avancee">2. Recherche avancée</h3>

        <div class="mb-3">
            La fonction de recherche avancée offre un puissant outil qui permet d’effectuer des requêtes complexes et détaillées. Il est possible d’effectuer une recherche selon différents champs de métadonnées : Titre, Auteur, Description, Mot-clé, Collection, Date de publication, État de l’embargo, Affiliation de l’auteur, Bailleur de fonds, Domaine de recherche, Nom de l’emplacement, DOI et Droits.
        </div>

        <div class="mb-3">
            REMARQUE : Si plusieurs valeurs sont sélectionnées dans le même champ, seuls les résultats comprenant toutes les valeurs sélectionnées s’afficheront (comme si l’opérateur booléen AND avait été utilisé). Si vous souhaitez afficher les résultats de recherche pour plusieurs auteur(e)s, c’est-à-dire afficher les jeux de données comprenant soit l’auteur(e) A, soit l’auteur(e) B, nous vous recommandons d’utiliser le filtre « Auteur » sous les options au lieu d’effectuer une recherche avancée.
        </div>

        <h3>3. Filtres de recherche</h3>

        <div class="mb-3">
            Au-dessus des filtres disponibles, la zone « Détails de la recherche » affiche votre recherche courante, y compris les opérateurs boléens. Si vous cliquez sur le bouton « Réinitialiser », tous vos critères de recherche existants seront supprimés.
        </div>

        <div class="mb-3">
            Les filtres suivants peuvent être utilisés pour préciser vos résultats de recherche :
        </div>

        <ul>
            <li>Collection</li>
            <li>Date de publication</li>
            <li>Auteur</li>
            <li>Mot-clé</li>
            <li>État de l’embargo</li>
        </ul>

        <div class="mb-3">
            Seules les 10 premières options de chaque filtre s’afficheront. Vous pouvez utiliser le bouton « Suivant » pour afficher les 10 options suivantes, ou effectuer une recherche dans le filtre pour préciser les résultats. Pour sélectionner une valeur dans le filtre, cliquez sur celle-ci ou cochez la case adjacente. Les options sélectionnées s’afficheront dans la partie supérieure du filtre. Vous pouvez recliquer sur le nom ou décocher la case pour désélectionner une option, ou cliquer sur le bouton « Effacer tout » pour supprimer toutes les options sélectionnées.
        </div>

        <div class="mb-3">
            Si vous avez sélectionné deux options dans un filtre (p. ex., les mots-clés « prairie » et « agriculture », vos résultats afficheront tous les jeux de données qui contiennent le mot « prairie » OU le mot « agriculture » dans les mots-clés.
        </div>

        <div class="mb-3">
            <strong>Collection, Auteur et Mot-clé</strong>
        </div>

        <div class="mb-3">
            Sélectionner des valeurs dans chaque filtre pour afficher les résultats qui y correspondent. Si vous sélectionnez plusieurs valeurs dans le même filtre, les résultats qui s’afficheront comprendront n’importe quelle des valeurs sélectionnées (comme si l’opérateur booléen OU avait été utilisé). Si vous sélectionnez une valeur dans plusieurs filtres, les résultats qui s’afficheront comprendront au moins une des valeurs sélectionnées dans chaque filtre. Par exemple, si vous sélectionnez « Mathématiques » et « Canada » dans le filtre Mot-clé ainsi que Pierre Untel et Marie Untel dans le filtre Auteur, vous obtiendrez la recherche détaillée suivante : (Mathématiques OR Canada) AND (Pierre Untel OR Marie Untel).
        </div>

        <div class="mb-3">
            Par défaut, les valeurs dans les filtres Auteur, Mot-clé et Collection sont triées selon le nombre de résultats (ordre décroissant). Au-dessus des filtres Auteur et Mot-clé, vous trouverez une barre de recherche pouvant être utilisée pour rechercher les valeurs de ce filtre. Les capacités de recherche textuelle de ces filtres ne sont pas sensibles à la casse.
        </div>

        <div class="mb-3">
            <strong>Date de publication</strong>
        </div>

        <div class="mb-3">
            Pour utiliser le filtre de date de publication, il faut indiquer une période. Pour ce faire, cliquez dans chacune des zones de date, puis choisissez une date dans le calendrier ou saisissez une date manuellement (en format aaaa-mm-jj). Une fois que vous avez indiqué la date de début et la date de fin de la période désirée, cliquez sur « Appliquer ».
        </div>

        <div class="mb-3">
            <strong>État de l’embargo</strong>
        </div>

        <div class="mb-3">
            Utilisez cette option pour filtrer les jeux de données qui font l’objet d’une période d’embargo. Vous pouvez choisir d’afficher seulement les jeux de données qui sont accessibles publiquement ou d’inclure ceux qui sont actuellement sous embargo. Gardez à l’esprit que les éléments sous embargo ne seront pas tous compris dans les résultats de recherche, car les déposant(e)s peuvent choisir de dissimuler leur enregistrement de métadonnées (c.-à-d. de ne pas l’indexer aux fins de recherche) jusqu’à la fin de la période d’embargo.
        </div>

        <div class="mb-3">
            Pour les éléments sous embargo qui s’afficheront dans les résultats de recherche, l’enregistrement des résultats de recherche mènera vers la page d’accueil du jeu de données, et <strong>seules</strong> les métadonnées seront visibles. Il sera impossible de consulter ou de télécharger les fichiers de données tant que la période d’embargo ne sera pas terminée.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="resultats-de-recherche">Résultats de recherche</h2>

        <div class="mb-3">
            Les résultats de recherche s’affichent dans la partie droite de la page. Les filtres (options) qui se trouvent dans la partie gauche peuvent être utilisés pour affiner davantage ou préciser vos résultats. Les résultats comprennent les renseignements suivants :
        </div>

        <ul>
            <li>Le titre du jeu de données, dont le lien mène vers la page d’accueil du jeu de données dans le DFDR.</li>
            <li>Le nom et le logo de la collection.</li>
            <li>Les auteur(e)s du jeu de données.</li>
            <li>La date de publication du jeu de données.</li>
        </ul>
    </div>
</div>





<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="page-d’accueil-du-jeu-de-donnees">Page d’accueil du jeu de données</h2>

        <div class="mb-3">
            Cliquez sur le titre du jeu de données pour naviguer dans la page d’accueil du jeu de données. À partir de là, vous pouvez afficher l’enregistrement de métadonnées au complet, parcourir le contenu du jeu de données et télécharger des fichiers de données.
        </div>

        <div class="mb-3">
            Pour afficher ou télécharger des fichiers de données, consultez la section « Fichiers dans le jeu de données ». Vous pouvez afficher uniquement le nom des fichiers et dossiers, ou voir tout le contenu des dossiers en cliquant sur l’icône « + ». Vous pouvez consulter ou prévisualiser certains types de fichiers depuis un navigateur Web, selon ses capacités et ses paramètres. Consultez la section « <a href="téléchargement.md">Téléchargement de jeux de données</a> » pour en savoir davantage.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="tri">Tri</h2>

        <div class="mb-3">
            La page des résultats de recherche contient un menu déroulant qui permet de préciser l’ordre dans lequel les résultats de la recherche s’affichent. Les résultats peuvent être triés selon la Pertinence (par défaut), la Date de publication ou le Titre.
        </div>

        <div class="mb-3">
            Par défaut, les résultats sont triés selon la « Pertinence » – un barème de pondération qui privilégie d’abord les correspondances trouvées dans le titre, puis dans le sujet, puis dans la description.
        </div>
    </div>
</div>
