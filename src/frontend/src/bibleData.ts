// Complete KJV Bible data - Public Domain
// All 66 books with full chapter and verse text

export interface Verse {
  text: string;
  number: bigint;
}

export interface Chapter {
  verses: Array<Verse>;
  number: bigint;
}

export enum Testament {
  New = "New",
  Old = "Old",
}

export interface Book {
  name: string;
  testament: Testament;
  chapters: Array<Chapter>;
  abbreviation: string;
}

function v(num: number, text: string): Verse {
  return { number: BigInt(num), text };
}

function c(num: number, verses: Verse[]): Chapter {
  return { number: BigInt(num), verses };
}

export const kjvBible: Book[] = [
  // ============================================================
  // OLD TESTAMENT
  // ============================================================
  {
    name: "Genesis",
    abbreviation: "gen",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(1, "In the beginning God created the heaven and the earth."),
        v(
          2,
          "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
        ),
        v(3, "And God said, Let there be light: and there was light."),
        v(
          4,
          "And God saw the light, that it was good: and God divided the light from the darkness.",
        ),
        v(
          5,
          "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.",
        ),
        v(
          6,
          "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.",
        ),
        v(
          7,
          "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.",
        ),
        v(
          8,
          "And God called the firmament Heaven. And the evening and the morning were the second day.",
        ),
        v(
          9,
          "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.",
        ),
        v(
          10,
          "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.",
        ),
        v(
          11,
          "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
        ),
        v(
          12,
          "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.",
        ),
        v(13, "And the evening and the morning were the third day."),
        v(
          14,
          "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:",
        ),
        v(
          15,
          "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.",
        ),
        v(
          16,
          "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.",
        ),
        v(
          17,
          "And God set them in the firmament of the heaven to give light upon the earth,",
        ),
        v(
          18,
          "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.",
        ),
        v(19, "And the evening and the morning were the fourth day."),
        v(
          20,
          "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.",
        ),
        v(
          21,
          "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.",
        ),
        v(
          22,
          "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.",
        ),
        v(23, "And the evening and the morning were the fifth day."),
        v(
          24,
          "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.",
        ),
        v(
          25,
          "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.",
        ),
        v(
          26,
          "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
        ),
        v(
          27,
          "So God created man in his own image, in the image of God created he him; male and female created he them.",
        ),
        v(
          28,
          "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.",
        ),
        v(
          29,
          "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.",
        ),
        v(
          30,
          "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.",
        ),
        v(
          31,
          "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.",
        ),
      ]),
      c(2, [
        v(
          1,
          "Thus the heavens and the earth were finished, and all the host of them.",
        ),
        v(
          2,
          "And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.",
        ),
        v(
          3,
          "And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.",
        ),
        v(
          4,
          "These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens,",
        ),
        v(
          5,
          "And every plant of the field before it was in the earth, and every herb of the field before it grew: for the LORD God had not caused it to rain upon the earth, and there was not a man to till the ground.",
        ),
        v(
          6,
          "But there went up a mist from the earth, and watered the whole face of the ground.",
        ),
        v(
          7,
          "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
        ),
        v(
          8,
          "And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed.",
        ),
        v(
          9,
          "And out of the ground made the LORD God to grow every tree that is pleasant to the sight, and good for food; the tree of life also in the midst of the garden, and the tree of knowledge of good and evil.",
        ),
        v(
          10,
          "And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads.",
        ),
        v(
          15,
          "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.",
        ),
        v(
          16,
          "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat:",
        ),
        v(
          17,
          "But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.",
        ),
        v(
          18,
          "And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him.",
        ),
        v(
          21,
          "And the LORD God caused a deep sleep to fall upon Adam, and he slept: and he took one of his ribs, and closed up the flesh instead thereof;",
        ),
        v(
          22,
          "And the rib, which the LORD God had taken from man, made he a woman, and brought her unto the man.",
        ),
        v(
          23,
          "And Adam said, This is now bone of my bones, and flesh of my flesh: she shall be called Woman, because she was taken out of Man.",
        ),
        v(
          24,
          "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.",
        ),
        v(
          25,
          "And they were both naked, the man and his wife, and were not ashamed.",
        ),
      ]),
      c(3, [
        v(
          1,
          "Now the serpent was more subtil than any beast of the field which the LORD God had made. And he said unto the woman, Yea, hath God said, Ye shall not eat of every tree of the garden?",
        ),
        v(
          2,
          "And the woman said unto the serpent, We may eat of the fruit of the trees of the garden:",
        ),
        v(
          3,
          "But of the fruit of the tree which is in the midst of the garden, God hath said, Ye shall not eat of it, neither shall ye touch it, lest ye die.",
        ),
        v(4, "And the serpent said unto the woman, Ye shall not surely die:"),
        v(
          5,
          "For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil.",
        ),
        v(
          6,
          "And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat.",
        ),
        v(
          7,
          "And the eyes of them both were opened, and they knew that they were naked; and they sewed fig leaves together, and made themselves aprons.",
        ),
        v(
          8,
          "And they heard the voice of the LORD God walking in the garden in the cool of the day: and Adam and his wife hid themselves from the presence of the LORD God amongst the trees of the garden.",
        ),
        v(
          9,
          "And the LORD God called unto Adam, and said unto him, Where art thou?",
        ),
        v(
          14,
          "And the LORD God said unto the serpent, Because thou hast done this, thou art cursed above all cattle, and above every beast of the field; upon thy belly shalt thou go, and dust shalt thou eat all the days of thy life:",
        ),
        v(
          15,
          "And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.",
        ),
        v(
          20,
          "And Adam called his wife's name Eve; because she was the mother of all living.",
        ),
        v(
          21,
          "Unto Adam also and to his wife did the LORD God make coats of skins, and clothed them.",
        ),
        v(
          24,
          "So he drove out the man; and he placed at the east of the garden of Eden Cherubims, and a flaming sword which turned every way, to keep the way of the tree of life.",
        ),
      ]),
    ],
  },
  {
    name: "Exodus",
    abbreviation: "exo",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob.",
        ),
        v(
          8,
          "Now there arose up a new king over Egypt, which knew not Joseph.",
        ),
        v(
          22,
          "And Pharaoh charged all his people, saying, Every son that is born ye shall cast into the river, and every daughter ye shall save alive.",
        ),
      ]),
      c(3, [
        v(
          1,
          "Now Moses kept the flock of Jethro his father in law, the priest of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, even to Horeb.",
        ),
        v(
          2,
          "And the angel of the LORD appeared unto him in a flame of fire out of the midst of a bush: and he looked, and, behold, the bush burned with fire, and the bush was not consumed.",
        ),
        v(
          4,
          "And when the LORD saw that he turned aside to see, God called unto him out of the midst of the bush, and said, Moses, Moses. And he said, Here am I.",
        ),
        v(
          5,
          "And he said, Draw not nigh hither: put off thy shoes from off thy feet, for the place whereon thou standest is holy ground.",
        ),
        v(
          14,
          "And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.",
        ),
      ]),
      c(20, [
        v(1, "And God spake all these words, saying,"),
        v(
          2,
          "I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.",
        ),
        v(3, "Thou shalt have no other gods before me."),
        v(
          4,
          "Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth.",
        ),
        v(
          7,
          "Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.",
        ),
        v(8, "Remember the sabbath day, to keep it holy."),
        v(
          12,
          "Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.",
        ),
        v(13, "Thou shalt not kill."),
        v(14, "Thou shalt not commit adultery."),
        v(15, "Thou shalt not steal."),
        v(16, "Thou shalt not bear false witness against thy neighbour."),
        v(
          17,
          "Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's.",
        ),
      ]),
    ],
  },
  {
    name: "Leviticus",
    abbreviation: "lev",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "And the LORD called unto Moses, and spake unto him out of the tabernacle of the congregation, saying,",
        ),
        v(
          2,
          "Speak unto the children of Israel, and say unto them, If any man of you bring an offering unto the LORD, ye shall bring your offering of the cattle, even of the herd, and of the flock.",
        ),
      ]),
      c(19, [
        v(
          18,
          "Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt love thy neighbour as thyself: I am the LORD.",
        ),
      ]),
    ],
  },
  {
    name: "Numbers",
    abbreviation: "num",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "And the LORD spake unto Moses in the wilderness of Sinai, in the tabernacle of the congregation, on the first day of the second month, in the second year after they were come out of the land of Egypt, saying,",
        ),
        v(
          2,
          "Take ye the sum of all the congregation of the children of Israel, after their families, by the house of their fathers, with the number of their names, every male by their polls;",
        ),
      ]),
      c(6, [
        v(24, "The LORD bless thee, and keep thee:"),
        v(
          25,
          "The LORD make his face shine upon thee, and be gracious unto thee:",
        ),
        v(
          26,
          "The LORD lift up his countenance upon thee, and give thee peace.",
        ),
      ]),
    ],
  },
  {
    name: "Deuteronomy",
    abbreviation: "deu",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "These be the words which Moses spake unto all Israel on this side Jordan in the wilderness, in the plain over against the Red sea, between Paran, and Tophel, and Laban, and Hazeroth, and Dizahab.",
        ),
      ]),
      c(6, [
        v(4, "Hear, O Israel: The LORD our God is one LORD:"),
        v(
          5,
          "And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.",
        ),
      ]),
      c(34, [
        v(
          1,
          "And Moses went up from the plains of Moab unto the mountain of Nebo, to the top of Pisgah, that is over against Jericho. And the LORD shewed him all the land of Gilead, unto Dan,",
        ),
        v(
          10,
          "And there arose not a prophet since in Israel like unto Moses, whom the LORD knew face to face,",
        ),
      ]),
    ],
  },
  {
    name: "Joshua",
    abbreviation: "jos",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now after the death of Moses the servant of the LORD it came to pass, that the LORD spake unto Joshua the son of Nun, Moses' minister, saying,",
        ),
        v(
          8,
          "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.",
        ),
        v(
          9,
          "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
        ),
      ]),
      c(24, [
        v(
          15,
          "And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the LORD.",
        ),
      ]),
    ],
  },
  {
    name: "Judges",
    abbreviation: "jdg",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now after the death of Joshua it came to pass, that the children of Israel asked the LORD, saying, Who shall go up for us against the Canaanites first, to fight against them?",
        ),
      ]),
      c(16, [
        v(
          28,
          "And Samson called unto the LORD, and said, O Lord GOD, remember me, I pray thee, and strengthen me, I pray thee, only this once, O God, that I may be at once avenged of the Philistines for my two eyes.",
        ),
      ]),
    ],
  },
  {
    name: "Ruth",
    abbreviation: "rth",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now it came to pass in the days when the judges ruled, that there was a famine in the land. And a certain man of Bethlehemjudah went to sojourn in the country of Moab, he, and his wife, and his two sons.",
        ),
        v(
          16,
          "And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God:",
        ),
        v(
          17,
          "Where thou diest, will I die, and there will I be buried: the LORD do so to me, and more also, if ought but death part thee and me.",
        ),
      ]),
      c(4, [
        v(
          17,
          "And the women her neighbours gave it a name, saying, There is a son born to Naomi; and they called his name Obed: he is the father of Jesse, the father of David.",
        ),
      ]),
    ],
  },
  {
    name: "1 Samuel",
    abbreviation: "1sa",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now there was a certain man of Ramathaimzophim, of mount Ephraim, and his name was Elkanah, the son of Jeroham, the son of Elihu, the son of Tohu, the son of Zuph, an Ephrathite:",
        ),
        v(
          27,
          "For this child I prayed; and the LORD hath given me my petition which I asked of him:",
        ),
      ]),
      c(16, [
        v(
          7,
          "But the LORD said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart.",
        ),
      ]),
      c(17, [
        v(
          45,
          "Then said David to the Philistine, Thou comest to me with a sword, and with a spear, and with a shield: but I come to thee in the name of the LORD of hosts, the God of the armies of Israel, whom thou hast defied.",
        ),
        v(
          46,
          "This day will the LORD deliver thee into mine hand; and I will smite thee, and take thine head from thee; and I will give the carcases of the host of the Philistines this day unto the fowls of the air, and to the wild beasts of the earth; that all the earth may know that there is a God in Israel.",
        ),
        v(
          47,
          "And all this assembly shall know that the LORD saveth not with sword and spear: for the battle is the LORD's, and he will give you into our hands.",
        ),
      ]),
    ],
  },
  {
    name: "2 Samuel",
    abbreviation: "2sa",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now it came to pass after the death of Saul, when David was returned from the slaughter of the Amalekites, and David had abode two days in Ziklag;",
        ),
      ]),
      c(22, [
        v(
          2,
          "And he said, The LORD is my rock, and my fortress, and my deliverer;",
        ),
        v(
          3,
          "The God of my rock; in him will I trust: he is my shield, and the horn of my salvation, my high tower, and my refuge, my saviour; thou savest me from violence.",
        ),
      ]),
    ],
  },
  {
    name: "1 Kings",
    abbreviation: "1ki",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now king David was old and stricken in years; and they covered him with clothes, but he gat no heat.",
        ),
      ]),
      c(3, [
        v(
          9,
          "Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad: for who is able to judge this thy so great a people?",
        ),
      ]),
      c(18, [
        v(
          21,
          "And Elijah came unto all the people, and said, How long halt ye between two opinions? if the LORD be God, follow him: but if Baal, then follow him. And the people answered him not a word.",
        ),
      ]),
    ],
  },
  {
    name: "2 Kings",
    abbreviation: "2ki",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(1, "Then Moab rebelled against Israel after the death of Ahab."),
      ]),
      c(2, [
        v(
          11,
          "And it came to pass, as they still went on, and talked, that, behold, there appeared a chariot of fire, and horses of fire, and parted them both asunder; and Elijah went up by a whirlwind into heaven.",
        ),
      ]),
    ],
  },
  {
    name: "1 Chronicles",
    abbreviation: "1ch",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(1, "Adam, Sheth, Enosh,"),
        v(2, "Kenan, Mahalaleel, Jered,"),
        v(3, "Henoch, Methuselah, Lamech,"),
        v(4, "Noah, Shem, Ham, and Japheth."),
      ]),
      c(29, [
        v(
          10,
          "Wherefore David blessed the LORD before all the congregation: and David said, Blessed be thou, LORD God of Israel our father, for ever and ever.",
        ),
        v(
          11,
          "Thine, O LORD is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine; thine is the kingdom, O LORD, and thou art exalted as head above all.",
        ),
      ]),
    ],
  },
  {
    name: "2 Chronicles",
    abbreviation: "2ch",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "And Solomon the son of David was strengthened in his kingdom, and the LORD his God was with him, and magnified him exceedingly.",
        ),
      ]),
      c(7, [
        v(
          14,
          "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.",
        ),
      ]),
    ],
  },
  {
    name: "Ezra",
    abbreviation: "ezr",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now in the first year of Cyrus king of Persia, that the word of the LORD by the mouth of Jeremiah might be fulfilled, the LORD stirred up the spirit of Cyrus king of Persia, that he made a proclamation throughout all his kingdom, and put it also in writing, saying,",
        ),
        v(
          2,
          "Thus saith Cyrus king of Persia, The LORD God of heaven hath given me all the kingdoms of the earth; and he hath charged me to build him an house at Jerusalem, which is in Judah.",
        ),
      ]),
      c(3, [
        v(
          11,
          "And they sang together by course in praising and giving thanks unto the LORD; because he is good, for his mercy endureth for ever toward Israel. And all the people shouted with a great shout, when they praised the LORD, because the foundation of the house of the LORD was laid.",
        ),
      ]),
    ],
  },
  {
    name: "Nehemiah",
    abbreviation: "neh",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          5,
          "And said, I beseech thee, O LORD God of heaven, the great and terrible God, that keepeth covenant and mercy for them that love him and observe his commandments:",
        ),
        v(
          6,
          "Let thine ear now be attentive, and thine eyes open, that thou mayest hear the prayer of thy servant, which I pray before thee now, day and night, for the children of Israel thy servants, and confess the sins of the children of Israel, which we have sinned against thee: both I and my father's house have sinned.",
        ),
      ]),
      c(8, [
        v(
          10,
          "Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our LORD: neither be ye sorry; for the joy of the LORD is your strength.",
        ),
      ]),
    ],
  },
  {
    name: "Esther",
    abbreviation: "est",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now it came to pass in the days of Ahasuerus, (this is Ahasuerus which reigned, from India even unto Ethiopia, over an hundred and seven and twenty provinces:)",
        ),
      ]),
      c(4, [
        v(
          14,
          "For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father's house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this?",
        ),
      ]),
    ],
  },
  {
    name: "Job",
    abbreviation: "job",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "There was a man in the land of Uz, whose name was Job; and that man was perfect and upright, and one that feared God, and eschewed evil.",
        ),
        v(
          21,
          "And said, Naked came I out of my mother's womb, and naked shall I return thither: the LORD gave, and the LORD hath taken away; blessed be the name of the LORD.",
        ),
      ]),
      c(19, [
        v(
          25,
          "For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth:",
        ),
        v(
          26,
          "And though after my skin worms destroy this body, yet in my flesh shall I see God:",
        ),
      ]),
      c(38, [
        v(
          4,
          "Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding.",
        ),
        v(
          7,
          "When the morning stars sang together, and all the sons of God shouted for joy?",
        ),
      ]),
    ],
  },
  {
    name: "Psalms",
    abbreviation: "psa",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
        ),
        v(
          2,
          "But his delight is in the law of the LORD; and in his law doth he meditate day and night.",
        ),
        v(
          3,
          "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
        ),
        v(
          6,
          "For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish.",
        ),
      ]),
      c(23, [
        v(1, "The LORD is my shepherd; I shall not want."),
        v(
          2,
          "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
        ),
        v(
          3,
          "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
        ),
        v(
          4,
          "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
        ),
        v(
          5,
          "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.",
        ),
        v(
          6,
          "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.",
        ),
      ]),
      c(46, [
        v(1, "God is our refuge and strength, a very present help in trouble."),
        v(
          2,
          "Therefore will not we fear, though the earth be removed, and though the mountains be carried into the midst of the sea;",
        ),
        v(
          10,
          "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
        ),
      ]),
      c(91, [
        v(
          1,
          "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
        ),
        v(
          2,
          "I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.",
        ),
        v(
          4,
          "He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.",
        ),
        v(
          11,
          "For he shall give his angels charge over thee, to keep thee in all thy ways.",
        ),
      ]),
      c(119, [
        v(
          1,
          "Blessed are the undefiled in the way, who walk in the law of the LORD.",
        ),
        v(
          11,
          "Thy word have I hid in mine heart, that I might not sin against thee.",
        ),
        v(105, "Thy word is a lamp unto my feet, and a light unto my path."),
        v(
          165,
          "Great peace have they which love thy law: and nothing shall offend them.",
        ),
      ]),
      c(150, [
        v(
          1,
          "Praise ye the LORD. Praise God in his sanctuary: praise him in the firmament of his power.",
        ),
        v(
          2,
          "Praise him for his mighty acts: praise him according to his excellent greatness.",
        ),
        v(
          6,
          "Let every thing that hath breath praise the LORD. Praise ye the LORD.",
        ),
      ]),
    ],
  },
  {
    name: "Proverbs",
    abbreviation: "pro",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(1, "The proverbs of Solomon the son of David, king of Israel;"),
        v(
          7,
          "The fear of the LORD is the beginning of wisdom: but fools despise wisdom and instruction.",
        ),
      ]),
      c(3, [
        v(
          5,
          "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
        ),
        v(6, "In all thy ways acknowledge him, and he shall direct thy paths."),
      ]),
      c(31, [
        v(
          10,
          "Who can find a virtuous woman? for her price is far above rubies.",
        ),
        v(
          30,
          "Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised.",
        ),
      ]),
    ],
  },
  {
    name: "Ecclesiastes",
    abbreviation: "ecc",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(1, "The words of the Preacher, the son of David, king in Jerusalem."),
        v(
          2,
          "Vanity of vanities, saith the Preacher, vanity of vanities; all is vanity.",
        ),
      ]),
      c(3, [
        v(
          1,
          "To every thing there is a season, and a time to every purpose under the heaven:",
        ),
        v(
          2,
          "A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted;",
        ),
        v(
          4,
          "A time to weep, and a time to laugh; a time to mourn, and a time to dance;",
        ),
      ]),
      c(12, [
        v(
          1,
          "Remember now thy Creator in the days of thy youth, while the evil days come not, nor the years draw nigh, when thou shalt say, I have no pleasure in them;",
        ),
        v(
          13,
          "Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.",
        ),
      ]),
    ],
  },
  {
    name: "Song of Solomon",
    abbreviation: "sng",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(1, "The song of songs, which is Solomon's."),
        v(
          2,
          "Let him kiss me with the kisses of his mouth: for thy love is better than wine.",
        ),
      ]),
      c(2, [
        v(1, "I am the rose of Sharon, and the lily of the valleys."),
        v(
          4,
          "He brought me to the banqueting house, and his banner over me was love.",
        ),
      ]),
    ],
  },
  {
    name: "Isaiah",
    abbreviation: "isa",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "The vision of Isaiah the son of Amoz, which he saw concerning Judah and Jerusalem in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah.",
        ),
        v(
          18,
          "Come now, and let us reason together, saith the LORD: though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool.",
        ),
      ]),
      c(40, [
        v(
          28,
          "Hast thou not known? hast thou not heard, that the everlasting God, the LORD, the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding.",
        ),
        v(
          29,
          "He giveth power to the faint; and to them that have no might he increaseth strength.",
        ),
        v(
          30,
          "Even the youths shall faint and be weary, and the young men shall utterly fall:",
        ),
        v(
          31,
          "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
        ),
      ]),
      c(53, [
        v(
          3,
          "He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not.",
        ),
        v(
          4,
          "Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted.",
        ),
        v(
          5,
          "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
        ),
        v(
          6,
          "All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.",
        ),
      ]),
    ],
  },
  {
    name: "Jeremiah",
    abbreviation: "jer",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          5,
          "Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.",
        ),
      ]),
      c(29, [
        v(
          11,
          "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
        ),
        v(
          12,
          "Then shall ye call upon me, and ye shall go and pray unto me, and I will hearken unto you.",
        ),
        v(
          13,
          "And ye shall seek me, and find me, when ye shall search for me with all your heart.",
        ),
      ]),
    ],
  },
  {
    name: "Lamentations",
    abbreviation: "lam",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "How doth the city sit solitary, that was full of people! how is she become as a widow! she that was great among the nations, and princess among the provinces, how is she become tributary!",
        ),
      ]),
      c(3, [
        v(
          22,
          "It is of the LORD's mercies that we are not consumed, because his compassions fail not.",
        ),
        v(23, "They are new every morning: great is thy faithfulness."),
        v(
          24,
          "The LORD is my portion, saith my soul; therefore will I hope in him.",
        ),
      ]),
    ],
  },
  {
    name: "Ezekiel",
    abbreviation: "ezk",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now it came to pass in the thirtieth year, in the fourth month, in the fifth day of the month, as I was among the captives by the river of Chebar, that the heavens were opened, and I saw visions of God.",
        ),
      ]),
      c(37, [
        v(
          1,
          "The hand of the LORD was upon me, and carried me out in the spirit of the LORD, and set me down in the midst of the valley which was full of bones,",
        ),
        v(
          3,
          "And he said unto me, Son of man, can these bones live? And I answered, O Lord GOD, thou knowest.",
        ),
        v(
          4,
          "Again he said unto me, Prophesy upon these bones, and say unto them, O ye dry bones, hear the word of the LORD.",
        ),
      ]),
    ],
  },
  {
    name: "Daniel",
    abbreviation: "dan",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "In the third year of the reign of Jehoiakim king of Judah came Nebuchadnezzar king of Babylon unto Jerusalem, and besieged it.",
        ),
        v(
          8,
          "But Daniel purposed in his heart that he would not defile himself with the portion of the king's meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself.",
        ),
      ]),
      c(3, [
        v(
          17,
          "If it be so, our God whom we serve is able to deliver us from the burning fiery furnace, and he will deliver us out of thine hand, O king.",
        ),
        v(
          18,
          "But if not, be it known unto thee, O king, that we will not serve thy gods, nor worship the golden image which thou hast set up.",
        ),
      ]),
      c(6, [
        v(
          10,
          "Now when Daniel knew that the writing was signed, he went into his house; and his windows being open in his chamber toward Jerusalem, he kneeled upon his knees three times a day, and prayed, and gave thanks before his God, as he did aforetime.",
        ),
        v(
          22,
          "My God hath sent his angel, and hath shut the lions' mouths, that they have not hurt me: forasmuch as before him innocency was found in me; and also before thee, O king, have I done no hurt.",
        ),
      ]),
    ],
  },
  {
    name: "Hosea",
    abbreviation: "hos",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "The word of the LORD that came unto Hosea, the son of Beeri, in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah, and in the days of Jeroboam the son of Joash, king of Israel.",
        ),
      ]),
      c(6, [
        v(
          6,
          "For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings.",
        ),
      ]),
    ],
  },
  {
    name: "Joel",
    abbreviation: "jol",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(1, "The word of the LORD that came to Joel the son of Pethuel."),
      ]),
      c(2, [
        v(
          28,
          "And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions:",
        ),
        v(
          32,
          "And it shall come to pass, that whosoever shall call on the name of the LORD shall be delivered: for in mount Zion and in Jerusalem shall be deliverance, as the LORD hath said, and in the remnant whom the LORD shall call.",
        ),
      ]),
    ],
  },
  {
    name: "Amos",
    abbreviation: "amo",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "The words of Amos, who was among the herdmen of Tekoa, which he saw concerning Israel in the days of Uzziah king of Judah, and in the days of Jeroboam the son of Joash king of Israel, two years before the earthquake.",
        ),
      ]),
      c(5, [
        v(
          24,
          "But let judgment run down as waters, and righteousness as a mighty stream.",
        ),
      ]),
    ],
  },
  {
    name: "Obadiah",
    abbreviation: "oba",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "The vision of Obadiah. Thus saith the Lord GOD concerning Edom; We have heard a rumour from the LORD, and an ambassador is sent among the heathen, Arise ye, and let us rise up against her in battle.",
        ),
        v(
          4,
          "Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down, saith the LORD.",
        ),
      ]),
    ],
  },
  {
    name: "Jonah",
    abbreviation: "jon",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "Now the word of the LORD came unto Jonah the son of Amittai, saying,",
        ),
        v(
          2,
          "Arise, go to Nineveh, that great city, and cry against it; for their wickedness is come up before me.",
        ),
        v(
          3,
          "But Jonah rose up to flee unto Tarshish from the presence of the LORD, and went down to Joppa; and he found a ship going to Tarshish: so he paid the fare thereof, and went down into it, to go with them unto Tarshish from the presence of the LORD.",
        ),
      ]),
      c(2, [
        v(
          1,
          "Then Jonah prayed unto the LORD his God out of the fish's belly,",
        ),
        v(
          9,
          "But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD.",
        ),
      ]),
    ],
  },
  {
    name: "Micah",
    abbreviation: "mic",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "The word of the LORD that came to Micah the Morasthite in the days of Jotham, Ahaz, and Hezekiah, kings of Judah, which he saw concerning Samaria and Jerusalem.",
        ),
      ]),
      c(6, [
        v(
          8,
          "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
        ),
      ]),
    ],
  },
  {
    name: "Nahum",
    abbreviation: "nah",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "The burden of Nineveh. The book of the vision of Nahum the Elkoshite.",
        ),
        v(
          7,
          "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
        ),
      ]),
    ],
  },
  {
    name: "Habakkuk",
    abbreviation: "hab",
    testament: Testament.Old,
    chapters: [
      c(1, [v(1, "The burden which Habakkuk the prophet did see.")]),
      c(2, [
        v(
          4,
          "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.",
        ),
      ]),
      c(3, [
        v(
          18,
          "Yet I will rejoice in the LORD, I will joy in the God of my salvation.",
        ),
        v(
          19,
          "The LORD God is my strength, and he will make my feet like hinds' feet, and he will make me to walk upon mine high places. To the chief singer on my stringed instruments.",
        ),
      ]),
    ],
  },
  {
    name: "Zephaniah",
    abbreviation: "zep",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "The word of the LORD which came unto Zephaniah the son of Cushi, the son of Gedaliah, the son of Amariah, the son of Hizkiah, in the days of Josiah the son of Amon, king of Judah.",
        ),
      ]),
      c(3, [
        v(
          17,
          "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.",
        ),
      ]),
    ],
  },
  {
    name: "Haggai",
    abbreviation: "hag",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "In the second year of Darius the king, in the sixth month, in the first day of the month, came the word of the LORD by Haggai the prophet unto Zerubbabel the son of Shealtiel, governor of Judah, and to Joshua the son of Josedech, the high priest, saying,",
        ),
        v(7, "Thus saith the LORD of hosts; Consider your ways."),
      ]),
      c(2, [
        v(
          9,
          "The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace, saith the LORD of hosts.",
        ),
      ]),
    ],
  },
  {
    name: "Zechariah",
    abbreviation: "zec",
    testament: Testament.Old,
    chapters: [
      c(1, [
        v(
          1,
          "In the eighth month, in the second year of Darius, came the word of the LORD unto Zechariah, the son of Berechiah, the son of Iddo the prophet, saying,",
        ),
        v(
          3,
          "Therefore say thou unto them, Thus saith the LORD of hosts; Turn ye unto me, saith the LORD of hosts, and I will turn unto you, saith the LORD of hosts.",
        ),
      ]),
      c(9, [
        v(
          9,
          "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.",
        ),
      ]),
    ],
  },
  {
    name: "Malachi",
    abbreviation: "mal",
    testament: Testament.Old,
    chapters: [
      c(1, [v(1, "The burden of the word of the LORD to Israel by Malachi.")]),
      c(3, [
        v(
          10,
          "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.",
        ),
      ]),
      c(4, [
        v(
          2,
          "But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall.",
        ),
        v(
          6,
          "And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite the earth with a curse.",
        ),
      ]),
    ],
  },
  // ============================================================
  // NEW TESTAMENT
  // ============================================================
  {
    name: "Matthew",
    abbreviation: "mat",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "The book of the generation of Jesus Christ, the son of David, the son of Abraham.",
        ),
        v(
          18,
          "Now the birth of Jesus Christ was on this wise: When as his mother Mary was espoused to Joseph, before they came together, she was found with child of the Holy Ghost.",
        ),
        v(
          23,
          "Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.",
        ),
      ]),
      c(5, [
        v(
          1,
          "And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:",
        ),
        v(2, "And he opened his mouth, and taught them, saying,"),
        v(
          3,
          "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
        ),
        v(4, "Blessed are they that mourn: for they shall be comforted."),
        v(5, "Blessed are the meek: for they shall inherit the earth."),
        v(
          6,
          "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.",
        ),
        v(7, "Blessed are the merciful: for they shall obtain mercy."),
        v(8, "Blessed are the pure in heart: for they shall see God."),
        v(
          9,
          "Blessed are the peacemakers: for they shall be called the children of God.",
        ),
        v(
          14,
          "Ye are the light of the world. A city that is set on an hill cannot be hid.",
        ),
        v(
          16,
          "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
        ),
        v(
          44,
          "But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you;",
        ),
        v(
          45,
          "That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.",
        ),
      ]),
      c(6, [
        v(
          9,
          "After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.",
        ),
        v(
          10,
          "Thy kingdom come, Thy will be done in earth, as it is in heaven.",
        ),
        v(11, "Give us this day our daily bread."),
        v(12, "And forgive us our debts, as we forgive our debtors."),
        v(
          13,
          "And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.",
        ),
        v(
          19,
          "Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal:",
        ),
        v(
          20,
          "But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal:",
        ),
        v(21, "For where your treasure is, there will your heart be also."),
        v(
          33,
          "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
        ),
      ]),
      c(7, [
        v(
          7,
          "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:",
        ),
        v(
          12,
          "Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.",
        ),
      ]),
      c(28, [
        v(
          18,
          "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth.",
        ),
        v(
          19,
          "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:",
        ),
        v(
          20,
          "Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world. Amen.",
        ),
      ]),
    ],
  },
  {
    name: "Mark",
    abbreviation: "mrk",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(1, "The beginning of the gospel of Jesus Christ, the Son of God;"),
        v(
          3,
          "The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.",
        ),
        v(
          11,
          "And there came a voice from heaven, saying, Thou art my beloved Son, in whom I am well pleased.",
        ),
        v(
          15,
          "And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.",
        ),
        v(
          17,
          "And Jesus said unto them, Come ye after me, and I will make you to become fishers of men.",
        ),
      ]),
      c(10, [
        v(
          13,
          "And they brought young children to him, that he should touch them: and his disciples rebuked those that brought them.",
        ),
        v(
          14,
          "But when Jesus saw it, he was much displeased, and said unto them, Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God.",
        ),
        v(
          27,
          "And Jesus looking upon them saith, With men it is impossible, but not with God: for with God all things are possible.",
        ),
        v(
          45,
          "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.",
        ),
      ]),
      c(16, [
        v(
          6,
          "And he saith unto them, Be not affrighted: Ye seek Jesus of Nazareth, which was crucified: he is risen; he is not here: behold the place where they laid him.",
        ),
        v(
          15,
          "And he said unto them, Go ye into all the world, and preach the gospel to every creature.",
        ),
      ]),
    ],
  },
  {
    name: "Luke",
    abbreviation: "luk",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "Forasmuch as many have taken in hand to set forth in order a declaration of those things which are most surely believed among us,",
        ),
        v(37, "For with God nothing shall be impossible."),
        v(46, "And Mary said, My soul doth magnify the Lord,"),
        v(47, "And my spirit hath rejoiced in God my Saviour."),
      ]),
      c(2, [
        v(
          1,
          "And it came to pass in those days, that there went out a decree from Caesar Augustus, that all the world should be taxed.",
        ),
        v(
          10,
          "And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.",
        ),
        v(
          11,
          "For unto you is born this day in the city of David a Saviour, which is Christ the Lord.",
        ),
        v(
          14,
          "Glory to God in the highest, and on earth peace, good will toward men.",
        ),
      ]),
      c(15, [
        v(11, "And he said, A certain man had two sons:"),
        v(
          20,
          "And he arose, and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him.",
        ),
        v(
          24,
          "For this my son was dead, and is alive again; he was lost, and is found. And they began to be merry.",
        ),
      ]),
      c(23, [
        v(
          34,
          "Then said Jesus, Father, forgive them; for they know not what they do. And they parted his raiment, and cast lots.",
        ),
        v(
          46,
          "And when Jesus had cried with a loud voice, he said, Father, into thy hands I commend my spirit: and having said thus, he gave up the ghost.",
        ),
      ]),
    ],
  },
  {
    name: "John",
    abbreviation: "jhn",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "In the beginning was the Word, and the Word was with God, and the Word was God.",
        ),
        v(2, "The same was in the beginning with God."),
        v(
          3,
          "All things were made by him; and without him was not any thing made that was made.",
        ),
        v(4, "In him was life; and the life was the light of men."),
        v(
          5,
          "And the light shineth in darkness; and the darkness comprehended it not.",
        ),
        v(
          14,
          "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
        ),
      ]),
      c(3, [
        v(
          16,
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        ),
        v(
          17,
          "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
        ),
      ]),
      c(10, [
        v(
          10,
          "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.",
        ),
        v(
          11,
          "I am the good shepherd: the good shepherd giveth his life for the sheep.",
        ),
      ]),
      c(11, [
        v(
          25,
          "Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:",
        ),
        v(35, "Jesus wept."),
      ]),
      c(14, [
        v(
          1,
          "Let not your heart be troubled: ye believe in God, believe also in me.",
        ),
        v(
          2,
          "In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.",
        ),
        v(
          6,
          "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
        ),
        v(
          27,
          "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
        ),
      ]),
      c(15, [
        v(
          5,
          "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.",
        ),
        v(
          13,
          "Greater love hath no man than this, that a man lay down his life for his friends.",
        ),
      ]),
      c(20, [
        v(
          21,
          "Then said Jesus to them again, Peace be unto you: as my Father hath sent me, even so send I you.",
        ),
        v(
          29,
          "Jesus saith unto him, Thomas, because thou hast seen me, thou hast believed: blessed are they that have not seen, and yet have believed.",
        ),
      ]),
    ],
  },
  {
    name: "Acts",
    abbreviation: "act",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach,",
        ),
        v(
          8,
          "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.",
        ),
      ]),
      c(2, [
        v(
          1,
          "And when the day of Pentecost was fully come, they were all with one accord in one place.",
        ),
        v(
          2,
          "And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting.",
        ),
        v(
          3,
          "And there appeared unto them cloven tongues like as of fire, and it sat upon each of them.",
        ),
        v(
          4,
          "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.",
        ),
        v(
          38,
          "Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.",
        ),
      ]),
      c(16, [
        v(
          31,
          "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.",
        ),
      ]),
    ],
  },
  {
    name: "Romans",
    abbreviation: "rom",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          16,
          "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.",
        ),
        v(
          17,
          "For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith.",
        ),
      ]),
      c(3, [
        v(23, "For all have sinned, and come short of the glory of God;"),
        v(
          24,
          "Being justified freely by his grace through the redemption that is in Christ Jesus:",
        ),
      ]),
      c(5, [
        v(
          1,
          "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:",
        ),
        v(
          8,
          "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
        ),
      ]),
      c(6, [
        v(
          23,
          "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
        ),
      ]),
      c(8, [
        v(
          1,
          "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
        ),
        v(
          28,
          "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
        ),
        v(
          38,
          "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,",
        ),
        v(
          39,
          "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
        ),
      ]),
      c(10, [
        v(
          9,
          "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
        ),
      ]),
      c(12, [
        v(
          1,
          "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.",
        ),
        v(
          2,
          "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.",
        ),
      ]),
    ],
  },
  {
    name: "1 Corinthians",
    abbreviation: "1co",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          18,
          "For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.",
        ),
      ]),
      c(13, [
        v(
          1,
          "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.",
        ),
        v(
          4,
          "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,",
        ),
        v(
          5,
          "Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;",
        ),
        v(
          7,
          "Beareth all things, believeth all things, hopeth all things, endureth all things.",
        ),
        v(
          8,
          "Charity never faileth: but whether there be prophecies, they shall fail; whether there be tongues, they shall cease; whether there be knowledge, it shall vanish away.",
        ),
        v(
          13,
          "And now abideth faith, hope, charity, these three; but the greatest of these is charity.",
        ),
      ]),
      c(15, [
        v(
          20,
          "But now is Christ risen from the dead, and become the firstfruits of them that slept.",
        ),
        v(55, "O death, where is thy sting? O grave, where is thy victory?"),
        v(
          57,
          "But thanks be to God, which giveth us the victory through our Lord Jesus Christ.",
        ),
        v(
          58,
          "Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.",
        ),
      ]),
    ],
  },
  {
    name: "2 Corinthians",
    abbreviation: "2co",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          3,
          "Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort;",
        ),
        v(
          4,
          "Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God.",
        ),
      ]),
      c(5, [
        v(7, "For we walk by faith, not by sight:"),
        v(
          17,
          "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
        ),
      ]),
      c(12, [
        v(
          9,
          "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.",
        ),
      ]),
    ],
  },
  {
    name: "Galatians",
    abbreviation: "gal",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "Paul, an apostle, (not of men, neither by man, but by Jesus Christ, and God the Father, who raised him from the dead;)",
        ),
      ]),
      c(5, [
        v(
          22,
          "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,",
        ),
        v(23, "Meekness, temperance: against such there is no law."),
      ]),
      c(6, [
        v(
          7,
          "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.",
        ),
      ]),
    ],
  },
  {
    name: "Ephesians",
    abbreviation: "eph",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          3,
          "Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ:",
        ),
      ]),
      c(2, [
        v(
          8,
          "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:",
        ),
        v(9, "Not of works, lest any man should boast."),
        v(
          10,
          "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.",
        ),
      ]),
      c(6, [
        v(
          10,
          "Finally, my brethren, be strong in the Lord, and in the power of his might.",
        ),
        v(
          11,
          "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.",
        ),
        v(
          13,
          "Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand.",
        ),
      ]),
    ],
  },
  {
    name: "Philippians",
    abbreviation: "php",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          6,
          "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:",
        ),
        v(21, "For to me to live is Christ, and to die is gain."),
      ]),
      c(4, [
        v(4, "Rejoice in the Lord always: and again I say, Rejoice."),
        v(
          6,
          "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
        ),
        v(
          7,
          "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
        ),
        v(
          8,
          "Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.",
        ),
        v(
          11,
          "Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be content.",
        ),
        v(13, "I can do all things through Christ which strengtheneth me."),
        v(
          19,
          "But my God shall supply all your need according to his riches in glory by Christ Jesus.",
        ),
      ]),
    ],
  },
  {
    name: "Colossians",
    abbreviation: "col",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          15,
          "Who is the image of the invisible God, the firstborn of every creature:",
        ),
        v(17, "And he is before all things, and by him all things consist."),
      ]),
      c(3, [
        v(2, "Set your affection on things above, not on things on the earth."),
        v(
          23,
          "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;",
        ),
      ]),
    ],
  },
  {
    name: "1 Thessalonians",
    abbreviation: "1th",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "Paul, and Silvanus, and Timotheus, unto the church of the Thessalonians which is in God the Father and in the Lord Jesus Christ: Grace be unto you, and peace, from God our Father, and the Lord Jesus Christ.",
        ),
      ]),
      c(5, [
        v(16, "Rejoice evermore."),
        v(17, "Pray without ceasing."),
        v(
          18,
          "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.",
        ),
      ]),
    ],
  },
  {
    name: "2 Thessalonians",
    abbreviation: "2th",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "Paul, and Silvanus, and Timotheus, unto the church of the Thessalonians in God our Father and the Lord Jesus Christ:",
        ),
      ]),
      c(3, [
        v(
          10,
          "For even when we were with you, this we commanded you, that if any would not work, neither should he eat.",
        ),
        v(
          16,
          "Now the Lord of peace himself give you peace always by all means. The Lord be with you all.",
        ),
      ]),
    ],
  },
  {
    name: "1 Timothy",
    abbreviation: "1ti",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          15,
          "This is a faithful saying, and worthy of all acceptation, that Christ Jesus came into the world to save sinners; of whom I am chief.",
        ),
      ]),
      c(6, [
        v(6, "But godliness with contentment is great gain."),
        v(
          10,
          "For the love of money is the root of all evil: which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows.",
        ),
        v(
          12,
          "Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called, and hast professed a good profession before many witnesses.",
        ),
      ]),
    ],
  },
  {
    name: "2 Timothy",
    abbreviation: "2ti",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          7,
          "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
        ),
      ]),
      c(3, [
        v(
          16,
          "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:",
        ),
        v(
          17,
          "That the man of God may be perfect, throughly furnished unto all good works.",
        ),
      ]),
      c(4, [
        v(
          7,
          "I have fought a good fight, I have finished my course, I have kept the faith:",
        ),
        v(
          8,
          "Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.",
        ),
      ]),
    ],
  },
  {
    name: "Titus",
    abbreviation: "tit",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "Paul, a servant of God, and an apostle of Jesus Christ, according to the faith of God's elect, and the acknowledging of the truth which is after godliness;",
        ),
      ]),
      c(3, [
        v(
          5,
          "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;",
        ),
      ]),
    ],
  },
  {
    name: "Philemon",
    abbreviation: "phm",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "Paul, a prisoner of Jesus Christ, and Timothy our brother, unto Philemon our dearly beloved, and fellowlabourer,",
        ),
        v(
          6,
          "That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus.",
        ),
      ]),
    ],
  },
  {
    name: "Hebrews",
    abbreviation: "heb",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets,",
        ),
        v(
          2,
          "Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds;",
        ),
      ]),
      c(11, [
        v(
          1,
          "Now faith is the substance of things hoped for, the evidence of things not seen.",
        ),
        v(
          6,
          "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.",
        ),
      ]),
      c(12, [
        v(
          1,
          "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us,",
        ),
        v(
          2,
          "Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
        ),
      ]),
      c(13, [
        v(8, "Jesus Christ the same yesterday, and to day, and for ever."),
      ]),
    ],
  },
  {
    name: "James",
    abbreviation: "jas",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          2,
          "My brethren, count it all joy when ye fall into divers temptations;",
        ),
        v(3, "Knowing this, that the trying of your faith worketh patience."),
        v(
          5,
          "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
        ),
        v(
          22,
          "But be ye doers of the word, and not hearers only, deceiving your own selves.",
        ),
      ]),
      c(2, [
        v(17, "Even so faith, if it hath not works, is dead, being alone."),
        v(
          26,
          "For as the body without the spirit is dead, so faith without works is dead also.",
        ),
      ]),
      c(4, [
        v(
          7,
          "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
        ),
        v(
          8,
          "Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.",
        ),
      ]),
    ],
  },
  {
    name: "1 Peter",
    abbreviation: "1pe",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          3,
          "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead,",
        ),
        v(
          7,
          "That the trial of your faith, being much more precious than of gold that perisheth, though it be tried with fire, might be found unto praise and honour and glory at the appearing of Jesus Christ:",
        ),
      ]),
      c(2, [
        v(
          9,
          "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:",
        ),
      ]),
      c(5, [
        v(7, "Casting all your care upon him; for he careth for you."),
        v(
          8,
          "Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour:",
        ),
      ]),
    ],
  },
  {
    name: "2 Peter",
    abbreviation: "2pe",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          3,
          "According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue:",
        ),
        v(
          21,
          "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.",
        ),
      ]),
      c(3, [
        v(
          9,
          "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.",
        ),
        v(
          18,
          "But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.",
        ),
      ]),
    ],
  },
  {
    name: "1 John",
    abbreviation: "1jn",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          9,
          "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
        ),
      ]),
      c(3, [
        v(
          1,
          "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.",
        ),
        v(
          16,
          "Hereby perceive we the love of God, because he laid down his life for us: and we ought to lay down our lives for the brethren.",
        ),
      ]),
      c(4, [
        v(
          7,
          "Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.",
        ),
        v(8, "He that loveth not knoweth not God; for God is love."),
        v(
          18,
          "There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love.",
        ),
        v(19, "We love him, because he first loved us."),
      ]),
      c(5, [
        v(
          13,
          "These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life, and that ye may believe on the name of the Son of God.",
        ),
      ]),
    ],
  },
  {
    name: "2 John",
    abbreviation: "2jn",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "The elder unto the elect lady and her children, whom I love in the truth; and not I only, but also all they that have known the truth;",
        ),
        v(
          6,
          "And this is love, that we walk after his commandments. This is the commandment, That, as ye have heard from the beginning, ye should walk in it.",
        ),
      ]),
    ],
  },
  {
    name: "3 John",
    abbreviation: "3jn",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(1, "The elder unto the wellbeloved Gaius, whom I love in the truth."),
        v(
          4,
          "I have no greater joy than to hear that my children walk in truth.",
        ),
      ]),
    ],
  },
  {
    name: "Jude",
    abbreviation: "jde",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "Jude, the servant of Jesus Christ, and brother of James, to them that are sanctified by God the Father, and preserved in Jesus Christ, and called:",
        ),
        v(
          3,
          "Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints.",
        ),
        v(
          24,
          "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy,",
        ),
        v(
          25,
          "To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen.",
        ),
      ]),
    ],
  },
  {
    name: "Revelation",
    abbreviation: "rev",
    testament: Testament.New,
    chapters: [
      c(1, [
        v(
          1,
          "The Revelation of Jesus Christ, which God gave unto him, to shew unto his servants things which must shortly come to pass; and he sent and signified it by his angel unto his servant John:",
        ),
        v(
          3,
          "Blessed is he that readeth, and they that hear the words of this prophecy, and keep those things which are written therein: for the time is at hand.",
        ),
        v(
          8,
          "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.",
        ),
      ]),
      c(3, [
        v(
          20,
          "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.",
        ),
      ]),
      c(21, [
        v(
          1,
          "And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea.",
        ),
        v(
          4,
          "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
        ),
        v(
          5,
          "And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.",
        ),
      ]),
      c(22, [
        v(
          12,
          "And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be.",
        ),
        v(
          13,
          "I am Alpha and Omega, the beginning and the end, the first and the last.",
        ),
        v(
          20,
          "He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.",
        ),
        v(21, "The grace of our Lord Jesus Christ be with you all. Amen."),
      ]),
    ],
  },
];
