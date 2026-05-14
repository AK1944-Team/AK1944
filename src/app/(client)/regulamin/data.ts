type RegulationsDefinitionItem = {
  term: string;
  definition: string;
};

type RegulationsListItem =
  | string
  | {
      content: string;
      subItems: string[];
    };

type RegulationsSection = {
  title: string;
  intro?: string;
  definitions?: RegulationsDefinitionItem[];
  items?: RegulationsListItem[];
};

export const regulationsData: {
  sections: RegulationsSection[];
  lastUpdated: string;
} = {
  sections: [
    {
      title: "§ 1. Definicje",
      intro: "Pojęcia użyte w niniejszym Regulaminie oznaczają:",
      definitions: [
        {
          term: "Administrator",
          definition:
            "Światowy Związek Żołnierzy Armii Krajowej – Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy, zwany dalej 'Związkiem'.",
        },
        {
          term: "Serwis",
          definition:
            "strona internetowa dostępna pod adresem ak1944.pl wraz ze wszystkimi podstronami i funkcjonalnościami.",
        },
        {
          term: "Użytkownik",
          definition:
            "każda osoba korzystająca z Serwisu, w tym przeglądająca jego zawartość, wypełniająca formularze lub dokonująca darowizn.",
        },
        {
          term: "Rajd",
          definition:
            "wydarzenie organizowane przez Związek, na które Użytkownik może zgłosić swój udział za pośrednictwem formularza dostępnego w Serwisie.",
        },
        {
          term: "Darowizna",
          definition:
            "dobrowolna wpłata pieniężna na cele statutowe Związku, dokonywana przez Użytkownika za pośrednictwem Serwisu lub przelewu bankowego.",
        },
        {
          term: "RODO",
          definition:
            "Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych.",
        },
      ],
    },
    {
      title: "§ 2. Postanowienia ogólne",
      items: [
        "Niniejszy Regulamin określa zasady i warunki korzystania z Serwisu internetowego prowadzonego przez Związek.",
        "Celem Serwisu jest upowszechnianie wiedzy historycznej dotyczącej Armii Krajowej, w szczególności II Zgrupowania AK oraz 5. Pułku Strzelców Konnych AK, upamiętnianie żołnierzy i bohaterów, prezentacja działalności Związku, a także umożliwienie Użytkownikom wsparcia działań statutowych poprzez darowizny lub udział w wydarzeniach.",
        "Korzystanie z Serwisu jest dobrowolne i nieodpłatne. Pewne funkcjonalności (np. zgłoszenie na Rajd, wpłata Darowizny) wymagają podania danych osobowych przez Użytkownika.",
        "Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu oraz Polityki Prywatności i Polityki Cookies. Użytkownik zobowiązany jest do zapoznania się z tymi dokumentami przed rozpoczęciem korzystania z Serwisu.",
        "Administrator zastrzega sobie prawo do zmiany Regulaminu. O wszelkich zmianach Użytkownicy zostaną poinformowani poprzez publikację zaktualizowanego Regulaminu w Serwisie. Zmiany wchodzą w życie w terminie wskazanym przez Administratora, nie krótszym niż 7 dni od daty publikacji. Korzystanie z Serwisu po wejściu w życie zmian oznacza ich akceptację.",
      ],
    },
    {
      title: "§ 3. Warunki korzystania z Serwisu",
      items: [
        "Użytkownik zobowiązuje się korzystać z Serwisu w sposób zgodny z prawem, dobrymi obyczajami oraz postanowieniami niniejszego Regulaminu.",
        {
          content:
            "Zabrania się wykorzystywania Serwisu w sposób naruszający prawa osób trzecich, w szczególności:",
          subItems: [
            "publikowania treści niezgodnych z prawem, obraźliwych, wulgarnych lub naruszających dobra osobiste,",
            "podszywania się pod inne osoby lub podawania nieprawdziwych danych,",
            "rozpowszechniania wirusów, złośliwego oprogramowania lub podejmowania działań mogących zakłócić funkcjonowanie Serwisu,",
            "kopiowania, modyfikowania lub rozpowszechniania treści objętych prawem autorskim bez zgody Administratora.",
          ],
        },
        "Administrator zastrzega sobie prawo do czasowego lub trwałego zablokowania dostępu do Serwisu Użytkownikowi, który narusza postanowienia niniejszego Regulaminu.",
        "Serwis może zawierać linki do stron internetowych podmiotów trzecich. Administrator nie ponosi odpowiedzialności za zawartość i politykę prywatności takich stron.",
      ],
    },
    {
      title: "§ 4. Zgłoszenia na wydarzenia (Rajdy)",
      items: [
        "Użytkownik może zgłosić swój udział w organizowanych przez Związek wydarzeniach (Rajdach) poprzez wypełnienie i przesłanie formularza zgłoszeniowego dostępnego w Serwisie.",
        "Zgłoszenie wymaga podania danych osobowych: imienia, nazwiska, adresu e-mail oraz opcjonalnie dodatkowych informacji niezbędnych do organizacji wydarzenia. Podanie danych jest dobrowolne, ale konieczne do przyjęcia zgłoszenia.",
        "Po przesłaniu formularza Użytkownik otrzyma potwierdzenie zgłoszenia na wskazany adres e-mail. Organizator skontaktuje się z Użytkownikiem w celu przekazania szczegółowych informacji o wydarzeniu.",
        "Zgłoszenie na Rajd nie stanowi zobowiązania do udziału. Użytkownik może w każdej chwili zrezygnować z udziału, informując o tym organizatora drogą mailową lub telefoniczną. Zalecane jest odwołanie zgłoszenia z co najmniej 3-dniowym wyprzedzeniem.",
        "Udział w Rajdzie może wiązać się z opłatą organizacyjną (np. pokrycie kosztów transportu, wyżywienia). Informacja o opłacie oraz sposobie jej uiszczenia zostanie przekazana Użytkownikowi po przyjęciu zgłoszenia.",
        "Organizator zastrzega sobie prawo do odwołania lub zmiany terminu wydarzenia z przyczyn niezależnych od niego (np. warunki atmosferyczne, siła wyższa). W takim przypadku Użytkownicy zostaną niezwłocznie powiadomieni, a wpłacone opłaty organizacyjne zostaną zwrócone lub przeniesione na nowy termin.",
        "Uczestnicy Rajdu zobowiązują się przestrzegać wskazówek organizatora oraz zasad bezpieczeństwa. Organizator nie ponosi odpowiedzialności za szkody wynikłe z nieprzestrzegania przez uczestników zasad lub z tytułu zdarzeń losowych.",
      ],
    },
    {
      title: "§ 5. Darowizny i wsparcie finansowe",
      items: [
        "Użytkownik może wesprzeć działalność statutową Związku poprzez dokonanie dobrowolnej Darowizny.",
        {
          content: "Darowizny można przekazywać:",
          subItems: [
            "poprzez formularz płatności online dostępny w Serwisie (obsługiwany przez operatora płatności Stripe Inc.),",
            'poprzez tradycyjny przelew bankowy na rachunek Związku podany w Serwisie, z tytułem przelewu: „Darowizna na cele statutowe".',
          ],
        },
        "Minimalna kwota Darowizny wynosi 1 PLN. Maksymalna kwota nie jest ograniczona.",
        "Darowizny mają charakter nieodwołalny i bezzwrotny. Wpłacone środki przeznaczane są wyłącznie na cele statutowe Związku.",
        "W przypadku płatności online Użytkownik zostanie przekierowany do bezpiecznego formularza płatności obsługiwanego przez Stripe Inc. Administrator nie przechowuje danych kart płatniczych Użytkowników. Przetwarzanie danych płatności odbywa się zgodnie z polityką prywatności Stripe Inc.",
        "Po dokonaniu Darowizny online Użytkownik otrzyma potwierdzenie transakcji na wskazany adres e-mail. Na życzenie Użytkownika Związek wystawi potwierdzenie przyjęcia darowizny dla celów rozliczenia podatkowego.",
        {
          content:
            "Zwrot Darowizny jest możliwy jedynie w wyjątkowych przypadkach, w szczególności gdy:",
          subItems: [
            "wpłata została dokonana omyłkowo (np. podwójnie, na błędną kwotę),",
            "nastąpiło nieuprawnione obciążenie rachunku bankowego.",
          ],
        },
        "Wniosek o zwrot powinien zostać zgłoszony w terminie 14 dni od daty transakcji na adres e-mail Związku, wraz z uzasadnieniem i dowodem wpłaty. Zwrot następuje w ciągu 14 dni roboczych od daty pozytywnego rozpatrzenia wniosku.",
        'Użytkownik może wesprzeć Związek, przekazując 1% podatku dochodowego. Numer KRS Związku oraz szczegółowe instrukcje znajdują się w sekcji „Wesprzyj" w Serwisie.',
      ],
    },
    {
      title: "§ 6. Prawa autorskie i własność intelektualna",
      items: [
        "Wszelkie treści publikowane w Serwisie, w tym teksty, fotografie, grafiki, materiały video, biografie, opracowania historyczne, logotypy oraz układ graficzny i kod źródłowy strony, podlegają ochronie prawa autorskiego i stanowią własność Związku lub podmiotów trzecich, które udzieliły Związkowi odpowiednich licencji.",
        "Użytkownik może korzystać z materiałów dostępnych w Serwisie wyłącznie na użytek prywatny i w celach edukacyjnych, bez prawa do ich kopiowania, modyfikowania, rozpowszechniania lub wykorzystywania komercyjnego bez uprzedniej pisemnej zgody Związku.",
        {
          content: "Dozwolone jest:",
          subItems: [
            "cytowanie fragmentów tekstów w celach edukacyjnych lub informacyjnych, z podaniem źródła (link do Serwisu),",
            "zamieszczanie linków do Serwisu na innych stronach internetowych,",
            'udostępnianie treści za pośrednictwem funkcji „Udostępnij" w mediach społecznościowych.',
          ],
        },
        {
          content: "Zabrania się:",
          subItems: [
            "pobierania, kopiowania lub wykorzystywania fotografii, grafik, filmów lub innych materiałów multimedialnych bez zgody Administratora,",
            "publikowania treści z Serwisu jako własnych lub bez podania źródła,",
            "wykorzystywania materiałów w celach komercyjnych (np. sprzedaż, reklama) bez licencji.",
          ],
        },
        "Naruszenie praw autorskich może skutkować odpowiedzialnością cywilną i karną zgodnie z obowiązującymi przepisami prawa.",
      ],
    },
    {
      title: "§ 7. Udział w wydarzeniach i publikacja wizerunku",
      items: [
        "Podczas wydarzeń organizowanych przez Związek (w tym Rajdów, uroczystości, spotkań) mogą być wykonywane zdjęcia i nagrania video dokumentujące przebieg wydarzenia.",
        "Materiały fotograficzne i filmowe mogą być publikowane w Serwisie, na profilach społecznościowych Związku (Facebook, Instagram, YouTube) oraz w materiałach promocyjno-informacyjnych (plakaty, ulotki, raporty).",
        "Uczestnicząc w wydarzeniu organizowanym przez Związek, Użytkownik wyraża zgodę na utrwalenie swojego wizerunku oraz jego publikację w celach dokumentacyjnych i promocyjnych działalności Związku.",
        "Użytkownik, który nie wyraża zgody na publikację swojego wizerunku, powinien zgłosić to organizatorowi przed lub w trakcie wydarzenia. W takim przypadku organizator dołoży starań, aby wizerunek Użytkownika nie był utrwalany lub został usunięty z publikowanych materiałów.",
        "Użytkownik może w każdej chwili wycofać zgodę na wykorzystanie swojego wizerunku, kontaktując się z Administratorem. W takim przypadku Związek usunie wizerunek Użytkownika z materiałów przyszłych oraz, w miarę możliwości technicznych, z materiałów już opublikowanych.",
      ],
    },
    {
      title: "§ 8. Ochrona danych osobowych",
      items: [
        "Administratorem danych osobowych Użytkowników jest Związek. Szczegółowe informacje dotyczące przetwarzania danych osobowych, w tym celów, podstaw prawnych, okresu przechowywania oraz praw przysługujących osobom, których dane dotyczą, zawarte są w Polityce Prywatności.",
        "Dane osobowe zbierane są wyłącznie w zakresie niezbędnym do realizacji celów, dla których zostały podane (np. zgłoszenie na Rajd, kontakt, przetwarzanie Darowizny).",
        "Użytkownik ma prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz prawo do wniesienia sprzeciwu wobec przetwarzania, a także prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).",
        "Dane osobowe są chronione przed nieuprawnionym dostępem, utratą lub zniszczeniem poprzez stosowanie odpowiednich środków technicznych i organizacyjnych.",
      ],
    },
    {
      title: "§ 9. Odpowiedzialność",
      items: [
        "Administrator dokłada wszelkich starań, aby Serwis działał prawidłowo, bezpiecznie i bez przerw. Niemniej jednak nie gwarantuje nieprzerwanego dostępu do Serwisu oraz braku błędów technicznych.",
        "Administrator zastrzega sobie prawo do czasowego wyłączenia Serwisu lub jego poszczególnych funkcjonalności w celu przeprowadzenia prac konserwacyjnych, aktualizacji lub innych czynności technicznych. O planowanych przerwach Użytkownicy zostaną, w miarę możliwości, poinformowani z odpowiednim wyprzedzeniem.",
        {
          content: "Administrator nie ponosi odpowiedzialności za:",
          subItems: [
            "szkody wynikłe z korzystania lub niemożności korzystania z Serwisu, w tym utratę danych lub zysków,",
            "szkody spowodowane przez działania osób trzecich (np. ataki hakerskie, wirusy), mimo zastosowania odpowiednich zabezpieczeń,",
            "treści zamieszczone przez Użytkowników (np. w formularzach kontaktowych) lub na stronach internetowych podmiotów trzecich linkowanych z Serwisu,",
            "szkody powstałe w wyniku podania przez Użytkownika nieprawdziwych lub niepełnych danych,",
            "nieprawidłowe działanie Serwisu wynikające z przyczyn niezależnych od Administratora (np. awaria sieci teleinformatycznej, dostawcy usług hostingowych).",
          ],
        },
        "W przypadku uczestnictwa w wydarzeniach organizowanych przez Związek odpowiedzialność za bezpieczeństwo uczestników ogranicza się do zachowania należytej staranności przy organizacji wydarzenia. Uczestnicy biorą udział w wydarzeniach na własną odpowiedzialność, z zastrzeżeniem odpowiedzialności za szkody wynikłe z rażącego niedbalstwa lub winy umyślnej organizatora.",
        "Administrator nie ponosi odpowiedzialności za transakcje płatnicze dokonywane za pośrednictwem zewnętrznych operatorów płatności (np. Stripe Inc.). Wszelkie reklamacje dotyczące płatności powinny być kierowane bezpośrednio do operatora płatności.",
      ],
    },
    {
      title: "§ 10. Reklamacje i kontakt",
      items: [
        "Użytkownik ma prawo zgłosić reklamację dotyczącą funkcjonowania Serwisu, nieprawidłowości w przetwarzaniu zgłoszeń lub innych kwestii związanych z korzystaniem z usług Związku.",
        "Reklamacje należy kierować na adres e-mail Związku: ak.debica@gmail.com lub w formie pisemnej na adres: 39-200 Dębica, ul. Rzeszowska 15.",
        {
          content: "Reklamacja powinna zawierać:",
          subItems: [
            "imię, nazwisko i dane kontaktowe Użytkownika,",
            "opis przedmiotu reklamacji,",
            "żądanie Użytkownika,",
            "datę zdarzenia oraz wszelkie dokumenty lub informacje pomocne w rozpatrzeniu reklamacji.",
          ],
        },
        "Administrator rozpatrzy reklamację w terminie do 14 dni roboczych od daty jej otrzymania i powiadomi Użytkownika o wyniku rozpatrzenia drogą mailową lub pisemną.",
        "W przypadku sporu, który nie zostanie rozwiązany polubownie, Użytkownik ma prawo skorzystać z pozasądowych sposobów rozpatrywania sporów (np. mediacja, arbitraż) lub wystąpić na drogę sądową zgodnie z przepisami Kodeksu postępowania cywilnego.",
      ],
    },
    {
      title: "§ 11. Postanowienia końcowe",
      items: [
        "Niniejszy Regulamin wchodzi w życie z dniem publikacji w Serwisie.",
        {
          content:
            "W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy prawa polskiego, w szczególności:",
          subItems: [
            "ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny,",
            "ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną,",
            "ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych,",
            "RODO oraz inne przepisy dotyczące ochrony danych osobowych.",
          ],
        },
        "Administrator zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Zmiany mogą być wprowadzane w szczególności z uwagi na rozwój funkcjonalności Serwisu, zmiany przepisów prawa lub z innych ważnych przyczyn organizacyjnych.",
        "Wszelkie pytania, uwagi i sugestie dotyczące Serwisu oraz niniejszego Regulaminu można kierować na adres: ak.debica@gmail.com.",
        "Regulamin jest dostępny bezpłatnie w Serwisie oraz może być zapisany lub wydrukowany przez Użytkownika w dowolnym momencie.",
      ],
    },
  ],
  lastUpdated: "22 marca 2026",
};
