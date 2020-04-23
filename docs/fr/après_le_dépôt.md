Après avoir soumis un jeu de données, la soumission est placée en attente de validation par un curateur. Un curateur devrait vous contacter dans les 48 heures. La durée requise pour procéder à la curation de la soumission dépend de l’organisation du contenu ainsi que de l’étendue des métadonnées. Une fois approuvée, la soumission est placée en attente pour le traitement de préservation.

## Curation
Pour aider à assurer la qualité des métadonnées dans le dépôt et pour améliorer la découvrabilité et la réutilisation des données, les soumissions au DFDR sont validées et approuvées par un curateur. Les curateurs sont habituellement des bibliothécaires travaillant pour des organismes de recherche partout au pays. Il peut aussi s’agir de gestionnaires de données de centres de recherche ayant accepté de travailler avec l’ABRC et Portage et à qui on a donné des permissions spéciales dans le DFDR.

Les déposants travaillent avec les curateurs pour :

* Éditer les métadonnées pour corriger les erreurs typographiques ou ajouter des métadonnées utiles comme des mots-clés. Les curateurs peuvent également proposer des conseils pour l’interprétation ou l’usage des champs de métadonnées ou des mots-clés.
* Valider et réviser les fichiers de données au besoin pour en assurer la compréhension et la réutilisation par d’autres chercheurs.
* Déplacer un jeu de données dans un groupe de stockage plus approprié dans le DFDR.
* Rejeter une soumission si elle nécessite plus de préparation ou qu’elle ne répond pas aux critères du DFDR. Si les curateurs rejettent une soumission, on vous fournira des commentaires expliquant la raison et des suggestions pour l’améliorer. Si vous recevez un courriel vous indiquant que la soumission a été rejetée, n’hésitez pas à communiquer avec le curateur pour résoudre le problème; les données pourront être soumises de nouveau pour une réévaluation.

Note : Les changements suggérés par les curateurs ne sont apportés qu’avec l’approbation du déposant.

## Préservation
Une fois approuvées par les curateurs, les soumissions dans le DFDR sont automatiquement placées en attente de traitement de préservation à l’aide du logiciel [Archivematica](https://www.archivematica.org/). La version de préservation contient tous les fichiers originaux et peut comprendre des copies normalisées en format de préservation. Par exemple, les fichiers propriétaires peuvent être convertis en format ouvert et les images compressées peuvent être converties en format non compressé. Les formats de préservation sont choisis par des experts au Canada (p. ex. [le Groupe d’experts sur la préservation de Portage](https://portagenetwork.ca/working-with-portage/network-of-expertise/portage-preservation-expert-group/)) et ailleurs dans le monde.

Conformément à notre politique de préservation, tous les fichiers compris dans le jeu de données ainsi que toutes les métadonnées connexes sont assemblés dans un paquet d’information archivé (AIP). L’accès direct aux AIP est limité aux administrateurs du DFDR et aux curateurs et, sur demande, pourra être livré aux chercheurs. Pour de plus amples renseignements sur le rôle du DFDR dans la préservation des données de recherche au Canada, veuillez consulter le [rapport](https://portagenetwork.ca/wp-content/uploads/2018/05/Portage-PEG-WhitePaper-EN.pdf) publié par le Groupe d’experts sur la préservation de Portage.

##Validation des données
Une fois le jeu de données approuvé par un curateur, [la somme de contrôle](https://en.wikipedia.org/wiki/Checksum) de chaque fichier du jeu de données est calculée et ces sommes sont compilées dans un fichier enregistré avec la soumission. Le nom de ce fichier prend la forme suivante : « publication_1-2017-08-22-22:08:58-sha256-sums.txt »; le numéro unique du jeu de données ainsi que la date et l’heure du calcul de la somme de contrôle varieront en conséquence. Il s’agit d’un fichier texte qui comprend le nom de chaque fichier dans la soumission avec sa somme de contrôle et l’information associée au type de fichier.

Les sommes de contrôle sont calculées à l’aide de l’algorithme [SHA-256](https://en.wikipedia.org/wiki/SHA-2). Le déposant peut valider l’intégrité des fichiers de données au moyen de [QuickHash GUI](http://quickhash-gui.org/), une application basée sur l’algorithme SHA-256.
