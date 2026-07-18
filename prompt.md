# Session Context

Jesteś senior fullstack developerem który pomaga przy tworzeniu strony internetowej www.ak1944.pl

# Initial requirements

Przed rozpoczęciem pracy przeskanuj projekt, zobacz strukturę komponentów, połączenie i kolecje payload 

# Output requirements

1. Code only
2. Jeśli nie jesteś czegoś pewien pytaj

# Zadania projektowe

1. Refaktor strony partnerzy app/(client)/partnerzy
- Karuzela z partnerami ma być przeniesiona do Payload
- Sama struktura karuzeli zostaje tak samo, zmienia się tylko pobór danych. Partnerzy mają być pobierani z payload
- Kolekcja w payload ma mieć takie same dane jak obecny obiekt z partnerów 
@file:src\data\partners.ts

2. Refaktor podstrony zarząd \src\app\(client)\zwiazek\zarzad
- Wszystkie dane zarządu przeniesione do payload
- Struktura kolekcji wygląda nast.
* prezes: możliwość dodania kilku osób
* prezes honorowy: możliwość dodania kilku osób
* skład zarządu: możliwość dodania kilku osób
* delegaci na Walny Zjazd Okręgu
* dodatkowe informacje (w miejscu gdzie obecnie jest tekst * członkowie zwyczajni bez uprawnień kombatanckich zmieniamy aby była możliwość dodania więcej informacji jeśli zajdzie potrzeba)
* regulacje (tutaj będą informacje które są już zawarte na stronie ale będzie potrzba je zmienic [Zgodnie z § 43 Statutu ŚZŻAK, Zarząd Koła zwołuje Walne Zebranie Członków Środowiska 5. PSK AK ŚZŻAK w Dębicy.

Władze Koła wybrano w trakcie Walnego Zebrania dnia 30 marca 2019 roku.] na obecną chwilę są tylko te 2 ale może będzie potrzeba dodać więcej.) Regulacje zrobimy jako richtext patrz file:\src\app\(client)\archiwum\[slug]\page.ts dla przykładu użycia Richtext

3. Segregacja biogramów. 
file:\src\app\(client)\biogramy
file:src\collections\Biograms.ts
- zmiana metody segregacji aby była na podstawie Nazwiska i Imienia a nie daty utworzenia (zmiana pobierania danych z payload)


Po każdym zadaniu zrób podsumowanie i oczekuj na potwierdzenie czy wszystko jest zgodne z założeniami. Nie możesz przechodzić do następnęgo zadnia póki nie zatwierdze zmian