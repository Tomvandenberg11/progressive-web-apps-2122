# Project OBA

Welkom bij mijn project van [Progressive Web Apps](https://github.com/cmda-minor-web/web-app-from-scratch-2122 "Minor link"). Bij dit project van de Minor 'Webdesign and development' is het de bedoeling dat we een single page app gaan maken. Dit is met behulp van de OBA API.

De website is [hier](https://tomvandenberg11.github.io/oba-ondernemen/ "OBA Ondernemen") te zien.

![Screenshot](static/images/screenshot.png)

## Inhoudsopgave

- [User Story](#user-story)
- [Activity Diagram](#activity-diagram)
- [Hoe te gebruiken?](#hoe-te-gebruiken)
- [Installatie](#installatie)
- [API](#api)
- [To do](#to-do)
- [Licence](#licence)
- [Credits](#credits)

## User Story

> Als jonge ondernemer wil ik meer informatie vinden over het opzetten van een onderneming, om zodoende meer kans te hebben op succes.

## Activity Diagram

![Activity](static/images/activity_oba.png)

## Hoe te gebruiken?

De website is gemaakt om beginnende ondernemers boeken te laten zoeken wat ze bij het ondernemen kan helpen. De gebruiker kan naar schrijver, titel en onderwerp zoeken door middel van de zoekbalk. De resultaten worden gesorteerd op jaartal, zodat nieuwere, relevantere boeken als eerste te zien zijn. Als de gebruiker op het boek klikt gaat de gebruiker naar de detail pagina van het boek, waarbij de gebruiker meer informatie kan lezen en kan doorklikken naar de pagina waarbij de gebruiker kan zien waar het boek beschikbaar is.

## Installatie ⚙️

Om de app lokaal te laten draaien moet het project eerst lokaal worden gecloned.
Als dit stukje code gerunt wordt in de terminal wordt de repository lokaal gecloned:

`gh repo clone tomvandenberg11/oba-ondernemen`

Ga eerst naar de folder waarin je wilt dat het project gecloned wordt. Je kan in de terminal navigeren met `cd` met daar achter de map waar je heen wilt.

Hierna kan het bestand gewoon geopend worden in de browser door dubbel te klikken op de `index.html`.

Soms is het nodig om de app te draaien door middel van een server. Via VS Code kan dit via de live server extension.

## API

Voor dit project heb ik de API van de OBA gebruikt en de API van Open Leermaterialen. Beide API's zijn alleen te gebruiken met een private key. De documentatie voor de API's zijn daarom ook niet openbaar, mede doordat de Open Leermaterialen API nog in de staging fase zit.

## To do

| To do                                                   | Done? |
| :------------------------------------------------------ | :---: |
| Making search work                                      |  ✅   |
| Empty results after search                              |  ✅   |
| Error states                                            |  ✅   |
| Sort results on year                                    |  ✅   |
| Loading images state                                    |  ✅   |
| Implement hashing and routing                           |  ✅   |
| Better styling on single art page                       |  ✅   |
| Link specificeren naar alleen ondernemen en info boeken |  ✅   |
| Number of books via api link ?ps                        |       |
| Fetch andere link naar detail boeken                    |       |
| Results of both API's in the same array                 |       |

## Licence 👨🏻‍⚖️

Dit project is voorzien van een MIT licence. Zie de pagina LICENCE voor meer informatie.

## Credits 📣

Ik wil graag als eerste de docenten bedanken voor al hun inzet, uitleg en lesstof. Ten tweede wil ik mijn supportgroepje bedanken voor de mentale en functionele support. Ten derde wil ik Stackoverflow bedanken voor al hun antwoorden op mijn vragen.
