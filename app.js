const restaurants = [
  { id:"waldschenke", name:"Waldschenke", cuisine:"Griechisch", phone:"07361 / 74203", address:"Mönchsbuchstraße 2, 73433 Aalen", location:"Wasseralfingen", restDay:"Montag", info:"", openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"11:30–14:00, 17:00–23:00"},
      {day:"Mittwoch", time:"11:30–14:00, 17:00–23:00"},
      {day:"Donnerstag", time:"11:30–14:00, 17:00–23:00"},
      {day:"Freitag", time:"11:30–14:00, 17:00–23:00"},
      {day:"Samstag", time:"11:30–14:00, 17:00–23:00"},
      {day:"Sonntag", time:"11:30–14:00, 17:00–23:00"}
    ], lunchType:"pdf", lunchURL:"assets/pdfs/Waldschenke Mittag.pdf", menuType:"pdf", menuURL:"assets/pdfs/Waldschenke Speisekarte.pdf" },
  { id:"labussola", name:"La Bussola", cuisine:"Italienisch", phone:"07361 / 62205", address:"Schafgasse 34, 73433 Aalen", location:"Wasseralfingen", restDay:"Dienstag", info:"", openingHours:[
      {day:"Montag", time:"17:00–22:00"},
      {day:"Dienstag", time:"Geschlossen"},
      {day:"Mittwoch", time:"11:30–14:00, 17:00–22:00"},
      {day:"Donnerstag", time:"11:30–14:00, 17:00–22:00"},
      {day:"Freitag", time:"11:30–14:00, 17:00–22:00"},
      {day:"Samstag", time:"11:30–14:00, 17:00–22:00"},
      {day:"Sonntag", time:"11:30–14:00, 17:00–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/La Bussola Speisekarte .pdf" },
  { id:"lotus", name:"Lotus", cuisine:"Asiatisch", phone:"07361 / 9757667", address:"Wilhelmstraße 3, 73433 Aalen", location:"Wasseralfingen", restDay:"Mittwoch", info:"", openingHours:[
      {day:"Montag", time:"11:00–14:00, 17:00–21:00"},
      {day:"Dienstag", time:"11:00–14:00, 17:00–21:00"},
      {day:"Mittwoch", time:"Geschlossen"},
      {day:"Donnerstag", time:"11:00–14:00, 17:00–21:00"},
      {day:"Freitag", time:"11:00–14:00, 17:00–21:00"},
      {day:"Samstag", time:"17:00–21:00"},
      {day:"Sonntag", time:"11:00–14:00, 17:00–21:00"}
    ], lunchType:"link", lunchURL:"https://www.lotusviet.de/mittagskarte/", menuType:"link", menuURL:"https://www.lotusviet.de/hauptspeisen/" },
  { id:"dafernando", name:"Da Fernando", cuisine:"Italienisch", phone:"0176 / 41357303", address:"Heinrich-Rieger-Straße 22, 73430 Aalen", location:"Aalen", restDay:"Sonntag", info:"", openingHours:[
      {day:"Montag", time:"10:00–19:00"},
      {day:"Dienstag", time:"10:00–19:00"},
      {day:"Mittwoch", time:"10:00–19:00"},
      {day:"Donnerstag", time:"10:00–19:00"},
      {day:"Freitag", time:"10:00–19:00"},
      {day:"Samstag", time:"11:00–14:00"},
      {day:"Sonntag", time:"Geschlossen"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/Da fernando.pdf" },
  { id:"anh", name:"ANH Asia Imbiss", cuisine:"Asiatisch", phone:"07361 / 9751779", address:"Heinrich-Rieger-Straße 20, 73430 Aalen", location:"Aalen", restDay:"Sonntag", info:"", openingHours:[
      {day:"Montag", time:"11:00–20:00"},
      {day:"Dienstag", time:"11:00–20:00"},
      {day:"Mittwoch", time:"11:00–20:00"},
      {day:"Donnerstag", time:"11:00–20:00"},
      {day:"Freitag", time:"11:00–20:00"},
      {day:"Samstag", time:"11:00–20:00"},
      {day:"Sonntag", time:"Geschlossen"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/ANH Asia.pdf" },
  { id:"niyo", name:"Niyo Kebab", cuisine:"Döner/Pizza", phone:"07361 / 5568266", address:"Wilhelmstraße 13, 73433 Aalen", location:"Wasseralfingen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:00–21:00"},
      {day:"Dienstag", time:"11:00–21:00"},
      {day:"Mittwoch", time:"11:00–21:00"},
      {day:"Donnerstag", time:"11:00–21:00"},
      {day:"Freitag", time:"11:00–21:00"},
      {day:"Samstag", time:"11:00–21:00"},
      {day:"Sonntag", time:"13:00–21:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/Niyo.pdf" },
  { id:"soulbowl", name:"Soul Bowl", cuisine:"Bowls", phone:"07361 / 5558141", address:"Reichstädter Straße 6, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"08:00–21:00"},
      {day:"Dienstag", time:"08:00–21:00"},
      {day:"Mittwoch", time:"08:00–21:00"},
      {day:"Donnerstag", time:"08:00–21:00"},
      {day:"Freitag", time:"08:00–22:00"},
      {day:"Samstag", time:"08:00–22:00"},
      {day:"Sonntag", time:"11:00–19:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/Soul-Bowl2.pdf" },
  { id:"burgeria", name:"Burgeria", cuisine:"Burger", phone:"07361 / 8898829", address:"Friedrichstraße 79, 73430 Aalen", location:"Aalen", restDay:"Dienstag", info:"", openingHours:[
      {day:"Montag", time:"11:30–22:00"},
      {day:"Dienstag", time:"Geschlossen"},
      {day:"Mittwoch", time:"11:30–22:00"},
      {day:"Donnerstag", time:"11:30–22:00"},
      {day:"Freitag", time:"11:30–22:00"},
      {day:"Samstag", time:"11:30–22:00"},
      {day:"Sonntag", time:"12:00–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/Burgeria.pdf" },
  { id:"koenigkebab", name:"König Kebab", cuisine:"Döner/Pizza", phone:"07361 / 9249614", address:"Schlossstraße 13, 73433 Aalen", location:"Wasseralfingen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:00–22:30"},
  {day:"Dienstag", time:"11:00–22:30"},
      {day:"Mittwoch", time:"11:00–22:30"},
      {day:"Donnerstag", time:"11:00–22:30"},
      {day:"Freitag", time:"11:00–22:30"},
      {day:"Samstag", time:"11:00–22:30"},
      {day:"Sonntag", time:"11:00–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/koenig.pdf" },
  { id:"lepalme", name:"Pizzahaus Le Palme", cuisine:"Italienisch", phone:"07361 / 61556", address:"Radgasse 10, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:00–14:00, 17:30–22:00"},
      {day:"Dienstag", time:"11:00–14:00, 17:30–22:00"},
      {day:"Mittwoch", time:"11:00–14:00, 17:30–22:00"},
      {day:"Donnerstag", time:"11:00–14:00, 17:30–22:00"},
      {day:"Freitag", time:"11:00–14:00, 17:30–22:00"},
      {day:"Samstag", time:"11:00–14:00, 17:30–22:00"},
      {day:"Sonntag", time:"11:00–14:00, 17:30–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/Le Palme.pdf" },
  { id:"bierhalle", name:"Bierhalle", cuisine:"Deutsch", phone:"07361 / 9994730", address:"An der Stadtkirche 3, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:00–23:00"},
      {day:"Dienstag", time:"11:00–23:00"},
      {day:"Mittwoch", time:"11:00–23:00"},
      {day:"Donnerstag", time:"11:00–23:00"},
      {day:"Freitag", time:"11:00–23:00"},
      {day:"Samstag", time:"11:00–23:00"},
      {day:"Sonntag", time:"11:00–22:00"}
    ], lunchType:"link", lunchURL:"https://www.bierhalle-aalen.de/#Tagesessen", menuType:"link", menuURL:"https://www.bierhalle-aalen.de/#Speisekarte" },
  { id:"barfuesser", name:"Barfüßer", cuisine:"Deutsch", phone:"07361 / 8049974", address:"An der Helferstraße 12, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:00–23:00"},
      {day:"Dienstag", time:"11:00–23:00"},
      {day:"Mittwoch", time:"11:00–23:00"},
      {day:"Donnerstag", time:"11:00–23:00"},
      {day:"Freitag", time:"11:00–00:00"},
      {day:"Samstag", time:"10:00–00:00"},
      {day:"Sonntag", time:"11:00–22:00"}
    ], lunchType:"link", lunchURL:"https://www.barfuesser-aalen.de/mittagstisch/", menuType:"pdf", menuURL:"assets/pdfs/barfuss.pdf" },
  { id:"schwabenstube", name:"Schwabenstube", cuisine:"Deutsch", phone:"07361 / 42200", address:"An der Stadionweg 11, 73430 Aalen", location:"Aalen", restDay:"Montag", info:"", openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"11:30–21:30"},
      {day:"Mittwoch", time:"11:30–21:30"},
      {day:"Donnerstag", time:"11:30–21:30"},
      {day:"Freitag", time:"11:30–21:30"},
      {day:"Samstag", time:"11:30–21:30"},
      {day:"Sonntag", time:"11:30–20:00"}
    ], lunchType:"link", lunchURL:"https://www.schwabenstube-aalen.de/", menuType:"link", menuURL:"https://www.schwabenstube-aalen.de/speisekarte" },
  { id:"rambazamba", name:"Rambazamba", cuisine:"Deutsch", phone:"07361 / 969627", address:"An der Stadtkirche 4, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"08:30–01:00"},
      {day:"Dienstag", time:"08:30–01:00"},
      {day:"Mittwoch", time:"08:30–01:00"},
      {day:"Donnerstag", time:"08:30–01:00"},
      {day:"Freitag", time:"08:30–01:00"},
      {day:"Samstag", time:"08:30–02:00"},
      {day:"Sonntag", time:"09:30–01:00"}
    ], lunchType:"none", lunchURL:"", menuType:"link", menuURL:"https://rambazamba-aalen.de/speise-getraenkekarte/" },
  { id:"aposto", name:"Aposto", cuisine:"Italienisch", phone:"07361 / 5006262", address:"Marktplatz 26, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"09:00–22:00"},
      {day:"Dienstag", time:"09:00–22:00"},
      {day:"Mittwoch", time:"09:00–22:00"},
      {day:"Donnerstag", time:"09:00–22:00"},
      {day:"Freitag", time:"09:00–00:00"},
      {day:"Samstag", time:"09:00–00:00"},
      {day:"Sonntag", time:"09:30–22:00"}
    ], lunchType:"link", lunchURL:"https://www.amadeusgo.de/selfordering/index/Qrl59o/?table=TtCuNU5tEIOkzeiSqyUUReRxykP%2FFsLk6Kx1Sjn5CKwUIM3uhlTJc2Io%2Bz0%2BlApoL3pBdPoq", menuType:"link", menuURL:"https://www.amadeusgo.de/selfordering/index/Qrl59o/?table=TtCuNU5tEIOkzeiSqyUUReRxykP%2FFsLk6Kx1Sjn5CKwUIM3uhlTJc2Io%2Bz0%2BlApoL3pBdPoq" },
  { id:"andiamo", name:"Andiamo Italo Pop", cuisine:"Italienisch", phone:"07361 9994736", address:"An der Stadtkirche 11, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:00–22:00"},
      {day:"Dienstag", time:"11:00–22:00"},
      {day:"Mittwoch", time:"11:00–22:00"},
      {day:"Donnerstag", time:"11:00–22:00"},
      {day:"Freitag", time:"11:00–22:00"},
      {day:"Samstag", time:"11:00–22:00"},
      {day:"Sonntag", time:"14:00–21:00"}
    ], lunchType:"link", lunchURL:"https://www.andiamo-aalen.de/", menuType:"link", menuURL:"https://www.andiamo-aalen.de/" },
{ id:"split", name:"Split", cuisine:"Kroatisch", phone:"07361 / 9141450", address:"An der Radgasse 6, 73430 Aalen", location:"Aalen", restDay:"Sonntag", info:"", openingHours:[
      {day:"Montag", time:"11:30–14:00, 17:30–22:00"},
      {day:"Dienstag", time:"11:30–14:00, 17:30–22:00"},
      {day:"Mittwoch", time:"11:30–14:00, 17:30–22:00"},
      {day:"Donnerstag", time:"11:30–14:00, 17:30–22:00"},
      {day:"Freitag", time:"11:30–14:00, 17:30–22:00"},
      {day:"Samstag", time:"11:30–14:00, 17:30–22:00"},
      {day:"Sonntag", time:"Geschlossen"}
    ], lunchType:"link", lunchURL:"https://split-aalen.de/mittagstisch/", menuType:"pdf", menuURL:"assets/pdfs/Split.pdf" },
  { id:"delphi", name:"Delphi", cuisine:"Griechisch", phone:"07361 / 66964", address:"Friedhofstraße 12, 73430 Aalen", location:"Aalen", restDay:"Dienstag", info:"", openingHours:[
      {day:"Montag", time:"11:00–14:00, 17:00–23:00"},
      {day:"Dienstag", time:"Geschlossen"},
      {day:"Mittwoch", time:"11:00–14:00, 17:00–23:00"},
      {day:"Donnerstag", time:"11:00–14:00, 17:00–23:00"},
      {day:"Freitag", time:"11:00–14:00, 17:00–23:00"},
      {day:"Samstag", time:"11:00–14:00, 17:00–23:00"},
      {day:"Sonntag", time:"11:00–14:00, 17:00–23:00"}
    ], hoursLayout:"stacked",  lunchType:"link", lunchURL:"https://www.delphi-aalen.net/mittagskarte", menuType:"link", menuURL:"https://www.delphi-aalen.net/speisekarte" },
  { id:"nieu37", name:"Nieu 37", cuisine:"Vietnamesisch", phone:"07361 / 4604461", address:"Radgasse 9, 73430 Aalen", location:"Aalen", restDay:"Montag", info:"", openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"11:30–15:00, 17:00–22:00"},
      {day:"Mittwoch", time:"11:30–15:00, 17:00–22:00"},
      {day:"Donnerstag", time:"11:30–15:00, 17:00–22:00"},
      {day:"Freitag", time:"11:30–15:00, 17:00–22:00"},
      {day:"Samstag", time:"11:30–15:00, 17:00–22:00"},
      {day:"Sonntag", time:"11:30–15:00, 17:00–22:00"}
    ], lunchType:"link", lunchURL:"https://nieu37-restaurant.de/mittagmenu/", menuType:"link", menuURL:"https://nieu37-restaurant.de/menu/" },
  { id:"sangam", name:"Sangam", cuisine:"Indisch", phone:"07361 / 3820041", address:"Bahnhofstraße 38, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:30–15:00, 17:30–23:00"},
      {day:"Dienstag", time:"11:30–15:00, 17:30–23:00"},
      {day:"Mittwoch", time:"11:30–15:00, 17:30–23:00"},
      {day:"Donnerstag", time:"11:30–15:00, 17:30–23:00"},
      {day:"Freitag", time:"11:30–15:00, 17:30–23:00"},
      {day:"Samstag", time:"11:30–15:00, 17:30–23:00"},
      {day:"Sonntag", time:"11:30–15:00, 17:30–23:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/sangam.pdf" },
  { id:"riverkwai", name:"River Kwai", cuisine:"Thailändisch", phone:"07361 / 62895", address:"Beinstraße 18, 73430 Aalen", location:"Aalen", restDay:"Montag", info:"", delivery:true, openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"17:00–22:00"},
      {day:"Mittwoch", time:"17:00–22:00"},
      {day:"Donnerstag", time:"17:00–22:00"},
      {day:"Freitag", time:"17:00–22:30"},
      {day:"Samstag", time:"17:00–22:30"},
      {day:"Sonntag", time:"17:00–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"link", menuURL:"https://riverkwai-aalen.de/menu/river_kwai_restaurant" },
  { id:"marmaris", name:"Marmaris Imbiss", cuisine:"Döner/Pizza", phone:"07361 / 69430", address:"Rittergasse 18, 73430 Aalen", location:"Aalen", restDay:"Sonntag", info:"", openingHours:[
      {day:"Montag", time:"11:00–23:30"},
      {day:"Dienstag", time:"11:00–23:30"},
      {day:"Mittwoch", time:"11:00–23:30"},
      {day:"Donnerstag", time:"11:00–23:30"},
      {day:"Freitag", time:"11:00–02:00"},
      {day:"Samstag", time:"11:00–02:00"},
      {day:"Sonntag", time:"Geschlossen"}
    ], lunchType:"none", lunchURL:"", menuType:"link", menuURL:"https://doener-aalen.de/speisekarte/" },
  { id:"duran", name:"Duran Imbiss", cuisine:"Döner/Pizza", phone:"07361 / 5963993", address:"Friedhofstraße 21, 73430 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:00–22:30"},
      {day:"Dienstag", time:"11:00–22:30"},
      {day:"Mittwoch", time:"11:00–22:30"},
      {day:"Donnerstag", time:"11:00–22:30"},
      {day:"Freitag", time:"11:00–23:30"},
      {day:"Samstag", time:"11:00–23:30"},
      {day:"Sonntag", time:"15:00–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"link", menuURL:"https://www.duran-imbiss.de" },
  { id:"litluis", name:"Lit & Luis", cuisine:"Deutsch", phone:"07361 / 5258713", address:"Reichstädter Straße 11, 73430 Aalen", location:"Aalen", restDay:"Montag", info:"", openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"09:00–23:00"},
      {day:"Mittwoch", time:"09:00–23:00"},
      {day:"Donnerstag", time:"09:00–23:00"},
      {day:"Freitag", time:"09:00–23:00"},
      {day:"Samstag", time:"09:00–23:00"},
      {day:"Sonntag", time:"09:00–18:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/luis.pdf" },
  { id:"kyoto", name:"Kyoto Sushi Bar", cuisine:"Sushi", phone:"07361 / 969339", address:"Alte Heidenheimer Straße 9, 73431 Aalen", location:"Aalen", restDay:"Mo/Di", info:"", openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"Geschlossen"},
      {day:"Mittwoch", time:"17:30–22:00"},
      {day:"Donnerstag", time:"17:30–22:00"},
      {day:"Freitag", time:"17:30–23:00"},
      {day:"Samstag", time:"17:30–23:00"},
      {day:"Sonntag", time:"17:30–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"pdf", menuURL:"assets/pdfs/kyoto.pdf" },
  { id:"kokono", name:"Kokono", cuisine:"Asiatisch", phone:"07361 / 9806066", address:"Julius-Bausch-Straße 50, 73431 Aalen", location:"Aalen", restDay:"", info:"", openingHours:[
      {day:"Montag", time:"11:00–14:30, 17:00–22:00"},
      {day:"Dienstag", time:"11:00–14:30, 17:00–22:00"},
      {day:"Mittwoch", time:"11:00–14:30, 17:00–22:00"},
      {day:"Donnerstag", time:"11:00–14:30, 17:00–22:00"},
      {day:"Freitag", time:"11:00–14:30, 17:00–22:30"},
      {day:"Samstag", time:"11:00–22:30"},
      {day:"Sonntag", time:"12:00–21:00"}
    ], lunchType:"pdf", lunchURL:"assets/pdfs/kokono mittag.pdf", menuType:"pdf", menuURL:"assets/pdfs/kokono.pdf" },
  { id:"losteria", name:"L\'Osteria", cuisine:"Italienisch", phone:"07361 / 5585119", address:"Hirschbachstraße 31, 73430 Aalen", location:"Aalen", restDay:"Montag", info:"", keywords:"Italiensch Italienisch", openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"12:00–14:30, 18:00–22:30"},
      {day:"Mittwoch", time:"12:00–14:30, 18:00–22:30"},
      {day:"Donnerstag", time:"12:00–14:30, 18:00–22:30"},
      {day:"Freitag", time:"12:00–14:30, 18:00–22:30"},
      {day:"Samstag", time:"12:00–14:30, 18:00–22:30"},
      {day:"Sonntag", time:"18:00–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"link", menuURL:"http://losteria-aalen.com/#Speisen" },
  { id:"rauchfang", name:"Pizzeria Rauchfang", cuisine:"Italienisch", phone:"07361 / 32775", address:"Alte Heidenheimer Straße 19, 73431 Aalen", location:"Aalen", restDay:"Montag", info:"", delivery:true, keywords:"Italiensch Italienisch", openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"11:00–14:30, 17:30–22:00"},
      {day:"Mittwoch", time:"11:00–14:30, 17:30–22:00"},
      {day:"Donnerstag", time:"11:00–14:30, 17:30–22:00"},
      {day:"Freitag", time:"11:00–14:30, 17:30–22:00"},
      {day:"Samstag", time:"11:00–14:30, 17:30–22:30"},
      {day:"Sonntag", time:"11:00–14:30, 17:30–22:00"}
    ], lunchType:"none", lunchURL:"", menuType:"link", menuURL:"https://rauchfang-aalen.de/pizzeria-rauchfang/delivery?scroll-to-menu=true" },
  { id:"larustica", name:"Pizzeria La Rustica", cuisine:"Italienisch", phone:"07361 / 6301", address:"Julius-Leberstraße 37, 73430 Aalen", location:"Aalen", restDay:"Mo/Di", info:"", keywords:"Italiensch Italienisch La Rustica", openingHours:[
      {day:"Montag", time:"Geschlossen"},
      {day:"Dienstag", time:"Geschlossen"},
      {day:"Mittwoch", time:"17:30–22:00"},
      {day:"Donnerstag", time:"17:30–22:00"},
      {day:"Freitag", time:"17:30–22:00"},
      {day:"Samstag", time:"17:00–22:00"},
      {day:"Sonntag", time:"17:00–21:00"}
    ], lunchType:"none", lunchURL:"", menuType:"link", menuURL:"https://www.la-rustica.eu/speisen-und-getraenke/" },
  { id:"vogthof", name:"Vogthof", cuisine:"Deutsch", phone:"07361 / 73688", address:"Bergbaustraße 28, 73433 Aalen", location:"Aalen", restDay:"Freitag", info:"", openingHours:[
      {day:"Montag", time:"11:30–14:30, 18:00–22:00"},
      {day:"Dienstag", time:"11:30–14:30, 18:00–22:00"},
      {day:"Mittwoch", time:"11:30–14:30, 18:00–22:00"},
      {day:"Donnerstag", time:"11:30–14:30"},
      {day:"Freitag", time:"Geschlossen"},
      {day:"Samstag", time:"18:00–22:00"},
      {day:"Sonntag", time:"11:30–14:30"}
    ], lunchType:"link", lunchURL:"https://www.aalen-vogthof.de/page/Tagesessen/en", menuType:"link", menuURL:"https://www.aalen-vogthof.de/page/Aktionskalender/en" },
  { id:"gourmetexpress", name:"Gourmet-Express", cuisine:"Lieferung", phone:"07361 / 975412", address:"Kantstraße 15, 73431 Aalen", location:"Both", location:"Both", restDay:"", info:"",
    openingHours:[
      {day:"Montag", time:"11:00–14:00, 17:00–21:30"},
      {day:"Dienstag", time:"11:00–14:00, 17:00–21:30"},
      {day:"Mittwoch", time:"11:00–14:00, 17:00–21:30"},
      {day:"Donnerstag", time:"11:00–14:00, 17:00–21:30"},
      {day:"Freitag", time:"11:00–14:00, 17:00–21:30"},
      {day:"Samstag", time:"17:00–21:30"},
      {day:"Sonntag", time:"17:00–21:00"}
    ], hoursLayout:"stacked",  lunchType:"link", lunchURL:"https://www.g-e-s.org/mittagsmen%C3%BCs-mo-fr/",
    menuType:"link", menuURL:"https://www.g-e-s.org/speisekarten-angebote/speisekarten/"
  },
  { id:"familykebab", name:"Family Kebab", cuisine:"Döner/Pizza", phone:"07361 / 5737279", address:"Industriestraße 76/1, 73431 Aalen", location:"Aalen", restDay:"Samstag", info:"", delivery:true,
    openingHours:[
      {day:"Montag", time:"11:00–21:00"},
      {day:"Dienstag", time:"11:00–21:00"},
      {day:"Mittwoch", time:"11:00–21:00"},
      {day:"Donnerstag", time:"11:00–21:00"},
      {day:"Freitag", time:"11:00–21:00"},
      {day:"Samstag", time:"Geschlossen"},
      {day:"Sonntag", time:"13:30–21:00"}
    ], lunchType:"none", lunchURL:"", menuType:"link", menuURL:"https://familykebabaalen.de/#mainPage" }
];

const weekdayDE = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
const todayName = () => weekdayDE[new Date().getDay()];

const elGrid = document.getElementById("grid");
const elSearch = document.getElementById("search");
const elOpenToday = document.getElementById("openToday");
const elOpenNow = document.getElementById("openNow");
const elCuisine = document.getElementById("cuisineFilter");
const elLocation = document.getElementById("locationFilter");
const elHasLunch = document.getElementById("hasLunch");
const elDelivery = document.getElementById("deliveryOnly");
const elCountOpenToday = document.getElementById("countOpenToday");
const elCountOpenNow = document.getElementById("countOpenNow");
const elCountHasLunch = document.getElementById("countHasLunch");
const elCountDelivery = document.getElementById("countDelivery");
const toast = document.getElementById("toast");

function isOpenTodayByRestDay(r){
  // "Heute geöffnet" soll nur über den Ruhetag entscheiden.
  // Wenn der Ruhetag heute ist -> geschlossen, sonst -> geöffnet.
  const rd = (r.restDay||"").trim();
  if(!rd) return true;
  return rd !== todayName();
}

function minutesFromHHMM(hhmm){
  const m = /^\s*(\d{1,2}):(\d{2})\s*$/.exec(hhmm||"");
  if(!m) return null;
  const hh = Math.max(0, Math.min(23, parseInt(m[1],10)));
  const mm = Math.max(0, Math.min(59, parseInt(m[2],10)));
  return hh*60+mm;
}

function parseTimeRanges(timeStr){
  const s = (timeStr||"").trim();
  if(!s || /^geschlossen$/i.test(s)) return [];
  // supports: "11:00–14:00, 17:00–23:00" (en dash or hyphen)
  return s.split(",")
    .map(p => p.trim())
    .map(p => {
      const m = /(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})/.exec(p);
      if(!m) return null;
      const start = minutesFromHHMM(m[1]);
      const end = minutesFromHHMM(m[2]);
      if(start==null || end==null) return null;
      return {start, end};
    })
    .filter(Boolean);
}

function dayNameFor(dateObj){
  return weekdayDE[dateObj.getDay()];
}

function isOpenNow(r){
  const now = new Date();
  const today = dayNameFor(now);
  const minutes = now.getHours()*60 + now.getMinutes();

  const todayEntry = (r.openingHours||[]).find(x => x.day === today);
  if(todayEntry){
    for(const rng of parseTimeRanges(todayEntry.time)){
      if(rng.end >= rng.start){
        if(minutes >= rng.start && minutes < rng.end) return true;
      } else {
        // crosses midnight: open from start until 24:00
        if(minutes >= rng.start) return true;
      }
    }
  }

  // Handle "crosses midnight" from yesterday (e.g., 09:30–01:00)
  const y = new Date(now);
  y.setDate(now.getDate()-1);
  const yesterday = dayNameFor(y);
  const yEntry = (r.openingHours||[]).find(x => x.day === yesterday);
  if(yEntry){
    for(const rng of parseTimeRanges(yEntry.time)){
      if(rng.end < rng.start){
        // open after midnight until end
        if(minutes < rng.end) return true;
      }
    }
  }

  return false;
}

function escapeHTML(s){ return (s||"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"); }
function digitsOnlyPhone(raw){ return (raw||"").replaceAll(" ","").replaceAll("/",""); }
function domainOf(url){ try { return new URL(url).hostname.replace(/^www\./,""); } catch { return ""; } }
function splitAddress(addr){
  if(!addr) return {street:"", city:""};
  const parts = addr.split(",");
  const street = (parts[0]||"").trim();
  const city = parts.slice(1).join(",").trim();
  return {street, city};
}

/* Toast */
let toastTimer=null;
function showToast(text, buttonText, onClick, ms=5200){
  if(!toast) return;
  toast.innerHTML = `<div class="toast__text">${escapeHTML(text)}</div>${buttonText?`<button class="toast__btn" id="toastBtn">${escapeHTML(buttonText)}</button>`:""}`;
  toast.classList.add("toast--show");
  const btn=document.getElementById("toastBtn");
  if(btn && onClick){ btn.onclick=()=>{ try{ onClick(); } finally{ hideToast(); } }; }
  clearTimeout(toastTimer);
  toastTimer=setTimeout(hideToast, ms);
}
function hideToast(){ if(!toast) return; toast.classList.remove("toast--show"); toast.innerHTML=""; }

/* Brand click = Startseite (Reset) */
document.querySelector(".brand")?.addEventListener("click", ()=>{
  if(elSearch) elSearch.value="";
  if(elOpenToday) elOpenToday.checked=false;
  if(elOpenNow) elOpenNow.checked=false;
  if(elHasLunch) elHasLunch.checked=false;
  if(elCuisine) elCuisine.value="";
  if(elLocation) elLocation.value="";
  if(elDelivery) elDelivery.checked=false;
  window.scrollTo({top:0, behavior:"smooth"});
  render();
});

/* Ort options */
const LOCATION_OPTIONS = ["", "Aalen", "Wasseralfingen"];

function initLocationFilter(){
  if(!elLocation) return;
  // Store base labels for count rendering
  if(elLocation.options[0]) elLocation.options[0].dataset.label = elLocation.options[0].textContent || "Alle";
  while(elLocation.options.length>1) elLocation.remove(1);
  LOCATION_OPTIONS.slice(1).forEach(o=>{
    const opt=document.createElement("option");
    opt.value=o; opt.textContent=o;
    opt.dataset.label = o;
    elLocation.appendChild(opt);
  });
}

function locationMatches(r, selected){
  if(!selected) return true;
  const loc=(r.location||"");
  if(!loc) return false;
  if(loc==="Both") return true;
  return loc.split(",").map(s=>s.trim()).includes(selected);
}

/* Cuisine options with special groups */
const CUISINE_OPTIONS = ["", "Asiatisch", "Bowls", "Burger", "Deutsch", "Döner/Pizza", "Griechisch", "Indisch", "Italienisch", "Kroatisch", "Lieferung", "Sushi", "Thailändisch", "Vietnamesisch"];
function initCuisineFilter(){
  if(!elCuisine) return;
  // Store base labels for count rendering
  if(elCuisine.options[0]) elCuisine.options[0].dataset.label = elCuisine.options[0].textContent || "Alle";
  while(elCuisine.options.length>1) elCuisine.remove(1);
  CUISINE_OPTIONS.slice(1).forEach(c=>{
    const opt=document.createElement("option");
    opt.value=c; opt.textContent=c;
    opt.dataset.label = c;
    elCuisine.appendChild(opt);
  });
}

function cuisineMatches(r, selected){
  if(!selected) return true;
  // Ausnahme: Gourmet-Express soll im Küchenfilter immer erscheinen.
  if(r.id==="gourmetexpress") return true;
  // Küchenfilter soll exakt der Küchenrichtung entsprechen, die unter dem Namen angezeigt wird.
  return (r.cuisine||"")===selected;
}

function hasLunch(r){
  // Filter "Hat Mittagstisch": include Gourmet Express as requested
  if(r.id==="gourmetexpress") return true;
  return r.lunchType==="pdf" || r.lunchType==="link";
}

function render(){
  const q=(elSearch?.value||"").trim().toLowerCase();
  const onlyOpenToday=!!elOpenToday?.checked;
  const onlyOpenNow=!!elOpenNow?.checked;
  const cuisine=elCuisine?.value||"";
  const location=elLocation?.value||"";
  const filterLunch=!!elHasLunch?.checked;
  const onlyDelivery=!!elDelivery?.checked;

  // --- Base match helpers ---
  const textMatches = (r) => !q
    || r.name.toLowerCase().includes(q)
    || (r.info||"").toLowerCase().includes(q)
    || (r.cuisine||"").toLowerCase().includes(q)
    || (r.address||"").toLowerCase().includes(q);

  // Counts for filter chips (based on search + dropdowns, without the toggles themselves)
  const baseForCounts = restaurants.filter(r=>{
    const matchCuisine=cuisineMatches(r,cuisine);
    const matchLocation=locationMatches(r,location);
    return textMatches(r) && matchCuisine && matchLocation;
  });

  if(elCountOpenToday) elCountOpenToday.textContent = String(baseForCounts.filter(isOpenTodayByRestDay).length);
  if(elCountOpenNow) elCountOpenNow.textContent = String(baseForCounts.filter(isOpenNow).length);
  if(elCountHasLunch) elCountHasLunch.textContent = String(baseForCounts.filter(hasLunch).length);
  if(elCountDelivery) elCountDelivery.textContent = String(baseForCounts.filter(r=>r.delivery===true || r.cuisine==="Lieferung" || r.id==="gourmetexpress").length);

  // --- Counters for dropdowns (Küche / Ort) ---
  // For Küche: apply all active filters EXCEPT the cuisine dropdown itself.
  const baseForCuisineCounts = restaurants.filter(r=>{
    const openTodayOk = !onlyOpenToday || isOpenTodayByRestDay(r);
    const openNowOk = !onlyOpenNow || isOpenNow(r);
    const matchLocation = locationMatches(r, location);
    const matchLunch = !filterLunch || hasLunch(r);
    const matchDelivery = !onlyDelivery || r.delivery===true || r.cuisine==="Lieferung" || r.id==="gourmetexpress";
    return textMatches(r) && openTodayOk && openNowOk && matchLocation && matchLunch && matchDelivery;
  });

  // For Ort: apply all active filters EXCEPT the location dropdown itself.
  const baseForLocationCounts = restaurants.filter(r=>{
    const openTodayOk = !onlyOpenToday || isOpenTodayByRestDay(r);
    const openNowOk = !onlyOpenNow || isOpenNow(r);
    const matchCuisine = cuisineMatches(r, cuisine);
    const matchLunch = !filterLunch || hasLunch(r);
    const matchDelivery = !onlyDelivery || r.delivery===true || r.cuisine==="Lieferung" || r.id==="gourmetexpress";
    return textMatches(r) && openTodayOk && openNowOk && matchCuisine && matchLunch && matchDelivery;
  });

  // Update cuisine option labels with counts
  if(elCuisine){
    const opts = Array.from(elCuisine.options);
    for(const opt of opts){
      const label = opt.dataset.label || opt.textContent || "";
      const val = opt.value || "";
      const count = val
        ? baseForCuisineCounts.filter(r=>cuisineMatches(r, val)).length
        : baseForCuisineCounts.length;
      opt.textContent = `${label} (${count})`;
    }
  }

  // Update location option labels with counts
  if(elLocation){
    const opts = Array.from(elLocation.options);
    for(const opt of opts){
      const label = opt.dataset.label || opt.textContent || "";
      const val = opt.value || "";
      const count = val
        ? baseForLocationCounts.filter(r=>locationMatches(r, val)).length
        : baseForLocationCounts.length;
      opt.textContent = `${label} (${count})`;
    }
  }

  const filtered = restaurants.filter(r=>{
    const openTodayOk = !onlyOpenToday || isOpenTodayByRestDay(r);
    const openNowOk = !onlyOpenNow || isOpenNow(r);
    const matchCuisine=cuisineMatches(r,cuisine);
    const matchLocation=locationMatches(r,location);
    const matchLunch=!filterLunch || hasLunch(r);
    const matchDelivery = !onlyDelivery || r.delivery===true || r.cuisine==="Lieferung" || r.id==="gourmetexpress";
    return textMatches(r) && openTodayOk && openNowOk && matchCuisine && matchLocation && matchLunch && matchDelivery;
  });

  filtered.sort((a,b)=>{
    const ao=isOpenNow(a)?0:1, bo=isOpenNow(b)?0:1;
    if(ao!==bo) return ao-bo;
    return a.name.localeCompare(b.name,"de");
  });

  elGrid.innerHTML = filtered.map(r=>tileHTML(r)).join("");

  document.querySelectorAll("[data-open]").forEach(tile=>{
    tile.addEventListener("click",(e)=>{
      if(e.target.closest("[data-action]")) return;
      openModal(tile.dataset.open);
    });
  });
}

function tileHTML(r){
  const open=isOpenNow(r);
  const pillOpen = open?`<span class="pill pill--open">Geöffnet</span>`:`<span class="pill pill--closed">Geschlossen</span>`;
  const restPill = `<span class="pill pill--restday">Ruhetag: ${escapeHTML(r.restDay||"—")}</span>`;
  const hoursTile = Array.isArray(r.openingHours) && r.openingHours.length
    ? (() => {
        const order = { "Montag":1, "Dienstag":2, "Mittwoch":3, "Donnerstag":4, "Freitag":5, "Samstag":6, "Sonntag":7 };
        const oh = [...r.openingHours].sort((a,b)=> (order[(a.day||"").trim()]||99) - (order[(b.day||"").trim()]||99));
        const stacked = true;
        return `<div class="tile__hours ${stacked ? "tile__hours--stacked" : ""}" aria-label="Öffnungszeiten">
          <div class="tile__hours-title">Öffnungszeiten</div>
          <div class="tile__hours-grid">
            ${oh.map(o=>{
              const day = (o.day||"").trim();
              const time = (o.time||"").trim();
              const closed = /geschlossen/i.test(time);
              return `<div class="tile__hours-item ${closed?"is-closed":""}"><span class="tile__hours-day">${escapeHTML(day)}</span><span class="tile__hours-time">${escapeHTML(time)}</span></div>`;
            }).join("")}
          </div>
        </div>`;
      })()
    : "";
  const pill = `<div class="pillcol">${pillOpen}${restPill}</div>`;
  const infoLine=r.info?`<div class="tile__info">${escapeHTML(r.info)}</div>`:`<div class="tile__info"> </div>`;
  const rest=r.restDay?`Ruhetag: ${r.restDay}`:"Ruhetag: —";

  return `<article class="tile ${open?"":"tile--closed"}" data-open="${r.id}">
    <div class="tile__top">
      <div>
        <div class="tile__name">${r.name}</div>
        <div class="tile__cuisine">${escapeHTML(r.cuisine||"")}</div>
        ${infoLine}
      </div>
      ${pill}
    </div>
    <div class="tile__meta">
      <div>
        <div>☎ ${escapeHTML(r.phone)}</div>
        ${(()=>{ const a=splitAddress(r.address); return a.street?`<div>⌂ ${escapeHTML(a.street)}</div>${a.city?`<div>${escapeHTML(a.city)}</div>`:""}`:""; })()}
      </div>
      ${hoursTile}
    </div>
    ${buildActions(r)}
  </article>`;
}

function actionLink(label, href, icon, disabled=false, attrs=""){
  if(disabled || !href){
    return `<span data-action="disabled" class="action action--disabled">${icon} ${label}</span>`;
  }
  return `<a data-action="link" class="action" href="${href}" ${attrs}>${icon} ${label}</a>`;
}

function buildActions(r){
  const tel=digitsOnlyPhone(r.phone);
  const call = actionLink("Anrufen", tel ? `tel:${tel}` : "", "☎", !tel);

  // These have no PDFs yet -> keep visible but disabled
  const forceDisabled = (false);

  // Remove lunch button entirely for La Bussola and Niyo
  const hideLunch = (r.id === "labussola" || r.id === "niyo" || r.id === "anh" || r.id === "soulbowl" || r.id === "dafernando" || r.id === "burgeria" || r.id === "koenigkebab" || r.id === "lepalme" || r.id === "sangam" || r.id === "riverkwai" || r.id === "rambazamba" || r.id === "marmaris" || r.id === "duran" || r.id === "litluis" || r.id === "kyoto" || r.id === "losteria" || r.id === "rauchfang" || r.id === "larustica");

  const lunchHref = (r.lunchType==="pdf"||r.lunchType==="link") ? r.lunchURL : "";
  const menuHref  = (r.menuType==="pdf"||r.menuType==="link") ? r.menuURL  : "";

  const lunch = (!hideLunch && !!lunchHref) ? actionLink("Mittagstisch", lunchHref, "🥗", forceDisabled || !lunchHref, 'target="_blank" rel="noopener"') : "";
  const menu  = actionLink("Speisekarte",  menuHref,  "📋", forceDisabled || !menuHref,  'target="_blank" rel="noopener"');

  return `<div class="tile__actions">${call}${lunch}${menu}</div>`;
}

/* Modal */
const modal=document.getElementById("modal");
const mTitle=document.getElementById("mTitle");
const mMeta=document.getElementById("mMeta");
const mPills=document.getElementById("mPills");
const mContact=document.getElementById("mContact");
const mLunch=document.getElementById("mLunch");
const mMenu=document.getElementById("mMenu");
const lunchCard=document.getElementById("lunchCard");

function openModal(id){
  const r=restaurants.find(x=>x.id===id);
  if(!r) return;

  const open=isOpenNow(r);
  mTitle.textContent=r.name;
  mMeta.textContent=open?"Geöffnet":`Geschlossen (Ruhetag: ${r.restDay||"—"})`;
  mPills.innerHTML=[
    `<span class="pill ${open?"pill--open":"pill--closed"}">${open?"Geöffnet":"Geschlossen"}</span>`,
    r.cuisine?`<span class="pill pill--neutral">${escapeHTML(r.cuisine)}</span>`:"",
    `<span class="pill pill--neutral">Ruhetag: ${r.restDay||"—"}</span>`,
    r.info?`<span class="pill pill--neutral">${escapeHTML(r.info)}</span>`:""
  ].filter(Boolean).join("");

  const tel=digitsOnlyPhone(r.phone);
  mContact.innerHTML = `
    <div><b>Telefon:</b> <a href="tel:${tel}">${escapeHTML(r.phone)}</a></div>
    
    ${r.address?(()=>{const a=splitAddress(r.address); const txt = a.city?`⌂ ${escapeHTML(a.street)}<br>${escapeHTML(a.city)}`:`⌂ ${escapeHTML(a.street)}`; return `<div style="margin-top:8px"><b>Adresse:</b> <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.address)}" target="_blank" rel="noopener">${txt}</a></div>`;})():""}
    <div class="smallhint">Tipp: Safari → Teilen → „Zum Dock hinzufügen“ (wie eine App).</div>
  `;

  // Lunch card hidden for La Bussola and Niyo
  if(r.id === "labussola" || r.id === "niyo" || r.id === "anh" || r.id === "dafernando" || r.id === "burgeria" || r.id === "koenigkebab"){
    lunchCard.style.display="none";
  } else {
    lunchCard.style.display="";
    if(r.lunchType==="pdf" && r.lunchURL){
      mLunch.innerHTML = `<div class="embed"><iframe src="${r.lunchURL}"></iframe></div>
        <div class="smallhint"><a href="${r.lunchURL}" target="_blank" rel="noopener">Mittagstisch in neuem Tab öffnen</a></div>`;
    } else if(r.lunchType==="link" && r.lunchURL){
      mLunch.innerHTML = `<a href="${r.lunchURL}" target="_blank" rel="noopener">Mittagstisch</a>
        <div class="smallhint">${escapeHTML(domainOf(r.lunchURL))}</div>`;
    } else {
      lunchCard.style.display="none";
    }
  }

  if(r.menuType==="pdf" && r.menuURL){
    mMenu.innerHTML = `<div class="embed"><iframe src="${r.menuURL}"></iframe></div>
      <div class="smallhint"><a href="${r.menuURL}" target="_blank" rel="noopener">Speisekarte in neuem Tab öffnen</a></div>`;
  } else if(r.menuType==="link" && r.menuURL){
    mMenu.innerHTML = `<a href="${r.menuURL}" target="_blank" rel="noopener">Speisekarte</a>
      <div class="smallhint">${escapeHTML(domainOf(r.menuURL))}</div>`;
  } else {
    mMenu.innerHTML = `<span>Wird nachgereicht.</span>`;
  }

  modal.showModal();
}

/* Events */
elSearch?.addEventListener("input", render);
elOpenToday?.addEventListener("change", render);
elOpenNow?.addEventListener("change", render);
elCuisine?.addEventListener("change", render);
  elLocation?.addEventListener("change", render);
elHasLunch?.addEventListener("change", render);
elDelivery?.addEventListener("change", render);

initCuisineFilter();
  initLocationFilter();
render();

/* First-run hint */
const HINT_KEY="kks_dock_hint_v1";
if(!localStorage.getItem(HINT_KEY)){
  localStorage.setItem(HINT_KEY,"1");
  showToast("Tipp: Safari → Teilen → „Zum Dock hinzufügen“ (wie eine App).","Ok",null,8000);
}

/* Back to top */
const toTop=document.getElementById("toTop");
function updateToTop(){
  if(!toTop) return;
  const y=window.scrollY||document.documentElement.scrollTop||0;
  if(y>520) toTop.classList.add("toTop--show");
  else toTop.classList.remove("toTop--show");
}
toTop?.addEventListener("click",()=>window.scrollTo({top:0, behavior:"smooth"}));
window.addEventListener("scroll", updateToTop, {passive:true});
updateToTop();

/* PWA update notice */
if("serviceWorker" in navigator){
  window.addEventListener("load", async ()=>{
    try{
      const reg=await navigator.serviceWorker.register("sw.js");
      reg.addEventListener("updatefound", ()=>{
        const sw=reg.installing;
        if(!sw) return;
        sw.addEventListener("statechange", ()=>{
          if(sw.state==="installed" && navigator.serviceWorker.controller){
            showToast("Neue Version verfügbar.","Neu laden",()=>window.location.reload(),12000);
          }
        });
      });
    }catch(_){}
  });
}



// Mobile (iPhone/Android): Topbar should scroll away (not fixed/sticky)
(function(){
  try{
    const ua = navigator.userAgent || '';
    const isIPhone = /iPhone|iPod/i.test(ua);
    const isAndroidPhone = /Android/i.test(ua) && /Mobile/i.test(ua);
    if(isIPhone){
      document.body.classList.add('ios-scroll');
      document.documentElement.style.setProperty('--topbar-h','0px');
    }
    if(isAndroidPhone){
      document.body.classList.add('android-scroll');
      document.documentElement.style.setProperty('--topbar-h','0px');
    }
  }catch(_e){}
})();

/* --- Sticky/Fixed Topbar spacer (Safari/iOS reliable) --- */
(function(){
  if(document.body.classList.contains('ios-scroll')) return;
  const topbar = document.querySelector(".topbar");
  if(!topbar) return;
  const setH = () => {
    // Use offsetHeight so it includes safe-area padding
    document.documentElement.style.setProperty("--topbar-h", topbar.offsetHeight + "px");
  };
  setH();
  window.addEventListener("resize", () => requestAnimationFrame(setH));
  window.addEventListener("orientationchange", () => setTimeout(setH, 250));
})();
