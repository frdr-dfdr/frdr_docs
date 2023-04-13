Publiés pour la première fois en 2016, les principes FAIR ont été élaborés pour servir de principes directeurs concis et mesurables visant à garantir la découvrabilité (findable), l’accessibilité, l’interopérabilité et la réutilisation des (méta)données de recherche pour les humains et les machines, maximisant ainsi leur valeur scientifique (Wilkinson et al., 2016). Depuis leur introduction, les principes FAIR sont devenus une norme d’évaluation des outils et services de gestion des données de recherche et ont rapidement été adoptés par les organismes de financement, les éditeurs et les fournisseurs de service (Wilkinson et al., 2018).

Dans le DFDR, les principes FAIR s’articulent ainsi :

### ÈTRE FACILE À TROUVER:
**F1. Les (méta)données sont assorties d’un identifiant persistent et unique à l’échelle internationale.**

Le DFDR assigne un DOI à toutes les soumissions acceptées par l’entremise de DataCite Canada.

**F2. Les données sont décrites au moyen de métadonnées riches.**

Tout le contenu déposé directement dans le DFDR doit se conformer aux gabarits à partir desquels une description en XML de Dublin Core et de DataCite peut être générée; les champs de métadonnées personnalisés sont supportés avec l’objectif de les mettre en concordance avec des normes existantes.

**F3. Les (méta)données sont enregistrées et indexées dans une ressource recherchable.**

Le point d’extrémité OAI du DFDR est utilisé pour moissonner les métadonnées aux fins de découvrabilité dans l’index du DFDR des dépôts de données canadiens et ce point d’extrémité est ouvert au public.

**F4. Les métadonnées précisent l’identifiant des données.**

Les DOI et autres identifiants sont visibles sur la page d’accueil des objets.

### ÊTRE ACCESSIBLE :
**A1. Les (méta)données sont repérables par leur identifiant au moyen d’un protocole de communication normalisé.**

Les DOI sont indexés par des agrégateurs tels que re3data et les DOI peuvent être utilisés comme point d’entrée dans l’index du DFDR.

**A1.1 Le protocole est ouvert, gratuit et implémentable de manière universelle.**

DOI et OAI sont des normes ouvertes. En outre, le code du moissonneur du DFDR est disponible publiquement : [https://github.com/frdr-dfdr/frdr_harvest](https://github.com/frdr-dfdr/frdr_harvest).

**A1.2 Le protocole permet une procédure d’authentification et d’autorisation, lorsque requis.**

L’autorisation au moyen de Globus est supportée pour tout jeu de données qui n’est pas disponible publiquement et ORCiD peut être utilisé pour s’enregistrer aux fins d’autorisation.

**A2 Les métadonnées sont accessibles, même quand les données ne le sont plus.**

Le DFDR a été conçu pour maintenir une page mémorial pour les jeux de données retirés du DFDR.

### ÊTRE INTEROPÉRABLE :
**I1. Les (méta)données utilisent un langage formel, accessible, partagé et applicable globalement aux fins de représentation de la connaissance.**

Le DFDR travaille avec le Groupe d’experts sur la découverte des données de Portage pour faciliter l’utilisation d’OpenRefine et établir des concordances entre les termes du vocabulaire FAST et les mots-clés des métadonnées moissonnées.

**I2. Les (méta)données utilisent des vocabulaires qui adhèrent aux principes FAIR.**

Le vocabulaire FAST est conforme aux principes FAIR.

**I3. Les (méta)données comprennent des références qualifiées aux autres (méta)données.**

Lorsque possible, les curateurs du DFDR ont recours aux éléments « connexes » dans les jeux de données soumis afin d’améliorer le liage des données.

### ÊTRE RÉUTILISABLE :
**R1. Les méta(données) ont une pluralité d’attributs précis et pertinents.**

Le gabarit par défaut du DFDR se base sur les schémas Dublin Core et DataCite, qui sont robustes et à partir desquels les usagers peuvent choisir des attributs précis et pertinents.

**R1.1. Les (méta)données sont diffusées selon une licence d’utilisation claire et accessible.**

Par défaut, le DFDR utilise et encourage l’utilisation de la licence Creative Commons lorsque possible pour la soumission des données.

**R1.2. Les (méta)données sont associées à leur provenance.**

La provenance est automatiquement enregistrée à partir du journal de curation lors du processus d’approbation et est associée de manière permanente aux données déposées.

**R1.3. Les (méta)données se conforment aux normes de leurs communautés respectives.**

En plus de mettre en œuvre les schémas Dublin Core, DataCite, OAI et DOI tel qu’indiqué précédemment, nous communiquons avec les dépôts en cas de problématiques liées aux métadonnées pour y apporter les correctifs nécessaires.

À consulter également : <a href="https://www.go-fair.org/fair-principles/" target="_blank">https://www.go-fair.org/fair-principles/</a>

**Références**

Wilkinson, M. D., Dumontier, M., Aalbersberg, Ij. J., Appleton, G., Axton, M., Baak, A., … Mons, B. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. <a target="_blank" href="https://doi.org/10.1038/sdata.2016.18">https://doi.org/10.1038/sdata.2016.18</a>

Wilkinson, M. D., Schultes, E., Olavo Bonino, L., Sansone, S-A., Doorn, P., & Dumontier, M. (2018). FAIRMetrics/Metrics: FAIR Metrics, Evaluation results, and initial release of automated evaluator code. Zenodo. <a target="_blank" href="https://doi.org/10.5281/zenodo.1305060">https://doi.org/10.5281/zenodo.1305060</a>

