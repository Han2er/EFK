const cards = [
  // categorys
  [
    { word: "Action (set A)", image: "img/action1.jpg" },
    { word: "Action (set B)", image: "img/action2.jpg" },
    { word: "Animal (set A)", image: "img/animal1.jpg" },
    { word: "Animal (set B)", image: "img/animal2.jpg" },
    { word: "Clothes", image: "img/clothes.jpg" },
    { word: "Emotions", image: "img/emotions.jpg" },
    { word: "Food", image: "img/food.jpg" },
    { word: "Places", image: "img/places.jpg" },
  ],
  // Action (set A)
  [
    {
      word: "cry",
      translation: "ტირილი",
      image: "img/cry.jpg",
      audioSrc: "audio/cry.mp3",
    },
    {
      word: "dance",
      translation: "ცეკვა",
      image: "img/dance.jpg",
      audioSrc: "audio/dance.mp3",
    },
    {
      word: "dive",
      translation: "ჩაყვინთვა",
      image: "img/dive.jpg",
      audioSrc: "audio/dive.mp3",
    },
    {
      word: "draw",
      translation: "ხატვა",
      image: "img/draw.jpg",
      audioSrc: "audio/draw.mp3",
    },
    {
      word: "fishing",
      translation: "თევზაობა",
      image: "img/fish.jpg",
      audioSrc: "audio/fish.mp3",
    },
    {
      word: "fly",
      translation: "ფრენა",
      image: "img/fly.jpg",
      audioSrc: "audio/fly.mp3",
    },
    {
      word: "hug",
      translation: "ჩახუტება",
      image: "img/hug.jpg",
      audioSrc: "audio/hug.mp3",
    },
    {
      word: "jump",
      translation: "ახტომა",
      image: "img/jump.jpg",
      audioSrc: "audio/jump.mp3",
    },
  ],
  // Action (set B)
  [
    {
      word: "open",
      translation: "გაღება",
      image: "img/open.jpg",
      audioSrc: "audio/open.mp3",
    },
    {
      word: "play",
      translation: "თამაში",
      image: "img/play.jpg",
      audioSrc: "audio/play.mp3",
    },
    {
      word: "point",
      translation: "მითითება",
      image: "img/point.jpg",
      audioSrc: "audio/point.mp3",
    },
    {
      word: "ride",
      translation: "ტარება",
      image: "img/ride.jpg",
      audioSrc: "audio/ride.mp3",
    },
    {
      word: "run",
      translation: "სირბილი",
      image: "img/run.jpg",
      audioSrc: "audio/run.mp3",
    },
    {
      word: "sing",
      translation: "სიმღება",
      image: "img/sing.jpg",
      audioSrc: "audio/sing.mp3",
    },
    {
      word: "skip",
      translation: "გადახტომა",
      image: "img/skip.jpg",
      audioSrc: "audio/skip.mp3",
    },
    {
      word: "swim",
      translation: "ცურვა",
      image: "img/swim.jpg",
      audioSrc: "audio/swim.mp3",
    },
  ],
  // Animal (set A)
  [
    {
      word: "cat",
      translation: "კატა",
      image: "img/cat.jpg",
      audioSrc: "audio/cat.mp3",
    },
    {
      word: "chick",
      translation: "წიწილა",
      image: "img/chick.jpg",
      audioSrc: "audio/chick.mp3",
    },
    {
      word: "chicken",
      translation: "ქათამი",
      image: "img/chicken.jpg",
      audioSrc: "audio/chicken.mp3",
    },
    {
      word: "dog",
      translation: "ძაღლი",
      image: "img/dog.jpg",
      audioSrc: "audio/dog.mp3",
    },
    {
      word: "horse",
      translation: "ცხენი",
      image: "img/horse.jpg",
      audioSrc: "audio/horse.mp3",
    },
    {
      word: "pig",
      translation: "ღორი",
      image: "img/pig.jpg",
      audioSrc: "audio/pig.mp3",
    },
    {
      word: "rabbit",
      translation: "კურდღელი",
      image: "img/rabbit.jpg",
      audioSrc: "audio/rabbit.mp3",
    },
    {
      word: "sheep",
      translation: "ცხვარი",
      image: "img/sheep.jpg",
      audioSrc: "audio/sheep.mp3",
    },
  ],
  // Animal (set B)
  [
    {
      word: "bird",
      translation: "ჩიტი",
      image: "img/bird.jpg",
      audioSrc: "audio/bird.mp3",
    },
    {
      word: "fish",
      translation: "თევზი",
      image: "img/fish1.jpg",
      audioSrc: "audio/fish.mp3",
    },
    {
      word: "frog",
      translation: "ბაყაყი",
      image: "img/frog.jpg",
      audioSrc: "audio/frog.mp3",
    },
    {
      word: "giraffe",
      translation: "ჟირაფი",
      image: "img/giraffe.jpg",
      audioSrc: "audio/giraffe.mp3",
    },
    {
      word: "lion",
      translation: "ლომი",
      image: "img/lion.jpg",
      audioSrc: "audio/lion.mp3",
    },
    {
      word: "mouse",
      translation: "თაგვი",
      image: "img/mouse.jpg",
      audioSrc: "audio/mouse.mp3",
    },
    {
      word: "turtle",
      translation: "კუ",
      image: "img/turtle.jpg",
      audioSrc: "audio/turtle.mp3",
    },
    {
      word: "dolphin",
      translation: "დელფინი",
      image: "img/dolphin.jpg",
      audioSrc: "audio/dolphin.mp3",
    },
  ],
  // Clothes
  [
    {
      word: "skirt",
      translation: "ქვედაკაბა",
      image: "img/skirt.jpg",
      audioSrc: "audio/skirt.mp3",
    },
    {
      word: "pants",
      translation: "შარვალი",
      image: "img/pants.jpg",
      audioSrc: "audio/pants.mp3",
    },
    {
      word: "blouse",
      translation: "ბლუზა",
      image: "img/blouse.jpg",
      audioSrc: "audio/blouse.mp3",
    },
    {
      word: "dress",
      translation: "კაბა",
      image: "img/dress.jpg",
      audioSrc: "audio/dress.mp3",
    },
    {
      word: "boot",
      translation: "ჩექმა",
      image: "img/boot.jpg",
      audioSrc: "audio/boot.mp3",
    },
    {
      word: "shirt",
      translation: "პერანგი",
      image: "img/shirt.jpg",
      audioSrc: "audio/shirt.mp3",
    },
    {
      word: "coat",
      translation: "ქურთუკი",
      image: "img/coat.jpg",
      audioSrc: "audio/coat.mp3",
    },
    {
      word: "shoe",
      translation: "ფეხსაცმელი",
      image: "img/shoe.jpg",
      audioSrc: "audio/shoe.mp3",
    },
  ],
  // Emotions
  [
    {
      word: "happy",
      translation: "ბედნიერი",
      image: "img/happy.jpg",
      audioSrc: "audio/happy.mp3",
    },
    {
      word: "sad",
      translation: "მოწყენილი",
      image: "img/sad.jpg",
      audioSrc: "audio/sad.mp3",
    },
    {
      word: "angry",
      translation: "გაბრაზებული",
      image: "img/angry.jpg",
      audioSrc: "audio/angry.mp3",
    },
    {
      word: "tired",
      translation: "დაღლილი",
      image: "img/tired.jpg",
      audioSrc: "audio/tired.mp3",
    },
    {
      word: "surprised",
      translation: "გაკვირვებული",
      image: "img/surprised.jpg",
      audioSrc: "audio/surprised.mp3",
    },
    {
      word: "scared",
      translation: "შეშინებული",
      image: "img/scared.jpg",
      audioSrc: "audio/scared.mp3",
    },
    {
      word: "smile",
      translation: "ღიმილი",
      image: "img/smile.jpg",
      audioSrc: "audio/smile.mp3",
    },
    {
      word: "laugh",
      translation: "სიცილი",
      image: "img/laugh.jpg",
      audioSrc: "audio/laugh.mp3",
    },
  ],
  // Food
  [
    {
      word: "milk",
      translation: "რძე",
      image: "img/milk.jpg",
      audioSrc: "audio/milk.mp3",
    },
    {
      word: "egg",
      translation: "კვერცხი",
      image: "img/egg.jpg",
      audioSrc: "audio/egg.mp3",
    },
    {
      word: "bread",
      translation: "პური",
      image: "img/bread.jpg",
      audioSrc: "audio/bread.mp3",
    },
    {
      word: "tomato",
      translation: "პომიდორი",
      image: "img/tomato.jpg",
      audioSrc: "audio/tomato.mp3",
    },
    {
      word: "potato",
      translation: "კარტოფილი",
      image: "img/potato.jpg",
      audioSrc: "audio/potato.mp3",
    },
    {
      word: "meat",
      translation: "ხორცი",
      image: "img/meat.jpg",
      audioSrc: "audio/meat.mp3",
    },
    {
      word: "apple",
      translation: "ვაშლი",
      image: "img/apple.jpg",
      audioSrc: "audio/apple.mp3",
    },
    {
      word: "donut",
      translation: "დონატი",
      image: "img/donut.jpg",
      audioSrc: "audio/donut.mp3",
    },
  ],
  // Places
  [
    {
      word: "city",
      translation: "ქალაქი",
      image: "img/city.jpg",
      audioSrc: "audio/city.mp3",
    },
    {
      word: "village",
      translation: "სოფელი",
      image: "img/village.jpg",
      audioSrc: "audio/village.mp3",
    },
    {
      word: "forest",
      translation: "ტყე",
      image: "img/forest.jpg",
      audioSrc: "audio/forest.mp3",
    },
    {
      word: "desert",
      translation: "უდაბნო",
      image: "img/desert.jpg",
      audioSrc: "audio/desert.mp3",
    },
    {
      word: "mountains",
      translation: "მთები",
      image: "img/mountains.jpg",
      audioSrc: "audio/mountains.mp3",
    },
    {
      word: "field",
      translation: "მდელო",
      image: "img/field.jpg",
      audioSrc: "audio/field.mp3",
    },
    {
      word: "lake",
      translation: "ტბა",
      image: "img/lake.jpg",
      audioSrc: "audio/lake.mp3",
    },
    {
      word: "sea",
      translation: "ზღვა",
      image: "img/sea.jpg",
      audioSrc: "audio/sea.mp3",
    },
  ],
];

export default cards;
