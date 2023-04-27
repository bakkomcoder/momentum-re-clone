const quotes = [
  {
    english:
      "When you believe in a thing, believe in it all the way, implicitly and unquestionable. - Walt Disney",
    korean:
      "네가 무언가를 믿을 때, 온 힘을 다해, 무조건적으로 그리고 여지없이 그것을 믿어라. - 월트 디즈니",
  },
  {
    english:
      "Never say goodbye because goodbye means going away and going away means forgetting. - Peter Pan",
    korean:
      "안녕이라고 말하지 마. 왜냐하면 안녕은 떠나는 것을 의미하고, 떠나는 것은 잊는 것을 의미하니까. - 피터 팬",
  },
  {
    english: "Some people are worth melting for. - Frozen(Olaf)",
    korean: "누군가를 위해서라면, 나는 녹을 수 있어.. - 올라프(겨울왕국)",
  },
  {
    english:
      "The flower that blooms in adversity is the most rare and beautiful of all. - Mulan",
    korean: "역경 속에 피어나는 꽃이 가장 귀하고 아름다워. - 뮬란",
  },
  {
    english:
      "If you focus on what you left behind, you will never see what lies ahead. - Ratatouille",
    korean:
      "두고 간 것에 집착한다면, 앞에 놓인 것을 절대 볼 수 없을 것이다. - 라따뚜이",
  },
  {
    english:
      "The past can hurt. But from the way I see it, you can either run from it, or learn from it. - Lion King",
    korean:
      "과거가 널 아프게 할 수도 있다. 하지만 과거에서 도망치는 것도 과거에서 배우는 것도 네 선택이다. - 라이온 킹",
  },
  {
    english:
      "You cannot be happy every day. But there are happy things every day. - Winnie the Pooh",
    korean:
      "너는 매일 행복할 수 없다. 하지만 행복한 것들이 매일 존재한다. - 곰돌이 푸",
  },
  {
    english:
      "To love someone, you have to love yourself first. - Beauty and the Beast",
    korean: "누군가를 사랑하려면, 먼저 자신을 사랑해야 한다. - 미녀와 야수",
  },
  {
    english:
      "Share your gift with the world. Who knows how many lives you are saving just by doing so. - Kung Fu Panda",
    korean:
      "세상에 너의 재능을 나누렴. 누가 알겠어? 그렇게 하여 너가 얼마나 많은 삶을 구할지. - 쿵푸팬더",
  },
  {
    english:
      "Venture outside your comfort zone. The rewards are worth it. - Rapunzel",
    korean: "밖에서 모험하라. 그럴 만한 가치가 있다. - 라푼젤",
  },
  {
    english:
      "Remember, you’re the one who can fill the world with sunshine. - Snow White and the Seven Dwarves",
    korean:
      "기억해, 너가 세상을 햇살 가득히 채울 수 있다는 것을. - 백설공주와 일곱 난쟁이",
  },
  {
    english: "Today’s special moments are tomorrow’s memories. - Aladdin",
    korean: "오늘의 특별한 순간들은 내일의 기억들이다. - 알라딘",
  },
  {
    english:
      "Don’t close your eyes. Look! The reality of fear can be different than you think. - Finding Nemo",
    korean:
      "눈을 감지 마. 봐봐! 공포의 실체가 너가 생각하는 것과 다를 수도 있어. - 니모를 찾아서",
  },
  {
    english:
      "But the thing that makes Woody special is he will never give up on you, ever. - Toy Story",
    korean:
      "우디가 특별한 이유는 그가 절대 너를 포기하지 않을 것이기 때문이야. - 토이 스토리",
  },
  {
    english: "Anyone can be anything. - Zootopia",
    korean: "누구든지 원하는 것을 이룰 수 있어. - 주토피아",
  },
];

const quotesDiv = document.querySelector(".quotes");

const english = document.createElement("h4");
const korean = document.createElement("h4");

quotesDiv.appendChild(english);
quotesDiv.appendChild(korean);

const randomNum = Math.floor(Math.random() * quotes.length);

english.innerText = quotes[randomNum].english;
korean.innerText = quotes[randomNum].korean;
