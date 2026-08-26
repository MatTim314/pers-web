

![[Vychystávací mód (picker mode) 2025-05-12 19.34.38.excalidraw]]


# Picker mode UI
#  Remaining tasks
- [ ] Opravit překlepy v názvech lokací; pro české překlady používat např. DeepL.
- [ ] Přidat mezeru mezi tlačítka přihlášení pickerů; na picker-stránku dát heslo `1999`.
- [ ] U většího počtu uživatelů zobrazit stejně velké dlaždice a chybějící nadpis.
- [ ] Umožnit uživateli zvolit/měnit vlastní PIN; při mazání vyžadovat potvrzení; po přidání picker ihned zobrazit.
- [ ] Sekci „Podpora“ přesunout na 3. místo v pořadí.
- [ ] V poli pro PIN zobrazit numerickou klávesnici (jako Windows Hello).
- [ ] Přidat dlaždici výběru režimu: „Picker mód“ nebo „Packer mód“.
- [ ] Podpora čteček kódů místo kamery; tlačítko „SEND QR CODE“ přejmenovat nebo odstranit.
- [ ] V přehledu zobrazit: „Počet vychystaných objednávek“ a „Počet zabalených objednávek“.
- [ ] V detailu produktu:
  - druhý řádek s vedlejším názvem
  - větší písmo
  - celé jméno picker/packer
  - počet ve formátu „10x“
  - lokaci zvětšit a tučně; barva modrá (v boxech) / červená (oficína)
- [ ] Označování lokací:
  - produkty s lokací neskenovat, pouze ty bez lokace
  - čtečka kódů místo kamery
  - tlačítka „Dokončit“ (zelené) a „Přeskočit“ (oranžové)
  - checkbox „křehké“ u produktu; symbol křehkého zboží v Packer módu
- [ ] Levý panel: počty objednávek ve stavech
  - Pickování – čekající/zaplacené
  - Packování – vypickované, nezabalené
  - Komplet – zabalené, neodeslané

### Links
- https://barcode-maker.com/en/Ean13


Section:
- Stats about picked order, total time, ?list of already picked orders
- Current order with ordered products list
- Window for showing camera feed, active only when picking order, inactive for one second after successfully scanning a barcode
- ![[Pasted image 20250515144529.png|616x277]]
- 5901234123457


# Solving the missing EAN in orderdProducts on Order type
## ideas
1. Add EAN to the OrderedProduct type in OrdersService
	- Fucks everything up most likely
2. Use `products/all` endpoint on `CatalogueService` instead with filters for only EAN.
