- GPS - doplnovanie modulu pripadne niekedy neskor
- Aktivita klavesnice a mysi, prezriet modul v ktorom sa nachadzaju
- V pripade ze sa ID nezada, tak sa pouzije MAC adresa alebo podobny 
- Nahravat WIFI a CPU

# Databáza 
**Schéma**: 
	- USER_ID
	- MAC_ADDRESS
	- TIMESTAMP
	- WIFI_NAME
	- BATTERY_PERCENTAGE
	- BATTERY_STATUS
	- FOCUSED_APP
	- RUNNING_APPS
	- SECONDS_SINCE_LAST_INPUT
	- LAST_INPUT_SOURCE
# Running todolist
- [x] AFK status should record time since last input
	- [x] Also record if last input came from keyboard or mouse
- [x] Current wifi network should be recorded
- [x] Current CPU usage should be recorded
- [x] MAC address of the device should be used if ID is not supplied
- [x] ID ulozit do kodu a pri kazdom odosielani sa pokusit ID getnúť ak stále nie je nastavená
- [x] Otestovať či schedule library spúšťa odosielaciu funkciu každú hodinu
- [x] Treba to dat na windows lebo inde to nebeží
	- [x] Uistiť že sa to zbuildí a výsledné .exe sa spustí
- [x] Upravit URL v klientovi aby smerovalo na local docker deploy
- [x] Naklonovať a spustiť docker na windowse
- [x] Napísal som email na Stratus s požiadavkou o pomoc pri nasadení stroja
- [x] Otestovať collector.py štýlom že nastavím odosielanie dát na malý časový úsek a nahradím requesty tak aby som vedel otestovať správnu tvorbu requestov. Request si vypíšem namiesto toho aby sa vykonal. 
- [x] Anonymizácia - ani netuším kde by som začal s týmto
	- [x] Turns out its not my problem
- [x] Frontend zmeny
	- [x] Still need to fix timestamp
	- [x] Editácia zadaného ID
	- [x] Zobrazenie momentálneho ID
	- [x] Zobrazenie info o poslednom poslanom logu
			- Collector.py pridáva posledný čas odoslania dát do Settings z aw-server. To by malo znamenať že z frontendu už len stačí zavolať endpoint `/settings/most_recent_timestamp`
- [x] Zahrnutie prehliadačových dát
	- [x] Modifikácia dátového modelu
	- [x] Pridanie dát do odosielaných
- [ ] BugFix - data za 2 sekundy ked sa maju posielat kazdu 1s
- [ ] BugFix - obrazovka on/off skúsiť opraviť ??? Povedal som im že to proste nie je možné asi im nedošlo čo kurva myslím
- [ ] Notifikácie
- [ ] Zaznamenávať momentálne prehrávané médium
![[Pasted image 20241208195836.png]]
## Co najviac blbuvzdorny

## Ako sa dostat na stratos VM

1. Prihlasit sa na aisu
2. Pouzit commad `aw-wm`

