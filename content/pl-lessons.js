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
  },
  {
    "id": "lekcja-5",
    "number": 5,
    "level": "A1",
    "title": "Kim jesteś z zawodu?",
    "titleEn": "What do you do for a living?",
    "goals": {
      "can": ["Say what you do and ask others about their work", "Say what you're interested in", "Talk about your family and their ages, up to 100"],
      "grammar": [["*być* + a job in the instrumental: *jestem lekarzem*", "instrumental"], ["*interesować się* + instrumental: *interesuję się muzyką*", "instrumental"], ["Ages: *rok, lata, lat*", "numbers-time"]]
    },
    "parts": [
      {
        "kind": "dialogue",
        "title": "Kto czym się zajmuje?",
        "titleEn": "Who does what?",
        "sentences": [
          ["Dzisiaj rozmawiamy o pracy. Diego, kim jesteś z zawodu?", "Today we're talking about work. Diego, what do you do for a living?", "Nauczycielka"],
          ["Jestem kucharzem. Pracuję w hiszpańskiej restauracji na Kazimierzu.", "I'm a cook. I work in a Spanish restaurant in Kazimierz.", "Diego"],
          ["Bardzo ciekawie! A ty, Yuki?", "How interesting! And you, Yuki?", "Nauczycielka"],
          ["Ja jeszcze nie pracuję. Jestem studentką, ale chcę być architektką.", "I don't work yet. I'm a student, but I want to be an architect.", "Yuki"],
          ["Lukas, ty jesteś informatykiem, prawda?", "Lukas, you work in IT, right?", "Nauczycielka"],
          ["Tak, jestem programistą. A moja dziewczyna, Marta, jest dziennikarką.", "Yes, I'm a programmer. And my girlfriend, Marta, is a journalist.", "Lukas"],
          ["A czym się interesujesz w wolnym czasie?", "And what are you interested in, in your free time?", "Nauczycielka"],
          ["Interesuję się fotografią i historią.", "I'm interested in photography and history.", "Lukas"]
        ]
      },
      {
        "kind": "dialogue",
        "title": "Rodzina Diega",
        "titleEn": "Diego's family",
        "sentences": [
          ["Diego, kto to jest na zdjęciu?", "Diego, who's that in the photo?", "Sofia"],
          ["To moja rodzina. To mój tata. Ma pięćdziesiąt osiem lat i jest taksówkarzem.", "That's my family. That's my dad. He's fifty-eight and he's a taxi driver.", "Diego"],
          ["A ta pani?", "And this lady?", "Sofia"],
          ["To moja mama. Ma pięćdziesiąt cztery lata. Jest pielęgniarką.", "That's my mum. She's fifty-four. She's a nurse.", "Diego"],
          ["Masz rodzeństwo?", "Do you have any brothers or sisters?", "Sofia"],
          ["Tak, mam dwóch braci i jedną siostrę. A moja babcia ma prawie sto lat!", "Yes, I have two brothers and one sister. And my grandma is almost a hundred!", "Diego"],
          ["Sto lat! W Polsce to piosenka na urodziny.", "A hundred years! In Poland that's the birthday song.", "Sofia"]
        ]
      },
      {
        "kind": "culture",
        "title": "„Sto lat” i Dzień Matki",
        "titleEn": "“Sto lat” and Mother's Day",
        "sentences": [
          ["Na urodziny i imieniny Polacy śpiewają piosenkę „Sto lat”.", "On birthdays and name days, Poles sing the song “Sto lat” (A hundred years)."],
          ["W tej piosence życzymy komuś stu lat życia.", "In this song we wish someone a hundred years of life."],
          ["Dzień Matki jest w Polsce dwudziestego szóstego maja, a Dzień Ojca dwudziestego trzeciego czerwca.", "In Poland, Mother's Day is on the 26th of May, and Father's Day on the 23rd of June."],
          ["Dzieci dają wtedy rodzicom kwiaty, laurki albo małe prezenty.", "Children then give their parents flowers, homemade cards or small presents."],
          ["Jest też Dzień Babci, dwudziestego pierwszego stycznia, a Dzień Dziadka dzień później.", "There's also Grandmother's Day, on the 21st of January, and Grandfather's Day a day later."]
        ]
      }
    ],
    "phrases": [
      ["Kim jesteś z zawodu?", "What do you do for a living?"],
      ["Gdzie pracujesz?", "Where do you work?"],
      ["Jestem lekarzem / lekarką.", "I'm a doctor (man / woman)."],
      ["Jestem nauczycielem / nauczycielką.", "I'm a teacher (man / woman)."],
      ["Czym się interesujesz?", "What are you interested in?"],
      ["Interesuję się sportem / muzyką.", "I'm interested in sport / music."],
      ["Ile lat ma twoja mama?", "How old is your mum?"],
      ["Ma pięćdziesiąt lat.", "She's fifty."],
      ["dwadzieścia, trzydzieści, czterdzieści, pięćdziesiąt", "20, 30, 40, 50"],
      ["sześćdziesiąt, siedemdziesiąt, osiemdziesiąt, dziewięćdziesiąt, sto", "60, 70, 80, 90, 100"],
      ["Sto lat!", "Happy birthday! (literally: a hundred years)"]
    ],
    "exercises": {
      "questions": [
        ["Kim jest Diego z zawodu?", "What does Diego do?", "Jest kucharzem."],
        ["Kim chce być Yuki?", "What does Yuki want to be?", "Architektką."],
        ["Czym interesuje się Lukas?", "What is Lukas interested in?", "Fotografią i historią."],
        ["Ile lat ma mama Diega?", "How old is Diego's mum?", "Pięćdziesiąt cztery lata."],
        ["Kiedy jest Dzień Matki w Polsce?", "When is Mother's Day in Poland?", "Dwudziestego szóstego maja."]
      ],
      "gaps": [
        ["Diego jest ___. (kucharz)", "kucharzem", "jest + job → instrumental, masculine: -em"],
        ["Mama jest ___. (pielęgniarka)", "pielęgniarką", "instrumental, feminine: -ą"],
        ["Lukas jest ___. (programista)", "programistą", "masculine nouns in -a also take -ą"],
        ["Interesuję się ___. (fotografia)", "fotografią", "interesować się + instrumental"],
        ["Mama ma pięćdziesiąt cztery ___.", "lata", "rok / lata / lat → after 54"]
      ]
    }
  },
  {
    "id": "lekcja-6",
    "number": 6,
    "level": "A1",
    "title": "Co robisz w wolnym czasie?",
    "titleEn": "What do you do in your free time?",
    "goals": {
      "can": ["Talk about hobbies and sport", "Say what you like, don't like and prefer doing", "Say whose something is: mój, twój"],
      "grammar": [["The three present-tense patterns: *gram, grasz · rysuję, rysujesz · lubię, lubisz*", "present-tense"], ["*grać w* (a game) and *grać na* (an instrument)", "locative"], ["*mój, twój*", "possessives"]]
    },
    "parts": [
      {
        "kind": "dialogue",
        "title": "Po lekcji",
        "titleEn": "After class",
        "sentences": [
          ["Lukas, co robisz w weekend?", "Lukas, what are you doing at the weekend?", "Diego"],
          ["W sobotę gram w piłkę nożną z kolegami z pracy. Grasz z nami?", "On Saturday I'm playing football with friends from work. Do you want to play with us?", "Lukas"],
          ["Chętnie, ale nie gram zbyt dobrze. Wolę koszykówkę.", "I'd love to, but I don't play very well. I prefer basketball.", "Diego"],
          ["Nie szkodzi! Gramy dla przyjemności.", "Never mind! We play for fun.", "Lukas"],
          ["A ja w sobotę jadę z Anią do Wieliczki. W niedzielę chyba tylko czytam i odpoczywam.", "And on Saturday I'm going to Wieliczka with Ania. On Sunday I'll probably just read and relax.", "Sofia"],
          ["Ja w niedzielę rysuję. Uwielbiam rysować stare kamienice w Krakowie.", "On Sunday I draw. I love drawing the old townhouses in Kraków.", "Yuki"],
          ["Naprawdę? Pokaż!", "Really? Show us!", "Diego"],
          ["Proszę, to mój szkicownik.", "Here you are, this is my sketchbook.", "Yuki"],
          ["Wow, twoje rysunki są świetne!", "Wow, your drawings are great!", "Diego"],
          ["Ty też grasz na jakimś instrumencie, Sofia?", "Do you play an instrument too, Sofia?", "Lukas"],
          ["Tak, gram na gitarze. Ale tylko w domu, dla siebie.", "Yes, I play the guitar. But only at home, for myself.", "Sofia"]
        ]
      },
      {
        "kind": "culture",
        "title": "Sport w Polsce",
        "titleEn": "Sport in Poland",
        "sentences": [
          ["Najpopularniejszy sport w Polsce to piłka nożna.", "The most popular sport in Poland is football."],
          ["Bardzo popularna jest też siatkówka. Polska reprezentacja była już kilka razy mistrzem świata.", "Volleyball is very popular too. The Polish team has already been world champion several times."],
          ["Zimą Polacy oglądają skoki narciarskie i kibicują swoim skoczkom.", "In winter, Poles watch ski jumping and cheer for their jumpers."],
          ["Dużo ludzi jeździ na rowerze, biega w parku albo chodzi po górach.", "Lots of people cycle, run in the park or go hiking in the mountains."]
        ]
      }
    ],
    "phrases": [
      ["Co robisz w wolnym czasie?", "What do you do in your free time?"],
      ["Lubię czytać / gotować / tańczyć.", "I like reading / cooking / dancing."],
      ["Nie lubię biegać.", "I don't like running."],
      ["Wolę…", "I prefer…"],
      ["grać w piłkę nożną / w tenisa / w szachy", "to play football / tennis / chess"],
      ["grać na gitarze / na pianinie", "to play the guitar / the piano"],
      ["jeździć na rowerze / na nartach", "to cycle / to ski"],
      ["chodzić po górach", "to go hiking"],
      ["Nie szkodzi!", "Never mind! / No problem!"],
      ["To mój / twój…", "This is my / your…"]
    ],
    "exercises": {
      "questions": [
        ["Co robi Lukas w sobotę?", "What is Lukas doing on Saturday?", "Gra w piłkę nożną z kolegami z pracy."],
        ["Co woli Diego?", "What does Diego prefer?", "Koszykówkę."],
        ["Co lubi rysować Yuki?", "What does Yuki like drawing?", "Stare kamienice w Krakowie."],
        ["Na czym gra Sofia?", "What instrument does Sofia play?", "Na gitarze."],
        ["Jaki sport jest w Polsce najpopularniejszy?", "Which sport is the most popular in Poland?", "Piłka nożna."]
      ],
      "gaps": [
        ["W sobotę ___ w piłkę nożną. (grać → ja)", "gram", "-m, -sz verbs: gram, grasz"],
        ["Diego, ___ z nami? (grać → ty)", "grasz", "grać → ty"],
        ["Yuki ___ stare kamienice. (rysować → ona)", "rysuje", "-ować verbs: rysuję, rysujesz, rysuje"],
        ["Sofia gra na ___. (gitara)", "gitarze", "grać na + locative"],
        ["To jest ___ szkicownik. (my)", "mój", "mój / moja / moje → szkicownik is masculine"]
      ]
    }
  },
  {
    "id": "lekcja-7",
    "number": 7,
    "level": "A1",
    "title": "Ile to kosztuje?",
    "titleEn": "How much is it?",
    "goals": {
      "can": ["Buy things at a kiosk or in a shop", "Ask about prices and understand them", "Change money and find a cash machine", "Count from 100 to 1000"],
      "grammar": [["The accusative after *poproszę, kupuję, mam*", "accusative"], ["*złoty, złote, złotych* after numbers", "numbers-time"], ["Numbers 100–1000", "numbers"]]
    },
    "parts": [
      {
        "kind": "dialogue",
        "title": "W kiosku",
        "titleEn": "At the kiosk",
        "sentences": [
          ["Dzień dobry. Poproszę bilet tramwajowy.", "Good morning. A tram ticket, please.", "Sofia"],
          ["Normalny czy ulgowy?", "Full price or reduced?", "Sprzedawczyni"],
          ["Ulgowy. Jestem studentką, mam legitymację.", "Reduced. I'm a student, I have a student card.", "Sofia"],
          ["Proszę bardzo. Coś jeszcze?", "Here you are. Anything else?", "Sprzedawczyni"],
          ["Tak, jeszcze wodę i gazetę.", "Yes, a water and a newspaper too.", "Sofia"],
          ["Razem dwanaście złotych pięćdziesiąt groszy.", "Twelve złoty fifty altogether.", "Sprzedawczyni"],
          ["Mogę zapłacić kartą?", "Can I pay by card?", "Sofia"],
          ["Oczywiście. Proszę przyłożyć kartę.", "Of course. Please tap your card.", "Sprzedawczyni"]
        ]
      },
      {
        "kind": "dialogue",
        "title": "W kantorze",
        "titleEn": "At the exchange office",
        "sentences": [
          ["Dzień dobry. Chciałbym wymienić euro na złote.", "Good morning. I'd like to change euros into złoty.", "Lukas"],
          ["Ile pan chce wymienić?", "How much would you like to change?", "Kasjerka"],
          ["Dwieście euro. Jaki jest dzisiaj kurs?", "Two hundred euros. What's today's rate?", "Lukas"],
          ["Za dwieście euro dostaje pan osiemset sześćdziesiąt złotych.", "For two hundred euros you get eight hundred and sixty złoty.", "Kasjerka"],
          ["Dobrze. A gdzie jest najbliższy bankomat?", "Fine. And where's the nearest cash machine?", "Lukas"],
          ["Obok, przy banku, sto metrów stąd.", "Next door, by the bank, a hundred metres from here.", "Kasjerka"]
        ]
      },
      {
        "kind": "culture",
        "title": "Złoty i grosz",
        "titleEn": "The złoty and the grosz",
        "sentences": [
          ["W Polsce płacimy złotymi, nie euro.", "In Poland we pay in złoty, not euros."],
          ["Jeden złoty to sto groszy.", "One złoty is a hundred grosze."],
          ["Na banknotach są polscy królowie i książęta, na przykład Mieszko Pierwszy i Kazimierz Wielki.", "The banknotes show Polish kings and princes, for example Mieszko the First and Casimir the Great."],
          ["Największy banknot to pięćset złotych.", "The largest banknote is five hundred złoty."],
          ["W sklepach prawie zawsze można zapłacić kartą albo telefonem.", "In shops you can almost always pay by card or by phone."]
        ]
      }
    ],
    "phrases": [
      ["Ile to kosztuje?", "How much is it?"],
      ["Ile kosztuje ten / ta / to…?", "How much is this…? (masculine / feminine / neuter)"],
      ["Poproszę bilet / wodę / gazetę.", "A ticket / a water / a newspaper, please."],
      ["Gotówką czy kartą?", "Cash or card?"],
      ["Mogę zapłacić kartą?", "Can I pay by card?"],
      ["Razem…", "Altogether…"],
      ["Chciałbym / Chciałabym wymienić pieniądze.", "I'd like to change some money (man / woman)."],
      ["Gdzie jest bankomat?", "Where is a cash machine?"],
      ["sto, dwieście, trzysta, czterysta, pięćset", "100, 200, 300, 400, 500"],
      ["sześćset, siedemset, osiemset, dziewięćset, tysiąc", "600, 700, 800, 900, 1000"],
      ["jeden złoty, dwa złote, pięć złotych", "1 złoty, 2 złoty, 5 złoty"]
    ],
    "exercises": {
      "questions": [
        ["Jaki bilet kupuje Sofia?", "What ticket does Sofia buy?", "Ulgowy bilet tramwajowy."],
        ["Ile Sofia płaci razem?", "How much does Sofia pay altogether?", "Dwanaście złotych pięćdziesiąt groszy."],
        ["Ile euro wymienia Lukas?", "How many euros does Lukas change?", "Dwieście euro."],
        ["Ile złotych dostaje Lukas?", "How many złoty does Lukas get?", "Osiemset sześćdziesiąt złotych."],
        ["Ile groszy ma jeden złoty?", "How many grosze are in one złoty?", "Sto groszy."]
      ],
      "gaps": [
        ["Poproszę ___. (woda)", "wodę", "accusative, feminine: -a → -ę"],
        ["Poproszę ___. (gazeta)", "gazetę", "accusative, feminine: -a → -ę"],
        ["Poproszę bilet ___. (tramwajowy)", "tramwajowy", "masculine thing: accusative = nominative"],
        ["To kosztuje pięć ___. (złoty)", "złotych", "after 5 and up → genitive plural"],
        ["To kosztuje dwa ___. (złoty)", "złote", "after 2, 3, 4 → nominative plural"]
      ]
    }
  },
  {
    "id": "lekcja-8",
    "number": 8,
    "level": "A1",
    "title": "Smacznego!",
    "titleEn": "Enjoy your meal!",
    "goals": {
      "can": ["Order food in a canteen or milk bar", "Say what you feel like eating", "Say what something comes with: z ziemniakami, z owocami"],
      "grammar": [["*z* + instrumental plural: *z ziemniakami*", "instrumental"], ["Adjectives from nouns: *pomidor → zupa pomidorowa*", "adjectives"], ["*mieć ochotę na* + accusative", "accusative"]]
    },
    "parts": [
      {
        "kind": "dialogue",
        "title": "W barze mlecznym",
        "titleEn": "At the milk bar",
        "sentences": [
          ["Jestem bardzo głodny. Co tu jest dobre?", "I'm really hungry. What's good here?", "Diego"],
          ["Ania mówi, że pierogi i naleśniki. Na co masz ochotę?", "Ania says the pierogi and the pancakes. What do you feel like?", "Sofia"],
          ["Na zupę i coś ciepłego.", "Some soup and something warm.", "Diego"],
          ["Dzień dobry, słucham?", "Hello, what would you like?", "Pani w barze"],
          ["Poproszę zupę pomidorową z makaronem i kotlet z ziemniakami i surówką.", "Tomato soup with noodles, please, and a cutlet with potatoes and salad.", "Diego"],
          ["A dla pani?", "And for you?", "Pani w barze"],
          ["Dla mnie naleśniki z serem i truskawkami. I kompot jabłkowy.", "Pancakes with cheese and strawberries for me. And an apple kompot.", "Sofia"],
          ["Razem trzydzieści dwa złote. Proszę poczekać, zawołam.", "Thirty-two złoty altogether. Please wait, I'll call you.", "Pani w barze"],
          ["Mmm, ta zupa pomidorowa jest pyszna! I bardzo tania.", "Mmm, this tomato soup is delicious! And really cheap.", "Diego"],
          ["Smacznego!", "Enjoy your meal!", "Sofia"],
          ["Dziękuję, nawzajem!", "Thanks, you too!", "Diego"]
        ]
      },
      {
        "kind": "culture",
        "title": "Bar mleczny",
        "titleEn": "The milk bar",
        "sentences": [
          ["Bar mleczny to tania, prosta restauracja.", "A milk bar is a cheap, simple restaurant."],
          ["Nazwa jest stara: na początku były tam głównie dania z mleka i jajek.", "The name is old: at first they served mainly dishes made from milk and eggs."],
          ["Dzisiaj można tam zjeść pierogi, naleśniki, zupy i kotlety.", "Today you can eat pierogi, pancakes, soups and cutlets there."],
          ["Studenci i turyści lubią bary mleczne, bo jedzenie jest smaczne i niedrogie.", "Students and tourists like milk bars because the food is tasty and inexpensive."],
          ["Pamiętaj: w barze mlecznym zamawiasz i płacisz przy kasie, a potem czekasz na jedzenie.", "Remember: in a milk bar you order and pay at the till, then wait for your food."]
        ]
      }
    ],
    "phrases": [
      ["Smacznego!", "Enjoy your meal!"],
      ["Nawzajem!", "You too!"],
      ["Jestem głodny / głodna.", "I'm hungry (man / woman)."],
      ["Na co masz ochotę?", "What do you feel like?"],
      ["Mam ochotę na zupę.", "I feel like some soup."],
      ["Dla mnie…", "For me…"],
      ["śniadanie, obiad, kolacja", "breakfast, lunch (the main meal), dinner"],
      ["zupa pomidorowa / ogórkowa", "tomato / cucumber soup"],
      ["sok jabłkowy / pomarańczowy", "apple / orange juice"],
      ["z ziemniakami, z owocami, z truskawkami", "with potatoes, with fruit, with strawberries"]
    ],
    "exercises": {
      "questions": [
        ["Na co ma ochotę Diego?", "What does Diego feel like?", "Na zupę i coś ciepłego."],
        ["Co zamawia Sofia?", "What does Sofia order?", "Naleśniki z serem i truskawkami i kompot jabłkowy."],
        ["Ile płacą razem?", "How much do they pay altogether?", "Trzydzieści dwa złote."],
        ["Co mówimy przed jedzeniem?", "What do we say before eating?", "Smacznego!"],
        ["Gdzie płacisz w barze mlecznym?", "Where do you pay in a milk bar?", "Przy kasie."]
      ],
      "gaps": [
        ["Kotlet z ___. (ziemniaki)", "ziemniakami", "z + instrumental plural: -ami"],
        ["Naleśniki z ___. (truskawki)", "truskawkami", "z + instrumental plural: -ami"],
        ["Mam ochotę na ___. (zupa)", "zupę", "mieć ochotę na + accusative"],
        ["Zupa z pomidorów to zupa ___.", "pomidorowa", "pomidor → pomidorowy; zupa is feminine"],
        ["Kompot z jabłek to kompot ___.", "jabłkowy", "jabłko → jabłkowy; kompot is masculine"]
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
  "najlepszego": ["najlepszy", "the best", "genitive: “Wszystkiego najlepszego!”"],

  "rozmawiamy": ["rozmawiać", "to talk, to have a conversation", "we talk · “rozmawiać o” + locative"],
  "kim": ["kto", "who", "instrumental: “Kim jesteś z zawodu?” = What do you do?"],
  "zawodu": ["zawód", "profession, job", "genitive: “z zawodu” = by profession"],
  "hiszpańskiej": ["hiszpański", "Spanish", "feminine locative, matching “restauracji”"],
  "ciekawie": ["ciekawie", "interestingly; “Bardzo ciekawie!” = How interesting!", ""],
  "chcę": ["chcieć", "to want", "I want"],
  "być": ["być", "to be", ""],
  "architektką": ["architektka", "architect (female)", "instrumental: chcę być architektką"],
  "informatykiem": ["informatyk", "IT specialist, computer scientist", "instrumental: jest + job"],
  "programistą": ["programista", "programmer", "masculine noun in -a; instrumental -ą"],
  "dziewczyna": ["dziewczyna", "girl; girlfriend", ""],
  "dziennikarką": ["dziennikarka", "journalist (female)", "instrumental: jest + job"],
  "interesujesz": ["interesować się", "to be interested in", "you're interested · + instrumental"],
  "interesuję": ["interesować się", "to be interested in", "I'm interested · + instrumental"],
  "fotografią": ["fotografia", "photography", "instrumental, after “interesować się”"],
  "historią": ["historia", "history", "instrumental, after “interesować się”"],
  "zdjęciu": ["zdjęcie", "photo", "locative: na zdjęciu = in the photo"],
  "pięćdziesiąt": ["pięćdziesiąt", "fifty", ""],
  "taksówkarzem": ["taksówkarz", "taxi driver", "instrumental: jest + job"],
  "pielęgniarką": ["pielęgniarka", "nurse (female)", "instrumental: jest + job"],
  "dwóch": ["dwa", "two", "form used with male people (and in the genitive): dwóch braci"],
  "braci": ["brat", "brother", "genitive plural, after “dwóch”"],
  "babcia": ["babcia", "grandma", ""],
  "sto": ["sto", "a hundred", ""],
  "piosenka": ["piosenka", "song", ""],
  "polacy": ["Polak", "Pole, Polish man", "plural: Polacy = Poles"],
  "piosenkę": ["piosenka", "song", "accusative (the object)"],
  "tej": ["ten", "this", "feminine locative: w tej piosence"],
  "piosence": ["piosenka", "song", "locative, after “w”"],
  "życzymy": ["życzyć", "to wish", "we wish · życzyć + dative (to whom) + genitive (what)"],
  "komuś": ["ktoś", "someone", "dative: (to) someone"],
  "stu": ["sto", "a hundred", "genitive: życzymy stu lat"],
  "życia": ["życie", "life", "genitive: stu lat życia = a hundred years of life"],
  "matki": ["matka", "mother", "genitive: Dzień Matki = Mother's Day"],
  "ojca": ["ojciec", "father", "genitive: Dzień Ojca = Father's Day"],
  "trzeciego": ["trzeci", "third", "genitive in dates: dwudziestego trzeciego = on the 23rd"],
  "czerwca": ["czerwiec", "June", "genitive in dates"],
  "dzieci": ["dziecko", "child", "plural: dzieci = children"],
  "rodzicom": ["rodzice", "parents", "dative: (to) the parents"],
  "laurki": ["laurka", "homemade greeting card (often drawn by a child)", "plural"],
  "prezenty": ["prezent", "present, gift", "plural"],
  "babci": ["babcia", "grandma", "genitive: Dzień Babci = Grandmother's Day"],
  "pierwszego": ["pierwszy", "first", "genitive in dates: dwudziestego pierwszego = on the 21st"],
  "stycznia": ["styczeń", "January", "genitive in dates"],
  "dziadka": ["dziadek", "grandpa", "genitive: Dzień Dziadka = Grandfather's Day"],
  "później": ["później", "later", "“dzień później” = a day later"],

  "piłkę": ["piłka", "ball", "accusative: “grać w piłkę nożną” = to play football"],
  "nożną": ["nożny", "foot (adjective)", "“piłka nożna” = football"],
  "kolegami": ["kolega", "friend, colleague", "instrumental plural, after “z” (with)"],
  "nami": ["my", "us", "instrumental: z nami = with us"],
  "zbyt": ["zbyt", "too; “nie zbyt dobrze” = not very well", ""],
  "koszykówkę": ["koszykówka", "basketball", "accusative (the object of “wolę”)"],
  "szkodzi": ["szkodzić", "to harm", "“Nie szkodzi!” = Never mind!"],
  "gramy": ["grać", "to play", "we play"],
  "przyjemności": ["przyjemność", "pleasure", "genitive: dla przyjemności = for fun"],
  "jadę": ["jechać", "to go (by vehicle)", "I'm going · one trip, now"],
  "anią": ["Ania", "Ania", "instrumental: z Anią = with Ania"],
  "wieliczki": ["Wieliczka", "Wieliczka (town near Kraków, famous for its salt mine)", "genitive, after “do”"],
  "niedzielę": ["niedziela", "Sunday", "accusative: w niedzielę = on Sunday"],
  "chyba": ["chyba", "probably, I think", ""],
  "czytam": ["czytać", "to read", "I read"],
  "odpoczywam": ["odpoczywać", "to rest, to relax", "I relax"],
  "rysuję": ["rysować", "to draw", "I draw"],
  "rysować": ["rysować", "to draw", ""],
  "kamienice": ["kamienica", "townhouse, tenement (old city building)", "plural"],
  "pokaż": ["pokazać", "to show", "command for “ty”: show (me)!"],
  "szkicownik": ["szkicownik", "sketchbook", ""],
  "wow": ["wow", "wow", ""],
  "twoje": ["twój", "your", "plural (not male people) / neuter form"],
  "rysunki": ["rysunek", "drawing", "plural"],
  "świetne": ["świetny", "great, excellent", "plural form (not male people)"],
  "jakimś": ["jakiś", "some, any", "locative: na jakimś instrumencie = on some instrument"],
  "instrumencie": ["instrument", "instrument", "locative, after “grać na”"],
  "siebie": ["siebie", "oneself; “dla siebie” = for myself / yourself…", ""],
  "najpopularniejszy": ["najpopularniejszy", "the most popular", "from “popularny”"],
  "piłka": ["piłka", "ball; “piłka nożna” = football", ""],
  "nożna": ["nożny", "foot (adjective)", "“piłka nożna” = football"],
  "popularna": ["popularny", "popular", "feminine form"],
  "siatkówka": ["siatkówka", "volleyball", ""],
  "reprezentacja": ["reprezentacja", "national team", ""],
  "była": ["być", "to be", "past, feminine: she / it was"],
  "kilka": ["kilka", "a few, several", "“kilka razy” = several times"],
  "mistrzem": ["mistrz", "champion, master", "instrumental: była mistrzem świata = was world champion"],
  "świata": ["świat", "world", "genitive: mistrz świata = world champion"],
  "zimą": ["zima", "winter", "instrumental: zimą = in winter"],
  "oglądają": ["oglądać", "to watch", "they watch"],
  "skoki": ["skok", "jump", "plural: skoki narciarskie = ski jumping"],
  "narciarskie": ["narciarski", "ski (adjective)", "plural form"],
  "kibicują": ["kibicować", "to cheer for, to support (a team)", "they cheer · + dative"],
  "swoim": ["swój", "their own, one's own", "dative plural: swoim skoczkom"],
  "skoczkom": ["skoczek", "jumper", "dative plural, after “kibicować”"],
  "jeździ": ["jeździć", "to ride, to go (by vehicle, regularly)", "he / she rides"],
  "biega": ["biegać", "to run, to go running", "he / she runs"],
  "chodzi": ["chodzić", "to walk, to go (on foot, regularly)", "he / she goes · “chodzić po górach” = to go hiking"],
  "górach": ["góra", "mountain", "locative plural: po górach = around the mountains"],

  "bilet": ["bilet", "ticket", ""],
  "tramwajowy": ["tramwajowy", "tram (adjective)", "bilet tramwajowy = tram ticket"],
  "normalny": ["normalny", "normal; full-price (ticket)", ""],
  "ulgowy": ["ulgowy", "reduced (ticket), concession", ""],
  "legitymację": ["legitymacja", "ID card (student, pensioner…)", "accusative (the object of “mam”)"],
  "wodę": ["woda", "water", "accusative (the object)"],
  "gazetę": ["gazeta", "newspaper", "accusative (the object)"],
  "groszy": ["grosz", "grosz (1/100 of a złoty)", "genitive plural, after 5+"],
  "oczywiście": ["oczywiście", "of course", ""],
  "przyłożyć": ["przyłożyć", "to put against; to tap (a card)", ""],
  "kartę": ["karta", "card", "accusative (the object)"],
  "chciałbym": ["chcieć", "to want", "“chciałbym” = I'd like (said by a man; a woman says “chciałabym”)"],
  "wymienić": ["wymienić", "to change, to exchange", ""],
  "euro": ["euro", "euro", "never changes"],
  "złote": ["złoty", "złoty (Polish currency)", "plural, after 2, 3, 4 (and in “wymienić na złote”)"],
  "dwieście": ["dwieście", "two hundred", ""],
  "kurs": ["kurs", "exchange rate; course", ""],
  "osiemset": ["osiemset", "eight hundred", ""],
  "sześćdziesiąt": ["sześćdziesiąt", "sixty", ""],
  "najbliższy": ["najbliższy", "the nearest, the closest", "from “bliski” (near)"],
  "bankomat": ["bankomat", "cash machine, ATM", ""],
  "obok": ["obok", "next door, nearby; next to (+ genitive)", ""],
  "banku": ["bank", "bank", "locative, after “przy”"],
  "metrów": ["metr", "metre", "genitive plural, after a number"],
  "stąd": ["stąd", "from here", ""],
  "płacimy": ["płacić", "to pay", "we pay · paying in a currency takes the instrumental"],
  "złotymi": ["złoty", "złoty (currency)", "instrumental plural: płacimy złotymi = we pay in złoty"],
  "jeden": ["jeden", "one", "masculine form"],
  "złoty": ["złoty", "złoty (Polish currency); also: golden", ""],
  "banknotach": ["banknot", "banknote", "locative plural, after “na”"],
  "polscy": ["polski", "Polish", "plural for male people"],
  "królowie": ["król", "king", "plural"],
  "książęta": ["książę", "prince, duke", "plural"],
  "mieszko": ["Mieszko", "Mieszko (Poland's first historical ruler)", ""],
  "kazimierz": ["Kazimierz", "Kazimierz (Casimir)", "“Kazimierz Wielki” = Casimir the Great"],
  "wielki": ["wielki", "great, big", ""],
  "największy": ["największy", "the biggest, the largest", "from “duży” (big)"],
  "banknot": ["banknot", "banknote", ""],
  "pięćset": ["pięćset", "five hundred", ""],
  "sklepach": ["sklep", "shop", "locative plural, after “w”"],
  "można": ["można", "you can, it's possible", "used with an infinitive: można zapłacić"],
  "telefonem": ["telefon", "phone", "instrumental: paying by phone"],

  "naleśniki": ["naleśnik", "pancake, crêpe", "plural"],
  "zupę": ["zupa", "soup", "accusative, after “mieć ochotę na” / “poproszę”"],
  "ciepłego": ["ciepły", "warm", "genitive: coś ciepłego = something warm"],
  "słucham": ["słuchać", "to listen", "“Słucham?” = Yes? / What can I get you? / Pardon?"],
  "pomidorową": ["pomidorowy", "tomato (adjective)", "feminine accusative: zupę pomidorową"],
  "makaronem": ["makaron", "pasta, noodles", "instrumental, after “z” (with)"],
  "kotlet": ["kotlet", "cutlet, chop", ""],
  "surówką": ["surówka", "raw vegetable salad (side dish)", "instrumental, after “z” (with)"],
  "truskawkami": ["truskawka", "strawberry", "instrumental plural, after “z” (with)"],
  "jabłkowy": ["jabłkowy", "apple (adjective)", "from “jabłko”"],
  "poczekać": ["poczekać", "to wait", "perfective partner of “czekać”"],
  "zawołam": ["zawołać", "to call (out)", "I'll call · perfective, so it means the future"],
  "zupa": ["zupa", "soup", ""],
  "pomidorowa": ["pomidorowy", "tomato (adjective)", "feminine form: zupa pomidorowa"],
  "pyszna": ["pyszny", "delicious", "feminine form"],
  "tania": ["tani", "cheap", "feminine form"],
  "nawzajem": ["nawzajem", "you too, likewise", ""],
  "bar": ["bar", "bar, snack bar", "“bar mleczny” = milk bar"],
  "mleczny": ["mleczny", "milk (adjective)", ""],
  "prosta": ["prosty", "simple; straight", "feminine form"],
  "restauracja": ["restauracja", "restaurant", ""],
  "nazwa": ["nazwa", "name (of a thing or place)", ""],
  "stara": ["stary", "old", "feminine form"],
  "początku": ["początek", "beginning", "locative: na początku = at first"],
  "były": ["być", "to be", "past, plural (not male people): there were"],
  "tam": ["tam", "there", ""],
  "głównie": ["głównie", "mainly", ""],
  "dania": ["danie", "dish, course", "plural"],
  "mleka": ["mleko", "milk", "genitive, after “z” (from)"],
  "jajek": ["jajko", "egg", "genitive plural, after “z” (from)"],
  "zjeść": ["zjeść", "to eat (up)", "perfective partner of “jeść”"],
  "zupy": ["zupa", "soup", "plural"],
  "kotlety": ["kotlet", "cutlet, chop", "plural"],
  "studenci": ["student", "student", "plural for male people (or mixed groups)"],
  "turyści": ["turysta", "tourist", "plural"],
  "lubią": ["lubić", "to like", "they like"],
  "bary": ["bar", "bar", "plural"],
  "mleczne": ["mleczny", "milk (adjective)", "plural form"],
  "jedzenie": ["jedzenie", "food", ""],
  "smaczne": ["smaczny", "tasty", "neuter form, matching “jedzenie”"],
  "niedrogie": ["niedrogi", "inexpensive", "neuter form"],
  "pamiętaj": ["pamiętać", "to remember", "command for “ty”: remember!"],
  "barze": ["bar", "bar", "locative, after “w”"],
  "mlecznym": ["mleczny", "milk (adjective)", "locative, matching “barze”"],
  "zamawiasz": ["zamawiać", "to order", "you order"],
  "płacisz": ["płacić", "to pay", "you pay"],
  "kasie": ["kasa", "till, checkout, cash desk", "locative, after “przy”"],
  "czekasz": ["czekać", "to wait", "you wait · “czekać na” + accusative"]
};
