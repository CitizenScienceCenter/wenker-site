const state = {
  swissCantons: [{"label": "Aargau", "lang": "DE", "towns": ["Aarau", "Abtwil", "Ammerswil", "Aristau", "Arni", "Attelwil", "Auenstein", "Auw", "Baden", "Beinwil", "Beinwil am See", "Bellikon", "Benzenschwil", "Berikon", "Besenbüren", "Biberstein", "Birmenstorf", "Birr", "BirrenlaufSchinznach-Bad", "Birrhard", "Birrwil", "Böbikon", "Boniswil", "Boswil", "Bottenwil", "Bözen", "Bremgarten", "Brittnau", "Brugg", "Buchs", "Bünzen", "Burg", "Büttikon", "Buttwil", "Dättwill", "Densbüren", "Dietwil", "Dintikon", "Dottikon", "Döttingen", "Dürrenäsch", "Effingen", "Eggenwil", "Egliswil", "Eiken", "Elfingen", "Endingen/Oberendingen", "Ennetbaden", "Erlinsbach/Ober-Erlinsbach", "Fahrwangen", "Fischbach-Göslikon", "Fislisbach", "Freienwil", "Frick", "Friedlisberg", "Full", "Gansingen", "Gebenstorf", "Geltwil", "Gipf-Oberfrick", "Gontenschwil", "Gränichen", "Gwinden", "Habsburg", "Hägglingen", "Hausen", "Hellikon", "Hendschiken", "Hermetschwil", "Herznach", "Hilfikon", "Hirschthal", "Holderbank", "Holziken", "Hornussen", "Hottwil", "Hunzenschwil", "Ittenthal", "Jonen", "Kaiseraugust", "Kaisten", "Kallern", "Killwangen", "Kirchleerau", "Kleindöttingen", "Klingnau", "Koblenz", "Kölliken", "Künten", "Küttigen", "Laufenburg", "Lauffohr", "Leibstadt", "Lengnau", "Lenzburg", "Leuggern", "Leutwil", "Linn", "Lupfig", "Magden", "Mägenwil", "Mandach", "Meisterschwanden", "Mellingen", "Menziken", "Merenschwand", "Mettau", "Möhlin", "Mönthal", "Moosleerau", "Möriken", "Muhen", "Mühlau", "Mühlethal", "Mülligen", "Mumpf", "Münzleshausen", "Murgenthal", "Muri", "Neuenhof", "Nieder Rohrdorf", "Niederhallwil", "Niederlenz", "Niederwil", "Nußbaumen", "Oberbözberg", "Oberehrendingen", "Oberentfelden", "Oberflachs", "Oberhof", "Oberkulm", "Oberlunkhofen", "Obermumpf", "Oberrohrdorf", "Oberrüti", "Oberwil-Lieli", "Oberwil-Niederwil", "Oeschgen", "Oftringen", "Olsberg", "Othmarsingen", "Reinach", "Reitnau", "Rekingen", "Remetschwil", "Remigen", "Rietheim", "Riniken", "Rohr", "Rothrist", "Rottenschwil", "Rudolfstetten", "Rüfenach", "Rümikon", "Rupperswil", "Rütihof", "Safenwil", "Sarmenstorf", "Schafisheim", "Scherz", "Schiltwald", "Schinznach", "Schlossrued", "Schmiedrued", "Schneisingen", "Schupfart", "Schwaderloch", "Seengen", "Seon", "Siglistorf", "Sins", "Sisseln", "Spreitenbach", "Staffelbach", "Staretschwil", "Staufen", "Stein", "Stetten", "Stilli", "Strengelbach", "Suhr", "Tägerig", "Teufenthal", "Thalheim", "Turgi", "Uerkheim", "Uezwil", "Umiken", "Unter-Ehrendingen", "Unterentfelden", "Unterkulm", "Unterlunkhofen", "Untersiggenthal", "Ursprung-Unterbözberg", "Veltheim", "Villigen", "Villmergen", "Villnachern", "Vogelsang", "Vordemwald", "Walde", "Waldhäusern", "Waltenschwil", "Walterswil", "Wannenhof", "Wegenstetten", "Wettingen", "Widen", "Wiliberg", "Windisch", "Wittnau", "Wohlen", "Wohlenschwil", "Wölflinswil", "Würenlingen", "Würenlos", "Zeihen", "Zeiningen", "Zetzwil", "Zofingen", "Zufikon", "Zurzach", "Zuzgen"]}, {"label": "Appenzell Ausserrhoden", "lang": "DE", "towns": ["Gais", "Grub", "Hasle/Hasli (Wolfhalden)", "Heiden", "Herisau", "Hundwil", "Lutzenberg", "Rehetobel", "Reute", "Schönengrund", "Schwellbrunn", "Stein", "Teufen", "Trogen", "Urnäsch", "Wald", "Waldstatt", "Walzenhausen", "Wolfhalden"]}, {"label": "Appenzell Innerrhoden", "lang": "DE", "towns": ["Appenzell", "Oberegg"]}, {"label": "Basel-Land", "lang": "DE", "towns": ["Allschwil", "Anwil", "Bennwil", "Birsfelden", "Böckten", "Bottmingen", "Bretzwil", "Bubendorf", "Buns", "Diepflingen", "Eptingen", "Frenkendorf", "Füllinsdorf", "Giebenach", "Hemmiken", "Langenbrück", "Liestal", "Münchenstein", "Oberdorf", "Oltingen", "Ormalingen", "Pratteln", "Reigoldswil", "Rothenfluh", "Rünenberg", "Sissach", "Tecknau", "Thürnen", "Waldenburg", "Wenslingen", "Wintersingen", "Wittinsburg", "Ziefen"]}, {"label": "Basel-Stadt", "lang": "DE", "towns": ["Basel", "Riehen"]}, {"label": "Bern", "lang": "DE", "towns": ["Aarberg", "Abländschen", "Aefligen", "Aegerten", "Aengstmatt", "Aeschiried", "Aeschlen", "Affoltern im Emmental", "Alchenstorf", "Allmendingen", "Ammerzwil", "Arch", "Arni", "Attiswil", "Au", "Aussereriz", "Ausserschwand", "Auswil", "Bächlen", "Baggwil", "Bärau", "Bargen", "Bätterkinden", "Bellmund", "Belp", "Belpberg", "Berg", "Bern", "Bettenhausen", "Biel", "Biembach", "Bigenthal", "Biglen", "Bissen", "Bleiken", "Bleuen", "Blumenstein", "Boden", "Boden-Aegerten", "Boltigen", "Bönigen", "Bowil", "Bramberg", "Brand", "Brenzikofen", "Brienz", "Brienzwiler", "Brügg", "Brünigen", "Bruttelen", "Buchen", "Büetigen", "Bühl", "Bumbach", "Büren", "Burgdorf", "Burgistein", "Burgiwil", "Burglauenen", "Busswil", "Bütikofen", "Bütschel", "Bützberg", "Därligen", "Därstetten", "Dentenberg", "Detligen", "Diessbach", "Dieterswil", "Dotzigen", "Dürrenast", "Dürrenroth", "Ebligen", "Ebnit", "Eggiwil", "Einigen", "Emdtal", "Enggistein", "Entschwil", "Enzenbühl", "Epsach", "Eriswil", "Erlach", "Erlenbach", "Ersigen", "Etzelkofen", "Falchern", "Faltschen", "Fankhaus", "Farnern", "Faulensee", "Ferenbalm", "Fermel", "Feutersoey", "Finsterhennen", "Forst-Längenbühl", "Frauenkappelen", "Fritzenhaus (Sumiswald)", "Frutigen", "Fuhren", "Gadmen", "Gals", "Gambach", "Gammen", "Gampelen", "Garstatt", "Geissholz", "Gelterfingen", "Gempelen", "Gerolfingen", "Gerzensee", "Gimmelwald", "Gmünden", "Gohl", "Goldbach", "Goldern", "Goldswil", "Gondiswil", "Grasswil", "Grindelwald", "Grossaffoltern", "Gruben", "Grund", "Grund-Bottigen", "Gstaad", "Gsteig bei Gstaad", "Gsteigwiler", "Guggisberg", "Gumm", "Gündlischwand", "Gunten", "Gurbrü", "Gurzelen", "Gutenbrunnen", "Guttannen", "Gysenstein", "Habkern", "Häleschwand", "Hardern", "Hasle", "Hasli", "Hausen", "Häutligen", "Heiligenschwendi", "Heimenhausen", "Heimiswil", "Herbligen", "Hermrigen", "Hettiswil", "Hindelbank", "Hindten", "Hinterfultigen", "Hinterkappelen", "Hofstetten bei Brienz", "Höhe", "Hohfluh", "Hondrich", "Horben", "Horrenbach", "Hub", "Huttwil", "Iffwil", "Ilfis", "Ins", "Interlaken", "Ipsach", "Iseltwald", "Isenfluh", "Itramen", "Ittigen", "Jaberg", "Jens", "Jucher", "Kallnach", "Kaltacker", "Kammershaus", "Kanderbrück", "Kapf", "Kappelen", "Kaufdorf", "Kehrsatz", "Kernenried", "Kien", "Kienholz", "Kiental", "Kirchberg", "Kirchdorf", "Kirchenthurnen", "Kirchlindach", "Kleindietwil", "Köniz", "Konolfingen", "Krattigen", "Krauchthal", "Kreuzweg", "Kriechenwil", "Kröschenbrunnen", "La Chaux d' Abel", "Landstuhl", "Langenthal", "Langnau", "Latterbach", "Lauenen", "Lauperswil", "Lauterbrunnen", "Leber", "Ledi", "Leissigen", "Lengnau", "Lenkis", "Leuzigen", "Ligerz", "Linden", "Lindenthal", "Linter", "Lobisgen", "Lotzwil", "Luscherz", "Lütiwil", "Lütschental", "Lyss", "Lyssach", "Mannried", "Matten", "Mattstetten", "Matzwil", "Mauss", "Meienried", "Meiersmaad", "Meikirch", "Meinisberg", "Meiringen", "Melchnau", "Merzligen", "Mirchel", "Mistelberg", "Mitholz-Blausee", "Mont-Soleil", "Mont-Tramelan", "Moos St. Stephan", "Moosacker", "Moosaffoltern", "Moosegg", "Mörigen", "Mühledorf", "Mühlestalden", "Mühlethurnen", "Mülchi", "Münchenbuchsee", "Mungnau", "Münsingen", "Müntschemier", "Muri", "Mürren", "Mutten", "Neuenegg", "Neuhaus", "Nidau", "Niederbach", "Niederberg", "Niederhünigen", "Niedermuhlern", "Niederried", "Niederstocken", "Niederwichtrach", "Noflen", "Oberbipp", "Oberburg", "Oberdiessbach", "Oberei", "Oberfeld", "Oberfrittenbach", "Obergoldbach", "Oberhofen", "Oberhofen (Laufenburg)", "Oberhünigen", "Oberlangenegg", "Oberried", "Oberstocken", "Oberwangen", "Oberwil", "Oberwil im Simmental", "Oey", "Ohringen", "Oltigen", "Önz", "Orpund", "Ortbach", "Ortschwaben", "Otterbach", "Pfaffenmoos", "Pieterlen", "Port", "Pöschenried", "Radelfingen", "Rain", "Rapperswil", "Reichenbach", "Reichenstein", "Reinisch", "Reisiswil", "Reudlen", "Reust", "Reutenen", "Reuti", "Reutigen", "Ried", "Riedern", "Riggisberg", "Rinderwald", "Ringgenberg", "Ringoldswil", "Roggwil", "Rohrbach", "Rotenbaum", "Roth", "Röthenbach bei Herzogenbuchsee", "Röthenbach im Emmental", "Rubigen", "Ruchenbühl", "Ruchwil", "Rüderswil", "Rüdtligen-Alchenflüh", "Rüedisbach", "Rüeggisberg", "Rüegsau", "Rumisberg", "Rümligen", "Rüti", "Saanen", "Safnern", "Sangernboden", "Saxeten", "Schafhausen", "Schalunen", "Scharnachtal", "Scheidegg", "Scheunen", "Scheunenberg", "Scheuren", "Schliern", "Schlosswil", "Schmocken", "Schonegg (Sumiswald)", "Schoren", "Schüpbach", "Schüpberg", "Schüpfen", "Schupposen", "Schwadern", "Schwanden", "Schwanden bei Brienz", "Schwandi", "Schwarzenburg", "Schwarzenmatt", "Schwendibach", "Seeberg", "Seedorf", "Seewil", "Seftigen", "Siehen", "Signau", "Sigriswil", "Siselen", "Spiez", "Spiezwiler", "Stechelberg", "Steinbach", "Stiegelschwand", "Studen", "Stutz", "Suberg", "Sumiswald", "Süri", "Sutz-Lattrigen", "Täuffelen", "Teuffenthal", "Than", "Thun", "Thunstetten", "Toffen", "Trachselwald", "Treiten", "Trimstein", "Trub", "Trubschachen", "Tschingel", "Tschugg", "Tüscherz", "Twann", "Twären", "Uetendorf", "Uetendorf/Berg", "Uettligen", "Unterbach", "Unterfrittenbach", "Unterlangenegg", "Unterseen", "Untersteckholz", "Unterstock", "Ursellen", "Ursenbach", "Uttigen", "Utzenstorf", "Utzigen", "Vechigen", "Vinelz", "Vorderfultigen", "Vorimholz", "Wachseldorn", "Wahlendorf", "Wald", "Waldegg", "Waldgasse", "Walkringen", "Walliswil-Bipp", "Walliswil-Wangen", "Walperswil", "Wangen an der Aare", "Wärgistal/Wargistal", "Wasen im Emmental", "Wattenwil", "Weissenbach", "Wengen", "Wengi", "Werdthof", "Wierezwil", "Wikartswil", "Wilderswil", "Wiler", "Wileroltigen", "Willigen", "Wimmis", "Winklen", "Wohlen", "Wolfisberg", "Worben-Lyss", "Wydimatt", "Wynau", "Wynigen", "Wyssachen", "Wyssbach", "Zaun", "Zäziwil", "Ziegelried", "Zielebach", "Zimlisberg", "Zuzwil", "Zweisimmen", "Zwieselberg", "Zwischenflüh"]}, {"label": "Freiburg", "lang": "DE", "towns": ["Altavilla", "Alterswil", "Berg", "Bösingen", "Brünisried", "Burg bei Murten", "Cordast", "Courlevon", "Düdingen", "Ferpicloz", "Flamatt", "Fräschels", "Galmiz", "Gempenach", "Gurmels", "Guschelmuth", "Heitenried", "Im Fang", "Kerzers", "Lichtena/Liechtena (Sense)", "Murten", "Plasselb", "Rechthalten", "Salvenach", "Schmitten", "St. Silvester", "St. Ursen", "Tafers", "Ueberstorf", "Ulmiz", "Wünnewil"]}, {"label": "Glarus", "lang": "DE", "towns": ["Betschwanden", "Bilten", "Braunwald", "Diesbach", "Elm", "Engi", "Filzbach", "Glarus", "Hätzingen", "Leugelbach/Leuggelbach", "Linthal", "Matt", "Mitlödi", "Mollis", "Mühlehorn", "Näfels", "Näfels-Berg", "Netstal", "Niederurnen", "Oberurnen", "Obstalden", "Rüti", "Schwanden", "Schwändi", "Sool"]}, {"label": "Graubünden", "lang": "DE", "towns": ["Arezen", "Avers", "Buchen", "Camana", "Castiel", "Chur", "Davos", "Davos-Dorf", "Davos-Glaris", "Fanas", "Felsberg", "Fideris", "Fläsch", "Furna", "Grüsch", "Hinterrhein", "Igis-Dorf", "Jenaz", "Jenins", "Klosters", "Küblis", "Langwies", "Luzein", "Malans", "Malix", "Mayenfeld", "Medels", "Meierhof", "Molinis", "Monstein", "Mutten", "Nufenen", "Pany", "Passugg-Araschgen", "Peist", "Praden", "Saas", "Sankt Antönien-Platz", "Sankt Peter-Pagig", "Says", "Schiers", "Schmitten", "Seewis", "Splügen", "Sufers", "Tamins", "Thusis", "Tschappina", "Tschiertschen", "Untervaz", "Urmein", "Valendas", "Vals-Platz", "Wiesen"]}, {"label": "Luzern", "lang": "DE", "towns": ["Adligenswil", "Aesch", "Alberswil", "Altbüron", "Altishofen", "Altwis", "Ballwil", "Bramboden", "Breitebnet", "Buchrain", "Buchs", "Buchschachen", "Bühl", "Büron", "Buttisholz", "Dagmersellen", "Dogelzwil", "Doppleschwand", "Ebersecken", "Ebikon", "Ebnet", "Egg", "Eggbergen", "Egolzwil", "Eich", "Eigenthal", "Ellbach", "Emmen", "Eppenwil", "Ermensee", "Eschenbach", "Escholzmatt", "Ettiswil", "Etzenerlen/Erzenerlen", "Finsterwald", "Fischbach", "Flühli", "Fontannen", "Geiss", "Gelfingen", "Gerliswil", "Geuensee", "Glichenberg", "Grossdietwil", "Grosswangen", "Gunzwil-Dorf", "Haldenegg", "Hasle", "Hellbühl", "Hergiswil", "Hildisrieden", "Hilfernthal", "Hintermoos", "Hitzkirch", "Hochdorf", "Hofstatt", "Hohenrain", "Holz", "Holzwegen", "Horw", "Hübeli", "Ibenmoos", "Inwil", "Kaltbach", "Kleinwangen", "Kottwil", "Kriens", "Krumbach", "Krummatt", "Kulmerau", "Langnau", "Lehn", "Lieli", "Luthern", "Luthern Bad", "Luzern", "Malters", "Marbach", "Mauensee", "Meggen", "Mehlsecken", "Meierskappel", "Menzberg", "Menznau", "Mosen", "Münster", "Müswangen", "Nebikon", "Neudorf", "Neuenkirch", "Niederschongau", "Nottwil", "Oberkirch", "Obernau", "Ohmstal", "Ostergau", "Perlen", "Pfaffnau", "Pfeffikon", "Rain", "Reiden", "Reidermoos", "Rengg", "Retschwil", "Reussbühl", "Richenthal", "Rickenbach", "Roggliswil", "Rohrmatt", "Römerswil", "Romoos", "Root", "Rothenburg", "Rothmoos", "Rüdiswil", "Ruswil", "Sandboden", "Schachen", "Schärlig", "Schenkon", "Schlierbach", "Schongau", "Schötz", "Schülen", "Schüpfheim", "Schwarzenbach", "Schwarzenberg", "Sempach", "Sigerswil", "Sigigen", "Sitenberg", "Sörenberg", "Sprengi", "St. Erhard", "St. Urban", "Steinhusen", "Sulz", "Sursee", "Tann", "Twerenegg", "Udligenswil", "Uffikon", "Ufhusen", "Vitznau", "Wauwil", "Weggis", "Werthenstein-Oberdorf", "Werthenstein-Unterdorf", "Wiggen", "Wilgis", "Wilihof", "Willisau-Land", "Willisau-Stadt", "Winikon", "Winterbühl", "Wolhusen", "Zell", "Ziswil"]}, {"label": "Nidwalden", "lang": "DE", "towns": ["Altzellen", "Buochs", "Büren", "Dallenwil", "Emmetten", "Ennetbürgen", "Ennetmoos-Allweg", "Obbürgen", "Stans", "Stansstad", "Wolfenschiessen"]}, {"label": "Obwalden", "lang": "DE", "towns": ["Engelberg", "Giswil", "Lungern", "Obwalden", "Sachseln", "Sarnen", "Stalden & Wilen"]}, {"label": "Schaffhausen", "lang": "DE", "towns": ["Altorf", "Beggingen", "Bibern", "Buchthalen", "Büttenhardt", "Dörflingen", "Gächlingen", "Guntmadingen", "Hemmenthal", "Herblingen", "Hofen", "Lohn", "Löhningen", "Merishausen", "Neunkirch", "Oberhallau", "Opfertshofen", "Osterfingen", "Ramsen", "Rüdlingen", "Schaffhausen", "Siblingen", "Stein am Rhein", "Thayngen", "Trasadingen", "Unterhallau/Hallau", "Wilchingen"]}, {"label": "Schwyz", "lang": "DE", "towns": ["Alpthal", "Altendorf", "Arth", "Einsiedeln", "Feusisberg", "Galgenen", "Gersau", "Illgau", "Ingenbohl-Brunnen", "Innerthal", "Küssnacht", "Lachen", "Lauerz", "Morschach", "Muotathal", "Oberiberg", "Reichenburg", "Riemenstalden", "Rothenthurm", "Sattel", "Schübelbach", "Schwyz", "Steinen", "Steinerberg", "Tuggen", "Unteriberg", "Vorderthal", "Wangen"]}, {"label": "Solothurn", "lang": "DE", "towns": ["Aetigkofen", "Aetingen", "Andermannsdorf", "Balm", "Balsthal", "Bärschwil", "Bellach", "Bettlach", "Biberist", "Bibern", "Bolken", "Boningen", "Breitenbach", "Brügglen", "Brunnersberg/Grossbrunnersberg", "Büsserach", "Däniken", "Deitingen", "Derendingen", "Dornach", "Dulliken", "Egerkingen", "Eppenberg", "Erschwil", "Flumenthal", "Fulenbach", "Gächliwil", "Gänsbrunnen", "Gempen", "Grenchen", "Grindel", "Gunzgen", "Hägendorf", "Halten", "Heinrichswil", "Herbetswil", "Hersiwil", "Hessigkofen", "Himmelried", "Hochwald", "Horriwil", "Hubersdorf", "Huggerwald", "Kestenholz", "Kienburg", "Kleinlützel", "Kriegstetten", "Küttigkofen", "Langendorf", "Laupersdorf", "Lohn", "Lommiswil", "Lüterkofen", "Messen", "Metzerlen", "Mühledorf", "Mümliswil", "Neuendorf", "Nieder Erlinsbach", "Nieder Gösgen", "Niederbuchsiten", "Niedergerlafingen", "Niederwil", "Nüglar", "Nunningen", "Oberbuchsiten", "Oekingen", "Oensingen", "Olten", "Ramiswil", "Recherswil", "Rickenbach", "Riedholz", "Rüttenen", "Schnottwil", "Schönenwerd", "Seewen", "Selzach", "Solothurn", "Starrkirch", "Steinhof", "Stüsslingen", "Trimbach", "Tscheppach", "Unterramsern", "Weissenstein", "Welschenrohr", "Winistorf", "Winznau", "Witterswil", "Wolfwil", "Zullwil"]}, {"label": "St. Gallen", "lang": "DE", "towns": ["Altenrhein", "Altstätten", "Au", "Bollingen", "Degersheim", "Dicken", "Diepoldsau/Schmitter", "Eggersrieth", "Engelburg", "Ennetbühl", "Eschenbach", "Flawil", "Flums-Dorf", "Frümsen", "Ganterschwil", "Gäziberg", "Goldingen", "Gommiswald", "Gossau", "Grub", "Hard-Hub", "Heerbrugg", "Kathol. Thal", "Katholisch Balgach", "Kirchberg", "Krinau", "Krummenau", "Langmoos (Rorschach)", "Lienz", "Lüchingen", "Mels", "Mistelegg", "Mogelsberg", "Montlingen", "Mörschwil", "Mosnang", "Muolen", "Nesslau", "Niederbüren", "Oberhelfenschwil", "Oberriet-Montlingen", "Oberrindal", "Oberstetten", "Rans", "Rebstein", "Rheineck", "Ricken", "Rorschach", "Rüthi", "Salez", "Sargans", "Schönenboden", "St. Gallen", "St. Gallenkappel", "St. Peterzell", "Starkenbach", "Untereggen", "Unterterzen", "Uznach", "Vättis", "Walde", "Waldkirch", "Walenstadt", "Weisstannen", "Wil", "Wittenbach", "Zuzwil"]}, {"label": "Thurgau", "lang": "DE", "towns": ["Aadorf", "Affeltrangen", "Alterswilen", "Altishausen", "Altnau", "Amlikon", "Andwil", "Arbon", "Au", "Balterswil", "Basadingen", "Berlingen", "Bettwiesen", "Bichelsee", "Birwinken", "Bischofszell", "Blidegg", "Bottighofen", "Braunau", "Buch", "Buhwil", "Bussnang", "Dettighofen", "Diessenhofen", "Dingetswil", "Donzhausen", "Dozwil", "Dussnang", "Egg (Thurgau)", "Eggethof", "Eggetsbühl", "Egnach", "Engelswilen", "Engishofen", "Engwang", "Engwilen", "Erlen", "Ermatingen", "Eschenz", "Eschikofen", "Eschlikon", "Ettenhausen", "Felben", "Fimmelsberg", "Fischingen", "Frasnacht", "Frauenfeld-Kurzdorf", "Freidorf", "Friltschen", "Fruthwilen", "Gabris", "Gachnang", "Gerlikon", "Götighofen", "Gottlieben", "Gündelhart", "Guntershausen", "Güttingen", "Hagenwil", "Halden", "Happerswil", "Hatswil", "Hauptwil", "Hefenhausen", "Hegi", "Herdern", "Herrenhof", "Hohentannen", "Holzhäusern", "Homburg", "Horn", "Hörstetten", "Hosenruck", "Hügelshofen", "Hungerbühl", "Hüttwilen", "Illhart", "Illighausen", "Islikon", "Istighofen", "Kaltenbach", "Kenzenau", "Kesswil", "Klarsreuti", "Kreuzlingen", "Kümmertshausen", "Landschlacht", "Langenneunforn", "Lanterswil", "Leimbach", "Lippoltswilen", "Lommis", "Lustdorf", "Mammern", "Märstetten", "Märwil", "Matzingen", "Mauren", "Mettendorf", "Mettlen", "Mettschlatt", "Mühlebach", "Müllheim", "Münchwilen", "Neukirch", "Neuwilen", "Nieder-Neunforn", "Nussbaumen", "Oberaach", "Oberhofen", "Oberneunforn", "Ottoberg", "Pfyn", "Raperswilen", "Räuchlisberg", "Rheinklingen", "Rickenbach", "Ringenzeichen (Arbon)", "Roggwil", "Romanshorn", "Salen-Reutenen", "Salenstein", "Salmsach", "Scherzingen", "Schlattingen", "Schönenberg", "Schönholzerswilen", "Schurten", "Sirnach", "Sitterdorf", "Sommeri", "St. Margarethen", "Stachen", "Steckborn", "Steig", "Steinebrunn", "Stettfurt", "Strass", "Sulgen", "Tägerwilen", "Thundorf", "Tobel", "Triboltingen", "Tuttwil", "Unterschlatt", "Üsslingen", "Uttwil", "Wäldi", "Wallenwil", "Wängi", "Wartenwil", "Warth", "Weerswilen", "Weinfelden", "Weiningen", "Wellhausen", "Wigoltingen", "Wilen", "Wilen/Neunform", "Wittenwil", "Wolfikon-Strohwilen", "Wuppenau", "Zihlschlacht", "Zuben"]}, {"label": "Ticino", "lang": "DE", "towns": ["Gurin (Bosco)"]}, {"label": "Uri", "lang": "DE", "towns": ["Altdorf", "Amsteg", "Bürglen", "Erstfeld", "Seelisberg", "Silenen"]}, {"label": "Wallis", "lang": "DE", "towns": ["Agarn", "Ausserberg", "Bitsch", "Eggerberg", "Fiesch", "Fieschertal", "Gluringen", "Hasel", "Münster", "Ober-Ems", "Obergesteln", "Raron", "Reckingen", "Ried", "Ried-Brig/Brig", "Saas-Balen", "Saas-Grund", "Sankt Niklaus", "Simplon", "Stalden", "Täsch", "Ulrichen", "Unterems", "Visperterminen", "Zermatt", "Zwischbergen"]}, {"label": "Zug", "lang": "DE", "towns": ["Cham", "Hagendorn", "Menzingen", "Oberägeri", "Risch", "Unterägeri", "Zug"]}, {"label": "Zürich", "lang": "DE", "towns": ["Adetswil", "Adlikon", "Adliswil", "Aesch", "Aesch-Riedt", "Aeugst", "Affoltern", "Albisrieden", "Alten", "Altikon", "Altstetten", "Arn", "Auslikon", "Bachs", "Bäretswil", "Bauma", "Benken", "Berg", "Berg am Irchel", "Berg Am Irchel", "Bertschikon", "Bettswil", "Birmensdorf", "Bisikon", "Boden", "Bonstetten", "Boppelsen", "Brüttisellen", "Bubikon", "Buch am Irchel", "Buchs", "Bühl", "Bülach", "Dielsdorf", "Dinhard", "Dübendorf", "Ebmatingen", "Effretikon", "Egg", "Elgg", "Ellikon", "Elsau", "Embrach", "Erlenbach", "Esslingen", "Ettenhausen", "Fägswil", "Fällanden", "Fehraltorf", "Fehrenwaldsberg", "Feldbach", "Feuerthalen", "Flaach", "Flurlingen", "Freienstein", "Freudwil", "Gfell", "Gfenn", "Girenbad", "Glottfelden", "Gossau", "Grafstal", "Greifensee", "Grüningen", "Grüt", "Gundetswil", "Gündisau", "Gütighausen", "Hagenbuch", "Herferswil", "Hermatswil", "Herrliberg-Tal", "Herschmettlen", "Hettlingen", "Hinteregg", "Hinwil", "Hirzel", "Hittenberg", "Hochfelden", "Hof-Neuthal", "Hofstetten", "Höngg", "Horben", "Horgen", "Horgenberg", "Höri", "Hörnli", "Humlikon", "Hünikon", "Hüntwangen", "Hütten", "Illnau", "Irgenhausen", "Kappel am Albis", "Kempten", "Kilchberg", "Klein-Andelfingen", "Kloten", "Knonau", "Kohltobel", "Kohlwies", "Kollbrunn", "Küsnacht", "Langenhard", "Langnau", "Langrüti", "Laupen", "Lenzen", "Lindau", "Lipperschwendi", "Lufingen", "Madetswil", "Männdorf", "Marthalen", "Maschwanden", "Maur", "Meilen", "Mettmenstetten", "Mönchaltorf", "Nänikon", "Neerach", "Neschwil", "Niederhasli", "Niederuster", "Nohl", "Ober-Dürnten", "Ober-Stammheim", "Oberglatt", "Oberrieden", "Oberweningen", "Oberwetzikon", "Obfelden", "Oerlikon", "Oerlingen", "Oetwil am See", "Opfikon", "Ottenbach", "Ottikon", "Pfäffikon", "Pfungen", "Raat", "Rafz", "Rheinau", "Riedikon", "Riedt", "Rikon", "Ringwil", "Robank", "Robenhausen", "Rorbas", "Rossau", "Rossweid", "Rudolfingen", "Rümlang", "Rumlikon", "Rüschlikon", "Russikon", "Rüti", "Schlieren", "Schmidrüti", "Schönenberg-Mittelberg", "Schuppis", "Schwamendingen", "Seebach", "Seegräben", "Sennhof", "Seuzach-Dorf", "Sihlwald", "Stadel", "Stäfa", "Stallikon", "Stocken", "Sulzbach", "Tägerst", "Tann", "Tanne", "Teufen", "Theilingen", "Tössriedern", "Trüllikon", "Truttikon", "Uessikon", "Uetikon am See", "Uitikon", "Undalen", "Unter-Dürnten", "Unterengstringen", "Unterholz", "Unterstammheim", "Unterwagenburg", "Unterwetzikon", "Ürzlikon", "Uster", "Wädenswil", "Wald", "Wallikon", "Wallisellen", "Wangen", "Wappenswil", "Wasterkingen", "Weiach", "Weiningen", "Weisslingen", "Wermatswil", "Wernetshausen", "Wettswil", "Wetzwil", "Wila", "Wildberg", "Wildensbuch", "Windlach", "Winterthur", "Witikon", "Wolfhausen", "Zell", "Zollikerberg", "Zollikon", "Zumikon", "Zünikon", "Zürich", "Zwillikon"]}],
  otherRegions: [
    {
      'value': 'ANDERES',
      'label': 'Anderes Land',
      'lang': '?'
    },
    {
      'value': 'GE',
      'label': 'Geneva',
      'lang': 'FR'
    },
    {
      'value': 'NE',
      'label': 'Neuchatel',
      'lang': 'FR'
    },
    {
      'value': 'VD',
      'label': 'Vaud',
      'lang': 'FR',
      'towns':[]
    }
  ],
  ageRange: [
    {
      'value': '0-11',
      'label': 'Unter 12'
    },
    {
      'value': '12-17',
      'label': 'Zwischen 12 und 17'
    },
    {
      'value': '18-24',
      'label': 'Zwischen 18 und 24'
    },
    {
      'value': '25-34',
      'label': 'Zwischen 25 und 34'
    },
    {
      'value': '35-44',
      'label': 'Zwischen 35 und 44'
    },
    {
      'value': '45-54',
      'label': 'Zwischen 45 und 54'
    },
    {
      'value': '55-64',
      'label': 'Zwischen 55 und 64'
    },
    {
      'value': '65-74',
      'label': 'Zwischen 65 und 74'
    },
    {
      'value': '75+',
      'label': 'Über 75'
    }
  ]
}

const mutations = {
  // eslint-disable-next-line no-unused-vars
  RESET_STATE(currentState) {
    currentState = Object.assign(currentState, state);
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
