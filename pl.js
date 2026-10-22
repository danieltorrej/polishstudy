// Polish content for Lingo Cards: starter cards, reading texts and glossary.
// Edit by hand, or replace with the file from "Export content file" in editor mode (?editor).
//
// cards:    [word, meaning, example sentence, sentence translation]. Wrap the word inside the
//           sentence in *asterisks* to highlight it, so inflected forms can be marked too.
// texts:    { id, title, titleEn, sentences: [[sentence, translation], ...] }
// glossary: word form as it appears in texts (lowercase) -> [dictionary form, meaning, note]
window.CONTENT ??= {};
CONTENT.pl = {
  "name": "Polish",
  "cards": [
    ["cześć", "hi / bye (informal)", "*Cześć*, jak leci?", "Hi, how's it going?"],
    ["dzień dobry", "good morning / hello (formal)", "*Dzień dobry*, poproszę kawę.", "Good morning, a coffee please."],
    ["dziękuję", "thank you", "*Dziękuję* za pomoc.", "Thank you for the help."],
    ["proszę", "please / here you go", "Jedną kawę, *proszę*.", "One coffee, please."],
    ["przepraszam", "sorry / excuse me", "*Przepraszam*, gdzie jest dworzec?", "Excuse me, where is the station?"],
    ["tak", "yes", "*Tak*, mówię trochę po polsku.", "Yes, I speak a little Polish."],
    ["nie", "no", "*Nie*, dziękuję.", "No, thank you."],
    ["woda", "water", "Poproszę *wodę* niegazowaną.", "Still water, please."],
    ["chleb", "bread", "Kupuję *chleb* w piekarni.", "I buy bread at the bakery."],
    ["dom", "house / home", "Jestem w *domu*.", "I'm at home."],
    ["kot", "cat", "Mój *kot* śpi na kanapie.", "My cat is sleeping on the sofa."],
    ["pies", "dog", "Mam małego *psa*.", "I have a small dog."],
    ["jeść", "to eat", "Lubię *jeść* pierogi.", "I like eating pierogi."],
    ["mówić", "to speak", "Czy możesz *mówić* wolniej?", "Can you speak more slowly?"],
    ["Jak się masz?", "How are you?", "Cześć, Ania! *Jak się masz?*", "Hi, Ania! How are you?"],
    ["Nie rozumiem.", "I don't understand.", "Przepraszam, *nie rozumiem*.", "Sorry, I don't understand."],
    ["Gdzie jest łazienka?", "Where is the bathroom?", "Przepraszam, *gdzie jest łazienka*?", "Excuse me, where is the bathroom?"]
  ],
  "texts": [
    {
      "id": "poranek-w-krakowie",
      "title": "Poranek w Krakowie",
      "titleEn": "A morning in Kraków",
      "sentences": [
        ["Mam na imię Ania i mieszkam w Krakowie.", "My name is Ania and I live in Kraków."],
        ["Każdego ranka piję kawę w małej kawiarni.", "Every morning I drink coffee in a small café."],
        ["Kelner jest bardzo miły.", "The waiter is very nice."],
        ["Zamawiam kawę i świeży chleb z masłem.", "I order coffee and fresh bread with butter."],
        ["Potem idę do pracy.", "Then I go to work."],
        ["Mój pies czeka na mnie w domu.", "My dog waits for me at home."],
        ["Wieczorem idziemy razem na spacer.", "In the evening we go for a walk together."],
        ["Lubię moje miasto!", "I like my city!"]
      ]
    }
  ],
  "glossary": {
    "mam": ["mieć", "to have", "I have · “Mam na imię…” means “My name is…”"],
    "na": ["na", "on / to / for", ""],
    "imię": ["imię", "first name", "“Mam na imię…” = “My name is…”"],
    "ania": ["Ania", "Ania (short for Anna)", ""],
    "i": ["i", "and", ""],
    "mieszkam": ["mieszkać", "to live (somewhere)", "I live"],
    "w": ["w", "in / at", "followed by the locative case for location"],
    "krakowie": ["Kraków", "Kraków (city)", "locative case, after “w”"],
    "każdego": ["każdy", "every / each", "genitive, as in “każdego ranka” (every morning)"],
    "ranka": ["ranek", "morning", "genitive case: “każdego ranka” = every morning"],
    "piję": ["pić", "to drink", "I drink"],
    "kawę": ["kawa", "coffee", "accusative case (the object of the verb)"],
    "małej": ["mały", "small", "feminine locative, matching “kawiarni”"],
    "kawiarni": ["kawiarnia", "café", "locative case, after “w”"],
    "kelner": ["kelner", "waiter", ""],
    "jest": ["być", "to be", "he / she / it is"],
    "bardzo": ["bardzo", "very", ""],
    "miły": ["miły", "nice / kind", "masculine form"],
    "zamawiam": ["zamawiać", "to order", "I order"],
    "świeży": ["świeży", "fresh", "masculine form, matching “chleb”"],
    "chleb": ["chleb", "bread", ""],
    "z": ["z", "with / from", "“with” takes the instrumental case"],
    "masłem": ["masło", "butter", "instrumental case, after “z” (with)"],
    "potem": ["potem", "then / afterwards", ""],
    "idę": ["iść", "to go (on foot)", "I go"],
    "do": ["do", "to / into", "followed by the genitive case"],
    "pracy": ["praca", "work / job", "genitive case, after “do”"],
    "mój": ["mój", "my", "masculine form"],
    "pies": ["pies", "dog", ""],
    "czeka": ["czekać", "to wait", "he / she / it waits · “czekać na” = to wait for"],
    "mnie": ["ja", "I / me", "“mnie” = me"],
    "domu": ["dom", "house / home", "locative case: “w domu” = at home"],
    "wieczorem": ["wieczór", "evening", "instrumental case: “wieczorem” = in the evening"],
    "idziemy": ["iść", "to go (on foot)", "we go"],
    "razem": ["razem", "together", ""],
    "spacer": ["spacer", "walk / stroll", "“iść na spacer” = to go for a walk"],
    "lubię": ["lubić", "to like", "I like"],
    "moje": ["mój", "my", "neuter form, matching “miasto”"],
    "miasto": ["miasto", "city / town", ""]
  }
};
