const zhAnswers = [
    "是的。", "不是。", "也许吧。", "再试一次。", "时机未到。",
    "放手也是一种智慧。", "大胆一点。", "不要犹豫。", "听从直觉。",
    "你已经知道答案了。", "等待更好的时机。", "现在是最好的时候。",
    "尝试新方法。", "放松心情。", "相信自己。", "你配得上更好的。",
    "别害怕失败。", "接受不确定性。", "答案藏在沉默中。",
    "你的努力会有回报。", "坚持下去。", "转换角度看看。",
    "咨询朋友的意见。", "这不值得担心。", "它不会影响你。",
    "这是一次成长机会。", "你将遇到贵人。", "保持低调。",
    "不要告诉任何人。", "与其担心，不如行动。", "做好最坏的打算。",
    "保持耐心。", "机会正在靠近你。", "它会如你所愿发展。",
    "现在不适合做决定。", "继续观察。", "这是个陷阱。",
    "放弃是明智的选择。", "是时候展开行动了。", "这不是你真正想要的。",
    "这个决定会带来好运。", "没必要太认真。", "你应该坚持原则。",
    "时间会告诉你答案。", "不要过早暴露计划。",
    "你低估了自己的影响力。", "有人在等你主动。",
    "做你害怕的事。", "可能会超出你预期。", "试试不同的方法。",
    "这是命运的安排。", "你已经准备好了。", "这不重要。",
    "你能应付得来。", "相信过程。", "也许结果不重要。",
    "享受当下。", "停止担心未来。", "问问内心深处的自己。",
    "听听长辈的建议。", "翻开新的一页。", "保守秘密是关键。",
    "值得尝试。", "你需要休息。", "答案可能在远方。",
    "学会等待。", "这是一次考验。", "无论如何都要坚持。",
    "考虑长远影响。", "结果可能出乎意料。", "不要逃避现实。",
    "集中注意力在目标上。", "你忽略了某些细节。",
    "先处理内心的情绪。", "你需要一个计划。", "不要急于求成。",
    "成功近在咫尺。", "失败只是暂时的。", "你被误导了。",
    "这是命中注定的缘分。", "注意你的表达方式。",
    "机会不止这一次。", "有些事无法强求。", "主动出击。",
    "保持开放的心态。", "不试试你永远不知道。",
    "看清楚事实真相。", "你已经在正确的路上。",
    "你值得拥有这一切。", "它可能不值得你投入。",
    "追随你的热情。", "先处理眼前的事情。", "尝试独处。",
    "事情会自然解决。", "不要轻易承诺。", "你不必迎合别人。",
    "你已经做得够好了。", "不必太在意别人的看法。",
    "再给它一次机会。", "你将获得意想不到的惊喜。",
    "一切都是最好的安排。", "你心中已有答案。",
    "答案并不唯一。", "走一步算一步。",
    "结果无关紧要，过程才是关键。", "放轻松，一切都会好起来。",
    "明天会更清晰。", "这将成为美好的回忆。",
    "你正被好运包围。", "如果你相信，它就会发生。",
    "你已经走得够远，现在可以休息一下了。",
    "只要迈出第一步，一切都会不同。"
];
const twAnswers = [
    "是的。", "不是。", "也許吧。", "再試一次。", "時機未到。",
    "放手也是一種智慧。", "大膽一點。", "不要猶豫。", "聽從直覺。",
    "你已經知道答案了。", "等待更好的時機。", "現在是最好的時候。",
    "嘗試新方法。", "放鬆心情。", "相信自己。", "你配得上更好的。",
    "別害怕失敗。", "接受不確定性。", "答案藏在沉默中。",
    "你的努力會有回報。", "堅持下去。", "轉換角度看看。",
    "諮詢朋友的意見。", "這不值得擔心。", "它不會影響你。",
    "這是一次成長機會。", "你將遇到貴人。", "保持低調。",
    "不要告訴任何人。", "與其擔心，不如行動。", "做好最壞的打算。",
    "保持耐心。", "機會正在靠近你。", "它會如你所願發展。",
    "現在不適合做決定。", "繼續觀察。", "這是個陷阱。",
    "放棄是明智的選擇。", "是時候展開行動了。", "這不是你真正想要的。",
    "這個決定會帶來好運。", "沒必要太認真。", "你應該堅持原則。",
    "時間會告訴你答案。", "不要過早暴露計劃。",
    "你低估了自己的影響力。", "有人在等你主動。",
    "做你害怕的事。", "可能會超出你預期。", "試試不同的方法。",
    "這是命運的安排。", "你已經準備好了。", "這不重要。",
    "你能應付得來。", "相信過程。", "也許結果不重要。",
    "享受當下。", "停止擔心未來。", "問問內心深處的自己。",
    "聽聽長輩的建議。", "翻開新的一頁。", "保守秘密是關鍵。",
    "值得嘗試。", "你需要休息。", "答案可能在遠方。",
    "學會等待。", "這是一次考驗。", "無論如何都要堅持。",
    "考慮長遠影響。", "結果可能出乎意料。", "不要逃避現實。",
    "集中注意力在目標上。", "你忽略了某些細節。",
    "先處理內心的情緒。", "你需要一個計劃。", "不要急於求成。",
    "成功近在咫尺。", "失敗只是暫時的。", "你被誤導了。",
    "這是命中注定的緣分。", "注意你的表達方式。",
    "機會不止這一次。", "有些事無法強求。", "主動出擊。",
    "保持開放的心態。", "不試試你永遠不知道。",
    "看清楚事實真相。", "你已經在正確的路上。",
    "你值得擁有這一切。", "它可能不值得你投入。",
    "追隨你的熱情。", "先處理眼前的事情。", "嘗試獨處。",
    "事情會自然解決。", "不要輕易承諾。", "你不必迎合別人。",
    "你已經做得夠好了。", "不必太在意別人的看法。",
    "再給它一次機會。", "你將獲得意想不到的驚喜。",
    "一切都是最好的安排。", "你心中已有答案。",
    "答案並不唯一。", "走一步算一步。",
    "結果無關緊要，過程才是關鍵。", "放輕鬆，一切都會好起來。",
    "明天會更清晰。", "這將成為美好的回憶。",
    "你正被好運包圍。", "如果你相信，它就會發生。",
    "你已經走得夠遠，現在可以休息一下了。",
    "只要邁出第一步，一切都會不同。"
];
const enAnswers = [
    "Yes.", "No.", "Maybe.", "Try again.", "The time is not right.",
    "Letting go is a form of wisdom.", "Be bolder.", "Don't hesitate.", "Trust your intuition.",
    "You already know the answer.", "Wait for a better time.", "Now is the best moment.",
    "Try new methods.", "Relax.", "Believe in yourself.", "You deserve better.",
    "Don't fear failure.", "Accept uncertainty.", "The answer lies in silence.",
    "Your efforts will pay off.", "Keep going.", "Look from a different angle.",
    "Consult your friends.", "It's not worth worrying about.", "It won't affect you.",
    "This is a chance to grow.", "You will meet someone important.", "Stay low-key.",
    "Don't tell anyone.", "Instead of worrying, take action.", "Prepare for the worst.",
    "Be patient.", "Opportunities are coming your way.", "It will unfold as you wish.",
    "Now is not the time to decide.", "Keep observing.", "This is a trap.",
    "Giving up is a wise choice.", "It's time to act.", "This is not what you really want.",
    "This decision will bring good luck.", "No need to take it too seriously.", "You should stick to your principles.",
    "Time will tell the answer.", "Don't reveal your plans too early.",
    "You underestimate your influence.", "Someone is waiting for you to take initiative.",
    "Do what scares you.", "It might exceed your expectations.", "Try a different approach.",
    "This is fate's arrangement.", "You are ready.", "It doesn't matter.",
    "You can handle it.", "Trust the process.", "Maybe the result doesn't matter.",
    "Enjoy the moment.", "Stop worrying about the future.", "Ask your inner self.",
    "Listen to your elders.", "Turn over a new leaf.", "Keeping secrets is key.",
    "Worth trying.", "You need rest.", "The answer may be far away.",
    "Learn to wait.", "This is a test.", "No matter what, persevere.",
    "Consider the long-term impact.", "Results may be unexpected.", "Don't avoid reality.",
    "Focus on your goals.", "You overlooked some details.",
    "Deal with your emotions first.", "You need a plan.", "Don't rush success.",
    "Success is near.", "Failure is temporary.", "You have been misled.",
    "This is destined fate.", "Mind your words.",
    "Opportunities come more than once.", "Some things can't be forced.", "Take initiative.",
    "Keep an open mind.", "You never know until you try.",
    "See the truth clearly.", "You are on the right path.",
    "You deserve all this.", "It may not be worth your investment.",
    "Follow your passion.", "Deal with the present first.", "Try solitude.",
    "Things will resolve naturally.", "Don't make promises lightly.", "You don't have to please others.",
    "You have done enough.", "Don't care too much about others' opinions.",
    "Give it another chance.", "You will get unexpected surprises.",
    "Everything is for the best.", "The answer is already in your heart.",
    "The answer is not unique.", "Take it step by step.",
    "The result doesn't matter, the process does.", "Relax, everything will be fine.",
    "Tomorrow will be clearer.", "This will become a beautiful memory.",
    "You are surrounded by good luck.", "If you believe, it will happen.",
    "You've come far enough, now it's time to rest.",
    "Just take the first step, everything will change."
];

const allAnswers = { zh: zhAnswers, "zh-TW": twAnswers, en: enAnswers };

const labels = {
    zh: { 
    title: "📖 答案之书", 
    defaultText: "你的问题想好了吗？点击下方揭示答案。", 
    reveal: "揭示答案", 
    again: "再问一个问题", 
    share: "分享给朋友"
    },
    "zh-TW": { 
    title: "📖 答案之書", 
    defaultText: "你的問題想好了嗎？點擊下方揭示答案。", 
    reveal: "揭示答案", 
    again: "再問一個問題", 
    share: "分享給朋友"
    },
    en: { 
    title: "📖 Book of Answers", 
    defaultText: "Have you formed your question?\nClick below to reveal the answer.", 
    reveal: "Reveal Answer", 
    again: "Ask Another Question", 
    share: "Share with Friends"
    }
};

let currentLang = "zh";
let answered = false;

function init() {
    const savedLang = localStorage.getItem("preferredLang");
    if (savedLang && labels[savedLang]) {
    currentLang = savedLang;
    document.getElementById("langSelect").value = currentLang;
    }
    changeLanguage(currentLang);
}

function handleButtonClick() {
    const btn = document.getElementById("answerButton");
    const box = document.getElementById("answer");
    const shareBtn = document.getElementById("shareButton");

    if (answered) return location.reload();

    answered = true;
    btn.disabled = true;
    box.textContent = currentLang === "en" ? "Thinking" : "思考中";
    box.classList.add("loading-dots");

    setTimeout(() => {
    const arr = allAnswers[currentLang];
    const ans = arr[Math.floor(Math.random() * arr.length)];
    box.textContent = ans;
    box.classList.remove("loading-dots");

    btn.textContent = labels[currentLang].again;
    btn.disabled = false;

    shareBtn.style.display = "inline-block";
    shareBtn.textContent = labels[currentLang].share;
    }, 1500);
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("preferredLang", lang); // ✅ 保存语言
    const lab = labels[lang];

    document.getElementById("title").textContent = lab.title;
    document.getElementById("answer").textContent = lab.defaultText;
    document.getElementById("answerButton").textContent = lab.reveal;
    document.getElementById("shareButton").style.display = "none";
    answered = false;
}

const sharePrompts = {
    zh: "想要人生指引吗？快来【网址】 免费体验「答案之书」，解答你的所有疑问！",
    "zh-TW": "想要人生指引嗎？快來【网址】 免費體驗「答案之書」，解答你的所有疑問！",
    en: "Looking for guidance? Visit 【URL】 to try the \"Book of Answers\" for free and get clarity on your questions!"
};

const alertMessages = {
    zh: "文案已复制，快分享给朋友，一起探索答案吧！",
    "zh-TW": "文案已複製，快分享給朋友，一起探索答案吧！",
    en: "Text copied! Share it with your friends and explore the answers together!"
};

function shareAnswer() {
    const url = window.location.href;
    const promptText = sharePrompts[currentLang].replace("【网址】", url).replace("【URL】", url);
    navigator.clipboard.writeText(promptText).then(() => {
    alert(alertMessages[currentLang]);
    });
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

window.onload = init;