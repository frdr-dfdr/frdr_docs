## Organisation de vos fichiers de données

### Choix des types de données à déposer

Rassemblez vos fichiers de données, la documentation et toute information nécessaire pour réutiliser votre jeu de données. Vous pouvez choisir de fournir des données traitées, des données brutes non traitées ou les deux, ainsi que les scripts, le code ou le logiciel nécessaires pour générer ou analyser de nouveau vos données.

Vous pouvez télécharger une version de vos scripts d’analyse en même temps que vos données, mais nous vous recommandons de déposer les modèles, le code source ou le logiciel dans des dépôts spécialisés comme GitHub, GitLab ou Bitbucket. Ceux-ci peuvent être conservés dans les archives de [Software Heritage](https://www.softwareheritage.org/save-and-reference-research-software/?lang=fr) ou dans [Zenodo](https://guides.github.com/activities/citable-code/). Vous pouvez établir un lien direct avec les autres résultats de vos métadonnées du DFDR et les mentionner dans votre fichier Lisez-moi.

### Structure de vos fichiers

 Lorsque vous déposez vos données dans le DFDR, la structure de vos fichiers (la façon dont vous avez organisé vos données dans des répertoires ou des dossiers) est conservée. Envisagez de classer ces fichiers par type, date ou analyse pour en faciliter la compréhension. Par exemple : 

**Exemple a)**

	├── Code
	│   ├── traitement_donnees_brutes.r
	│   ├── analyse_1.r
	│   ├── analyse_2.r
	├── Données
	│   ├── Donnees_brutes
	│   │   ├── fichier_a.raw
	│   │   └── fichier_b.raw
	│   └── Donnees_traitees
	│   ├── fichier_a.csv
	│   └── fichier_b.csv
	├── Résultats
	│   ├── Figures
	│   └── Modèles
	└── Lisez-moi.txt

**Exemple b)**

	├── Documentation
	│   ├── site_information.csv
	│   ├── site_1.shp
	│   └── site_2.shp
	├── Données
	│   ├── annee_01
	│   │   ├── site_1.csv
	│   │   └── site_2.csv
	│   └── annee_02
	│   ├── site_1.csv
	│   └── site_2.csv
	└── Lisez-moi.txt

### Conseils pour l’appellation de fichiers
Nommez vos fichiers de façon logique et descriptive, afin que vous et d’autres chercheurs puissiez les comprendre en un coup d’œil. Gardez les noms de fichiers brefs et envisagez d’y inclure des renseignements sur le projet, le contenu, la date ou le numéro de version. Utilisez des caractères alphanumériques et évitez les espaces, les accents et les caractères spéciaux (%^& * ’). Votre convention d’appellation doit être décrite dans votre fichier Lisez-moi.

_Exemple : MontRoyal_Temperatures_20200801.csv

_Exemple : AnalysePoeme_IV05_v03.txt

Pour de plus amples conseils, consultez les [conventions d’appellation de fichiers de l’UBC](https://researchdata.library.ubc.ca/plan/organize-your-data/) (en anglais).

Pour de plus amples conseils, consultez [le document Nommage de fichiers et gestion de versions de l’Université d’Ottawa](https://biblio.uottawa.ca/fr/services/professeurs/gestion-donnees-recherche/designation-fichiers-disposition-donnees), [le document Nommage des fichiers numériques de l’Université de Sherbrooke et les](https://www.usherbrooke.ca/biblio/fileadmin/sites/biblio/documents/pdf/GDAA/nommage_fichiers_numeriques_recommandations_abregees.pdf), [conventions d’appellation de fichiers de l’UBC](https://researchdata.library.ubc.ca/plan/organize-your-data/) (en anglais).

### Choix de formats de fichier faciles à préserver

Les formats de fichier ouverts et non exclusifs sont préférables pour la préservation à long terme, mais il est parfois nécessaire de partager des formats de fichier exclusifs pour la réutilisation des données. Tenez compte des besoins des futurs chercheurs lorsque vous choisissez des types de fichiers à déposer.

* Quels sont les formats de fichier largement utilisés dans votre domaine? Est-il probable que d’autres chercheurs auront accès au logiciel nécessaire pour ouvrir vos fichiers?

* Si vous transformez vos fichiers en formats de dépôt ouverts, est-ce que des renseignements (données, métadonnées, formatage, macros, etc.) seront perdus? Ces renseignements peuvent-ils être représentés d’une autre façon, par exemple en ajoutant une variable supplémentaire à un fichier tabulaire, ou en les incluant dans un fichier de texte clair ou un fichier de documentation distinct?

Le DFDR est en mesure d’accepter et d’assurer la préservation au niveau de bit pour divers formats de fichier et travaillera avec vous pour conserver vos données dans le format le plus approprié. Toutefois, nous recommandons fortement les formats de fichier faciles à préserver suivants :

* Valeurs séparées par des virgules (CSV) pour les données tabulaires

* Formats de texte clair semi-structurés pour les données non tabulaires

* Texte clair structuré (XML, JSON)

* Images : PDF, JPEG, PNG, TIFF, SVG, GIF, HEIF

* Contenu audio : FLAC, AIFF, WAV, MP3, OGG, AAC

* Contenu vidéo : MOV, MPEG-4, MKV

* Formats d’archivage de fichiers compressés : TAR.GZ, 7Z, ZIP

Pour obtenir de plus amples renseignements sur les formats de préservation, voir les lignes directrices de [Bibliothèque et Archives nationales du Québec](https://www.banq.qc.ca/documents/archives/archivistique_gestion/publications_proposees/Guide-formats-BAnQ_Final.pdf), du [UK Data Service](https://www.ukdataservice.ac.uk/manage-data/format/recommended-formats), de [Cornell](https://guides.library.cornell.edu/ecommons/formats) et de [l’University of Edinburgh](https://www.ed.ac.uk/information-services/research-support/research-data-service/after/data-repository/choosing-file-formats) (en anglais).

## Documentation de votre soumission

Les données ne seront utiles (et bénéfiques) à long terme que si elles sont décrites en détail. Pour vous assurer d’une interprétation correcte de vos données, il est important d’inclure un manuel de codes et/ou un fichier Lisez-moi à vos données et de documenter vos méthodes de collecte. Pour cette raison, un responsable de la curation du DFDR vous demandera d’ajouter un fichier Lisez-moi à votre soumission. Vous pouvez utiliser le [modèle de fichier Lisez-moi du DFDR](/docs/txt/README-fr.txt).

Conseils pour la rédaction de fichiers Lisez-moi :

* Nommez votre fichier « Lisez-moi.txt ».

* Ajoutez un point de contact dans votre fichier Lisez-moi.

* Si vos fichiers de données proviennent de sources externes, indiquez l’attribution détaillée de ces sources dans votre fichier Lisez-moi. Inclure des renseignements comme le titre, les auteurs, l’institution ou le dépôt qui a publié les données, le DOI, s’il est disponible, ou un autre identificateur unique, ainsi qu’un lien vers les données, s’il est disponible en ligne. Si possible, indiquez la date d’accès puisque les ressources en ligne peuvent changer.

* Indiquez toute restriction sur l’utilisation secondaire de vos données dans le fichier Lisez-moi, y compris toute restriction sur les données provenant de sources tierces.

* Pour les jeux de données quantitatives, définissez toutes les variables et les valeurs admissibles. Le cas échéant, indiquez les unités de mesure et définissez le code que vous avez utilisé pour les valeurs manquantes ou nulles.

* Décrivez brièvement votre étude, les méthodes que vous avez utilisées pour recueillir vos données et les mesures que vous avez prises pour traiter les données que vous déposez.

* Si vous avez supprimé des variables de votre jeu de données brutes pour créer une copie à usage public à des fins d’archivage, envisagez d’inclure une liste des variables supprimées afin que les changements apportés à votre jeux de données brutes soient transparents. Vous pouvez également fournir des statistiques sommaires ou un nombre d’occurrences pour toute variable supprimée.

* Le nom de l’équipement ou des instruments utilisés pour recueillir les données, ainsi que les logiciels ou les progiciels statistiques qui ont été utilisés pour les traiter doivent être énumérés dans le fichier Lisez-moi. Si possible, indiquez la version du logiciel utilisé.

* Envisagez d’ajouter des renseignements sur les documents connexes, les protocoles d’étude ou d’autres documents qui fourniront plus de contexte à vos données.

* Si vos formats de fichier ne sont pas en texte clair, envisagez de recommander un logiciel qui peut servir à les consulter ou à les analyser.

* Si vous avez inclus un code ou un logiciel, envisagez d’inclure une description, des renseignements sur l’environnement informatique, les dépendances requises, l’entrée requise, la sortie attendue et toute instruction nécessaire à l’installation ou à l’exécution.

Vous trouverez d’autres conseils (en anglais) dans le [Guide rapide : Créer un fichier README pour vos ensembles de données](https://zenodo.org/record/4058962#.YNo4HOhKhPY) de l’UBC et danst le [Guide to writing "readme" style metadata](https://zenodo.org/record/4058972#.YNouI-hKhPY) de la Cornell University.

## Examen de vos données

Veuillez examiner votre jeu de données avant de le soumettre pour examen. Voici quelques points à prendre en considération : 

* *Avez-vous fourni un fichier Lisez-moi, un manuel de code ou tout autre document nécessaire?* Parmi les documents supplémentaires utiles, notons une copie de votre plan de gestion des données, une copie non signée de tous les formulaires de consentement que vous avez fournis aux participants à l’étude, ou des renseignements sur les protocoles de l’étude, les rapports d’étude clinique ou les plans d’analyse statistique.

* *Votre jeu de données est-il complet?* Avez-vous inclus tous les fichiers que vous aviez l’intention de communiquer? Avez-vous retiré les fichiers superflus ou les fichiers que vous n’aviez pas l’intention de communiquer? Les fichiers que vous décrivez dans votre fichier Lisez-moi sont-ils inclus dans le jeu de données, et les fichiers de votre jeu de données sont-ils décrits dans votre fichier Lisez-moi?

* *Vos fichiers sont-ils complets?* Avez-vous défini les variables et les valeurs admissibles, inclus les unités de mesure et décrit les valeurs nulles, le cas échéant?

* Si vos fichiers sont dans un format exclusif, *avez-vous inclus des renseignements sur le logiciel utilisé pour générer les fichiers* et des recommandations pour visualiser le contenu?

* *Avez-vous indiqué les sources tierces* qui vous ont fourni des données ou des codes pour vos analyses? Voir la section [Utilisation secondaire des données ou du code.](#utilisation-secondaire-des-donnees-ou-du-code)

* *Avez-vous confirmé qu’aucun de vos dossiers ne contient de renseignements protégés ou à diffusion restreinte?* Voir la section [Données à diffusion restreinte.](#donnees-a-diffusion-restreinte)

Les responsables de la curation du DFDR collaboreront avec vous pour examiner vos données au moment de leur soumission afin d’assurer la qualité des métadonnées dans le dépôt et d’améliorer la repérabilité et l’accessibilité de vos données. Les responsables de la curation sont habituellement des bibliothécaires employés par des établissements de recherche partout au pays. Il peut aussi s’agir de gestionnaires de données intégrés à des groupes de recherche qui ont accepté de travailler avec le réseau Portage de la NOIRN et qui ont obtenu des autorisations spéciales dans le système du DFDR.

### Utilisation secondaire des données ou du code

Avez-vous obtenu des données ou des codes d’un tiers qui pourrait détenir des droits d’auteur ou des droits de propriété intellectuelle qui vous empêcheraient de les redistribuer? La source de données originale permet-elle la redistribution, mais avec certaines restrictions?

Si vous avez utilisé des données secondaires dans votre recherche, vous devrez confirmer que vous avez la permission de publier de nouveau ces données dans le DFDR avant que votre soumission puisse être approuvée par un responsable de la curation. Vous ne savez pas si vous avez besoin d’une permission? Les données qui ont été mises gratuitement à la disposition de la recherche ne sont pas nécessairement « gratuites ». Demandez-vous :

* Avez-vous dû ouvrir une session sur un site Web pour télécharger les données?

* Avez-vous accepté des conditions d’utilisation précises, signé un accord d’utilisation des données ou conclu une entente avec le fournisseur de données qui vous empêcherait de publier ces données dans le DFDR?

Veuillez consulter la licence ou les modalités qui accompagnent les données sources et vous assurer de respecter toutes les modalités. Si vous êtes autorisé à redistribuer des points de données ou des produits dérivés, veuillez choisir une licence compatible avec la licence originale. Certaines licences peuvent vous obliger à sélectionner une licence équivalente (une licence dont les termes correspondent).

Si les données sont facilement accessibles d’une autre source et que vous n’avez pas manipulé ou modifié les ensembles de données pour votre recherche, veuillez envisager d’établir un lien avec la source originale plutôt que de les publier de nouveau.

Si les données sont facilement accessibles à partir d’une autre source et que vous n’avez pas manipulé ou modifié les jeux de données pour votre recherche, veuillez envisager d’établir un lien vers la source originale plutôt que de les publier de nouveau. Pour ce faire, utilisez le champ des identificateurs associés lorsque vous déposez vos données. Veuillez également inclure des citations complètes pour toutes les données ou tous les logiciels que vous avez réutilisés pour votre étude dans votre fichier Lisez-moi.

Si vous avez des questions au sujet d’une source en particulier, ou si vous souhaitez obtenir de l’aide pour choisir une licence, veuillez écrire à support@frdr-dfdr.ca.

### Données à diffusion restreinte

Sachez que nous ne sommes pas en mesure de restreindre l’accès aux données pour le moment. Bien que nous puissions établir un embargo pour protéger vos données du téléchargement à court terme, toutes les données déposées dans le DFDR selon les modalités actuelles seront éventuellement rendues publiques. Veuillez confirmer que vous pouvez partager vos données et que les mesures appropriées ont été prises pour les traiter et les anonymiser, au besoin. Vous devrez peut-être consulter les formulaires de consentement des participants ou d’autres documents pour confirmer que la publication des données dans le DFDR ne violera pas les conditions selon lesquelles vous avez recueilli vos données.

Voici quelques types courants de données à diffusion restreinte :

#### Données sur les participants humains

Si votre recherche implique des participants humains ou contient du matériel biologique humain, veuillez confirmer que vous consentez à partager vos données et à préparer vos données conformément aux lignes directrices légales ou éthiques applicables. Apprenez-en davantage sur les restrictions possibles et trouvez des conseils pour le traitement des données à partager sur les participants humains dans ce guide utile : [Puis-je partager mes données](https://doi.org/10.5281/zenodo.4046659)?. Si vous devez anonymiser ou dépersonnaliser vos données aux fins de dépôt, veuillez consulter le guide [Directives sur la dépersonnalisation des données](https://zenodo.org/record/4452825#.YNovQOhKhPY).

#### Données appartenant aux Autochtones

Les dirigeants des communautés autochtones sont les mieux placés pour évaluer les avantages et les risques liés au partage du savoir autochtone, ainsi que les données recueillies auprès des peuples autochtones, ou relatives aux terres, à l’eau ou à la glace autochtones. Ces données ne peuvent être partagées dans le DFDR que si les dirigeants communautaires ont convenu que le partage est approprié. Veuillez consulter votre comité d’éthique de la recherche ou, pour de plus amples renseignements, consultez :

* Les principes de [propriété, contrôle, accès et possession (PCAP®) des Premières Nations.](https://fnigc.ca/fr/les-principes-de-pcap-des-premieres-nations/)

* Centre de gouvernance de l’information des Premières Nations (CGIPN). [Stratégie de gouvernance des données des Premières Nations.](https://fnigc.ca/fr/ce-que-nous-faisons/partenariats-et-developpement-des-capacites/strategie-de-gouvernance-des-donnees-des-premieres-nations/) 31 mars 2020.

* Inuit Tapiriit Kanatami et Institut de recherche du Nunavut. [Negotiating Research Relationships with Inuit Communities: A Guide for Researchers (en anglais).](https://www.itk.ca/wp-content/uploads/2016/07/Negotitiating-Research-Relationships-Researchers-Guide_0.pdf)

* Inuit Tapiriit Kanatami. [Stratégie nationale inuite sur la recherche.](https://www.itk.ca/wp-content/uploads/2018/04/ITK_NISR-Report_French_low_res.pdf)

* Organisation nationale de la santé autochtone. [Principles of Ethical Métis Research](https://fnim.sehc.com/getmedia/bd0ef9fd-a05d-4b01-9cbd-6a7ca93f4f22/PrinciplesofEthicalMetisResearch-descriptive_001.pdf.aspx?ext=.pdf) and [What researchers Need from Métis Communities](https://fnim.sehc.com/getmedia/bd0ef9fd-a05d-4b01-9cbd-6a7ca93f4f22/PrinciplesofEthicalMetisResearch-descriptive_001.pdf.aspx?ext=.pdf) (en anglais).

* Global Indigenous Data Alliance. [CARE Principles for Indigenous Data Governance (en anglais).](https://www.gida-global.org/care)

#### Renseignements sur l’emplacement

Vous devrez peut-être supprimer ou rendre approximatifs les renseignements sur l’emplacement dans votre jeu de données. Envisagez de le faire si vous devez protéger la confidentialité des participants à l’étude, ou si vos données ont été recueillies dans des aires protégées, des sites archéologiques sensibles ou des propriétés privées où le consentement à révéler l’emplacement n’a pas été obtenu, pourrait dévaluer la propriété ou causer une stigmatisation. Vous devrez peut-être aussi supprimer ou rendre approximatives les données sur la présence d’espèces vulnérables. Pour de plus amples renseignements, les ressources suivantes peuvent être utiles :

* Le document [Ethical considerations in the use of geospatial data for research and statistics](https://uksa.statisticsauthority.gov.uk/publication/ethical-considerations-in-the-use-of-geospatial-data-for-research-and-statistics/) (en anglais) de la UK Statistics Authority.

* La [Liste rouge des espèces menacées](https://www.iucnredlist.org/fr/) (en anglais) pour la situation des espèces et les risques et menaces connus pour l’espèce.

* Le [Guide to Best Practices for Generalising Sensitive Species-Occurrence Data](https://docs.gbif.org/sensitive-species-best-practices/master/en/) (en anglais) du Système mondial d'informations sur la biodiversité. Cette ressource comprend une matrice pour évaluer le risque de préjudice et des directives pour généraliser l’information spatiale.
