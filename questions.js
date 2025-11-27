const questions = [
    // MINNISGLÆRUR (60 spurningar)
    {
        category: 'minni',
        question: 'Hverjir settu fram kenningu um þrískiptingu minnisins í skynminni, skammtímaminni og langtímaminni?',
        options: ['Freud og Jung', 'Pavlov og Watson', 'Atkinson og Shiffrin', 'Piaget og Vygotsky'],
        correct: 2
    },
    {
        category: 'minni',
        question: 'Hversu lengi varir skynminni?',
        options: ['1-2 mínútur', '¼ - 3 sekúndur', '10-15 sekúndur', '5-10 mínútur'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er skynminni oft kallað?',
        options: ['Vinnsluminni', 'Filter-kerfið', 'Geymsluminnið', 'Endurheimtukerfið'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Á hvaða formi eru upplýsingar skráðar í skynminni?',
        options: ['Alltaf á hljóðrænu formi', 'Alltaf á sjónrænu formi', 'Á sama formi og þær berast', 'Sem texti'],
        correct: 2
    },
    {
        category: 'minni',
        question: 'Hvað gerist þegar nýjar upplýsingar berast í skynminni?',
        options: ['Þær blandast saman við eldri upplýsingar', 'Þær þurrka út fyrri upplýsingar á sama formi', 'Þær geyma allt saman', 'Ekkert gerist'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað þarf að gerast til að upplýsingar færist úr skynminni í skammtímaminni?',
        options: ['Við verum þeim athygli', 'Við sofum', 'Við gleymum þeim', 'Við lærum þær utanað'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað er töfratalan fyrir skammtímaminni?',
        options: ['5+/-2', '7+/-2', '9+/-2', '10+/-2'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hversu lengi varir skammtímaminni?',
        options: ['Nokkrar sekúndur', 'Nokkrar mínútur', 'Nokkrar klukkustundir', 'Nokkra daga'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað er skammtímaminni stundum kallað?',
        options: ['Geymsluminni', 'Vinnsluminni', 'Dulvitað minni', 'Skilningsminni'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Á hvaða formi er skráning að miklu leyti í skammtímaminni?',
        options: ['Sjónræn', 'Hljóðræn', 'Bragðræn', 'Snertræn'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað getum við gert til að halda upplýsingum lengur í skammtímaminni?',
        options: ['Sofa vel', 'Endurtaka þær', 'Gleyma þeim', 'Skrifa þær niður'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað gerist ef við höfum of mörg atriði í skammtímaminni?',
        options: ['Við munum allt fullkomlega', 'Minnið okkar krassar', 'Ekkert gerist', 'Þau færast sjálfkrafa í langtímaminni'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er lykilatriðið í skammtímaminni?',
        options: ['Tíminn', 'Fjöldi atriða', 'Aldur', 'Greind'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er dæmi um notkun skammtímaminnisins?',
        options: ['Að muna nafnið þitt', 'Að muna símanúmer í nokkrar sekúndur', 'Að muna barnæsku þína', 'Að muna fæðingardag þinn'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað festist best í langtímaminni?',
        options: ['Óskýrar upplýsingar', 'Upplýsingar með merkingunni og skilningi', 'Upplýsingar sem við heyrum einu sinni', 'Tilviljunarkennd atriði'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er mikilvægt fyrir skráningu í langtímaminni?',
        options: ['Merking, mikilvægi og skilningur', 'Tími og rými', 'Hraði og kraft', 'Þyngd og hæð'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað gerist ef skilningur fylgir ekki með í langtímaminni?',
        options: ['Auðveldara er að endurheimta', 'Erfitt er að endurheimta minningar', 'Ekkert gerist', 'Minnið styrkist'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er langtímaminni líkt við í tölvuheiminum?',
        options: ['Vinnsluminni', 'Skjákortið', 'Harði diskurinn', 'Örgjörvinn'],
        correct: 2
    },
    {
        category: 'minni',
        question: 'Hvað þurfa upplýsingar að hafa til að færast í langtímaminni?',
        options: ['Vera vandlega skráðar með skilningi', 'Vera skráðar hratt', 'Vera skráðar áreynslulaust', 'Vera skráðar einhvern tíma'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvers vegna getur verið erfitt að segja frá efni með eigin orðum á prófi?',
        options: ['Ef skilningur fylgdi ekki', 'Ef maður lærði of mikið', 'Ef maður mætir of snemma á próf', 'Ef maður var of slappur'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hverjar eru þrjár tegundir langtímaminnisins?',
        options: ['Merkingarminni, persónulegt minni, aðgerðaminni', 'Skynminni, vinnsluminni, geymsluminni', 'Sjónminni, hljóðminni, snertminni', 'Stuttminni, miðlungs minni, langminni'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað er afturvirk hömlun?',
        options: ['Truflun á skráningu á nýju efni', 'Truflun á upprifjun á því sem við kunnum', 'Að gleyma öllu', 'Að muna allt'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er framvirk hömlun?',
        options: ['Truflun á upprifjun', 'Truflun á skráningu á nýju efni', 'Að bæta minnið', 'Að hressa minnið'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er dæmi um afturvirka hömlun?',
        options: ['Að fara gömlu leiðina í skólann', 'Tungubroddsfyrirbrigðið', 'Að læra nýtt tungumál', 'Að æfa minnið'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er dæmi um framvirka hömlun?',
        options: ['Að gleyma á prófi', 'Að fara óvart gömlu leiðina í skólann', 'Að muna barnæskuna', 'Að læra vel'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hver er ýkt dæmi um framvirka hömlun?',
        options: ['Að vera þreyttur', 'Heilaskaði þar sem fólk getur ekki skráð nýjar upplýsingar', 'Að gleyma nafninu á einhverjum', 'Að sofa illa'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað veldur gleymsku í skynminni?',
        options: ['Tími (¼-3 sekúndur) og skortur á athygli', 'Aðeins tími', 'Aðeins rými', 'Aldur'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað veldur gleymsku í skammtímaminni?',
        options: ['Tími og rými (7+/-2 atriði)', 'Aðeins tími', 'Aðeins rými', 'Endurheimt'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað segja sumir um gleymsku í langtímaminni?',
        options: ['Allt hverfur fyrir fullt og allt', 'Ekkert hverfi, það dofni bara', 'Gleymska er ómöguleg í LTM', 'Langtímaminni er fullkomið'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað getur valdið gleymsku í langtímaminni?',
        options: ['Skortur á vísbendingum eða slæm umskráning', 'Að læra of vel', 'Að æfa of mikið', 'Að hvíla sig of lengi'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hversu margar minnisaðferðir eru nefndar í bókinni?',
        options: ['3', '4', '5', '6'],
        correct: 3
    },
    {
        category: 'minni',
        question: 'Hvað segja rannsóknir um minnið?',
        options: ['Bara sumir geta lært að bæta minnið', 'Allir geta lært að bæta minnið með ákveðnum aðferðum', 'Minnið er óbreytt', 'Minnið versnar með tímanum'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er fyrsta minnisaðferðin?',
        options: ['Endurtaka allt', 'Reyndu að finna leið til að vekja áhuga þinn á efninu', 'Læra allt utanað', 'Gleyma og byrja upp á nýtt'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvers vegna er gott að tengja námsefni við áhugamál?',
        options: ['Það er léttara', 'Við munum frekar það sem okkur þykir skemmtilegt', 'Það er hraðvirkara', 'Það er óþarfi'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er dæmi um að nota áhugamál í námi?',
        options: ['Læra atferlisfræði út frá þjálfun hunda', 'Hætta að læra', 'Lesa bara einu sinni', 'Gleyma öllu'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað er önnur minnisaðferðin?',
        options: ['Þjálfa eins og hvern annan vöðva', 'Læra allt beint úr bók', 'Aðeins hlusta í tímum', 'Gleyma að endurtaka'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað er þriðja minnisaðferðin?',
        options: ['Læra allt upp úr sér', 'Reyna að tengja við persónulega reynslu', 'Einblína ekki á námið', 'Læra bara fyrir próf'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er fjórða minnisaðferðin?',
        options: ['Gleyma öllu', 'Að nota sér þekkingu á langtímaminninu til að æfa eigið minni', 'Læra allt einu sinni', 'Lesa aldrei aftur'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvernig getum við notað ártöl í minnisaðferðum?',
        options: ['Hunsa þau', 'Tengja við ártöl sem við þekkjum', 'Læra þau í stafrófsröð', 'Gleyma þeim'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvernig getur pin-númer verið auðvelt að muna?',
        options: ['Ef það myndar munstur eða er sama ártal og mamma fæddist', 'Ef það er langt', 'Ef það er flókið', 'Ef það er handahófskennt'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvernig getum við munað ný nöfn?',
        options: ['Hunsa þau', 'Rifja upp hvort þú þekkir einhvern annan með sama nafni og tengja við útlit', 'Læra þau utanað í stafrófsröð', 'Skrifa þau bara niður'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvernig getum við munað muninn á viðbragðsskilyrðingu og virkri skilyrðingu?',
        options: ['Með því að skoða orðhlutana - viðbragðs er eitthvað viðbragð eins og að slefa', 'Læra bæði eins', 'Gleyma báðum', 'Rugla þeim saman'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað er fimmta minnisaðferðin?',
        options: ['Að nota bara eitt skynfæri', 'Tengdu við það sem þú veist fyrir og ræða við aðra', 'Læra allt í huganum', 'Einbeita sér ekki að náminu'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvers vegna er gott að nota mismunandi skynjunarfæri?',
        options: ['Það er óþarft', 'Við erum að tengja upplýsingarnar við fleiri upplýsingar', 'Það er of flókið', 'Það þreytir of mikið'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvers vegna er gott að tengja hugtök við raunverulega lífið?',
        options: ['Það er léttara að muna', 'Við eigum auðveldara með að læra þau', 'Það er skemmtilegra', 'Allt að ofan'],
        correct: 3
    },
    {
        category: 'minni',
        question: 'Hvað er sjötta minnisaðferðin?',
        options: ['Nota ímyndunaraflið', 'Læra allt í beinni línu', 'Einblína ekki á námið', 'Gleyma náminu'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvernig getum við notað ímyndunaraflið?',
        options: ['Búa til myndir, setningar eða eitthvað fáránlegt til að muna', 'Einblína bara á texta', 'Lesa einungis', 'Hlusta einungis'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað er staðaraðferðin?',
        options: ['Aðferð til að gleyma', 'Method of loci - minnisaðferð', 'Aðferð til að læra stærðfræði', 'Aðferð til að sofa'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hentar sama minnisaðferð öllum?',
        options: ['Já, alltaf', 'Nei, hver þarf að finna sína leið', 'Já, en bara eldri', 'Nei, bara ungu hentar að læra'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er gott að gera þegar þú lærir hugtök úr bók?',
        options: ['Læra þau upp úr bók', 'Skoða orðhlutana og skilja hvað þeir þýða', 'Læra þau í stafrófsröð', 'Gleyma þeim'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er endurheimt?',
        options: ['Að gleyma minningum', 'Að sækja minningar úr langtímaminni', 'Að læra nýtt efni', 'Að sofa'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað fylgir með í minnisskráningu?',
        options: ['Bara textinn', 'Lykt, tilfinning, mynd, hljóð, orð', 'Bara lykt', 'Bara tilfinningar'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað geta atriði sem skráðust með minningunum gert?',
        options: ['Ekkert', 'Skyndilega vakið upp minningar', 'Truflað minnið', 'Eytt minningunum'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvað er mikilvægt fyrir endurheimt í langtímaminni?',
        options: ['Að upplýsingarnar séu rétt skráðar og réttir vísbendingar notaðar', 'Að gleyma öllu', 'Að sofa vel', 'Að vera á réttum stað'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvað er mikilvægt til að muna?',
        options: ['Samhengi', 'Tilviljun', 'Lukka', 'Aðeins tími'],
        correct: 0
    },
    {
        category: 'minni',
        question: 'Hvernig er oft hægt að "tala sig í átt að atriðinu"?',
        options: ['Með tilviljun', 'Með samhengi', 'Með giskunum', 'Með þögn'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Eru minningar óbreytanlegar?',
        options: ['Já, alltaf', 'Nei, við getum breytt minningunum okkar', 'Bara stundum', 'Aldrei'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Áttu þú falska minningu?',
        options: ['Nei, aldrei', 'Já, það er nokkuð auðvelt að fá fólk til að breyta minningum sínum', 'Bara ef þú ert veikur', 'Bara í æsku'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hefur minning sem þú átt breytt eftir að hafa talað við einhvern um hana?',
        options: ['Nei, aldrei', 'Já, við eigum flest einhverjar minniháttar falskar minningar', 'Bara stundum', 'Aldrei'],
        correct: 1
    },
    {
        category: 'minni',
        question: 'Hvernig getum við komist í skilning á því hvort minningar séu óbreytanlegar eða getum við breytt þeim?',
        options: ['Með rannsóknum', 'Með giskun', 'Með að hugsa um það', 'Með að tala við vini'],
        correct: 0
    },

    // ÝGI, GÓÐMENNSKA OG SAMKENND (15 spurningar)
    {
        category: 'ygi',
        question: 'Hvað er ýgi?',
        options: ['Hjálpræði', 'Öll hegðun sem ætlað er að meiða aðra andlega eða líkamlega', 'Góðmennska', 'Samkennd'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Á hvaða vegu getur ýgi birst?',
        options: ['Bara líkamlega', 'Líkamlega, andlega, tilfinningalega eða afskiptaleysi', 'Bara andlega', 'Bara tilfinningalega'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvað er góðmennska (altruism)?',
        options: ['Að gera öðrum gott án þess að fá umbun', 'Að hjálpa bara ef þú færð eitthvað til baka', 'Að hugsa um sjálfan sig', 'Að vera ýgur'],
        correct: 0
    },
    {
        category: 'ygi',
        question: 'Hvað er samkennd (compassion)?',
        options: ['Hegðun', 'Tilfinning - ósjálfrátt viðbragð þegar við sjáum þjáningu', 'Aðeins hugsun', 'Aðeins hegðun'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Er samkennd meðfædd?',
        options: ['Nei, aldrei', 'Já, ómálga börn og dýr sýna samkennd', 'Bara hjá fullorðnum', 'Bara hjá börnum'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvernig hefur samkennd áhrif á heilsu?',
        options: ['Versnar heilsu', 'Eflir andlega og líkamlega heilsu', 'Engin áhrif', 'Aðeins andleg áhrif'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvað er munurinn á góðmennsku og samkennd?',
        options: ['Ekkert', 'Góðmennska er hegðun, samkennd er tilfinning', 'Góðmennska er tilfinning, samkennd er hegðun', 'Þau eru það sama'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvenær eru fólk líklegra til að hjálpa öðrum?',
        options: ['Aldrei', 'Þegar kostirnir eru meiri en fórnin', 'Alltaf', 'Aðeins á kvöldin'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvers vegna hjálpar fólk til?',
        options: ['Til að forðast sektarkennd eða bæta sjálfsmyndina', 'Aldrei gott að hjálpa', 'Af leiða', 'Til að vera vinsælt'],
        correct: 0
    },
    {
        category: 'ygi',
        question: 'Hvað segir þróunarkenning um góðmennsku?',
        options: ['Við hjálpum öllum jafnt', 'Við erum líklegri til að hjálpa þeim sem standa okkur nær', 'Við hjálpum aldrei', 'Við hjálpum bara ókunnugum'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvað segja atferlikenningar um góðmennsku?',
        options: ['Hún er meðfædd', 'Hún er lærð hegðun', 'Hún er tilviljunarkennd', 'Hún er ómöguleg'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvað veldur ýgi samkvæmt uppeldiskenningum?',
        options: ['Góð umönnun', 'Uppeldi sem einkennist af hörku og refsingum', 'Mjúkt uppeldi', 'Ekkert'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvernig tengist sjálfsvirðing ýgi?',
        options: ['Engin tengsl', 'Fólk með lágt sjálfsmat er líklegra til að vera ýgt', 'Fólk með hátt sjálfsmat er líklegra til ýgi', 'Sjálfsvirðing skiptir engu máli'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Hvernig getur samkennd og góðmennska lengt líf?',
        options: ['Enginn áhrifum', 'Vinnur gegn streitu og hjálpar að tengjast öðrum', 'Styttir lífið', 'Aðeins hjá ungum'],
        correct: 1
    },
    {
        category: 'ygi',
        question: 'Skiptir það máli af hverju við hjálpum öðrum?',
        options: ['Já, alltaf', 'Það er umræðuefni - er ekki bara gott sama hvaðan það kemur?', 'Nei, aldrei', 'Bara stundum'],
        correct: 1
    },

    // SJÁLFSMYND (15 spurningar)
    {
        category: 'sjalfsmynd',
        question: 'Hvað er sjálfsmynd?',
        options: ['Mat á okkur sjálfum', 'Sú mynd sem við höfum af sjálfum okkur - ekki mat', 'Bara útlit', 'Bara persónuleiki'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Er sjálfsmynd gildishlaðið?',
        options: ['Já, alltaf', 'Nei, hún er bara "hver er ég?"', 'Bara stundum', 'Já, hún er mat'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað er sjálfsálit?',
        options: ['Sú mynd sem við höfum af okkur', 'Eigið mat á okkur sjálfum - "hvers virði er ég?"', 'Bara útlitið', 'Bara hegðunin'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað er munurinn á sjálfsmynd og sjálfsáliti?',
        options: ['Ekkert', 'Sjálfsmynd er "hver er ég?", sjálfsálit er "hvers virði er ég?"', 'Þau eru það sama', 'Sjálfsálit er eldra hugtak'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Eru við bara eitt sjálf eða mörg sjálf?',
        options: ['Bara eitt', 'Við erum margt - sjálfsmynd okkar getur verið ólík í mismunandi aðstæðum', 'Alltaf það sama', 'Við höfum enga sjálfsmynd'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Í hvaða aðstæðum getur sjálfsmynd okkar verið ólík?',
        options: ['Bara heima', 'Heima, með vinum, í skólanum, í vinnunni, með makanum, á æfingu', 'Bara í vinnunni', 'Alltaf eins'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað er sjálfskynjun?',
        options: ['Að horfa í spegil', 'Að velta fyrir sér hver maður er', 'Að hugsa um aðra', 'Að læra'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað hefur áhrif á sjálfsmynd?',
        options: ['Bara genin', 'Menning, umhverfi og aðstæður', 'Bara menning', 'Bara umhverfi'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað er einstaklingshyggja?',
        options: ['Sjálfsmynd aðskilin frá öðru fólki - "Ég er bara ég"', 'Sjálfsmynd bundin fjölskyldunni', 'Sjálfsmynd bundin vinum', 'Engin sjálfsmynd'],
        correct: 0
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað er sameignarhyggja?',
        options: ['Sjálfsmynd aðskilin frá öðrum', 'Sjálfsmynd bundin hópi/fjölskyldu - "Við"', 'Engin sjálfsmynd', 'Bara vestræn sjálfsmynd'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað er raunverulegt sjálf?',
        options: ['Hvernig við viljum vera', 'Hver við teljum okkur raunverulega vera - "Hver er ég akkúrat núna?"', 'Framtíðarsjálf', 'Kjörmynd'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað er fyrirmyndarsjálf?',
        options: ['Hver við erum núna', 'Hvernig við viljum vera - markmið okkar', 'Fortíðarsjálf', 'Raunveruleg mynd'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað einkennir menningarmun í sjálfsmynd?',
        options: ['Engin munur', 'Einstaklingshyggja (ÉG) vs. Sameignarhyggja (VIÐ)', 'Bara aldursmunur', 'Bara kynmunur'],
        correct: 1
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað er menning?',
        options: ['Viðhorf og hugmyndir sem verða fyrir áhrifum af menningarsamfélögum', 'Bara tungumál', 'Bara matur', 'Bara tónlist'],
        correct: 0
    },
    {
        category: 'sjalfsmynd',
        question: 'Hvað hefur áhrif á sjálfsmynd samkvæmt glærunum?',
        options: ['Bara þú sjálfur', 'Aðild að félagslegum hópum, staðalmyndir, fordómar og forréttindi', 'Bara fjölskyldan', 'Bara vinir'],
        correct: 1
    },

    // RANNSÓKNIR (10 spurningar)
    {
        category: 'rannsoknir',
        question: 'Hverjar eru fimm helstu rannsóknaraðferðir í sálfræði?',
        options: ['Tilraunir, vettvangsathuganir, einsögur, kannanir, fylgnirannsóknir', 'Bara tilraunir', 'Bara kannanir', 'Bara viðtöl'],
        correct: 0
    },
    {
        category: 'rannsoknir',
        question: 'Hvað eru eigindlegar rannsóknir?',
        options: ['Töluleg gögn', 'Gögn sem eru ekki á tölulegu formi - texti, viðtöl, myndir', 'Bara tölur', 'Bara tölfræði'],
        correct: 1
    },
    {
        category: 'rannsoknir',
        question: 'Hvað eru megindlegar rannsóknir?',
        options: ['Texti og orð', 'Töluleg gögn og tölfræðileg greining', 'Bara viðtöl', 'Bara myndir'],
        correct: 1
    },
    {
        category: 'rannsoknir',
        question: 'Hvað er tilraunahópur?',
        options: ['Fær ekkert inngrip', 'Fær inngrip eða meðferð', 'Sama og samanburðarhópur', 'Engin hlutverk'],
        correct: 1
    },
    {
        category: 'rannsoknir',
        question: 'Hvað er samanburðarhópur?',
        options: ['Fær inngrip', 'Fær ekkert inngrip, notaður til að bera saman', 'Sama og tilraunahópur', 'Engin hlutverk'],
        correct: 1
    },
    {
        category: 'rannsoknir',
        question: 'Hver er kostur við tilraunir?',
        options: ['Engin stjórn', 'Meiri stjórn, hægt að finna orsakasamband', 'Erfitt að endurgera', 'Engin kostir'],
        correct: 1
    },
    {
        category: 'rannsoknir',
        question: 'Hver er galli við tilraunir?',
        options: ['Of mikil stjórn og óeðlilegar aðstæður', 'Engir gallar', 'Of mörg inngrip', 'Of margir þátttakendur'],
        correct: 0
    },
    {
        category: 'rannsoknir',
        question: 'Hvað er ritrýning?',
        options: ['Að skrifa bók', 'Sérfræðingar fara yfir rannsókn áður en hún er birt', 'Að lesa bækur', 'Að skrifa ritgerð'],
        correct: 1
    },
    {
        category: 'rannsoknir',
        question: 'Hvers vegna eru rannsóknir mikilvægar í sálfræði?',
        options: ['Til að vita um fólk og fylgjast með breytingum', 'Bara til gamans', 'Engin ástæða', 'Bara til að fá starf'],
        correct: 0
    },
    {
        category: 'rannsoknir',
        question: 'Hvað þurfum við að vera þegar við lesum rannsóknarniðurstöður?',
        options: ['Trúgjörn', 'Gagnrýnin - ekki trúa hverju sem er', 'Áhugalaus', 'Þreyttur'],
        correct: 1
    }
];
