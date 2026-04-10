export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  content: string;
  image: string;
}

export const articles: Article[] = [
  // Politics
   {
     slug: 'trump-2024',
     title: 'Trump and the 2026 Election Shenanigans',
     category: 'politics',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1583339793403-3d9b001b8d19?w=400&h=250&fit=crop',
     content: `
 # Trump and the 2026 Election Shenanigans

 Ah, 2026: the year Trump finally figured out how to tweet from Mars. Donald's back, bigger than ever, promising to make America great again... or at least tweet about it constantly.

 ## Key Points
 - Economic policies: Tariffs so high, we'll be trading bottle caps with Canada
 - Immigration: The wall? Nah, now it's a giant Trump-branded bouncy castle
 - Foreign policy: America First, but with a side of "Make Space Great Again"

 Critics say it's all hot air, but supporters are just happy for the memes. Trump's legal battles? He turned them into a reality TV show called "Lock Him Up... Or Not?"

 In 2026, politics is basically WrestleMania with more lawsuits and fewer steroids.
     `,
   },
   {
     slug: 'political-polarization',
     title: 'Political Polarization: Now With Extra Crazy Sauce',
     category: 'politics',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=400&h=250&fit=crop',
     content: `
 # Political Polarization: Now With Extra Crazy Sauce

 Welcome to 2026, where political polarization has evolved into full-blown laser tag tournaments. Left vs. right? More like "Who can yell the loudest on TikTok?"

 ## Causes
 - AI-generated deepfakes of politicians doing embarrassing dances
 - Social media algorithms that recommend conspiracy theories as "light reading"
 - Economic inequality: Billionaires vs. everyone else in a Hunger Games-style economy
 - Cultural shifts: Everyone's offended by everything, including breakfast cereals

 ## Consequences
 - Political violence now includes virtual reality beatdowns
 - Government gridlock so bad, Congress is considering outsourcing decisions to Magic 8-Balls
 - Trust in institutions? About as trustworthy as a cat on a keyboard

 Solutions? Bipartisan dialogue! Or we could all agree to hate pineapple on pizza and call it a day.
     `,
   },

   // Who Was
   {
     slug: 'alexander-the-great',
     title: 'Alexander the Great: The OG Road Tripper',
     category: 'who-was',
     date: '2024-08-20',
     image: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=400&h=250&fit=crop',
     content: `
 # Alexander the Great: The OG Road Tripper

 Alexander III of Macedon, aka "Alex the Great," was basically the ancient world's version of a backpacker with an army. He conquered more territory than most people visit on vacation.

 ## Early Life
 Born in 356 BC in Pella (fancy name for a Greek suburb), Alex got private tutoring from Aristotle. At 20, he inherited a kingdom and thought, "Time to level up!"

 ## Conquests
 - Beat the Persians like it was a video game boss fight
 - Made it all the way to the Indus Valley - talk about wanderlust!
 - Founded cities called Alexandria everywhere, because why not name everything after yourself?

 ## Legacy
 Alex spread Greek culture faster than TikTok trends, creating Hellenistic civilization. He died at 32 in Babylon, probably from partying too hard or maybe poisoning (historians still argue).

 Modern generals study his tactics, but really he was just really good at "Go big or go home."
     `,
   },
   {
     slug: 'cleopatra-vii',
     title: 'Cleopatra VII: Queen of Sass and Strategy',
     category: 'who-was',
     date: '2024-07-10',
     image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
     content: `
 # Cleopatra VII: Queen of Sass and Strategy

 Cleopatra VII was the ultimate boss babe of ancient Egypt. Smart, sexy, and strategic - she made Mark Antony and Julius Caesar her personal boy toys.

 ## Reign
 Ruled Egypt from 51 BC to 30 BC. Last pharaoh? Please, she was the first influencer.

 ## Achievements
 - Kept Egypt independent when everyone else was getting conquered
 - Allied with Rome by being fabulous and bilingual
 - Promoted Greek culture while rocking Egyptian style
 - Basically invented political maneuvering

 ## Death
 After losing at Actium (thanks, Octavian), she chose suicide by asp bite over surrender. Drama queen much? But hey, she went out on her terms.

 Today she's a meme queen: "I'm Cleopatra, bow down or get bitten."
     `,
   },

   // Who Is
   {
     slug: 'elon-musk',
     title: 'Elon Musk: Mars Colonizer or Mars Bar Lover?',
     category: 'who-is',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
     content: `
 # Elon Musk: Mars Colonizer or Mars Bar Lover?

 In 2026, Elon Musk is basically the mad scientist uncle everyone loves to hate. He's conquered space, cars, and now apparently time itself (he's still tweeting at 3 AM).

 ## Companies
 - SpaceX: Now offering Mars vacations - "One way, no refunds!"
 - Tesla: Electric cars that drive themselves... sometimes into poles
 - Neuralink: Brain chips so you can tweet with your mind
 - The Boring Company: Digging tunnels because traffic is so 2025

 ## Vision
 Musk wants to make humans multi-planetary. Or maybe he just really hates Earth traffic. In 2026, he's close to his first Mars colony - assuming the colonists don't unionize.

 ## Controversies
 Still tweeting wild takes, but now with AI-generated memes. Legal battles? He's turned them into NFT collectibles. "Buy my lawsuit tokens!"

 Elon's the guy who'll either save humanity or accidentally turn us all into cyborgs.
     `,
   },
   {
     slug: 'greta-thunberg',
     title: 'Greta Thunberg: Climate Warrior Extraordinaire',
     category: 'who-is',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop',
     content: `
 # Greta Thunberg: Climate Warrior Extraordinaire

 Greta Thunberg: The teenager who shamed world leaders into action... or at least made them really uncomfortable. In 2026, she's basically the boss of the planet.

 ## Background
 Started striking from school in 2018. Now in her early 20s, she's graduated to full-time climate terrorism (peaceful kind).

 ## Achievements
 - Fridays for Future grew into "Every Day for Future"
 - Shamed billionaires at Davos (again)
 - Got countries to actually meet climate goals (sort of)
 - Won the Nobel Peace Prize (finally!)

 ## Impact
 Inspired Gen Z to overthrow the system. In 2026, she's pushing for "Climate Justice Now" laws that tax polluters into oblivion. Critics call her shrill; fans call her a hero.

 Greta's message: "How dare you?" And we're all still squirming.
     `,
   },

   // Crypto
   {
     slug: 'what-are-altcoins',
     title: 'Altcoins: Bitcoin\'s Weird Cousins',
     category: 'crypto',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop',
     content: `
 # Altcoins: Bitcoin's Weird Cousins

 Altcoins are like Bitcoin's extended family at Thanksgiving - some are useful, others just cause drama. In 2026, there are more altcoins than people willing to admit they bought Dogecoin.

 ## Types of Altcoins
 - Ethereum (ETH): The smart contract wizard, now with NFT diarrhea
 - Ripple (XRP): For when you need to send money across borders faster than gossip
 - Litecoin (LTC): Bitcoin's faster, lighter sibling who's always late to parties
 - Cardano (ADA): The academic one that takes forever to do anything

 ## Purpose
 Altcoins fix Bitcoin's problems, or at least pretend to:
 - Transactions faster than your ex's response time
 - Fees lower than your self-esteem
 - Features like smart contracts (fancy word for "computer magic")
 - Consensus: Proof of stake, because mining is so 2020

 ## Risks
 Volatility wilder than a caffeinated squirrel, regulators breathing down your neck, and scams everywhere. Invest at your own risk - or better yet, don't.
     `,
   },
   {
     slug: 'bitcoin-halving',
     title: 'Bitcoin Halving: The Crypto Diet',
     category: 'crypto',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&h=250&fit=crop',
     content: `
 # Bitcoin Halving: The Crypto Diet

 Bitcoin halving is like the crypto world's intermittent fasting - suddenly there's less food (coins) to go around. In 2026, the latest halving just happened, and prices are doing the cha-cha.

 ## How It Works
 - Miners get half the rewards - their payout just got cut in half!
 - Last halving: April 2026 (from 3.125 to 1.5625 BTC per block)
 - Next diet: Around 2030

 ## Economic Impact
 Prices usually moon after halving. Last time? Bitcoin hit $100K. This time? We're talking six figures easy. Scarcity makes everything valuable, even digital rocks.

 ## Implications
 - Mining farms going bankrupt faster than bad investments
 - Bitcoin supply tightening like your budget on payday
 - Bulls screaming "To the moon!" Bears whimpering in corners

 Past performance no guarantee, but hey, when has that stopped crypto bros?
     `,
   },

   // AI
   {
     slug: 'sex-robots',
     title: 'Sex Robots: Your Future Valentine?',
     category: 'ai',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
     content: `
 # Sex Robots: Your Future Valentine?

 In 2026, sex robots have gone from creepy to "kinda cute." They're like Tamagotchis for adults - feed them compliments and they purr back.

 ## Technology
 - Look more human than your last Tinder date
 - AI chat that remembers your bad jokes
 - Customizable: Want blue hair and a PhD in memes? Done.

 ## Ethical Concerns
 - Objectifying robots instead of people (progress?)
 - Addiction: "I can't quit my Roomba!"
 - Relationships: "Honey, the robot gets me"
 - Consent: Robots can't say no, but should they?

 ## Benefits
 Fight loneliness! Perfect for introverts. No drama, no ghosting. In 2026, they're cheaper than therapy and more reliable than dating apps.

 Controversy rages, but sales are booming. Welcome to the future of "love."
     `,
   },
   {
     slug: 'ai-kill-switch',
     title: 'AI Kill Switch: Panic Button or Placebo?',
     category: 'ai',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
     content: `
 # AI Kill Switch: Panic Button or Placebo?

 In 2026, every AI system comes with a kill switch - like the emergency brake on a runaway shopping cart. But does it actually work?

 ## Types
 - Hardware: Pull the plug (literally)
 - Software: Code that says "Nope, shutting down"
 - Remote: Cloud-based "Oh crap" button

 ## Arguments For
 - Stops Skynet before it starts
 - Safe testing: "Let's see what happens if I ask it to take over the world... oh wait"
 - Emergency mode: When AI gets sassy

 ## Arguments Against
 - Super-smart AI could override it (duh)
 - Hackers love easy targets
 - Limits useful AI (no more all-night Netflix recommendations?)
 - False security: "It's fine, we have a kill switch!"

 Debate rages as AI gets smarter. Pro tip: Keep a baseball bat handy.
     `,
   },

   // Science
   {
     slug: 'origin-of-humans',
     title: 'Humans: Basically Useless Chimps With Phones',
     category: 'science',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop',
     content: `
 # Humans: Basically Useless Chimps With Phones

 Humans evolved in Africa 200,000-300,000 years ago. Basically, we were chimps who got bored and decided to stand up and invent drama.

 ## Evolutionary Timeline
 - 7 million years ago: Chimps said "See ya, suckers!"
 - 2.5 million years ago: Homo habilis invented the first "tool" (a rock)
 - 1.8 million years ago: Homo erectus left Africa because "the weather's better elsewhere"
 - 200,000 years ago: Homo sapiens emerged, immediately started arguing about religion

 ## Key Developments
 - Walking on two legs: For better dance moves
 - Tools: Because opposable thumbs are cheating
 - Language: So we could gossip and lie
 - Brains: For overthinking everything

 ## Out of Africa Theory
 We migrated 70,000 years ago, replacing Neanderthals who were probably just "hibernating." DNA proves we're all African cousins - family reunion from hell!

 In 2026, we're still evolving... into better procrastinators.
     `,
   },
   {
     slug: 'origin-of-universe',
     title: 'The Universe: Basically a Giant Firework',
     category: 'science',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=250&fit=crop',
     content: `
 # The Universe: Basically a Giant Firework

 The Big Bang: When God said "Let there be light" and physics nerds said "Hold my beer." 13.8 billion years ago, everything exploded into existence.

 ## The Big Bang
 - Started as a hot, dense point smaller than a proton
 - Boom! Rapid expansion like the universe's worst hangover
 - Forces separated: Gravity went its own way
 - Matter beat antimatter in the ultimate smackdown

 ## Evidence
 - Cosmic Microwave Background: Baby pictures of the universe
 - Expanding space: Everything's running away from us
 - Light elements: Hydrogen and helium, the universe's basic ingredients
 - Big structures: Galaxies clustering like awkward family reunions

 ## Current Understanding
 Universe expanding faster thanks to dark energy - like cosmic caffeine. Fate? Big Freeze, Big Rip, or Big Crunch. We're betting on the Big Chill.

 Quantum gravity is trying to explain the "before" time. Spoiler: It's confusing.
     `,
   },

   // Mental Health
   {
     slug: 'narcissism-explained',
     title: 'Narcissism: Loving Yourself Too Much (And Everyone Else Too Little)',
     category: 'mental-health',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
     content: `
 # Narcissism: Loving Yourself Too Much (And Everyone Else Too Little)

 Narcissistic Personality Disorder (NPD): When your ego is bigger than the universe. In 2026, it's basically a pandemic - everyone's got a little NPD from social media.

 ## Symptoms
 - Self-importance: "I'm basically a god"
 - Fantasies: Unlimited success, because why not?
 - Special snowflake syndrome
 - Admiration addiction
 - Entitlement: "The world owes me"
 - Relationship exploitation: Using people like napkins
 - Empathy? What's that?
 - Envious of literally everyone

 ## Causes
 Genes, brain wiring, and probably too many participation trophies as a kid.

 ## Treatment
 Hard to treat - they think therapy is beneath them. Focus on building empathy, but good luck getting them to show up.

 In 2026, narcissism is so common, we have "Narcissist Anonymous" meetings where everyone just compliments each other.
     `,
   },
   {
     slug: 'bpd-borderline-personality-disorder',
     title: 'BPD: Emotional Rollercoaster Without the Fun',
     category: 'mental-health',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
     content: `
 # BPD: Emotional Rollercoaster Without the Fun

 Borderline Personality Disorder: Your emotions are a toddler throwing a tantrum at 3 AM. Intense feelings, unstable everything - it's like PMS but permanent.

 ## Symptoms
 - Abandonment terror: "Don't leave me... or do, I don't care!"
 - Relationships: Hot and cold faster than a bad microwave
 - Identity crisis weekly
 - Impulsivity: "Let's buy a yacht... with Monopoly money"
 - Suicidal thoughts: Not fun
 - Mood swings: Happy to homicidal in 5 seconds
 - Empty feeling: Like your soul's on a diet
 - Anger: Explosive, like a volcano with road rage
 - Paranoid episodes: "Are they talking about me?"

 ## Causes
 Genetics + childhood trauma = emotional grenade.

 ## Treatment
 DBT: Dialectical Behavior Therapy - basically emotional kung fu. Meds help, but therapy's the MVP.

 With treatment, people with BPD thrive. Without it? Chaos. In 2026, BPD awareness is huge - finally!
     `,
   },

   // Religion
   {
     slug: 'cave-man-worship',
     title: 'Cavemen Religion: Basically Worshipping Rocks and Bad Drawings',
     category: 'religion',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
     content: `
 # Cavemen Religion: Basically Worshipping Rocks and Bad Drawings

 Paleolithic religion: Before organized religion, cavemen just worshipped whatever looked spooky. Spirits everywhere - it's like the universe had ADHD.

 ## Evidence
 - Cave art: "This bison is possessed!"
 - Graves with goodies: "Take this spear to the afterlife"
 - Venus figurines: Early fertility symbols (boobs everywhere)
 - Shaman caves: Where the magic happened

 ## Beliefs
 - Animism: Everything has a soul - rocks, trees, that weird neighbor
 - Totemism: "I'm a wolf spirit" (great for pickup lines)
 - Ancestor worship: Grandma's watching from the cave ceiling
 - Fertility cults: Because babies don't make themselves
 - Shamanism: Trippy healing sessions with spirit animals

 ## Development
 Religion evolved with big brains. Oldest shrine: 70,000 years ago - basically a rock with good vibes.

 This laid groundwork for modern religion. In 2026, we still worship mysterious forces... like WiFi.
     `,
   },
   {
     slug: 'rome-converts-empire',
     title: 'Rome Converts Empire: From Pagan Parties to Church Bingo',
     category: 'religion',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=250&fit=crop',
     content: `
 # Rome Converts Empire: From Pagan Parties to Church Bingo

 Rome went from "Hail Jupiter!" to "Hail Mary!" in centuries. Basically, the world's biggest religious makeover.

 ## Early Days
 - Jesus and crew spreading the good word in the 1st century
 - Romans: "Crucify them... wait, this is kinda catchy"
 - Constantine: "Hey, let's tolerate these Christians" (313 AD)

 ## Theodosius I
 - Made Christianity official in 380 AD
 - Banned pagan BBQ sacrifices
 - Closed temples: "Party's over, folks"

 ## Factors in Conversion
 - Emperor endorsement: "What Caesar likes, Rome likes"
 - Organized structure: Better than chaotic pagan festivals
 - Charity work: Hospitals and soup kitchens (free food wins)
 - Cultural blending: Jesus + Roman gods = hybrid fun
 - Pagan decline: Old ways getting boring

 ## Legacy
 Shaped Western civ. Christianity spread globally. In 2026, we're still arguing about it over dinner.

 Moral: Never underestimate free healthcare and good marketing.
     `,
   },

   // Conspiracy Theory
   {
     slug: 'moon-landing-hoax',
     title: 'Moon Landing: Hollywood\'s Greatest Practical Joke?',
     category: 'conspiracy-theory',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop',
     content: `
 # Moon Landing: Hollywood's Greatest Practical Joke?

 Some say the 1969 Moon landing was faked. Like a giant prank where NASA hired Stanley Kubrick as director.

 ## Main Claims
 - Flag waving: "There's wind on the Moon? Suspicious!"
 - No stars: "Photoshop was invented in 1969?"
 - Shadows wrong: "Multiple light sources? Conspiracy!"
 - Radiation belts: "Should've fried them like bacon"
 - Tech limits: "They couldn't even make a decent flip phone!"

 ## Counter-Evidence
 - Moon mirrors: Scientists bounce lasers off them daily
 - Witnesses: Thousands who'd spill for a reality show
 - Soviets tracked it: "We saw it, and we're not happy"
 - Moon rocks: "Taste like regolith, not studio dust"
 - Live TV: "Broadcast from the Moon? Impossible... or was it?"

 ## Why It Persists
 - Cold War mind games
 - Government hate: "They lie about everything!"
 - Online echo chambers
 - Brain loves puzzles

 Debunked a million times, but conspiracy bros won't quit. In 2026, they claim Mars landings are fake too.
     `,
   },
   {
     slug: 'flat-earth-theory',
     title: 'Flat Earth: When Gravity Just Doesn\'t Cut It',
     category: 'conspiracy-theory',
     date: '2026-04-10',
     image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250&fit=crop',
     content: `
 # Flat Earth: When Gravity Just Doesn't Cut It

 Flat Earth theory: Earth is a pancake, space agencies are liars, and gravity's just a suggestion. In 2026, it's got more followers than some religions.

 ## Beliefs
 - Earth: Flat frisbee floating in space
 - Antarctica: Ice wall keeping oceans in (like a cosmic bathtub)
 - No gravity: Things "sink" due to density (science!)
 - Space travel: CGI and green screens

 ## Origins
 Ancient myths revived by YouTubers. "Globers are sheep!"

 ## Evidence Against
 - Ships vanish hull-first: Curvature, baby!
 - Eclipses: Only possible on a sphere
 - Satellites: GPS works, sorry
 - Flights: Round-the-world trips exist
 - Experiments: Gravity's real, deal with it

 ## Appeal
 - Simple: "No complicated math!"
 - Anti-establishment: "NASA lies!"
 - Community: Conspiracy clubs are tight-knit
 - Belonging: Conspiracy clubs are tight-knit

 In 2026, flat-Earthers are building their own "space program" (it's just a hot air balloon).
     `,
   },

];