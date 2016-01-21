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
	
	AddPrefix("Ад");
	AddPrefix("Адал");
	AddPrefix("Адел");
	AddPrefix("Алд");
	AddPrefix("Алк");
	AddPrefix("Алф");
	AddPrefix("Алх");
	AddPrefix("Бад");
	AddPrefix("Бада");
	AddPrefix("Баде");
	AddPrefix("Бадо");
	AddPrefix("Баду");
	AddPrefix("Бал");
	AddPrefix("Балд");
	AddPrefix("Балт");
	AddPrefix("Беарн");
	AddPrefix("Беор");
	AddPrefix("Беорн");
	AddPrefix("Беорт");
	AddPrefix("Беорхт");
	AddPrefix("Беркт");
	AddPrefix("Берн");
	AddPrefix("Берт");
	AddPrefix("Билл");
	AddPrefix("Бирн");
	AddPrefix("Бирт");
	AddPrefix("Бирхт");
	AddPrefix("Болд");
	AddPrefix("Бот");
	AddPrefix("Бре");
	AddPrefix("Брего");
	AddPrefix("Брект");
	AddPrefix("Брик");
	AddPrefix("Брикт");
	AddPrefix("Брит");
	AddPrefix("Брихт");
	AddPrefix("Брун");
	AddPrefix("Брюхт");
	AddPrefix("Бур");
	AddPrefix("Бург");
	AddPrefix("Бурх");
	AddPrefix("Бюрн");
	AddPrefix("Бюрхт");
	AddPrefix("Валд");
	AddPrefix("Вар");
	AddPrefix("Веалд");
	AddPrefix("Вер");
	AddPrefix("Вере");
	AddPrefix("Ви");
	AddPrefix("Вил");
	AddPrefix("Вилли");
	AddPrefix("Вин");
	AddPrefix("Вулф");
	AddPrefix("Вюн");
	AddPrefix("Год");
	AddPrefix("Годе");
	AddPrefix("Голд");
	AddPrefix("Гут");
	AddPrefix("Деалл");
	AddPrefix("Ден");
	AddPrefix("Деор");
	AddPrefix("Дер");
	AddPrefix("Диар");
	AddPrefix("Диор");
	AddPrefix("Дир");
	AddPrefix("Дрихт");
	AddPrefix("Дрюхт");
	AddPrefix("Дун");
	AddPrefix("Квен");
	AddPrefix("Квик");
	AddPrefix("Кел");
	AddPrefix("Кен");
	AddPrefix("Кеол");
	AddPrefix("Кён");
	AddPrefix("Кин");
	AddPrefix("Кон");
	AddPrefix("Кул");
	AddPrefix("Кут");
	AddPrefix("Кюн");
	AddPrefix("Кюне");
	AddPrefix("Лев");
	AddPrefix("Лед");
	AddPrefix("Лео");
	AddPrefix("Леов");
	AddPrefix("Леод");
	AddPrefix("Леоф");
	AddPrefix("Леф");
	AddPrefix("Лио");
	AddPrefix("Лиоф");
	AddPrefix("Люф");
	AddPrefix("Ман");
	AddPrefix("Меген");
	AddPrefix("Милд");
	AddPrefix("Мюл");
	AddPrefix("Нот");
	AddPrefix("Норт");
	AddPrefix("Оз");
	AddPrefix("Орд");
	AddPrefix("Орт");
	AddPrefix("Ос");
	AddPrefix("Плей");
	AddPrefix("Ранд");
	AddPrefix("Ред");
	AddPrefix("Ронд");
	AddPrefix("Са");
	AddPrefix("Сакс");
	AddPrefix("Свет");
	AddPrefix("Свид");
	AddPrefix("Свит");
	AddPrefix("Се");
	AddPrefix("Сеакс");
	AddPrefix("Секс");
	AddPrefix("Си");
	AddPrefix("Сийе");
	AddPrefix("Сийи");
	AddPrefix("Сикс");
	AddPrefix("Стан");
	AddPrefix("Суне");
	AddPrefix("Тат");
	AddPrefix("Тед");
	AddPrefix("Тео");
	AddPrefix("Теод");
	AddPrefix("Тид");
	AddPrefix("Тил");
	AddPrefix("Тит");
	AddPrefix("Торхт");
	AddPrefix("Трум");
	AddPrefix("Ту");
	AddPrefix("Тун");
	AddPrefix("Тур");
	AddPrefix("Туре");
	AddPrefix("Ухт");
	AddPrefix("Фреде");
	AddPrefix("Фреоде");
	AddPrefix("Фреодо");
	AddPrefix("Фреоду");
	AddPrefix("Фреот");
	AddPrefix("Фриде");
	AddPrefix("Фридо");
	AddPrefix("Фриду");
	AddPrefix("Фриодо");
	AddPrefix("Фрит");
	AddPrefix("Фрюде");
	AddPrefix("Хар");
	AddPrefix("Хард");
	AddPrefix("Хвит");
	AddPrefix("Хеа");
	AddPrefix("Хеард");
	AddPrefix("Хеах");
	AddPrefix("Хере");
	AddPrefix("Хех");
	AddPrefix("Хи");
	AddPrefix("Хилд");
	AddPrefix("Хилде");
	AddPrefix("Хрод");
	AddPrefix("Хун");
	AddPrefix("Хю");
	AddPrefix("Хюйе");
	AddPrefix("Эад");
	AddPrefix("Эалд");
	AddPrefix("Эалх");
	AddPrefix("Эг");
	AddPrefix("Эгг");
	AddPrefix("Эд");
	AddPrefix("Эдд");
	AddPrefix("Эдел");
	AddPrefix("Эдил");
	AddPrefix("Эл");
	AddPrefix("Элф");
	AddPrefix("Эормен");
	AddPrefix("Эорп");
	AddPrefix("Эрмен");
	AddPrefix("Эрн");
	AddPrefix("Эс");
	AddPrefix("Эск");
	AddPrefix("Этэл");
		
	AddMaleSuffix("балд");
	AddMaleSuffix("беалд");
	AddMaleSuffix("беарн");
	AddMaleSuffix("беарт");
	AddMaleSuffix("беархт");
	AddMaleSuffix("беорн");
	AddMaleSuffix("беорхт");
	AddMaleSuffix("берн");
	AddMaleSuffix("берт");
	AddMaleSuffix("берхт");
	AddMaleSuffix("бби");
	AddMaleSuffix("бранд");
	AddMaleSuffix("брехт");
	AddMaleSuffix("брихт");
	AddMaleSuffix("брорд");
	AddMaleSuffix("брюхт");
	AddMaleSuffix("бюрхт");
	AddMaleSuffix("валд");
	AddMaleSuffix("валх");
	AddMaleSuffix("вард");
	AddMaleSuffix("веалд");
	AddMaleSuffix("веалх");
	AddMaleSuffix("веард");
	AddMaleSuffix("верд");
	AddMaleSuffix("ви");
	AddMaleSuffix("виг");
	AddMaleSuffix("вине");
	AddMaleSuffix("винэ");
	AddMaleSuffix("виу");
	AddMaleSuffix("волд");
	AddMaleSuffix("волф");
	AddMaleSuffix("ворд");
	AddMaleSuffix("вуду");
	AddMaleSuffix("вулф");
	AddMaleSuffix("вэард");
	AddMaleSuffix("вю");
	AddMaleSuffix("гар");
	AddMaleSuffix("гер");
	AddMaleSuffix("гилс");
	AddMaleSuffix("гист");
	AddMaleSuffix("год");
	AddMaleSuffix("ере");
	AddMaleSuffix("инг");
	AddMaleSuffix("йист");
	AddMaleSuffix("йюст");
	AddMaleSuffix("кетел");
	AddMaleSuffix("килд");
	AddMaleSuffix("килт");
	AddMaleSuffix("кител");
	AddMaleSuffix("кютел");
	AddMaleSuffix("кютил");
	AddMaleSuffix("лаф");
	AddMaleSuffix("луве");
	AddMaleSuffix("ман");
	AddMaleSuffix("мар");
	AddMaleSuffix("мер");
	AddMaleSuffix("мод");
	AddMaleSuffix("монд");
	AddMaleSuffix("мунд");
	AddMaleSuffix("нот");
	AddMaleSuffix("олф");
	AddMaleSuffix("ред");
	AddMaleSuffix("рид");
	AddMaleSuffix("рик");
	AddMaleSuffix("рит");
	AddMaleSuffix("рэд");
	AddMaleSuffix("сийе");
	AddMaleSuffix("стан");
	AddMaleSuffix("суну");
	AddMaleSuffix("сюйе");
	AddMaleSuffix("тат");
	AddMaleSuffix("тере");
	AddMaleSuffix("улф");
	AddMaleSuffix("ун");
	AddMaleSuffix("урик");
	AddMaleSuffix("фард");
	AddMaleSuffix("ферт");
	AddMaleSuffix("фрет");
	AddMaleSuffix("фрит");
	AddMaleSuffix("фугел");
	AddMaleSuffix("фугул");
	AddMaleSuffix("фус");
	AddMaleSuffix("хард");
	AddMaleSuffix("хафок");
	AddMaleSuffix("хеард");
	AddMaleSuffix("хеах");
	AddMaleSuffix("хейе");
	AddMaleSuffix("хелм");
	AddMaleSuffix("херд");
	AddMaleSuffix("херэ");
	AddMaleSuffix("хин");
	AddMaleSuffix("хун");
	AddMaleSuffix("эах");
	AddMaleSuffix("эвинэ");
	AddMaleSuffix("элм");
	AddMaleSuffix("эр");
	AddMaleSuffix("эрик");
	AddMaleSuffix("эрт");
	AddMaleSuffix("эрэ");
	AddMaleSuffix("эах");
	AddMaleSuffix("эх");
	
	AddFemaleSuffix("бург");
	AddFemaleSuffix("бурн");
	AddFemaleSuffix("бурх");
	AddFemaleSuffix("вару");
	AddFemaleSuffix("вен");
	AddFemaleSuffix("вин");
	AddFemaleSuffix("вюн");
	AddFemaleSuffix("вит");
	AddFemaleSuffix("гиву");
	AddFemaleSuffix("гит");
	AddFemaleSuffix("гифу");
	AddFemaleSuffix("гут");
	AddFemaleSuffix("гюву");
	AddFemaleSuffix("гют");
	AddFemaleSuffix("гюфу");
	AddFemaleSuffix("лед");
	AddFemaleSuffix("леоф");
	AddFemaleSuffix("лет");
	AddFemaleSuffix("луве");
	AddFemaleSuffix("луву");
	AddFemaleSuffix("рун");
	AddFemaleSuffix("свит");
	AddFemaleSuffix("свют");
	AddFemaleSuffix("трит");
	AddFemaleSuffix("трют");
	AddFemaleSuffix("флед");
	AddFemaleSuffix("фриту");
	AddFemaleSuffix("хен");
	AddFemaleSuffix("хилд");
	
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


