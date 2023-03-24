## Organisation de vos fichiers de données

### Sélection des types de données à déposer

Rassemblez vos fichiers de données, la documentation et tout renseignement nécessaire pour réutiliser votre ensemble de données. Vous pouvez choisir de fournir des données traitées, des données « brutes » non traitées, ou les deux, ainsi que les scripts, le code ou le logiciel requis pour générer ou réanalyser vos données.

Vous pouvez télécharger une version de vos scripts d’analyse en même temps que vos données, mais nous vous recommandons de déposer les modèles, le code source ou le logiciel de recherche dans des dépôts spécialisés comme GitHub, GitLab ou Bitbucket. Ceux-ci peuvent être conservés dans les archives de [Software Heritage](https://www.softwareheritage.org/save-and-reference-research-software) ou [Zenodo](https://docs.github.com/fr/repositories/archiving-a-github-repository/referencing-and-citing-content). Vous pouvez établir un lien direct avec eux et les autres résultats de vos [métadonnées du DFDR](description_de_vos_données.md#metadonnees-recommandees) en utilisant le champ « identifiant connexe » et les mentionner dans votre fichier Lisez-moi ([voir un modèle ici](/docs/txt/README-fr.txt)).

### Structure de vos fichiers

Lorsque vous déposez vos données dans le DFDR, la structure de vos fichiers (la façon dont vous avez organisé vos données dans des répertoires ou des dossiers) est conservée. Examinez la possibilité de classer vos fichiers par type de données, date de la collecte ou analyse afin d’en faciliter la compréhension. Exemples :

**Exemple a)**

	├──Code
	│   ├──traitement_donnees_brutes.r
	│   ├──analyse_1.r
	│   ├──analyse_2.r
	├──Données
	│   ├──Donnees_brutes
	│   │   ├──fichier_a.raw
	│   │   └──fichier_b.raw
	│   └──Donnees_traitees
	│   ├──fichier_a.csv
	│   └──fichier_b.csv
	├──Résultats
	│   ├──Figures
	│   └──Modèles
	└──Lisez-moi.txt

**Exemple b)**

	├──Documentation
	│   ├──site_information.csv
	│   ├──site_1.shp
	│   └──site_2.shp
	├──Données
	│   ├──annee_01
	│   │   ├──site_1.csv
	│   │   └──site_2.csv
	│   └──annee_02
	│   ├──site_1.csv
	│   └──site_2.csv
	└──Lisez-moi.txt

### Conseils concernant le nom des fichiers
Donnez à vos fichiers des noms logiques et descriptifs que les autres chercheur(-se)s et vous pourrez comprendre d’un coup d’œil. Le nom des fichiers devrait être court et inclure des renseignements sur le projet, le contenu, la date ou le numéro de version. Utilisez des caractères alphanumériques et évitez les espaces, les accents et les caractères spéciaux (%^& * ’). Votre façon de nommer vos fichiers devrait être décrite dans votre fichier Lisez-moi.

_Exemple : MontRoyal_Temperatures_20200801.csv

_Exemple : AnalysePoeme_IV05_v03.txt

Pour obtenir d’autres conseils, consultez la page sur les [conventions d’appellation des fichiers](https://researchdata.library.ubc.ca/plan/organize-your-data/) de l’Université de la Colombie-Britannique (en anglais seulement) ou les documents [Nommage de fichiers et gestion de versions](https://www.uottawa.ca/bibliotheque/gestion-donnees-recherche/designation-fichiers-disposition-donnees) de l’Université d’Ottawa ou [Nommage des fichiers numériques](https://www.usherbrooke.ca/biblio/archives/boite-a-outils-archivistiques/nommage-des-fichiers-numeriques-et-abreviations) de l’Université de Sherbrooke.

### Choix de formats de fichier faciles à préserver

Nous vous recommandons de déposer vos fichiers dans des formats ouverts et non exclusifs afin d’en faciliter l’accès et la préservation à long terme. Le DFDR accepte et assure la préservation des bits pour différents formats de fichiers, notamment :

* Valeurs séparées par des virgules (CSV) pour les données tabulaires
* Formats de texte clair semi-structurés pour les données non tabulaires
* Texte clair structuré (XML, JSON)
* Images : JPEG, PNG, TIFF, SVG, GIF, DICOM, NIfTI
* Contenu audio : FLAC, AIFF, WAV, MP3, AAC
* Contenu  vidéo : MOV, MPEG-4, MKV
* Formats d’archivage de fichiers compressés : TAR.GZ, 7Z, ZIP
* Ensembles de données volumineux structurés HDF5, NetCDF
* Données géospatiales : GeoTIFF, SHP, KML, GeoJSON
* Spectrométrie de masse : mzML

S’il est nécessaire d’utiliser des formats exclusifs ou un logiciel propre à un fournisseur pour analyser ou réutiliser vos fichiers, soyez conscient que cela pourrait en restreindre l’accès et nuire à la stabilité et à l’interprétabilité des données au fil du temps. Posez-vous les questions suivantes :

* Un logiciel ou instrument spécialisé a-t-il été utilisé pour générer ou analyser vos fichiers? Avez-vous la possibilité d’exporter les fichiers dans un format ouvert (p. ex., texte clair)?
* Quels sont les formats de fichiers largement utilisés dans votre domaine? Est-il probable que d’autres chercheur(-se)s auront accès au logiciel requis pour ouvrir vos fichiers? Est-il probable que vous aurez accès au logiciel requis dans 5 ou 10 ans?
* Si vous transformez vos fichiers dans un format libre en vue de leur dépôt, est-ce que certains renseignements (données, métadonnées, formatage, macros, etc.) seront perdus? Ces renseignements peuvent-ils être représentés d’une autre façon, par exemple en ajoutant une variable supplémentaire à un fichier tabulaire ou en les incluant dans un autre fichier de texte brut ou fichier de documentation?
* Si des formats de fichiers exclusifs sont nécessaires ou préférables, pouvez-vous aussi télécharger les fichiers dans un format libre?

Pour en savoir davantage sur les formats de préservation, consultez les lignes directrices publiées par [Bibliothèque et Archives nationales du Québec](https://numerique.banq.qc.ca/patrimoine/details/52327/4076856), [UK Data Service](https://www.ukdataservice.ac.uk/manage-data/format/recommended-formats) (en anglais seulement) ou [l’Université d’Édimbourg](https://www.ed.ac.uk/information-services/research-support/research-data-service/after/data-repository/choosing-file-formats) (en anglais seulement).

## Documentation de votre soumission

Les données ne seront utiles (et bénéfiques) à long terme que si elles sont décrites en détail. Pour vous assurer que vos données seront interprétées correctement, il est important d’accompagner vos données d’un livre de code et/ou d’un fichier Lisez-moi et de consigner vos méthodes de collecte. Pour cette raison, un(e) curateur(-trice) du DFDR vous demandera de joindre un fichier Lisez-moi à votre soumission. Vous pouvez créer votre propre fichier ou utiliser le [modèle de fichier Lisez-moi du DFDR](/docs/txt/README-fr.txt) (adaptation de Cornell) disponible en français et en anglais.

Conseils pour créer des fichiers Lisez-moi :

* Nommez votre fichier Lisez-moi.txt (ou donnez-lui un nom similaire).
* Fournissez les coordonnées d’une personne-ressource dans votre fichier Lisez-moi.
* Si vos données proviennent (en totalité ou en partie) de sources externes, citez ces sources de façon détaillée dans votre fichier Lisez-moi.
	* Il y aura peut-être une référence recommandée ou exigée pour vos données provenant d’autres sources que vous pourrez copier; sinon, nous vous recommandons d’indiquer les renseignements suivants :
		* le titre;
		* les auteur(e)s;
		* l’établissement ou le dépôt ayant publié les données;
		* l’identifiant d'objet numérique (DOI), s’il est disponible, ou un autre identifiant unique;
		* le lien vers la page de renvoi des données ou le dossier de métadonnées, s’il est disponible en ligne;
		* la date d’accès et/ou le numéro de version, puisque les ressources en ligne peuvent changer.
* Indiquez toute restriction concernant l’utilisation secondaire de vos données dans le fichier Lisez-moi, y compris toute restriction sur les données provenant de sources tierces.
* Définissez toutes les variables et les valeurs admissibles. S’il y a lieu, indiquez les unités de mesure et définissez le code que vous avez utilisé pour les valeurs manquantes ou nulles.
* Décrivez brièvement votre étude, les méthodes que vous avez utilisées pour recueillir vos données et toutes les étapes que vous avez suivies pour traiter les données que vous déposez.
* Si vous avez supprimé des variables de votre ensemble de données brutes pour créer une copie à usage public à des fins d’archivage, songez à inclure une liste des variables supprimées afin que les changements apportés à votre ensemble de données brutes soient transparents. Vous pouvez également fournir des statistiques sommaires ou un nombre d’occurrences pour toute variable supprimée.
* Le nom de l’équipement ou des instruments ayant servi pour la collecte des données, de même que les logiciels ou progiciels statistiques qui ont été utilisés pour traiter les données, doivent être énumérés dans le fichier Lisez-moi. Si possible, indiquez la version du logiciel que vous avez utilisé.
* Songez à fournir des renseignements sur les documents connexes, les protocoles d’étude ou d’autres documents qui fourniront plus de contexte à vos données.
* Si vos fichiers ne sont pas en format de texte clair, envisagez de recommander un logiciel qui pourra être utilisé pour les consulter ou les analyser.
* Si vous prévoyez déposer un code ou un logiciel, fournissez une description de ce que le code fait, des renseignements sur l’environnement informatique, les dépendances exigées, les entrées requises et les résultats attendus ainsi que toute instruction nécessaire à l’installation ou à l’exécution.

Pour obtenir d’autres conseils, consultez les documents [Guide rapide : Créer un fichier README pour vos ensembles de données](https://doi.org/10.5281/zenodo.4058962) de l’Université de la Colombie-Britannique et [Guide to writing "readme" style metadata](https://data.research.cornell.edu/content/readme) de l’Université Cornell (en anglais seulement).

## Vérification de vos données

Une fois que vous aurez soumis vos données, un membre de l’équipe de curation du DFDR examinera votre dépôt. Les curateur(-trice)s collaboreront avec vous pour garantir la qualité des métadonnées dans le dépôt et pourraient suggérer des modifications pour que vos données soient plus faciles à trouver et plus accessibles. Voici quelques points à prendre en considération avant de soumettre vos données :

* *Avez-vous fourni un fichier Lisez-moi, un livre de code ou tout autre document nécessaire?* Il pourrait être utile de fournir d’autres documents, par exemple une description de votre méthodologie, des renseignements sur les protocoles de l’étude, des plans d’analyse statistique, une copie de votre plan de gestion des données, une copie non signée de tout formulaire de consentement que vous avez fourni aux participant(e)s à l’étude ou des rapports d’étude clinique.
* *Votre ensemble de données est-il complet?* Avez-vous fourni tous les fichiers que vous avez l’intention de partager et retiré ceux qui ne peuvent pas ou ne devraient pas être partagés? Les fichiers (ou types de fichiers) sont-ils tous décrits dans le fichier Lisez-moi?
* *Vos fichiers sont-ils complets?* Avez-vous défini les variables et les valeurs admissibles, indiqué les unités de mesure et décrit les valeurs nulles, au besoin?
* Si vos fichiers sont dans un format exclusif, *avez-vous fourni des renseignements sur l’instrument ou le logiciel utilisé pour générer les fichiers* ainsi que des recommandations pour visualiser le contenu?
* *Avez-vous indiqué les sources tierces* d’où proviennent les données ou le code ayant servi à vos analyses? Consultez la section [Utilisation secondaire des données ou du code](#utilisation-secondaire-des-donnees-ou-du-code).
* *Avez-vous confirmé qu’aucun de vos fichiers ne contient de renseignements protégés ou à diffusion restreinte?* Consultez la section [Données à diffusion restreinte](#donnees-a-diffusion-restreinte).

### Utilisation secondaire des données ou du code

Avez-vous obtenu des données ou un code auprès d’un tiers qui pourrait détenir des droits d’auteur ou des droits de propriété intellectuelle qui vous empêcheraient de les redistribuer? La source de données originale permet-elle la redistribution, mais avec certaines restrictions?

Si vous comptez redistribuer des données ou un code ou publier des données provenant d’une source tierce, vous devrez confirmer que vous avez la permission de publier ces données dans le DFDR avant que votre soumission puisse être approuvée par un(e) curateur(-trice). Vous ne savez pas si vous avez besoin d’une permission? Les données qui sont librement accessibles à des fins de recherche ne sont pas nécessairement « gratuites ». Répondez aux questions suivantes :

* Avez-vous dû ouvrir une session sur un site Web pour télécharger les données?
* Avez-vous accepté des conditions d’utilisation précises, signé un accord d’utilisation des données ou conclu une entente avec le fournisseur de données qui vous empêcherait de publier ces données dans le DFDR?

Consultez la licence ou les modalités qui accompagnent les données sources pour confirmer que vous respectez toutes les modalités. Si vous avez l’autorisation de redistribuer des points de données ou des produits dérivés, veuillez choisir une licence dans le DFDR qui est compatible avec la licence originale.

Si les données ou le code sont facilement accessibles à partir d’une autre source et que vous n’avez procédé à aucune manipulation ou modification pour votre recherche, examinez la possibilité d’établir un lien avec la source originale plutôt que de les publier de nouveau. Pour ce faire, utilisez le champ « identifiant connexe » lorsque vous déposez vos données. Veuillez également fournir des références complètes pour toutes les données ou tout logiciel que vous avez réutilisés dans votre fichier Lisez-moi.

Si vous avez des questions concernant une source en particulier ou souhaitez obtenir de l’aide pour choisir une licence, envoyez un courriel à [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

### Données à diffusion restreinte

Notez qu’il nous est impossible de restreindre l’accès aux données à l’heure actuelle. Bien que nous puissions appliquer un embargo pour éviter que vos données soient téléchargées à court terme, pour l’instant, toutes les données qui sont déposées dans le DFDR finiront par être accessibles au public. Veuillez confirmer que vous pouvez partager vos données et que toutes les mesures nécessaires ont été prises pour les traiter, les regrouper ou les anonymiser, au besoin. Vous devrez peut-être consulter vos ententes de recherche, les formulaires de consentement des participant(e)s ou d’autres documents pour confirmer que la publication des données dans le DFDR ne contreviendra pas aux modalités en vertu desquelles vous les avez recueillies.

Voici quelques types courants de données à diffusion restreinte :

#### Données sur des participant(e)s humain(e)s

Si votre recherche implique des participant(e)s humain(e)s ou contient du matériel biologique humain, confirmez que vous avez le consentement nécessaire pour partager vos données dans un dépôt public à des fins de nouvelles recherches. Veuillez préparer vos données conformément aux lignes directrices juridiques ou éthiques qui s’appliquent. Lorsque vous passerez en revue votre formulaire de consentement, consultez les documents [Langage en matière de gestion de données de recherche pour le consentement éclairé](https://doi.org/10.5281/zenodo.4107186) du groupe d’experts sur les données sensibles de l’Alliance et [Recommended Informed Consent Language for Data Sharing](https://www.icpsr.umich.edu/web/pages/datamanagement/confidentiality/conf-language.html%23:~:text=The%20informed%20consent%20may%20include,%5D%20to%20withhold%20this%20information.%22) du ICPSR (en anglais seulement); ils pourraient vous aider à déterminer le libellé qui interdirait le partage de données. Si vous n’avez pas reçu le consentement nécessaire pour partager les données, veuillez consulter les [Lignes directrices pour verser des données existantes dans des dépôts publics](https://ethics.gc.ca/fra/depositing_depots.html) publiées par les trois organismes et discuter avec votre comité d’éthique en recherche.

Consultez le guide [Puis-je partager mes données](https://doi.org/10.5281/zenodo.4270549) ? pour obtenir des renseignements utiles au sujet des restrictions possibles et des conseils sur le traitement des données sur des participant(e)s humain(e)s à des fins de partage. Si vous devez anonymiser ou dépersonnaliser vos données afin de les déposer, consultez les [Directives sur la dépersonnalisation des données](https://doi.org/10.5281/zenodo.4452825).

Si vous souhaitez que nous examinions votre formulaire de consentement avant la soumission, envoyez un courriel à [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca). À l’heure actuelle, l’équipe de curation du DFDR ne peut pas vous aider à dépersonnaliser vos données.

#### Données appartenant aux Autochtones

Les dirigeant(e)s des communautés autochtones sont les mieux placé(e)s pour évaluer les avantages et les risques liés au partage du savoir autochtone, des données recueillies auprès des membres de leurs communautés et des données recueillies sur les terres, les eaux et les glaces autochtones. Ces données ne peuvent être partagées dans le DFDR que si les dirigeant(e)s communautaires ont convenu qu’il est approprié de les rendre publiques en les déposant dans le DFDR ou dans un dépôt de données d’intérêt général. Pour toute question, veuillez consulter les communautés autochtones avec lesquelles vous avez collaboré ainsi que le bureau des relations autochtones ou le comité d’éthique en recherche de votre établissement. Pour obtenir des renseignements supplémentaires, consultez :

* Les principes de [propriété, de contrôle, d’accès et de possession (PCAP®)](https://fnigc.ca/fr/les-principes-de-pcap-des-premieres-nations/) des Premières Nations
* Inuit Tapiriiti Kanatami et Institut de recherche du Nunavut – [Negotiating Research Relationships with Inuit Communities: A Guide for Researchers](https://www.itk.ca/wp-content/uploads/2016/07/Negotitiating-Research-Relationships-Researchers-Guide_0.pdf) (en anglais seulement)
* Inuit Tapiriiti Kanatami – [Stratégie nationale inuite sur la recherche](https://www.itk.ca/wp-content/uploads/2018/04/ITK_NISR-Report_French_low_res.pdf)
* Organisation nationale de la santé autochtone – [Principles of Ethical Métis Research](https://fnim.sehc.com/getmedia/bd0ef9fd-a05d-4b01-9cbd-6a7ca93f4f22/PrinciplesofEthicalMetisResearch-descriptive_001.pdf.aspx?ext=.pdf) et [What Researchers Need from Métis Communities](https://fnim.sehc.com/getmedia/ebbbb9b6-35bf-451e-9c48-48e7e62e454f/Metis-Research-Fact-Sheet.pdf.aspx?ext=.pdf) (en anglais seulement)
* Global Indigenous Data – [CARE Principles for Indigenous Data Governance](https://www.gida-global.org/care) (en anglais seulement)

#### Renseignements sur l’emplacement

Vous devrez peut-être retirer ou brouiller les renseignements sur l’emplacement dans votre ensemble de données. Songez à le faire si vous devez protéger la confidentialité des participant(e)s à l’étude ou si vos données ont été recueillies dans des zones protégées, sur des sites archéologiques sensibles ou sur des propriétés privées où le consentement à révéler l’emplacement n’a pas été obtenu ou que le dévoilement de ces renseignements pourrait dévaluer la propriété ou causer une stigmatisation. Vous devrez peut-être aussi retirer ou brouiller les données sur la présence d’espèces vulnérables. Pour en savoir davantage, les ressources suivantes pourraient être utiles :

* UK Statistics Authority – [Ethical considerations in the use of geospatial data for research and statistics](https://uksa.statisticsauthority.gov.uk/publication/ethical-considerations-in-the-use-of-geospatial-data-for-research-and-statistics/) (en anglais seulement)
* La [Liste rouge des espèces menacées](https://www.iucnredlist.org/fr/) de l’Union internationale pour la conservation de la nature (en anglais seulement)
* Système mondial d’informations sur la biodiversité – [Guide to Best Practices for Generalising Sensitive Species-Occurrence Data](https://docs.gbif.org/sensitive-species-best-practices/master/en/) (en anglais seulement). Cette ressource comprend une matrice pour évaluer le risque de préjudice et des directives pour généraliser l’information spatiale.

#### Données de l’industrie

Si vos données ont été recueillies avec un partenaire de l’industrie, il pourrait y avoir des restrictions quant aux données que vous pouvez partager ou au moment où vous pouvez les partager. Veuillez passer en revue tout contrat de recherche ou tout autre accord que vous pourriez avoir signé, puis confirmez que vous avez l’autorisation de publier les données dans le DFDR avant de les déposer.