import { Routes } from "@/routes";

export const history = {
  title: "Historia",
  description: [
    "Wybierz zakładkę z wykresu lub przejdź do jednej z sekcji poniżej, by zanurzyć się w bogate dzieje naszej przeszłości. Każdy fragment opowieści skrywa bohaterskie czyny i niezłomną wolę walki o wolność.",
    "Dowiesz się tu o losach 5. Pułku Strzelców Konnych, który zapisał się złotymi zgłoskami na kartach historii, poznasz szczegóły Akcji „Burza”, symbolu odwagi i determinacji Armii Krajowej, a także odkryjesz historię członków Obwodu Dębica SZP-ZWZ-AK, walczących z honorem i poświęceniem w czasie największej próby.",
    "Znajdziesz tu także przejście do sekcji mieszczącej bibliografię oraz biogramy bohaterów, gdzie zgłębisz osobiste historie oddanych obrońców ojczyzny o wielkich sercach.",
    "Zapraszamy do podróży w czasie, ożywienia wspomnień i refleksji nad siłą ducha polskiego żołnierza i patrioty.",
  ],
  literature: {
    title: "Literatura",
    content:
      "Chcesz zgłębić wiedzę o Armii Krajowej i jej działalności? Odkryj polecaną literaturę, która przybliża historię największej organizacji podziemnej w okupowanej Europie. Znajdziesz tu książki i wspomnienia, które pozwolą lepiej zrozumieć heroizm i poświęcenie żołnierzy AK. To doskonałe źródło wiedzy dla pasjonatów historii oraz tych, którzy chcą poznać kulisy walk o niepodległość. Poznaj opowieści, które na zawsze zapisały się w dziejach Polski.",
  },
  biograms: {
    title: "Biogramy",
    content:
      "Poznaj sylwetki bohaterów Armii Krajowej – ich życiorysy, daty urodzenia i śmierci, stopnie wojskowe oraz niezwykłe historie walki o wolną Polskę. Biogramy żołnierzy przybliżą Ci losy ludzi, którzy swoją odwagą i determinacją zapisali się na kartach historii. Odkryj, kim byli i jak wyglądała ich droga w szeregach AK. Dowiedz się, jakie wartości ich inspirowały i jak wpływali na losy lokalnej społeczności. Wejdź, by oddać hołd ich pamięci i poznać ich niezwykłe losy.",
  },
} as const;

export const chapters = [
  {
    title: "5. Pułk Strzelców Konnych",
    description:
      "Prześledź historię jednego z najważniejszych oddziałów Armii Krajowej, odtworzonego w czasie Akcji „Burza” na ziemi dębickiej. Poznaj strukturę pułku, życie dowódców i zadania realizowane podczas walk z okupantem. To nie tylko podział organizacji na rejony czy wykaz najważniejszych działań bojowych i dywersyjnych. Przed Tobą opowieść o odwadze, zgraniu, a przede wszystkim o niezłomnym duchu żołnierzy oddanych walce za wolną Polskę. Oto historia jednostki, której nic nie nie wymaże z kart dziejów.",
    image: {
      path: "/images/history/regiment/regiment.webp",
      alt: "Defilada 5. Pułku Strzelców Konnych z okazji święta pułku w Dębicy. Pluton ckm na jukach, 9 czerwca 1938 r.",
    },
    route: Routes.REGIMENT,
  },
  {
    title: "Obwód Dębica SZP-ZWZ-AK",
    description:
      "Lokalne struktury konspiracyjne odegrały kluczową rolę w walce z okupantem na ziemi dębickiej. Poznaj rozwój organizacji od początków Służby Zwycięstwu Polski, przez Związek Walki Zbrojnej, aż po przekształcenie jej w Armię Krajową. Sprawdź, jak wyglądała działalność wywiadowcza, dywersyjna i szkoleniowa, a także jak Obwód przygotowywał się do operacji „Burza”. Żołnierze AK Dębica, mimo ogromnego ryzyka, stawili opór okupantom.",
    image: {
      path: "/images/history/debica/school.webp",
      alt: "Szkoła w Gumniskach - siedziba komendy Obwodu ZWZ-AK Dębica.",
    },
    route: Routes.DEBICA_DISTRICT,
  },
  {
    title: "Akcja „Burza”",
    description:
      "To opowieść o największej mobilizacji Armii Krajowej podczas II wojny światowej. Przenieś się w czasy dramatycznych walk w rejonie Dębicy, poznaj bohaterów w nierównej walce z okupantem i dowiedz się, jak przebiegała bitwa na polanie Kałużówka. Zobacz, jak żołnierze AK nie tylko walczyli z wrogiem, ale także chronili ludność cywilną przed represjami i pacyfikacją. Przed Tobą świadectwo niezwykłego patriotyzmu, odwagi i poświęcenia.",
    image: {
      path: "/images/history/burza/funeral.webp",
      alt: "Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r.",
    },
    route: Routes.OPERATION,
  },
] as const;

export const genesisSection = {
  genesisTitle: "Geneza powstania pułku",
  content: [
    "Historia 5. Pułku Strzelców Konnych sięga okresu wojen napoleońskich, kiedy to Franciszek Garczyński sformował go w Kościanie na przełomie 1806 i 1807 r. Formacji nadano obecną nazwę w czerwcu 1807 r. Dowódcą mianowano pułkownika Kazimierza Turno. Po wycieńczającej wojnie z Austrią (1809 r.) żołnierze zostali zdziesiątkowani w wielkiej wyprawie Napoleona na Moskwę w 1812 r. Jednym z ocalałych był Aleksander Fredro. O przeżyciach tamtych dni opowiedział na kartach pamiętnika Trzy po trzy.",
    "Pułk sformowano ponownie w okresie powstania listopadowego. 19 stycznia 1930 r. Pułk Strzelców Gwardii przemianowano na 5. Pułk Strzelców Konnych. Dowódcą został pułkownik Benedykt Zielonka. Dowodził formacją m.in. w bitwach pod Wawrem, Grochowem, Nurem, Ostrołęką i Raciążem. Po klęsce powstania część żołnierzy opuściła tereny Królestwa Polskiego, szukając schronienia w Prusach. Do Kongresówki powrócili dopiero po uzyskaniu amnestii od cara Mikołaja I.",
    "Trzecie z kolei odtworzenie jednostki przypadło na lata 1919-1921. Wówczas pułk formowano z mniejszych oddziałów (szwadronów i dywizjonów), przejmując ich historie i tradycje. We wrześniu 1919 r. 3. Pułk Dragonów przemianowano na 3. Pułk Strzelców Konnych, zaś ten, rozkazem z 6 października 1920 r., otrzymał nazwę: 5. Pułk Strzelców Konnych. ",
    "Zmiana numeracji wynika z faktu, że formacja podlegała administracyjnie pod krakowski Okręg Korpusu nr V, choć stacjonowała w Tarnowie. Później pułk włączono do V Brygady Jazdy, która zmieniła nazwę kolejno na 5. Samodzielną Brygadę Kawalerii (1924 r.) i Krakowską Brygadę Kawalerii (1937 r.).",
  ],
};

export const commandersSection = {
  commandersTitle: "Dowódcy Pułku w okresie międzywojennym",
  people: [
    {
      name: "ppłk Aleksander Ehrbar",
      date: "(19.06.1919 - 22.02.1924)",
      link: "https://pl.wikipedia.org/wiki/Aleksander_Ehrbar",
    },
    {
      name: "płk Adam Rozwadowski",
      date: "(22.02.1924 - 22.02.1927)",
      link: "https://pl.wikipedia.org/wiki/Adam_Rozwadowski",
    },
    {
      name: "ppłk Jan Kanty Olszewski",
      date: "(22.02.1927-28.01.1928)",
      link: "https://pl.wikipedia.org/wiki/Jan_Kanty_Olszewski",
    },
    {
      name: "płk dypl. Juliusz Kleeberg",
      date: "(28.01.1928 - 31.01.1930)",
      link: "https://pl.wikipedia.org/wiki/Juliusz_Kleeberg",
    },
    {
      name: "ppłk Ignacy Kowalczewski",
      date: "(31.01.1930 - 04.1938)",
      link: "https://pl.wikipedia.org/wiki/Ignacy_Kowalczewski",
    },
    {
      name: "płk Kazimierz Kosiarski",
      date: "(04.1938 - 20.09.1939)",
      link: "https://pl.wikipedia.org/wiki/5_Pu%C5%82k_Strzelc%C3%B3w_Konnych_(II_RP)#Kadra_pu%C5%82ku",
    },
  ],
} as const;

export const regimentSection = {
  regimentTitle: "5. Pułk Strzelców Konnych w Dębicy",
  content:
    "15 grudnia 1934 r. Tarnowianie pożegnali uroczyście 5. Pułk Strzelców Konnych, ponieważ za główną siedzibę formacji obrano koszary przy ulicy Kościuszki w Dębicy. Powtarzano nawet kawaleryjskie żurawiejki, m.in. „Brakło rowów w okolicy, przenieśli ich do Dębicy” lub „Tak się błąkał w okolicy, aż go wzięli do Dębicy”. Jak się okazało, Dębica to ostatnie miejsce postoju pułku. Stąd zgrupowanie wyruszyło na wojnę obronną we wrześniu 1939 r.",
} as const;

export const cracowBrigadeSection = {
  cracowBrigadeTitle: "Teren obrony i struktura Krakowskiej Brygady Kawalerii",
  content: [
    "Zgodnie z planami dowództwa Armii „Kraków” podczas narad i ćwiczeń sztabowych wiosną 1938 r. Krakowska Brygada Kawalerii (w składzie Armii „Kraków” gen. Antoniego Szyllinga) miała bronić rejonu Kalety – Koszęcin oraz Woźniki – Ligota Woźnicka. Był to teren o długości około 15 km między Tarnowskimi Górami a Częstochową. ",
    "We wrześniu 1939 r. w skład Krakowskiej Brygady Kawalerii wchodził również: 3. Pułk Ułanów Śląskich z Tarnowskich Gór, 8. Pułk Ułanów Księcia Poniatowskiego z Krakowa, 3. Dywizjon Artylerii Konnej z Oświęcimia, a także własne jednostki wspierające (szwadron kolarzy, pionierów i łączności) oraz jednostki przydzielone: Batalion Obrony Narodowej „Lubliniec” i 51. Dywizjon Pancerny.",
    "W 1939 r. nie zdołano zorganizować tzw. letniej koncentracji całej brygady, dlatego poszczególne jednostki samodzielnie przeprowadziły ćwiczenia terenowe. Przez cały miesiąc, począwszy od 15 lipca, pułk prowadził manewry ćwiczebne niedaleko Rzemienia i Tuszymy, a następnie od 15 sierpnia manewry ruchome w promieniu 20 km od Dębicy.",
    "Tu 24 sierpnia 1939 r.  skoncentrowano pułk, a 27 sierpnia formacja wyruszyła pociągiem do Zawiercia. Po dotarciu na miejsce dębickich strzelców przywitali licznie zgromadzeni mieszkańcy. Żołnierze ustawieni w szyku bojowym ruszyli, śpiewając Wojenko, wojenko. Miejscowa ludność ze łzami w oczach żegnała strzelców zmierzających przeciw nazistowskiemu najeźdźcy. Panowała atmosfera wzruszenia i nadziei.",
  ],
} as const;

export const separationSection = {
  separationTitle: "Podział Pułku na dwa dywizjony",
  content:
    "Z Zawiercia pułk wyruszył w rejony Ogrodzieńca, a następnie do Podzamcza i docelowo do Woźnik. Tam został podzielony na dwa dywizjony, sprzecznie z wcześniejszymi ustaleniami, według których dębicki związek taktyczny całością sił będzie bronił rejonu Woźnik. Nowa dyrektywa nakazywała podział pułku na dwa dywizjony. Pierwszy pozostał na miejscu, a drugi skierowano do Rudnika Małego. Żołnierze musieli odtąd w osłabienu realizować działania wzdłuż pozycji obronnej wokół Woźnik, gdzie spodziewano się głównego natarcia. Dowódca Strzelców Konnych, płk Kazimierz Kosiarski zameldował o tym gen. Zygmuntowi Piaseckiemu, zwierzchnikowi Krakowskiej Brygady Kawalerii. Rzeczywiście, niemieccy planiści pominęli w koncepcji uderzenia trudno dostępny Rudnik Mały broniony przez 1. i 2. szwadron mjr. Franciszka Rekuckiego. Wróg uderzył na Woźniki.",
} as const;

export const woznikiSection = {
  woznikiTitle: "Bitwa pod Woźnikami i Ligotą Woźnicką - wrzesień 1939",
  content: [
    "1 września o godzinie 4:50 sześć hitlerowskich dywizji przekroczyło polsko-niemiecką granicę i uderzyło równocześnie na 7. Dywizję Piechoty i Krakowską Brygadę Kawalerii. Batalion „Lubliniec” bronił się w okolicach Koszęcina trzema kompaniami. Żołnierze pod wodzą mjr. Franciszka Żaka stawili nazistom niezwykle zacięty opór. Niemniej wrogie oddziały okrążyły batalion, który, znalazłszy się w bardzo trudnym położeniu, musiał opuścić swoje pozycje w godzinach południowych.",
    "Odwrót wysuniętych jednostek doprowadził do pogłębienia dystansu między Krakowską Brygadą Kawalerii i 7. Dywizją Piechoty a Grupą Operacyjną „Śląsk”. Formacje rozproszyły się. Rankiem 2 września pancerno-motorowe jednostki nieprzyjaciela uderzyły jednocześnie na główną linię obrony w pobliżu Woźnik (5. Pułk Strzelców Konnych i 3. Pułk Ułanów) i rejon Ligoty Woźnickiej (8. Pułk Ułanów).",
    "Po ponad pięciogodzinnej walce dwie niemieckie dywizje (2. i 3. Dywizja Lekka) przerwały linię obrony Woźniki – Ligota, przełamawszy tym samym front na odcinku chronionym przez Armię „Kraków”.",
    "2 września szwadrony 5. Pułku Strzelców Konnych trwały osamotnione. Najpierw odepchnięto krakowski pułk ułanów, potem, po kilku kontratakach, wróg wyparł ułanów z Tarnowskich Gór. Pozycji wokół Woźnik nie zdołano utrzymać, mimo wprowadzenia do walk sił odwodowych (3. Dywizjonu Aryterii Konnej i szwadronów 3. Pułku Ułanów Śląskich).",
    "Strzelcy 5. Pułku heroicznie bronili Woźnik, odpierali wielokrotnie zajadłe natarcia III Rzeszy. Pomimo beznadziejnego położenia, mniejszych liczebnie sił i mniejszej ilości sprzętu, nie brakowało ofiarnych prób powstrzymania nazistów. Strzelec o nazwisku Rosa unieruchomił trzy niemieckie czołgi, co w tych warunkach było brawurowym i bohaterskim wyczynem.",
    "Około godziny 11:00 ostatni pluton 5. Pułku opuścił rejon Woźnik. Wieczorem I i II dywizjon połączyły się. Wskutek niekorzystnej sytuacji w nocy z 2 na 3 września dowództwo skierowało brygadę w pobliże Pradła. Tu następnego dnia pułk z powodzeniem odpierał natarcie od wzgórza Góry Berkowej, utrzymując pozycje do godzin popołudniowych.",
    "Stąd trafił pod Rokitno, gdzie ubezpieczał Krakowską Brygadę Kawalerii, której celem było odbicie Szczekocin. Niestety żołnierzom gen. Zygmunta Piaseckiego zabrakło współdziałania 7. Dywizji Piechoty. Po całym dniu ciężkich walk wielokrotnie liczniejsze siły wroga wyparły brygadę na wschodni brzeg Pilicy.",
    "4 września 5. Pułk Strzelców Konnych dotarł do Sędziszowa, gdzie otrzymał zadanie obrony miasteczka i osłony całego zgrupowania brygady. Tego dnia nieprzyjaciel nie wykazywał większej aktywności na lądzie, co sprzyjało dębickim strzelcom w odpieraniu ataków. Wieczorem powrócił oficer łącznikowy wysłany uprzednio do dowództwa armii z meldunkiem o położeniu oddziałów. Przekazał nowe rozkazy. Krakowska Brygada Kawalerii nie mogła dopuścić nieprzyjaciela do przekroczenia Nidy na kierunku Sędziszów – Busko. Oprócz tego za wszelką cenę musiała utrzymać Pińczów.",
    "5 września wczesnym świtem pułk wyruszył z Mstyczowa i przed południem dotarł pod Pińczów. Podzielony na szwadrony, bronił miasteczka na kierunku północnym i zachodnim do późnych godzin wieczornych. Powstrzymał nieprzyjaciela w rejonie Brześcia.",
    "Pod silnym naporem wojsk III Rzeszy Krakowska Brygada Kawalerii otrzymała rozkaz wycofania się w rejon Bogucic, między Pińczowem a Buskiem. Po trudnym, całonocnym marszu formacja dotarła na miejsce wczesnym świtem. 6 września pułk otrzymał zadanie dozorowania drogi z Chmielnika do Buska. Około południa jednostki rozpoznawcze nieprzyjaciela podeszły pod Busko od strony północnej, ale strzelcy 5. Pułku odparli szturm. Wskutek niekorzystnego położenia armii „Południe”, brygada musiała zejść z placu boju po raz kolejny, tym razem w kierunku Nowego Korczyna. Pułk stanął nieopodal Paska Wielkiego. Dębickich strzelców skierowano do osłony reorganizującej się Grupy Operacyjnej „Jagmin” („Śląsk”) pod dowództwem gen. Jana Jagmina-Sadowskiego.",
  ],
} as const;

export const escapeSection = {
  escapeTitle: "Obrona Baranowa Sandomierskiego i ewakuacja Krakowskiej BK",
  content: [
    "7 września oddziały Armii „Kraków” nie dotarły jednak do Nowego Korczyna. Mimo to dowództwo nie zmieniło rozkazów: utrzymać dotychczasowe pozycje, osłaniać Korczyn i zgrupowania Armii „Kraków” od północy.",
    "Nocą z 7 na 8 września pułk zluzowano, zwolniwszy z dotychczasowego zadania. W godzinach popołudniowych strzelcy wyruszyli wzdłuż prawego brzegu Wisły ku Szczucinowi. Dotarli tam 8 września około 20:00. Formacja przebywała tu bardzo krótko. W nocy płk Kazimierz Kosiarski otrzymał rozkaz kontynuowania marszu wzdłuż Wisły i przechwycenia mostu w Baranowie Sandomierskim.  Pomimo wyczerpującego marszu, nie udało się wypełnić rozkazu. Tuż przed przybyciem oddziałów krakowskiej brygady saperzy z grupy „Sandomierz”, na rozkaz dowódcy, wysadzili most, by udeareminić atak niemieckich sił pancerno-motorowych na Baranów. Niestety wskutek braku łączności między jednostkami grupa „Sandomierz” nie była poinformowana o działaniach pułku.",
    "Po osiągnięciu rejonu Baranowa, formacja otrzymała kolejny rozkaz – osłaniać odwrót i przeprawę oddziałów Armii „Kraków” przez  Wisłę. Tym razem 5. Pułk,  wraz z baterią dywizjonu artylerii konnej, zabezpieczał brzeg rzeki w okolicach zniszczonego mostu, stał na jego straży i zapewniał ochronę od południa (z kierunku Mielca).",
    "W tym czasie do pułku dołączyły oddziały uzupełniające z Ośrodka Zapasowego Krakowskiej Brygady Kawalerii. Ośrodek, po ogłoszonej przez prezydenta Mościckiego powszechnej mobilizacji, zorganizowano w Dębicy (pod dowództwem mjr. Jana Sroczyńskiego). Żołnierze rezerwiści przybywali tam po otrzymaniu przydziału służbowego do Krakowskiej Brygady Kawalerii. W Dębicy zaimprowizowano także izbę chorych, gdzie opatrywano, zarówno żołnierzy, jak i cywili (głównie mieszkańców Dębicy i okolic) rannych po nalotach Luftwaffe.",
    "7 września pozostałe oddziały Ośrodka Zapasowego ewakuowano z Dębicy pod Brodów. Tu znalazły schronienie rodziny walczących żołnierzy. Wywieziono archiwum dokumentacyjne oraz sztandary 5. Pułku Strzelców Konnych i 3. Pułku Ułanów. Po wkroczeniu Sowietów, mjr Tadeusz Plackowski usiłował przedostać się ze sztandarami do Rumunii. Niestety przepadł bez wieści. Prawdopodobnie dotarł do Uhrynowa na Podolu, gdzie mógł zostać zamordowany przez bandy ukraińskich nacjonalistów. Losy sztandaru pułkowego pozostają nieznane, ale istnieją dwie hipotezy. Według pierwszej mjr Plackowski ukrył albo spalił sztandar zanim symbol dostał się w ręce oprawców. Druga zaś sugerowałaby, że sztandar wpadł w ręce ukraińskie i spoczął w kijowskich muzeach po zakończeniu wojny.",
  ],
} as const;

export const regroupSection = {
  regroupTitle: "Uzupełnienia i przegrupowanie Krakowskiej Brygady Kawalerii",
  content: [
    "Jak wspomniano, w okolicy Baranowa Sandomierskiego do maszerujących oddziałów Krakowskiej Brygady Kawalerii dołączyli żołnierze Ośrodka Zapasowego. Z Dębicy wymaszerowano prawdopodobnie w kilku etapach, a podział jednostek nastąpił 10 września jeszcze pod Baranowem. Formację wzmocnił szwadron marszowy rezerwistów. Nadliczbowych żołnierzy 5. Pułku Strzelców Konnych przyprowadził Kazimierz Rouppert, a dowodził nimi por. Zygmunt Śmiałowski.",
    "Przybycie dodatkowych jednostek zapewne podniosło morale żołnierzy. Pozwoliło też, choć częściowo, wyrównać straty poniesione w wyniku półtoratygodniowych walk. Brygada „zgubiła” trzy szwadrony 8. Pułku Ułanów i cały 51. Dywizjon Pancerny jeszcze podczas działań pod Szczekocinem. W niedzielę 10 września 5. Pułk oraz pozostałe oddziały Krakowskiej Brygady Kawalerii nadal realizowały zadania na pozycjach zorganizowanych dzień wcześniej. Koło południa do Suchorzewa przybył sztab Armii „Kraków” z gen. Antonim Szyllingiem na czele. Generał nie ukrywał pretensji do dowódcy Brygady, którego obarczał winą za utratę przeprawy na Wiśle w Baranowie i zaniechanie odbudowy mostu. Skrytykował też brak meldunku o bieżącej sytuacji.",
    "Wieczorem 10 września Brygada otrzymała rozkaz: po zluzowaniu przez oddziały piechoty przejść nazajutrz do miejscowości Lipa. Na prośbę gen. Jana Jagmina-Sadowskiego, gen. Zygmunt Piasecki opóźnił wymarsz,  zapewniwszy ubezpieczenie przegrupowującej się Grupy Operacyjnej „Jagmin” aż do 12 września.",
    "Nocą z 12 na 13 września Pułk przekroczył San i wczesnym rankiem dotarł do miejscowości Lipa. Cały dzień planowano odpoczynek, a także reorganizację i przywrócenie wartości bojowej oddziałów.",
    "W godzinach wieczornych formacja ruszyła dalej do Janowa Lubelskiego. Kolejny nocny marsz okazał się bardzo wyczerpujący, jednak jeszcze przed świtem pułk rozlokował się w rejonie Kawęczyna (koło Janowa) i Frampolu. Po całodniowym odpoczynku Strzelcy „Piątki” nabrali sił  i motywacji do dalszej walki. Po zmroku znów wyruszyli w drogę, by rankiem 15 września dotrzeć do Biłgoraja.",
    "Po południu dywizjon mjr. Franciszka Rekuckiego odparł atak sił rozpoznawczych nieprzyjaciela od północy. Niestety kilka godzin później, Luftwaffe zbombardowało szwadrony „Piątki” w lesie pod Korczową. 5. Pułk poniósł znaczne straty.",
    "Tymczasem sytuacja na froncie wymagała od zdziesiątkowanych Strzelców wytrwałej walki. Oddziały Krakowskiej Brygady Kawalerii, przeprowadzające atak na Tarnogród, potrzebowały wsparcia. Pomimo sukcesów w początkowej fazie, operacja nie przyniosła spodziewanego rezultatu. Brygadę wycofano z powrotem za Tanew, a Pułk ponownie obsadził Biłgoraj.",
  ],
} as const;

export const bilgorajSection = {
  bilgorajTitle: "Bitwa o Biłgoraj i walki w Rejonie Tarnawatki",
  content: [
    "16 września nieprzyjaciel przeprowadziwszy rekonesans, uderzył od północy na Biłgoraj. Waleczni strzelcy 5. Pułku stawiali nazistowskim siłom pancerno-motorowym silny opór. W walce wspomagał ich szwadron kolarzy Krakowskiej Brygady Kawalerii pod dowództwem rtm. Antoniego Starnawskiego. Naziści zdołali ostatecznie przełamać obronę. Hitlerowskie dowództwo podjęło jednak decyzję o odwrocie, gdy od północy niespodziewanie nadciągnęły oddziały Grupy Operacyjnej „Jagmin”.",
    "16 września połączeno Armię „Kraków” gen. Antoniego Szyllinga (w tym 5. Pułk)  z Armią „Lublin” gen. Tadeusza Piskora. Dowództwo nad całością sił nowo powstałej Armii „Południe” objął gen. Piskor. ",
    "Do ostatnich walk złączonych armii doszło pod Tomaszowem Lubelskim. Celem działań było przebicie się wszystkich sił do granicy z Węgrami. Operację miał rozpocząć atak Warszawskiej Brygady Pancerno-Motorowej na Tomaszów Lubelski, którym dowodził płk Stefan Rowecki. Krakowska Brygada Kawalerii otrzymała zadanie osłony formacji od północy. Jednak odwlekanie ataku dało najeźdźcy czas na otoczenie polskich oddziałów.",
    "19 września w potyczce pod Rogóźnem (nieopodal Tomaszowa) 3. Pułk Ułanów Śląskich stracił ponad 70% żołnierzy. W rezultacie 5. Pułk Strzelców Konnych pozostał jedynym pułkiem zdolnym do prowadzenia dalszych działań. Straty dramatycznie pogorszyły sytuację Krakowskiej Brygady Kawalerii. ",
    "Po otrzymaniu informacji o wykrwawieniu się 3. Pułku Ułanów, dowódca 5. Pułku Strzelców Konnych, płk Kosiarski uznał, że Strzelcy samodzielnie nie zdołają opanować rejonu Tarnawatki. Podjął więc decyzję o opóźnieniu hitlerowców poprzez atak na ariergardę wroga (wzdłuż szosy Zamość – Tomaszów ze wzgórza nad Tarnawatką). Zadanie powierzono 2. Szwadronowi 5. Pułku Strzelców Konnych pod dowództwem rtm. Jarosława Chodania. Oddział kilkakrotnie uderzał na poruszające się po drodze oddziały nieprzyjaciela. Podczas jednego ze śmiałych ataków wzięto nawet kilku jeńców. Jednak gdy z rejonu Zamościa nadjechała większa kolumna nazistowskich wojsk, oddział rtm. Chodania zepchnięto z zajętych pozycji. Silny ogień wrogiej artylerii zatrzymał 3. Szwadron Pułku pod dowódcem rtm. Wojciecha Łopuskiego, który ruszył na pomoc.",
    "W tym czasie oddziały 2. Szwadronu odepchnięto ze wzgórza. Zmasowane uderzenie nieprzyjaciela spodowowało duże straty: wielu żołnierzy zginęło, wielu zostało rannych. Poległ też sam rtm. Jarosław Chodań. Ciężko raniony w pachwinę, zmarł od upływu krwi w Tarnawatce nieopodal mostku nad Wieprzem.",
    "Kolejny odddział skierowany do wsparcia 2. Szwadronu – 4. Szwadron rtm. Bronisława Piotrowskiego – również poniósł ogromne straty wskutek silnego ostrzału artylerii. Między innymi poległ ppor. Piotr Baran, dowódca 2. plutonu 4. Szwadronu 5. Pułku Strzelców Konnych. Ze względu na brak profesjonalnej pomocy chirurgicznej, poważnie ranny w bok, podporucznik nie przeżył. Zanim jednak został ranny, 2. pluton bohatersko odparł niemieckie natarcie od strony zabudowań położonych nad stawami.",
    "Przed zmrokiem 1. Szwadron 5. Pułku Strzelców Konnych – skierowany do osłony odcinka północnego – udaremnił nazistom rozpoznanie w rejonie Pańkowa. Skutecznie odrzucono nieprzyjaciela na drugi brzeg Wieprza. Po walce, pod osłoną nocy, Pułk wycofał się z rejonu Pańków – Tarnawatka.",
  ],
} as const;

export const finalClashSection = {
  finalClashTitle: "Końcowe Starcie i Kapitulacja Armii „Południe”",
  content: [
    "Rankiem 20 września płk Kazimierz Kosiarski i pozostali dowódcy jednostek Krakowskiej Brygady Kawalerii zebrali się na ostatnią naradę w sztabie. Zapadła decyzja o kapitulacji Armii „Południe”. Pod niebecność dowódcy, do obozu 5. Pułku Strzelców Konnych we wsi Ulów zbliżył się nieprzyjaciel. Błyskawicznie zorganizowany oddział konny Pułku, dowodzony przez rtm. Antoniego Dębskiego i por. Tadeusza Gawrzyckiego, zatrzymał wroga. To ostatnia walka pułku w wojnie obronnej 1939 roku, a jednocześnie ostatnia potyczka oddziałów Armii „Południe” podczas kampanii wrześniowej.",
    "Pułkownik Kosiarski informował żołnierzy o kapitulacji ze łzami w oczach. Zaapelował, by usiłowali przedostać się na zachód każdy samodzielnie. Marsz ku wschodowi, po ataku Sowietów, jego zdaniem był bezzasadny. Dzięki tej trafnej ocenie sytuacji, niewielu strzelców 5. Pułku odnaleziono na tzw. liście katyńskiej.",
    "Większość żołnierzy, którzy uniknęli niewoli, powróciła na zachód. Wielu z nich rozpoczęło działalność w strukturach powstającego Polskiego Państwa Podziemnego. Dowództwo zaś trafiło do hitlerowskiej niewoli, skąd powrócili dopiero po wyzwoleniu.",
  ],
} as const;

export const summarySection = {
  content: [
    "Poczucie obowiązku, odwaga, wręcz ponadludzka wytrzymałość, wspaniałe koleżeństwo – bez względu na stopnie i starszeństwo – a ponadto wierność duchowi oddziału dawały siłę do boju Krakowskiej Brygadzie Kawalerii na długiej drodze: od zachodniej granicy Śląska, aż po las Pańków pod Tomaszowem Lubelskim.",
    "Sukcesy oddziałów i pododdziałów Krakowskiej Brygady Kawalerii, nie tylko obronne, ale i zaczepne –  niewykorzystane z powodu ogólnej sytuacji wojennej – to karta zapisana krwią żołnierzy 5. Pułku Strzelców Konnych w historii Września 1939 roku. Karta pisana w heroicznej obronie wolności przez Polski Naród.",
  ],
  author: "Autor: Maciej Małozięć",
} as const;

export const districtSection = {
  districtTitle: "Obwód AK Dębica w Akcji „Burza” - Struktura i Działania",
  content: [
    "Obwód AK Dębica, wchodzący w skład 24. Dywizji Piechoty, odtwarzał w okresie „Burzy” - 5. Pułk Strzelców Konnych Armii Krajowej. Dowództwo nad całością objął zastępca inspektora rejonowego w Rzeszowie, kpt. Adam Lazarowicz „Klamra”, natomiast komendant Obwodu Dębica, kpt. Ludwik Marszałek „Zbroja”, został na czas „Burzy” - zastępcą „Klamry”. Teren Obwodu podzielono na trzy rejony walki zwane także zgrupowaniami [1].",
    "Rozkaz o rozpoczęciu „Burzy” przywiózł z Rzeszowa do Gumnisk k. Dębicy Ludwik Marszałek „Zbroja” i dostarczył go Adamowi Lazarowiczowi „Klamrze” o świcie 28 lipca 1944 roku. Dowódca pułku niezwłocznie zaalarmował całość Obwodu i zarządził koncentracje oddziałów w ramach zgrupowań w trzech rejonach. Miejsce postoju dowództwa pułku oraz dowodzenia całością sił znajdowało się w leśniczówce Berdech (na wzgórzu otaczającym wieś Braciejowa, w parafii Gumniska), gdzie zarządzono także koncentrację oddziałów II Zgrupowania [2].",
    "W skład II Rejonu wchodziło pięć placówek Obwodu „Deser”: Brzeziny „Bomba”, Dębica „Działo”, Korzeniew „Kartacz”, Łączki Kucharskie „Ławka”, Ropczyce I „Rakieta”. Terytorialnie zasięg działania Zgrupowania był największy i rozciągał się od Ropczyc po Podgrodzie. Przez teren ten wiodła linia kolejowa Rzeszów - Kraków (od Ropczyc po Grabiny) oraz drogi Rzeszów - Kraków, Dębica - Wielopole.",
    "Po ogłoszonym alarmie, o świcie 28 lipca, oddziały II Zgrupowania przed  godziną 10 skoncentrowały się w leśnictwie Berdech, gdzie po zameldowaniu żołnierze otrzymywali uzbrojenie. W pierwszym dniu koncentracji na Berdech dotarły kompanie z trzech placówek: „Bomba” pod dowództwem Stanisława Lachmana „Wielkiego”, „Działo” pod dowództwem Leona Kloca „Jasnego” i kompania z placówki „Ławka” dowodzona przez Franciszka Szarę „Pęka”. Ponadto na Berdechu znajdował się oddział dyspozycyjny dowodzony przez Władysława Strumskiego „Brutusa” i pluton „Gumniska” pod dowództwem Zbigniewa Lazarowicza „Bratka”.",
  ],
} as const;

export const firstDaysSection = {
  firstDaysTitle:
    "Działania oddziałów II Zgrupowania w pierwszych dniach „Burzy”",
  content: [
    "Początkowy okres „wzmożonej działalności dywersyjnej” we wszystkich zgrupowaniach 5. PSK AK, cechowała duża aktywność bojowo-dywersyjna poszczególnych plutonów i kompanii, charakteryzująca się przeprowadzeniem licznych akcji zaczepnych na drogach, rozbijaniem mniejszych patroli nieprzyjacielskich oraz rozbrajaniem posterunków policji i dozbrajaniem plutonów w zdobyczną broń.",
    "Tymczasem w pierwszych dniach sierpnia „Klamra” wraz ze swym sztabem zmienił dotychczasowe miejsce postoju przenosząc się z Berdechu w rejon Południka (do gajówki Władysława Klabachy). Decyzja ta była podyktowana faktem, iż Berdech znajdował się w bliskim sąsiedzkie drogi Niedźwiada - Mała, która stwarzała niebezpieczeństwo dekonspiracji.",
    "Wśród wielu akcji wykonanych przez oddziały II Rejonu należy wymienić kilka o większym znaczeniu. W nocy z 30 na 31 lipca dywersja Obwodu (pluton dywersyjny Władysława Strumskiego „Brutusa” [3] oraz pluton dywersyjny „Cebuli”) pod dowództwem Jerzego Wosia „Farysa” wysadziły tory kolejowe w miejscowości Głowaczowa, efektem czego było przerwanie łączności kolejowej na linii Dębica - Tarnów, na okres 10 godzin [4].",
    "Pluton Wilhelma Jakiego „Koraba” z kompani „Pęka” w dniu 30 sierpnia zorganizował zasadzkę na 3 samochody niemieckie na drodze Dębica - Wielopole w rejonie gajówki Sewerówka w rejonie Kamieńca. Zupełnie zaskoczony oddział niemiecki, pomimo prób obrony, był bezradny wobec atakujących. W wyniku akcji zginęło 32 Niemców, zdobyto broń, samochody oraz duże zapasy żywności [5].",
  ],
} as const;

export const heroicDefenceSection = {
  heroicDefenceTitle:
    "Heroiczna Obrona Ludności Cywilnej w Gumniskach - Akcja 12 sierpnia 1944 r.",
  content: [
    "Drużyna dyspozycyjna Władysława Strumskiego „Brutusa” skutecznie przeprowadziła (w pierwszych dniach sierpnia), dwie akcje na kolumny samochodów nieprzyjaciela w miejscowości Podgrodzie. W akcjach tych brał udział kpt. Józef Lutak „Dyzma”, dowódca dywersji w Inspektoracie AK Rzeszów. Istotnym elementem działań prowadzonych przez Armię Krajową w ramach „Burzy” była ochrona ludności przed represjami i pacyfikacjami. Na terenie II Rejonu nieprzyjaciel planował przeprowadzenie kilku tego rodzaju akcji, jednak każdorazowa próba pacyfikacji kończyła się fiaskiem. Doskonale zorganizowane patrole II Zgrupowania uniemożliwiły okupantowi przeprowadzenie pacyfikacji w miejscowościach: Mała, Niedźwiada i Gumniska.",
    "Najbardziej spektakularną akcję odbicia ludności w dniu 12 sierpnia, przeprowadziła bojówka dyspozycyjna Władysława Strumskiego „Brutusa” dowodzona przez Józefa Lutaka „Dyzmę” oraz wspomagana przez kilku żołnierzy z drużyny Jana Murgrabiego „Pieca” z kompanii Dębica „Działo”. Planowana przez Niemców pacyfikacja wsi była pokłosiem zlikwidowania sześciu hitlerowców grasujących po Gumniskach i Braciejowej dwa dni wcześniej.",
    "Rankiem 12 sierpnia do Gumnisk ściągnął batalion niemiecki. Zaczęło się spędzanie mieszkańców wsi (starców i dzieci) na drogę prowadzącą w kierunku Dębicy.",
    "Informacja o poczynaniach nieprzyjaciela dotarła do sztabu II Zgrupowania. Dowódca 5. PSK AK, Adam Lazarowicz „Klamra” posłał Józefa Lutaka „Dyzmę”, który miał ocenić zagrożenie, jednakże dowódca pułku wyraźnie apelował o nie podejmowanie pochopnych działań. Po przybyciu na miejsce „Dyzma” mając do dyspozycji drużynę dyspozycyjną i drużynę z plutonu „Gumniska” postanowił uderzyć na nieprzyjaciela, który prowadził już około trzystuosobową grupę bezbronnych mieszkańców w kierunku Dębicy.",
    "Całość (łącznie 23 + 1) „Dyzma” podzielił  na trzy grupy: grupa główna 17+1 zajęła stanowiska na wzgórzu za rzeką Ostrą, w odległości około 40 metrów od drogi; grupa Władysława Strumskiego „Brutusa” w trzyosobowym składzie rozlokowała się na górze po prawej stronie; grupa Kazimierza Strumskiego „Tyrana” - trzy osoby, rozlokowała się na lewym skrzydle. W ten sposób „Dyzma” chciał osiągnąć przewagę optyczną i wzbudzić wśród Niemców przekonanie o znacznej liczebności atakujących. Zamysł ten powiódł się i kiedy na rozkaz „Dyzmy” dywersanci otworzyli ogień do prowadzących ludność Niemców, ci w panice zaczęli kryć się w rowach. W tym czasie ludność rzuciła się do ucieczki. Kiedy jednak Niemcy spostrzegli liczebność atakujących, przystąpili do kontruderzenia. „Dyzma” dał wówczas rozkaz wycofania. Gdy oddział śmiałków wycofywał się pod górę, w kierunku lasu (miejsca zgrupowania), z lizjery lasu odezwały się karabiny oddziałów II Zgrupowania, które na wniosek „Klamry” wyruszyły wesprzeć atakujących [6].",
  ],
} as const;

export const commandTransferSection = {
  commandTransferTitle:
    "Akcja w Gumniskach i Przeniesienie Dowództwa na Polanę Kałużówki",
  content: [
    "Brawurowa akcja zakończyła się sukcesem. Na placu boju poległo około 20 Niemców, a kilkunastu zostało rannych. Podczas wycofywania poległ jeden żołnierz z oddziału dyspozycyjnego. Był nim Stanisław Mroczka „Miecz”. Niemcy zdołali zabrać około 20 cywilów (głównie starców oraz miejscowego proboszcza), którzy zostali w większości wypuszczeni w Dębicy, natomiast reszta została zagarnięta do prac przyfrontowych, skąd po kilku dniach powróciła do domów [7].",
    "Tymczasem „Klamra” jeszcze przed pacyfikacją Gumnisk (na przełomie pierwszej i drugiej dekady sierpnia), zarządził po raz drugi przeniesienie dowództwa pułku i sztabu II Zgrupowania.",
    "Nowe miejsce postoju znajdowało się w rejonie leśnej polany Kałużówka, położonej pośrodku rozległego kompleksu leśnego Braciejowa - Gumniska - Gołęczyna. Tutaj „Klamra” postanowił ściągnąć oddziały pozostające w terenie, tzn. kompanie i plutony wchodzące w skład II Zgrupowania, które walczyły dotąd w rejonach swoich placówek. Kontrowersje wśród dowództwa wzbudził projekt Romana Kani „Rygla” i Franciszka Ciszka „Cisa”, aby uczynić z Kałużówki partyzancki obóz [8]. „Klamra” przewidywał jednak, że front szybko przejdzie przez powiat dębicki, a ewentualny opór niemiecki zostanie postawiony dopiero na linii rzeki Wisłoki, a więc kilka kilometrów na zachód od samej Kałużówki [9].",
  ],
} as const;

export const battlesSection = {
  battlesTitle: "Walki na Kałużówce",
  content: [
    "Na leśnej polanie nastąpiła reorganizacja oddziałów II Rejonu, które następnie wykonały umocnione szałasy i okopy. Na Kałużówkę przybył także pluton zwiadowczy Armii Czerwonej, z której dowództwem nawiązano współpracę. Bieg wypadków i założenia szybkiego przejścia frontu nie sprawdziły się. Już 21 sierpnia front zaczął w błyskawicznym tempie przesuwać się spod Ropczyc w kierunku Dębicy. Naprzeciw wojskom radzieckim wyruszył pluton Józefa Naroga „Strzały” (wchodzący uprzednio w skład I Zgrupowania). Pluton ten po złożeniu deklaracji o chęci współpracy AK z oddziałami Armii Czerwonej został przez Sowietów rozbrojony. „Strzała” zdołał jedynie wysłać gońca, który poinformował „Klamrę” o zdarzeniu. Sam musiał rozwiązać oddział i pod eskortą Rosjan został przeprowadzony do lasu w okolicy miejscowości Stasiówka, gdzie wszystkich wypuszczono [10].",
    "Następnego dnia pluton Karola Kubika z kompanii „Pęka” przeprowadził atak na kolumnę czterech samochodów niemieckich w rejonie Południka. Jeden samochód został spalony a jego trzyosobowa załoga zlikwidowana. Pozostałe wozy (w których znajdowali się prawdopodobnie wyżsi wojskowi niemieccy), zdołały uciec. W „uchwyconym” samochodzie oddział „Wichra” zdołał odnaleźć m.in. teczkę z cennymi dokumentami wojskowymi, w której (poza innymi materiałami) znalazły się tajne rozkazy dowództwa niemieckiego. Z samochodu zabrano także dowody osobiste zabitych oraz ich broń [11].",
    "Zbigniew Lazarowicz, dowódca plutonu „Gumniska” a zarazem syn dowódcy pułku, ze szczegółami opisał moment ukształtowania się frontu w rejonie Braciejowej i Gumnisk: „Sowieci wkroczyli do Gumnisk i Braciejowej 22 sierpnia i zajęli stanowiska po wschodniej stronie kotliny. Niemcy początkowo nie zaciągnęli linii, mieli widocznie wycofać się dalej na zachód, ale gdy Sowieci stanęli, nie posuwając się dalej, rozciągnęli i oni linię obronną na lizjerze lasu, w którym myśmy się kryli. W ten sposób znaleźliśmy się w bezpośrednim zapleczu frontu niemieckiego, pomiędzy pierwszą linią, a stanowiskami artylerii. W tej sytuacji musieliśmy zamknąć ściśle naszą bazę i wzmocnić czujność i ubezpieczenie. Przygotowaliśmy się do obrony w okrążeniu. Stanowiska ogniowe umocniliśmy dołami strzeleckimi. Wysunięto placówki na przedpolu w kierunku frontu. Oddziały zajmowały następujące stanowiska: od południa pluton »Cebuli« [Jan Dec] na jego prawym skrzydle kompania »Pęka« [Franciszek Szara], a dalej drużyna sowiecka. Od zachodu pluton »Bratka«, czyli mój, w sile dwóch drużyn, bo trzecia drużyna pod dowództwem kpr. »Sokoła« [Michał Jędrzejczyk] została skierowana na wzmocnienie wschodniego odcinka od strony Gumnisk. Od północy kompania »Jasnego« [Leon Kloc], a od wschodu oddział dyspozycyjny »Klamry«, saperzy, sekcja Piata, pluton łączności oraz wspomniana drużyna »Sokoła«. Na tym też odcinku wysunięta została w kierunku frontu silna placówka. Drogi dojazdowe zabezpieczono dodatkowymi zawałami” [12].",
  ],
} as const;

export const partisanSection = {
  partisanTitle:
    "Obóz Partyzancki w Okrążeniu i Dylematy Strategiczne Dowództwa II Rejonu",
  content: [
    "Linia frontu ukształtowała się na linii Wiewiórka - Straszęcin - Grabiny - Latoszyn, a następnie wzdłuż doliny rzeki Ostrej, przez Gumniska i Braciejową. Na wzgórzach po wschodniej stronie rzeki Ostrej znalazły się oddziały sowieckie, natomiast po przeciwległej stronie, na wzgórzach od zachodu, formacje niemieckie. Bezpośrednio za pasem wzniesień między linią Latoszyn - Gumniska - Braciejowa, w Dolinie Dolnej Wisłoki, w rejonie Jaworza Dolnego znalazły się oddziały niemieckiej artylerii. W tej sytuacji obóz partyzancki II Rejonu znalazł się w okrążeniu, mając po stronie zachodniej niemiecką artylerię, zaś po stronie wschodniej - linię frontu.",
    "Tymczasem dowództwo pułku i II Zgrupowania, przystąpiło do opracowania koncepcji wycofania się z terenu objętego działaniami wojennymi. W ustnej rozmowie z Ludwikiem Marszałkiem „Zbroją” (przebywającym w III Rejonie) - „Klamra” wydał rozkaz rozwiązania III Zgrupowania, dowodzonego przez Edmunda Mateckiego „Lisa”. Rozmowa telefoniczna obu dowódców została jednak przerwana. Do dowództwa napłynęły nowe meldunki o zajęciu drogi Południk - Gołęczyna (na skraju miejscowości Gołęczyna), gdzie znajdowało się dowództwo III Zgrupowania. W tej sytuacji pojawiły się dwie koncepcje rozwiązania II Rejonu: pierwsza mówiła o próbie przebicia się na stronę sowiecką, druga zaś dotyczyła przejścia na zachód w rejon lasów Gołęczyny lub ewentualnie Jaworza, gdzie miało nastąpić rozwiązanie oddziałów. Mówiło się także o próbie przejścia w rejon Jodłowej (za Wisłoką), jeśli zaszłaby taka konieczność.",
    "Wobec wiadomości które dostarczył goniec posłany przez Józefa Naroga „Strzałę” oraz z uwagi na inne okoliczności mówiące o zdradzieckim postępowaniu Rosjan, zwyciężyła koncepcja przebijania się na zachód [13].",
  ],
} as const;

export const evacuationSection = {
  evacuationTitle:
    "Bitwa na Polanie Kałużówki - Heroiczny Opór i Ewakuacja II Zgrupowania",
  content: [
    "Jednak rankiem 23 sierpnia Niemcy skierowali silny ogień dwóch baterii artylerii na stanowiska II Zgrupowania w rejonie Kałużówki. Następnie od strony Południka wyszło rozpoznanie patroli bojowych skutecznie odpartych przez kompanię „Pęka”. Przez cały dzień i noc z 23 na 24 sierpnia Niemcy kładli silny ogień artylerii na niewielki stosunkowo teren na którym znajdowało się II Zgrupowanie [14]. Pod wpływem tego ognia pojawiły się pierwsze straty w szeregach II Zgrupowania 5. PSK AK. W tej sytuacji „Klamra”, celem uniknięcia dalszych strat, podjął ryzykowną decyzję próby przebicia się na stronę radziecką. W tym celu nawiązał przez radiostację kontakt z dowództwem radzieckim, aby Sowieci położyli ogień na wskazany skraj lasu, celem upozorowania natarcia na stanowiska niemieckie, co pomogłoby oddziałom II Rejonu opuścić las i wydostać się z okrążenia. Rosjanie wyrazili zgodę, jednakże w oznaczonym czasie położyli ogień, który został skierowany nie na wyznaczony przez „Klamrę” odcinek, lecz wprost na stanowiska II Zgrupowania. Wprawdzie Sowieci przepraszali później za tę pomyłkę, jednakże „Klamra” nie zdecydował się na powtórzenie manewru [15].",
    "Około godziny 5 rano, w czwartek 24 sierpnia od wschodu tzn. od strony drogi Braciejowa - Południk oraz od południowego-wschodu, tzn. od strony miejscowości Południk wyszło główne natarcie batalionu piechoty niemieckiej. Atak wspierał silny ogień artylerii i moździerzy, skierowany na polskie stanowiska. Jako pierwszy wycofał się oddział „rozwiedki”, której brakło amunicji. Pod silnym naporem nieprzyjaciela na skrzydło kompanii Franciszka Szary „Pęka”, stanowiącej pierwszą linię obrony od strony Południka, dowódca kompanii wydał rozkaz cofnięcia na zapasowe stanowiska. Skuteczny opór w tym rejonie stawiła drużyna saperów Zdzisława Chodackiego „Migdała”, drużyna dyspozycyjna „Brutusa” oraz pluton Artura Cwena „Rena”. Jednakże i te oddziały musiały się wycofać w głąb polany na wzgórze oznakowane na mapie: 426 m. n.p.m. [16].",
    "Teren w rejonie Kałużówki jest mocno górzysty, a w 1944 roku porośnięty był gęstym lasem (głównie bukowym), poszczególne wzniesienia przecinały strome jary, w których płynęły potoki biorące swe źródła w rejonie okalających wzgórz. Warunki terenowe przemawiały na korzyść atakujących, którzy po wycofaniu się oddziałów II Zgrupowania w rejon wzgórza 426, mogli wejść na samą polanę.",
    "W godzinach popołudniowych, kiedy oddziały niemieckie zaczęły się wdzierać na otwartą przestrzeń polany, grupa przeciwuderzeniowa pod dowództwem samego dowódcy 5. PSK AK kpt. Lazarowicza „Klamry” zepchnęła nieprzyjaciela z Kałużówki. W czasie ataku ranny został dowódca niemiecki w randze majora, który zmarł następnego dnia. Po tym odparciu, około godziny 19.30, Niemcy wycofali się z rejonu Kałużówki w kierunku północno-wschodnim[17]. W walce na Kałużówce poległo jedenastu żołnierzy II Zgrupowania, natomiast sześciu zostało ciężko rannych. Niemcy stracili swojego dowódcę, około dwudziestu żołnierzy (w tym oficerów) i mieli około trzydziestu rannych [18].",
    "„Jak zacięte i uporczywe były walki na polanie Kałużówka świadczy fakt, że na posunięcie się w głąb o około 1,5 km Niemcy potrzebowali przeszło 14 godzin (od godziny 5 rano do godziny 19.30 wieczorem). Mając kolosalną przewagę broni i ognia zmusili partyzantów do stałego cofania się, ale kontrnatarcia partyzantów już nie byli w stanie powstrzymać i zaprzestali dalszej walki” [19].",
    "Pod wieczór dowódca całości zarządził zbiórkę i ewakuację Zgrupowania. „Klamra” planował przeprowadzenie przebicia przez linię frontu w rejonie Południka. Kłopotliwą okazała się kwestia transportu rannych, których umieszczono na prowizorycznych noszach. Przed nocą Zgrupowanie wycofało się z polany w kierunku północno-wschodnim w promieniu około kilometra od Kałużówki.",
  ],
} as const;

export const epilogSection = {
  epilogTitle: "Rozwiązanie oddziałów i epilog",
  content: [
    "W dniu 25 sierpnia Zgrupowanie przeszło w rejon spalonej przez Niemców leśniczówki Władysława Klabachy [20]. Przejście przez front okazało się niemożliwe. Teren był już mocno obsadzony przez oddziały niemieckie, a na przedpolu Niemcy zastawili sidła w postaci pola minowego. Sytuacja oddziałów II Rejonu stawała się coraz bardziej dramatyczna. Żołnierze od kilku dni nie mieli w ustach żadnego pożywienia. Kontrowersyjna stała się kwestia związana z transportem rannych.",
    "Po trzech dniach pobytu w jarze na Południku  dowództwo podjęło decyzję wymarszu w kierunku zachodnim, a więc w rejon gdzie uprzednio znajdowały się oddziały III Zgrupowania (rozwiązanego 23 sierpnia). Późnym wieczorem 28 sierpnia, gdy zapadł już całkowity zmrok Zgrupowanie wyruszyło w rejon lasów Gołęczyny [21].",
    "Po dotarciu w rejon Gołęczyny, 29 sierpnia nastąpiło częściowe rozwiązanie oddziałów II Zgrupowania. Jako pierwsza odeszła kompania „Pęka” (bez plutonu dowódcy kompanii, który pozostał z pozostałymi oddziałami), część kompanii „Jasnego” oraz pluton Ludwika Wolaka „Orlika”.",
    "Następnego dnia pozostałe oddziały przeszły w rejon Jaworza, gdzie zwolniono kolejną grupę żołnierzy. Rozwiązywane oddziały składały broń, którą owinięto w koce i zakopano w lesie z dokładnym oznaczeniem miejsca zakopania [22].",
    "We wrześniu grupa, która pozostała z „Klamrą” liczyła około sześćdziesiąt osób. Oddział ten krążył po lasach celem uniknięcia zorganizowanej na niego obławy. Z tym oddziałem „Klamra” powrócił na Kałużówkę, a następnie z powrotem w rejon lasów Gołęczyna - Jaworze.",
    "W dniu 12 września oddział uniknął zorganizowanej obławy niemieckiej przygotowanej przez Rzeszowską Dywizję Opóźniającą - Reichschofspeerdywizion i tego samego dnia w rejonie Jaworza „Klamra” rozwiązał oddział, nakazując żołnierzom aby na własną rękę podjęli próbę rozejścia się do domów [23].",
    "Wśród żołnierzy, którzy pozostali w lesie nie wszyscy mieli szczęście przeżyć. Wielu zginęło z rąk niemieckich oddziałów „czyszczących” teren z pozostałych w lesie partyzantów, byli także tacy, którzy dostali się do niemieckiej niewoli i zostali osadzeni w obozach w Gross-Rosen i Ravensbrűck. Grupa około czterdziestu partyzantów wyszła z lasów dopiero w trzeciej dekadzie października. W grupie tej był m.in. kapelan Obwodu ZWZ - AK Dębica i II Zgrupowania, ks. Stanisław Bartosz „Mieczyk”. Bez dachu nad głową, oddział ten w okresie jesieni przetrwał posilając się w desperacji nawet zabłąkanym w lesie psem [24].",
    "W okresie września i października zginęło ponad czterdziestu żołnierzy II Zgrupowania, zaś piętnastu dostało się do niemieckiej niewoli [25].",
  ],
} as const;

export const footnotesSection = {
  footnotesTitle: "Przypisy",
  footnotes: [
    "[1] Przygotowany był także czwarty, zapasowy rejon walki pod dowództwem ppor. Stanisława Lachmana „Zan”. Rejon ten stanowiła jedna kompania placówki Brzeziny wchodząca de facto w skład Zgrupowania II, dowodzonego przez Romana Kanię ps. „Rygiel”. IV Rejon pozostał przez cały okres „Burzy” w odwodzie pułku i wykonywał ograniczone działania. Por.: J. Niedziela, F. Sagan, Inspektorat Rejonowy ZWZ- AK Rzeszów, Rzeszów 2005, s. 200-201; Sam „Klamra” omawiając „Burzę” (Rys historyczny oddziałów AK w rejonie Dębicy- akcja „Burza”; spisany przez „Szyszkę”, Maszynopis w zbiorach autora), wymienia tylko trzy rejony (zgrupowania) walki.",
    "[2] Leśnictwo Berdech położone było na skraju kompleksu leśnego, dokąd prowadziła kiepska leśna droga dochodząca do traktu leśnego łączącego wsie Mała - Niedźwiada (na drodze prowadzącej z Dębicy do Wielopola Skrzyńskiego).",
    "[3] „Burzowe” dzieje drużyny dyspozycyjnej Komendy Obwodu, zostały opisane barwnym językiem w zbeletryzowanej powieści, przez dowódcę tej drużyny zwanej także „bojówką” - „Brutusa”. Zob.: W. Strumski, Dziesiątka w akcji, wyd. II, Dębica 2004.",
    "[4] Meldunek sytuacyjny z 31 lipca 1944 r. dowódcy II Rejonu Walki Romana Kani „Rygla” 31 lipca 1944 r. [w:] G. Ostasz, A. Zagórski, Akcja „Burza” w Inspektoracie AK Rzeszów, Kraków 2003, s. 380-381.",
    "[5] A. Stańko, Gdzie Karpat progi, wyd. III, Tuchów 1997, s. 270.",
    "[6] W. Strumski, dz. cyt., s. 61-70.",
    "[7] Z. Lazarowicz, „Klamra” - mój Ojciec, „Zeszyty Historyczne WiN-u” nr 4, 1993, s. 95.",
    "[8] Władysław Strumski (Dziesiątka…, dz. cyt., s. 45) pisze: „Plutony strzeleckie kopią stanowiska bojowe, tak jakbyśmy mieli rozpocząć wojnę pozycyjną. Ponieważ wszystkie instrukcje traktujące o partyzantce kategorycznie zabraniają zakładanie warownych obozów, więc te poczynania dziwią mnie bardzo i w końcu idę do »Dyzmy« i pytam, kto wpadł na ten głupi pomysł. Odpowiedź »Dyzmy« była tak nieparlamentarna, że nie można jej powtórzyć drukiem. Dopiero »Szyszka« wyjaśnił mi, że rozkaz okopywania się wyszedł od kapitana »Rygla«, którego poparł porucznik »Cis« - de facto stary partyzant. Próżno »Dyzma«, urodzony i przygotowany wszechstronnie oficer partyzancki, przeciwstawiał się temu pomysłowi tłumacząc, że partyzantom nie wolno przyjmować walki pozycyjnej, jeżeli nie chcą się narażać na całkowite zniszczenia. Oddział partyzancki musi być ruchomy, musi zmieniać miejsce pobytu, być nieuchwytnym dla wroga. Oficerowie zawodowi wzięli górę nad nim, gdy ich sugestiom uległ »Klamra«”.",
    "[9] Por.: A. Stańko, Gdzie Karpat…, dz. cyt., s. 279; Z. Lazarowicz, „Klamra”…, dz. cyt., „ZHW” nr 4, s. 89; Tenże, Akcja „Burza” w powiecie dębickim 1944-1994, msp., s. 12.",
    "[10] A. Stańko, Gdzie Karpat…, dz. cyt., s. 289-290.",
    "[11] Tamże, s. 290-291.",
    "[12] Z. Lazarowicz, „Klamra”…, dz. cyt., „ZHW” nr 4, s. 99.",
    "[13] A. Stańko, Gdzie Karpat…, dz. cyt., s. 295.",
    "[14] Rys historyczny oddziałów AK…, dz. cyt., s. 14. Omawiając tę sytuację, „Klamra” (tamże, s. 14-15) pisze: „Ogień ten spowodował straty w oddziale w zabitych i rannych. Żołnierz konspiracyjny pod pierwszym ogniem artylerii zaczął się denerwować, a nawet kilkunastu zbiegło ze stanowisk. Co gorsze niektórzy dowódcy zamiast pozostać wówczas przy żołnierzu, zwłaszcza, że spodziewane było natarcie piechoty nieprzyjaciela, szukali miejsca w schronach i nie umieli ukryć swego zastraszenia. Zastępca dowódcy kompanii rej. por. służby stałej „Cis” oddalił się ze swojego odcinka na tyły oddziału zaraz po rozpoczęciu ostrzeliwania przez artylerię, w następnym dniu zbiegł”.",
    "[15] A. Stańko, Gdzie Karpat…, dz. cyt., s. 296.",
    "[16] Walki na Kałużówce wg relacji Cwena [w:] Zbiory autora - Kolekcja archiwalna Antoniego Stańki [dalej KS] 37-II, s. 5-7.",
    "[17] Tamże, s. 7-8; Rys historyczny oddziałów AK…, dz. cyt., s. 15.",
    "[18] Antoni Stańko (Gdzie Karpat…, dz. cyt., s. 302), posiłkując się tekstem sporządzonym przez „Szyszkę” w imieniu „Klamry” w 1944 roku, podaje: „straty nieprzyjaciela: zabitych 4 oficerów, 22 żołnierzy i 4 agentów Gestapo, rannych około 30 żołnierzy, wziętych do niewoli - 12 żołnierzy. Straty nieprzyjaciela spowodowane przez artylerię radziecką, której ogniem kierowali partyzanci: zabitych - 20, rannych około 30, zniszczono 5 dział, a uszkodzono 4 oraz uszkodzono bądź zniszczono kilkanaście samochodów ciężarowych”. Do tego opisu należy dodać, że nie jest to bilans samej bitwy na Kałużówce, albowiem podając te dane „Klamra” miał na myśli cały okres tzw. 2 fazy walk, a więc od zajęcia Dębicy i rozwiązania I i III Zgrupowania w dniu 23 sierpnia, do rozwiązania II Zgrupowania w ostatnim dniu sierpnia 1944 roku.",
    "[19] Tamże, s. 301.",
    "[20] W czasie porannego marszu (podczas pokonywania drogi Braciejowa- Południk) poległ od serii z karabinu maszynowego Andrzej Jabłonowski „Śmigło” oraz ciężko ranny na Kałużówce Tadeusz Ciszek „Jahura”.",
    "[21] Z. Lazarowicz, „Klamra”…, dz. cyt., „ZHW” nr 4, s. 109-110",
    "[22] Wg relacji Tadeusza Kubicy (Relacje naocznych świadków AK [w:] KS sygn. 121-IV, t. I, s. 133), Niemcy torturując małoletniego chłopca aresztowanego prawdopodobnie w rejonie lasów Gołęczyny na przełomie września i października 1944 roku, uzyskali informacje o zakopanej broni. Tadeusz Kubica wspomina: „Wiem że tego chłopca Niemcy wozili trzykrotnie do lasów Południka i prawdopodobnie odkopali całą naszą broń”. Zdanie Tadeusza Kubicy potwierdza Antoni Stańko (Gdzie Karpat…, dz. cyt., s. 331), który na podstawie relacji mieszkańców okolicznych miejscowości pisze, że „Niemcy wywieźli broń na chłopskiej furmance”.",
    "[23] A. Stańko, Gdzie Karpat…, dz. cyt., s. 308; Zbrodnie niemieckie w powiecie dębickim [w:] KS sygn. 131-IV.",
    "[24] Losy żołnierzy, którzy po rozwiązaniu oddziałów pozostali w lesie, szerzej opisuje A. Stańko (tamże, s. 309-340).",
    "[25] Tamże, s. 339-340",
  ],
} as const;

export const fortressSection = {
  fortressTitle: "Obwód SZP-ZWZ-AK Dębica - Twierdza Polskiego Podziemia",
  content: [
    "Na tle Polskiego Podziemia szczególną rolę odegrał Obwod SZP - ZWZ - AK Dębica krypt. „Dziekania”, „Deser”, odnosząc sukcesy m.in. na płaszczyźnie sabotażowo-dywersyjnej oraz wywiadowczej. Kiedy trwały jeszcze walki polskich armii z Niemcami m.in. pod Kockiem, w twierdzy Modlin oraz w Warszawie, 27 września 1939 roku powstała w stolicy tajna organizacja pn. Służba Zwycięstwu Polski (SZP), na czele której stanął gen. Michał Karaszewicz-Tokarzewski. Jej zadaniem było „prowadzenie dalszej walki o utrzymanie niepodległości i całości granic”.",
    "Pod koniec września i z początkiem października w rodzinne strony zaczęli powracać żołnierze polskich formacji walczących z Niemcami, którym udało się uniknąć niemieckiej bądź sowieckiej niewoli. To oni mieli stanowić elitę tworzącego się polskiego podziemia niepodległościowego.",
  ],
} as const;

export const beginningsSection = {
  beginningsTitle:
    "Kształtowanie się Obwodu ZWZ Dębica - Bohaterstwo i Determinacja",
  content: [
    "Powstający Obwód ZWZ Dębica, w kwietniu 1940 roku, został dotknięty falą aresztowań. W wyniku rozpracowania struktur rzeszowskich ZWZ aresztowano członków Komendy Obwodu Dębica: Jana Artura Towarnickiego „Tura”, Mariana Skwiruta „Szpaka” oraz Piotra Klamuta „Pietrzaka”. Wszystkich przewieziono do Rzeszowa, gdzie przeszli ciężkie śledztwo nie ujawniając przed okupantem żadnych kontaktów oraz zachowując bohaterską postawę. W więzieniu zastrzelony został Towarnicki.",
    "Wobec zaistniałej sytuacji Komenda Okręgu, nie znając bliżej realiów lokalnych, poleciła organizację obwodu kpt. Dąbrowskiemu z Krakowa, mianując go następcą Towarnickiego na stanowisku komendanta. Z uwagi na brak kontaktów w lokalnym środowisku, bliżej nieznany w Dębicy kpt. Dąbrowski musiał zrezygnować z pełnienia funkcji. Wówczas z rekomendacji Mieczysława Rakoczego „Soplicy” komendantem został Antoni Cwen „Maszynowski”.",
  ],
} as const;

export const placesSection = {
  placesTitle: "Od 1941 do 1943 roku w ramach obwodu funkcjonowało 8 placówek:",
  places: [
    {
      id: "1",
      name: "Placówka Dębica",
      description:
        "(„Działo”, „62”), którą dowodzili kolejno: Adam Lazarowicz, ppor. Antoni Szlachta „Kornicz” oraz ppor. Leon Kloc „Jasny” (od grudnia 1941 roku);",
    },
    {
      id: "2",
      name: "Placówka Korzeniów",
      description:
        "(„Kartacz”, „68”), została zorganizowana w połowie 1941 roku. Jej komendantem był pchor. Franciszek Podraza „Nałęcz”;",
    },
    {
      id: "3",
      name: "Placówka Brzeziny",
      description:
        "(„Bomba”, „69”, „74”), której organizatorem i pierwszym komendantem był por. Ludwik Marszałek „Wilk”. W maju 1941 roku „Wilka” zastąpił Stanisław Lachman „Wielki”, „Zan”;",
    },
    {
      id: "4",
      name: "Placówka Sędziszów",
      description:
        "(„Sława”, „72”), którą wpierw dowodził ppor. Mieczysław Szczurowski „Bączek”, a od 1941 roku por. Mieczysław Stachowski „Sęp”, „Maciej”;",
    },
    {
      id: "5",
      name: "Placówka Ropczyce",
      description:
        " („Rakieta”, „76”), zorganizowana wpierw przez ppor. Wojciecha Passowicza „Karpa”, a następnie od 1940 roku dowodzona przez por. Władysława Grzegorskiego „Grzmota”;",
    },
    {
      id: "6",
      name: "Placówka Łączki Kucharskie ",
      description:
        "(„Ławka”, „Ładunek”, „78”), została zorganizowana w 1941 roku. Jej komendantem był pchor. Piotr Passowicz „Klon”, „Olcha”, a od stycznia 1943 roku pchor. Franciszek Szara „Pęk”;",
    },
    {
      id: "7",
      name: "Placówka Pilzno",
      description:
        "(„Pocisk”, „Piwonia”, „64”), której organizatorem i komendantem do lipca 1940 roku był sierż. Walenty Kula „Gater”. Po nim prowadzeniem placówki zajął się ppor. Zygmunt Pawlus „Turek”, a w lipcu 1942 roku zastąpił go ppor. Edmund Matecki „Lis”;",
    },
    {
      id: "8",
      name: "Placówka Zassów",
      description:
        "(„Zapalnik”, Zawilec”, „66”), została zorganizowana przez harcmistrza Pawła Barana „Wytrwał”, który kierował nią do grudnia 1941 roku. Po nim funkcję komendanta objął pchor. Alfred Łubieński „Iwo”.",
    },
  ],
  paragraph:
    "14 lutego 1942 roku rozkazem gen. Władysława Sikorskiego zniesiono nazwę ZWZ. Odtąd wszyscy żołnierze w czynnej służbie wojskowej stanowili Armię Krajową (AK).",
} as const;

export const readinessSection = {
  readinessTitle: "Siła i Gotowość do Walki",
  content: [
    "Obwód ZWZ-AK Dębica, funkcjonujący w granicach przedwojennego powiatu dębickiego, wyrósł do rangi najsilniejszego i najlepiej przygotowanego do akcji „Burza” spośród wszystkich obwodów w rzeszowskim Inspektoracie AK. W dowód uznania 1 stycznia 1944 roku otrzymał z rąk inspektora rejonowego Łukasza Cieplińskiego „Pługa” przechodni sztandar inspektoratu. Złożyło się na to wiele czynników. Najważniejsze z nich to: patriotyczna postawa mieszkańców regionu, właściwy dobór kadry na poszczególnych szczeblach organizacyjnych oraz zaangażowanie i zapał do pracy konspiracyjnej widoczny szczególnie wśród najmłodszych członków organizacji. W okresie bezpośrednio poprzedzającym „Burzę” obwód odebrał dwa zrzuty broni.",
    "Pierwszy, w nocy z 31 maja na 1 czerwca 1944 roku na placówce „Raszka I” w rejonie Niedźwiady i Małej oraz drugi, w nocy z 30 na 31 lipca 1944 (już w czasie „Burzy”) na placówce „Papuga II” w rejonie Starej Jastrząbki. Jak podaje Antoni Stańko, ogółem w chwili przystąpienia do „Burzy” (licząc broń zrzutową z placówki „Papuga II”), obwód dysponował liczbą około 1500 sztuk broni, 4650 sztuk granatów oraz około 160 000 sztuk amunicji różnego kalibru. W 1943 roku przystąpiono do finalizacji akcji scaleniowej. W sierpniu 1943 r. do Armii Krajowej wstąpiły oddziały Narodowej Organizacji Wojskowej w liczbie blisko 150 osób. Jeden pluton włączony został do Obwodu AK Tarnów i brał udział w akcji „Burza” w I Batalionie 16. PP AK „Barbara” na ziemi tarnowskiej.",
  ],
} as const;

export const expansionSection = {
  expansionTitle:
    "Rozbudowa struktur AK i przygotowania do akcji „Burza” w Obwodzie Dębica",
  content: [
    "W styczniu 1944 roku z AK scaliły się oddziały Batalionów Chłopskich. W ten sposób obwód wzmocnił się batalionem 500 żołnierzy BCh. Zgodnie z postanowieniami akcji scaleniowej Karol Chmiel „Grom” z Zagorzyc został zastępcą komendanta obwodu.",
    "Ponadto, wiosną 1944 roku doszło do zmian personalnych w Inspektoracie Rzeszów, których następstwem były zmiany w Obwodzie Dębica. Pierwszym zastępcą inspektora Łukasza Cieplińskiego „Pługa” został dotychczasowy komendant obwodu Dębica Adam Lazarowicz „Klamra”. Na stanowisku komendanta w Dębicy zastąpił go Ludwik Marszałek „Zbroja”.",
    "Lazarowicz obejmując funkcję w inspektoracie prosił, aby na czas powstania lub „Burzy” mógł powrócić do Gumnisk by dowodzić oddziałami obwodu „Deser”, co stało się faktem latem 1944 roku. W wyniku wspomnianej akcji scaleniowej obwodowi przybyło 6 nowych plutonów, 644 żołnierzy, w tym 12 oficerów rezerwy, 3 podchorążych, 52 podoficerów i 577 szeregowych.",
    "Aby ułatwić dowodzenie na obszarze rozległego obwodu, komendant zdecydował się podzielić cały obszar początkowo na dwa, a następnie na trzy podobwody. W pierwszym rzucie utworzono Podobwód Sędziszów „70”, a w maju 1944 roku z terenu Podobwodu Dębica wyodrębniono Podobwód Pilzno „Płoza”. W rozkazie z 15 lutego 1944 roku „Pług” wnioskuje o utworzenie Podobwodu „Sława” w skład którego miałyby wejść placówki: Sędziszów, Ropczyce oraz „dwie placówki wielopolskie. Razem 22 plutony bojowe”. Podział na podobwody - rejony walki, znalazł praktyczne zastosowanie dopiero w okresie akcji „Burza”.",
    "W skład I rejonu walki - I Zgrupowania dowodzonego przez por. Mieczysława Stachowskiego „Sępa” weszły placówki „Sława”, Strzała” i „Ropa”.",
    "W skład II rejonu walki - II Zgrupowania dowodzonego przez kpt. Romana Kanię „Rygla” weszły placówki: „Działo”, „Kartacz”, „Ławka”, „Bomba” oraz „Rakieta”.",
    "W skład III rejonu walki - III Zgrupowania dowodzonego przez ppor. Edmunda Mateckiego „Lisa” weszły placówki: „Pocisk” i „Zapalnik”.",
  ],
} as const;
