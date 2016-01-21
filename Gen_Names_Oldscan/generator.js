function Generate()
{
	prefixes = new Array();
	maleSuffixes = new Array();
	femaleSuffixes = new Array();
	
	function AddPrefix(prefix)
	{
		prefixes[prefixes.length] = prefix; //Добавить префикс
		return;
	}
	function AddMaleSuffix(suffix)
	{
		maleSuffixes[maleSuffixes.length] = suffix; //Добавить суффикс
		return;
	}

	function AddFemaleSuffix(suffix)
	{
		femaleSuffixes[femaleSuffixes.length] = suffix; //Добавить суффикс
		return;
	}
	
	AddPrefix("А");
	AddPrefix("Аб");
	AddPrefix("Аг");
	AddPrefix("Ад");
	AddPrefix("Адаль");
	AddPrefix("Аль");
	AddPrefix("Альв");
	AddPrefix("Альм");
	AddPrefix("Ан");
	AddPrefix("Арин");
	AddPrefix("Арн");
	AddPrefix("Ас");
	AddPrefix("Ау");
	AddPrefix("Ауд");
	AddPrefix("Барк");
	AddPrefix("Берг");
	AddPrefix("Берн");
	AddPrefix("Бёд");
	AddPrefix("Бла");
	AddPrefix("Борг");
	AddPrefix("Бот");
	AddPrefix("Бранд");
	AddPrefix("Брёнд");
	AddPrefix("Брун");
	AddPrefix("Брунн");
	AddPrefix("Брюн");
	AddPrefix("Брюнь");
	AddPrefix("Бьёр");
	AddPrefix("Бьёрг");
	AddPrefix("Бьёрн");
	AddPrefix("Бьярн");
	AddPrefix("Бьярг");
	AddPrefix("Бьярт");
	AddPrefix("Бю");
	AddPrefix("О");
	AddPrefix("Ос");
	AddPrefix("Эг");
	AddPrefix("Эд");
	AddPrefix("Эль");
	AddPrefix("Эн");
	AddPrefix("Эрин");
	AddPrefix("Эрн");
	AddPrefix("Эс");
		
	AddMaleSuffix("альд");
	AddMaleSuffix("ар");
	AddMaleSuffix("аринн");
	AddMaleSuffix("би");
	AddMaleSuffix("бе");
	AddMaleSuffix("берт");
	AddMaleSuffix("бранд");
	AddMaleSuffix("бьёрн");
	AddMaleSuffix("бьорн");
	AddMaleSuffix("вальд");
	AddMaleSuffix("вальди");
	AddMaleSuffix("вард");
	AddMaleSuffix("вид");
	AddMaleSuffix("вин");
	AddMaleSuffix("винд");
	AddMaleSuffix("вини");
	AddMaleSuffix("гаут");
	AddMaleSuffix("гейр");
	AddMaleSuffix("гильс");
	AddMaleSuffix("гисль");
	AddMaleSuffix("гот");
	AddMaleSuffix("грим");
	AddMaleSuffix("гут");
	AddMaleSuffix("дор");
	AddMaleSuffix("дьярв");
	AddMaleSuffix("е");
	AddMaleSuffix("и");
	AddMaleSuffix("ин");
	AddMaleSuffix("исль");
	AddMaleSuffix("кари");
	AddMaleSuffix("кель");
	AddMaleSuffix("кетиль");
	AddMaleSuffix("ки");
	AddMaleSuffix("киль");
	AddMaleSuffix("лав");
	AddMaleSuffix("лак");
	AddMaleSuffix("лауг");
	AddMaleSuffix("ле");
	AddMaleSuffix("лейв");
	AddMaleSuffix("лейк");
	AddMaleSuffix("ли");
	AddMaleSuffix("льот");
	AddMaleSuffix("мар");
	AddMaleSuffix("мунд");
	AddMaleSuffix("нар");
	AddMaleSuffix("одд");
	AddMaleSuffix("ольв");
	AddMaleSuffix("ор");
	AddMaleSuffix("рад");
	AddMaleSuffix("рек");
	AddMaleSuffix("рёд");
	AddMaleSuffix("рик");
	AddMaleSuffix("свэйн");
	AddMaleSuffix("си");
	AddMaleSuffix("стэйн");
	AddMaleSuffix("тор");
	AddMaleSuffix("тьов");
	AddMaleSuffix("ульв");
	AddMaleSuffix("ун");
	AddMaleSuffix("унд");
	AddMaleSuffix("унди");
	AddMaleSuffix("унн");
	AddMaleSuffix("фаст");
	AddMaleSuffix("финн");
	AddMaleSuffix("фрёд");
	AddMaleSuffix("фрид");
	AddMaleSuffix("халль");
	AddMaleSuffix("хёвди");
	AddMaleSuffix("юльв");
	AddMaleSuffix("яр");
	
	AddFemaleSuffix("а");
	AddFemaleSuffix("бёрг");
	AddFemaleSuffix("борг");
	AddFemaleSuffix("бьёрг");
	AddFemaleSuffix("герд");
	AddFemaleSuffix("герда");
	AddFemaleSuffix("герт");
	AddFemaleSuffix("гун");
	AddFemaleSuffix("гунн");
	AddFemaleSuffix("дис");
	AddFemaleSuffix("ей");
	AddFemaleSuffix("ейд");
	AddFemaleSuffix("ельв");
	AddFemaleSuffix("катла");
	AddFemaleSuffix("лауг");
	AddFemaleSuffix("лейв");
	AddFemaleSuffix("лёв");
	AddFemaleSuffix("лёг");
	AddFemaleSuffix("льот");
	AddFemaleSuffix("ню");
	AddFemaleSuffix("ора");
	AddFemaleSuffix("рун");
	AddFemaleSuffix("та");
	AddFemaleSuffix("тора");
	AddFemaleSuffix("трид");
	AddFemaleSuffix("труд");
	AddFemaleSuffix("унна");
	AddFemaleSuffix("фаста");
	AddFemaleSuffix("фрид");
	AddFemaleSuffix("хейд");
	AddFemaleSuffix("хельга");
	AddFemaleSuffix("хильд");
	AddFemaleSuffix("хильда");
	
	gender = document.getElementById("gender");
	count = document.getElementById("count");
	
	switch (count.selectedIndex)
	{
		case 0:
			j = 1;
			break;
		case 1:
			j = 5;
			break;
		case 2:
			j = 10;
			break;
		case 3:
			j = 20
			break;
	}
	for (i = 0; i < j; i++)
	{
		genPref = prefixes[Math.floor(Math.random() * prefixes.length)];
		if (gender.selectedIndex == 0)
		{
			genSuf = maleSuffixes[Math.floor(Math.random() * maleSuffixes.length)];
		}
		else
		{
			genSuf = femaleSuffixes[Math.floor(Math.random() * femaleSuffixes.length)];
		}
		
		
		/*if (genPref.charAt(genPref.length-1) == "n" && genSuf.charAt(0) == "s")
		{
			genPref.charAt(genPref.length-1) = "s";
		}*/
		
		if (i == 0)
		{
			document.getElementById("result").innerHTML = genPref + genSuf;
		}
		else
		{
			document.getElementById("result").innerHTML += "<br/>" + genPref + genSuf;
		}
	}

	return;
}


