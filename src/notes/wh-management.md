- [x] inventura 
> záložka, která zobrazí 3 části umístění pro vybraný produkt:
    - v Category managementu
    - Lokaci
    - WMS lokaci
    Na tvém příkladu bych měl vidět třeba Femibion 3, kde se nachází v Category managementu (ne/ano-1lokace), případně v nějaké lokaci (ne/ano-1lokace), nebo WMS lokaci (ne/ano-neomezený počet -> potřeba zobrazit všechny).
// For every product we have
// List its:
// - warehouse location
// - storage location
// - storefront location
Prve riesenie:
zobrat vsetky produkty, --> kktina, v podstate manualne robit joiny ako kkt
v2:
rozsirit mapped product o storage stock a warehouse location a storeFront location

> --> problem: Stock nevlastni storefront lokaciu v ziadnom formate, iba ako foreign key to id
# *Ako dostat do Stocku lokaciu*

v3:
skonsolidovat tri lokacne tabulky do jedneho view
-> nefunguje pretoze Stock 



- [ ] generovanie stitkov
- [ ] V sekci příjem zobrazovat poslední 3 lokace pro kontrolu a přehlednost
- [ ] Tlač štítku a veľkost krabice spojiť v jednej tabuľke
- [ ] Zmenit rozlozenie skladu C


==========================
- [x] po nacitani produktu vypnut sken na 5 sekund 
----> zmenit cooldown priamo na skeneri
- [x] logika malych produktov
