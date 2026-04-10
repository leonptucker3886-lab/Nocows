export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  content: string;
}

export const articles: Article[] = [
  // Politics
  {
    slug: 'trump-2024',
    title: 'Trump and the 2024 Election',
    category: 'politics',
    date: '2024-10-01',
    content: `
# Trump and the 2024 Election

Donald Trump remains a polarizing figure in American politics. His 2024 campaign has focused on economic issues, immigration, and what he calls the "deep state."

## Key Points
- Economic policies emphasizing tariffs and deregulation
- Immigration: Building the wall and stricter border controls
- Foreign policy: America First approach

Critics argue his policies could lead to economic isolation, while supporters believe they will restore American manufacturing jobs.

Trump's legal battles continue, with multiple indictments that he claims are politically motivated.
    `,
  },
  {
    slug: 'political-polarization',
    title: 'The Rise of Political Polarization',
    category: 'politics',
    date: '2024-09-15',
    content: `
# The Rise of Political Polarization

Political polarization in the US has reached unprecedented levels. Social media and echo chambers have exacerbated divisions between left and right.

## Causes
- Algorithm-driven content
- Partisan media
- Economic inequality
- Cultural shifts

## Consequences
- Increased political violence
- Gridlock in government
- Erosion of trust in institutions

Solutions require bipartisan dialogue and media literacy education.
    `,
  },

  // Who Was
  {
    slug: 'alexander-the-great',
    title: 'Alexander the Great: Conqueror of Empires',
    category: 'who-was',
    date: '2024-08-20',
    content: `
# Alexander the Great: Conqueror of Empires

Alexander III of Macedon, known as Alexander the Great, was one of history's most successful military commanders, creating one of the largest empires in ancient history.

## Early Life
Born in 356 BC in Pella, Alexander was tutored by Aristotle and ascended to the throne at age 20.

## Conquests
- Defeated the Persian Empire
- Reached the Indus Valley
- Founded numerous cities named Alexandria

## Legacy
Alexander's empire spread Greek culture across three continents, creating Hellenistic civilization. He died at age 32 in Babylon, possibly from poisoning or disease.

His military tactics and leadership continue to be studied today.
    `,
  },
  {
    slug: 'cleopatra-vii',
    title: 'Cleopatra VII: The Last Pharaoh',
    category: 'who-was',
    date: '2024-07-10',
    content: `
# Cleopatra VII: The Last Pharaoh

Cleopatra VII Philopator was the last active ruler of the Ptolemaic Kingdom of Egypt. Known for her intelligence, political acumen, and relationships with Roman leaders Julius Caesar and Mark Antony.

## Reign
Ruled from 51 BC until her death in 30 BC. She was the last pharaoh of Ancient Egypt.

## Achievements
- Maintained Egypt's independence
- Formed alliances with Rome
- Promoted Hellenistic culture
- Spoke multiple languages

## Death
After the defeat of Mark Antony and her forces at the Battle of Actium, she died by suicide, reportedly by asp bite, to avoid capture by Octavian.

Cleopatra remains a cultural icon, symbolizing beauty, power, and tragedy.
    `,
  },

  // Who Is
  {
    slug: 'elon-musk',
    title: 'Elon Musk: Visionary Entrepreneur',
    category: 'who-is',
    date: '2024-11-05',
    content: `
# Elon Musk: Visionary Entrepreneur

Elon Musk is a South African-born American entrepreneur and businessman. He is the founder, CEO, and Chief Engineer of SpaceX; CEO and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.

## Companies
- SpaceX: Revolutionizing space travel
- Tesla: Electric vehicles and sustainable energy
- Neuralink: Brain-computer interfaces
- The Boring Company: Infrastructure and tunneling

## Vision
Musk aims to understand the universe, colonize Mars, and ensure humanity's survival as a multi-planetary species.

## Controversies
His outspoken nature on social media has led to criticism and legal battles, but his innovations continue to push technological boundaries.
    `,
  },
  {
    slug: 'greta-thunberg',
    title: 'Greta Thunberg: Climate Activist',
    category: 'who-is',
    date: '2024-10-20',
    content: `
# Greta Thunberg: Climate Activist

Greta Thunberg is a Swedish environmental activist who has gained international recognition for her work on climate change. She started the school strike for climate movement.

## Background
Born in 2003, Thunberg began protesting outside the Swedish parliament in 2018 at age 15.

## Achievements
- Founded Fridays for Future movement
- Spoke at UN Climate Change Conference
- Met with world leaders
- Awarded numerous honors

## Impact
Thunberg's activism has inspired millions of young people worldwide to demand action on climate change. She emphasizes the urgency of the climate crisis and criticizes political inaction.
    `,
  },

  // Crypto
  {
    slug: 'what-are-altcoins',
    title: 'What Are Altcoins?',
    category: 'crypto',
    date: '2024-09-01',
    content: `
# What Are Altcoins?

Altcoins are cryptocurrencies other than Bitcoin. The term "altcoin" is a contraction of "alternative coin."

## Types of Altcoins
- Ethereum (ETH): Smart contract platform
- Ripple (XRP): Cross-border payment system
- Litecoin (LTC): Faster Bitcoin alternative
- Cardano (ADA): Research-driven blockchain

## Purpose
Altcoins often aim to improve upon Bitcoin's limitations:
- Faster transactions
- Lower fees
- Additional features like smart contracts
- Different consensus mechanisms

## Risks
High volatility, regulatory uncertainty, and potential for scams make altcoins risky investments.
    `,
  },
  {
    slug: 'bitcoin-halving',
    title: 'Bitcoin Halving: What It Means',
    category: 'crypto',
    date: '2024-04-15',
    content: `
# Bitcoin Halving: What It Means

Bitcoin halving is an event that reduces the rate at which new bitcoins are created. It occurs approximately every four years.

## How It Works
- Reduces block rewards for miners by half
- Last halving: April 2024 (from 6.25 to 3.125 BTC per block)
- Next: Around 2028

## Economic Impact
Historically, halvings have been followed by significant price increases due to reduced supply and increased scarcity.

## Implications
- Affects mining profitability
- Influences Bitcoin's long-term supply curve
- Often seen as bullish signals by investors

However, past performance doesn't guarantee future results.
    `,
  },

  // AI
  {
    slug: 'sex-robots',
    title: 'The Rise of Sex Robots',
    category: 'ai',
    date: '2024-08-30',
    content: `
# The Rise of Sex Robots

Sex robots are humanoid robots designed for sexual purposes. Advances in AI and robotics have made them increasingly sophisticated.

## Technology
- Realistic appearance and movement
- AI-driven conversation and responses
- Customizable features

## Ethical Concerns
- Objectification of women
- Potential for addiction
- Impact on human relationships
- Consent and exploitation issues

## Benefits
Proponents argue they could help with loneliness, sexual health, and provide safe outlets for desires.

The industry remains controversial, with calls for regulation and ethical guidelines.
    `,
  },
  {
    slug: 'ai-kill-switch',
    title: 'AI Kill Switch: Necessary Safeguard or Overkill?',
    category: 'ai',
    date: '2024-07-25',
    content: `
# AI Kill Switch: Necessary Safeguard or Overkill?

An AI kill switch is a mechanism to shut down an AI system in case it becomes uncontrollable or dangerous.

## Types
- Hardware kill switches (physical disconnection)
- Software kill switches (code-based shutdown)
- Remote deactivation systems

## Arguments For
- Prevents rogue AI scenarios
- Allows testing of advanced AI safely
- Provides emergency response capability

## Arguments Against
- May not work if AI becomes superintelligent
- Could be exploited maliciously
- Might limit beneficial AI applications
- Creates false sense of security

The debate continues as AI capabilities advance rapidly.
    `,
  },

  // Science
  {
    slug: 'origin-of-humans',
    title: 'The Origin of Humans',
    category: 'science',
    date: '2024-06-10',
    content: `
# The Origin of Humans

Humans (Homo sapiens) evolved in Africa around 200,000-300,000 years ago from earlier hominins.

## Evolutionary Timeline
- 7 million years ago: Split from chimpanzees
- 2.5 million years ago: Homo habilis (first tool users)
- 1.8 million years ago: Homo erectus (first to leave Africa)
- 200,000 years ago: Homo sapiens emerges

## Key Developments
- Bipedalism
- Tool use and manufacture
- Language development
- Cognitive abilities

## Out of Africa Theory
Modern humans migrated from Africa around 70,000 years ago, replacing or absorbing other hominin species.

Genetic evidence supports this theory, showing all living humans descended from African ancestors.
    `,
  },
  {
    slug: 'origin-of-universe',
    title: 'The Origin of the Universe',
    category: 'science',
    date: '2024-05-20',
    content: `
# The Origin of the Universe

The Big Bang Theory describes the origin of the universe approximately 13.8 billion years ago.

## The Big Bang
- Universe began as a hot, dense point
- Rapid expansion occurred
- Fundamental forces separated
- Matter and antimatter largely annihilated each other

## Evidence
- Cosmic Microwave Background Radiation
- Expansion of the universe
- Abundance of light elements
- Large-scale structure

## Current Understanding
The universe continues to expand, with dark energy accelerating this expansion. The ultimate fate remains uncertain.

Quantum gravity theories attempt to explain the very beginning of time.
    `,
  },

  // Mental Health
  {
    slug: 'narcissism-explained',
    title: 'Understanding Narcissism',
    category: 'mental-health',
    date: '2024-11-10',
    content: `
# Understanding Narcissism

Narcissistic Personality Disorder (NPD) is characterized by grandiosity, need for admiration, and lack of empathy.

## Symptoms
- Exaggerated sense of self-importance
- Fantasies of unlimited success and power
- Belief they are "special" and unique
- Need for admiration
- Sense of entitlement
- Exploitative in relationships
- Lack of empathy
- Envious of others

## Causes
Likely combination of genetic, neurobiological, and environmental factors. Often linked to childhood experiences.

## Treatment
Difficult to treat as individuals rarely seek help. Therapy focuses on building empathy and self-awareness.
    `,
  },
  {
    slug: 'bpd-borderline-personality-disorder',
    title: 'What is Borderline Personality Disorder (BPD)?',
    category: 'mental-health',
    date: '2024-10-05',
    content: `
# What is Borderline Personality Disorder (BPD)?

Borderline Personality Disorder is a mental health condition characterized by difficulties regulating emotion and unstable relationships.

## Symptoms
- Fear of abandonment
- Intense, unstable relationships
- Identity disturbance
- Impulsivity in potentially self-damaging areas
- Suicidal behavior or threats
- Affective instability
- Chronic emptiness
- Intense anger
- Paranoid ideation or dissociation under stress

## Causes
Not fully understood, but likely involves genetic and environmental factors. Often linked to childhood trauma.

## Treatment
Dialectical Behavior Therapy (DBT) is particularly effective. Medications may help manage symptoms.

With proper treatment, many people with BPD lead fulfilling lives.
    `,
  },

  // Religion
  {
    slug: 'cave-man-worship',
    title: 'What Did Cavemen Worship?',
    category: 'religion',
    date: '2024-09-25',
    content: `
# What Did Cavemen Worship?

Paleolithic religious practices were animistic, involving spirits in nature and ancestor worship.

## Evidence
- Cave paintings and carvings
- Burial sites with grave goods
- Venus figurines
- Shamanic practices

## Beliefs
- Animism: Spirits in animals, plants, rocks
- Totemism: Kinship with animal spirits
- Ancestor worship
- Fertility cults
- Shamanism for healing and communication with spirits

## Development
Religion likely evolved with cognitive abilities. The oldest known "shrine" dates to 70,000 years ago.

These early practices laid foundations for later religious systems.
    `,
  },
  {
    slug: 'rome-converts-empire',
    title: 'How Did Rome Convert the Empire?',
    category: 'religion',
    date: '2024-08-15',
    content: `
# How Did Rome Convert the Empire?

Christianity became the official religion of the Roman Empire through a complex process spanning centuries.

## Early Days
- Jesus and apostles spread Christianity in the 1st century
- Initially persecuted by Roman authorities
- Constantine's Edict of Milan (313 AD) granted religious tolerance

## Theodosius I
- Made Christianity the official religion in 380 AD
- Banned pagan sacrifices
- Closed temples

## Factors in Conversion
- Imperial patronage
- Organization and structure
- Social services (charity, hospitals)
- Adaptation to Roman culture
- Decline of pagan alternatives

## Legacy
This conversion shaped Western civilization and influenced the spread of Christianity worldwide.
    `,
  },

  // Conspiracy Theory
  {
    slug: 'moon-landing-hoax',
    title: 'Moon Landing Conspiracy Theories',
    category: 'conspiracy-theory',
    date: '2024-07-05',
    content: `
# Moon Landing Conspiracy Theories

Despite overwhelming evidence, some claim the 1969 Moon landing was faked.

## Main Claims
- Flag waving in "wind"
- No stars in photos
- Shadow inconsistencies
- Van Allen radiation belts
- Technology limitations

## Counter-Evidence
- Retroreflectors on Moon used by scientists
- Thousands of witnesses and participants
- Independent tracking by Soviets
- Physical Moon rocks brought back
- Real-time TV broadcasts

## Why It Persists
- Cold War propaganda
- Anti-government sentiment
- Misinformation online
- Psychological factors

The theory has been repeatedly debunked by experts.
    `,
  },
  {
    slug: 'flat-earth-theory',
    title: 'The Flat Earth Theory',
    category: 'conspiracy-theory',
    date: '2024-06-20',
    content: `
# The Flat Earth Theory

Flat Earth theory claims Earth is flat, not spherical, and that space agencies are involved in a massive cover-up.

## Beliefs
- Earth is a flat disk
- Antarctica is an ice wall containing the oceans
- Gravity doesn't exist; density causes objects to "sink"
- Space travel is impossible

## Origins
Ancient ideas revived in modern times. Gained popularity through social media.

## Evidence Against
- Ships disappearing hull-first over horizon
- Lunar eclipses
- Satellite imagery
- Airplane flight paths
- Space missions
- Gravity experiments

## Appeal
- Simple explanation for complex phenomena
- Anti-authority sentiment
- Community and belonging

Despite scientific consensus, the theory persists among some groups.
    `,
  },
];