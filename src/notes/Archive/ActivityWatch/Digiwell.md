#activityWatch 
- Specifikovat casovy interval zberu dat
- Otestovat posielanie dát na server
	- `aw-server` + `aw-core` rozbehnúť na serveri, config pre používateľov nasmerovať na tento server
- Vypnut frontend 
	- `--no-gui` option when running `aw-qt` (`aw-qt` is a recommended way to start up ActivityWatch)
- Pozriet ako sa vyraduju moduly zo default instalacie
	- Dve variácie:
				- Užívatelia![[Pasted image 20240531132831.png]]
			- Server![[Pasted image 20240531132910.png]]
- Pripravit si server na Stratuse
	- Najprv vyriešit supply certifikátu
		- `client.py -> __post -> headers` Add certificate


> - Orezat title z aw-watcher-window
> -  Create bundles for client and server
> - Napisat kod pre Watchers

Úprava dát aby boli zbierané po sekunde,  momentálne sú dáta zbierané štýlom aktivita:duration, my skôr chceme sekunda: zoznam aktivít, sekunda:zoznam aktivít

Pozrieť do dokumentácie ako zmeniť underlying databázu

Tomáš Kratochvíl šiel na konferenciu do Granady

![[Pasted image 20240709205127.png]]![[Pasted image 20240914163312.png]]

# Database
User: aw_admin
Password: heslo123
Database name: aw_preflight

