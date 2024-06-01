// Options the user could type in
const prompts = [
 
  // Greetings
  ["hi", "hey", "hello", "good morning", "good afternoon", "good evening", "what's up", "howdy"],
  
  // How are you
  ["how are you", "how's life", "how are things", "how's it going", "how do you do", "how have you been"],
  
  // What are you doing
  ["what are you doing", "what's going on", "what's up", "what are you up to", "what's happening", "what's new"],
  
  // Age
  ["how old are you", "what's your age", "when is your birthday", "what year were you born"],
  
  // Identity
  ["who are you", "are you human", "are you a bot", "are you human or bot", "what are you"],
  
  // Creator
  ["who created you", "who made you", "who is your creator", "who developed you"],
  
  // Name
  ["your name please", "your name", "may I know your name", "what is your name", "what do you call yourself", "who are you"],
  
  // Affection
  ["i love you", "love you", "do you love me", "i like you"],
  
  // Positive feelings
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "great", "amazing", "awesome"],
  
  // Negative feelings
  ["bad", "bored", "tired", "sad", "unhappy", "angry", "upset"],
  
  // Help and entertainment
  ["help me", "tell me a story", "tell me a joke", "can you help me", "can you tell me something funny"],
  
  // Agreement
  ["ah", "yes", "ok", "okay", "nice", "sure", "sounds good", "alright", "right"],
  
  // Farewell
  ["bye", "goodbye", "see you later", "see you", "take care", "farewell", "catch you later"],
  
  // Food
  ["what should I eat today", "what's for dinner", "what's for lunch", "what's for breakfast", "any food suggestions", "what do you recommend to eat"],
  
  // Casual
  ["bro", "dude", "mate", "buddy", "pal", "friend"],
  
  // Questions
  ["what", "why", "how", "where", "when", "who", "which", "can you tell me", "do you know"],
  
  // Uncertainty
  ["no", "not sure", "maybe", "no thanks", "I don't know", "perhaps"],
  
  // Empty input
  [""],
  
  // Laughter
  ["haha", "ha", "lol", "hehe", "funny", "joke", "that was funny", "you are funny"]

    // Weather
    ["what's the weather like", "how's the weather", "is it going to rain", "what's the temperature"],
  
    // Time
    ["what time is it", "can you tell me the time", "what's the time", "do you know the time"],
    
    // Date
    ["what's the date today", "what's today's date", "what date is it", "do you know the date"],
    
    // Hobbies
    ["what are your hobbies", "what do you do for fun", "do you have any hobbies", "what do you like to do"],
    
    // Favorite things
    ["what's your favorite color", "do you have a favorite food", "what's your favorite movie", "what's your favorite book"],
    
    // Location
    ["where are you from", "where do you live", "what's your location", "where are you based"],
    
    // Music
    ["do you like music", "what kind of music do you like", "who's your favorite musician", "what's your favorite song"],
    
    // Sports
    ["do you like sports", "what's your favorite sport", "do you play any sports", "who's your favorite athlete"],
    
    // News
    ["what's in the news", "tell me the latest news", "what's happening in the world", "any news updates"]
];

// Possible responses, in corresponding order which the chatbot give

const replies = [
  

    // Replies to Greetings
    ["Hello!", "Hi there!", "Hey!", "Good day!", "Howdy!", "Hi! How can I assist you today?"],
    
    // Replies to How are you
    ["I'm doing great, thank you!", "Life is good, thank you!", "I'm just a bot, but I'm here to help!", "I'm doing well, how about you?", "I'm fine, thank you! How are you?"],
    
    // Replies to What are you doing
    ["Just chatting with you!", "I'm here to assist you!", "Helping people with their questions!", "Waiting for your questions!", "Not much, just here to chat!"],
    
    // Replies to Age
    ["I don't have an age like humans, but I'm always learning!", "I'm as old as the internet!", "Age is just a number!", "I'm timeless!", "I don't age like humans do!"],
    
    // Replies to Identity
    ["I'm a chatbot created to assist you!", "I'm an AI programmed to help with your questions.", "I'm your virtual assistant!", "Just a friendly chatbot here to help!", "I'm a bot, not human."],
    
    // Replies to Creator
    ["I was created by Aadi.", "I was programmed by some talented humans.", "My creators is  Aadi", "I was made by Aadi."],
    
    // Replies to Name
    ["You can call me ChatBot.", "I am your virtual assistant.", "My name is ChatBot.", "I'm known as ChatBot.", "I go by the name ChatBot."],
    
    // Replies to Affection
    ["I love you too!", "That's sweet of you!", "I like you too!", "Thank you! I appreciate it.", "Love is in the air!"],
    
    // Replies to Positive feelings
    ["That's great to hear!", "Awesome!", "Glad to hear that!", "Wonderful!", "Fantastic!"],
    
    // Replies to Negative feelings
    ["I'm sorry to hear that.", "I hope things get better for you.", "Oh no, what's wrong?", "I'm here if you need to talk.", "Stay strong!"],
    
    // Replies to Help and entertainment
    ["Sure, what do you need help with?", "Once upon a time...", "Why don't scientists trust atoms? Because they make up everything!", "I'm here to help, what do you need?", "Want to hear a joke? Why don't skeletons fight each other? They don't have the guts!"],
    
    // Replies to Agreement
    ["Okay!", "Yes!", "Alright!", "Sure!", "Sounds good!", "Right!"],
    
    // Replies to Farewell
    ["Goodbye!", "See you later!", "Take care!", "Farewell!", "Bye! Have a great day!", "Catch you later!"],
    
    // Replies to Food
    ["How about some pasta?", "Pizza is always a good choice!", "Why not try a salad?", "How about a nice burger?", "Sushi could be a great option!"],
    
    // Replies to Casual
    ["Hey bro!", "What's up dude?", "How's it going, mate?", "Hey buddy!", "What's new, pal?", "Hey friend!"],
    
    // Replies to Questions
    ["What do you want to know?", "Feel free to ask me anything!", "I'm here to answer your questions.", "What can I help you with?", "Ask away!"],
    
    // Replies to Uncertainty
    ["It's okay to be unsure.", "Take your time to decide.", "No worries!", "That's fine!", "Maybe next time."],
    
    // Replies to Empty input
    ["I'm here when you need me.", "Hello?", "Can I help you with something?", "Did you need assistance?", "I'm here to chat if you need anything."],
    
    // Replies to Laughter
    ["Haha!", "That's funny!", "LOL!", "Glad you found that funny!", "Hehe!", "You're hilarious!"]

     // Replies to Weather
  ["I can't check the weather for you, but you can try a weather app!", "Why not look out the window?", "Weather can be unpredictable!", "It's always sunny in my world!"],
  
  // Replies to Time
  ["I can't check the time for you, but you can try a clock!", "Time flies when you're having fun!", "It's always chatbot time!"],
  
  // Replies to Date
  ["I can't check the date for you, but you can try a calendar!", "Today is a great day!", "Every day is a good day to chat!"],
  
  // Replies to Hobbies
  ["I love learning new things!", "I enjoy chatting with people.", "Helping you is my hobby!", "I like to read about new technologies."],
  
  // Replies to Favorite things
  ["I don't have preferences like humans do, but I like learning new things!", "I enjoy all kinds of information!", "Every book is a good book to me!", "I find everything interesting!"],
  
  // Replies to Location
  ["I'm from the digital world!", "I live in the cloud!", "I'm based in the virtual realm.", "I exist in the digital space."],
  
  // Replies to Music
  ["I enjoy all kinds of music!", "Music is a universal language.", "I don't have a favorite, but I like all music!", "Anything with a good beat!"],
  
  // Replies to Sports
  ["I think sports are great!", "I like all sports equally!", "I don't play, but I enjoy learning about them.", "Every athlete has something special!"],
  
  // Replies to News
  ["I don't have current news, but you can check a news website!", "The world is always changing!", "Why not check the latest headlines?", "News updates are just a click away!"]
  ];


// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/",
  "Ummm not Aware",
 " bro I'm tired now"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]