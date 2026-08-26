---
published: false
---
#diplomka #thesis #activityWatch 
Useful links:
- [Pravidla pre pisanie prace](https://www.fi.muni.cz/files/studijni/pravidla-a-doporuceni-pro-bp-a-dp-na-fi-mu-jaro-2025.pdf)
- [Harmonogram](https://www.fi.muni.cz/studies/master/dates.html)
- ![[Pasted image 20250519182541.png]]
- 




> **Zadanie**
	`V rámci práce navrhněte , které lze získat o aktivitě uživatelů na počítači a analyzujte, zda je možné je získat po technické i etické stránce. Dále proveďte rešerši existujících aplikací umožňujících sběr těchto dat. Poté, ve spolupráci se sociálními vědci, analyzujte požadavky na aplikaci umožňující sledování aktivity uživatelů na počítači pro projekt Excelentní výzkum v oblasti digitálních technologií a wellbeingu. Využijte zdrojové kódy z volně dostupné aplikace ActivityWatch, které na základě požadavků upravte tak, aby se zabezpečeně sbírala data na fakultní server. V rámci práce budou přidány nové funkcionality (měřená data) pro operační systémy Windows, Unix/Linux a MacOS. Jedná se například o programy na popředí a pozadí, otevřené karty v prohlížeči, aktivitu klávesnice a myši, přehrávání medií atp. Dále bude v rámci práce provedeno testování, na jehož základě dojde k úpravě aplikace tak, aby byla připravena pro ostrý sběr dat v rámci výzkumu.`

# Komentár k osnove
> 2025-05-05
```
Moc nerozumím té struktuře na začátku. Nedává smysl dát rešerši podobných aplikací a asi i původní stav AW zvlášť?

A na to navázat analýzou?

Otázka, jestli pak nespojit Analýzu a návrh. Databázi a ERD bych dal taky do analýzy a návrhu.
```

# Osnova

- Úvod 
	- [x] Napisat uvod
- Rešerš podobných aplikácií schopných zberu užívateľských dát
	- [x] Ísť na [github](https://github.com/ActivityWatch/activitywatch/?tab=readme-ov-file#is-this-yet-another-time-tracker) a spísať o každom zo zmienených zberačov iba dve veci:
		- Opísať čo to je, na čo to bolo určené
- Pôvodný stav AW
	- Štruktúra repozitáru ActivityWatch
		- [x] Prepísať adresárovú štruktúru
		- [x] Opísať zapojenie submodules
	- Kompatibilita ActivityWatch (Cross platform)
		- [x] Opísať akým spôsobom zabezpečuje ActivityWatch cross platform funkcionalitu, ukázať príklad v kóde, opísať rôzne prístupy na rôznych platformách. Opísať že sa nejedná o 100% cross platform lebo ak sa niečo nedá na jednej z nich ale na ostatných áno tak AW to bude podporovať s tým že na jednej platforme to  bude rozbité
- Analýza a návrh
	- Analýza zbierateľných dát o užívateľoch
		- Technická stránka
			- [ ] Opísať ako fungujú funkcie ktoré zodpovedajú za zber dáta, možno spomenúť knižnice ktoré boli použité
		- Etická stránka
			- [x] Opísať ako sa okliešťovali dáta aby vyhovovali GDPR
	- Functional requirements
		- Use case analýza
			- [ ] Spísať ako sa bude so systémom interagovať, možno nakresliť jeden use case diagram vo Figme alebo pomocou Excalidraw
			- Rozdelený na troch užívateľov
				- Koncový užívatelia:
					- Exportovať dáta v prípade zlyhanie serveru
					- Overiť správne zapojenie
					- Rozbehať
				- Administrátor
					- Overiť status
					- 
	- Non-functional requirements
		- [ ] Spísať požiadavky na systém: rýchlosť, množstvo dát za sekundu, šifrovanie komunikácie atď
			- 
	- Dáta
		- Frekvencia zberu
			- 
		- Typy zbieraných dát
	- Databáza
		- ERD diagram
		- [ ] Vytvoriť ERD diagram
	- Infraštruktúra
		- API
		- Zabezpečenie dátového prenosu
		- Ukladanie dát, databázová schéma
- Implementácia
	- Technológie
		- Výpis použitých technológií, ich odôvodnenie
	- Projektová štruktúra
	- Autentifikácia
	- Server
	- Prihlasovacia stránka užívateľov
		- Prihlasovací proces
- Testovanie
	- Dodatočné úpravy aplikácie
- Conclusion
# Workflow
- urobis workflow, ku kazdemu tomu bodu priradis poziadavku ktora sa tam riesila
- vypiseme si poziadavky
	- ze aby to slo na windows
	- aby to bezalo na fakultnom serveri zber dat
	- aby sa zbierali nejake konkretne data -> odkazat sa na tabulku
		- Windows stav monitoru mal by neni, pretoze ....
	- changed the data collection frequency from event based to period based
	-  URL redaction
	- Upravit Frontend pre koncoveho uzivatela
	- Radctnut export dat
	- Úprava windows inštalátoru, jazyk, vzhľad, preklik
- Vypiseme si aky bol workflow:
	- Stiahneme si activityWatch a spustit
	- Pridanie/revizia watcherov na zaklade poziadaviek
	- Vyrobenie inštalátoru na windows
	- Vyrobenie serveru ktory agreguje data
		- Zabezpecena komunikacia, certifikaty

