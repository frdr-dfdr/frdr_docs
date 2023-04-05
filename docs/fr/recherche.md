La version remodelée du service de découverte du DFDR ne sera pas accessible depuis le site Web du DFDR, mais sera plutôt lancée sur une plateforme indépendante, Lunaris, le 29 mars 2023. [Lunaris](https://www.lunaris.ca/fr) regroupe les métadonnées provenant de plus d’une centaine de dépôts, y compris les jeux de données déposés dans la plateforme de dépôt du DFDR, et est assorti d’une puissante fonction de découverte des données de recherche canadiennes qui mise à la fois sur la recherche textuelle et sur la recherche cartographique.

Vous pouvez également rechercher les données déposées dans le DFDR en utilisant notre fonction de <a href="/repo/search?locale=fr" target="_blank">recherche interne</a>, dont vous trouverez la description ci-dessous.

## Méthodes de recherche

### 1. Recherche de base

Tapez votre terme de recherche (un ou plusieurs mots) dans la zone de recherche, puis cliquez sur le bouton de recherche ou appuyez sur la touche Entrée. Les résultats de la recherche afficheront tous les jeux de données qui correspondent à l’un des mots dans tous les domaines.

#### Conseils

* **Racinisation :** Pour améliorer la recherche, tous les mots du terme subiront un traitement de « racinisation ». De façon générale, cela signifie que différentes formes d’un mot ayant la même racine donneront les mêmes résultats. Exemples : les mots au singulier et au pluriel (« arbre » et « arbres »), les différentes formes d’un verbe (« courir » et « cours »). L’algorithme de racinisation n’inclut pas toujours les mots irréguliers. La racinisation ne s’applique qu’au titre, à la description, aux mots-clés et au sujet.
* **Phrase exacte :** Pour trouver les jeux de données comportant une phrase exacte, utilisez des guillemets. Exemple : « profil du recensement ».
* **Caractères accentués :** Les caractères accentués sont différents des caractères non accentués. Exemple : les mots « Quebec » et « Québec » ne donneront pas les mêmes résultats de recherche.
* **Opérateurs booléens :** Les opérateurs booléens (AND, OR et NOT) sont sensibles à la casse et peuvent être utilisés pour relier des termes de recherche. Exemples :
    * lacs NOT rivières : Cette recherche permet d’obtenir les résultats contenant le mot « lacs » dans tous les domaines, mais en omettant les résultats qui contiennent aussi le mot « rivières ».
    * lacs AND rivières : Cette recherche permet d’obtenir les résultats contenant à la fois le mot « lacs » et le mot « rivières » dans tous les domaines.
    * lacs OR rivières : Cette recherche permet d’obtenir les résultats contenant le mot « lacs » ou le mot « rivières » dans tous les domaines.
* **Caractères de remplacement :** Les caractères de remplacement peuvent être utilisés pour remplacer un certain nombre de caractères (\*) ou un caractère précis (?) dans les zones de saisie de texte. Par exemple, la recherche suivante permet d’obtenir des résultats contenant des mots commençant par « Canad » (comme « Canada » et « canadien ») : canad\*.
* **Flou :** Un certain flou est déjà obtenu grâce à la racinisation appliquée aux zones ayant du contenu textuel, comme le titre, la description et les mots-clés. Par exemple, la racinisation signifie que les termes « économique » et « économie » sont traités comme des mots équivalents.

### 2. Recherche avancée

La fonction de recherche avancée offre un puissant outil qui permet d’effectuer des requêtes complexes et détaillées. Il est possible d’effectuer une recherche selon différents champs de métadonnées : Titre, Auteur, Description, Mot-clé, Collection, Date de publication, État de l’embargo, Affiliation de l’auteur, Bailleur de fonds, Domaine de recherche, Nom de l’emplacement, DOI et Droits.

REMARQUE : Si plusieurs valeurs sont sélectionnées dans le même champ, seuls les résultats comprenant toutes les valeurs sélectionnées s’afficheront (comme si l’opérateur booléen AND avait été utilisé). Si vous souhaitez afficher les résultats de recherche pour plusieurs auteur(e)s, c’est-à-dire afficher les jeux de données comprenant soit l’auteur(e) A, soit l’auteur(e) B, nous vous recommandons d’utiliser le filtre « Auteur » sous les options au lieu d’effectuer une recherche avancée.

### 3. Filtres de recherche

Au-dessus des filtres disponibles, la zone « Détails de la recherche » affiche votre recherche courante, y compris les opérateurs boléens. Si vous cliquez sur le bouton « Réinitialiser », tous vos critères de recherche existants seront supprimés.

Les filtres suivants peuvent être utilisés pour préciser vos résultats de recherche :

* Collection
* Date de publication
* Auteur
* Mot-clé
* État de l’embargo

Seules les 10 premières options de chaque filtre s’afficheront. Vous pouvez utiliser le bouton « Suivant » pour afficher les 10 options suivantes, ou effectuer une recherche dans le filtre pour préciser les résultats. Pour sélectionner une valeur dans le filtre, cliquez sur celle-ci ou cochez la case adjacente. Les options sélectionnées s’afficheront dans la partie supérieure du filtre. Vous pouvez recliquer sur le nom ou décocher la case pour désélectionner une option, ou cliquer sur le bouton « Effacer tout » pour supprimer toutes les options sélectionnées.

Si vous avez sélectionné deux options dans un filtre (p. ex., les mots-clés « prairie » et « agriculture », vos résultats afficheront tous les jeux de données qui contiennent le mot « prairie » OU le mot « agriculture » dans les mots-clés.

**Collection, Auteur et Mot-clé**

Sélectionner des valeurs dans chaque filtre pour afficher les résultats qui y correspondent. Si vous sélectionnez plusieurs valeurs dans le même filtre, les résultats qui s’afficheront comprendront n’importe quelle des valeurs sélectionnées (comme si l’opérateur booléen OU avait été utilisé). Si vous sélectionnez une valeur dans plusieurs filtres, les résultats qui s’afficheront comprendront au moins une des valeurs sélectionnées dans chaque filtre. Par exemple, si vous sélectionnez « Mathématiques » et « Canada » dans le filtre Mot-clé ainsi que Pierre Untel et Marie Untel dans le filtre Auteur, vous obtiendrez la recherche détaillée suivante : (Mathématiques OR Canada) AND (Pierre Untel OR Marie Untel).

Par défaut, les valeurs dans les filtres Auteur, Mot-clé et Collection sont triées selon le nombre de résultats (ordre décroissant). Au-dessus des filtres Auteur et Mot-clé, vous trouverez une barre de recherche pouvant être utilisée pour rechercher les valeurs de ce filtre. Les capacités de recherche textuelle de ces filtres ne sont pas sensibles à la casse.

**Date de publication**

Pour utiliser le filtre de date de publication, il faut indiquer une période. Pour ce faire, cliquez dans chacune des zones de date, puis choisissez une date dans le calendrier ou saisissez une date manuellement (en format aaaa-mm-jj). Une fois que vous avez indiqué la date de début et la date de fin de la période désirée, cliquez sur « Appliquer ».

**État de l’embargo**

Utilisez cette option pour filtrer les jeux de données qui font l’objet d’une période d’embargo. Vous pouvez choisir d’afficher seulement les jeux de données qui sont accessibles publiquement ou d’inclure ceux qui sont actuellement sous embargo. Gardez à l’esprit que les éléments sous embargo ne seront pas tous compris dans les résultats de recherche, car les déposant(e)s peuvent choisir de dissimuler leur enregistrement de métadonnées (c.-à-d. de ne pas l’indexer aux fins de recherche) jusqu’à la fin de la période d’embargo.

Pour les éléments sous embargo qui s’afficheront dans les résultats de recherche, l’enregistrement des résultats de recherche mènera vers la page d’accueil du jeu de données, et **seules** les métadonnées seront visibles. Il sera impossible de consulter ou de télécharger les fichiers de données tant que la période d’embargo ne sera pas terminée.

## Résultats de recherche

Les résultats de recherche s’affichent dans la partie droite de la page. Les filtres (options) qui se trouvent dans la partie gauche peuvent être utilisés pour affiner davantage ou préciser vos résultats. Les résultats comprennent les renseignements suivants :

* Le titre du jeu de données, dont le lien mène vers la page d’accueil du jeu de données dans le DFDR.
* Le nom et le logo de la collection.
* Les auteur(e)s du jeu de données.
* La date de publication du jeu de données.

## Page d’accueil du jeu de données

Cliquez sur le titre du jeu de données pour naviguer dans la page d’accueil du jeu de données. À partir de là, vous pouvez afficher l’enregistrement de métadonnées au complet, parcourir le contenu du jeu de données et télécharger des fichiers de données.

Pour afficher ou télécharger des fichiers de données, consultez la section « Fichiers de l’ensemble de données ». Vous pouvez afficher uniquement le nom des fichiers et dossiers, ou voir tout le contenu des dossiers en cliquant sur l’icône « + ». Vous pouvez consulter ou prévisualiser certains types de fichiers depuis un navigateur Web, selon ses capacités et ses paramètres. Consultez la section « [Télécharger des données](téléchargement.md) » pour en savoir davantage.

## Tri

La page des résultats de recherche contient un menu déroulant qui permet de préciser l’ordre dans lequel les résultats de la recherche s’affichent. Les résultats peuvent être triés selon la Pertinence (par défaut), la Date de publication ou le Titre.

Par défaut, les résultats sont triés selon la « Pertinence » – un barème de pondération qui privilégie d’abord les correspondances trouvées dans le titre, puis dans le sujet, puis dans la description.
