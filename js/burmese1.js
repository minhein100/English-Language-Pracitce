$(document).ready(function () {

	var vocabbank = [
	["憤懣", "ふんまん👉怒りが心にたまり、晴らされないこと。", "မကျေမနပ်ဒေါသထွက်ခြင်း။ မခံမရပ်နိုင်ဒေါသထွက်ခြင်း။ မပြေနိုင်အောင်ဒေါသထွက်ခြင်း။", "Eng: Resentment/ Indignation/ Smoldering anger"],
	["錯綜", "さくそう👉物事が複雑に入り組んでいること。", "ရှုပ်ထွေးခြင်း။ ရှုပ်ထွေးပွေလီခြင်း။ အရှုပ်အယှက်။", "Eng: Complication/ Entanglement"],
	["嗜好", "しこう👉特に好むこと。", "နှစ်သက်ခုံမင်ခြင်း။", "Eng: Preference/ Liking"],
	["瓦礫", "がれき👉建物などの破片や石ころ。", "(အဆောက်အဦးစသည်)အပျက်အစီး အပိုင်းအစ။ အစအန။", "Eng: Debris"],
	["踏襲", "とうしゅう👉これまでの方針や方法などをそのまま受け継ぐこと。", "(မူဝါဒစသည်)ထိန်းသိမ်းလိုက်နာခြင်း။", "Eng: Adherence"],
	["軋轢", "あつれき👉意見や立場の違いから、互いに反発し合うこと。", "သဘောထားကွဲလွဲမှု။ အငြင်းပွားမှု။ ပဋိပက္ခ။", "Eng: Conflict/ Discord"],
	["該博", "がいはく👉知識などが広く、物事に通じていること。", "အသိပညာ ဗဟုသုတကြွယ်ဝခြင်း။", "Eng: Erudition/ Extensive knowledge"],
	["払拭", "ふっしょく👉悪いものや不要なものを取り除き、きれいにすること。", "ဖယ်ရှားရှင်းလင်းခြင်း။ လွင့်ပြယ်ပပျောက်စေခြင်း။", "Eng: Wiping out/ Dispelling/ Clearing away"],
	["専横", "せんおう👉自分勝手に振る舞い、独断で物事を進めること。", "ထင်တိုင်းကြဲခြင်း။ အာဏာရှင်ဆန်ခြင်း။", "Eng: Arbitrary action/ Despotism"],
	["寛容", "かんよう👉他人の過ちや意見の違いなどをとがめずに受け入れること。", "သည်းခံခွင့်လွှတ်ခြင်း။ စိတ်ရှည်သည်းခံခြင်း။", "Eng: Tolerance/ Forbearance"]];


	beginActivity();


	function beginActivity() {

		$("#menubtn").append('<div><span style="font-size:18px;font-weight:bold;color:red;background-color:yellow;cursor:pointer">သဒ္ဒါပုံစံများ</span></div>');
		$("#closebtn").append('<div><a href="javascript:void(0)" class="closebtn">&times;</a></div>');
		$("#infoMsg").append('<div><h3 style="text-align: center;">"သဒ္ဒါပုံစံများ"ကို နှိပ်၍ရွေးချယ်ပါ။</h3></div>');
		$(vocabbank).each(function(i , item) {
			$("#sideMenuArea" + i ).append('<div id="sideMenuList">' + item[0] + '</div>');
			$("#sideMenuArea" + i ).on("click", function () {
				vocabNo = parseInt(i);
				vocabNo = i + 1;
				$("#infoMsg").empty();
				$("#activityTitle").empty();
				$("#activityTitle").append('<div id="showImi">' + "(" + vocabNo + "). " + item[0] +'</div>')
				$("#cardArea").empty();
				$("#cardArea").append('<div id="showImi">' + item[1] +'</br>' + item[2] + '</br>' + item[3] +'</div>')
				$("#sideMenuArea").animate({ width: "0px" }, 100);
				$("#main").animate({ marginLeft: "0px" }, 100);
				$("#buttonArea2").empty();
				currentVocab = i;
			});
		});

		// Insert button to choose befre and next vocab.
		$("#buttonArea1").append('<div id="beforeButton"><< ရှေ့သို့  </div>');
		// $("#buttonArea2").append('<div id="startButton">スタート</div>');
		$("#buttonArea3").append('<div id="nextButton2">နောက်သို့ >></div>');

		// Function for before button
		$("#beforeButton").on("click", function () {
			if (currentVocab == 0) {
				alert("ပထမဆုံး သဒ္ဒါပုံစံဖြစ်သည်။ နောက်သို့ ခလုတ်အားနှိပ်၍ရွေးပါ။");
			}
			else {
				if (currentVocab >= 1) {
					beforeVocab(currentVocab);
					currentVocab --;
				}
			}
			$("#sideMenuArea").animate({ width: "0px" }, 100);
			$("#main").animate({ marginLeft: "0px" }, 100);
		});

		// Fucntion for next button
		$("#nextButton2").on("click", function () {
			if (currentVocab == vocabbank.length - 1) {
				alert("နောက်ဆုံး သဒ္ဒါပုံစံဖြစ်သည်။ ရှေ့သို့ ခလုတ်အားနှိပ်၍ရွေးပါ။");
			}
			else {
				if (currentVocab < vocabbank.length - 1 && currentVocab >= 0) {
					// alert(currentVocab);
					nextVocab(currentVocab + 1);
					currentVocab ++;
				}
			}
			$("#sideMenuArea").animate({ width: "0px" }, 100);
			$("#main").animate({ marginLeft: "0px" }, 100);
			$("#buttonArea2").empty();
			});
		}

	$("#menubtn").on("click", function () {
		$("#sideMenuArea").animate({ width: "150px" }, 100);
		$("#main").animate({ marginLeft: "150px" }, 100);
		// $("body").css("background-color", "rgba(0, 0, 0, 0.4)");
	});


	$("#closebtn").on("click", function () {
		$("#sideMenuArea").animate({ width: "0px" }, 100);
		$("#main").animate({ marginLeft: "0px" }, 100);
		// $("body").css("background-color", "white");
	});

	function nextVocab(j) {
		vocabNo = parseInt(j);
		vocabNo += 1;
		$("#infoMsg").empty();
		$("#activityTitle").empty();
		$("#activityTitle").append('<div id="showImi">' +  "(" + vocabNo + "). " + vocabbank[j][0] +'</div>')
		$("#cardArea").empty();
		$("#cardArea").append('<div id="showImi">' + vocabbank[j][1] +'</br>' + vocabbank[j][2] + '</br>' + vocabbank[j][3] +'</div>')

	};

	function beforeVocab(j) {
		if (j >= 1) {
			$("#infoMsg").empty();
			$("#activityTitle").empty();
			$("#activityTitle").append('<div id="showImi">' +  "(" + j + "). " + vocabbank[j-1][0] +'</div>')
			$("#cardArea").empty();
			$("#cardArea").append('<div id="showImi">' + vocabbank[j-1][1] +'</br>' + vocabbank[j-1][2] + '</br>' + vocabbank[j-1][3] +'</div>')
		}
	};
});
