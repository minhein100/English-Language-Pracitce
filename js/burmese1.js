$(document).ready(function () {

	var vocabbank = [
	["(ပြုလုပ်)လို့ရမလား။", "Can I…?", "အသုံးပြုပုံ။ ။ခွင့်ပြုချက်ရယူသည့်အခါ၌သုံးသည်။ ပို၍ယဉ်ယဉ်ကျေးကျေးပြောလိုလျှင် 'May I ...'ကို သုံးနိုင်သည်။" , "Eg: You can take your mask off.", "မှတ်ချက်။  ။ Can၌ လုပ်နိုင်သည်။ ဖြစ်နိုင်သည်။ တတ်နိုင်သည်ဟုအဓိပ္ပါယ်လည်းရှိသေးသည်။"],
	["...အတွက်ကျေးဇူးပါ", "Thank you for …", "အသုံးပြုပုံ။ ။(for + noun) သို့ (for + Ving)ပုံစံဖြင့်သုံးသည်။ ‌ကျေးဇူးတင်သည့်အကြောင်းအရာထည့်ပြောလိုလျှင် 'with'ဖြင့် ထည့်ပြောနိုင်သည်။", "Eg: Thank you for helping me with the cooking.", "မှတ်ချက်။  ။ "],
	["မ...(ဖြစ်နဲ့)", "Don’t be…", "အသုံးပြုပုံ။ ။ ပေါ့ပေါ့ပါးပါးအမိန့်ပေးသည့်သဘောနဲ့သုံးသည်။ အမိန်ပေးသည့်သဘောပါသော်လည်း၊ အမိန့်ပေးခြင်းမဟုတ်ပါ။  (Don't be + Adj)", "Eg: Don't be shy.", "မှတ်ချက်။  ။ "],
	["မ(--)ပဲနေကြရအောင်", "Let’s not…", "အသုံးပြုပုံ။ ။မ(လုပ်)ကြရန်အကြံပြုသည့် သဘောဖြင့်ပြောသည့်အခါ၌သုံးသည်။", "Eg: Let's not contact each other anymore.", "မှတ်ချက်။  ။ Don't နဲ့မတူ။ သတိပေးတဲ့အနေနဲ့သုံး။ Don't do it. မလုပ်နဲ့။ "],
	["(ပြုလုပ်)မလို့။", "I’m going to…", "အသုံးပြုပုံ။ ။လုပ်ဖို့ ဆုံးဖြတ်ပြီးသား ကိစ္စတစ်ခုလုပ်တော့မယ်လို့ ပြောချင်လျှင်သုံးသည်။", "Eg: I'm going to eat out.", "မှတ်ချက်။  ။I will eat out.နဲ့မတူပါ။ စကားပြောနေတုန်း လုပ်မယ်လို့ ဆုံးဖြတ်လိုက်လျှင်'will'ကိုသုံးသည်။ "],
	["ဘယ်မှာ(--)လို့ရမလဲ။", "Where can I…?", "အသုံးပြုပုံ။ ။ကိုယ်လုပ်ချင်တဲ့ကိစ္စ ဘယ်မှာလုပ်လို့ရမလဲ မေးချင်တဲ့အခါမှာသုံးသည်။", "Eg: Where can I use this coupon?", "မှတ်ချက်။  ။ "],
	["(ပြုလုပ်)ချင်တယ်", "I’d like to…", "အသုံးပြုပုံ။ ။ယဉ်ယဉ်ကျေးကျေးဖြင့် မိမိဆန္ဒကိုဖော်ပြလိုလျှင်သုံးသည်။ အရှည်=>'I would like to'", "Eg: I'd like to buy this.", "မှတ်ချက်။  ။ 'want to'က လိုချင်တာ၊ ဖြစ်ချင်တာကို တဲ့တိုးပြော။"],
	["ငါ(လုပ်)ပြီးပြီလား။ ငါ(လုပ်)လိုက်တာလား။", "Did I…?", "အသုံးပြုပုံ။ ။'အယ်၊ ငါလုပ်လိုက်တာလား'ကဲ့သို့ ကိုယ်လုပ်ထားတယ်ဆိုတာ မမှတ်မိတော့သည်ကို ပြန်မေးသည့်အခါ၌သုံးသည်။", "Eg: Did I call you?", "မှတ်ချက်။  ။ 'Did you...'နဲ့မတူ။ 'Did you'က မင်းလုပ်ခဲ့လားလို့မေးချင်လျှင်သုံး။"],
	["ဘယ်လိုလဲ။", "How was…?", "အသုံးပြုပုံ။ ။ပြီးသွားတဲ့ကိစ္စတစ်ခုရဲ့ ဘယ်လိုဖြစ်သွားလဲဆိုတဲ့ရလဒ်ကိုမေးချင်လျှင်သုံးသည်။", "Eg: How was your weekend?", "မှတ်ချက်။  ။ ဆင်တူပုံစံ'How did...go?'ရှိသည်။ ရလဒ်မဟုတ်ပဲအခြေအနေကိုမေးချင်လျှင်သုံးသည်။　　　Eg: How did your presentaion go? "],
	["ငါ(လုပ်)ပါရစေ။", "Let me…", "အသုံးပြုပုံ⓵။ ။မိမိကိုယ်တိုင်ခွင့်ပြုချက်တောင်းခြင်း။ ", "Eg:Let me think about it.", "မှတ်ချက်။ ။ 'let me'အနောက်၌ verbမဟုတ်ပဲ prepလည်းထည့်နိုင်သည်။ Eg:Let me in."],
	["ငါ သူ့ကို ပေး(လုပ်)လိုက်မယ်", "I will let him...", "အသုံးပြုပုံ။ ။အခြားသူအားပေးလုပ်ခြင်း။ ", "Eg:I will let him know about that.", "မှတ်ချက်။ ။"]];


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
