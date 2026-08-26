# Zjednotenie entit

- D MappedProductBase.java
- M Product.java          
- D ProductBase.java      
- M ProductPreview.java   
- D RawProduct.java       
- D RawProductPreview.java

D MappedProductBase.java
- rovno do piče, mappingy presunuté do Product

M Product.java          
- ostáva, pridané všetky atribúty a mappingy

D ProductBase.java      
- odstránený, spôsobí duplikáciu atribútov medzi ProductPreview a Product

M ProductPreview.java   
- ostáva bez zmeny
- všetky polia zdieľané s Product zmazať. Stĺpec id premenovať vo view na productId, výslednú tabuľku cez @OneToOne mapping pripnúť na tabuľku Product (? je možné lazy fetchovať keď je to oneToOne ) 

D RawProduct.java       
- nahradnie za Product je free, pretože sa žiaden výskyt nemohol dotknúť polí, ktoré by spôsobovali n+1 problém

D RawProductPreview.java
- tiež free keď nahradené ProductPreview

## Prečo vôbec treba mapper? 
  Pretože máme blbé fields niekedy, v databáze napríklad images sú ako string deliminated ';' 
## Bolo by treba mapper ak by boli tieto fields v poriadku? 
  Asi nie? možno by vtedy stačilo mať DTO, ktoré by napríklad chcelo obrázky. Keďže obrázky sú v inej tabuľky tak toto DTO by malo špecifikovať tento Mapping??? -> DTO by určite nemalo špecifikovať mapping. Keď DTO chce zoznam obrázkov tak malo chcieť List<String>

# Úloha
-> vyrobiť tabuľku na obrázky, presunúť do nej obrázky, pridať OneToMany mapping, pozrieť či serializácia vyzerá rovnako ako pôvodná 
## podarilo sa
vytvoril som tabulku, pridal field images, spravil mapping, normalne to tam hadze teraz obrázky, s tým že mapper zaručí že poradie obrázkov je podľa priradeného order_indexu a tiež sploští zoznam objektov ProductImage na zoznam linkov, tak ako to bolo predtým

## Ako vyriešiť Mapping na ProductPreview?
Zatiaľ som osekal ProductPreview o všetky atribúty ktoré sú v produkte, ProductPreview atribút na Producte premenoval na ComputedAttributes a loadím ho ako OneToOne. 
Ako pokračovať:
1. Presunúť všetky atribúty Productu naspäť do ProductPreview a dať Produkt entite source tabuľku ProductPreview.
  Nevýhoda je že všetky Joiny ktoré robí ProductPreview sa budú vykonávať úplne vždy keď sa bude ťahať z Produktu čokoľvek.
  -> Ťažko si predstaviť že by sme s týmto riešením boli OK
2. Bytecode enhancement plugin aby sme tento mapping mohli loadiť Lazy.
  Úprimne nechápem prečo sa ten Mapping nedá normálne nastaviť ako Lazy. Resp. napísať to tam môžem ale robí to kokot.
3. Nastaviť Mapping ako OneToMany. Unclear. Tomáš možno bude vedieť viac.
4. ??? 

# Výmena ID a PDK
1. funkcia na zmenu ID teraz mení PDK
2. funkcie createProduct, copyProduct nebudú brať nové ID ako argument. ID bude generované v databáze (AUTO-INCREMENT od najväčšieho ID v db). 
TODO: field na zmenu PDK v administrácii
3. Lekis Import používa lekisCode na párovanie. Zmeny okolo ID sa tejto funkcionality nedotknú.
4. Heureka import zmenený z ID na PDK.
5. Existujú dalšie endpointy?


# Dalšie vylepšenia a nápady
1. Stavy objednávky s jednotivými krokmi zobrazovať podobne ako CI/CD na githube keď sa pushnú zmeny
2. Vytvoriť novú anotáciu na Product entite s názvom @DoNotCopy ktorá by sa dala nad všetky fields ktoré sa majú ignorovovať v rámci copy metódy na Produkte.
3. Kopírovanie Mappnutých attribútov (Translations atď), by sa malo vykonávať spôsobom že v danej tabuľke sa vytvorí nový riadok a jeho ID sa nastaví na ID produktu. Nič viac, žiadne dalšie manuálne kopírovanie atribútov. 

> Query about DTOs: 
yo chief, What is the structure for when I have a entity (spring java), and I have a DTO. Let's say the entity holds a @OneToMany mapping to a table of images. If I want those images in the DTO, does the DTO needs to specify the mapping as well? Like let's say the entity has many more expensive mappings but the DTO wants just a single one, so it should be a lot cheaper. How do I go from having such DTO and entity to having a response from my database? Like it seems weird to me that the DTO would need to know about internal structure of the DB but I don't know how else to go from entity to DTO? When doing a repository query, which can be used to specify only certain columns, like if DTO is a subset of entity I can tell the query to fill only the DTO attributes and therefore it will skip some columns right? So then should I query the repository using the DTO or by quering by entity itself??

> Second query: let's say i want just the data right, no persisting changes. And the DTO wants List<Image> images; but the entity has @OneToMany List<Images> images; If I query directly into DTO, how will the DB know that images are a different table? I mean the mapping is declared only on the Entity. Doesn't that mean that I have to use mapstruct Mapper, pull entire Entity lazily, and map the fields I want? There is no other way I think
