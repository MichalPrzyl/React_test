Funkcja strzałkowa nie tworzy własnego this.
Jak nie ma nawiasów klamrowych to trzeba samemu ręcznie coś zwrócić w funkcji

map zwraca nową tablicę
forEach wykonuje coś na elementach tablicy, ale nie musi nic zwracać

Dzięki użyciu znaku GRAVIS (znak pod escapem, na tym samym klawiszu co ESC) mamy możliwość wrzucenia do stringa `${nazwa_zmiennej}`.

# tablice #

### join() ###
zmienia tablice na stringa i dodaje do każdego elementu to co jest parametrem
```
const arr = ["michal", "mateusz"]
const newArr = arr.join(" ");
//newArr: "michal mateusz "
```

### concat() ###
łączy tablicę z innym elementem i zwraca nową tablicę
```
const users = ["michal", "mateusz", "marek"];
const allUsers = users.concat("przemyslaw");
//stworzona zostanie nowa tablica allUsers z Przemyslawem na koncu
```
### spread () ###
```
const users = ["adam", "bogdan", "czarek", "darek"];
const allUsers = [...users, "edyta"];
//tworzy nowa tablice ["adam", "bogdan", "czarek", "darek", "edyta"];

```

### map() ###
map tworzy nową tablicę
```
const users = ["adam", "bogdan", "czarek", "darek"];
    const usersFirstLetterUpperCase = users.map(zmienna => {
        return zmienna[2].toUpperCase();
        });
```

### forEach ###
```
array_name.forEach(element => console.log(element));
users.forEach((element, index) => console.log(index + ": " + element));
users.forEach((element, index, array) => console.log(index + ": " + element));
```

### filter() ###
To co sie dzieje w funkcji strzałkowej to zwrócenie true lub false (lub konwersja na true lub false). Jeśli warunek zwróci true to element zostanie dodany do nowej tablicy. Standardowo jeśli nie użyjesz nawiasów klamrowych to musisz samemu napisać return, np.: 
```
const NameWithLetterK = users.filter((user) =>{
	return(
		user.indexOf("k") > -1
	)
})
```
```
const users = ["adam", "bogdan", "czarek", "darek"];
const NameWith6Letter = users.filter(user => user.length ===6)
```

### findIndex() ###
```
const customers = [
	{name: "Adam", age: 67},
	{name: "Basia", age: 27},
	{name: "Marta", age: 17},
];

const isUserAdult = customers.findIndex(customer => customer.age < 18);
console.log(isUserAdult); // zwróci nam index elementu który spełnia warunek, czyli w tym przypadku będzie to index 2.
```

### find() ###
Działa tak samo jak findIndex(), ale zamiast indeksu pierwszego elementu, który spełni warunek, zwróci cały element.

### Operatory logiczne ###
```
{wyrażenie && <button>Przycisk</button>}
```
Jeśli wyrażenie po lewej zwróci false to zostanie zwrócone wyrażenie z lewej (w tym przypadku to będzie false, ponieważ taki wynik zwraca to wyrażenie). Jeśli warunek po lewej zwróci true to z całości zostanie zwrócony element po prawej.
