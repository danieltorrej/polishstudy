// Polish lessons for the Study tab. They follow the order of topics and grammar in
// "Krok po kroku Polski A1"; the dialogues, texts and exercises are written for this app.
// Setting: Sofia's Polish course in Kraków, with classmates Lukas, Yuki and Diego and
// their teacher, Joanna Wiśniewska.
//
// lesson: { id, number, level, title, titleEn,
//   goals: { can: [English], grammar: [[text with *Polish*, grammar topic id or null]] },
//   parts: [{ kind: "dialogue" | "culture", title, titleEn,
//             sentences: [[Polish, English, speaker (dialogues)]] }],
//   phrases: [[Polish, English]],
//   exercises: { questions: [[question, English, answer]], gaps: [[sentence with ___, answer, hint]] } }
// lessonGlossary: words used in the lessons that the main glossary (content/pl.js) lacks,
//   in the same format: word form (lowercase) -> [dictionary form, meaning, note].
CONTENT.pl.lessons = [
  {
    "id": "lekcja-1",
    "number": 1,
    "level": "A1",
    "title": "Dzień dobry! Jak masz na imię?",
    "titleEn": "Hello! What's your name?",
    "goals": {
      "can": ["Say hello and goodbye, formally and informally", "Introduce yourself and ask someone's name", "Say you don't understand and ask someone to repeat", "Count from 0 to 10"],
      "grammar": [["*być* (to be): *jestem, jesteś, jest*", "present-tense"], ["*nazywać się* (to be called): *nazywam się*", null]]
    },
    "parts": [
      {
        "kind": "dialogue",
        "title": "W sekretariacie",
        "titleEn": "At the school office",
        "sentences": [
          ["Dzień dobry!", "Good morning!", "Sofia"],
          ["Dzień dobry. W czym mogę pomóc?", "Good morning. How can I help?", "Sekretarka"],
          ["Nazywam się Sofia Romano. Jestem nową studentką.", "My name is Sofia Romano. I'm a new student.", "Sofia"],
          ["Witamy w szkole! Proszę, to jest pani plan lekcji.", "Welcome to the school! Here's your timetable.", "Sekretarka"],
          ["Dziękuję. Gdzie jest moja grupa?", "Thank you. Where is my group?", "Sofia"],
          ["Pani grupa jest w sali numer siedem.", "Your group is in room number seven.", "Sekretarka"],
          ["Przepraszam, nie rozumiem. Proszę powtórzyć.", "Sorry, I don't understand. Could you repeat that, please?", "Sofia"],
          ["Sala numer siedem. Na pierwszym piętrze.", "Room number seven. On the first floor.", "Sekretarka"],
          ["Aha, siedem! Dziękuję bardzo. Do widzenia!", "Ah, seven! Thank you very much. Goodbye!", "Sofia"],
          ["Do widzenia!", "Goodbye!", "Sekretarka"]
        ]
      },
      {
        "kind": "dialogue",
        "title": "W sali numer siedem",
        "titleEn": "In room seven",
        "sentences": [
          ["Cześć! Jestem Lukas. A ty, jak masz na imię?", "Hi! I'm Lukas. And you, what's your name?", "Lukas"],
          ["Cześć, jestem Sofia. Miło mi.", "Hi, I'm Sofia. Nice to meet you.", "Sofia"],
          ["Mnie też. Jesteś tu pierwszy raz?", "Nice to meet you too. Is this your first time here?", "Lukas"],
          ["Tak, to mój pierwszy dzień. A ty?", "Yes, it's my first day. And you?", "Sofia"],
          ["Ja też. Trochę się stresuję!", "Me too. I'm a bit nervous!", "Lukas"],
          ["Dzień dobry wszystkim! Nazywam się Joanna Wiśniewska i jestem waszą nauczycielką.", "Good morning, everyone! My name is Joanna Wiśniewska and I'm your teacher.", "Nauczycielka"],
          ["Dzień dobry!", "Good morning!", "Studenci"]
        ]
      },
      {
        "kind": "culture",
        "title": "Pan i pani",
        "titleEn": "Sir and madam",
        "sentences": [
          ["W Polsce do mężczyzny mówimy „pan”, a do kobiety „pani”.", "In Poland we say “pan” to a man and “pani” to a woman."],
          ["To jest grzeczna forma, na przykład w sklepie, w urzędzie albo w szkole.", "It's the polite form, for example in a shop, an office or at school."],
          ["Mówimy: „Przepraszam pana” albo „Dzień dobry, pani Joanno!”", "We say “Excuse me, sir” or “Good morning, Joanna!” (politely)."],
          ["Do rodziny i przyjaciół mówimy po imieniu: „Cześć, Ania!”", "To family and friends we use first names: “Hi, Ania!”"],
          ["Polskie imiona mają też małe, miłe formy: Anna to Ania, Katarzyna to Kasia, a Józef to Józek.", "Polish names also have short, friendly forms: Anna is Ania, Katarzyna is Kasia, and Józef is Józek."]
        ]
      }
    ],
    "phrases": [
      ["Dzień dobry!", "Good morning / Hello! (formal, until evening)"],
      ["Dobry wieczór!", "Good evening!"],
      ["Cześć!", "Hi! / Bye! (informal)"],
      ["Do widzenia!", "Goodbye! (formal)"],
      ["Na razie!", "See you! (informal)"],
      ["Jak masz na imię?", "What's your name? (informal)"],
      ["Jak się pan / pani nazywa?", "What's your name? (formal)"],
      ["Nazywam się…", "My name is… (full name)"],
      ["Miło mi.", "Nice to meet you."],
      ["Przepraszam, nie rozumiem.", "Sorry, I don't understand."],
      ["Proszę powtórzyć.", "Could you repeat that, please?"],
      ["Proszę mówić wolniej.", "Please speak more slowly."],
      ["zero, jeden, dwa, trzy, cztery, pięć", "0, 1, 2, 3, 4, 5"],
      ["sześć, siedem, osiem, dziewięć, dziesięć", "6, 7, 8, 9, 10"]
    ],
    "exercises": {
      "questions": [
        ["Jak nazywa się Sofia?", "What is Sofia's full name?", "Sofia Romano."],
        ["W której sali jest grupa Sofii?", "Which room is Sofia's group in?", "W sali numer siedem, na pierwszym piętrze."],
        ["Jak ma na imię kolega Sofii?", "What is Sofia's classmate called?", "Lukas."],
        ["Jak nazywa się nauczycielka?", "What is the teacher's name?", "Joanna Wiśniewska."],
        ["Co mówimy do kobiety: „pan” czy „pani”?", "What do we say to a woman: “pan” or “pani”?", "„Pani”."]
      ],
      "gaps": [
        ["___ się Sofia Romano.", "Nazywam", "nazywać się → ja"],
        ["Jak masz na ___?", "imię", "“What's your name?”"],
        ["Przepraszam, nie ___.", "rozumiem", "rozumieć → ja"],
        ["Proszę ___.", "powtórzyć", "“Please repeat.”"],
        ["Do ___!", "widzenia", "formal goodbye"]
      ]
    }
  },
  {
    "id": "lekcja-2",
    "number": 2,
    "level": "A1",
    "title": "Skąd jesteś?",
    "titleEn": "Where are you from?",
    "goals": {
      "can": ["Say where you're from and where you live", "Ask someone's age and say yours", "Say what you do: work or study", "Count from 11 to 29"],
      "grammar": [["Verbs in *-m, -sz*: *mieszkam, mieszkasz*", "present-tense"], ["*z* + country: *z Polski, z Włoch*", "genitive"], ["Age: *mam dwadzieścia lat*", "numbers-time"]]
    },
    "parts": [
      {
        "kind": "dialogue",
        "title": "Przerwa na kawę",
        "titleEn": "Coffee break",
        "sentences": [
          ["Lukas, skąd jesteś?", "Lukas, where are you from?", "Sofia"],
          ["Jestem z Niemiec, z Berlina. A ty?", "I'm from Germany, from Berlin. And you?", "Lukas"],
          ["Ja jestem z Włoch. A to jest Yuki. Ona jest z Japonii.", "I'm from Italy. And this is Yuki. She's from Japan.", "Sofia"],
          ["Cześć, Yuki! Gdzie mieszkasz w Krakowie?", "Hi, Yuki! Where do you live in Kraków?", "Lukas"],
          ["Mieszkam w akademiku, blisko szkoły. A wy?", "I live in a student dorm, near the school. And you two?", "Yuki"],
          ["Ja mieszkam z koleżanką w centrum.", "I live with a friend in the centre.", "Sofia"],
          ["A ja wynajmuję pokój na Kazimierzu.", "And I rent a room in Kazimierz.", "Lukas"],
          ["Ile masz lat, Yuki?", "How old are you, Yuki?", "Sofia"],
          ["Dziewiętnaście. Jestem studentką. Studiuję architekturę.", "Nineteen. I'm a student. I study architecture.", "Yuki"],
          ["A ty, Lukas? Co robisz w Polsce?", "And you, Lukas? What do you do in Poland?", "Yuki"],
          ["Mam dwadzieścia sześć lat i pracuję w firmie informatycznej. Uczę się polskiego, bo mam polską dziewczynę.", "I'm twenty-six and I work in an IT company. I'm learning Polish because I have a Polish girlfriend.", "Lukas"],
          ["Naprawdę? Jak ona ma na imię?", "Really? What's her name?", "Sofia"],
          ["Marta. Ona mówi, że mój polski jest okropny!", "Marta. She says my Polish is terrible!", "Lukas"],
          ["Nie jest okropny! Mówisz bardzo dobrze.", "It isn't terrible! You speak very well.", "Yuki"]
        ]
      },
      {
        "kind": "culture",
        "title": "Polska na mapie",
        "titleEn": "Poland on the map",
        "sentences": [
          ["Polska leży w Europie Środkowej.", "Poland lies in Central Europe."],
          ["Ma siedmiu sąsiadów: Niemcy, Czechy, Słowację, Ukrainę, Białoruś, Litwę i Rosję.", "It has seven neighbours: Germany, the Czech Republic, Slovakia, Ukraine, Belarus, Lithuania and Russia."],
          ["Stolica Polski to Warszawa.", "The capital of Poland is Warsaw."],
          ["Inne duże miasta to Kraków, Łódź, Wrocław, Poznań i Gdańsk.", "Other big cities are Kraków, Łódź, Wrocław, Poznań and Gdańsk."],
          ["Na północy jest Morze Bałtyckie, a na południu są góry: Tatry.", "In the north is the Baltic Sea, and in the south are mountains: the Tatras."],
          ["W Polsce mieszka prawie trzydzieści osiem milionów ludzi.", "Almost thirty-eight million people live in Poland."]
        ]
      }
    ],
    "phrases": [
      ["Skąd jesteś?", "Where are you from? (informal)"],
      ["Skąd pan / pani jest?", "Where are you from? (formal)"],
      ["Jestem z Polski / z Włoch / z Niemiec.", "I'm from Poland / Italy / Germany."],
      ["Jestem z Anglii / z Hiszpanii / z Ameryki.", "I'm from England / Spain / America."],
      ["Gdzie mieszkasz?", "Where do you live?"],
      ["Mieszkam w Krakowie.", "I live in Kraków."],
      ["Ile masz lat?", "How old are you?"],
      ["Mam dwadzieścia lat.", "I'm twenty."],
      ["Co robisz?", "What do you do?"],
      ["Pracuję. / Studiuję.", "I work. / I study."],
      ["jedenaście, dwanaście, trzynaście, czternaście, piętnaście", "11, 12, 13, 14, 15"],
      ["szesnaście, siedemnaście, osiemnaście, dziewiętnaście", "16, 17, 18, 19"],
      ["dwadzieścia, dwadzieścia jeden, dwadzieścia dwa…", "20, 21, 22…"]
    ],
    "exercises": {
      "questions": [
        ["Skąd jest Lukas?", "Where is Lukas from?", "Z Niemiec, z Berlina."],
        ["Gdzie mieszka Yuki?", "Where does Yuki live?", "W akademiku, blisko szkoły."],
        ["Ile lat ma Lukas?", "How old is Lukas?", "Dwadzieścia sześć."],
        ["Dlaczego Lukas uczy się polskiego?", "Why is Lukas learning Polish?", "Bo ma polską dziewczynę."],
        ["Jaka jest stolica Polski?", "What is the capital of Poland?", "Warszawa."]
      ],
      "gaps": [
        ["Lukas, skąd ___?", "jesteś", "być → ty"],
        ["Ja ___ z Włoch.", "jestem", "być → ja"],
        ["Gdzie ___ w Krakowie?", "mieszkasz", "mieszkać → ty"],
        ["___ w firmie informatycznej.", "Pracuję", "pracować → ja"],
        ["Mam dwadzieścia sześć ___.", "lat", "rok / lata / lat → after 26"]
      ]
    }
  },
  {
    "id": "lekcja-3",
    "number": 3,
    "level": "A1",
    "title": "Co to jest? Kto to jest?",
    "titleEn": "What's this? Who's this?",
    "goals": {
      "can": ["Name things in the classroom", "Describe things: colours, new or old, big or small", "Ask “What's this?” and “Who's this?”"],
      "grammar": [["*ten, ta, to* and gender", "gender"], ["Adjectives: *nowy, nowa, nowe*", "adjectives"]]
    },
    "parts": [
      {
        "kind": "dialogue",
        "title": "Na lekcji",
        "titleEn": "In class",
        "sentences": [
          ["Lukas, co to jest?", "Lukas, what's this?", "Nauczycielka"],
          ["To jest książka.", "It's a book.", "Lukas"],
          ["Dobrze. A jaka to książka?", "Good. And what kind of book is it?", "Nauczycielka"],
          ["To jest nowa, czerwona książka.", "It's a new, red book.", "Lukas"],
          ["Bardzo dobrze! Sofia, a co to jest?", "Very good! Sofia, and what's this?", "Nauczycielka"],
          ["To jest długopis. Niebieski długopis.", "It's a pen. A blue pen.", "Sofia"],
          ["A ten zeszyt? Jaki on jest?", "And this notebook? What's it like?", "Nauczycielka"],
          ["Ten zeszyt jest stary i zielony.", "This notebook is old and green.", "Sofia"],
          ["Świetnie. A teraz Yuki: kto to jest?", "Great. And now Yuki: who's this?", "Nauczycielka"],
          ["To jest Maria Skłodowska-Curie!", "It's Marie Skłodowska-Curie!", "Yuki"],
          ["Tak! To bardzo sławna Polka. A co to jest?", "Yes! A very famous Polish woman. And what's this?", "Nauczycielka"],
          ["To jest Wawel. Duży, piękny zamek w Krakowie.", "It's Wawel. A big, beautiful castle in Kraków.", "Yuki"]
        ]
      },
      {
        "kind": "culture",
        "title": "Biało-czerwona",
        "titleEn": "White and red",
        "sentences": [
          ["Polska flaga jest biało-czerwona.", "The Polish flag is white and red."],
          ["Na górze jest biały kolor, a na dole czerwony.", "White is at the top, and red at the bottom."],
          ["Godło Polski to biały orzeł w złotej koronie na czerwonym tle.", "Poland's emblem is a white eagle with a golden crown on a red background."],
          ["Drugiego maja jest Dzień Flagi.", "The second of May is Flag Day."],
          ["Kibice na meczach śpiewają: „Polska, biało-czerwoni!”", "At matches, fans sing: “Poland, white-and-reds!”"]
        ]
      }
    ],
    "phrases": [
      ["Co to jest?", "What's this?"],
      ["Kto to jest?", "Who's this?"],
      ["To jest…", "This is… / It's…"],
      ["Jaki? Jaka? Jakie?", "What is it like? What kind? (masculine, feminine, neuter)"],
      ["książka, zeszyt, długopis, ołówek", "book, notebook, pen, pencil"],
      ["tablica, krzesło, stół, okno", "board, chair, table, window"],
      ["biały, czarny, czerwony, niebieski", "white, black, red, blue"],
      ["zielony, żółty, szary, brązowy", "green, yellow, grey, brown"],
      ["nowy – stary, duży – mały", "new – old, big – small"],
      ["dobry – zły", "good – bad"]
    ],
    "exercises": {
      "questions": [
        ["Jaka jest książka?", "What is the book like?", "Nowa i czerwona."],
        ["Jaki jest zeszyt?", "What is the notebook like?", "Stary i zielony."],
        ["Kto jest na zdjęciu?", "Who is in the picture?", "Maria Skłodowska-Curie."],
        ["Jakie kolory ma polska flaga?", "What colours is the Polish flag?", "Biały i czerwony."],
        ["Kiedy jest Dzień Flagi?", "When is Flag Day?", "Drugiego maja."]
      ],
      "gaps": [
        ["___ książka jest nowa.", "Ta", "ten / ta / to → książka is feminine"],
        ["___ zeszyt jest stary.", "Ten", "ten / ta / to → zeszyt is masculine"],
        ["___ okno jest duże.", "To", "ten / ta / to → okno is neuter"],
        ["To jest ___ książka. (czerwony)", "czerwona", "feminine: -a"],
        ["Wawel to ___ zamek. (duży)", "duży", "masculine: -y"]
      ]
    }
  },
  {
    "id": "lekcja-4",
    "number": 4,
    "level": "A1",
    "title": "Jaki on jest?",
    "titleEn": "What's he like?",
    "goals": {
      "can": ["Describe what people are like", "Say what you think: Myślę, że…", "Say you're glad: Cieszę się"],
      "grammar": [["Verbs in *-ę, -isz*: *myślę, myślisz*", "present-tense"], ["Adjectives for people: *miły, miła*", "adjectives"]]
    },
    "parts": [
      {
        "kind": "dialogue",
        "title": "Nowy student",
        "titleEn": "The new student",
        "sentences": [
          ["Sofia, widzisz tego chłopaka? To nowy student.", "Sofia, do you see that guy? He's a new student.", "Lukas"],
          ["Tak. Jak ma na imię?", "Yes. What's his name?", "Sofia"],
          ["Diego. Jest z Hiszpanii, z Madrytu.", "Diego. He's from Spain, from Madrid.", "Lukas"],
          ["Jaki on jest?", "What's he like?", "Sofia"],
          ["Myślę, że jest sympatyczny i bardzo zabawny. Ale mówi trochę za dużo!", "I think he's nice and very funny. But he talks a bit too much!", "Lukas"],
          ["Ha, ha! A pani Joanna? Lubisz ją?", "Ha ha! And Ms Joanna? Do you like her?", "Sofia"],
          ["Tak, bardzo. Jest cierpliwa i miła. Zawsze mówi powoli.", "Yes, a lot. She's patient and kind. She always speaks slowly.", "Lukas"],
          ["Cieszę się, że mówi powoli. Ja jeszcze mało rozumiem.", "I'm glad she speaks slowly. I still don't understand much.", "Sofia"],
          ["Spokojnie! Robisz duże postępy.", "Don't worry! You're making great progress.", "Lukas"],
          ["Myślisz? Dziękuję!", "You think so? Thank you!", "Sofia"]
        ]
      },
      {
        "kind": "culture",
        "title": "Imieniny",
        "titleEn": "Name days",
        "sentences": [
          ["W Polsce świętujemy nie tylko urodziny, ale też imieniny.", "In Poland we celebrate not only birthdays, but also name days."],
          ["Imieniny to święto imienia. Każde imię ma swój dzień w kalendarzu.", "A name day is the celebration of your name. Every name has its own day in the calendar."],
          ["Na przykład Anna ma imieniny dwudziestego szóstego lipca.", "For example, Anna has her name day on the twenty-sixth of July."],
          ["Rodzina i przyjaciele składają wtedy życzenia i dają kwiaty albo prezent.", "Family and friends then offer their wishes and give flowers or a present."],
          ["Mówimy: „Wszystkiego najlepszego!”", "We say: “All the best!”"]
        ]
      }
    ],
    "phrases": [
      ["Jaki on jest? / Jaka ona jest?", "What's he like? / What's she like?"],
      ["miły, sympatyczny", "nice, likeable"],
      ["zabawny – poważny", "funny – serious"],
      ["cierpliwy – nerwowy", "patient – nervous"],
      ["wysoki – niski", "tall – short"],
      ["młody – stary", "young – old"],
      ["Myślę, że…", "I think that…"],
      ["Cieszę się!", "I'm glad!"],
      ["Spokojnie!", "Don't worry! / Take it easy!"],
      ["Wszystkiego najlepszego!", "All the best! / Happy birthday!"]
    ],
    "exercises": {
      "questions": [
        ["Skąd jest Diego?", "Where is Diego from?", "Z Hiszpanii, z Madrytu."],
        ["Jaki jest Diego?", "What is Diego like?", "Sympatyczny i zabawny, ale mówi trochę za dużo."],
        ["Jaka jest pani Joanna?", "What is Ms Joanna like?", "Cierpliwa i miła."],
        ["Kiedy Anna ma imieniny?", "When is Anna's name day?", "Dwudziestego szóstego lipca."],
        ["Co mówimy na imieniny?", "What do we say on someone's name day?", "Wszystkiego najlepszego!"]
      ],
      "gaps": [
        ["___, że jest sympatyczny. (myśleć)", "Myślę", "myśleć → ja"],
        ["___ się, że mówi powoli. (cieszyć się)", "Cieszę", "cieszyć się → ja"],
        ["Ty ___ duże postępy. (robić)", "robisz", "robić → ty"],
        ["Pani Joanna zawsze ___ powoli. (mówić)", "mówi", "mówić → ona"],
        ["Sofia, ___ ją? (lubić)", "lubisz", "lubić → ty"]
      ]
    }
  }
];

CONTENT.pl.lessonGlossary = {
  "pomóc": ["pomóc", "to help", "“W czym mogę pomóc?” = How can I help?"],
  "nazywam": ["nazywać się", "to be called", "“Nazywam się…” = My name is… (full name)"],
  "romano": ["Romano", "Romano (Italian surname)", ""],
  "nową": ["nowy", "new", "feminine instrumental: jestem nową studentką"],
  "witamy": ["witać", "to welcome, to greet", "“Witamy!” = Welcome!"],
  "szkole": ["szkoła", "school", "locative, after “w”"],
  "pani": ["pani", "Mrs, madam; you (polite, to a woman); your (with a noun)", "“pani plan” = your timetable (polite)"],
  "plan": ["plan", "plan; “plan lekcji” = timetable", ""],
  "lekcji": ["lekcja", "lesson, class", "genitive: plan lekcji = timetable (plan of lessons)"],
  "gdzie": ["gdzie", "where", ""],
  "grupa": ["grupa", "group", ""],
  "sali": ["sala", "room, hall", "locative, after “w”"],
  "numer": ["numer", "number", ""],
  "siedem": ["siedem", "seven", ""],
  "powtórzyć": ["powtórzyć", "to repeat", "“Proszę powtórzyć.” = Please repeat."],
  "sala": ["sala", "room, hall", ""],
  "pierwszym": ["pierwszy", "first", "locative, matching “piętrze”"],
  "piętrze": ["piętro", "floor, storey", "locative: na pierwszym piętrze = on the first floor"],
  "aha": ["aha", "ah, I see", ""],
  "widzenia": ["widzenie", "seeing", "“Do widzenia!” = Goodbye! (formal)"],
  "lukas": ["Lukas", "Lukas (German name)", ""],
  "jak": ["jak", "how; “Jak masz na imię?” = What's your name?", ""],
  "pierwszy": ["pierwszy", "first", "“pierwszy raz” = for the first time"],
  "raz": ["raz", "time (occasion); once", "“pierwszy raz” = the first time"],
  "stresuję": ["stresować się", "to be nervous, to be stressed", "I'm nervous"],
  "wszystkim": ["wszyscy", "everyone, all", "dative: “Dzień dobry wszystkim!” = Good morning, everyone!"],
  "joanna": ["Joanna", "Joanna (name)", ""],
  "wiśniewska": ["Wiśniewska", "Wiśniewska (surname)", "feminine form of Wiśniewski"],
  "waszą": ["wasz", "your (to several people)", "feminine instrumental: jestem waszą nauczycielką"],
  "polsce": ["Polska", "Poland", "locative, after “w”: w Polsce = in Poland"],
  "mężczyzny": ["mężczyzna", "man", "genitive, after “do”"],
  "mówimy": ["mówić", "to say, to speak", "we say"],
  "kobiety": ["kobieta", "woman", "genitive, after “do”"],
  "grzeczna": ["grzeczny", "polite; well-behaved", "feminine form"],
  "forma": ["forma", "form", ""],
  "przykład": ["przykład", "example", "“na przykład” = for example"],
  "sklepie": ["sklep", "shop", "locative, after “w”"],
  "urzędzie": ["urząd", "office (government), authority", "locative, after “w”"],
  "albo": ["albo", "or", ""],
  "pana": ["pan", "sir; you (polite, to a man)", "accusative: “Przepraszam pana” = Excuse me, sir"],
  "joanno": ["Joanna", "Joanna", "vocative case: used to address someone"],
  "rodziny": ["rodzina", "family", "genitive, after “do”"],
  "przyjaciół": ["przyjaciel", "friend", "genitive plural, after “do”"],
  "imieniu": ["imię", "first name", "locative: “mówić po imieniu” = to use first names"],
  "imiona": ["imię", "first name", "plural"],
  "mają": ["mieć", "to have", "they have"],
  "miłe": ["miły", "nice, friendly", "plural form (not male people)"],
  "formy": ["forma", "form", "plural"],
  "anna": ["Anna", "Anna (name)", ""],
  "katarzyna": ["Katarzyna", "Katarzyna (name)", "short form: Kasia"],
  "józek": ["Józek", "Józek (short for Józef)", ""],

  "niemiec": ["Niemcy", "Germany", "genitive, after “z” (from): z Niemiec"],
  "berlina": ["Berlin", "Berlin", "genitive, after “z” (from)"],
  "yuki": ["Yuki", "Yuki (Japanese name)", ""],
  "ona": ["ona", "she", ""],
  "japonii": ["Japonia", "Japan", "genitive, after “z” (from)"],
  "mieszkasz": ["mieszkać", "to live (somewhere)", "you live"],
  "akademiku": ["akademik", "student dorm, hall of residence", "locative, after “w”"],
  "blisko": ["blisko", "near, close (to)", "followed by the genitive: blisko szkoły"],
  "szkoły": ["szkoła", "school", "genitive, after “blisko”"],
  "wy": ["wy", "you (several people)", ""],
  "koleżanką": ["koleżanka", "friend, colleague (female)", "instrumental, after “z” (with)"],
  "wynajmuję": ["wynajmować", "to rent", "I rent"],
  "kazimierzu": ["Kazimierz", "Kazimierz (a district of Kraków)", "locative, after “na”"],
  "dziewiętnaście": ["dziewiętnaście", "nineteen", ""],
  "architekturę": ["architektura", "architecture", "accusative (the object of “studiuję”)"],
  "sześć": ["sześć", "six", ""],
  "firmie": ["firma", "company, firm", "locative, after “w”"],
  "informatycznej": ["informatyczny", "IT, computing (adjective)", "feminine locative, matching “firmie”"],
  "bo": ["bo", "because", ""],
  "polską": ["polski", "Polish", "feminine accusative, matching “dziewczynę”"],
  "dziewczynę": ["dziewczyna", "girl; girlfriend", "accusative (the object of “mam”)"],
  "marta": ["Marta", "Marta (name)", ""],
  "mówi": ["mówić", "to say, to speak", "he / she says"],
  "że": ["że", "that (as in “she says that…”)", ""],
  "polski": ["polski", "Polish; the Polish language", ""],
  "okropny": ["okropny", "terrible, awful", ""],
  "polska": ["Polska", "Poland", "also: Polish (feminine adjective)"],
  "leży": ["leżeć", "to lie, to be located", "it lies"],
  "europie": ["Europa", "Europe", "locative, after “w”"],
  "środkowej": ["środkowy", "central, middle", "feminine locative: w Europie Środkowej"],
  "siedmiu": ["siedem", "seven", "form used with male people: siedmiu sąsiadów"],
  "sąsiadów": ["sąsiad", "neighbour", "genitive plural, after a number"],
  "niemcy": ["Niemcy", "Germany", ""],
  "czechy": ["Czechy", "the Czech Republic", ""],
  "słowację": ["Słowacja", "Slovakia", "accusative"],
  "ukrainę": ["Ukraina", "Ukraine", "accusative"],
  "białoruś": ["Białoruś", "Belarus", ""],
  "litwę": ["Litwa", "Lithuania", "accusative"],
  "rosję": ["Rosja", "Russia", "accusative"],
  "stolica": ["stolica", "capital (city)", ""],
  "warszawa": ["Warszawa", "Warsaw", ""],
  "inne": ["inny", "other", "plural form (not male people)"],
  "miasta": ["miasto", "city, town", "plural"],
  "kraków": ["Kraków", "Kraków", ""],
  "łódź": ["Łódź", "Łódź (city); also: boat", ""],
  "wrocław": ["Wrocław", "Wrocław (city)", ""],
  "poznań": ["Poznań", "Poznań (city)", ""],
  "gdańsk": ["Gdańsk", "Gdańsk (city)", ""],
  "północy": ["północ", "north; midnight", "locative: na północy = in the north"],
  "morze": ["morze", "sea", "“Morze Bałtyckie” = the Baltic Sea"],
  "bałtyckie": ["bałtycki", "Baltic", "neuter form, matching “morze”"],
  "góry": ["góra", "mountain", "plural"],
  "tatry": ["Tatry", "the Tatra Mountains", ""],
  "prawie": ["prawie", "almost", ""],
  "milionów": ["milion", "million", "genitive plural, after 5+"],
  "ludzi": ["ludzie", "people", "genitive, after “milionów”"],

  "książka": ["książka", "book", ""],
  "czerwona": ["czerwony", "red", "feminine form"],
  "długopis": ["długopis", "pen", ""],
  "niebieski": ["niebieski", "blue", ""],
  "zeszyt": ["zeszyt", "notebook, exercise book", ""],
  "zielony": ["zielony", "green", ""],
  "świetnie": ["świetnie", "great, excellent", ""],
  "maria": ["Maria", "Maria (name)", ""],
  "skłodowska": ["Skłodowska", "Skłodowska (Marie Curie's Polish surname)", ""],
  "curie": ["Curie", "Curie", ""],
  "sławna": ["sławny", "famous", "feminine form"],
  "polka": ["Polka", "Polish woman", "a Polish man: Polak"],
  "duży": ["duży", "big", "masculine form"],
  "piękny": ["piękny", "beautiful", "masculine form"],
  "zamek": ["zamek", "castle; also: lock", ""],
  "flaga": ["flaga", "flag", ""],
  "biało": ["biało-", "white- (in compounds)", "“biało-czerwona” = white-and-red"],
  "górze": ["góra", "top; mountain", "locative: na górze = at the top"],
  "biały": ["biały", "white", ""],
  "kolor": ["kolor", "colour", ""],
  "dole": ["dół", "bottom", "locative: na dole = at the bottom"],
  "czerwony": ["czerwony", "red", ""],
  "godło": ["godło", "national emblem", ""],
  "orzeł": ["orzeł", "eagle", ""],
  "złotej": ["złoty", "golden", "feminine locative, matching “koronie”"],
  "koronie": ["korona", "crown", "locative, after “w”"],
  "czerwonym": ["czerwony", "red", "locative, matching “tle”"],
  "tle": ["tło", "background", "locative, after “na”"],
  "drugiego": ["drugi", "second", "genitive in dates: drugiego maja = on 2 May"],
  "maja": ["maj", "May", "genitive in dates"],
  "flagi": ["flaga", "flag", "genitive: Dzień Flagi = Flag Day"],
  "kibice": ["kibic", "fan, supporter", "plural"],
  "meczach": ["mecz", "match, game", "locative plural, after “na”"],
  "śpiewają": ["śpiewać", "to sing", "they sing"],
  "czerwoni": ["czerwony", "red", "plural for male people: biało-czerwoni = the white-and-reds (Polish team)"],

  "widzisz": ["widzieć", "to see", "you see"],
  "tego": ["ten", "this, that", "masculine accusative (living): tego chłopaka"],
  "chłopaka": ["chłopak", "boy, guy; boyfriend", "accusative (living things take the genitive form)"],
  "student": ["student", "student (male)", ""],
  "diego": ["Diego", "Diego (Spanish name)", ""],
  "hiszpanii": ["Hiszpania", "Spain", "genitive, after “z” (from)"],
  "madrytu": ["Madryt", "Madrid", "genitive, after “z” (from)"],
  "myślę": ["myśleć", "to think", "I think · “Myślę, że…” = I think that…"],
  "sympatyczny": ["sympatyczny", "nice, likeable", "not “sympathetic”!"],
  "zabawny": ["zabawny", "funny", ""],
  "dużo": ["dużo", "a lot, much; “za dużo” = too much", ""],
  "ha": ["ha", "ha (laughing)", ""],
  "ją": ["ona", "her", "accusative of “ona”"],
  "cierpliwa": ["cierpliwy", "patient", "feminine form"],
  "miła": ["miły", "nice, kind", "feminine form"],
  "cieszę": ["cieszyć się", "to be glad, to be happy", "I'm glad · “Cieszę się, że…” = I'm glad that…"],
  "mało": ["mało", "little, not much", ""],
  "spokojnie": ["spokojnie", "calmly; “Spokojnie!” = Don't worry! / Take it easy!", ""],
  "postępy": ["postęp", "progress", "“robić postępy” = to make progress"],
  "myślisz": ["myśleć", "to think", "you think"],
  "świętujemy": ["świętować", "to celebrate", "we celebrate"],
  "urodziny": ["urodziny", "birthday", "plural only"],
  "imieniny": ["imieniny", "name day", "plural only"],
  "święto": ["święto", "holiday, celebration, feast", ""],
  "imienia": ["imię", "first name", "genitive: święto imienia = the celebration of a name"],
  "każde": ["każdy", "every, each", "neuter form, matching “imię”"],
  "swój": ["swój", "its own, one's own", ""],
  "kalendarzu": ["kalendarz", "calendar", "locative, after “w”"],
  "dwudziestego": ["dwudziesty", "twentieth", "genitive in dates"],
  "szóstego": ["szósty", "sixth", "genitive in dates: dwudziestego szóstego lipca = on 26 July"],
  "lipca": ["lipiec", "July", "genitive in dates"],
  "przyjaciele": ["przyjaciel", "friend", "plural"],
  "składają": ["składać", "to fold; “składać życzenia” = to give your best wishes", "they give"],
  "wtedy": ["wtedy", "then, at that time", ""],
  "życzenia": ["życzenie", "wish", "plural: “składać życzenia” = to wish someone well"],
  "dają": ["dawać", "to give", "they give"],
  "prezent": ["prezent", "present, gift", ""],
  "wszystkiego": ["wszystko", "everything", "genitive: “Wszystkiego najlepszego!” = All the best!"],
  "najlepszego": ["najlepszy", "the best", "genitive: “Wszystkiego najlepszego!”"]
};
