const state = {
  swissCantons: [{ label: 'Aargau', lang: 'DE', towns: ['Aarau', 'Aarburg', 'Abtwil', 'Ammerswil', 'Aristau', 'Arni', 'Attelwil', 'Auenstein', 'Auw', 'Baden', 'Beinwil', 'Beinwil', 'Beinwil a. See', 'Bellikon', 'Benzenschwil', 'Berikon', 'Besenbüren', 'Biberstein', 'Birmenstorf', 'Birr', 'Birrhard', 'Birrwil', 'Böbikon', 'Boniswil', 'Boswil', 'Bottenwil', 'Bözen', 'Bremgarten', 'Brittnau', 'Brugg', 'Buchs', 'Bünzen', 'Burg', 'Büttikon', 'Buttwil', 'Dättwil', 'Densbüren', 'Dietwil', 'Dintikon', 'Dottikon', 'Döttingen', 'Döttingen', 'Dürrenäsch', 'Effingen', 'Eggenwil', 'Egliswil', 'Egliswil', 'Eiken', 'Elfingen', 'Endingen', 'Ennetbaden', 'Erlinsbach', 'Fahrwangen', 'Fischbach', 'Fischbach-Göslikon', 'Fislisbach', 'Freienwil', 'Frick', 'Friedlisberg', 'Full', 'Gansingen', 'Gebenstorf', 'Geltwil', 'Gipf-Oberfrick', 'Gontenschwil', 'Gontenschwil', 'Gränichen', 'Groinden Gm. Bergdietikon', 'Habsburg', 'Hägglingen', 'Hallwil', 'Hausen', 'Hausen', 'Hellikon', 'Hendschiken', 'Hermetschwil', 'Herznach', 'Hilfikon', 'Hirschthal', 'Holderbank', 'Holderbank', 'Holziken', 'Hornussen', 'Hottwil', 'Hunzenschwil', 'Ittenthal', 'Jonen', 'Kaiseraugst', 'Kaisten', 'Kallern', 'Killwangen', 'Kirchleerau', 'Kleindöttingen', 'Klingnau', 'Koblenz', 'Kölliken', 'Künten', 'Küttigen', 'Laufenburg', 'Lauffohr', 'Leibstadt', 'Lengnau', 'Lenzburg', 'Leuggern', 'Leutwil', 'Linn', 'Lupfig', 'MUR', 'Magden', 'Mägenwil', 'Mandach', 'Meisterschwanden', 'Mellingen', 'Menziken', 'Merenschwand', 'Mettau', 'Mettau', 'Möhlin', 'Mönthal', 'Moosleerau', 'Möriken', 'Muhen', 'Mühlau', 'Mühlethal', 'Mülligen', 'Mumpf', 'Münzleshausen Gm. Dättwil', 'Murgenthal', 'Neuenhof', 'Niederlenz', 'Niederrohrdorf', 'Niederwil', 'Nussbaumen', 'Oberbözberg', 'Oberehrendingen', 'Oberentfelden', 'Oberflachs', 'Oberhof', 'Oberkulm', 'Oberlunkhofen', 'Obermumpf', 'Oberrohrdorf', 'Oberrüti', 'Oberwil-Lieli', 'Oberwil/Niederwil', 'Oeschgen', 'Oeschgen', 'Oftringen', 'Olsberg', 'Othmarsingen', 'Reinach', 'Reinach', 'Reitnau', 'Rekingen', 'Remetschwil', 'Remigen', 'Rietheim', 'Riniken', 'Rohr', 'Rohr', 'Rothrist', 'Rottenschwil', 'Rudolfstetten', 'Rüfenach', 'Rümikon', 'Rupperswil', 'Rütihof Gm. Dättwil', 'Safenwil', 'Sarmenstorf', 'Sarmenstorf', 'Schafisheim', 'Scherz', 'Schiltwald', 'Schinznach', 'Schinznach Bad', 'Schlossrued', 'Schmiedrued', 'Schneisingen', 'Schupfart', 'Schwaderloch', 'Seengen', 'Seon', 'Siglistorf', 'Sins', 'Sisseln', 'Spreitenbach', 'Staffelbach', 'Staretschwil', 'Staufen', 'Stein', 'Stetten', 'Stilli', 'Strengelbach', 'Suhr', 'Tägerig', 'Teufenthal', 'Thalheim', 'Thalheim an der Thur', 'Turgi', 'Uerkheim', 'Uezwil', 'Umiken', 'Unterehrendingen', 'Unterentfelden', 'Unterkulm', 'Unterlunkhofen', 'Untersiggenthal', 'Ursprung-Unterbözberg', 'Veltheim', 'Villigen', 'Villmergen', 'Villnachern', 'Vogelsang', 'Vogelsang Gm. Gebenstorf', 'Vordemwald', 'Walde', 'Waldhäusern Gm Bünzen', 'Walterswil', 'Walterswil', 'Wannenhof Gm. Unterkulm', 'Wegenstetten', 'Wettingen', 'Widen', 'Wiliberg', 'Windisch', 'Wittnau', 'Wohlen', 'Wohlenschwil', 'Wölflinswil', 'Würenlingen', 'Würenlingen', 'Würenlos', 'Zeihen', 'Zeiningen', 'Zetzwil', 'Zofingen', 'Zofingen', 'Zufikon', 'Zurzach', 'Zuzgen'] }, { label: 'Appenzell Ausserrhoden', lang: 'DE', towns: ['Gais', 'Grub', 'Hasli Gm. Wolfhalden', 'Heiden', 'Herisau', 'Hundwil', 'Hüttschwendi Gm.Trogen', 'Kaien', 'Lehnen Gm. Hundwil', 'Lutzenberg', 'Ramsen', 'Rehetobel', 'Robach', 'Schachen Gm. Reute', 'Schönau Gm. Urnäsch', 'Schönengrund', 'Schwellbrunn', 'Stein', 'Tanne Gm. Wolfhalden', 'Teufen', 'Trogen', 'Wald', 'Waldstatt', 'Walzenhausen', 'Wolfhalden', 'Zelg Gm. Wolfhalden'] }, { label: 'Appenzell Innerrhoden', lang: 'DE', towns: ['Appenzell', 'Oberegg'] }, { label: 'Austria', lang: 'DE', towns: ['Gstalda bei Pfunds', 'Spiss'] }, { label: 'Basel-Land', lang: 'DE', towns: ['Allschwil', 'Anwil', 'Bennwil', 'Birsfelden', 'Böckten', 'Bottmingen', 'Bretzwil', 'Bubendorf', 'Buus', 'Diepflingen', 'Eptingen', 'Frenkendorf', 'Füllinsdorf', 'Giebenach', 'Hemmiken', 'Langenbruck', 'Liestal', 'Münchenstein', 'Oberdorf', 'Oltingen', 'Ormalingen', 'Pratteln', 'Reigoldswil', 'Rothenfluh', 'Rünenberg', 'Sissach', 'Tecknau', 'Thürnen', 'Waldenburg', 'Wenslingen', 'Wintersingen', 'Wittinsburg', 'Ziefen'] }, { label: 'Basel-Stadt', lang: 'DE', towns: ['Basel', 'Basel', 'Basel', 'Basel', 'Basel', 'Basel', 'Basel', 'Basel', 'Basel', 'Basel', 'Riehen'] }, { label: 'Bern', lang: 'DE', towns: ['Aarberg', 'Abländschen Gm. Saanen', 'Aefligen', 'Aegerten', 'Aeschiried  Gm. Aeschi', 'Aeschlen', 'Aeugstmatt Gm. Langnau', 'Affoltern i.E.', 'Alchenstorf', 'Allmendingen', 'Ammerzwil', 'Arch', 'Arni', 'Attiswil', 'Ausser-Eriz Gm. Eriz', 'Ausserschwand  Gm. Adelboden', 'Auswil', 'BE', 'Bächlen Gm. Diemtigen', 'Baggwil Gm. Seedorf', 'Bärau Gm. Langnau', 'Bärau Gm. Langnau', 'Bargen', 'Bätterkinden', 'Bellmund', 'Belp', 'Belpberg', 'Berg Gm. Stein', 'Bettenhausen', 'Biel', 'Biembach', 'Bigenthal Gm. Walkringen', 'Biglen', 'Bissen Gm. Saanen', 'Bleiken', 'Bleuen', 'Blumenstein', 'Boden Gm. Guttannen', 'Boden-Aegerten Gm. Lenk', 'Boltigen', 'Bönigen', 'Bowil', 'Bramberg', 'Brand Gm. Lenk', 'Brenzikofen', 'Brienz', 'Brienzwiler', 'Brügg', 'Brünigen Gm. Meiringen', 'Brüttelen', 'Buchen', 'Büetigen', 'Bühl', 'Bumbach Gm. Schangnau', 'Büren', 'Büren a.A.', 'Burgdorf', 'Burgistein', 'Burgiwil Gm. Burgistein', 'Burglauenen  Gm. Grindelwald', 'Busswil', 'Busswil b. Heimiswil', 'Busswil b. Melchnau', 'Bütikofen', 'Bütschel Gm. Rüeggisberg', 'Bützberg', 'Därligen', 'Därstetten', 'Dentenberg', 'Detligen', 'Diessbach b.B.', 'Dieterswil', 'Dotzigen', 'Dürrenast Gm. Thun', 'Dürrenroth', 'Ebligen Gm. Oberried', 'Ebnit Gm. Lauperswil', 'Eggiwil', 'Einigen Gm. Spiez', 'Emdthal Gm. Aeschi', 'Endweg Gm. Grindelwald', 'Enggistein Gm. Worb', 'Englisberg', 'Entschwil Gm. Diemtigen', 'Enzenbühl Gm. Homberg', 'Epsach', 'Eriswil', 'Erlach', 'Erlenbach', 'Ersigen', 'Etzelkofen', 'Falchern Gm. Schattenhalb', 'Faltschen  Gm. Reichenbach', 'Fankhaus', 'Farnern', 'Faulensee Gm. Spiez', 'Ferenbalm', 'Fermel  Gm. St. Stephan', 'Feutersoey Gm. Gsteig', 'Finsterhennen', 'Forst-Längenbühl', 'Frauenkappelen', 'Frittenbach (Unter-)Gm. Lauperswil', 'Fritzenhaus Gm. Wasen i.E.', 'Frutigen', 'Fuhren  Gm. Gadmen', 'Gadmen', 'Gals', 'Gambach', 'Gammen', 'Gampelen', 'Garstatt Gm. Boltigen', 'Geissholz', 'Gelterfingen', 'Gempelen  Gm. Frutigen', 'Gerolfingen', 'Gerzensee', 'Gimmelwald  Gm. Lauterbrunnen', 'Gmünden Gm. Langnau', 'Gohl (Egg) Gm. Langnau', 'Goldbach', 'Goldern Gm. Hasliberg', 'Goldswil Gm. Ringgenberg', 'Gondiswil', 'Grasswil', 'Grossaffoltern', 'Gruben', 'Grund Gm. Innertkirchen', 'Grund Gm. Saanen', 'Gstaad Gm. Saanen', 'Gsteig', 'Gsteigwiler', 'Guggisberg', 'Gumm Gm. Oberburg', 'Gündlischwand', 'Gunten Gm. Sigriswil', 'Gurbrü', 'Gurzelen', 'Gutenbrunnen Gm. Lenk', 'Guttannen', 'Gysenstein Gm. Konolfingen', 'Habkern', 'Häleschwand Gm. Signau', 'Hardern Gm. Lyss', 'Hasle bei Burgdorf', 'Hasli Gm. Frutigen', 'Hausen', 'Häutligen', 'Heiligenschwendi', 'Heimenhausen', 'Heimiswil', 'Herbligen', 'Hermrigen', 'Hettiswil', 'Hindelbank', 'Hindten Gm. Eggiwil', 'Hinterfultigen', 'Hinterkappelen', 'Hofstetten b. Brienz', 'Höhe Gm. Signau', 'Hohfluh Gm. Hasliberg', 'Hondrich Gm. Spiez', 'Horben Gm. Eggiwil', 'Horrenbach', 'Hub', 'Huttwil', 'Iffwil', 'Ilfis Gm. Langnau', 'Ins', 'Interlaken', 'Ipsach', 'Iseltwald', 'Isenfluh', 'Itramen Gm. Grindelwald', 'Ittigen', 'Jaberg', 'Jens', 'Jucher Gm. Radelfingen', 'Kallnach', 'Kaltacker', 'Kammershaus Gm. Langnau', 'Kanderbrück', 'Kapf Gm. Eggiwil', 'Kappelen', 'Kappelen', 'Kaufdorf', 'Kehrsatz', 'Kernenried', 'Kien  Gm. Reichenbach', 'Kienholz Gm. Brienz', 'Kiental  Gm. Reichenbach', 'Kirchberg', 'Kirchdorf', 'Kirchenthurnen', 'Kirchlindach', 'Kleindietwil', 'Kleinroth Gm. Arni', 'Köniz', 'Konolfingen', 'Kramershaus Gm. Heimisbach', 'Krattigen', 'Krauchthal', 'Kreuzweg Gm. Mötschwil', 'Kriechenwil', 'Kröschenbrunnen Gm. Trub', "La Chaux d'Abel Gm. Sonvilier", 'Landstuhl Gm. Neuenegg', 'Lang Gm. Uetendorf', 'Langenthal', 'Langnau', 'Latterbach', 'Lauenen  Gm. Saanen', 'Lauperswil', 'Lauterbrunnen', 'Leber Gm. Eggiwil', 'Ledi', 'Leissigen', 'Lengnau', 'Lenk', 'Leuzigen', 'Ligerz', 'Linden Gm. Ausser-/Innerbirrmoos', 'Linden Gm. Oberlangenegg', 'Lindent(h)al', 'Linter  Gm. Frutigen', 'Lobsigen Gm. Seedorf', 'Lotzwil', 'Lüscherz', 'Lüthiwil', 'Lütschental', 'Lyss', 'Lyssach', 'MUR bei BE', 'Mannried  Gm. Zweisimmen', 'Matten', 'Matten Gm. St. Stephan', 'Mattstetten', 'Matzwil Gm. Radelfingen', 'Mauss', 'Meienried', 'Meiersmaad Gm. Sigriswil', 'Meikirch', 'Meinisberg', 'Meiringen', 'Melchnau', 'Merzligen', 'Mirchel', 'Mistelberg Gm. Wynigen', 'Mitholz-Blausee Gm. Kandergrund', 'Mont-Soleil', 'Mont-Tramelan', 'Moos Gm. St. Stephan', 'Moosacker Gm. Homberg', 'Moosaffoltern', 'Moosegg Gm. Lauperswil', 'Mörigen', 'Mühledorf', 'Mühlestalden Gm. Gadmen', 'Mühlethurnen', 'Mülchi', 'Münchenbuchsee', 'Mungnau Gm. Lauperswil', 'Münsingen', 'Müntschemier', 'Mürren Gm. Lauterbrunnen', 'Mutten Gm. Signau', 'Neuenegg', 'Neuhaus Gm. Ochlenberg', 'Nidau', 'Niederbach Gm. Rüderswil', 'Niederberg Gm. Eggiwil', 'Niederhünigen', 'Niedermuhlern', 'Niederried', 'Niederried', 'Niederstocken', 'Niederwichtrach', 'Noflen', 'Oberbipp', 'Oberburg', 'Oberdiessbach', 'Oberei Gm. Röthenbach', 'Oberfeld Gm. Frutigen', 'Oberfrittenbach Gm. Langnau', 'Obergoldbach Gm. Landiswil', 'Oberhofen', 'Oberhofen am Thunersee', 'Oberhünigen Gm. Schlosswil', 'Oberlangenegg', 'Oberried', 'Oberried Gm. Lenk', 'Oberstocken', 'Oberwangen', 'Oberwil', 'Oberwil', 'Oberwil bei Büren', 'Oenz', 'Oey Gm Diemtigen', 'Ohringen Gm. Winterthur', 'Oltigen Gm. Radelfingen', 'Orpund', 'Ortbach Gm. Trubschachen', 'Ortschwaben', 'Otterbach', 'Pfaffenmoos Gm. Eggiwil', 'Pieterlen', 'Port', 'Pöschenried Gm. Lenk', 'Radelfingen', 'Rain Gm. Seftigen', 'Rapperswil', 'Reichenbach', 'Reichenstein  b. Zweisimmen', 'Reinisch  Gm. Frutigen', 'Reisiswil', 'Reudlen  Gm. Reichenbach', 'Reust Gm. Sigriswil', 'Reutenen Gm. Zäziwil', 'Reuti Gm. Hasliberg', 'Reutigen', 'Ried Gm. Frutigen', 'Riedern Gm. Diemtigen', 'Riggisberg', 'Rinderwald  Gm. Frutigen', 'Ringgenberg', 'Ringoldswil Gm. Sigriswil', 'Roggwil', 'Rohrbach', 'Rohrbach', 'Rotenbaum', 'Röthenbach', 'Röthenbach b. Herzogenbuchsee', 'Rubigen', 'Ruchenbühl Gm. Beatenberg', 'Ruchwil  Gm. Seedorf', 'Rüderswil', 'Rüdtligen-Alchenflüh', 'Rüedisbach', 'Rüeggisberg', 'Rüegsau', 'Rumisberg', 'Rümligen', 'Rüti b.Büren', 'Rüti bei Riggisberg', 'Saanen Dorf', 'Safnern', 'Sangernboden Gm. Guggisberg', 'Saxeten', 'Schafhausen im Emmental', 'Schalunen', 'Scharnachtal Gm.Reichenbach', 'Scheidegg (Kleine) Gm. Grindelwald', 'Scheunen', 'Scheunenberg', 'Scheuren', 'Schliern Gm. Köniz', 'Schlosswil', 'Schmocken Gm. Beatenberg', 'Schonegg Gm. Sumiswald', 'Schoren', 'Schüpbach Gm. Signau', 'Schüpberg', 'Schüpfen', 'Schupposen Gm. Oberburg', 'Schwadernau', 'Schwanden', 'Schwanden b. Schüpfen', 'Schwanden bei Brienz', 'Schwandi Gm. Reichenbach', 'Schwarzenburg', 'Schwarzenmatt Gm. Boltigen', 'Schwendibach', 'Seeberg', 'Seedorf', 'Seewil', 'Seftigen', 'Siehen', 'Signau', 'Sigriswil', 'Siselen', 'Spiez', 'Spiezwiler Gm. Spiez', 'Stechelberg  Gm. Lauterbrunnen', 'Steffisburg', 'Steinbach Gm. Trubschachen', 'Stiegelschwand Gm. Adelboden', 'Studen', 'Stutz Gm. Riggisberg', 'Suberg', 'Sumiswald', 'Süri', 'Sutz', 'Talhaus Gm. Grindelwald', 'Täuffelen', 'Teuffenthal', 'Than Gm. Ranflüh', 'Thun', 'Thun', 'Thunstetten', 'Toffen', 'Treiten', 'Trimstein Gm. Rubigen', 'Trub', 'Trubschachen', 'Tschingel Gm. Sigriswil', 'Tschugg', 'Tüscherz', 'Twann', 'Twären Gm. Trub', 'Uetendorf', 'Uettligen', 'Unterbach Gm. Meiringen', 'Unterlangenegg', 'Unterseen', 'Untersteckholz', 'Unterstock', 'Ursellen Gm. Konolfingen', 'Ursenbach', 'Uttigen', 'Utzenstorf', 'Utzigen', 'Vechigen', 'Vinelz', 'Vorderfultigen', 'Vorimholz', 'Wachseldorn', 'Wahlendorf', 'Waldegg Gm. Beatenberg', 'Waldgasse Gm. Wahlern', 'Walkringen', 'Walliswil-Bipp', 'Walliswil-Wangen', 'Walperswil', 'Wangen a. A.', 'Wärgistal Gm. Grindelwald', 'Wasen i.E.', 'Wattenwil', 'Wattenwil Gm. Worb', 'Weissenbach Gm. Boltigen', 'Wengen Gm. Lauterbrunnen', 'Wengi', 'Wengi Gm. Reichenbach', 'Werdthof', 'Wierezwil', 'Wikartswil Gm. Walkringen', 'Wilderswil', 'Wiler', 'Wiler Gm. Seedorf', 'Wileroltigen', 'Willigen Gm. Schattenhalb', 'Wimmis', 'Winklen Gm. Frutigen', 'Wohlen bei BE', 'Wolfisberg', 'Worben', 'Wydimatt Gm. Walkringen', 'Wynau', 'Wynigen', 'Wyssachen', 'Wyssbach', 'Zaun Gm. Meiringen', 'Zäziwil', 'Ziegelried', 'Zielebach', 'Zimlisberg', 'Zuzwil', 'Zweisimmen', 'Zwieselberg', 'Zwischenflüh Gm. Diemtigen'] }, { label: 'Freiburg', lang: 'DE', towns: ['Altavilla', 'Alterswil', 'Berg', 'Bösingen', 'Brünisried', 'Burg bei Murten', 'Cordast', 'Courlevon', 'Düdingen', 'Ferpicloz', 'Flamatt', 'Fräschels', 'Galmiz', 'Gempenach', 'Gurmels', 'Guschelmuth', 'Heitenried', 'Im Fang (Jaun)', 'Kerzers', 'Lichtena', 'Murten', 'Plasselb', 'Rechthalten', 'Salvenach', 'Schmitten', 'St. Silvester', 'St. Ursen', 'Tafers', 'Ueberstorf', 'Ulmiz', 'Wünnewil'] }, { label: 'Glarus', lang: 'DE', towns: ['Betschwanden', 'Bilten', 'Braunwald', 'Diesbach', 'Elm', 'Engi', 'Filzbach', 'GL', 'Hätzingen', 'Leuggelbach', 'Linthal', 'Linthal', 'Matt', 'Mitlödi', 'Mollis', 'Mühlehorn', 'Näfels', 'Näfels-Berg', 'Netstal', 'Niederurnen', 'Oberurnen', 'Obstalden', 'Rüti', 'Schwanden', 'Schwändi', 'Sool'] }, { label: 'Graubünden', lang: 'DE', towns: ['Arezen Gm. Versam', 'Buchen', 'Camana Gm. Safien', 'Castiel', 'Castiel', 'Chur', 'Davos', 'Davos Dorf', 'Fanas', 'Felsberg', 'Fideris', 'Fläsch', 'Furna', 'Glaris', 'Grüsch', 'Hinterrhein', 'Igis-Landquart', 'Im Bach Gm. Avers', 'Jenaz', 'Jenins', 'Klosters', 'Küblis', 'Langwies', 'Luzein', 'Maienfeld', 'Malans', 'Malix', 'Medels i. Rhw.', 'Meierhof', 'Molinis', 'Monstein', 'Mutten', 'Nufenen', 'Pany', 'Pasugg', 'Peist', 'Praden', 'Saas i/Pr.', 'Says', 'Schiers', 'Schmitten/Ferrera', 'Seewis im Prättigau', 'Splügen', 'St. Antönien', 'St. Peter-Pagig', 'Sufers', 'Tamins', 'Thusis', 'Tschappina', 'Tschiertschen', 'Untervaz', 'Urmein', 'Valendas', 'Vals', 'Wiesen / Tein'] }, { label: 'Luzern', lang: 'DE', towns: ['Adligenswil', 'Aesch', 'Alberswil', 'Altbüron', 'Altishofen', 'Altwis', 'Ballwil', 'Bramboden Gm. Romoos', 'Breitebnet Gm. Romoos', 'Buchrain', 'Buchs', 'Buchschachen Gm. Marbach', 'Bühl Gm. Gunzwil', 'Büron', 'Buttisholz', 'Dagmersellen', 'Dogelzwil Gm. Oberkirch', 'Dorf Gm. Doppelschwand', 'Ebersecken', 'Ebikon', 'Ebnet', 'Egg Gm. Malters', 'Eggbergen Gm. Romoos', 'Egolzwil', 'Eich', 'Eigenthal', 'Ellbach Gm. Luthern', 'Emmen', 'Eppenwil Gm. Grossdietwil', 'Ermensee', 'Eschenbach', 'Escholzmatt', 'Ettiswil', 'Etzenerlen', 'Finsterwald Gm. Entlebuch', 'Fischbach', 'Flühli (Dorf)', 'Fontannen', 'Fontannen Gm. Schüpfheim', 'Geiss', 'Gelfingen', 'Gerliswil', 'Geuensee', 'Glichenberg Gm. Escholzmatt', 'Grossdietwil', 'Grosswangen', 'Gunzwil', 'Haldenegg Gm. Hasle', 'Hasle', 'Hellbühl', 'Hergiswil', 'Hildisrieden', 'Hilferental Gm. Escholzmatt', 'Hintermoos Gm. Wikon', 'Hitzkirch', 'Hochdorf', 'Hofstatt', 'Hohenrain', 'Holz Gm. Doppelschwand', 'Holzwegen Gm. Romoos', 'Horw', 'Hübeli Gm. Hergiswil', 'Ibenmoos Gm. Hohenrain', 'Inwil', 'Kaltbach', 'Kleinwangen', 'Kottwil', 'Kriens', 'Krumbach', 'Krummatt Gm. Romoos', 'Kulmerau', 'Langnau', 'Lehn Gm. Escholzmatt', 'Lieli', 'Luthern', 'Luthern Bad', 'Luzern', 'Malters', 'Marbach', 'Mauensee', 'Meggen', 'Mehlsecken', 'Meierskappel', 'Menzberg', 'Menznau', 'Mosen', 'Münster', 'Müswangen', 'Nebikon', 'Neudorf', 'Neuenkirch', 'Niederschongau', 'Nottwil', 'Oberkirch', 'Obernau', 'Ohmstal', 'Ostergau', 'Peffikon', 'Perlen', 'Pfaffnau', 'Rain', 'Reiden', 'Reidermoos', 'Rengg', 'Retschwil', 'Reussbühl', 'Richenthal', 'Rickenbach', 'Roggliswil', 'Rohrmatt', 'Römerswil', 'Romoos', 'Root', 'Rothenburg', 'Rothmoos Gm. Entlebuch', 'Rüdiswil', 'Ruswil', 'Sandboden Gm. Flühli', 'Schachen Gm. Werthenstein', 'Schärlig Gm. Marbach', 'Schenkon', 'Schlierbach', 'Schongau', 'Schötz', 'Schülen', 'Schüpfheim', 'Schwand Gm. Schüpfheim', 'Schwarzenbach', 'Schwarzenberg', 'Sempach', 'Sigerswil Gm. Grosswangen', 'Sigigen', 'Sörenberg Gm. Flühli', 'Sprengi Gm. Emmen', 'St. Erhard', 'St. Urban', 'Steinhusen Gm. Wolhusen', 'Sulz', 'Sulz b. Laufenburg', 'Sursee', 'Tann Gm. Schenkon', 'Twerenegg', 'Udligenswil', 'Uffikon', 'Ufhusen', 'Vitznau', 'Wauwil', 'Weggis', 'Werthenstein', 'Werthenstein-Unterdorf', 'Wiggen Gm. Escholzmatt', 'Wilgis Gm. Malters', 'Wilihof', 'Willisau Land', 'Willisau Stadt', 'Winikon', 'Winterbühl Gm. Littau', 'Wolhusen', 'Zell', 'Ziswil'] }, { label: 'Nidwalden', lang: 'DE', towns: ['Altzellen', 'Buochs', 'Büren Gm. Oberdorf', 'Dallenwil', 'Emmetten', 'Ennetbürgen', 'Ennetmoos', 'Obbürgen', 'Stans', 'Stansstad', 'Wolfenschiessen'] }, { label: 'Obwalden', lang: 'DE', towns: ['Engelberg', 'Engelberg', 'Engelberg', 'Engelberg', 'Engelberg', 'Giswil', 'Lungern', 'Lungern', 'Obwalden', 'Sachseln', 'Sarnen', 'Sarnen', 'Wilen'] }, { label: 'Schaffhausen', lang: 'DE', towns: ['Altdorf', 'Beggingen', 'Bibern', 'Buchthalen', 'Büttenhardt', 'Dörflingen', 'Gächlingen', 'Guntmadingen', 'Hemmental', 'Herblingen', 'Hofen', 'Lohn', 'Löhningen', 'Merishausen', 'Neunkirch', 'Oberhallau', 'Opfertshofen', 'Osterfingen', 'Ramsen', 'Rüdlingen', 'Rüdlingen', 'Schaffhausen', 'Schaffhausen', 'Schaffhausen', 'Siblingen', 'Stein am Rhein', 'Thayngen', 'Thayngen', 'Trasadingen', 'Unterhallau', 'Wilchingen'] }, { label: 'Schwyz', lang: 'DE', towns: ['Alpthal', 'Altendorf', 'Arth', 'Einsiedeln', 'Feusisberg', 'Galgenen', 'Gersau', 'Illgau', 'Ingenbohl', 'Innerthal', 'Küssnacht am Rigi', 'Lachen', 'Lauerz', 'Morschach', 'Muotathal', 'Oberiberg', 'Reichenburg', 'Riemenstalden', 'Rothenthurm', 'SZ', 'Sattel', 'Schübelbach', 'Steinen', 'Steinerberg', 'Tuggen', 'Unteriberg', 'Vorderthal', 'Wangen'] }, { label: 'Solothurn', lang: 'DE', towns: ['Aedermannsdorf', 'Aetigkofen', 'Aetingen', 'Balm bei Messen', 'Balsthal', 'Bärschwil', 'Bellach', 'Bettlach', 'Biberist', 'Bibern', 'Bolken', 'Boningen', 'Breitenbach', 'Brügglen', 'Brunnersberg (Gross-)', 'Büsserach', 'Däniken', 'Deitingen', 'Derendingen', 'Dornach', 'Dulliken', 'Egerkingen', 'Eppenberg', 'Erschwil', 'Flumenthal', 'Fulenbach', 'Gächliwil', 'Gänsbrunnen', 'Gempen', 'Gerlafingen', 'Grenchen', 'Grindel', 'Gunzgen', 'Hägendorf', 'Halten', 'Heinrichswil', 'Herbetswil', 'Hersiwil', 'Hessigkofen', 'Himmelried', 'Hochwald', 'Horriwil', 'Hubersdorf', 'Huggerwald', 'Kestenholz', 'Kienburg', 'Kleinlützel', 'Kriegstetten', 'Küttigkofen', 'Langendorf', 'Laupersdorf', 'Lohn', 'Lommiswil', 'Lüterkofen', 'Messen', 'Metzerlen', 'Mühledorf', 'Mümliswil', 'Neuendorf', 'Niederbuchsiten', 'Niedererlinsbach', 'Niedergösgen', 'Niederwil', 'Nuglar', 'Nunningen', 'Oberbuchsiten', 'Oekingen', 'Oensingen', 'Olten', 'Ramiswil', 'Recherswil', 'Rickenbach', 'Rickenbach', 'Riedholz', 'Rüttenen', 'Schnottwil', 'Schönenwerd', 'Seewen', 'Selzach', 'Solothurn', 'Starrkirch', 'Steinhof', 'Stüsslingen', 'Trimbach', 'Tscheppach', 'Unterramsern', 'Weissenstein Gm. Rechthalten', 'Welschenrohr', 'Winistorf', 'Winznau', 'Witterswil', 'Witterswil', 'Wolfwil', 'Zullwil'] }, { label: 'St. Gallen', lang: 'DE', towns: ['Altenrhein', 'Altstätten', 'Au', 'Balgach', 'Bollingen', 'Degersheim', 'Dicken bei Degersheim', 'Diepoldsau', 'Eggersriet', 'Engelburg', 'Ennetbühl', 'Eschenbach', 'Flawil', 'Flums', 'Frümsen', 'Ganterschwil', 'Goldingen', 'Gommiswald', 'Gossau', 'Grub', 'Hard', 'Heerbrugg (nur Brief)', 'Kirchberg', 'Krinau', 'Krummenau', 'Langmoos Gm. Rorschacherberg', 'Lienz', 'Lüchingen', 'Lüchingen', 'Mels', 'Mistelegg Gm. Hemberg', 'Mogelsberg', 'Montlingen', 'Mörschwil', 'Mosnang', 'Muolen', 'Nesslau', 'Niederbüren', 'Oberhelfenschwil', 'Oberriet', 'Oberrindal', 'Oberstetten', 'Rans', 'Rebstein', 'Rheineck', 'Ricken Gm. Wattwil', 'Rorschach', 'Rüthi', 'SGkappel', 'Salez', 'Sargans', 'Schönenboden Gm. Wildhaus', 'St. Gallen', 'St. Peterzell', 'Starkenbach', 'Thal', 'Untereggen', 'Unterterzen', 'Uznach', 'Vättis', 'Walde', 'Waldkirch', 'Walenstadt', 'Warmesberg', 'Weisstannen', 'Wil', 'Wil', 'Wittenbach', 'Zuzwil'] }, { label: 'Thurgau', lang: 'DE', towns: ['Aachen bei Arbon', 'Aadorf', 'Affeltrangen', 'Alterswilen', 'Altishausen', 'Altnau', 'Amlikon', 'Amriswil', 'Andwil', 'Arbon', 'Au', 'Balterswil', 'Basadingen', 'Berlingen', 'Bettwiesen', 'Bichelsee', 'Birwinken', 'Bischofszell', 'Blidegg', 'Bottighofen', 'Braunau', 'Buch bei Frauenfeld', 'Buhwil', 'Bussnang', 'Dettighofen bei Lanzenneunforn', 'Diessenhofen', 'Diessenhofen', 'Dingetswil', 'Donzhausen', 'Dozwil', 'Dussnang', 'Egg (Sirnach)', 'Eggethof', 'Eggetsbühl', 'Egnach', 'Engelswilen', 'Engishofen', 'Engwang', 'Engwilen', 'Erlen', 'Ermatingen', 'Eschenz', 'Eschikofen', 'Eschlikon', 'Ettenhausen', 'Felben', 'Fimmelsberg', 'Fischingen', 'Frasnacht', 'Frauenfeld', 'Freidorf', 'Friltschen', 'Fruthwilen', 'Gabris', 'Gachnang', 'Gerlikon', 'Götighofen', 'Gottlieben', 'Gundelhart-Hörhausen', 'Guntershausen bei Aadorf', 'Güttingen', 'Hagenwil b. Amriswil', 'Halden', 'Happerswil-Buch', 'Hatswil', 'Hauptwil', 'Hefenhausen', 'Hegi', 'Herdern', 'Herrenhof', 'Hoferberg Gm. Wilen-Gottsberg', 'Hohentannen', 'Holzhäusern', 'Homburg', 'Horn', 'Hörstetten', 'Hosenruck', 'Hugelshofen', 'Hungerbühl', 'Hüttwilen', 'Illhart', 'Illighausen', 'Islikon', 'Istighofen', 'Kaltenbach', 'Kenzenau Gm. Bischofszell', 'Kesswil', 'Kreuzlingen', 'Kümmertshausen', 'Landschlacht', 'Lanterswil', 'Lanzenneunforn', 'Leimbach', 'Lippoldswilen', 'Lommis', 'Lustdorf', 'Mammern', 'Märstetten', 'Märwil', 'Mattwil', 'Matzingen', 'Mauren', 'Mettendorf', 'Mettlen', 'Mettschlatt', 'Mühlebach', 'Müllheim', 'Münchwilen', 'Neukirch', 'Neukirch a/Th.', 'Neuwilen', 'Niederneunforn', 'Nussbaumen', 'OBEeunforn', 'Oberaach', 'Oberhof', 'Oberhofen bei Kreuzlingen', 'Ottoberg', 'Pfyn', 'Raperswilen', 'Räuchlisberg', 'Rheinklingen', 'Rickenbach', 'Ringenzeichen Gm. Egnach', 'Roggwil', 'Romanshorn', 'Salen-Reutenen', 'Salenstein', 'Salmsach', 'Scherzingen', 'Schlattingen', 'Schönenberg', 'Schönholzerswilen', 'Schurten', 'Sirnach', 'Sitterdorf', 'Sommeri', 'St. Margarethen', 'Steckborn', 'Steig Gm.Bichelsee', 'Steinebrunn', 'Stettfurt', 'Strass', 'Sulgen', 'Tägerwilen', 'Thundorf', 'Tobel', 'Triboltingen', 'Tuttwil', 'Uesslingen', 'Unterschlatt', 'Uttwil', 'Wäldi', 'Wallenwil', 'Wängi', 'Wartenwil', 'Warth', 'Weerswilen', 'Weinfelden', 'Weiningen', 'Wellhausen', 'Wigoltingen', 'Wilen', 'Wilen bei Neunform', 'Wittenwil', 'Wolfikon-Strohwilen', 'Wuppenau', 'Zezikon', 'Zihlschlacht', 'Zuben'] }, { label: 'Ticino', lang: 'DE', towns: ['Bosco/Gurin'] }, { label: 'Uri', lang: 'DE', towns: ['Altdorf', 'Amsteg', 'Bürglen', 'Erstfeld', 'Seelisberg', 'Silenen'] }, { label: 'Wallis', lang: 'DE', towns: ['Agarn', 'Ausserberg', 'Bitsch', 'Eggerberg', 'Fiesch', 'Fieschertal', 'Gluringen', 'Hasel Gm. Bürchen', 'Münster', 'Oberems', 'Obergesteln', 'Raron', 'Reckingen', 'Ried bei Brig', 'Ried-Mörel', 'Saas-Balen', 'Saas-Grund', 'Simplon', 'St. Niklaus', 'Stalden', 'Täsch', 'Ulrichen', 'Unterems', 'Visperterminen', 'Zermatt', 'Zwischbergen'] }, { label: 'Zug', lang: 'DE', towns: ['Cham', 'Cham', 'Hagendorn', 'Menzingen', 'Oberägeri', 'Risch', 'Unterägeri', 'Zug', 'Zug'] }, { label: 'Zürich', lang: 'DE', towns: ['Adetswil', 'Adlikon', 'Adliswil', 'Aesch', 'Aesch', 'Affoltern', 'Affoltern a.A.', 'Albisrieden', 'Alten', 'Altikon', 'Altstetten', 'Arn', 'Auegst a.A.', 'Auslikon', 'Bachs', 'Bäretswil', 'Bauma', 'Benken', 'Berg', 'Berg am Irchel', 'Berg am Irchel', 'Bertschikon', 'Bertschikon', 'Bettswil', 'Birmensdorf', 'Bisikon', 'Boden Gm. Fieschenthal', 'Bonstetten', 'Boppelsen', 'Brüttisellen', 'Bubikon', 'Buch am Irchel', 'Buchs', 'Bülach', 'Bülach', 'Dielsdorf', 'Dinhard', 'Dorf', 'Dübendorf', 'Dürnten', 'Ebmatingen', 'Effretikon', 'Egg', 'Elgg', 'Ellikon an der Thur', 'Elsau', 'Embrach', 'Erlenbach', 'Esslingen', 'Ettenhausen bei Wetzikon', 'Fägswil Gm. Rüti', 'Fällanden', 'Fehraltdorf', 'Fehrenwaldsberg Gm. Bäretswil', 'Feldbach', 'Feuerthalen', 'Flaach', 'Flurlingen', 'Freienstein', 'Freudwil', 'Gfell', 'Gfenn', 'Girenbad bei Hinwil', 'Glattfelden', 'Gossau', 'Grafstal', 'Grafstal', 'Greifensee', 'Grüningen', 'Grüt', 'Gundetswil', 'Gündisau', 'Gütighausen', 'Hagenbuch', 'Herferswil', 'Hermatswil', 'Herrliberg', 'Herschmettlen', 'Hettlingen', 'Hinteregg', 'Hinwil', 'Hirzel', 'Hirzel', 'Hirzel', 'Hittenberg', 'Hochfelden', 'Hofstetten-Flüh', 'Höngg', 'Horben bei Illnau', 'Horgen', 'Horgenberg Gem. Horgen', 'Höri', 'Hörnli Gm. Fischenthal', 'Humlikon', 'Hünikon', 'Hüntwangen', 'Hütten', 'Illnau', 'Irgenhausen', 'Kappel am Albis', 'Kempten', 'Kilchberg', 'Kleinandelfingen', 'Kloten', 'Knonau', 'Kohltobel Gm. Sternenberg', 'Kohlwies Gm. Sternenberg', 'Kollbrunn', 'Küsnacht', 'Langenhard Gm. Zell', 'Langnau a.A.', 'Langrüti Gm. Wädenswil', 'Laupen', 'Lenzen', 'Lindau', 'Lipperschwendi', 'Lufingen', 'Madetswil', 'Männedorf', 'Marthalen', 'Marthalen', 'Maschwanden', 'Maur', 'Meilen', 'Meilen', 'Meilen', 'Mettmenstetten', 'Mönchaltdorf', 'Nänikon', 'Neerach', 'Neschwil', 'Neutal Gm. Wald', 'Niederhasli', 'Niederuster', 'Nohl', 'Oberdürnten', 'Oberglatt', 'Oberrieden', 'Oberstammheim', 'Oberweningen', 'Oberwetzikon', 'Obfelden', 'Oerlikon', 'Oerlingen', 'Oetwil a. See', 'Opfikon', 'Ottenbach', 'Ottikon', 'Ottikon', 'Pfäffikon', 'Pfungen', 'Raat bei Windlach', 'Rafz', 'Rheinau', 'Riedikon', 'Riet bei Gibswil', 'Rikon im Tösstal', 'Ringwil', 'Robank-Linggenberg', 'Robenhausen', 'Rorbas', 'Rossau Gm. Mettmenstetten', 'Rossweid Gm. Sternenberg', 'Rudolfingen', 'Rümlang', 'Rumlikon', 'Rüschlikon', 'Russikon', 'Rüti', 'Schlieren', 'Schmidrüti', 'Schönenberg', 'Schuppis Gm. Wila', 'Schwamendingen', 'Seebach', 'Seegräben', 'Sennhof', 'Seuzach', 'Sihlwald', 'Stadel', 'Stäfa', 'Stallikon', 'Stocken Gm. Wädenswil', 'Sulzbach', 'Tägerst', 'Tann', 'Tanne Gm. Bäretswil', 'Teufen', 'Theilingen', 'Tössriederen', 'Trüllikon', 'Truttikon', 'Turbenthal', 'Uessikon', 'Uetikon am See', 'Uitikon a. Albis', 'Undalen', 'Unterengstringen', 'Unterholz Gm. Hinwil', 'Unterstammheim', 'Unterwagenburg', 'Ürzlikon', 'Ürzlikon', 'Uster', 'Wädenswil', 'Wädenswil', 'Wädenswil', 'Wald', 'Wald', 'Wallikon', 'Wallisellen', 'Wangen', 'Wappenswil Gm. Bäretswil', 'Wasterkingen', 'Weiach', 'Weiningen', 'Weisslingen', 'Wermatswil', 'Wernetshausen', 'Wettswil a.A.', 'Wetzikon', 'Wetzwil', 'Wila', 'Wila', 'Wildberg', 'Wildensbuch', 'Windlach', 'Winterthur', 'Witikon', 'Wolfhausen', 'Zell', 'Zollikerberg', 'Zollikon', 'Zumikon', 'Zünikon', 'Zürich', 'Zwillikon'] }],
  otherRegions: [
    {
      value: 'ANDERES',
      label: 'Anderes Land',
      lang: '?'
    },
    {
      value: 'GE',
      label: 'Geneva',
      lang: 'FR'
    },
    {
      value: 'NE',
      label: 'Neuchatel',
      lang: 'FR'
    },
    {
      value: 'VD',
      label: 'Vaud',
      lang: 'FR',
      towns: []
    }
  ],
  ageRange: [
    {
      value: '0-11',
      label: 'Unter 12'
    },
    {
      value: '12-17',
      label: 'Zwischen 12 und 17'
    },
    {
      value: '18-24',
      label: 'Zwischen 18 und 24'
    },
    {
      value: '25-34',
      label: 'Zwischen 25 und 34'
    },
    {
      value: '35-44',
      label: 'Zwischen 35 und 44'
    },
    {
      value: '45-54',
      label: 'Zwischen 45 und 54'
    },
    {
      value: '55-64',
      label: 'Zwischen 55 und 64'
    },
    {
      value: '65-74',
      label: 'Zwischen 65 und 74'
    },
    {
      value: '75+',
      label: 'Über 75'
    }
  ]
}

const mutations = {
  // eslint-disable-next-line no-unused-vars
  RESET_STATE (currentState) {
    currentState = Object.assign(currentState, state)
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
