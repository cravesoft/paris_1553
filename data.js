// ── Données pour la carte de Paris · Truschet et Hoyau (c.1553) ──────────

// ── Dimensions de l'image source ────────────────
const IMG_W = 12736;
const IMG_H = 8880;

// ── Couleurs par catégorie ───────────────────────
const COLORS = {
    religious: '#5b8fb9',
    royal:     '#c9a435',
    civic:     '#6a9f5b',
    bridge:    '#b85c38',
    gate:      '#9b59b6',
    place:     '#7f8c8d'
};

const CATEGORY_LABELS = {
    religious: 'Édifices religieux',
    royal:     'Palais et résidences royales',
    civic:     'Édifices civils',
    bridge:    'Ponts',
    gate:      'Portes et fortifications',
    place:     'Quartiers et lieux notables'
};

const CATEGORY_ICONS = {
    religious: '✝',
    royal:     '♛',
    civic:     '⚖',
    bridge:    '⩋',
    gate:      '⛩',
    place:     '◎'
};

// ── Lieux ────────────────────────────────────────
const events = [

    // ── Édifices religieux ──
    {
        id: "notre_dame",
        name: "Cathédrale Notre-Dame de Paris",
        category: 'religious',
        px: 7037, py: 4065,
        description: "Chef-d'œuvre gothique dont la construction débuta en 1163 sous l'évêque Maurice de Sully, consacrée en 1345. Cœur spirituel de Paris et de la chrétienté française, siège de l'archevêché, lieu de célébrations royales et religieuses.",
        quartier: "Île de la Cité"
    },
    {
        id: "sainte_chapelle",
        name: "Sainte-Chapelle",
        category: 'religious',
        px: 6842, py: 4903,
        description: "Joyau de l'architecture gothique rayonnante, érigée entre 1242 et 1248 par Louis IX pour abriter la Couronne d'épines du Christ. Ses verrières de 15 mètres de haut composent la plus grande surface vitrée médiévale conservée.",
        quartier: "Île de la Cité"
    },
    {
        id: "saint_eustache",
        name: "Église Saint-Eustache",
        category: 'religious',
        px: 4333, py: 5541,
        description: "Entamée en 1532, cette vaste église gothique flamboyant du quartier des Halles était encore en construction en 1553. Dédiée à la paroisse des marchands et artisans du marché central, elle ne sera achevée qu'en 1637.",
        quartier: "Les Halles, Rive Droite"
    },
    {
        id: "saint_germain_des_pres",
        name: "Abbaye Saint-Germain-des-Prés",
        category: 'religious',
        px: 8846, py: 6917,
        description: "Abbaye bénédictine fondée au VIe siècle par Childebert Ier pour abriter la tunique de saint Vincent. L'une des plus puissantes abbayes de France, elle formait une seigneurie autonome aux portes de Paris, avec son propre marché et son faubourg.",
        quartier: "Faubourg Saint-Germain, Rive Gauche"
    },
    {
        id: "saint_victor",
        name: "Abbaye Saint-Victor",
        category: 'religious',
        px: 8263, py: 2621,
        description: "Abbaye augustinienne fondée en 1113 par Guillaume de Champeaux, célèbre pour sa bibliothèque encyclopédique (la Bibliothèque de Saint-Victor). Centre intellectuel et théologique, hors des murs côté Rive Gauche.",
        quartier: "Rive Gauche, Est"
    },
    {
        id: "saint_gervais",
        name: "Église Saint-Gervais-et-Saint-Protais",
        category: 'religious',
        px: 5607, py: 3323,
        description: "L'une des plus anciennes paroisses de Paris, dont l'église gothique fait face à la Place de Grève. Lieu de culte du quartier de l'Hôtel de Ville et des artisans de la Rive Droite orientale.",
        quartier: "Marais, Rive Droite"
    },
    {
        id: "saint_severin",
        name: "Église Saint-Séverin",
        category: 'religious',
        px: 7739, py: 4581,
        description: "Église gothique flamboyant au cœur du Quartier Latin, l'une des plus anciennes de Paris. Paroisse des étudiants et des libraires de la Rive Gauche, non loin de la Sorbonne.",
        quartier: "Quartier Latin, Rive Gauche"
    },
    {
        id: "cordeliers",
        name: "Couvent des Cordeliers",
        category: 'religious',
        px: 8545, py: 5418,
        description: "Grand couvent franciscain de la Rive Gauche, fondé en 1230. Ses bâtiments s'étendaient sur un vaste terrain entre la Seine et le Quartier Latin. Le réfectoire, encore debout, accueille aujourd'hui un musée.",
        quartier: "Rive Gauche"
    },
    {
        id: "abbaye_saint_antoine",
        name: "Abbaye Saint-Antoine-des-Champs",
        category: 'religious',
        px: 5326, py: 1100,
        description: "Abbaye cistercienne fondée en 1198 par Foulques de Neuilly, à l'est de Paris hors les murs. Elle a donné son nom au faubourg Saint-Antoine et à la rue éponyme. Ses terres s'étendaient jusqu'à la Bastille. Transformée en hôpital après la Révolution, elle subsiste sous le nom d'Hôpital Saint-Antoine.",
        quartier: "Faubourg Saint-Antoine, Hors les murs"
    },
    {
        id: "abbaye_sainte_genevieve",
        name: "Abbaye Sainte-Geneviève",
        category: 'religious',
        px: 9406, py: 3594,
        description: "Abbaye bénédictine fondée sur la Montagne Sainte-Geneviève, abritant les reliques de la patronne de Paris. L'une des fondations religieuses les plus anciennes de la ville, réformée au XIe siècle par le chanoine Ivo. Le Panthéon sera construit sur son emplacement au XVIIIe siècle.",
        quartier: "Montagne Sainte-Geneviève, Rive Gauche"
    },
    {
        id: "college_bernardins",
        name: "Collège des Bernardins",
        category: 'religious',
        px: 7789, py: 3516,
        description: "Collège cistercien fondé en 1245, l'un des plus grands édifices gothiques médiévaux de Paris. Destiné aux moines bernardins venant étudier à l'Université de Paris, il pouvait accueillir jusqu'à vingt religieux. Son réfectoire gothique, rue de Poissy, est toujours debout.",
        quartier: "Quartier Latin, Rive Gauche"
    },
    {
        id: "celestins",
        name: "Couvent des Célestins",
        category: 'religious',
        px: 6119, py: 1752,
        description: "Couvent de l'ordre des Célestins (branche réformée des bénédictins fondée par le pape Célestin V) sur la Rive Droite, entre l'Hôtel de Ville et la Bastille, au bord de la Seine. Fondé en 1352, il jouissait de la protection royale et abritait des sépultures princières. Supprimé et démoli à la Révolution.",
        quartier: "Rive Droite, Est"
    },

    {
        id: "saint_germain_auxerrois",
        name: "Église Saint-Germain-l'Auxerrois",
        category: 'religious',
        px: 5548, py: 5711,
        description: "Paroisse royale immédiatement à l'est du Louvre, dont les rois de France et leurs courtisans étaient les paroissiens habituels. Édifice gothique flamboyant des XIIe–XVe siècles. Son porche gothique et sa rosace en font l'un des plus beaux exemples de l'architecture parisienne. En 1572, son bourdon donnera le signal de la Saint-Barthélemy.",
        quartier: "Rive Droite, Ouest"
    },
    {
        id: "saint_jacques_boucherie",
        name: "Église Saint-Jacques-de-la-Boucherie",
        category: 'religious',
        px: 5258, py: 4482,
        description: "Grande église paroissiale de la Rive Droite, près du Grand Châtelet, point de départ du pèlerinage vers Saint-Jacques-de-Compostelle pour les Parisiens de la rive droite. Entièrement reconstruite en gothique flamboyant aux XVe–XVIe siècles. Son beffroi (Tour Saint-Jacques), seul vestige après la démolition de l'église en 1797, est toujours debout.",
        quartier: "Rive Droite"
    },
    {
        id: "prieure_saint_martin",
        name: "Prieuré Saint-Martin-des-Champs",
        category: 'religious',
        px: 0, py: 0,
        px: 2968, py: 3982,
        description: "Prieuré clunisien fondé en 1067 par Henri Ier, l'un des plus anciens établissements religieux de Paris. Son église romane et ses bâtiments conventuels forment un vaste ensemble au nord du Marais. En 1553, le prieuré conserve une grande influence religieuse et foncière. Ses bâtiments abritent aujourd'hui le Musée des Arts et Métiers.",
        quartier: "Rive Droite, Nord-Est"
    },
    {
        id: "jacobins",
        name: "Couvent des Jacobins (Dominicains)",
        category: 'religious',
        px: 9351, py: 4572,
        description: "Grand prieuré dominicain fondé en 1218 rue Saint-Jacques, sur la Rive Gauche, l'un des premiers et des plus influents couvents mendiants de Paris. Centre intellectuel de premier plan au Moyen Âge (saint Thomas d'Aquin y enseigna). En 1553, il reste un foyer de théologie et de prédication. Détruit à la Révolution.",
        quartier: "Quartier Latin, Rive Gauche"
    },
    {
        id: "augustins",
        name: "Couvent des Augustins",
        category: 'religious',
        px: 7245, py: 5814,
        description: "Couvent des ermites de Saint-Augustin sur la Rive Gauche, au bord de la Seine, fondé en 1293. L'un des plus grands couvents mendiants parisiens, avec une belle église gothique. Sa bibliothèque était réputée. Les Quai et Rue des Grands-Augustins conservent son souvenir. Supprimé à la Révolution, ses bâtiments servirent à conserver les œuvres d'art nationalisées.",
        quartier: "Rive Gauche, Ouest"
    },
    {
        id: "saint_merri",
        name: "Église Saint-Merry",
        category: 'religious',
        px: 4838, py: 4240,
        description: "Église gothique flamboyant de la Rive Droite, entre le Grand Châtelet et les Halles, construite entre 1500 et 1552 — pratiquement achevée au moment de la carte. Dédiée à saint Méderic, abbé du VIIe siècle. Sa façade sculptée et son clocher sont représentatifs du gothique parisien tardif. Toujours debout, rue Saint-Martin.",
        quartier: "Rive Droite"
    },
    {
        id: "crypte_martyrium_saint_denis",
        name: "Crypte du Martyrium de saint Denis",
        category: 'religious',
        px: 780, py: 6538,
        description: "Sous la butte Montmartre — le Mons Martyrum —, une crypte perpétue le souvenir de la décapitation de saint Denis, premier évêque de Paris, vers 258 après J.-C. L'abbaye bénédictine Notre-Dame-de-Montmartre, fondée en 1133 par la reine Adèle de Savoie, en entretint le culte. Le 15 août 1534, Ignace de Loyola et six compagnons y prononcèrent leurs vœux fondateurs de la Compagnie de Jésus.",
        quartier: "Montmartre, Hors les murs"
    },
    {
        id: "crypte_notre_dame_des_champs",
        name: "Crypte Notre-Dame-des-Champs",
        category: 'religious',
        px: 11090, py: 4460,
        description: "La tradition attribue à saint Denis lui-même la fondation d'un premier lieu de culte chrétien dans cet espace souterrain, vers le IIIe siècle. Au XIe siècle, les bénédictins de Marmoutier y élevèrent l'église Sainte-Marie-des-Vignes, étape du cortège funèbre des rois de France en route vers Saint-Denis — les corps de Charles VII, Charles VIII et Anne de Bretagne y reposèrent avant leur inhumation. En 1553, le sanctuaire, niché dans les vignes du faubourg sud, demeurait un lieu de dévotion mariale et un souvenir des origines de la chrétienté parisienne.",
        quartier: "Faubourg, Rive Gauche Sud"
    },
    {
        id: "collegiale_saint_marcel",
        name: "Collégiale Saint-Marcel",
        category: 'religious',
        px: 10006, py: 1491,
        description: "Fondée sur le tombeau de saint Marcel, huitième évêque de Paris mort en 436, cette collégiale est l'un des foyers chrétiens les plus anciens de la rive gauche. Rebâtie vers 1040 puis élevée au rang de collégiale en 1158, elle accueillait le pèlerinage au saint et renfermait la sépulture du théologien Pierre Lombard. En 1553, l'église, hors les murs dans le faubourg Saint-Marcel, restait un pôle religieux du sud de Paris.",
        quartier: "Faubourg Saint-Marcel, Rive Gauche"
    },
    {
        id: "eglise_saint_julien_le_pauvre",
        name: "Église Saint-Julien-le-Pauvre",
        category: 'religious',
        px: 7549, py: 4367,
        description: "Comptant parmi les plus anciens lieux de culte de Paris, Saint-Julien-le-Pauvre fut reconstruite vers 1160–1170 par les chanoines de Longpont-sur-Orge dans un style roman-gothique de transition si proche de celui de Notre-Dame qu'on y voit la main des mêmes bâtisseurs. Jusqu'en 1524, l'Université de Paris y tenait ses assemblées générales et y élisait son recteur. En 1553, l'église et son hospice de pèlerins demeuraient au cœur de la vie universitaire et spirituelle du Quartier Latin.",
        quartier: "Quartier Latin, Rive Gauche"
    },
    {
        id: "eglise_saint_andre_des_arts",
        name: "Église Saint-André-des-Arts",
        category: 'religious',
        px: 7760, py: 5155,
        description: "Érigée entre 1210 et 1212 sur des terres enclavées par l'enceinte de Philippe Auguste, Saint-André-des-Arts fut l'une des premières paroisses à naître intra-muros sur la rive gauche. Longtemps sous la dépendance de l'abbaye Saint-Germain-des-Prés, elle passa en 1345 sous le patronage de l'Université. En 1553, la paroisse animait un quartier étudiant et artisanal dense ; l'église fut démolie en 1807, laissant son nom à la place et aux rues voisines.",
        quartier: "Rive Gauche"
    },
    {
        id: "augustines_madeleine",
        name: "Augustines de la Pénitence de la Madeleine",
        category: 'religious',
        px: 4513, py: 5879,
        description: "Fondé vers 1492 par le prédicateur franciscain Jean Tisserand pour recueillir des femmes pénitentes, cet ordre féminin adopta la règle de saint Augustin, approuvée par Alexandre VI en 1497. Installées à l'Hôtel d'Orléans dès 1498, les religieuses jouissaient de la faveur royale de Louis XII puis de Henri IV. En 1553, la communauté occupait encore sa première demeure, avant son déménagement contraint vers la rue Saint-Denis en 1572.",
        quartier: "Rive Droite"
    },
    {
        id: "eglise_saint_julien_menestriers",
        name: "Église Saint-Julien-des-Ménétriers",
        category: 'religious',
        px: 3950, py: 4250,
        description: "Fondée en 1328 par deux ménestrels, l'un lombard, l'autre lorrain, cette chapelle-hôpital était l'émanation corporative des musiciens parisiens, organisés en confrérie dès 1331. Son portail sculpté de musiciens en relief en faisait une curiosité architecturale unique dans Paris. En 1553, l'église demeurait le lieu de rassemblement et de dévotion de la guilde des ménétriers, gardiens de la musique profane dans la capitale.",
        quartier: "Rive Droite"
    },
    {
        id: "eglise_saint_medard",
        name: "Église Saint-Médard",
        category: 'religious',
        px: 10030, py: 2156,
        description: "Ancrée dans le faubourg Saint-Marcel, Saint-Médard perpétuait un lieu de culte dont les racines remontaient aux premiers siècles chrétiens, des sépultures mérovingiennes témoignant d'une continuité depuis le VIe siècle. Reconstruite en pierre à partir du XVe siècle en mêlant gothique flamboyant et premières influences Renaissance, son chantier se poursuivait encore en 1553. La paroisse desservait la population laborieuse du faubourg, avant que l'église ne devienne célèbre au XVIIIe siècle pour les convulsionnaires jansénistes.",
        quartier: "Faubourg Saint-Marcel, Rive Gauche"
    },
    {
        id: "eglise_saint_paul_des_champs",
        name: "Ancienne église Saint-Paul-des-Champs",
        category: 'religious',
        px: 5460, py: 2179,
        description: "Issue d'une chapelle fondée vers 631 par saint Éloi, Saint-Paul-des-Champs devint paroisse en 1125, puis, par la proximité des résidences royales (Hôtel Saint-Pol, Hôtel des Tournelles), l'église paroissiale de la cour capétienne dans le Marais : Charles VI y fut baptisé en 1368, Charles VII en 1403. En 1553, c'est encore une église de prestige dans un quartier aristocratique en pleine transformation, avant d'être remplacée au XVIIe siècle par Saint-Paul-Saint-Louis, chef-d'œuvre des jésuites.",
        quartier: "Marais, Rive Droite"
    },
    {
        id: "eglise_saint_sulpice",
        name: "Église Saint-Sulpice",
        category: 'religious',
        px: 9347, py: 6138,
        description: "Un oratoire existe sur ce site dès le IXe siècle, dans la mouvance du domaine de l'abbaye Saint-Germain-des-Prés ; une première église paroissiale y est attestée vers 1180. En 1553, l'édifice médiéval dessert une paroisse du Faubourg Saint-Germain, hors les murs de la ville close. La grande reconstruction baroque — l'un des édifices les plus vastes de Paris — ne débutera qu'en 1646.",
        quartier: "Faubourg Saint-Germain, Rive Gauche"
    },
    {
        id: "eglise_saint_jean_rond",
        name: "Église Saint-Jean-le-Rond",
        category: 'religious',
        px: 6886, py: 4093,
        description: "Accolée au flanc nord de la cathédrale Notre-Dame, Saint-Jean-le-Rond était un baptistère de plan circulaire, vestige des complexes cathédraux paléochrétiens. Reconstruite au XIIIe siècle, elle servait aux cérémonies baptismales du diocèse et à la vie paroissiale des chanoines. En 1553, discrète dans l'ombre de Notre-Dame, elle demeurait le lieu du baptême de nombreux Parisiens de l'Île de la Cité, avant sa démolition en 1748.",
        quartier: "Île de la Cité"
    },
    {
        id: "religieuses_hospitalieres_saint_gervais",
        name: "Hôpital des Hospitalières Saint-Gervais",
        category: 'religious',
        px: 5370, py: 3308,
        description: "Fondé en 1171 près de l'église Saint-Gervais pour offrir aux pauvres de passage un abri de trois nuits, cet hôpital paroissial fut repris par des religieuses hospitalières à partir du XIVe siècle. Financé par la gestion de terres agricoles, il constituait en 1553 l'un des rares refuges pour les indigents du quartier du Marais. Transféré rue Vieille-du-Temple en 1656, il fut supprimé à la Révolution.",
        quartier: "Marais, Rive Droite"
    },
    {
        id: "college_cluny",
        name: "Collège de Cluny",
        category: 'religious',
        px: 9221, py: 4760,
        description: "Fondé en 1269 par l'abbé de Cluny Yves de Vergy pour accueillir les moines bénédictins venus étudier à Paris, ce collège formait un îlot monastique — chapelle, cloître, bibliothèque — au cœur du Quartier Latin. À ne pas confondre avec l'Hôtel de Cluny voisin (résidence des abbés), le Collège de Cluny était l'institution académique proprement dite. En 1553, il contribuait à la vitalité intellectuelle de la Montagne Sainte-Geneviève.",
        quartier: "Quartier Latin, Rive Gauche"
    },
    {
        id: "prieure_saint_jean_latran",
        name: "Prieuré de Saint-Jean de Latran",
        category: 'religious',
        px: 8316, py: 4380,
        description: "Commanderie principale des chevaliers Hospitaliers de Saint-Jean de Jérusalem à Paris, fondée avant 1130 et documentée dès 1171. Centré sur une église romane dédiée à saint Jean-Baptiste, le prieuré administrait de vastes domaines fonciers en Île-de-France et offrait l'hospitalité aux pauvres et aux pèlerins. En 1553, cette commanderie formait un îlot d'extraterritorialité ecclésiastique sur la rive gauche, distinct de l'Enclos du Temple (Rive Droite) tenu par les mêmes Hospitaliers.",
        quartier: "Rive Gauche"
    },

    // ── Palais et résidences royales ──
    {
        id: "palais_cite",
        name: "Palais de la Cité",
        category: 'royal',
        px: 6689, py: 4950,
        description: "Ancienne résidence des rois de France jusqu'à Charles V (fin XIVe s.), devenu ensuite siège du Parlement de Paris et de la justice royale. En 1553, c'est déjà le Palais de Justice, abritant les grandes chambres du Parlement.",
        quartier: "Île de la Cité"
    },
    {
        id: "louvre",
        name: "Le Louvre",
        category: 'royal',
        px: 5644, py: 6296,
        description: "Forteresse médiévale bâtie vers 1190 par Philippe Auguste, progressivement transformée en résidence royale. François Ier (r.1515–1547) ordonna sa reconstruction en style Renaissance. En 1553, sous Henri II, les travaux se poursuivent avec à l'angle la création du pavillon du roi.",
        quartier: "Rive Droite, Ouest"
    },
    {
        id: "hotel_tournelles",
        name: "Hôtel des Tournelles",
        category: 'royal',
        px: 4786, py: 1858,
        description: "Résidence royale dans le Marais, appréciée de Charles VI, Louis XI et François Ier. Henri II y mourra en 1559 des suites d'un tournoi. Catherine de Médicis, dévastée, le fera démolir ; la Place Royale (actuelle Place des Vosges) sera construite à son emplacement en 1612.",
        quartier: "Marais, Rive Droite"
    },
    {
        id: "hotel_sens",
        name: "Hôtel de Sens",
        category: 'royal',
        px: 5903, py: 2580,
        description: "Résidence parisienne des archevêques de Sens, construite entre 1475 et 1519, l'un des rares hôtels particuliers médiévaux encore debout à Paris. Marguerite de Valois y séjourna au début du XVIIe siècle.",
        quartier: "Marais, Rive Droite"
    },
    {
        id: "chateau_vincennes",
        name: "Château de Vincennes",
        category: 'royal',
        px: 5566, py: 645,
        description: "Résidence royale fortifiée à l'est de Paris, dont le donjon (le plus haut d'Europe médiévale) fut achevé sous Charles V vers 1370. En 1553, Henri II y tient parfois sa cour. Il possède sa propre Sainte-Chapelle, commencée sous Philippe VI et encore inachevée à cette époque.",
        quartier: "Hors les murs, Est"
    },
    {
        id: "petit_bourbon",
        name: "Hôtel du Petit-Bourbon",
        category: 'royal',
        px: 5658, py: 5993,
        description: "Érigé en 1390 à l'ombre du Louvre pour les ducs de Bourbon, le Petit-Bourbon était l'un des plus fastueux hôtels princiers de Paris. Confisqué par François Ier en 1523 après la trahison du connétable de Bourbon, il devint résidence et salle de fêtes royale, accueillant ambassades et ballets de cour. En 1553, il jouxte le Louvre en pleine mutation et témoigne du prestige de la Couronne dans le quartier occidental.",
        quartier: "Rive Droite, Ouest"
    },
    {
        id: "hotel_nesle",
        name: "Hôtel de Nesle",
        category: 'royal',
        px: 7327, py: 6107,
        description: "Vaste résidence aristocratique sur la rive gauche, contiguë à la Tour de Nesle, fondée au XIIIe siècle et passée dans les mains royales sous Philippe IV le Bel. Jean de Berry en fit au début du XVe siècle l'un des hôtels les plus fastueux de Paris, orné de tapisseries et de jardins. En 1553, l'hôtel, plusieurs fois divisé et revendu, est en voie de dislocation : il occupait le site où Louis XIV fera construire le Collège des Quatre-Nations, l'actuel Institut de France.",
        quartier: "Rive Gauche, Ouest"
    },
    {
        id: "hotel_saint_pol",
        name: "Hôtel Saint-Pol",
        category: 'royal',
        px: 5695, py: 2090,
        description: "Immense palais royal édifié par Charles V à partir de 1361, ceint par le quai des Célestins, la rue Saint-Antoine, la rue du Petit-Musc et la Seine : un labyrinthe de galeries, de jardins et de pavillons qui fut pendant soixante ans la résidence principale des rois de France. Abandonné sous Louis XI, François Ier le déclara « vieux, inutile, inhabité » et en commença la vente par lots dès 1544. En 1553, le palais n'est plus qu'un chantier de démolition ; des rues nouvelles — la rue Neuve-Saint-Paul, la rue des Lions — découpent ses jardins en parcelles urbaines.",
        quartier: "Marais, Rive Droite"
    },

    // ── Édifices civils ──
    {
        id: "hotel_de_ville",
        name: "Hôtel de Ville (en construction)",
        category: 'civic',
        px: 5556, py: 3720,
        description: "Siège du Bureau de la Ville de Paris, dont la reconstruction en style Renaissance fut décidée en 1533 par François Ier sur la Place de Grève. En 1553, les travaux sont en cours sur les plans de Boccador ; l'édifice ne sera achevé qu'en 1628.",
        quartier: "Rive Droite"
    },
    {
        id: "grand_chatelet",
        name: "Grand Châtelet",
        category: 'civic',
        px: 5745, py: 4718,
        description: "Forteresse à l'entrée du Pont au Change, siège de la prévôté de Paris et de la haute justice royale. Ses cachots servaient de prison. Démoli en 1802, son souvenir est perpétué par la Place du Châtelet.",
        quartier: "Rive Droite"
    },
    {
        id: "petit_chatelet",
        name: "Petit Châtelet",
        category: 'civic',
        px: 7402, py: 4453,
        description: "Petite forteresse gardant l'accès au Petit Pont depuis la Rive Gauche, utilisée comme prison. Démolie en 1782, elle contrôlait l'une des deux entrées sud de l'Île de la Cité.",
        quartier: "Rive Gauche"
    },
    {
        id: "les_halles",
        name: "Les Halles",
        category: 'civic',
        px: 4647, py: 5252,
        description: "Marché central de Paris, établi au XIIe siècle par Louis VI et agrandi par Philippe Auguste. En 1553, c'est le cœur économique de la Rive Droite : grains, viandes, draps, mercerie et toutes denrées y transitent quotidiennement.",
        quartier: "Rive Droite"
    },
    {
        id: "sorbonne",
        name: "Université de Paris – La Sorbonne",
        category: 'civic',
        px: 8830, py: 4663,
        description: "L'une des plus anciennes universités d'Europe, fondée au XIIIe siècle. Le collège de Robert de Sorbon (1257) lui a donné son nom. En 1553, la faculté de théologie domine la pensée intellectuelle française, parfois en tension avec les idées humanistes.",
        quartier: "Quartier Latin, Rive Gauche"
    },
    {
        id: "hotel_cluny",
        name: "Hôtel de Cluny",
        category: 'civic',
        px: 8250, py: 4719,
        description: "Résidence parisienne des abbés de Cluny, édifiée à la fin du XVe siècle sur les vestiges des thermes romains de Julien (IIIe s.). Exemple parfait de l'architecture gothique civile parisienne. Musée de Cluny depuis 1843.",
        quartier: "Quartier Latin, Rive Gauche"
    },
    {
        id: "enclos_temple",
        name: "Enclos du Temple",
        category: 'civic',
        px: 3139, py: 2850,
        description: "Ancienne commanderie des Templiers (fondée vers 1140), passée aux Hospitaliers après la dissolution de l'ordre en 1312. L'enclos formait une juridiction indépendante dans la ville, avec sa tour-forteresse, son église et ses maisons. La Tour du Temple accueillera Louis XVI en 1792.",
        quartier: "Rive Droite, Nord-Est"
    },
    {
        id: "college_navarre",
        name: "Collège de Navarre",
        category: 'civic',
        px: 8630, py: 3693,
        description: "Fondé en 1304 par Jeanne de Navarre, épouse de Philippe IV, l'un des collèges les plus prestigieux de l'Université de Paris. Situé sur la Montagne Sainte-Geneviève, il accueillait étudiants pauvres et nobles. Henri V d'Angleterre y séjourna. Devenu École Polytechnique en 1794.",
        quartier: "Montagne Sainte-Geneviève, Rive Gauche"
    },
    {
        id: "arsenal",
        name: "Arsenal de Paris",
        category: 'civic',
        px: 6536, py: 1458,
        description: "Dépôt royal d'armes, de poudre et de munitions établi sur la Rive Droite à l'est, entre la Bastille et la Seine. Lieu stratégique de stockage de l'artillerie royale. Une explosion dévastatrice s'y produira en 1563. Transformé en bibliothèque (Bibliothèque de l'Arsenal) après la Révolution.",
        quartier: "Rive Droite, Est"
    },
    {
        id: "fontaine_innocents",
        name: "Fontaine des Innocents",
        category: 'civic',
        px: 4404, py: 4820,
        description: "Fontaine monumentale en marbre érigée en 1549 par Pierre Lescot et sculptée par Jean Goujon, à l'angle du cimetière des Innocents, pour célébrer l'entrée solennelle d'Henri II dans Paris. Premier monument Renaissance de l'espace public parisien, orné de nymphes en bas-relief d'une grâce inégalée. Déplacée au centre du square en 1788, elle est toujours visible.",
        quartier: "Les Halles, Rive Droite"
    },
    {
        id: "college_france",
        name: "Collège de France",
        category: 'civic',
        px: 8165, py: 4410,
        description: "Fondé en 1530 par François Ier sous le nom de Collège des Lecteurs Royaux, sur les conseils de Guillaume Budé, pour enseigner le grec, l'hébreu et les mathématiques hors du contrôle de la Sorbonne. En 1553, ses lecteurs royaux – humanistes et érudits – représentent le ferment intellectuel de la Renaissance française. Institution toujours en activité.",
        quartier: "Montagne Sainte-Geneviève, Rive Gauche"
    },
    {
        id: "hotel_dieu",
        name: "Hôtel-Dieu de Paris",
        category: 'civic',
        px: 7144, py: 4213,
        description: "Fondé selon la tradition vers 651 par l'évêque saint Landry, l'Hôtel-Dieu est le plus ancien hôpital de Paris, établi au pied de la cathédrale Notre-Dame sur l'île de la Cité. Reconstruit et agrandi sous Maurice de Sully à partir de 1165, il accueillait pèlerins, malades et indigents, servi par des sœurs augustiniennes. En 1553, c'est l'institution caritative la plus importante de la capitale, toujours en activité aujourd'hui.",
        quartier: "Île de la Cité"
    },
    {
        id: "hopital_sainte_catherine",
        name: "Hôpital Sainte-Catherine",
        category: 'civic',
        px: 4979, py: 4736,
        description: "Établi en 1181 à l'angle de la rue Saint-Denis et de la rue des Lombards, cet hôpital hébergea d'abord les pèlerins de passage avant de se spécialiser dans l'accueil des femmes démunies venues de province. L'institution gérait également la sépulture des noyés et des inconnus repêchés dans la Seine. En 1553, Sainte-Catherine est l'un des points d'ancrage de la charité chrétienne au cœur de la Rive Droite commerçante.",
        quartier: "Rive Droite"
    },
    {
        id: "chambre_comptes",
        name: "Chambre des comptes de Paris",
        category: 'civic',
        px: 6831, py: 5008,
        description: "Héritière d'un contrôle financier royal remontant à Saint Louis, la Chambre des comptes fut érigée en cour souveraine par l'ordonnance de janvier 1319. Installée au Palais de la Cité, elle vérifiait les recettes et dépenses du domaine royal, enregistrait les actes et conservait les archives de la Couronne. En 1553, c'était l'une des grandes cours souveraines du royaume, pivot de la gestion financière d'une monarchie en pleine centralisation.",
        quartier: "Île de la Cité"
    },

    // ── Ponts ──
    {
        id: "pont_notre_dame",
        name: "Pont Notre-Dame",
        category: 'bridge',
        px: 6235, py: 4298,
        description: "Principal pont entre la Rive Droite et l'Île de la Cité, reconstruit en pierre en 1507 après l'effondrement du pont de bois. Remarquable : ses 68 maisons identiques numérotées en forment la première rue numérotée de Paris.",
        quartier: "Seine"
    },
    {
        id: "pont_au_change",
        name: "Pont au Change",
        category: 'bridge',
        px: 6197, py: 4636,
        description: "Pont historique entre la Rive Droite et l'Île de la Cité, attesté depuis le Moyen Âge. Son nom vient des changeurs de monnaies qui y tenaient boutique. Il était également bordé de maisons et d'échoppes.",
        quartier: "Seine"
    },
    {
        id: "petit_pont",
        name: "Petit Pont",
        category: 'bridge',
        px: 7181, py: 4493,
        description: "Le plus ancien pont de Paris, utilisé depuis l'époque gallo-romaine comme passage vers le sud. En 1553, il reliait l'Île de la Cité à la Rive Gauche et au Quartier Latin, bordé de maisons à colombages.",
        quartier: "Seine"
    },
    {
        id: "pont_saint_michel",
        name: "Pont Saint-Michel",
        category: 'bridge',
        px: 7255, py: 4787,
        description: "Pont reliant la Rive Gauche à l'Île de la Cité à l'ouest du Petit Pont, reconstruit en pierre en 1378. Comme les autres ponts parisiens, il était couvert de maisons et de boutiques formant une véritable rue sur l'eau.",
        quartier: "Seine"
    },
    {
        id: "pont_meuniers",
        name: "Pont aux Meuniers",
        category: 'bridge',
        px: 6184, py: 4828,
        description: "Pont à l'extrémité occidentale de l'Île de la Cité, supportant des moulins à eau qui exploitaient le courant de la Seine. Emporté par une crue en 1596, il ne fut pas reconstruit.",
        quartier: "Seine"
    },

    // ── Portes et fortifications ──
    {
        id: "bastille",
        name: "La Bastille",
        category: 'gate',
        px: 5188, py: 1522,
        description: "Forteresse commencée en 1357 pour défendre l'entrée est de Paris, achevée sous Charles V. Rapidement reconvertie en prison d'État pour les prisonniers de la Couronne. Sa prise le 14 juillet 1789 marquera le début de la Révolution française.",
        quartier: "Rive Droite, Est"
    },
    {
        id: "porte_saint_antoine",
        name: "Porte Saint-Antoine",
        category: 'gate',
        px: 4941, py: 1510,
        description: "Principale porte orientale de Paris, encadrée par la Bastille. Principal accès pour les voyageurs venant de l'est (Meaux, Reims, Champagne). Démolie au XVIIIe siècle lors de l'extension de la ville.",
        quartier: "Rive Droite"
    },
    {
        id: "porte_saint_denis",
        name: "Porte Saint-Denis",
        category: 'gate',
        px: 2276, py: 4854,
        description: "Porte septentrionale principale de la Rive Droite, sur l'axe vers Saint-Denis et la Flandre. Porte d'entrée des cortèges royaux venant de Saint-Denis. Remplacée en 1672 par l'arc de triomphe de la Porte Saint-Denis, encore visible aujourd'hui.",
        quartier: "Rive Droite, Nord"
    },
    {
        id: "porte_saint_honore",
        name: "Porte Saint-Honoré",
        category: 'gate',
        px: 4801, py: 6950,
        description: "Porte occidentale de la Rive Droite, sur la route de Normandie et de la mer. Jeanne d'Arc fut blessée lors du siège de Paris en 1429 en tentant d'y pénétrer. Démolie au XVIIe siècle lors des réaménagements de la ville.",
        quartier: "Rive Droite, Ouest"
    },
    {
        id: "porte_saint_martin",
        name: "Porte Saint-Martin",
        category: 'gate',
        px: 2314, py: 4137,
        description: "Porte nord de la Rive Droite, à l'est de la Porte Saint-Denis, sur l'axe vers Soissons et les Flandres. Remplacée en 1674 par l'arc de triomphe de la Porte Saint-Martin, visible de nos jours.",
        quartier: "Rive Droite, Nord"
    },
    {
        id: "porte_saint_jacques",
        name: "Porte Saint-Jacques",
        category: 'gate',
        px: 9680, py: 4533,
        description: "Porte méridionale de la Rive Gauche, point de départ du pèlerinage vers Saint-Jacques-de-Compostelle. Des pèlerins de toute la France et d'Europe s'y retrouvaient avant d'entreprendre le long chemin vers la Galice.",
        quartier: "Rive Gauche, Sud"
    },
    {
        id: "porte_saint_germain",
        name: "Porte Saint-Germain",
        category: 'gate',
        px: 8301, py: 5887,
        description: "Porte occidentale de la Rive Gauche, donnant accès au faubourg Saint-Germain et à l'abbaye du même nom. Elle ouvrait sur les routes menant au sud-ouest de la France.",
        quartier: "Rive Gauche, Ouest"
    },
    {
        id: "porte_montmartre",
        name: "Porte Montmartre",
        category: 'gate',
        px: 2990, py: 6138,
        description: "Porte nord de l'Enceinte de Charles V, entre la Porte Saint-Denis et la Porte Saint-Honoré. Elle ouvrait sur le chemin menant au village et à l'abbaye de Montmartre, et sur les routes vers le nord-ouest. Démolie lors des extensions de la ville au XVIIe siècle.",
        quartier: "Rive Droite, Nord"
    },
    {
        id: "porte_du_temple",
        name: "Porte du Temple",
        category: 'gate',
        px: 2528, py: 2868,
        description: "Porte nord-est de l'Enceinte de Charles V, donnant accès à l'Enclos du Temple et aux routes vers la Flandre orientale. Parfois appelée Porte des Boulets ou Porte Barbette selon les sources. Disparue au XVIIe siècle lors de l'agrandissement de la ville.",
        quartier: "Rive Droite, Nord-Est"
    },
    {
        id: "tour_nesle",
        name: "Tour de Nesle",
        category: 'gate',
        px: 7026, py: 6324,
        description: "Tour d'angle de l'Enceinte de Philippe Auguste sur la Rive Gauche, à l'extrémité de la muraille longeant la Seine, face à la Tour du Louvre. Célèbre pour le scandale de 1314 : la reine Marguerite de Bourgogne y aurait reçu ses amants avant de les faire jeter dans la Seine. Démolie en 1665 pour la construction du collège Mazarin (actuel Institut de France).",
        quartier: "Rive Gauche, Ouest"
    },
    {
        id: "porte_nesle",
        name: "Porte de Nesle",
        category: 'gate',
        px: 7177, py: 6313,
        description: "Porte occidentale de l'Enceinte de Philippe Auguste sur la Rive Gauche, à l'angle de la muraille et de la Seine, face à la Tour du Louvre de l'autre côté du fleuve. La Tour de Nesle voisine (aujourd'hui disparue) était célèbre pour les scandales de la reine Marguerite de Bourgogne.",
        quartier: "Rive Gauche, Ouest"
    },
    {
        id: "porte_tournelle",
        name: "Porte de la Tournelle",
        category: 'gate',
        px: 7340, py: 3091,
        description: "Porte aussi connue sous le nom de porte Saint-Bernard, située à l'angle de la muraille et de la Seine, face aux Îles aux Vaches. Elle ouvrait sur le chemin longeant le fleuve vers l'amont et donnait accès aux faubourgs de l'est de la Rive Gauche.",
        quartier: "Rive Gauche, Est"
    },
    {
        id: "porte_saint_victor_rg",
        name: "Porte Saint-Victor",
        category: 'gate',
        px: 8176, py: 3272,
        description: "Porte est de l'Enceinte de Philippe Auguste sur la Rive Gauche, sur la route menant à l'abbaye Saint-Victor et aux faubourgs orientaux. L'une des principales sorties de la ville vers l'est, empruntée par les voyageurs et les charrois.",
        quartier: "Rive Gauche, Est"
    },
    {
        id: "porte_saint_marcel",
        name: "Porte Saint-Marcel",
        category: 'gate',
        px: 9362, py: 3379,
        description: "Porte également connue sous les noms de porte Bordet ou porte Bordelle, elle constituait l'accès  méridional de l'Enceinte de Philippe Auguste, sur la route menant au bourg Saint-Marcel et à la Bièvre. Elle ouvrait sur les faubourgs du sud, peuplés de teinturiers et de tanneurs qui exploitaient la rivière Bièvre. Démolie lors de la construction de l'enceinte des Fermiers généraux.",
        quartier: "Rive Gauche, Sud"
    },
    {
        id: "tour_du_coin_louvre",
        name: "Tour du Coin du Louvre",
        category: 'gate',
        px: 6068, py: 6063,
        description: "Tour d'angle sud-ouest du château du Louvre médiéval, érigée vers 1200 dans le programme défensif de Philippe Auguste. Haute d'environ 25 mètres pour 10 mètres de diamètre, elle commandait l'accès à la Seine depuis le flanc occidental de la forteresse royale. La nuit, des chaînes tendues sur des bateaux reliaient cette tour à la Tour de Nesle sur la rive gauche, fermant le fleuve à toute intrusion.",
        quartier: "Rive Droite, Ouest"
    },
    {
        id: "porte_buci",
        name: "Porte de Buci",
        category: 'gate',
        px: 7957, py: 6052,
        description: "Percée dans l'enceinte de Philippe Auguste vers 1209, cette porte de la rive gauche ouvrait sur le chemin menant à Saint-Germain-des-Prés et aux faubourgs occidentaux. Elle prit le nom de Buci en 1350 lorsque Simon de Buci en obtint le bail pour vingt livres de rente. La nuit du 28 au 29 mai 1418, Perrinet Leclerc livra ses clés aux Bourguignons, déclenchant le massacre des partisans armagnacs dans Paris.",
        quartier: "Rive Gauche"
    },
    {
        id: "porte_enfer",
        name: "Porte d'Enfer",
        category: 'gate',
        px: 9396, py: 4886,
        description: "Érigée vers 1200 à l'extrémité sud de la rue de la Harpe, la Porte d'Enfer — nom d'origine incertaine, peut-être issu du voisinage de carrières profondes — constituait l'un des accès méridionaux de l'enceinte de Philippe Auguste. Après d'importants travaux en 1394, elle prit le nom de Porte Saint-Michel. En 1553, ce point de passage marquait la limite de Paris vers les faubourgs du sud et la route de Vaugirard.",
        quartier: "Rive Gauche, Sud"
    },
    {
        id: "tour_barbeau",
        name: "Tour Barbeau",
        category: 'gate',
        px: 6135, py: 2498,
        description: "Érigée vers 1209 sur la rive droite de la Seine, la Tour Barbeau était l'un des piliers orientaux de la défense fluviale de Paris selon le programme de Philippe Auguste. Haute d'environ 25 mètres, elle commandait le passage du fleuve avec la Tour Loriaux, reliées la nuit par de lourdes chaînes tendues sur l'eau pour interdire l'accès à la ville. En 1553, sa masse imposante marquait encore le front de Seine du quartier des Célestins.",
        quartier: "Rive Droite, Est"
    },
    {
        id: "tour_du_bois",
        name: "Tour du Bois",
        category: 'gate',
        px: 6162, py: 6866,
        description: "Érigée vers 1380 à l'extrémité occidentale de l'enceinte de Charles V, la Tour du Bois flanquait la Seine sur la rive droite, à hauteur de ce qui est aujourd'hui le Pont du Carrousel. Haute d'environ vingt-cinq mètres, elle constituait le verrou défensif de la ville côté Normandie — front alors considéré comme le plus exposé aux menaces anglaises et normandes. Un pan de courtine la reliait à l'est à la Tour du Coin, vestige de l'enceinte de Philippe Auguste, formant une double ceinture de pierre entre terre et fleuve. Elle sera démolie vers 1670.",
        quartier: "Rive Droite, Ouest"
    },

    // ── Quartiers et lieux notables ──
    {
        id: "ile_cite",
        name: "Île de la Cité",
        category: 'place',
        px: 6830, py: 4388,
        description: "Berceau de Paris (Lutèce pour les Romains), île naturelle de la Seine et cœur historique de la ville. En 1553, elle est densément bâtie : cathédrale, palais royal, chapelle royale, maisons bourgeoises et ruelles enchevêtrées.",
        quartier: "Île de la Cité"
    },
    {
        id: "ile_aux_vaches",
        name: "Île aux Vaches et Île Notre-Dame",
        category: 'place',
        px: 6744, py: 2700,
        description: "Deux petites îles non bâties à l'est de l'Île de la Cité, visibles sur cette carte. Utilisées pour des pâturages et des dépôts de bois. Réunies et lotties au XVIIe siècle, elles formeront l'Île Saint-Louis.",
        quartier: "Seine, Est"
    },
    {
        id: "montmartre",
        name: "La Butte Montmartre",
        category: 'place',
        px: 683, py: 6211,
        description: "Colline dominant Paris au nord, couronnée par l'abbaye bénédictine Notre-Dame de Montmartre (fondée en 1133). En 1553, c'est un village extra-muros avec ses moulins et ses vignes, offrant une vue panoramique sur la ville en contrebas.",
        quartier: "Hors les murs, Nord"
    },
    {
        id: "foire_saint_germain",
        name: "Foire Saint-Germain",
        category: 'place',
        px: 8914, py: 6303,
        description: "Grande foire annuelle tenue dans le faubourg Saint-Germain, sur des terres appartenant à l'abbaye. L'une des plus importantes de France, elle attire marchands, artisans et forains de toute l'Europe chaque hiver. Son emplacement correspond aujourd'hui au marché Saint-Germain.",
        quartier: "Faubourg Saint-Germain, Rive Gauche"
    },
    {
        id: "quartier_latin",
        name: "Quartier Latin",
        category: 'place',
        px: 8680, py: 4169,
        description: "Quartier universitaire de la Rive Gauche, où se concentrent collèges, libraires, imprimeurs et étudiants venus de toute l'Europe. Le latin y est la langue commune des clercs et des savants, d'où son nom. Centre de l'humanisme français au XVIe siècle.",
        quartier: "Rive Gauche"
    },
    {
        id: "marais",
        name: "Le Marais",
        category: 'place',
        px: 5096, py: 2506,
        description: "Quartier aristocratique de la Rive Droite orientale, en pleine expansion au XVIe siècle. Ses hôtels particuliers accueillent la haute noblesse et la riche bourgeoisie. L'Hôtel des Tournelles (résidence royale) en est le fleuron en 1553.",
        quartier: "Rive Droite, Est"
    },
    {
        id: "gibet_montfaucon",
        name: "Gibet de Montfaucon",
        category: 'place',
        px: 720, py: 3248,
        description: "Gibet permanent érigé hors les murs au nord de Paris, en usage du XIIIe au XVIIe siècle. Sa structure de pierre pouvait exposer simultanément des dizaines de corps pendus, symbole de la justice royale visible à grande distance. Lieu de terreur et de fascination pour les Parisiens.",
        quartier: "Hors les murs, Nord"
    },
    {
        id: "place_greve",
        name: "Place de Grève",
        category: 'place',
        px: 5532, py: 3878,
        description: "Grande place sur la Rive Droite, au bord de la Seine, devant l'Hôtel de Ville en construction. Cœur de la vie civique parisienne : lieu d'exécutions publiques, de rassemblements d'ouvriers sans travail (les « grévistes »), de fêtes royales et de marchés. Actuelle Place de l'Hôtel de Ville.",
        quartier: "Rive Droite"
    },
    {
        id: "cimetiere_innocents",
        name: "Cimetière des Innocents",
        category: 'place',
        px: 4648, py: 4972,
        description: "Le plus grand et le plus ancien cimetière de Paris, attenant aux Halles, en usage depuis l'époque mérovingienne jusqu'en 1786. Entouré de charniers à plusieurs étages débordants d'ossements, il accueillait des dizaines de milliers de sépultures superposées. Lieu de promenade, de commerce et de spectacle macabre au cœur de la ville. Transformé en marché puis en square (Square des Innocents).",
        quartier: "Les Halles, Rive Droite"
    },
    {
        id: "port_greve",
        name: "Port de la Grève",
        category: 'place',
        px: 6201, py: 3588,
        description: "Principal port fluvial de Paris, sur la berge de la Seine en face de la Place de Grève. Les marchandises pondéreuses (bois, vin, grain, foin) arrivaient par bateau et étaient déchargées sur cette grève de sable et de gravier. Les débardeurs et mariniers y cherchaient l'embauche — d'où le mot « gréviste ». Lieu névralgique du commerce parisien.",
        quartier: "Rive Droite"
    },
    {
        id: "gobelins",
        name: "Teintureries des Gobelins",
        category: 'place',
        px: 11140, py: 3596,
        description: "Dès 1443, la famille Gobelin, teinturiers d'origine champenoise, s'installa dans le Faubourg Saint-Marcel en bordure de la Bièvre pour exploiter leur procédé exclusif de teinture en écarlate. En 1553, ce quartier artisanal extra-muros est le fief de plusieurs générations de Gobelins, dont la renommée a donné son nom au lieu. Sous Henri IV, en 1601, l'emplacement deviendra la Manufacture royale de tapisseries, consacrant définitivement la vocation textile du site.",
        quartier: "Faubourg Saint-Marcel, Rive Gauche"
    },
    {
        id: "ile_louviers",
        name: "Île Louviers",
        category: 'place',
        px: 7278, py: 1662,
        description: "Îlot alluvial de la Seine, l'île Louviers doit son nom à Nicolas de Louviers, prévôt des marchands qui en fit don à la ville en 1408. Longtemps terrain d'exercice pour les arbalétriers parisiens, elle se dota à l'initiative du prévôt des marchands et des échevins d'un petit fort et d'un havre destinés à offrir au roi Henri II un spectacle de siège et de combat naval. La seule construction figurée sur le plan de Truschet et Hoyau représente vraisemblablement ce bâtiment royal. L'île sera rattachée à la rive droite par comblement en 1847.",
        quartier: "Seine, Est"
    },
    {
        id: "orme_saint_gervais",
        name: "Orme Saint-Gervais",
        category: 'place',
        px: 5513, py: 3388,
        description: "Depuis au moins le XIIIe siècle, un orme se dresse devant l'église Saint-Gervais-Saint-Protais, servant de point de rassemblement pour régler les dettes et rendre une justice populaire informelle. Ce rôle d'arbre à justice ancré dans la vie civique parisienne engendra l'expression « Attendez-moi sous l'orme ! », synonyme d'une promesse que l'on ne tient pas. En 1553, l'orme trône encore sur la place, symbole vivant de la communauté du Marais.",
        quartier: "Marais, Rive Droite"
    },
    {
        id: "place_maubert",
        name: "Place Maubert",
        category: 'place',
        px: 7852, py: 4124,
        description: "L'une des plus anciennes places publiques de la rive gauche, la place Maubert — « la Maube » pour les Parisiens — prit forme dès le début du XIIIe siècle au carrefour des voies menant vers l'Université. Lieu de marché, d'exécutions et de supplices, elle vit notamment l'imprimeur humaniste Étienne Dolet brûlé vif avec ses livres le 3 août 1546. En 1553, c'est une place animée et redoutée, carrefour du savoir universitaire et de la répression religieuse.",
        quartier: "Quartier Latin, Rive Gauche"
    }
];

const JOURNEYS = {};
