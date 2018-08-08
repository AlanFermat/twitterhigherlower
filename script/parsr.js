function chose(choices) {
	var idx = 0;
	var idx2 = 0;
	do{
		idx = Math.floor(Math.random() * (choices.length-0.001));
		idx2 = Math.floor(Math.random() * (choices.length-0.001));
	}while(idx == idx2);
	return [choices[idx], choices[idx2]];
}

function start(){
	var name_list = ["katyperry", "justinbieber", "BarackObama", "rihanna", "taylorswift13", "ladygaga", "TheEllenShow", "YouTube", "Cristiano", "jtimberlake", "Twitter", "KimKardashian", "britneyspears", "ArianaGrande", "selenagomez", "ddlovato", "cnnbrk", "shakira", "jimmyfallon", "realDonaldTrump", "JLo", "BillGates", "Oprah", "nytimes", "BrunoMars", "KingJames", "narendramodi", "MileyCyrus", "CNN", "instagram", "NiallOfficial", "neymarjr", "BBCBreaking", "Drake", "SportsCenter", "KevinHart4real", "espn", "iamsrk", "LilTunechi", "SrBachchan", "wizkhalifa", "Louis_Tomlinson", "Pink", "LiamPayne", "onedirection", "Harry_Styles", "BeingSalmanKhan", "aliciakeys", "KAKA", "realmadrid", "Adele", "EmmaWatson", "NASA", "ConanOBrien", "FCBarcelona", "ActuallyNPH", "NBA", "danieltosh", "kanyewest", "chrisbrown", "pitbull", "zaynmalik", "KendallJenner", "khloekardashian", "akshaykumar", "coldplay", "PMOIndia", "KylieJenner", "NFL", "sachin_rt", "kourtneykardash", "deepikapadukone", "imVkohli", "TheEconomist", "aamir_khan", "BBCWorld", "iHrithik", "Eminem", "POTUS", "davidguetta", "NatGeo", "priyankachopra", "andresiniesta", "MesutOzil", "AvrilLavigne", "HillaryClinton,NICKIMINAJ", "MohamadAlarefe", "blakeshelton", "MariahCarey", "ricky_martin", "ChampionsLeague", "edsheeran", "Google", "elonmusk", "arrahman", "Reuters", "AlejandroSanz", "LeoDiCaprio", "aplusk"];
	var json_list = {};
	for (var i = 0; i < name_list.length; i++) {
		var one_json = "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names="+name_list[i];
		json_list[name_list[i]] = one_json;
}
	
	var [name, name1] = chose(name_list);
	var j = json_list[name];
	var imagelink = "https://twitter.com/" + name+"/profile_image?size=original";
	var imagelink1 = "https://twitter.com/" + name1 +"/profile_image?size=original";
	var j1 = json_list[name1];
	var arr = [j,j1, imagelink, imagelink1];
	return arr;

}
// var arr = start();
// console.log(arr[1]); 
// console.log(arr[0]); 
