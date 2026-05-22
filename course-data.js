// course-data.js — The Global School v2
// 17 modules · 110 days · 3 phases
// Sources: build_manual_v2.py (content) + verified quiz data

const COURSE_META = {
  title: "The Global School",
  subtitle: "Education Studies",
  totalDays: 110,
  totalModules: 17,
  phases: [
    { n:1, title:"Foundations", subtitle:"Philosophy, history, cognition, and sociology", days:"1–49", color:"#2d5fa0", bg:"#e8eef5" },
    { n:2, title:"Systems in Practice", subtitle:"High-performing systems, alternatives, and global cases", days:"50–87", color:"#2d7a4f", bg:"#e5f3ec" },
    { n:3, title:"Synthesis", subtitle:"Inclusion, reform, technology, India, and policy", days:"88–110", color:"#7a3b1a", bg:"#f5ebe3" },
  ],
};

const MODULES = [
{
  "id": "m01",
  "n": 1,
  "phase": 1,
  "days": "1–10",
  "title": "Epistemology and the Philosophy of Schooling",
  "sub": "What is education for? Mapping the philosophical terrain — from Plato to Freire, Hirsch to hooks — before engaging any real school system.",
  "bigIdea": "Every school system rests on a theory of knowledge and a theory of the learner. Most practitioners enact these theories without examining them. This module makes the implicit explicit — and establishes the analytical vocabulary used in every subsequent module.",
  "hook": {
    "type": "video",
    "title": "Changing Education Paradigms",
    "source": "Sir Ken Robinson — RSA Animate (2010)",
    "url": "https://www.youtube.com/watch?v=zDZFcDGpL4U",
    "duration": "11 min",
    "purpose": "Opening provocation only. Robinson\'s argument is influential but empirically contested — note its weaknesses as you proceed through the module. He appears here once only in this course."
  },
  "thinkers": [
    {
      "name": "Plato",
      "era": "c.428–348 BCE",
      "claim": "Education forms just citizens. The ascent from opinion to truth is the political purpose of schooling — and some are capable of it more than others."
    },
    {
      "name": "John Dewey",
      "era": "1859–1952",
      "claim": "Education is not preparation for life — it is life itself. Democratic experience must be both the method and the goal of schooling."
    },
    {
      "name": "Paulo Freire",
      "era": "1921–1997",
      "claim": "The banking model deposits knowledge into passive students. Liberation requires dialogue, critical consciousness, and praxis — not transmission."
    },
    {
      "name": "Émile Durkheim",
      "era": "1858–1917",
      "claim": "Education is the means by which society perpetuates the conditions of its own existence. Solidarity is its primary output, not individual development."
    },
    {
      "name": "Ivan Illich",
      "era": "1926–2002",
      "claim": "School as institution creates dependency and certifies inequality. Deschooling is a political necessity, not an educational preference."
    },
    {
      "name": "E.D. Hirsch Jr.",
      "era": "b. 1928",
      "claim": "Cultural literacy — shared background knowledge — is the precondition for reading comprehension and, paradoxically, for genuine social equity."
    },
    {
      "name": "bell hooks",
      "era": "1952–2021",
      "claim": "Engaged pedagogy demands the teacher's own transformation alongside the students. Education as the practice of freedom is personal before it is political."
    }
  ],
  "schedule": [
    {
      "day": 1,
      "type": "Watch",
      "title": "Opening Hook: Changing Education Paradigms (RSAnimate, Robinson, 2010)",
      "note": "Watch critically. Note 3 claims. For each: is it supported by evidence or compelling assertion? youtube.com/watch?v=zDZFcDGpL4U  — 11 min. Robinson appears here once only in this course."
    },
    {
      "day": 2,
      "type": "Read",
      "title": "Plato, The Republic — Book VII only",
      "note": "The allegory of the cave. Focus on what the allegory implies about knowledge, illusion, and the teacher's obligation. 40 min. Free: classics.mit.edu/Plato/republic.html"
    },
    {
      "day": 3,
      "type": "Read",
      "title": "Dewey, Experience and Education — Ch. 1 only",
      "note": "The continuity-interaction criterion for educative experience. What distinguishes genuine from miseducative experience. 35 min. Free: archive.org"
    },
    {
      "day": 4,
      "type": "Read",
      "title": "Freire, Pedagogy of the Oppressed — Ch. 2 only",
      "note": "The banking model and problem-posing education. Ch. 2 contains the core argument; Ch. 1 is contextual. 40 min. Free: UCSC PDF."
    },
    {
      "day": 5,
      "type": "Read",
      "title": "Illich, Deschooling Society — Ch. 1 only",
      "note": "The institutional dependency argument. Illich appears here once only — this single chapter contains his essential critique. 40 min. Free: archive.org"
    },
    {
      "day": 6,
      "type": "Read",
      "title": "Hirsch, Cultural Literacy — Introduction only",
      "note": "The background knowledge thesis in its original form. Read against Freire — they are more compatible than they appear. 30 min. Free: archive.org"
    },
    {
      "day": 7,
      "type": "Read",
      "title": "hooks, Teaching to Transgress — Ch. 1 only",
      "note": "Engaged pedagogy as self-transformation. The teacher as learner is Noddings from a different angle. 35 min. Free: archive.org"
    },
    {
      "day": 8,
      "type": "Read",
      "title": "Durkheim, Education and Sociology — Ch. 1 only",
      "note": "Education as social institution producing solidarity. Short but dense. 30 min. Free: archive.org"
    },
    {
      "day": 9,
      "type": "Reflect",
      "title": "Comparative mapping: five positions on the purpose of schooling",
      "note": "Write 400 words locally: place Plato, Dewey, Freire, Illich, and Hirsch on a 2×2 matrix (individual vs. social / conservative vs. transformative). Annotate each position with one sentence of justification."
    },
    {
      "day": 10,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier A essay (local)",
      "note": "Complete on-site quiz. Begin Tier A essay on your own device (see assignment below)."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "The Republic — Book VII",
      "author": "Plato",
      "year": "c.375 BCE",
      "note": "The cave allegory: knowledge, illusion, and the teacher's obligation. MIT Classics — free.",
      "url": "https://classics.mit.edu/Plato/republic.html"
    },
    {
      "type": "Primary",
      "title": "Experience and Education — Ch. 1",
      "author": "John Dewey",
      "year": "1938",
      "note": "Continuity-interaction as the criterion for educative experience. Internet Archive — free.",
      "url": "https://archive.org/details/experienceandeducation00dewey"
    },
    {
      "type": "Primary",
      "title": "Pedagogy of the Oppressed — Ch. 2 only",
      "author": "Paulo Freire",
      "year": "1968",
      "note": "The banking model and problem-posing education. The core argument is in Ch. 2. UCSC PDF — free.",
      "url": "https://envs.ucsc.edu"
    },
    {
      "type": "Primary",
      "title": "Deschooling Society — Ch. 1 only",
      "author": "Ivan Illich",
      "year": "1971",
      "note": "Institutional dependency thesis — one concentrated reading of Illich. Internet Archive — free.",
      "url": "https://archive.org/details/deschoolingsociety00ivan"
    },
    {
      "type": "Secondary",
      "title": "Cultural Literacy — Introduction",
      "author": "E.D. Hirsch Jr.",
      "year": "1987",
      "note": "The background knowledge thesis. Internet Archive — free.",
      "url": "https://archive.org/details/culturalliteracy00edhi"
    },
    {
      "type": "Secondary",
      "title": "Teaching to Transgress — Ch. 1 only",
      "author": "bell hooks",
      "year": "1994",
      "note": "Engaged pedagogy as the teacher's own transformation. Internet Archive — free.",
      "url": "https://archive.org/details/teachingtotransgress"
    },
    {
      "type": "Secondary",
      "title": "Education and Sociology — Ch. 1",
      "author": "Émile Durkheim",
      "year": "1922",
      "note": "Education as social solidarity. Internet Archive — free.",
      "url": "https://archive.org/details/educationsociolog00durk"
    }
  ],
  "assessment": {
    "tier": "Tier A — Analytical Synthesis Essay",
    "format": "essay",
    "title": "The Philosophical Foundations of a School System",
    "prompt": "You are appointed Chief Educational Philosopher for a newly independent nation. In 500–750 words, draft the opening statement of its founding educational philosophy. State the primary purpose of mass schooling, engage TWO thinkers from this module directly, and identify the single greatest philosophical tension your system must navigate. Write locally and save — you will return to this in Module 17."
  },
  "optional": [
    {
      "title": "Pedagogy of Freedom",
      "author": "Paulo Freire",
      "year": "1998",
      "note": "Freire's late-career ethical refinement — less polemical than Pedagogy of the Oppressed and more applicable to day-to-day classroom practice."
    },
    {
      "title": "Tools for Conviviality",
      "author": "Ivan Illich",
      "year": "1973",
      "note": "The intellectual sequel to Deschooling — Illich's theory of convivial institutions as an alternative to industrial dependency, directly applicable to school design."
    },
    {
      "title": "The Educated Mind",
      "author": "Kieran Egan",
      "year": "1997",
      "note": "A rigorous alternative theory of cognitive development and curriculum that challenges both Piaget and the knowledge-transmission tradition."
    }
  ],
  "quiz": [
    {
      "q": "Dewey’s central criticism of traditional education was that it:",
      "opts": [
        "Ignored science and evidence",
        "Treated education as preparation for future life rather than life itself",
        "Was too focused on individual students",
        "Failed to teach basic literacy"
      ],
      "ans": 1,
      "ex": "Dewey argued traditional schooling prepares students for a remote future, treating present experience as unimportant."
    },
    {
      "q": "What did Freire mean by the banking concept of education?",
      "opts": [
        "Schools should invest in student potential",
        "Teachers deposit knowledge into students who passively receive it",
        "Education is an economic transaction",
        "Students save knowledge for later"
      ],
      "ans": 1,
      "ex": "Freire used the banking metaphor to describe one-way knowledge deposit — the opposite of the critical dialogue he advocated."
    },
    {
      "q": "For Durkheim, education’s primary purpose was:",
      "opts": [
        "Individual intellectual development",
        "Economic productivity",
        "Social solidarity and transmission of collective values",
        "Political liberation"
      ],
      "ans": 2,
      "ex": "Durkheim saw education as the mechanism through which society reproduces itself — forging shared values and solidarity above all else."
    },
    {
      "q": "Illich’s argument in Deschooling Society was that:",
      "opts": [
        "Schools need more funding",
        "The institution of school itself is harmful and should be abolished",
        "Teachers need better training",
        "The curriculum is too narrow"
      ],
      "ans": 1,
      "ex": "Illich argued school as an institution creates the illusion that learning requires teaching, manufacturing dependency and legitimising inequality."
    },
    {
      "q": "Plato’s allegory of the cave suggests that:",
      "opts": [
        "Students should learn in natural light",
        "Most people mistake appearances for reality; education is the painful journey toward truth",
        "Education should be compulsory for all",
        "Vocational training is superior"
      ],
      "ans": 1,
      "ex": "The cave allegory argues most people are imprisoned by their senses. The philosopher’s education is an ascent toward true knowledge."
    },
    {
      "q": "Which thinker most explicitly linked education to democratic citizenship?",
      "opts": [
        "Plato",
        "Illich",
        "Dewey",
        "Durkheim"
      ],
      "ans": 2,
      "ex": "Dewey consistently argued democratic society requires democratic schools — places where students practice social participation, not just receive instruction."
    },
    {
      "q": "Freire’s alternative to banking education was:",
      "opts": [
        "Structured direct instruction",
        "Problem-posing education and critical dialogue",
        "Technology-driven personalised learning",
        "A return to classical texts"
      ],
      "ans": 1,
      "ex": "Freire proposed problem-posing education where teacher and student investigate reality together through critical dialogue."
    },
    {
      "q": "Rousseau’s influence on progressive education was that:",
      "opts": [
        "Children need strict discipline",
        "Children are naturally good; education should follow nature",
        "All children should learn the same content",
        "Testing is the primary measure of learning"
      ],
      "ans": 1,
      "ex": "Rousseau’s Émile argued children are naturally good. This became foundational for child-centred traditions, strongly influencing Dewey."
    },
    {
      "q": "The tension between individual flourishing vs. social reproduction maps onto:",
      "opts": [
        "Dewey vs. Freire",
        "Locke vs. Durkheim",
        "Illich vs. Plato",
        "Freire vs. Dewey"
      ],
      "ans": 1,
      "ex": "Locke emphasised individual character formation; Durkheim emphasised society’s right to shape each generation. A foundational tension."
    },
    {
      "q": "Which would Illich most likely endorse?",
      "opts": [
        "More rigorous national curricula",
        "Skill-sharing networks outside formal institutions",
        "Higher teacher salaries",
        "Longer school days"
      ],
      "ans": 1,
      "ex": "Illich’s learning webs — informal networks where people share skills — were his alternative to institutional schooling."
    },
    {
      "q": "A teacher assigns Homer, Shakespeare, and Plato arguing these texts contain universal truths. This reflects:",
      "opts": [
        "Progressivism",
        "Perennialism",
        "Constructivism",
        "Critical pedagogy"
      ],
      "ans": 1,
      "ex": "Perennialists argue great works contain permanent truths that should form every curriculum’s core, regardless of student background or contemporary relevance."
    },
    {
      "q": "Vygotsky’s Zone of Proximal Development suggests teachers should:",
      "opts": [
        "Only teach what students can do independently",
        "Pitch tasks just beyond independent ability, with support",
        "Let students discover everything on their own",
        "Focus on measurable outcomes only"
      ],
      "ans": 1,
      "ex": "The ZPD is the space between what a student can do alone and with skilled guidance. This is where genuine learning happens."
    },
    {
      "q": "Hirsch’s cultural literacy concept is controversial because:",
      "opts": [
        "It ignores science",
        "Critics argue it privileges dominant-culture knowledge and excludes minority experiences",
        "It makes exams too difficult",
        "It is too expensive"
      ],
      "ans": 1,
      "ex": "Hirsch identifies a specific body of shared knowledge that literate Americans need. Critics argue this core reflects white Western traditions, implicitly marginalising other cultural knowledge."
    },
    {
      "q": "bell hooks’ engaged pedagogy differs from Freire’s primarily by:",
      "opts": [
        "Rejecting dialogue",
        "Centring teacher wellbeing and self-healing alongside student liberation",
        "Focusing on economic outcomes",
        "Limiting critique to the classroom"
      ],
      "ans": 1,
      "ex": "While deeply influenced by Freire, hooks argued he insufficiently addressed the teacher’s own self-actualisation. Engaged pedagogy requires teachers to be genuinely transformed."
    },
    {
      "q": "Piaget’s constructivism argues that children:",
      "opts": [
        "Should be taught formal knowledge through direct instruction",
        "Build knowledge actively through interaction with their environment",
        "Learn best through competition",
        "Develop at the same rate across all domains"
      ],
      "ans": 1,
      "ex": "Piaget saw children as active constructors of knowledge, not passive receivers. Cognitive structures develop through interaction with the world."
    },
    {
      "q": "A school with no fixed curriculum where students decide what to study reflects:",
      "opts": [
        "Essentialism",
        "Perennialism",
        "Existentialism / democratic schooling",
        "Direct instruction"
      ],
      "ans": 2,
      "ex": "Existentialist educational philosophy holds individuals must define their own meaning. Democratic schools like Summerhill put this into practice."
    },
    {
      "q": "Which approach would most likely support scripted, structured lessons with phonics drills?",
      "opts": [
        "Progressivism",
        "Essentialism / direct instruction",
        "Critical pedagogy",
        "Reggio Emilia"
      ],
      "ans": 1,
      "ex": "Essentialism holds there is a core body of knowledge every student must master. Direct instruction — systematic, explicit, teacher-led — is its preferred pedagogy."
    },
    {
      "q": "The concept of scaffolding derives most directly from:",
      "opts": [
        "Dewey",
        "Vygotsky",
        "Piaget",
        "Freire"
      ],
      "ans": 1,
      "ex": "Though coined by Bruner, Wood, and Ross, scaffolding is rooted in Vygotsky’s ZPD — temporary support from a more capable other enables tasks beyond current independent level."
    },
    {
      "q": "Robinson’s Do Schools Kill Creativity? is important to know because:",
      "opts": [
        "It is the most rigorous research on creativity in schools",
        "It shaped popular discourse for 15 years despite lacking empirical grounding",
        "It proves arts education raises test scores",
        "It introduced Vygotsky to mainstream audiences"
      ],
      "ans": 1,
      "ex": "Robinson’s talk became one of the most-watched TED talks ever. Scholars critiqued it for romanticising creativity — understanding its influence and limits is essential."
    },
    {
      "q": "Eisner’s critique of standard schooling is that it:",
      "opts": [
        "Overvalues the arts",
        "Privileges a narrow linguistic-logical rationality and ignores other forms of knowing",
        "Is too expensive",
        "Fails to prepare students for university"
      ],
      "ans": 1,
      "ex": "Eisner argued schools treat verbal and mathematical intelligence as the only legitimate knowing, systematically devaluing aesthetic, kinaesthetic, and artistic intelligences."
    }
  ]
},

{
  "id": "m02",
  "n": 2,
  "phase": 1,
  "days": "11–17",
  "title": "The History of Compulsory Schooling",
  "sub": "From Prussia to post-colonial India — why states made schooling compulsory, and what it was designed to produce.",
  "bigIdea": "Compulsory schooling is not a natural or inevitable feature of human society. It was invented for specific political purposes at specific moments. Understanding that history changes how you read every contemporary system you will encounter in Phase 2.",
  "hook": null,
  "thinkers": [
    {
      "name": "Andy Green",
      "era": "b. 1952",
      "claim": "Mass schooling emerged with nation-states requiring standardised, literate, disciplinable populations for industry and military conscription."
    },
    {
      "name": "Larry Cuban",
      "era": "b. 1934",
      "claim": "The grammar of schooling — age-grading, subject divisions, timetabling — is so deeply embedded that waves of reform change the vocabulary but not the structure."
    },
    {
      "name": "Thomas Macaulay",
      "era": "1800–1859",
      "claim": "Colonial education should produce administrators loyal to British rule — \"Indian in blood and colour, but English in taste, opinions, morals, and intellect.\""
    }
  ],
  "schedule": [
    {
      "day": 11,
      "type": "Read",
      "title": "Green, Education and State Formation — Introduction & Ch. 1",
      "note": "The political economy of mass schooling's invention in 19th-century England, France, Germany, and the US. 40 min. Search: Google Scholar — \"Andy Green Education State Formation 1990\"."
    },
    {
      "day": 12,
      "type": "Read",
      "title": "Macaulay's Minute on Indian Education (1835) — full text",
      "note": "Read in full — 30 min. The assumptions embedded here are still structurally present in Indian schooling today. Free: Columbia University."
    },
    {
      "day": 13,
      "type": "Case",
      "title": "Prussia and the origins of compulsory schooling",
      "note": "Fichte's Addresses to the German Nation (1808) and the Volksschule design. Identify three features that passed directly into 20th-century mass schooling globally. Use Google Scholar."
    },
    {
      "day": 14,
      "type": "Read",
      "title": "Cuban, How Teachers Taught — Introduction (the grammar of schooling thesis)",
      "note": "Why reform changes curriculum and pedagogy but not the structural grammar of schooling. 35 min. Google Scholar."
    },
    {
      "day": 15,
      "type": "Case",
      "title": "The British elementary school and the colonial template",
      "note": "Trace how the 1870 Education Act model was exported. What was exported alongside literacy: scheduling, hierarchy, discipline. 40 min."
    },
    {
      "day": 16,
      "type": "Reflect",
      "title": "What was your own schooling designed for?",
      "note": "300 words. Use Green, Macaulay, and Cuban as lenses. Do not describe experience — analyse structural purpose. Write locally."
    },
    {
      "day": 17,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Policy Memo (local)",
      "note": "Complete on-site quiz. Write your policy memo locally (see assignment)."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Education and State Formation — Intro & Ch. 1",
      "author": "Andy Green",
      "year": "1990",
      "note": "The definitive historical account of why different nation-states built different mass schooling systems. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Primary",
      "title": "Macaulay's Minute on Indian Education (1835)",
      "author": "Thomas Babington Macaulay",
      "year": "1835",
      "note": "Read in full — the founding document of colonial education policy. Columbia University — free.",
      "url": "https://columbia.edu/itc/mealac/pritchett"
    },
    {
      "type": "Secondary",
      "title": "How Teachers Taught — Introduction",
      "author": "Larry Cuban",
      "year": "1984",
      "note": "The grammar of schooling thesis: why structural reform is so persistently resisted. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Secondary",
      "title": "Tinkering Toward Utopia — Introduction",
      "author": "Tyack & Cuban",
      "year": "1995",
      "note": "The historical pattern of failed school reform in the US — a comparative lens on Green. Internet Archive.",
      "url": "https://archive.org"
    }
  ],
  "assessment": {
    "tier": "Tier B — Adversarial Policy Memo",
    "format": "memo",
    "title": "Against the Merit-Pay Proposal",
    "prompt": "A Minister proposes: \"Teachers whose students score in the top 30% on national exams receive a 40% bonus. Teachers in the bottom 20% for two years face mandatory retraining.\" In 400 words: use Cuban to identify what this policy misunderstands about school change; use one additional framework from this module to identify a second problem; and propose one specific evidence-based alternative. Write locally."
  },
  "optional": [
    {
      "title": "Education and State Formation (full book)",
      "author": "Andy Green",
      "year": "1990",
      "note": "The complete comparative history — England, France, Germany, and the US built national systems for entirely different political purposes, revealing what is and isn't transferable."
    },
    {
      "title": "Savage Inequalities",
      "author": "Jonathan Kozol",
      "year": "1991",
      "note": "A devastating empirical account of how property-tax-based school funding structurally replicates the class hierarchy schooling theoretically promises to overcome."
    }
  ],
  "quiz": [
    {
      "q": "Andy Green argues mass schooling emerged primarily because:",
      "opts": [
        "Parents demanded it",
        "States needed literate, loyal, unified populations for industry and war",
        "The church required it",
        "Children needed supervision"
      ],
      "ans": 1,
      "ex": "Green shows 19th-century state-building drove mass schooling — nations needed standardised citizens for armies, bureaucracies, and industrial economies."
    },
    {
      "q": "Macaulay’s Minute (1835) designed Indian colonial education to:",
      "opts": [
        "Promote Indian culture",
        "Produce clerks loyal to British administration who were Indian in blood but European in taste",
        "Teach Indians science and mathematics",
        "Create an Indian university system"
      ],
      "ans": 1,
      "ex": "Macaulay explicitly stated the goal: a class of persons Indian in blood and colour, but English in tastes, opinions, morals, and intellect."
    },
    {
      "q": "Larry Cuban’s research showed that classroom practice:",
      "opts": [
        "Changed dramatically with each reform wave",
        "Remained remarkably stable across the 20th century despite many reform attempts",
        "Improved steadily over time",
        "Was primarily determined by curriculum standards"
      ],
      "ans": 1,
      "ex": "Cuban found that despite progressive reforms and repeated policy mandates, teacher-centred instruction dominated classrooms throughout the 20th century."
    },
    {
      "q": "Compulsory schooling became widespread in Western Europe primarily in which century?",
      "opts": [
        "17th century",
        "18th century",
        "19th century",
        "Early 20th century"
      ],
      "ans": 2,
      "ex": "Mass compulsory schooling was a 19th-century phenomenon, tied to nation-state formation, industrialisation, and the need for standardised literate populations."
    },
    {
      "q": "The hidden curriculum refers to:",
      "opts": [
        "Secret advanced classes",
        "Values, norms and behaviours schools teach implicitly through structure and routine",
        "Classified government documents",
        "Private tutoring"
      ],
      "ans": 1,
      "ex": "Philip Jackson showed that schools teach punctuality, compliance, competition, and hierarchy through their daily organisation — alongside and often more powerfully than the official curriculum."
    },
    {
      "q": "Illich’s critique of compulsory schooling was that:",
      "opts": [
        "Schools are underfunded",
        "The institution itself creates dependency and the illusion that learning requires institutional certification",
        "Teachers are poorly trained",
        "Curricula are too narrow"
      ],
      "ans": 1,
      "ex": "Illich argued compulsory schooling is a modern ritual that legitimises inequality: those with more schooling are deemed more valuable, regardless of actual learning."
    },
    {
      "q": "The Prussian education system influenced other nations because:",
      "opts": [
        "It produced the best mathematicians",
        "It demonstrated how schooling could produce disciplined, literate, patriotic citizens at scale",
        "It was cheapest to implement",
        "It was recommended by the Catholic Church"
      ],
      "ans": 1,
      "ex": "Prussia’s system — compulsory attendance, state control, teacher training, standardised curriculum — became a template for nation-states seeking to build unified, industrial populations."
    },
    {
      "q": "Colonial education systems generally:",
      "opts": [
        "Adapted to indigenous knowledge systems",
        "Imposed European frameworks while devaluing local knowledge and languages",
        "Improved literacy rates across the board",
        "Were popular with local populations"
      ],
      "ans": 1,
      "ex": "Colonial schooling was designed to create administrative intermediaries useful to colonial governments, not to serve the educational interests of colonised populations."
    },
    {
      "q": "Early mass schooling operated in large classes with rigid discipline because:",
      "opts": [
        "Teachers preferred this method",
        "It reflected factory organisation — schools were industrialising populations for industrial work",
        "Research showed it was most effective",
        "Children learned better in groups"
      ],
      "ans": 1,
      "ex": "Schools in the 19th century were consciously modelled on factory organisation — bells, rows, hierarchical authority — because their purpose was to prepare populations for factory and bureaucratic work."
    },
    {
      "q": "The most important insight from the history of compulsory schooling for a policy-maker today is:",
      "opts": [
        "Schools have always looked the same",
        "Education systems reflect the political priorities of the states that built them — understanding those priorities is essential for reform",
        "Mass schooling is inevitable and natural",
        "The 19th-century model is still optimal"
      ],
      "ans": 1,
      "ex": "The historical perspective reveals that schooling systems are political artefacts. Reform that ignores that origin tends to reproduce the old system’s assumptions under new language."
    }
  ]
},

{
  "id": "m03",
  "n": 3,
  "phase": 1,
  "days": "18–24",
  "title": "The Classroom as a Designed Space",
  "sub": "Pedagogy, curriculum architecture, assessment theory, and the hidden curriculum — grounded in the strongest research evidence.",
  "bigIdea": "Every classroom embeds a theory of knowledge and a theory of the learner. Most teachers enact these theories unreflectively. This module makes the implicit explicit — and shows what rigorous evidence says about what actually works.",
  "hook": null,
  "thinkers": [
    {
      "name": "Benjamin Bloom",
      "era": "1913–1999",
      "claim": "A taxonomy from recall to creation should structure curriculum design. The higher orders — analysis, evaluation, creation — are what education exists to reach."
    },
    {
      "name": "Dylan Wiliam",
      "era": "b. 1954",
      "claim": "Formative assessment — eliciting and acting on evidence of learning during instruction — is the single highest-leverage activity available to a classroom teacher."
    },
    {
      "name": "Barak Rosenshine",
      "era": "1930–2017",
      "claim": "Ten evidence-backed principles — daily review, worked examples, guided practice, checking for understanding — consistently raise student achievement across subjects and contexts."
    },
    {
      "name": "Nel Noddings",
      "era": "b. 1929",
      "claim": "The classroom is a moral space before it is a cognitive one. Care is not supplementary to learning — it is its precondition."
    },
    {
      "name": "Philip Jackson",
      "era": "1928–2015",
      "claim": "The hidden curriculum — the experience of crowds, praise, and institutional power — teaches compliance and hierarchy alongside any formal subject."
    }
  ],
  "schedule": [
    {
      "day": 18,
      "type": "Read",
      "title": "Bloom's Taxonomy — Revised (Anderson & Krathwohl, 2001)",
      "note": "Free Vanderbilt CFT guide. Focus on the distinction between Remembering and Creating. 35 min."
    },
    {
      "day": 19,
      "type": "Read",
      "title": "Rosenshine, Principles of Instruction (2012)",
      "note": "Free AFT PDF — 10 pages. The most practically consequential single reading in this course. Read twice. Note the cognitive science basis of each principle."
    },
    {
      "day": 20,
      "type": "Read",
      "title": "Jackson, Life in Classrooms — Introduction only",
      "note": "The hidden curriculum concept: crowds, praise, power. 35 min. Google Scholar."
    },
    {
      "day": 21,
      "type": "Watch",
      "title": "Dylan Wiliam on formative assessment",
      "note": "Verified lecture: youtube.com/watch?v=r8Wm5L4h3k0 — ~45 min."
    },
    {
      "day": 22,
      "type": "Read",
      "title": "Noddings, The Challenge to Care in Schools — Ch. 1 only",
      "note": "Care as the moral precondition for learning. 35 min. Google Scholar."
    },
    {
      "day": 23,
      "type": "Audit",
      "title": "Pedagogical Artifact Audit (assignment prep)",
      "note": "Read the flawed lesson plan printed in the assignment section below. Take notes. Do not write your analysis yet — that is tomorrow's assignment task."
    },
    {
      "day": 24,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Artifact Audit (local)",
      "note": "Complete on-site quiz. Write your artifact audit locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Bloom's Taxonomy — Revised (2001)",
      "author": "Anderson & Krathwohl",
      "year": "2001",
      "note": "Free Vanderbilt CFT guide. The cognitive levels framework for curriculum design.",
      "url": "https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/"
    },
    {
      "type": "Primary",
      "title": "Principles of Instruction (2012)",
      "author": "Barak Rosenshine",
      "year": "2012",
      "note": "Free AFT PDF. Ten evidence-backed teaching principles — the most directly applicable research text in this course.",
      "url": "https://aft.org/sites/default/files/Rosenshine.pdf"
    },
    {
      "type": "Secondary",
      "title": "Life in Classrooms — Introduction",
      "author": "Philip Jackson",
      "year": "1968",
      "note": "The hidden curriculum concept. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Secondary",
      "title": "The Challenge to Care in Schools — Ch. 1 only",
      "author": "Nel Noddings",
      "year": "1992",
      "note": "Care as moral precondition. Google Scholar.",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier B — Pedagogical Artifact Audit",
    "format": "audit",
    "title": "Diagnose the Broken Lesson",
    "prompt": "A flawed Year 9 History lesson plan is printed below. The lesson consists of 45 minutes of teacher reading aloud from a textbook, 3 whole-class questions (hands-up only), and students copying a single definition from the board. Assessment: an end-of-term examination only. No differentiation specified.\n\nIn 400–500 words written locally: (1) Identify THREE specific pedagogical flaws, naming the Rosenshine principle or Bloom level each one violates. (2) Propose THREE concrete modifications (specific, not generic). (3) Write one sentence explaining what Philip Jackson would say students are actually learning in this lesson — beyond the Industrial Revolution."
  },
  "optional": [
    {
      "title": "Embedded Formative Assessment",
      "author": "Dylan Wiliam",
      "year": "2011",
      "note": "The most practical implementation guide for formative assessment — Wiliam moves from theory to specific, classroom-ready techniques that can be introduced in professional development sessions."
    },
    {
      "title": "The Classroom as a Learning Environment (various research reviews)",
      "author": "Multiple authors",
      "year": "ongoing",
      "note": "Google Scholar: \"classroom environment learning research review\" — the empirical base for how physical and social space shapes cognitive outcomes."
    }
  ],
  "quiz": [
    {
      "q": "Bloom’s revised taxonomy orders cognitive processes as:",
      "opts": [
        "Remember, Understand, Apply, Analyse, Evaluate, Create",
        "Know, Comprehend, Apply, Synthesise, Evaluate, Create",
        "Memorise, Understand, Apply, Create, Analyse, Evaluate",
        "Acquire, Apply, Analyse, Evaluate, Synthesise, Create"
      ],
      "ans": 0,
      "ex": "The revised taxonomy (Anderson & Krathwohl, 2001) made Create the highest level, above Evaluate."
    },
    {
      "q": "Wiliam’s formative assessment means assessment that:",
      "opts": [
        "Is given at end of unit to form a grade",
        "Elicits evidence of student thinking during learning and adjusts teaching",
        "Uses standardised tests to measure progress",
        "Forms the basis of teacher performance review"
      ],
      "ans": 1,
      "ex": "Formative assessment is assessment FOR learning — used during the teaching process to inform what teachers do next."
    },
    {
      "q": "The hidden curriculum refers to:",
      "opts": [
        "Secret advanced classes",
        "Values, norms and behaviours schools teach implicitly through structure and routine",
        "Classified government documents",
        "Extracurricular activities"
      ],
      "ans": 1,
      "ex": "Philip Jackson coined the term to describe what schools teach beyond the official curriculum — punctuality, compliance, competition, authority."
    },
    {
      "q": "Rosenshine’s principle of reviewing prior knowledge at lesson starts draws on:",
      "opts": [
        "Students settle better before new content",
        "Retrieval practice strengthens memory and integrates new learning with prior knowledge",
        "Review gives students time to settle",
        "Prior learning determines IQ"
      ],
      "ans": 1,
      "ex": "Cognitive science shows retrieval practice — actively recalling prior knowledge — strengthens long-term memory and creates hooks for new learning."
    },
    {
      "q": "Noddings argues an ethic of care means:",
      "opts": [
        "Teachers should be kind and patient",
        "Caring relationships are the moral foundation from which all educational activity derives meaning",
        "Students with special needs receive extra care",
        "Schools should teach caring as a subject"
      ],
      "ans": 1,
      "ex": "For Noddings, care is not a supplement to academic work but its moral precondition — the quality of the relationship determines whether genuine learning is possible."
    },
    {
      "q": "Which is at the HIGHEST level of Bloom’s revised taxonomy?",
      "opts": [
        "Evaluating an argument’s logic",
        "Creating an original solution to a design problem",
        "Analysing a text’s structure",
        "Applying a formula to a new problem"
      ],
      "ans": 1,
      "ex": "Create is the highest cognitive level — producing something new that integrates and extends prior knowledge."
    },
    {
      "q": "Rosenshine recommends scaffolded practice primarily because:",
      "opts": [
        "Students cannot learn without continuous support",
        "New learning is fragile — practice with support prevents errors becoming entrenched",
        "It reduces the need for homework",
        "Scaffolding replaces the need for formative assessment"
      ],
      "ans": 1,
      "ex": "Cognitive load theory supports Rosenshine: when working memory is overloaded, errors occur and can become entrenched habits. Scaffolding manages the load while competence grows."
    },
    {
      "q": "Wiliam argues the most powerful feedback prompts:",
      "opts": [
        "Grades and marks on work",
        "Detailed written comments on every error",
        "Further thinking rather than giving the answer",
        "Public recognition of high achievement"
      ],
      "ans": 2,
      "ex": "Research shows feedback that gives the answer stops thinking. Feedback that prompts further thought keeps the cognitive work with the student."
    },
    {
      "q": "A teacher asking hands-up if you know the answer is problematic because:",
      "opts": [
        "It discriminates against shy students",
        "It only elicits evidence from students who already know — giving no information about those who don’t",
        "It wastes class time",
        "It discourages peer learning"
      ],
      "ans": 1,
      "ex": "Hands-up only samples confident volunteers — giving teachers the illusion they’ve checked understanding while most of the class remains unassessed."
    },
    {
      "q": "Which classroom structure most directly embeds Bloom’s higher-order thinking?",
      "opts": [
        "A quiz testing recall of last lesson",
        "A lecture covering new material",
        "A Socratic seminar where students evaluate competing interpretations",
        "An individual reading task"
      ],
      "ans": 2,
      "ex": "A Socratic seminar requires students to analyse, evaluate, and synthesise — the upper levels of Bloom’s — as they engage with competing ideas in real time."
    }
  ]
},

{
  "id": "m04",
  "n": 4,
  "phase": 1,
  "days": "25–31",
  "title": "The Science of Learning and Cognitive Architecture",
  "sub": "How human minds actually process, store, and retrieve information — and what every pedagogical decision must reckon with.",
  "bigIdea": "Effective pedagogy is not solely a matter of philosophy or values — it is constrained by cognitive architecture. Working memory is severely limited; long-term memory is vast. Learning is the alteration of long-term memory. Every instructional decision either respects or violates these constraints.",
  "hook": null,
  "thinkers": [
    {
      "name": "John Sweller",
      "era": "b. 1946",
      "claim": "Working memory is severely capacity-limited. Cognitive Load Theory — intrinsic, extraneous, and germane load — should govern all instructional design decisions."
    },
    {
      "name": "Daniel Willingham",
      "era": "b. 1961",
      "claim": "The brain is not designed for thinking — it avoids thought where possible. Memory is the residue of thought. Factual knowledge is not opposed to critical thinking; it enables it."
    },
    {
      "name": "Jean Piaget",
      "era": "1896–1980",
      "claim": "Children construct knowledge by assimilating new experience into existing schemas and accommodating schemas when they fail. Cognitive development proceeds in qualitatively distinct stages."
    },
    {
      "name": "Lev Vygotsky",
      "era": "1896–1934",
      "claim": "Learning is inherently social and language-mediated. The Zone of Proximal Development defines what instruction can productively target — what becomes possible with skilled support."
    }
  ],
  "schedule": [
    {
      "day": 25,
      "type": "Read",
      "title": "Sweller, Cognitive Load Theory — accessible research overview",
      "note": "ResearchGate: search \"Sweller Cognitive Load Theory working memory 2011\". Focus on working memory limits and the three types of load. 40 min."
    },
    {
      "day": 26,
      "type": "Read",
      "title": "Willingham, Why Don't Students Like School? — Ch. 1 only",
      "note": "The core cognitive principle: memory is the residue of thought. Google Scholar for excerpts. 40 min."
    },
    {
      "day": 27,
      "type": "Read",
      "title": "Piaget — cognitive development and schema theory (academic overview)",
      "note": "Google Scholar: \"Piaget cognitive development schema assimilation accommodation\" — use a peer-reviewed review article, not a tertiary summary. 35 min."
    },
    {
      "day": 28,
      "type": "Read",
      "title": "Vygotsky, Mind in Society — Ch. 6 (Zone of Proximal Development)",
      "note": "The ZPD chapter specifically. Internet Archive — free. 40 min."
    },
    {
      "day": 29,
      "type": "Apply",
      "title": "Re-read Rosenshine with cognitive science annotations",
      "note": "Return to the Rosenshine PDF from Module 03. For each of the 10 principles, write one sentence linking it to Sweller, Willingham, or Vygotsky. This is not a new reading — it is synthesis."
    },
    {
      "day": 30,
      "type": "Reflect",
      "title": "Design a lesson segment grounded in cognitive architecture",
      "note": "Choose any subject. Design a 30-minute segment applying Sweller's load management, Willingham's memory principle, and Rosenshine's guided practice. Annotate each design decision. Write locally."
    },
    {
      "day": 31,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Roleplay Case (local)",
      "note": "Complete on-site quiz. Write your design brief locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Cognitive Load Theory — research overview",
      "author": "John Sweller",
      "year": "2011",
      "note": "The accessible summary of CLT for practitioners. ResearchGate — search for open-access PDF.",
      "url": "https://researchgate.net"
    },
    {
      "type": "Primary",
      "title": "Why Don't Students Like School? — Ch. 1 only",
      "author": "Daniel Willingham",
      "year": "2009",
      "note": "Memory as the residue of thought. The single most consequential cognitive principle for teaching. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Primary",
      "title": "Mind in Society — Ch. 6 (ZPD)",
      "author": "Lev Vygotsky",
      "year": "1978",
      "note": "The Zone of Proximal Development — what instruction can productively target. Internet Archive — free.",
      "url": "https://archive.org/details/mindinsociety00lsvy"
    },
    {
      "type": "Secondary",
      "title": "Cognitive development and schema theory (review article)",
      "author": "Piaget / various reviewers",
      "year": "various",
      "note": "Google Scholar — search for a peer-reviewed Piaget overview article.",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier B — System Design Roleplay Case",
    "format": "roleplay",
    "title": "Design a One-Day Teacher Training Module",
    "prompt": "A national teacher training college has ONE DAY (6 hours) to run mandatory professional development for 200 secondary teachers with no formal pedagogical training. Budget: £2,000 equivalent. No specialist technology. The Ministry wants measurable improvement in student retention within one semester. Design a 3-part blueprint: (1) The ONE cognitive science principle you will build the day around, and why this one given these constraints (150 words max). (2) Three main session activities that model the principle, not just explain it (150 words max). (3) A transfer mechanism to ensure at least one practice change the following week (100 words max). Write and save locally."
  },
  "optional": [
    {
      "title": "Why Don't Students Like School? (full book)",
      "author": "Daniel Willingham",
      "year": "2009",
      "note": "Every chapter answers a question teachers actually ask — the most accessible and reliable integration of cognitive science into classroom practice available."
    },
    {
      "title": "Make It Stick: The Science of Successful Learning",
      "author": "Brown, Roediger & McDaniel",
      "year": "2014",
      "note": "Synthesises desirable difficulties research — spaced practice, interleaving, retrieval — that challenges how both students and teachers conceptualise what effective studying means."
    },
    {
      "title": "Human Cognition: Learning, Understanding and Remembering",
      "author": "John Bransford",
      "year": "1979",
      "note": "The foundational empirical text for schema theory applied to education — essential for anyone who wants to understand the research base rather than just its practical implications."
    }
  ],
  "quiz": [
    {
      "q": "Cognitive Load Theory (Sweller) holds that instructional design should minimise extraneous cognitive load, which refers to:",
      "opts": [
        "The inherent difficulty of the learning material itself.",
        "Mental effort caused by poor instructional design — complexity that adds no learning value.",
        "The productive cognitive effort students invest in forming new schema.",
        "Motivational demands placed on students by high-stakes assessment."
      ],
      "ans": 1,
      "ex": "Sweller distinguishes intrinsic load (inherent content difficulty), extraneous load (caused by bad design), and germane load (schema-formation effort). Good design eliminates extraneous load — not intrinsic load."
    },
    {
      "q": "Willingham's principle that 'memory is the residue of thought' implies teachers should primarily:",
      "opts": [
        "Ensure students spend maximum time reading and highlighting core texts.",
        "Design activities that require students to actively process and connect new information.",
        "Use emotionally engaging stories to make content memorable regardless of accuracy.",
        "Focus on metacognitive strategy instruction before introducing content."
      ],
      "ans": 1,
      "ex": "Students remember what they have genuinely thought about. Passive exposure, highlighting, and re-reading generate minimal learning. The teacher's job is engineering productive thinking about the right content."
    },
    {
      "q": "Vygotsky's Zone of Proximal Development suggests effective instruction should target:",
      "opts": [
        "Only tasks students can complete independently, to build confidence.",
        "Biologically determined developmental stages that instruction cannot accelerate.",
        "The gap between what students can do alone and what they can do with skilled support.",
        "Peer collaboration exclusively, rather than teacher-directed instruction."
      ],
      "ans": 2,
      "ex": "The ZPD defines the optimal instructional target: what becomes achievable with guided support — the zone where scaffolding is productive rather than redundant or overwhelming."
    },
    {
      "q": "How do Piaget's schemas connect to Sweller's Cognitive Load Theory?",
      "opts": [
        "Both argue learning is primarily social and language-mediated.",
        "Schemas in long-term memory reduce working memory load — expertise frees cognitive resources by chunking information.",
        "Both propose children pass through fixed stages instruction cannot alter.",
        "Neither theory addresses working memory — they operate at entirely different levels."
      ],
      "ans": 1,
      "ex": "Schemas (organised knowledge in long-term memory) reduce intrinsic load. Experts experience low cognitive load because automated schemas free working memory that novices must use consciously. Teaching builds schemas."
    },
    {
      "q": "Rosenshine's principle of reviewing prior knowledge at lesson starts is best justified by:",
      "opts": [
        "Students settle better and are more compliant before new material.",
        "Retrieval practice strengthens long-term memory and creates hooks for new learning.",
        "Daily review reduces the need for homework.",
        "Prior learning determines IQ and should be formally assessed."
      ],
      "ans": 1,
      "ex": "Retrieval practice — actively recalling prior knowledge rather than re-reading — strengthens the memory trace and integrates new learning with existing schema. This is the cognitive science basis for Rosenshine's daily review principle."
    },
    {
      "q": "A teacher assigns a complex group project on a topic students have never studied. According to Sweller, this risks:",
      "opts": [
        "Students becoming too creative and diverging from the curriculum.",
        "Overloading working memory because students lack schemas needed to manage the task's complexity.",
        "Reducing germane load to the point where no schema formation occurs.",
        "Producing excessive intrinsic motivation that undermines structured learning."
      ],
      "ans": 1,
      "ex": "Without prior schema, all cognitive load falls on limited working memory. Problem-based approaches work well for experts (who have schemas) but can overwhelm novices — the expertise reversal effect."
    },
    {
      "q": "Willingham argues that critical thinking skills:",
      "opts": [
        "Can be taught as general-purpose mental tools independent of content.",
        "Are domain-specific and depend on the background knowledge being thought about.",
        "Are innate and cannot be significantly improved by teaching.",
        "Should be deferred until students have mastered factual recall across all subjects."
      ],
      "ans": 1,
      "ex": "You cannot think critically about nothing. Critical thinking is content-dependent: the same student who thinks critically in history may fail to do so in physics — not from lack of skill but lack of domain knowledge."
    },
    {
      "q": "The expertise reversal effect means that:",
      "opts": [
        "Expert teachers are less effective than novice teachers with novice learners.",
        "Instructional supports that help novices can hinder experts, because redundant information adds extraneous load.",
        "Expertise in one domain reverses when learners move to an unfamiliar domain.",
        "Worked examples are more effective for experts than novices."
      ],
      "ans": 1,
      "ex": "As learners develop expertise, the scaffolds that helped them as novices become redundant — processing guidance alongside well-developed schemas adds extraneous load. Effective instruction adapts to expertise level."
    },
    {
      "q": "Which classroom practice is most directly supported by the cognitive science principle of spaced practice?",
      "opts": [
        "Teaching a unit intensively over two weeks, then moving on.",
        "Returning to previously taught material at increasing intervals across weeks and months.",
        "Giving students free choice over when and how often to study.",
        "Massing difficult content at the start of the year when attention is highest."
      ],
      "ans": 1,
      "ex": "Spaced practice — distributing study across time with gaps — produces far stronger long-term retention than massed practice (cramming), even when total study time is identical."
    },
    {
      "q": "A student re-reads notes and highlights passages before an exam. According to Willingham and Sweller, this is ineffective primarily because:",
      "opts": [
        "Video lectures are inherently less effective than live instruction.",
        "The student is not generating productive thought about the content — passive re-exposure generates minimal durable learning.",
        "Highlighting creates extraneous cognitive load that interferes with schema formation.",
        "Twenty minutes is too short a duration to produce meaningful learning."
      ],
      "ans": 1,
      "ex": "Highlighting and re-reading feel productive but require minimal cognitive processing. Memory is the residue of thought: if the student is not retrieving, connecting, or applying ideas, little will be retained."
    }
  ]
},

{
  "id": "m05",
  "n": 5,
  "phase": 1,
  "days": "32–38",
  "title": "Non-Western and Indigenous Education Philosophies",
  "sub": "Ubuntu, Confucian traditions, Tagore's counter-model, and the intellectual stakes of decolonising educational thought.",
  "bigIdea": "The Western canon of education philosophy represents a small fraction of human thinking about learning and formation. These traditions are not curiosities or supplements — they are complete alternative frameworks with their own rigour, and they reveal the parochialism of treating Western categories as universal.",
  "hook": null,
  "thinkers": [
    {
      "name": "Julius Nyerere",
      "era": "1922–1999",
      "claim": "Education for Self-Reliance — African schooling must serve its own communities, not produce colonial administrators or Western-style individual achievers."
    },
    {
      "name": "Confucius",
      "era": "551–479 BCE",
      "claim": "Self-cultivation, moral formation, and harmonious social relations are the proper ends of education — the scholar-official ideal unified intellectual and ethical development inseparably."
    },
    {
      "name": "Rabindranath Tagore",
      "era": "1861–1941",
      "claim": "Education must grow from joy, nature, and the child's own cultural roots. Factory-discipline schooling kills the natural urge to learn."
    },
    {
      "name": "Thaddeus Metz",
      "era": "contemporary",
      "claim": "Ubuntu — I am because we are — positions communal human flourishing as the moral foundation for education, fundamentally challenging liberal individualist frameworks."
    }
  ],
  "schedule": [
    {
      "day": 32,
      "type": "Read",
      "title": "Confucius, The Analects — Books I, II, XV (excerpts)",
      "note": "Read as a theory of formation, not just ethics. MIT Classics — free. 35 min."
    },
    {
      "day": 33,
      "type": "Read",
      "title": "Nyerere, Education for Self-Reliance (1967) — full text",
      "note": "A founding postcolonial manifesto. Read in full — short, dense, essential. 40 min. Free: juliusnyerere.info"
    },
    {
      "day": 34,
      "type": "Read",
      "title": "Tagore, The Parrot's Training (1918)",
      "note": "A 10-minute satire of rote education. Read twice. Free: tagoreweb.in"
    },
    {
      "day": 35,
      "type": "Read",
      "title": "Metz, \"Ubuntu as a Moral Theory and Human Rights in South Africa\" — sections on education and communal formation",
      "note": "ResearchGate — open access. Focus on sections with direct educational implications. 35 min."
    },
    {
      "day": 36,
      "type": "Read",
      "title": "Smith, Decolonizing Methodologies — Ch. 1 only",
      "note": "The foundational critique of Western knowledge monopoly. Google Scholar. 40 min."
    },
    {
      "day": 37,
      "type": "Watch",
      "title": "TED-Ed: Ubuntu philosophy",
      "note": "Verified: youtube.com/watch?v=HED4h00xPPA — 5 min. Concise entry point."
    },
    {
      "day": 38,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier A essay (local)",
      "note": "Complete on-site quiz. Write your essay locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "The Analects — Books I, II, XV (excerpts)",
      "author": "Confucius",
      "year": "c.479 BCE",
      "note": "Self-cultivation and moral formation as the ends of education. MIT Classics — free.",
      "url": "https://classics.mit.edu/Confucius/analects.html"
    },
    {
      "type": "Primary",
      "title": "Education for Self-Reliance (1967)",
      "author": "Julius Nyerere",
      "year": "1967",
      "note": "Postcolonial education manifesto — full text, free.",
      "url": "https://juliusnyerere.info"
    },
    {
      "type": "Primary",
      "title": "The Parrot's Training (1918)",
      "author": "Rabindranath Tagore",
      "year": "1918",
      "note": "Satire of rote education — 10 minutes. tagoreweb.in — free.",
      "url": "https://tagoreweb.in"
    },
    {
      "type": "Secondary",
      "title": "\"Ubuntu as a Moral Theory\" (relevant sections)",
      "author": "Thaddeus Metz",
      "year": "2011",
      "note": "Communal flourishing as educational foundation. ResearchGate — open access.",
      "url": "https://researchgate.net/publication/233271580"
    },
    {
      "type": "Secondary",
      "title": "Decolonizing Methodologies — Ch. 1 only",
      "author": "Linda Tuhiwai Smith",
      "year": "1999",
      "note": "Western knowledge monopoly and indigenous research paradigms. Google Scholar.",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier A — Analytical Essay",
    "format": "essay",
    "title": "When Philosophies Collide",
    "prompt": "In 500–750 words written locally: choose ONE point of genuine philosophical conflict between any two traditions from this module — not a superficial difference but a deep incompatibility. (1) State the conflict precisely. (2) Take a position — which tradition is more compelling in this specific conflict, and why? (3) Identify the strongest objection to your position and respond to it. \"Both have something valuable to offer\" is not a position. You must choose."
  },
  "optional": [
    {
      "title": "Decolonizing Methodologies (full book)",
      "author": "Linda Tuhiwai Smith",
      "year": "1999",
      "note": "The most rigorous intellectual account of how Western research frameworks have colonised knowledge production globally — essential for understanding what decolonising the curriculum actually means philosophically."
    },
    {
      "title": "The Bhagavad Gita — educational commentaries",
      "author": "Various scholars",
      "year": "various",
      "note": "Google Scholar: \"Bhagavad Gita education philosophy dharma\" — Hindu philosophical traditions offer a distinctive alternative to both Western and Ubuntu frameworks that is vastly understudied in comparative education."
    }
  ],
  "quiz": [
    {
      "q": "Nyerere’s Education for Self-Reliance argued colonial education was harmful because:",
      "opts": [
        "It used the wrong languages",
        "It educated children away from their communities, creating elite attitudes and dependency on foreign knowledge",
        "It was too expensive",
        "It focused on agriculture rather than academics"
      ],
      "ans": 1,
      "ex": "Nyerere argued colonial schooling created a small elite that looked outward to Europe, generating dependency rather than the self-reliance Tanzania needed."
    },
    {
      "q": "Ubuntu philosophy applied to education suggests:",
      "opts": [
        "Individual achievement is the primary goal",
        "Education is fundamentally about becoming human through relationship with others — I am because we are",
        "Competition between students raises standards",
        "Memorisation of community knowledge is the core task"
      ],
      "ans": 1,
      "ex": "Ubuntu — I am because we are — positions individual learning as inseparable from community formation. Education is the process of becoming more fully human through deepening relationships."
    },
    {
      "q": "Confucian educational philosophy prioritises:",
      "opts": [
        "Individual self-expression and creativity",
        "Self-cultivation, moral formation, and harmonious social relations",
        "Economic productivity and vocational skill",
        "Critical deconstruction of social hierarchies"
      ],
      "ans": 1,
      "ex": "Confucius saw education as the path to moral self-cultivation — forming the exemplary person who contributes to social harmony. This grounds the high regard for education in East Asian cultures."
    },
    {
      "q": "Linda Tuhiwai Smith’s Decolonizing Methodologies argues that:",
      "opts": [
        "Western research methods are universally superior",
        "Research itself has been a tool of colonialism — indigenous communities must reclaim research on their own terms",
        "Academic research has no political dimension",
        "Qualitative and quantitative methods are equally appropriate"
      ],
      "ans": 1,
      "ex": "Smith shows that research — who conducts it, what counts as valid knowledge, how findings are used — has been historically bound up with colonial projects. Decolonising means indigenous communities controlling their own knowledge production."
    },
    {
      "q": "Tagore’s Shantiniketan school was founded as a direct counter to:",
      "opts": [
        "Hindu religious education",
        "Colonial schooling’s factory discipline, rote learning, and separation from nature and culture",
        "Progressive Western education methods",
        "Confucian examination systems"
      ],
      "ans": 1,
      "ex": "Tagore founded Shantiniketan as a protest against the mechanical, culture-alienating schooling of colonial India. His school prioritised outdoor learning, arts, Bengali culture, and the child’s natural development."
    },
    {
      "q": "Kura kaupapa Māori schools represent:",
      "opts": [
        "New Zealand government schools with Māori-language instruction",
        "Māori-immersion schools that transmit language, knowledge, and worldview as the medium and purpose of education",
        "Traditional colonial schools adapted for Māori students",
        "Private schools serving elite Māori families"
      ],
      "ans": 1,
      "ex": "Kura kaupapa Māori emerged from Māori community activism in the 1980s. They use Māori as the medium of instruction and centre Māori values and identity."
    },
    {
      "q": "The concept of decolonising the curriculum is contested because critics argue:",
      "opts": [
        "African knowledge systems are inferior",
        "It is clearer as critique than as programme — particularly in STEM, where the claim that physics is colonial is philosophically complex",
        "Students prefer colonial-era curricula",
        "It has already been fully achieved"
      ],
      "ans": 1,
      "ex": "Serious critics argue the decolonisation project is easier to articulate as a negative than as a positive programme, particularly in mathematics and natural sciences."
    },
    {
      "q": "What does indigenous education most commonly emphasise that Western schooling tends to neglect?",
      "opts": [
        "Written literacy and numeracy",
        "Relationship with land, oral tradition, collective identity, and intergenerational knowledge transmission",
        "Individual competitive achievement",
        "Standardised assessment and certification"
      ],
      "ans": 1,
      "ex": "Indigenous education traditions emphasise learning from and for the land, oral transmission of knowledge, collective identity, and practical integration with community life."
    },
    {
      "q": "Nyerere’s criticism of post-Independence African education was that:",
      "opts": [
        "It expanded access without transforming purpose — producing certificates without developing capacity",
        "It was too influenced by Marxist ideology",
        "It ignored agricultural training",
        "It failed to teach English language skills"
      ],
      "ans": 0,
      "ex": "Nyerere argued newly independent African nations simply adopted colonial education systems without rethinking what education was for in an African democratic context."
    },
    {
      "q": "Ubuntu’s I am because we are contrasts most sharply with which Western tradition?",
      "opts": [
        "Perennialism",
        "Liberal individualism — the idea that education primarily serves individual development and self-realisation",
        "Critical pedagogy",
        "Progressive education"
      ],
      "ans": 1,
      "ex": "Liberal individualist traditions position individual flourishing as the primary educational goal. Ubuntu reverses this: the individual is constituted through community, and education serves communal becoming."
    }
  ]
},

{
  "id": "m06",
  "n": 6,
  "phase": 1,
  "days": "39–45",
  "title": "Education and Society",
  "sub": "How school systems create, reproduce, and occasionally disrupt patterns of social inequality — Bourdieu, Coleman, Sen.",
  "bigIdea": "Schools are widely believed to equalise life chances. The sociology of education shows they more reliably reproduce existing social hierarchies — not through conspiracy but through structure. Understanding why is the analytical precondition for any genuine reform agenda.",
  "hook": null,
  "thinkers": [
    {
      "name": "Pierre Bourdieu",
      "era": "1930–2002",
      "claim": "Cultural capital — familiarity with dominant cultural codes — is converted into academic capital, making inherited social advantage appear as individual merit."
    },
    {
      "name": "James S. Coleman",
      "era": "1926–1995",
      "claim": "Family background and social capital predict educational outcomes far more powerfully than school resources — the most replicated and politically inconvenient finding in education research."
    },
    {
      "name": "Amartya Sen",
      "era": "b. 1933",
      "claim": "Education is a capability — it expands what people can be and do. Educational policy should be evaluated by whether it expands real human freedom, not economic output alone."
    },
    {
      "name": "Samuel Bowles & Herbert Gintis",
      "era": "1970s",
      "claim": "The correspondence principle: schools mirror the social relations of the workplace, preparing different classes for different roles through the hidden curriculum of compliance and hierarchy."
    }
  ],
  "schedule": [
    {
      "day": 39,
      "type": "Read",
      "title": "Bourdieu, \"Cultural Reproduction and Social Reproduction\" (1977)",
      "note": "The foundational cultural capital statement. ResearchGate / Google Scholar. 45 min."
    },
    {
      "day": 40,
      "type": "Read",
      "title": "Coleman Report — Equality of Educational Opportunity (1966) — summary section",
      "note": "Free ERIC PDF. Focus on the finding that family background predicts outcomes more than school resources. 40 min."
    },
    {
      "day": 41,
      "type": "Read",
      "title": "Bowles & Gintis, Schooling in Capitalist America — Ch. 2 only",
      "note": "The correspondence principle: schools mirror the social relations of production. Internet Archive — free. 40 min."
    },
    {
      "day": 42,
      "type": "Read",
      "title": "Sen, Development as Freedom — Ch. 1 only",
      "note": "The capability approach and why GNP is an impoverished measure of educational value. Internet Archive — free. 35 min."
    },
    {
      "day": 43,
      "type": "Case",
      "title": "OECD PISA equity data — which nations actually equalise?",
      "note": "Read OECD Education at a Glance summary on equity. Identify three systems combining high mean performance with low socioeconomic variance. Begin to ask why."
    },
    {
      "day": 44,
      "type": "Reflect",
      "title": "Debate preparation: \"Schools reproduce inequality more than they reduce it\"",
      "note": "200 words per side. The goal is not to be persuaded — it is to understand the strongest form of each argument. Write locally."
    },
    {
      "day": 45,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Policy Memo (local)",
      "note": "Complete on-site quiz. Write your memo locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "\"Cultural Reproduction and Social Reproduction\" (1977)",
      "author": "Pierre Bourdieu",
      "year": "1977",
      "note": "The foundational cultural capital thesis. ResearchGate / Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Primary",
      "title": "Equality of Educational Opportunity — summary section",
      "author": "James Coleman et al.",
      "year": "1966",
      "note": "The Coleman Report. Free ERIC PDF.",
      "url": "https://files.eric.ed.gov/fulltext/ED012275.pdf"
    },
    {
      "type": "Primary",
      "title": "Schooling in Capitalist America — Ch. 2 only",
      "author": "Bowles & Gintis",
      "year": "1976",
      "note": "The correspondence principle. Internet Archive — free.",
      "url": "https://archive.org/details/schoolingincapitalistamerica"
    },
    {
      "type": "Secondary",
      "title": "Development as Freedom — Ch. 1 only",
      "author": "Amartya Sen",
      "year": "1999",
      "note": "The capability approach applied to education. Internet Archive — free.",
      "url": "https://archive.org/details/developmentasfreedom00sena"
    }
  ],
  "assessment": {
    "tier": "Tier B — Adversarial Policy Memo",
    "format": "memo",
    "title": "The Equity Illusion",
    "prompt": "A regional authority announces: \"Our School Choice Programme has closed the achievement gap — 23% of low-income students now attend high-performing schools.\" In 400 words: (1) Use Bourdieu to identify the fatal structural flaw in this programme despite its apparently neutral design. (2) Use ONE finding from Coleman to challenge the premise that high-performing school attendance drives equity outcomes. (3) Propose one alternative intervention that addresses upstream causes rather than redistributing access to existing advantages. Write locally."
  },
  "optional": [
    {
      "title": "Reproduction in Education, Society and Culture",
      "author": "Bourdieu & Passeron",
      "year": "1977",
      "note": "The full theoretical account of cultural reproduction — Bourdieu's most rigorous statement of how schools convert inherited social position into certified academic distinction."
    },
    {
      "title": "The Spirit Level: Why Equality is Better for Everyone",
      "author": "Wilkinson & Pickett",
      "year": "2009",
      "note": "An empirical case that societal income inequality — not just poverty — damages educational outcomes, essential for anyone thinking about systemic rather than school-level interventions."
    },
    {
      "title": "Development as Freedom (full book)",
      "author": "Amartya Sen",
      "year": "1999",
      "note": "Sen's complete capability framework — the most philosophically sophisticated alternative to GDP-based thinking about what education and development are ultimately for."
    }
  ],
  "quiz": [
    {
      "q": "Bourdieu’s cultural capital refers to:",
      "opts": [
        "Financial investment in education",
        "Familiarity with dominant culture’s knowledge, tastes, and ways of speaking that schools reward",
        "The economic value of qualifications",
        "National cultural heritage taught in schools"
      ],
      "ans": 1,
      "ex": "Bourdieu identified cultural capital as what schools reward. Middle-class families provide the embodied form at home, making school appear meritocratic while reproducing class."
    },
    {
      "q": "The Coleman Report (1966) found that:",
      "opts": [
        "School funding was the primary driver of student outcomes",
        "Family and community background predicted outcomes far more than school resources",
        "Desegregation completely eliminated achievement gaps",
        "Private schools universally outperformed public schools"
      ],
      "ans": 1,
      "ex": "Coleman’s massive survey found that variation in school resources explained relatively little of outcome variation — family socioeconomic background and peer composition were far more powerful predictors."
    },
    {
      "q": "The correspondence principle (Bowles & Gintis) claims that:",
      "opts": [
        "School grades correspond to actual ability",
        "Schools mirror the hierarchical social relations of the capitalist workplace",
        "Educational standards should correspond to national economic needs",
        "Formal schooling corresponds with democratic citizenship"
      ],
      "ans": 1,
      "ex": "Bowles and Gintis argued the hidden curriculum — following rules, respecting authority, tolerating tedium — prepares working-class students for working-class roles, reproducing capitalism."
    },
    {
      "q": "Sen’s capability approach applied to education means:",
      "opts": [
        "Measuring educational outcomes by GDP contribution",
        "Evaluating education by the real freedoms and possibilities it opens up for individuals",
        "Ensuring all students achieve the same test scores",
        "Schools focus on vocational training only"
      ],
      "ans": 1,
      "ex": "Sen’s framework asks not what does education produce economically? but what can people be and do? Education is valuable to the extent it expands genuine human capabilities."
    },
    {
      "q": "Bourdieu’s habitus refers to:",
      "opts": [
        "The school’s physical environment",
        "Durable dispositions — ways of thinking, acting, and perceiving — acquired through social experience",
        "The body of official curriculum knowledge",
        "The economic resources families bring to schooling"
      ],
      "ans": 1,
      "ex": "Habitus is the set of durable dispositions inculcated through early socialisation — class-specific ways of speaking, moving, judging — that feel natural and that schools recognise and reward differentially."
    },
    {
      "q": "The main limitation of the correspondence principle is:",
      "opts": [
        "It was based on research in Finland",
        "It is overly deterministic — it underestimates student and teacher agency",
        "It only applies to higher education",
        "It ignores curriculum content"
      ],
      "ans": 1,
      "ex": "Critics including Giroux and Willis argue Bowles & Gintis present schools as too mechanically reproductive, leaving no room for resistance or the genuine emancipatory experience many students describe."
    },
    {
      "q": "Social capital in Coleman’s framework refers to:",
      "opts": [
        "The amount of money families invest in schooling",
        "Networks of relationships, trust, and norms that support educational development",
        "Social skills taught explicitly in schools",
        "Cultural knowledge valued by dominant society"
      ],
      "ans": 1,
      "ex": "For Coleman, social capital is the relational resource — connections between parents, schools and families, students — that generates trust and shared expectations directly supporting educational investment."
    },
    {
      "q": "Goodhart’s Law applied to education means:",
      "opts": [
        "Good teachers produce good results naturally",
        "When a measure becomes a target, it ceases to be a good measure — schools optimise for tests rather than learning",
        "Good schools are measured by multiple metrics",
        "Standardised tests are inherently inaccurate"
      ],
      "ans": 1,
      "ex": "When schools are evaluated based on test scores, they shift behaviour toward maximising those scores — test prep, narrow curriculum, gaming data — rather than deeper learning."
    },
    {
      "q": "A working-class child who lacks the right accent and cultural references is disadvantaged at school primarily because of:",
      "opts": [
        "Lower innate ability",
        "Insufficient school funding",
        "Cultural capital mismatch — school rewards what middle-class families provide at home",
        "Government policy favouring private schools"
      ],
      "ans": 2,
      "ex": "This is Bourdieu’s central insight. School operates with implicit cultural rules that working-class children must learn in addition to the formal curriculum, while middle-class children arrive already socialised into those rules."
    },
    {
      "q": "Which finding most undermines a purely resources-determine-outcomes view?",
      "opts": [
        "The success of charter schools",
        "The Coleman Report — high-resource schools often have similar outcomes to lower-resource ones when background is controlled",
        "PISA rankings showing wealthy countries perform better",
        "Teacher unions opposing resource cuts"
      ],
      "ans": 1,
      "ex": "Coleman’s finding that school resources explained less variance than expected remains one of the most replicated and uncomfortable findings in educational research."
    }
  ]
},

{
  "id": "m07",
  "n": 7,
  "phase": 1,
  "days": "46–49",
  "title": "Early Childhood Care and Education",
  "sub": "The neuroscience of early development, the economics of early investment, and the evidence on play-based learning.",
  "bigIdea": "The scientific and economic case for early childhood investment is among the most robust in all of social science. Yet ECCE remains politically undervalued in most school systems. This module asks why — and what the evidence actually shows about what works and why it works.",
  "hook": null,
  "thinkers": [
    {
      "name": "James Heckman",
      "era": "b. 1944",
      "claim": "The rate of return on educational investment is highest in the earliest years. Skills beget skills — early investment compounds across a lifetime."
    },
    {
      "name": "Lev Vygotsky",
      "era": "1896–1934",
      "claim": "Play is the leading activity in early childhood. Through play, children operate in their Zone of Proximal Development, rehearsing roles and meanings beyond their current capacity."
    },
    {
      "name": "Jerome Bruner",
      "era": "1915–2016",
      "claim": "The spiral curriculum should begin in the earliest years — revisitable, expandable ideas that deepen with each cognitive encounter."
    }
  ],
  "schedule": [
    {
      "day": 46,
      "type": "Read",
      "title": "Heckman, Invest in Early Childhood Development — reduce deficits, strengthen the economy",
      "note": "The full rate-of-return argument. Free: heckmanequation.org. 40 min."
    },
    {
      "day": 47,
      "type": "Case",
      "title": "Perry Preschool Project and Abecedarian Project — longitudinal findings",
      "note": "Google Scholar: \"Perry Preschool Project long-term outcomes\" and \"Abecedarian Project educational returns\". These are the two landmark studies underpinning Heckman's argument. 45 min."
    },
    {
      "day": 48,
      "type": "Read",
      "title": "Vygotsky, \"The Role of Play in Development\" (1933 lecture)",
      "note": "Google Scholar. How play functions as the leading developmental activity in early childhood — the theoretical basis for play-based ECCE. 35 min."
    },
    {
      "day": 49,
      "type": "Quiz + Assign",
      "title": "Module quiz + Phase 1 Milestone Essay (local)",
      "note": "Complete on-site quiz. Write your Phase 1 capstone essay locally (see assignment)."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Invest in Early Childhood Development",
      "author": "James Heckman",
      "year": "2012",
      "note": "The economic rate-of-return argument. heckmanequation.org — free.",
      "url": "https://heckmanequation.org/resource/invest-in-early-childhood-development-reduce-deficits-strengthen-the-economy/"
    },
    {
      "type": "Primary",
      "title": "\"The Role of Play in Development\" (1933)",
      "author": "Lev Vygotsky",
      "year": "1933",
      "note": "Play as leading activity and ZPD context. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Secondary",
      "title": "Perry Preschool Project — longitudinal findings",
      "author": "Schweinhart et al.",
      "year": "2005",
      "note": "Five-decade study underpinning the Heckman argument. Google Scholar.",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier A — Phase 1 Capstone Essay",
    "format": "essay",
    "title": "Phase 1 Synthesis: Foundations",
    "prompt": "In 600–800 words written locally, respond to: \"Is it possible to design a school system that simultaneously serves individual flourishing and social cohesion without reproducing social inequality?\" Draw on at least FOUR Phase 1 thinkers. State your position in the opening paragraph. Engage the strongest counter-argument. End with one specific structural implication. Keep this essay — you will return to it in Module 17."
  },
  "optional": [
    {
      "title": "Neurons to Neighborhoods: The Science of Early Childhood Development",
      "author": "Shonkoff & Phillips (National Academies)",
      "year": "2000",
      "note": "The landmark National Academies synthesis of brain development research — the scientific foundation for all subsequent ECCE policy argument. Free PDF: search \"Shonkoff Phillips Neurons Neighborhoods free PDF\"."
    },
    {
      "title": "The Heckman Equation (full research portal)",
      "author": "James Heckman",
      "year": "ongoing",
      "note": "heckmanequation.org — the complete research base, policy briefs, and evidence summaries from Heckman's longitudinal work on early childhood investment."
    }
  ],
  "quiz": [
    {
      "q": "Heckman's rate-of-return argument holds that the highest economic returns to educational investment occur:",
      "opts": [
        "During secondary school, when cognitive and vocational development peak.",
        "In higher education, due to the large earnings premium associated with degrees.",
        "In early childhood — before age 5 — because early skill formation enables later skill acquisition.",
        "Throughout adulthood, via lifelong learning and retraining programmes."
      ],
      "ans": 2,
      "ex": "Heckman's diminishing-returns graph is one of the most cited findings in educational economics. Early investment compounds: social, cognitive, and emotional skills developed early make all later investments more effective and cost-effective."
    },
    {
      "q": "Vygotsky's claim that play is the 'leading activity' in early childhood means:",
      "opts": [
        "Free play is the most enjoyable activity and should dominate the school day.",
        "Play is the primary context in which preschool children stretch beyond their current developmental level — operating within their ZPD.",
        "Structured play programmes are more effective than free play at building school-readiness skills.",
        "Play is cognitively less demanding than formal instruction and should give way to learning by age 5."
      ],
      "ans": 1,
      "ex": "For Vygotsky, 'leading activity' has a precise meaning: the activity that drives development at a given stage. Play is leading not because it is fun but because through assuming roles, following rules, and using symbolic objects, children operate at the edge of their current capacity."
    },
    {
      "q": "The Perry Preschool Project's significance is that it demonstrated:",
      "opts": [
        "Structured phonics instruction beginning at age 3 improves literacy at age 11.",
        "Long-term cognitive, social, and economic benefits for low-income children from high-quality preschool, tracked across five decades.",
        "Montessori methods are superior to direct instruction for children aged 3–6.",
        "ECCE programmes are most effective when run by specialist early years teachers."
      ],
      "ans": 1,
      "ex": "The Perry Project followed participants from age 3 into their 40s and 50s, finding lasting effects on educational attainment, employment, earnings, health, and criminal justice involvement — the empirical backbone for Heckman's economic argument."
    },
    {
      "q": "Heckman's argument that 'skills beget skills' means:",
      "opts": [
        "Academic skills developed in secondary school are prerequisite for vocational skills.",
        "Early development of cognitive and non-cognitive skills makes later skill acquisition more efficient — early advantage compounds.",
        "Children who develop literacy early are more likely to develop numeracy skills.",
        "Investment in teacher skills produces proportional improvement in student skills."
      ],
      "ans": 1,
      "ex": "The complementarity of human capital formation: early foundations make later investments more productive. A child who develops self-regulation, curiosity, and language capacity early learns more efficiently in school — and gets more from every subsequent educational investment."
    },
    {
      "q": "Bruner's spiral curriculum applied to early childhood means:",
      "opts": [
        "Curriculum content should rotate in a spiral pattern across subjects.",
        "Foundational ideas should be introduced in simple form early and revisited with increasing complexity as children develop.",
        "Children should first master concrete skills before any abstract concepts.",
        "Early childhood educators should follow a prescribed simple-to-complex sequence."
      ],
      "ans": 1,
      "ex": "Bruner argued that any idea can be taught at some intellectually honest level to any age. The spiral curriculum begins with accessible versions of foundational concepts and returns to them with added complexity — making early childhood the appropriate starting point."
    },
    {
      "q": "Research on play-based vs. structured early learning consistently shows:",
      "opts": [
        "Structured academic instruction in preschool produces superior long-term outcomes.",
        "Play-based approaches produce comparable or superior long-term outcomes, especially in social-emotional domains, despite sometimes lower short-term academic gains.",
        "Play-based learning produces superior short-term gains that persist into adulthood.",
        "The approach matters less than teacher quality."
      ],
      "ans": 1,
      "ex": "Short-term academic gains from structured preschool often fade by age 7–8. Long-term studies show high-quality environments supporting play, language, and relationships produce more durable gains — particularly in non-cognitive skills that predict adult outcomes."
    },
    {
      "q": "The most politically significant implication of Heckman's work for education budgeting is:",
      "opts": [
        "University funding should be the top government priority due to the large private earnings premium.",
        "Resources should be redistributed toward early childhood programmes to maximise social return.",
        "ECCE spending yields lower returns than targeted secondary interventions.",
        "All educational investment periods yield roughly equivalent social returns when quality is controlled."
      ],
      "ans": 1,
      "ex": "Heckman explicitly challenges conventional budget allocation concentrating resources on secondary and higher education. His rate-of-return evidence shows the highest social returns come from the earliest years — making ECCE underfunding both economically irrational and inequitable."
    },
    {
      "q": "ECCE remains politically underfunded despite strong evidence for investment. The most credible structural explanation is:",
      "opts": [
        "Policymakers are unaware of the Heckman evidence.",
        "Parents prefer their children at home during early years and oppose public provision.",
        "The beneficiaries (young children and future taxpayers) have no political voice, and returns are long-delayed and diffuse.",
        "ECCE is constitutionally a parental rather than state responsibility in most legal systems."
      ],
      "ans": 2,
      "ex": "Political economy matters as much as evidence. Young children cannot vote; future tax revenues are distant and diffuse; immediate budget pressures favour visible, politically responsive expenditure. This structural mismatch between evidence and policy is itself a key lesson of this module."
    }
  ]
},

{
  "id": "m08",
  "n": 8,
  "phase": 2,
  "days": "50–57",
  "title": "The High-Performing Systems",
  "sub": "Finland, Singapore, Estonia, Canada, Japan, South Korea — and the vocational track question. What PISA reveals, and what it obscures.",
  "bigIdea": "Some school systems consistently produce excellent and equitable outcomes. The question is what they actually share — and whether those features can be transferred. This module also explicitly addresses TVET: the high-performing systems are not exclusively academic, and their vocational tracks are inseparable from their overall success.",
  "hook": null,
  "thinkers": [
    {
      "name": "Pasi Sahlberg",
      "era": "b. 1959",
      "claim": "Finland succeeded by resisting the Global Education Reform Movement — no high-stakes testing, high teacher autonomy, deep equity commitment."
    },
    {
      "name": "Andreas Schleicher",
      "era": "b. 1964",
      "claim": "PISA reveals that excellence and equity can coexist. The systems that achieve both share identifiable structural features."
    },
    {
      "name": "Yong Zhao",
      "era": "b. 1965",
      "claim": "High PISA scores and entrepreneurial creativity are in systematic tension. Nations at the top of rankings may be suppressing the capacities modern economies actually require."
    }
  ],
  "schedule": [
    {
      "day": 50,
      "type": "Read",
      "title": "Sahlberg, Finnish Lessons — Ch. 1–2 only",
      "note": "Why Finland looks different — and what actually drives it. Ch. 1–2 contain the essential argument. Goodreads / Google Scholar. 50 min."
    },
    {
      "day": 51,
      "type": "Watch",
      "title": "The Finland Phenomenon (documentary)",
      "note": "YouTube search: \"The Finland Phenomenon documentary education\" — 60 min. Most reliable available upload."
    },
    {
      "day": 52,
      "type": "Case",
      "title": "Singapore: bilingualism, streaming, and the polytechnic track",
      "note": "OECD Singapore PDF: oecd.org/education/school/46581101.pdf — free. Focus on how the polytechnic and ITE vocational tracks are integrated into the system — not an afterthought."
    },
    {
      "day": 53,
      "type": "Case",
      "title": "Germany and Switzerland: the dual-track apprenticeship system",
      "note": "Germany's Ausbildung and Switzerland's apprenticeship pathway — how 60–70% of students enter high-quality vocational programmes without stigma. Compare with UK and US equivalents. Google Scholar: \"German dual apprenticeship system outcomes\"."
    },
    {
      "day": 54,
      "type": "Case",
      "title": "Japan and South Korea: high performance and its costs",
      "note": "Juku culture, exam hell, and adolescent wellbeing data. What happens when PISA optimisation becomes a societal project. 40 min."
    },
    {
      "day": 55,
      "type": "Read",
      "title": "Schleicher, World Class — Ch. 1 only",
      "note": "PISA lead author on what the data shows and what it doesn't. Free OECD iLibrary. 40 min."
    },
    {
      "day": 56,
      "type": "Case",
      "title": "Canada (Ontario): from mediocrity to excellence without GERM",
      "note": "Surpassing Shanghai (Ontario chapter) — HEPG. How Fullan and Barber's capacity-building approach drove Ontario's turnaround. 40 min."
    },
    {
      "day": 57,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Policy Memo (local)",
      "note": "Complete on-site quiz. Write your memo locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Finnish Lessons — Ch. 1–2 only",
      "author": "Pasi Sahlberg",
      "year": "2011",
      "note": "Why Finland's system looks different. Goodreads link in app.",
      "url": "https://goodreads.com/book/show/11002234"
    },
    {
      "type": "Primary",
      "title": "World Class — Ch. 1 only",
      "author": "Andreas Schleicher",
      "year": "2018",
      "note": "PISA lead author on what the data shows. Free OECD iLibrary.",
      "url": "https://oecd-ilibrary.org/education/world-class_9789264300002-en"
    },
    {
      "type": "Secondary",
      "title": "The Singapore Story — OECD report",
      "author": "OECD",
      "year": "2010",
      "note": "Free PDF — focus on vocational track integration.",
      "url": "https://oecd.org/education/school/46581101.pdf"
    },
    {
      "type": "Secondary",
      "title": "German dual apprenticeship system — academic overview",
      "author": "Various",
      "year": "various",
      "note": "Google Scholar: \"German dual apprenticeship system outcomes comparative\".",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier B — Adversarial Policy Memo",
    "format": "memo",
    "title": "Against the PISA Chase",
    "prompt": "A national government announces it will \"close the PISA gap with Singapore within 10 years\" through mandatory daily testing of all students aged 7–16. In 400 words: (1) Use Sahlberg's GERM analysis to explain why this approach is likely to worsen rather than improve outcomes. (2) Draw on ONE vocational track case study (Germany, Switzerland, or Singapore polytechnic) to challenge the assumption that academic attainment is the only measure worth chasing. (3) Propose an alternative 3-point reform agenda. Write and save locally."
  },
  "optional": [
    {
      "title": "Finnish Lessons (full book)",
      "author": "Pasi Sahlberg",
      "year": "2011",
      "note": "The complete account of Finland's educational transformation — an essential reference for anyone designing reform at national scale."
    },
    {
      "title": "Who's Afraid of the Big Bad Dragon?",
      "author": "Yong Zhao",
      "year": "2014",
      "note": "Zhao's sustained argument that China's exam-driven system produces compliance rather than creativity — essential counterpoint to PISA triumphalism."
    }
  ],
  "quiz": [
    {
      "q": "Finland’s education system is unusual globally because it:",
      "opts": [
        "Has the most standardised testing in the world",
        "Has almost no standardised testing and high teacher autonomy",
        "Selects students into academic tracks at age 10",
        "Prioritises mathematics above all other subjects"
      ],
      "ans": 1,
      "ex": "Finland deliberately avoided the global trend toward standardised testing and accountability. Teachers are trusted professionals; schools have high autonomy — the Finnish Way."
    },
    {
      "q": "PISA tests 15-year-olds on:",
      "opts": [
        "Content knowledge in national curricula",
        "Applied ability to use knowledge in reading, maths, and science for real-world problems",
        "Teacher quality across OECD nations",
        "University readiness at age 18"
      ],
      "ans": 1,
      "ex": "PISA tests applied competencies — not curriculum content recall. This may reward test-taking cultures and disadvantage nations with different educational priorities."
    },
    {
      "q": "Singapore’s system is notable for:",
      "opts": [
        "Avoiding tracking and streaming",
        "Streaming students from around age 10–12, combined with bilingual instruction",
        "Having the highest number of school holidays globally",
        "Emphasising child-led play-based learning"
      ],
      "ans": 1,
      "ex": "Singapore combines early streaming with compulsory bilingual education and a Confucian cultural emphasis on academic diligence."
    },
    {
      "q": "Estonia’s rise to top PISA rankings is significant because:",
      "opts": [
        "It spent more on education than any other European country",
        "It achieved rapid improvement from a Soviet legacy system through teacher investment and digital infrastructure",
        "It adopted the Finnish model wholesale",
        "Its population homogeneity explains the result"
      ],
      "ans": 1,
      "ex": "Estonia’s case shows rapid, designed improvement within one generation through post-Soviet curriculum reform, strong teacher training, and a digital education agenda."
    },
    {
      "q": "Sahlberg’s GERM refers to:",
      "opts": [
        "A disease spreading between students",
        "A set of shared policies — standardisation, testing, competition, choice — that he argues harm education",
        "A German-influenced model being exported",
        "The spread of progressive pedagogy from Finland to the US"
      ],
      "ans": 1,
      "ex": "Sahlberg coined GERM to describe the convergent package of market-inspired reforms. He argues Finland succeeded by resisting GERM, not embracing it."
    },
    {
      "q": "South Korea and Japan’s educational challenge is:",
      "opts": [
        "Low average attainment despite heavy investment",
        "High academic performance combined with intense pressure, wellbeing costs, and shadow education dependency",
        "Teacher shortages preventing curriculum delivery",
        "Lack of international curriculum alignment"
      ],
      "ans": 1,
      "ex": "South Korea and Japan top PISA tables but face documented crises of student and teacher wellbeing, extreme private tutoring culture, and growing questions about sustainability."
    },
    {
      "q": "Shadow education refers to:",
      "opts": [
        "The hidden curriculum of values taught implicitly",
        "Private tutoring and supplementary instruction outside school hours",
        "Elite private schools shadowing state curricula",
        "The gap between stated and actual curriculum"
      ],
      "ans": 1,
      "ex": "Shadow education — juku (Japan), hagwon (Korea), tuition centres globally — raises equity questions about who can afford supplementary instruction."
    },
    {
      "q": "Ontario’s education turnaround (2003–2010) was driven by:",
      "opts": [
        "Significantly increased per-pupil spending",
        "Capacity-building, professional learning communities, clear goals, and avoiding punitive accountability",
        "Importing Finnish teachers",
        "Introducing school choice and competition"
      ],
      "ans": 1,
      "ex": "Barber and Fullan’s analysis shows Ontario improved through capacity-building reform: setting clear goals, supporting teacher development, fostering collaboration."
    },
    {
      "q": "The main critique of using PISA rankings as policy benchmarks is:",
      "opts": [
        "PISA is too expensive",
        "Rankings incentivise teaching to PISA and narrow educational goals to what PISA measures",
        "PISA results are statistically unreliable",
        "Only Asia-Pacific countries perform consistently well"
      ],
      "ans": 1,
      "ex": "Critics argue chasing PISA rankings leads nations to narrow curricula toward tested competencies, sacrificing creativity, civic education, wellbeing, and other outcomes PISA does not measure."
    },
    {
      "q": "The concept that excellence and equity can coexist is best supported by:",
      "opts": [
        "The United States and United Kingdom",
        "Finland and Canada — systems showing both high mean performance and low variance between schools",
        "Singapore — high performance through rigorous selection",
        "China — high PISA scores through intensive preparation"
      ],
      "ans": 1,
      "ex": "Finland and Canada demonstrate that systems explicitly committed to equity can simultaneously achieve high mean performance. The trade-off assumption reflects market logic, not research evidence."
    }
  ]
},

{
  "id": "m09",
  "n": 9,
  "phase": 2,
  "days": "58–64",
  "title": "Alternative and Experimental Schools",
  "sub": "Montessori, Waldorf, Reggio Emilia, Summerhill, democratic schools, unschooling — the evidence base, and the equity problem.",
  "bigIdea": "The most student-centred, experientially rich educational approaches are often the least accessible. This module asks what the alternatives actually produce — not what they promise — and who has access to them. The equity paradox of progressive education deserves serious engagement.",
  "hook": null,
  "thinkers": [
    {
      "name": "Maria Montessori",
      "era": "1870–1952",
      "claim": "Children have a natural drive to learn. The prepared environment — not teacher instruction — enables this drive."
    },
    {
      "name": "Loris Malaguzzi",
      "era": "1920–1994",
      "claim": "Children have a hundred languages. The environment is the third teacher. Documentation of learning makes the invisible visible."
    },
    {
      "name": "A.S. Neill",
      "era": "1883–1973",
      "claim": "Freedom, not discipline, enables healthy development. Children should govern their own school community."
    },
    {
      "name": "Peter Gray",
      "era": "b. 1943",
      "claim": "Children are self-educating by nature. Unschooling and free play are not radical — they are the evolutionary norm that compulsory schooling disrupted."
    }
  ],
  "schedule": [
    {
      "day": 58,
      "type": "Read",
      "title": "Montessori, The Absorbent Mind — Ch. 1–2 only",
      "note": "The child's natural learning drive and the prepared environment concept. Internet Archive — free. 40 min."
    },
    {
      "day": 59,
      "type": "Case",
      "title": "What does Montessori research actually show?",
      "note": "Lillard et al. (2006) in Science — the strongest randomised study of Montessori outcomes. DOI: 10.1126/science.1132362. Read the abstract and results section. 30 min."
    },
    {
      "day": 60,
      "type": "Read",
      "title": "Neill, Summerhill — introductory sections only",
      "note": "Democratic self-governance and the evidence (or lack thereof) on outcomes. Internet Archive — free. 35 min."
    },
    {
      "day": 61,
      "type": "Watch",
      "title": "Most Likely to Succeed (documentary)",
      "note": "YouTube: \"Most Likely to Succeed documentary High Tech High\" — 60 min. Project-based learning at scale."
    },
    {
      "day": 62,
      "type": "Read",
      "title": "Gray, Free to Learn — Ch. 1 only",
      "note": "The evolutionary case for self-directed education. Google Scholar / ResearchGate. 40 min."
    },
    {
      "day": 63,
      "type": "Reflect",
      "title": "The equity problem of progressive education",
      "note": "300 words locally: who has access to Montessori, Waldorf, Reggio, and Summerhill-style education in your country? What does this distribution say about progressive education's political economy?"
    },
    {
      "day": 64,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier A essay (local)",
      "note": "Complete on-site quiz. Write your essay locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "The Absorbent Mind — Ch. 1–2 only",
      "author": "Maria Montessori",
      "year": "1949",
      "note": "The child's natural learning drive and prepared environment. Internet Archive — free.",
      "url": "https://archive.org/details/absorbentmind00mont"
    },
    {
      "type": "Primary",
      "title": "Free to Learn — Ch. 1 only",
      "author": "Peter Gray",
      "year": "2013",
      "note": "The evolutionary case for self-directed education. ResearchGate / Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Secondary",
      "title": "Summerhill — introductory sections",
      "author": "A.S. Neill",
      "year": "1960",
      "note": "Democratic self-governance. Internet Archive — free.",
      "url": "https://archive.org/details/summerhillradicala00neil"
    },
    {
      "type": "Secondary",
      "title": "\"Evaluating Montessori Education\" (Science, 2006)",
      "author": "Lillard & Else-Quest",
      "year": "2006",
      "note": "Randomised study of Montessori outcomes. DOI: 10.1126/science.1132362",
      "url": "https://science.org/doi/10.1126/science.1132362"
    }
  ],
  "assessment": {
    "tier": "Tier A — Analytical Essay",
    "format": "essay",
    "title": "The Progressive Paradox",
    "prompt": "In 500–750 words written locally: Montessori, Waldorf, and Reggio Emilia schools consistently produce compelling evidence of student engagement, creativity, and wellbeing — and they are overwhelmingly attended by children of wealthy, educated parents. Is this a coincidence, a structural inevitability, or a solvable problem? Take a clear position and defend it using at least two thinkers or empirical findings from this module."
  },
  "optional": [
    {
      "title": "The Absorbent Mind (full book)",
      "author": "Maria Montessori",
      "year": "1949",
      "note": "Montessori's most complete theoretical account — essential for anyone designing or evaluating Montessori-influenced environments."
    },
    {
      "title": "Summerhill: A Radical Approach to Child Rearing",
      "author": "A.S. Neill",
      "year": "1960",
      "note": "The full account of Neill's democratic school — read critically for both its idealism and its practical achievements over 50+ years."
    }
  ],
  "quiz": [
    {
      "q": "Montessori’s prepared environment means:",
      "opts": [
        "A classroom where the teacher has prepared a lesson plan",
        "A physical space designed for children’s independent exploration with self-correcting materials at child height",
        "A sterile environment free of distractions",
        "A digital environment with adaptive software"
      ],
      "ans": 1,
      "ex": "Montessori’s prepared environment is a specifically designed physical space — child-sized furniture, self-correcting manipulatives, freedom of movement — where children self-select activities."
    },
    {
      "q": "Reggio Emilia’s hundred languages of children means:",
      "opts": [
        "Schools should teach 100 languages",
        "Children have multiple ways of expressing understanding — drawing, building, movement, drama — all equally valid",
        "Malaguzzi advocated multilingual education",
        "Assessment should cover 100 competencies"
      ],
      "ans": 1,
      "ex": "Malaguzzi’s famous poem argues that traditional schooling steals 99 of children’s languages and leaves just one. Reggio documentation makes all children’s languages visible and valued."
    },
    {
      "q": "The strongest research evidence on Montessori outcomes found:",
      "opts": [
        "Significant advantages in literacy, maths, executive function, and social skills at ages 5 and 12",
        "No measurable differences from traditional schooling",
        "Only effective for children with learning disabilities",
        "Increased test scores but reduced creativity"
      ],
      "ans": 0,
      "ex": "Lillard and Else-Quest’s Science study, using lottery assignment, found significant advantages for Montessori students in multiple domains."
    },
    {
      "q": "Summerhill is historically significant because:",
      "opts": [
        "It was the first school to introduce standardised testing",
        "It was a radical experiment in child self-governance — students decided the rules and could skip all lessons",
        "It was founded by Montessori’s students",
        "It pioneered STEM education in the UK"
      ],
      "ans": 1,
      "ex": "Neill’s Summerhill (founded 1921) is the most famous democratic school experiment. Children governed through regular meetings with equal vote and were responsible for their own development."
    },
    {
      "q": "Peter Gray’s evolutionary argument for unschooling is that:",
      "opts": [
        "Early humans had schools similar to modern ones",
        "Children evolved as self-directed learners through play — compulsory instruction is historically recent and ecologically abnormal",
        "Unschooling produces higher standardised test scores",
        "Modern children need more structured instruction"
      ],
      "ans": 1,
      "ex": "Gray argues from evolutionary psychology that hunter-gatherer children learned through play, observation, and participation — not instruction. Compulsory schooling is a 5,000-year-old experiment."
    },
    {
      "q": "The main equity criticism of alternative schools is:",
      "opts": [
        "They produce students who are too creative",
        "They are predominantly private, expensive, and accessible mainly to middle/upper-class families",
        "They lack qualified teachers",
        "They produce lower academic outcomes"
      ],
      "ans": 1,
      "ex": "Montessori, Waldorf, and Reggio schools are predominantly fee-paying. The approaches most student-centred and experientially rich are least available to disadvantaged students."
    },
    {
      "q": "Project-based learning is legitimately criticised because:",
      "opts": [
        "PBL produces students unable to work independently",
        "Without careful design, PBL can disadvantage students who lack background knowledge needed for self-direction",
        "PBL was invented and only works in private schools",
        "PBL reduces creativity"
      ],
      "ans": 1,
      "ex": "Cognitive load theorists argue that discovery and PBL assume a knowledge base that disadvantaged students often lack. Without explicit instruction, open-ended inquiry can increase inequality."
    },
    {
      "q": "Waldorf education’s 7-year cycle structure derives from:",
      "opts": [
        "Piaget’s developmental stages",
        "Steiner’s anthroposophical framework describing phases of child development",
        "Vygotsky’s social learning theory",
        "A 7-day week metaphor"
      ],
      "ans": 1,
      "ex": "Rudolf Steiner’s Waldorf pedagogy is based on anthroposophical worldview describing child development in three 7-year phases. Formal academics are deferred until age 7."
    },
    {
      "q": "High Tech High is notable for:",
      "opts": [
        "Its rigorous traditional curriculum and standardised testing",
        "Full project-based learning, student-led exhibitions, and no traditional grading as primary feedback",
        "Being a selective private school for gifted students",
        "Its military-style discipline"
      ],
      "ans": 1,
      "ex": "High Tech High practises deep PBL where students create real products and present to public audiences. Most Likely to Succeed raises profound questions about what education is for."
    },
    {
      "q": "The Reggio Emilia approach differs from Montessori primarily in its emphasis on:",
      "opts": [
        "Individual independent work with self-correcting materials",
        "Collaborative project work, teacher-student co-construction, and documentation of learning processes",
        "Early formal literacy and numeracy instruction",
        "Standardised developmental milestones"
      ],
      "ans": 1,
      "ex": "While Montessori emphasises individual self-direction, Reggio centres on long-term collaborative projects co-constructed by children and teachers, documented to make learning visible."
    }
  ]
},

{
  "id": "m10",
  "n": 10,
  "phase": 2,
  "days": "65–71",
  "title": "Education in the Global South",
  "sub": "India's Right to Education Act, sub-Saharan Africa's teacher crisis, Brazil, colonial curricula, and the learning crisis.",
  "bigIdea": "The dominant narratives of global education are written by and for the Global North. The majority of the world's students live in very different conditions. This module centres their experience — using the analytical tools built in Phase 1 to understand systems operating under entirely different constraints.",
  "hook": null,
  "thinkers": [
    {
      "name": "Julius Nyerere",
      "era": "1922–1999",
      "claim": "African education must serve its own communities — not produce colonial administrators or Western-style individual achievers."
    },
    {
      "name": "Ngugi wa Thiong'o",
      "era": "b. 1938",
      "claim": "Teaching African children in colonial languages is a colonisation of the mind. The language of instruction determines whose knowledge counts."
    },
    {
      "name": "Malala Yousafzai",
      "era": "b. 1997",
      "claim": "Education is a right. One child, one teacher, one book, one pen can change the world."
    }
  ],
  "schedule": [
    {
      "day": 65,
      "type": "Read",
      "title": "Nyerere, Education for Self-Reliance — full text (assigned again as comparative anchor)",
      "note": "Re-read from Module 05 with a systems lens — not philosophy but policy. What would this mandate structurally? 30 min."
    },
    {
      "day": 66,
      "type": "Case",
      "title": "India's Right to Education Act (2009) — promise vs. ASER reality",
      "note": "ASER 2023 report summary: asercentre.org/report — free. The gap between enrolment rights and learning outcomes. 40 min."
    },
    {
      "day": 67,
      "type": "Case",
      "title": "Sub-Saharan Africa: the teacher crisis",
      "note": "UNESCO GEM Report summary on sub-Saharan teacher shortages, training quality, and learning outcomes. UNESCO Digital Library — free. 40 min."
    },
    {
      "day": 68,
      "type": "Read",
      "title": "Ngugi wa Thiong'o, Decolonising the Mind — Ch. 1 only",
      "note": "The politics of language in African education. Google Scholar / ResearchGate. 40 min."
    },
    {
      "day": 69,
      "type": "Case",
      "title": "Brazil: Freire's legacy in political context",
      "note": "What happened to progressive education in Brazilian politics. How Bolsonaro's government explicitly targeted Freire as a political threat. 35 min."
    },
    {
      "day": 70,
      "type": "Watch",
      "title": "Malala Yousafzai TED talk — My Story of Education and Survival",
      "note": "Verified TED.com: ted.com/talks/malala_yousafzai_my_own_words — 18 min."
    },
    {
      "day": 71,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Policy Memo (local)",
      "note": "Complete on-site quiz. Write locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Education for Self-Reliance — re-read as policy text",
      "author": "Julius Nyerere",
      "year": "1967",
      "note": "Free: juliusnyerere.info. Now read as a structural policy mandate, not philosophy.",
      "url": "https://juliusnyerere.info"
    },
    {
      "type": "Primary",
      "title": "ASER 2023 Annual Report — executive summary",
      "author": "Pratham Foundation",
      "year": "2023",
      "note": "India's most rigorous learning outcomes data. Free: asercentre.org/report",
      "url": "https://asercentre.org/report"
    },
    {
      "type": "Primary",
      "title": "Decolonising the Mind — Ch. 1 only",
      "author": "Ngugi wa Thiong'o",
      "year": "1986",
      "note": "Language of instruction and epistemic colonialism. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Secondary",
      "title": "UNESCO GEM Report — sub-Saharan teacher crisis sections",
      "author": "UNESCO",
      "year": "current",
      "note": "Free: UNESCO Digital Library.",
      "url": "https://unesdoc.unesco.org"
    }
  ],
  "assessment": {
    "tier": "Tier B — Adversarial Policy Memo",
    "format": "memo",
    "title": "The Learning Crisis Response",
    "prompt": "A World Bank consultant proposes: \"To solve the learning crisis in sub-Saharan Africa, we should deploy AI-powered adaptive learning platforms in all primary schools — this bypasses the teacher quality problem entirely.\" In 400 words: (1) Use the UNESCO teacher crisis evidence to challenge the assumption that technology can bypass teacher quality. (2) Use Ngugi to challenge the implicit assumption that content delivery platforms built in English are culturally neutral. (3) Propose an alternative intervention. Write and save locally."
  },
  "optional": [
    {
      "title": "Decolonising the Mind (full book)",
      "author": "Ngugi wa Thiong'o",
      "year": "1986",
      "note": "The most rigorous literary and philosophical account of how colonial languages reshape thought — essential reading for anyone designing curriculum in post-colonial contexts."
    },
    {
      "title": "The Challenge of Learning: Improving the Quality of Education in Developing Countries",
      "author": "Akyeampong et al.",
      "year": "2011",
      "note": "Google Scholar — a comparative empirical study of learning outcomes across multiple Global South contexts that moves beyond rhetoric to structural analysis."
    }
  ],
  "quiz": [
    {
      "q": "Nyerere’s Education for Self-Reliance argued colonial education was harmful because:",
      "opts": [
        "It used the wrong languages",
        "It educated children away from their communities, creating elite attitudes and dependency on foreign knowledge",
        "It was too expensive",
        "It focused on agriculture rather than academics"
      ],
      "ans": 1,
      "ex": "Nyerere argued colonial schooling created a small elite that looked outward to Europe, generating dependency rather than the self-reliance Tanzania needed."
    },
    {
      "q": "India’s Right to Education Act (2009) guaranteed:",
      "opts": [
        "Free university education for all Indians",
        "Free and compulsory elementary education for all children aged 6–14",
        "The right to choose any school in the country",
        "Free education including private schools"
      ],
      "ans": 1,
      "ex": "The RTE mandated free, compulsory elementary education for all children 6–14. Implementation has been deeply uneven, with ASER reports showing persistently poor learning outcomes."
    },
    {
      "q": "ASER data on Indian schools primarily shows:",
      "opts": [
        "India has achieved universal enrolment and high learning outcomes",
        "Enrolment has risen significantly but learning outcomes remain very low — millions attend school without basic literacy",
        "Private schools consistently outperform government schools",
        "The mid-day meal scheme dramatically improved academic performance"
      ],
      "ans": 1,
      "ex": "ASER shifted the global conversation from access to learning — showing that despite high enrolment, enormous numbers of children cannot read a Class 2 text or do basic arithmetic."
    },
    {
      "q": "Ngugi wa Thiong’o’s argument about language in education is that:",
      "opts": [
        "Children should learn English as early as possible",
        "Teaching African children in colonial languages devalues indigenous knowledge and severs cultural identity",
        "All African languages should be standardised into one",
        "Language is irrelevant to educational quality"
      ],
      "ans": 1,
      "ex": "Ngugi argues teaching in European languages is a colonisation of the mind — positioning European knowledge as universal and African knowledge as local/inferior."
    },
    {
      "q": "Sub-Saharan Africa’s educational challenge is best characterised as:",
      "opts": [
        "Primarily one of enrolment — children are not in school",
        "A complex interaction of access, teacher quality, learning outcomes, resource constraints, and language policy",
        "Primarily a funding gap that additional aid would solve",
        "A cultural resistance to formal schooling"
      ],
      "ans": 1,
      "ex": "While enrolment has increased, the primary challenge is now quality. High enrolment can coexist with very poor learning outcomes — making the problem complex, not just financial."
    },
    {
      "q": "The learning crisis in global education refers to:",
      "opts": [
        "A shortage of textbooks",
        "Millions of children attending school but not acquiring foundational literacy and numeracy",
        "A decline in university enrolment globally",
        "Teacher strikes disrupting learning"
      ],
      "ans": 1,
      "ex": "The World Bank’s 2018 World Development Report crystallised the learning crisis — hundreds of millions of children spend years in school but emerge unable to read, write, or calculate."
    },
    {
      "q": "Mother-tongue instruction is supported by evidence showing:",
      "opts": [
        "It slows children’s acquisition of official national languages",
        "Children acquire literacy and numeracy faster in familiar languages, with successful transfer later to national languages",
        "It is only effective in countries with few dominant languages",
        "It increases dropout rates"
      ],
      "ans": 1,
      "ex": "Research consistently shows children learn foundational skills faster in familiar languages. UNESCO advocates mother-tongue-based multilingual education."
    },
    {
      "q": "Decolonising the curriculum is contested because critics argue:",
      "opts": [
        "African knowledge systems are inferior",
        "It is unclear what decolonised knowledge looks like in mathematics or science, and who decides",
        "Students prefer colonial-era curricula",
        "It has already been fully achieved"
      ],
      "ans": 1,
      "ex": "Serious critics argue the decolonisation project is clearer as a critique than as a programme — particularly in STEM, where the claim that physics is colonial is philosophically complex."
    },
    {
      "q": "Brazil’s relationship with Freire’s educational legacy is significant because:",
      "opts": [
        "Brazil fully implemented Freire’s pedagogy in all state schools",
        "Under Bolsonaro’s government Freire was explicitly attacked — showing how education is always political",
        "Freire is taught only in private schools in Brazil",
        "Brazil adopted Freire’s methods and achieved the highest literacy rates in Latin America"
      ],
      "ans": 1,
      "ex": "The fact that Brazil’s former president campaigned against Freire demonstrates that educational philosophy is never politically neutral."
    },
    {
      "q": "Low-cost private schools in the Global South are controversial because:",
      "opts": [
        "They only serve wealthy families",
        "Proponents claim they outperform state schools; critics argue they undermine public education and may exploit poor families",
        "They are all foreign-owned",
        "They use exclusively foreign curricula"
      ],
      "ans": 1,
      "ex": "The debate is genuinely contested. Some LCPSs outperform local state schools, but critics argue the solution to poor state schools is to improve them, not abandon them."
    }
  ]
},

{
  "id": "m11",
  "n": 11,
  "phase": 2,
  "days": "72–78",
  "title": "Western Systems Compared",
  "sub": "Germany's tracking, France's grandes écoles, the UK's grammar school debate, the US's decentralisation — and the TVET question in each.",
  "bigIdea": "Each Western system reflects its society's deepest assumptions about meritocracy, equality, and what schooling is for. Comparing them reveals assumptions that usually go unstated — and forces a reckoning with the structural embeddedness of the inequalities each system claims to address.",
  "hook": null,
  "thinkers": [
    {
      "name": "Diane Ravitch",
      "era": "b. 1938",
      "claim": "Market-based reforms have not improved US schools and have systematically undermined public education. Her trajectory from advocate to critic is itself an empirical lesson."
    },
    {
      "name": "Pierre Bourdieu",
      "era": "1930–2002",
      "claim": "France's grandes écoles reproduce elite advantage while appearing meritocratic — the appearance of open competition conceals cultural capital barriers."
    }
  ],
  "schedule": [
    {
      "day": 72,
      "type": "Case",
      "title": "Germany: tracking, Hauptschule crisis, and the dual apprenticeship model",
      "note": "Tripartite system, early selection at 10, growing equity concerns — and how the Ausbildung dual-track vocational system partially compensates. 40 min."
    },
    {
      "day": 73,
      "type": "Case",
      "title": "France: Republican universalism, grandes écoles, and Bourdieu's critique",
      "note": "Competitive meritocracy that is structurally tilted toward those who already have cultural capital. 40 min."
    },
    {
      "day": 74,
      "type": "Case",
      "title": "United Kingdom: comprehensives, grammar schools, academies",
      "note": "The grammar school debate, Thatcher's reform logic, Blair's academies — and the persistent equity evidence. 40 min."
    },
    {
      "day": 75,
      "type": "Read",
      "title": "Ravitch, Reign of Error — Ch. 1–2 only",
      "note": "The empirical case against market-based US education reform. Goodreads / Google Scholar. 45 min."
    },
    {
      "day": 76,
      "type": "Watch",
      "title": "Waiting for Superman (documentary) — watch critically",
      "note": "YouTube: \"Waiting for Superman documentary education\" — 90 min. The pro-charter, anti-union argument. Watch as a primary source for understanding the reform narrative, not as neutral documentary."
    },
    {
      "day": 77,
      "type": "Case",
      "title": "Switzerland: the Berufslehre — a vocational system with no stigma",
      "note": "How Switzerland routes 70% of students through vocational training with higher completion and employment outcomes than comparable academic tracks elsewhere. The equity case for TVET. 35 min."
    },
    {
      "day": 78,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier A Essay (local)",
      "note": "Complete on-site quiz. Write your essay locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Reign of Error — Ch. 1–2 only",
      "author": "Diane Ravitch",
      "year": "2013",
      "note": "The empirical case against market-based reform. Goodreads link in app.",
      "url": "https://goodreads.com/book/show/17262365"
    },
    {
      "type": "Secondary",
      "title": "OECD PISA country profiles — Germany, France, UK, US",
      "author": "OECD",
      "year": "current",
      "note": "Free: oecd.org/en/topics/pisa.html",
      "url": "https://oecd.org/en/topics/pisa.html"
    },
    {
      "type": "Secondary",
      "title": "Swiss vocational education system — OECD review",
      "author": "OECD",
      "year": "various",
      "note": "Google Scholar: \"Swiss vocational education OECD dual track outcomes\"",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier A — Analytical Essay",
    "format": "essay",
    "title": "The Meritocracy Myth",
    "prompt": "In 500–750 words written locally: \"Every Western system examined in this module claims to be meritocratic. None of them is.\" Take a position on this claim. Your essay must engage at least TWO of the four systems studied (Germany, France, UK, US) and use Bourdieu's framework to explain why the appearance of merit-based sorting obscures structural advantage. Address whether there is any system design that could make the meritocracy claim more defensible."
  },
  "optional": [
    {
      "title": "Death and Life of the Great American School System",
      "author": "Diane Ravitch",
      "year": "2010",
      "note": "Ravitch's account of her own intellectual trajectory from pro-reform to pro-public-school — a case study in how exposure to evidence can change a prominent policy expert's position."
    },
    {
      "title": "The German Dual Vocational Education and Training System",
      "author": "BIBB — German Federal Institute",
      "year": "current",
      "note": "Free reports at bibb.de — the most detailed English-language documentation of how the German apprenticeship system actually functions."
    }
  ],
  "quiz": [
    {
      "q": "Germany’s tripartite system directs students at around age 10 into:",
      "opts": [
        "University, vocational, and remedial tracks",
        "Gymnasium (academic), Realschule (technical), and Hauptschule (basic vocational)",
        "Three language streams",
        "Faith, civic, and scientific tracks"
      ],
      "ans": 1,
      "ex": "Germany tracks students at approximately 10–12 into Gymnasium (leads to Abitur and university), Realschule, and Hauptschule. PISA exposed stark equity problems — migration background strongly predicts track placement."
    },
    {
      "q": "France’s grandes écoles system is criticised by Bourdieu because:",
      "opts": [
        "It prioritises the arts over sciences",
        "It appears meritocratic while actually selecting overwhelmingly from wealthy, educated families",
        "It is open only to French citizens",
        "It was imposed by Germany after WWII"
      ],
      "ans": 1,
      "ex": "Grandes écoles are accessed through intensive competitive preparation that primarily wealthy families can support. Cultural capital converts into academic capital, making the entry structurally biased."
    },
    {
      "q": "Ravitch’s position on charter schools changed because:",
      "opts": [
        "Charter schools were defunded",
        "After reviewing the evidence she concluded charters had not improved outcomes while harming public school systems",
        "She was appointed to the Obama administration",
        "New research showed charters were superior in all contexts"
      ],
      "ans": 1,
      "ex": "Ravitch was an early advocate of standards, testing, and school choice. After reviewing NAEP data and charter school research, she concluded charters showed no systematic advantage."
    },
    {
      "q": "The UK grammar school debate centres on:",
      "opts": [
        "Whether Latin should be compulsory",
        "Whether selective state schools improve or harm social mobility",
        "How to fund faith schools",
        "Whether A-levels should be replaced by a Baccalaureate"
      ],
      "ans": 1,
      "ex": "Grammar schools select about 10% of students based on the 11-plus exam. Research shows they benefit middle-class families who can afford preparation, worsening equity for the non-selected majority."
    },
    {
      "q": "The US education system is unusual internationally because:",
      "opts": [
        "It has the highest per-pupil spending in the OECD",
        "It is highly decentralised — control rests with 13,000+ local school districts",
        "It uses only private schools at secondary level",
        "It follows the same curriculum nationally"
      ],
      "ans": 1,
      "ex": "The US has no national curriculum or national examination system. Local districts control curriculum, funding (heavily from local property taxes), and policy."
    },
    {
      "q": "Property-tax based school funding in the US creates inequality because:",
      "opts": [
        "Schools in poor areas have fewer students",
        "Schools in wealthy districts receive more funding from local taxes, amplifying existing socioeconomic advantage",
        "Property taxes only fund private schools",
        "Federal grants offset all local funding differences"
      ],
      "ans": 1,
      "ex": "Because US schools are primarily funded through local property taxes, wealthy districts generate more school revenue — embedding socioeconomic inequality directly into the funding formula."
    },
    {
      "q": "OECD evidence that high-performing systems combine excellence AND equity suggests:",
      "opts": [
        "Equity and excellence are always in tension",
        "Equity and excellence can be mutually reinforcing — investing in all students raises overall performance",
        "Only small homogeneous nations can achieve both",
        "Private schools are necessary to maintain excellence"
      ],
      "ans": 1,
      "ex": "Finland and Canada show that systems explicitly targeting equity can simultaneously achieve high mean performance. The trade-off assumption reflects market logic, not research evidence."
    },
    {
      "q": "The baccalauréat differs from UK A-levels primarily in that it:",
      "opts": [
        "Is the most difficult school-leaving exam in Europe",
        "Is a single national exam certifying completion of secondary education, unlike the modular A-level system",
        "Determines university admissions more than grades",
        "Was abolished after 1968"
      ],
      "ans": 1,
      "ex": "The baccalauréat — nationally set and marked — represents France’s centralist republican tradition. It contrasts sharply with the UK’s subject-based A-levels."
    },
    {
      "q": "Ravitch’s key insight about No Child Left Behind is:",
      "opts": [
        "It successfully raised test scores",
        "High-stakes testing led schools to narrow curriculum to tested subjects, game data, and focus on bubble students",
        "It only applied to private schools",
        "It abolished standardised testing"
      ],
      "ans": 1,
      "ex": "NCLB required annual testing with serious consequences for schools failing targets. Evidence showed curriculum narrowing, teacher gaming of data, and focus on students near proficiency cutoffs."
    },
    {
      "q": "Which best describes the US school funding model’s equity problem?",
      "opts": [
        "Federal funding goes preferentially to poor districts",
        "Property-rich districts generate more school revenue through local taxes, compounding the advantages their students already have",
        "State governments fully equalise funding",
        "Teacher unions drive funding allocation"
      ],
      "ans": 1,
      "ex": "Jonathan Kozol’s Savage Inequalities documented vast per-pupil spending gaps between wealthy suburban and poor urban districts in the same state — driven by property tax funding."
    }
  ]
},

{
  "id": "m12",
  "n": 12,
  "phase": 2,
  "days": "79–85",
  "title": "Human Capital, Professional Culture, and School Leadership",
  "sub": "Teacher quality, Professional Learning Communities, and instructional leadership — the in-school levers that research consistently identifies as decisive.",
  "bigIdea": "Teacher quality is the single strongest in-school predictor of student outcomes. But individual teacher quality is shaped by the professional culture and leadership of the institution. This module examines what the research says about how schools develop — and sustain — professional excellence.",
  "hook": null,
  "thinkers": [
    {
      "name": "John Hattie",
      "era": "b. 1950",
      "claim": "Meta-analysis of 1,400+ studies: teacher clarity, feedback, and teacher-student relationships have the largest in-school effect sizes — by a considerable margin."
    },
    {
      "name": "Linda Darling-Hammond",
      "era": "b. 1951",
      "claim": "Investing in teacher education and working conditions produces better outcomes than accountability frameworks. Systems that trust teachers get better teachers."
    },
    {
      "name": "Richard DuFour",
      "era": "1947–2017",
      "claim": "Professional Learning Communities — collaborative teacher inquiry focused on student learning — are the structural mechanism through which school-level professional culture is built."
    },
    {
      "name": "Michael Fullan",
      "era": "b. 1940",
      "claim": "Reform fails when it imposes structural change without building professional capacity. The moral imperative of system leadership is developing teachers' collective efficacy."
    }
  ],
  "schedule": [
    {
      "day": 79,
      "type": "Read",
      "title": "Hattie, Visible Learning for Teachers — Ch. 1 only",
      "note": "The meta-analysis synthesis: what 1,400+ studies say about in-school effect sizes. Goodreads / Google Scholar. 45 min."
    },
    {
      "day": 80,
      "type": "Read",
      "title": "Chetty, Friedman & Rockoff, \"The Long-Term Impacts of Teachers\" (2014)",
      "note": "Longitudinal evidence: teacher quality in Grades 3–5 predicts lifetime earnings and civic participation. Free PDF: rajchetty.com. 40 min."
    },
    {
      "day": 81,
      "type": "Case",
      "title": "Finland's teacher selection and preparation model",
      "note": "Why teaching in Finland is a selective, high-status, master's-level profession — and what this means for professional culture. 40 min."
    },
    {
      "day": 82,
      "type": "Read",
      "title": "DuFour, \"Professional Learning Communities at Work\" — key findings summary",
      "note": "The PLC model: collective inquiry, collaborative teams, results orientation. Google Scholar for DuFour's accessible summary articles. 40 min."
    },
    {
      "day": 83,
      "type": "Read",
      "title": "Darling-Hammond, The Flat World and Education — Ch. 1 only",
      "note": "What high-performing systems' teacher preparation models share. Goodreads / Google Scholar. 40 min."
    },
    {
      "day": 84,
      "type": "Case",
      "title": "Instructional leadership vs. distributed leadership — what does research say?",
      "note": "Google Scholar: \"instructional leadership distributed leadership school improvement research\" — the evidence on which leadership model most reliably improves student outcomes. 40 min."
    },
    {
      "day": 85,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Roleplay Case (local)",
      "note": "Complete on-site quiz. Write your design brief locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Visible Learning for Teachers — Ch. 1 only",
      "author": "John Hattie",
      "year": "2012",
      "note": "The meta-analysis synthesis for practitioners. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Primary",
      "title": "\"The Long-Term Impacts of Teachers\" (2014)",
      "author": "Chetty, Friedman & Rockoff",
      "year": "2014",
      "note": "Longitudinal evidence on teacher quality effects. Free PDF: rajchetty.com.",
      "url": "https://rajchetty.com/wp-content/uploads/2024/08/w17699.pdf"
    },
    {
      "type": "Secondary",
      "title": "The Flat World and Education — Ch. 1 only",
      "author": "Linda Darling-Hammond",
      "year": "2010",
      "note": "What high-performing teacher preparation systems share. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Secondary",
      "title": "Professional Learning Communities research summary",
      "author": "Richard DuFour",
      "year": "various",
      "note": "Google Scholar: \"DuFour Professional Learning Communities research\" for accessible articles.",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier B — System Design Roleplay Case",
    "format": "roleplay",
    "title": "Design a School Improvement Plan",
    "prompt": "You are appointed as the new principal of a secondary school with 800 students, 60 teachers, and five years of declining results. Staff morale is low, professional development consists of one whole-school INSET day per term, and there is no culture of collaborative planning. You have 3 years, a modest professional development budget, and full control over timetabling. Using DuFour's PLC framework and Fullan's capacity-building principles, write a 3-year school improvement blueprint in three parts: (1) Year 1: structural changes to create conditions for collaboration (150 words). (2) Year 2: building the professional learning culture (150 words). (3) Year 3: evidence of impact and sustainability mechanisms (100 words). Write and save locally."
  },
  "optional": [
    {
      "title": "Professional Learning Communities at Work (full book)",
      "author": "DuFour, DuFour & Eaker",
      "year": "2006",
      "note": "The most comprehensive account of how schools build and sustain collaborative professional cultures — the foundational PLC text."
    },
    {
      "title": "Leading in a Culture of Change",
      "author": "Michael Fullan",
      "year": "2001",
      "note": "Fullan's most accessible synthesis of the moral purpose, knowledge, and relationship-building required for effective school leadership in complex change contexts."
    }
  ],
  "quiz": [
    {
      "q": "Hattie’s Visible Learning identified which factor with among the largest positive effect sizes?",
      "opts": [
        "Class size reduction",
        "Teacher feedback, clarity, and teacher-student relationships",
        "More homework",
        "School uniforms"
      ],
      "ans": 1,
      "ex": "Hattie’s synthesis found feedback, teacher clarity, and teacher-student relationships among the highest-impact interventions — class size reduction showed surprisingly modest effects."
    },
    {
      "q": "Chetty et al.’s 2014 study on teacher quality found that:",
      "opts": [
        "Teacher quality has no measurable effect on adult outcomes",
        "Having a high value-added teacher in Grades 3–5 measurably increases lifetime earnings, college attendance, and civic outcomes",
        "Only secondary school teachers affect long-term outcomes",
        "Teacher quality effects disappear by age 25"
      ],
      "ans": 1,
      "ex": "Chetty’s longitudinal study of millions of US students found significant and lasting effects of teacher quality in elementary grades — extending to earnings, college attendance, and rates of teenage pregnancy."
    },
    {
      "q": "Finland’s teacher system differs from most countries primarily in:",
      "opts": [
        "Teachers are paid twice the OECD average",
        "Teaching is a highly selective, prestigious profession requiring a master’s degree, with high trust and autonomy",
        "Teachers work longer hours than in other countries",
        "Finland pays teachers based on student test score gains"
      ],
      "ans": 1,
      "ex": "Finnish teacher preparation is selective, extended (5-year master’s), research-based, and results in high professional status and autonomy."
    },
    {
      "q": "The value-added model for measuring teacher effectiveness is controversial because:",
      "opts": [
        "It is too expensive",
        "It measures only what standardised tests capture, is statistically unstable year to year, and can distort teaching practice",
        "It underestimates teacher impact",
        "It only works for mathematics teachers"
      ],
      "ans": 1,
      "ex": "Value-added measures have significant year-to-year variance, measure only a narrow band of outcomes, and can pressure teachers to teach to tests rather than develop deeper learning."
    },
    {
      "q": "Darling-Hammond’s argument about teacher education is that:",
      "opts": [
        "Shorter routes produce better teachers",
        "Extended, practice-based preparation rooted in learning science and clinical experience produces more effective teachers",
        "Teacher education has minimal effect on classroom practice",
        "Online teacher education is equally effective"
      ],
      "ans": 1,
      "ex": "Darling-Hammond consistently shows that systems with extended, well-supervised clinical preparation produce more effective teachers than short-route alternatives."
    },
    {
      "q": "The Sanders & Rivers research on cumulative teacher effects showed:",
      "opts": [
        "One great teacher can compensate for poor earlier teaching",
        "Three consecutive years with highly effective vs. ineffective teachers produces a large, cumulative performance gap",
        "Teacher quality effects are modest and fade quickly",
        "Only early childhood teachers have lasting effects"
      ],
      "ans": 1,
      "ex": "Students who experience three consecutive effective versus three consecutive ineffective teachers end up separated by 50 percentile points — a dramatic cumulative effect."
    },
    {
      "q": "Teacher professional development research most consistently supports:",
      "opts": [
        "One-day training workshops",
        "Sustained, job-embedded, collaborative professional learning focused on specific student learning problems",
        "Online courses completed individually",
        "Training workshops led by external consultants"
      ],
      "ans": 1,
      "ex": "Research consistently shows that short, decontextualised training has minimal impact. Sustained professional learning communities produce the most durable improvement."
    },
    {
      "q": "Why is teacher status (social prestige) important for system quality?",
      "opts": [
        "High-status teachers earn more",
        "Teacher status affects who enters teaching — higher status attracts stronger candidates from a wider pool",
        "Status has no relationship to teaching quality",
        "High-status teachers are less likely to leave"
      ],
      "ans": 1,
      "ex": "Where teaching has high social status (Finland, Singapore), strong candidates choose it. Where status is low, teaching struggles to attract and retain talented people."
    },
    {
      "q": "OECD TALIS surveys reveal that teachers in most countries report:",
      "opts": [
        "High levels of professional autonomy and satisfaction",
        "Feeling undervalued, having limited professional learning opportunities, and lacking time for collaboration",
        "Working fewer hours than other professionals",
        "Receiving clear feedback on their performance regularly"
      ],
      "ans": 1,
      "ex": "TALIS consistently shows that teachers in most OECD countries feel their profession is undervalued and lack structured time to collaborate with colleagues."
    },
    {
      "q": "A knowledge-based teacher preparation system would include:",
      "opts": [
        "Longer testing schedules for trainee teachers",
        "Systematic grounding in learning science, child development, subject pedagogy, and extended clinical practice in schools",
        "More university-based coursework on educational philosophy",
        "Higher entry standards based on academic grades alone"
      ],
      "ans": 1,
      "ex": "Darling-Hammond’s research shows effective teacher preparation combines deep knowledge of learning science, subject-specific pedagogy, and extended, supervised clinical experience."
    }
  ]
},

{
  "id": "m13",
  "n": 13,
  "phase": 2,
  "days": "86–87",
  "title": "What Systems Produce",
  "sub": "Connecting system design to human outcomes — social mobility, civic participation, creativity, and the limits of test-score comparison.",
  "bigIdea": "Most system comparisons focus on what students score at age 15. This module asks what systems produce in people across a lifetime — and shows that the correlation between PISA rankings and human flourishing is much weaker than assumed.",
  "hook": null,
  "thinkers": [
    {
      "name": "James Heckman",
      "era": "b. 1944",
      "claim": "Early investment produces the highest returns — but the quality of the whole system determines what those returns look like across a lifetime."
    },
    {
      "name": "Yong Zhao",
      "era": "b. 1965",
      "claim": "High PISA scores and entrepreneurial creativity are in systematic tension. What systems optimised for assessment produce may be exactly what knowledge economies don't need."
    }
  ],
  "schedule": [
    {
      "day": 86,
      "type": "Read",
      "title": "Heckman — Skills, Schools, and Synapses (2008 — NBER working paper)",
      "note": "Google Scholar: \"Heckman Skills Schools Synapses 2008\". The longitudinal argument for what non-cognitive skills schools should develop. 45 min."
    },
    {
      "day": 87,
      "type": "Reflect",
      "title": "Synthesis: What do Phase 2 systems actually produce?",
      "note": "500 words locally. Choose any two systems from Modules 08–12. What do they produce beyond test scores — social mobility, civic participation, creativity, wellbeing? Use Heckman and Zhao as analytical lenses. Write locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "\"Skills, Schools, and Synapses\" (2008)",
      "author": "James Heckman",
      "year": "2008",
      "note": "The longitudinal case for non-cognitive skill development. Google Scholar: NBER working paper.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Secondary",
      "title": "The Spirit Level — Ch. 5 (Education)",
      "author": "Wilkinson & Pickett",
      "year": "2009",
      "note": "Income inequality and educational outcomes. ResearchGate / Google Scholar.",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier A — Reflective Essay",
    "format": "essay",
    "title": "What Are Schools Actually Producing?",
    "prompt": "In 500 words written locally: choose ONE Phase 2 system and evaluate it by Heckman's non-cognitive skill development criteria rather than PISA scores. What does it produce? What does it fail to produce? What would have to change for it to score well on both dimensions?"
  },
  "optional": [
    {
      "title": "The Case Against Education",
      "author": "Bryan Caplan",
      "year": "2018",
      "note": "A provocative economic argument that most of what schools produce is signalling, not human capital — useful as a critical counterpoint to the investment framework, even if ultimately overstated."
    }
  ],
  "quiz": [
    {
      "q": "Heckman’s rate-of-return graph shows the highest educational returns from investment in:",
      "opts": [
        "University level",
        "During primary school years",
        "Early childhood (ages 0–5)",
        "During secondary school"
      ],
      "ans": 2,
      "ex": "Heckman’s evidence shows that investment in human capital produces the highest returns when made earliest — partly because early development is a prerequisite for later learning."
    },
    {
      "q": "Chetty et al.’s finding about early grade teacher quality shows:",
      "opts": [
        "No effect on adult outcomes",
        "Measurably higher lifetime earnings, college attendance, and civic outcomes from high value-added teachers in Grades 3–5",
        "Only academic performance in the same year is affected",
        "Girls are affected more than boys"
      ],
      "ans": 1,
      "ex": "Chetty’s longitudinal study traced millions of students into adulthood. Students who had higher value-added teachers in early grades earned more and were more likely to attend college."
    },
    {
      "q": "Zhao’s creativity-achievement paradox argues:",
      "opts": [
        "High-achieving students are always more creative",
        "Nations topping PISA rankings systematically suppress creativity and entrepreneurship that modern economies need",
        "Creativity cannot be taught in schools",
        "East Asian students are naturally less creative"
      ],
      "ans": 1,
      "ex": "Zhao argues China’s test-driven system produces students who excel at defined tasks but struggle with innovation, creative risk-taking, and entrepreneurial initiative."
    },
    {
      "q": "Wilkinson and Pickett’s Spirit Level data on education shows:",
      "opts": [
        "Wealthy countries always have the best education outcomes",
        "More equal societies consistently outperform unequal ones on educational outcomes, independent of overall wealth",
        "Education spending is the key variable",
        "Private schools raise national performance"
      ],
      "ans": 1,
      "ex": "The Spirit Level data shows that income inequality — not just wealth — correlates with educational outcomes. More equal societies perform better on average."
    },
    {
      "q": "The most important policy implication of Heckman’s work is:",
      "opts": [
        "University funding should be the priority",
        "Early childhood education is the highest-return investment a government can make",
        "Primary school quality matters more than early childhood",
        "Adult skills training is most cost-effective"
      ],
      "ans": 1,
      "ex": "Heckman consistently shows that the return on educational investment is highest in the earliest years. This challenges budget allocation that concentrates resources on higher education."
    }
  ]
},

{
  "id": "m14",
  "n": 14,
  "phase": 3,
  "days": "88–94",
  "title": "Special Education, Inclusion, and Neurodiversity",
  "sub": "From segregation to mainstreaming — the history, philosophy, and evidence on educating students with diverse needs.",
  "bigIdea": "How a school system treats its most vulnerable students reveals its deepest values. The debate between full inclusion and specialist provision is not resolved by research — it is a genuine conflict between competing goods. This module gives you the frameworks to navigate it honestly.",
  "hook": null,
  "thinkers": [
    {
      "name": "UNESCO — Salamanca Statement",
      "era": "1994",
      "claim": "All children should be educated together in mainstream schools wherever possible — the founding text of the global inclusive education movement."
    },
    {
      "name": "Mel Ainscow",
      "era": "contemporary",
      "claim": "Inclusive education is not about placing disabled students in mainstream classrooms. It is about transforming those classrooms to be responsive to all learners."
    }
  ],
  "schedule": [
    {
      "day": 88,
      "type": "Read",
      "title": "UNESCO Salamanca Statement (1994) — full text",
      "note": "The founding document of inclusive education policy. Free: unesdoc.unesco.org. 30 min."
    },
    {
      "day": 89,
      "type": "Case",
      "title": "History of special education: from segregation to inclusion",
      "note": "YouTube: \"history of special education disability mainstreaming\" — how 20th-century policy moved from institutional care to mainstreaming to the current inclusive education framework. 40 min."
    },
    {
      "day": 90,
      "type": "Read",
      "title": "Ainscow, \"Developing Inclusive Education Systems\" (2005)",
      "note": "What inclusion actually requires structurally. ResearchGate — open access. 35 min."
    },
    {
      "day": 91,
      "type": "Case",
      "title": "Neurodiversity and schooling: dyslexia, ADHD, autism",
      "note": "Google Scholar: \"neurodiversity learning schools ADHD dyslexia autism inclusive\" — what research shows about effective approaches for neurodivergent learners. 40 min."
    },
    {
      "day": 92,
      "type": "Case",
      "title": "Finland and Italy: contrasting approaches to special education",
      "note": "Finland's early intervention model vs. Italy's 1977 law (the most radical national inclusion mandate in the world). 35 min."
    },
    {
      "day": 93,
      "type": "Reflect",
      "title": "Debate: Is full inclusion always preferable to specialist settings?",
      "note": "400 words locally. Take a clear position with evidence. This is a genuinely contested question — intellectual honesty requires engaging the strongest version of the opposing view."
    },
    {
      "day": 94,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Policy Memo (local)",
      "note": "Complete on-site quiz. Write your memo locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "UNESCO Salamanca Statement (1994)",
      "author": "UNESCO",
      "year": "1994",
      "note": "The foundational text. Free: UNESCO Digital Library.",
      "url": "https://unesdoc.unesco.org/ark:/48223/pf0000098427"
    },
    {
      "type": "Primary",
      "title": "\"Developing Inclusive Education Systems\" (2005)",
      "author": "Mel Ainscow",
      "year": "2005",
      "note": "What inclusion requires structurally. ResearchGate — open access.",
      "url": "https://researchgate.net/publication/43501703"
    },
    {
      "type": "Secondary",
      "title": "Dilemmas of Difference: Inclusion and Disability",
      "author": "Brahm Norwich",
      "year": "2008",
      "note": "The philosophical framework for navigating genuine conflicts between inclusion and specialist provision. Google Scholar.",
      "url": "https://scholar.google.com"
    }
  ],
  "assessment": {
    "tier": "Tier B — Adversarial Policy Memo",
    "format": "memo",
    "title": "Against Forced Inclusion",
    "prompt": "A national policy proposes closing all specialist schools for students with severe learning disabilities and placing all students in mainstream schools by 2030. A disability advocacy group argues this is harmful. In 400 words: (1) Present the strongest empirical argument FOR the policy using Ainscow's framework. (2) Present the strongest empirical argument AGAINST using Norwich's dilemmas framework. (3) Propose a more defensible policy that takes both arguments seriously. Write and save locally."
  },
  "optional": [
    {
      "title": "Dilemmas of Difference: Inclusion and Disability",
      "author": "Brahm Norwich",
      "year": "2008",
      "note": "The most philosophically rigorous account of why the inclusion debate cannot be resolved by invoking rights or research alone — genuine value conflicts require navigation, not resolution."
    },
    {
      "title": "The Twice Exceptional Student",
      "author": "various authors",
      "year": "ongoing",
      "note": "Google Scholar: \"twice exceptional gifted learning disability education\" — the empirical and pedagogical literature on students who are simultaneously gifted and have learning disabilities."
    }
  ],
  "quiz": [
    {
      "q": "The UNESCO Salamanca Statement (1994) declared:",
      "opts": [
        "All schools should teach religion",
        "Education for all including students with special needs in mainstream schools — the foundational text of inclusive education",
        "Standardised testing should be abolished",
        "Mother-tongue instruction is mandatory"
      ],
      "ans": 1,
      "ex": "Salamanca committed over 90 governments to inclusive education — the principle that students with special educational needs should, wherever possible, be educated in mainstream schools with appropriate support."
    },
    {
      "q": "Ainscow’s argument about inclusion is that:",
      "opts": [
        "Disabled students should always be in mainstream classrooms",
        "Inclusion is not about placement but about transforming schools to be responsive to all learners",
        "Special schools are always preferable",
        "Inclusion is too expensive"
      ],
      "ans": 1,
      "ex": "Ainscow argues genuine inclusion requires systemic change — in curriculum, pedagogy, assessment, and school culture — not simply placing students with special needs in mainstream settings without those changes."
    },
    {
      "q": "The main argument AGAINST full inclusion for all students is:",
      "opts": [
        "Students with disabilities reduce average test scores",
        "Some students require specialised intensive support that mainstream settings cannot adequately provide even with additional resources",
        "Inclusion is too expensive",
        "Disabled students distract other learners"
      ],
      "ans": 1,
      "ex": "Serious critics of full inclusion argue that for students with complex needs, specialist settings with concentrated expertise can better meet their needs than mainstreaming with inadequate support."
    },
    {
      "q": "Neurodiversity as a concept argues:",
      "opts": [
        "Learning differences are disorders that need to be fixed",
        "Neurological differences like dyslexia, ADHD, and autism represent natural human variation that schools should accommodate rather than pathologise",
        "All students should be taught in exactly the same way",
        "Neurodivergent students should always be in separate settings"
      ],
      "ans": 1,
      "ex": "The neurodiversity movement argues that neurological difference is natural human variation. It challenges deficit models that position divergent learners as problems to be fixed."
    },
    {
      "q": "Finland’s approach to special educational needs differs from many countries in its emphasis on:",
      "opts": [
        "Placing all students with learning difficulties in separate schools",
        "Early, flexible, preventive support within mainstream settings before formal diagnosis is required",
        "Extensive standardised testing to identify special needs",
        "Separate funding streams controlled by special education teachers"
      ],
      "ans": 1,
      "ex": "Finland’s model emphasises early identification and flexible support within mainstream schools — tiered intervention and early response — before students are categorised and separated."
    },
    {
      "q": "The history of special education in the 20th century moved primarily from:",
      "opts": [
        "Inclusion to segregation",
        "Institutional segregation to mainstreaming to, more recently, inclusive education in mainstream settings",
        "Mainstream inclusion to separate institutions",
        "Charitable provision to fully privatised systems"
      ],
      "ans": 1,
      "ex": "The 20th century saw a dramatic shift: from large institutional care to mainstreaming in the 1970s–80s to the current inclusive education movement following Salamanca."
    },
    {
      "q": "Research on inclusion outcomes generally shows:",
      "opts": [
        "Inclusive settings always produce better academic outcomes",
        "Results are mixed and context-dependent — quality of support within mainstream settings is the critical variable",
        "Specialist settings always produce better outcomes",
        "Inclusion has no effect on outcomes for non-disabled students"
      ],
      "ans": 1,
      "ex": "The research literature is genuinely mixed. What consistently matters is the quality of support, teaching, and curriculum within whichever setting a student attends."
    },
    {
      "q": "The Individual Education Plan (IEP) concept is significant because:",
      "opts": [
        "It standardises education for all students with disabilities",
        "It establishes that students with special needs have a legal right to a personalised educational programme designed for their specific needs",
        "It exempts students with disabilities from standardised testing",
        "It is only used in the United States"
      ],
      "ans": 1,
      "ex": "The IEP principle establishes that education for students with disabilities should be individually planned, goal-directed, and regularly reviewed — a revolutionary shift from one-size-fits-all approaches."
    },
    {
      "q": "Which country is most often cited as a model for inclusive education?",
      "opts": [
        "United States",
        "Italy — which mandated full inclusion in mainstream schools in 1977, decades before most countries",
        "Finland",
        "Japan"
      ],
      "ans": 1,
      "ex": "Italy’s Law 517 (1977) mandated the closure of special schools and full inclusion of students with disabilities in mainstream classrooms — the most radical national inclusion policy in the world, predating Salamanca by 17 years."
    },
    {
      "q": "Universal Design for Learning (UDL) proposes that:",
      "opts": [
        "Schools should be physically accessible to wheelchair users",
        "Curriculum and instruction should be designed from the outset to be accessible to the full range of learners, reducing the need for individual accommodations",
        "All students should use the same learning materials",
        "Technology can solve all accessibility challenges"
      ],
      "ans": 1,
      "ex": "UDL applies universal design to education — arguing that flexible, multimodal curriculum design benefits all learners, not just those with identified special needs."
    }
  ]
},

{
  "id": "m15",
  "n": 15,
  "phase": 3,
  "days": "95–101",
  "title": "Education Reform — What Works and Why It Is Hard",
  "sub": "The remarkable record of reform failure. What Finland, Ontario, and Singapore did differently. The politics of capacity-building versus accountability-first reform.",
  "bigIdea": "Education reform has a remarkable record of failure — not because reformers are incompetent but because they consistently misdiagnose what needs to change. This module produces principles that distinguish the rare successes from the common failures.",
  "hook": null,
  "thinkers": [
    {
      "name": "Michael Fullan",
      "era": "b. 1940",
      "claim": "Reform fails when it imposes structural change without building professional capacity. The grammar of schooling — and teachers' professional culture — must change from within."
    },
    {
      "name": "Larry Cuban",
      "era": "b. 1934",
      "claim": "Teaching has been structurally stable for over a century despite repeated reform waves. Reforms change vocabulary; the grammar persists."
    },
    {
      "name": "Barber & Mourshed",
      "era": "2007 McKinsey Report",
      "claim": "The quality of an education system cannot exceed the quality of its teachers. The pipeline — selection, preparation, ongoing development — is the central lever."
    }
  ],
  "schedule": [
    {
      "day": 95,
      "type": "Read",
      "title": "Fullan, The New Meaning of Educational Change — Ch. 1 only",
      "note": "Why reform fails: the change process, not the change content, is what most reformers neglect. Goodreads / Google Scholar. 45 min."
    },
    {
      "day": 96,
      "type": "Read",
      "title": "Barber & Mourshed, \"How the World's Best-Performing School Systems Come Out on Top\" (2007)",
      "note": "Free McKinsey PDF. The pipeline argument: selection, preparation, support. 40 min. Free: mckinsey.com/industries/education/our-insights/how-the-worlds-best-performing-school-systems-come-out-on-top"
    },
    {
      "day": 97,
      "type": "Case",
      "title": "Finland's 1970s comprehensive school reform",
      "note": "What political conditions, teacher union partnership, and decade-long timelines made it possible — and what other countries get wrong when they try to copy it. 40 min."
    },
    {
      "day": 98,
      "type": "Case",
      "title": "Ontario's turnaround: Fullan's capacity-building in practice",
      "note": "Surpassing Shanghai (Ontario chapter). How a province went from mediocre to excellent without high-stakes accountability. Free: HEPG. 40 min."
    },
    {
      "day": 99,
      "type": "Watch",
      "title": "Michael Fullan on system thinking and change",
      "note": "YouTube search: \"Michael Fullan coherence educational change\" — most recent available lecture. 30 min."
    },
    {
      "day": 100,
      "type": "Reflect",
      "title": "Five principles of successful education reform",
      "note": "300 words locally. Draft your own five-principle framework for reform that is likely to succeed. Ground each principle in at least one case or research finding from this module."
    },
    {
      "day": 101,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Roleplay Case (local)",
      "note": "Complete on-site quiz. Write your roleplay brief locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "The New Meaning of Educational Change — Ch. 1 only",
      "author": "Michael Fullan",
      "year": "2001",
      "note": "The change process argument. Goodreads link in app.",
      "url": "https://goodreads.com/book/show/436571"
    },
    {
      "type": "Primary",
      "title": "\"How the World's Best-Performing School Systems Come Out on Top\" (2007)",
      "author": "Barber & Mourshed",
      "year": "2007",
      "note": "The teacher pipeline argument. Free McKinsey PDF.",
      "url": "https://mckinsey.com/industries/education/our-insights/how-the-worlds-best-performing-school-systems-come-out-on-top"
    },
    {
      "type": "Secondary",
      "title": "Surpassing Shanghai — Ontario chapter",
      "author": "Tucker (ed.)",
      "year": "2011",
      "note": "Ontario's capacity-building turnaround. HEPG link in app.",
      "url": "https://hepg.org/hep-home/books/surpassing-shanghai"
    },
    {
      "type": "Secondary",
      "title": "Coherence: The Right Drivers in Action",
      "author": "Fullan & Quinn",
      "year": "2016",
      "note": "The coherence framework for system-level change. Goodreads link in app.",
      "url": "https://goodreads.com/book/show/25734067"
    }
  ],
  "assessment": {
    "tier": "Tier B — System Design Roleplay Case",
    "format": "roleplay",
    "title": "Reform the Unreformable",
    "prompt": "You are appointed Education Minister of a country with a 40-year record of failed school reforms. Three previous ministers introduced standardised testing (abandoned after 4 years), school autonomy (reversed after 2 years), and a technology-first programme (defunded after 3 years). Teachers are demoralised. Public trust in the ministry is at an all-time low. You have 5 years and a fixed budget. Design a reform programme in three parts: (1) What you will NOT do, and why (100 words). (2) Your first 18 months — what specifically, and in what order (200 words). (3) How you will know it is working, using measures other than test scores (100 words). Write and save locally."
  },
  "optional": [
    {
      "title": "The New Meaning of Educational Change (full book)",
      "author": "Michael Fullan",
      "year": "2001",
      "note": "The most comprehensive account of the change process in education — Fullan's sustained argument for why moral purpose, knowledge, relationships, and coherence are all necessary conditions for lasting reform."
    },
    {
      "title": "Leading in a Culture of Change",
      "author": "Michael Fullan",
      "year": "2001",
      "note": "The leadership dimensions of system change — how to build collective capacity rather than imposing compliance."
    }
  ],
  "quiz": [
    {
      "q": "Fullan’s central argument about why education reform fails is:",
      "opts": [
        "Governments do not invest enough money",
        "Reform focuses on structural changes rather than changing the cultural and professional conditions in which teaching happens",
        "Teacher unions block all reform",
        "Parents do not support change"
      ],
      "ans": 1,
      "ex": "Fullan consistently argues that restructuring (changing governance, creating charter schools) without reculturing (changing professional norms, building teacher capacity) produces change in form but not in practice."
    },
    {
      "q": "Larry Cuban’s How Teachers Taught showed that classroom practice:",
      "opts": [
        "Changed dramatically with each reform wave",
        "Remained remarkably stable — teacher-fronted whole-class instruction persisted across reform waves",
        "Improved steadily over time",
        "Was primarily determined by curriculum standards"
      ],
      "ans": 1,
      "ex": "Cuban’s historical study found that despite progressive reforms and repeated policy mandates, teacher-centred instruction dominated classrooms across the 20th century."
    },
    {
      "q": "Finland’s 1970s comprehensive school reform succeeded partly because:",
      "opts": [
        "Finland bypassed democratic processes",
        "There was broad political consensus, teacher union partnership, a long implementation timeline, and investment in teacher education",
        "Finland adopted the British comprehensive model directly",
        "International aid funded the entire transformation"
      ],
      "ans": 1,
      "ex": "Finland’s peruskoulu reform (1968–1977) was built on unusual political consensus, active teacher union participation, a decade-long rollout, and massive investment in teacher education quality."
    },
    {
      "q": "The Barber & Mourshed report’s most quoted finding is:",
      "opts": [
        "Class size is the most important factor",
        "The quality of an education system cannot exceed the quality of its teachers — teacher recruitment and development are the central levers",
        "Funding is the primary driver",
        "Technology is transforming how systems improve"
      ],
      "ans": 1,
      "ex": "The 2007 McKinsey report synthesised evidence from 25 top-performing school systems and concluded that teacher quality — who enters teaching, how they are trained, how they are supported — is the central lever for system improvement."
    },
    {
      "q": "Fullan’s Christmas tree school problem refers to:",
      "opts": [
        "Schools that over-decorate their buildings",
        "Schools that adopt every new initiative without integrating them — initiatives pile up and nothing is done deeply",
        "Schools that only improve at year-end assessment periods",
        "Schools that prioritise appearance over substance in inspections"
      ],
      "ans": 1,
      "ex": "Fullan’s Christmas tree metaphor describes schools that hang every new initiative on their existing structure — none of them changing core practice because there is no coherent theory of improvement."
    },
    {
      "q": "Why is 10 years often cited as the minimum timeline for genuine system reform?",
      "opts": [
        "It takes 10 years to train a new generation of teachers",
        "Deep changes in professional culture, curriculum, and practice require years of consistent supported implementation before they become embedded",
        "Government political cycles require 10-year planning horizons",
        "Research shows faster reform always fails"
      ],
      "ans": 1,
      "ex": "Fullan, Sahlberg, and others consistently note that systems that improved sustainably — Finland, Ontario, Singapore — did so over decades, not government terms."
    },
    {
      "q": "Lateral capacity building means:",
      "opts": [
        "Building school buildings laterally",
        "Schools and teachers learning from each other rather than from central mandates or external experts",
        "Building teacher capacity at the local authority level",
        "Lateral thinking applied to curriculum design"
      ],
      "ans": 1,
      "ex": "Hargreaves and Fullan argue that professional learning between schools — peer observation, collaborative curriculum work, school-to-school improvement partnerships — produces more sustained improvement than top-down training."
    },
    {
      "q": "Cuban’s work suggests the most powerful force maintaining stable classroom practice is:",
      "opts": [
        "Teacher union resistance to change",
        "The deep structure of schooling — age-grading, subject divisions, timetabling — that persists beneath reform initiatives",
        "Parental preference for traditional teaching",
        "A global convergence on direct instruction methods"
      ],
      "ans": 1,
      "ex": "Cuban argues the grammar of schooling — age-graded classes, 45-minute periods, subject specialisation, individual seats — is so deeply embedded that reforms that don’t address this structure are absorbed and neutralised."
    },
    {
      "q": "Which reform strategy does the evidence most consistently support?",
      "opts": [
        "Introducing competition between schools through choice and vouchers",
        "Closing failing schools and reopening them as charter schools",
        "Building teacher professional capacity through sustained collaborative learning and coherent curriculum",
        "Increasing the length of the school day and year"
      ],
      "ans": 2,
      "ex": "The evidence base most consistently supports teacher professional development — particularly collaborative, job-embedded, sustained learning — as the route to improved outcomes."
    },
    {
      "q": "The most honest summary of what we know about education reform is:",
      "opts": [
        "Most reforms fail because they are underfunded",
        "Reform consistently fails when it prioritises accountability over capacity — and the political conditions for patient, trust-based reform are rare",
        "Teacher unions are the primary barrier to all improvement",
        "Technology-based reform is the only scalable solution"
      ],
      "ans": 1,
      "ex": "Fullan, Cuban, Sahlberg, and the international evidence converge: structural, accountability-first, rapidly-implemented reform consistently underperforms — but the political conditions for patient, capacity-building reform are genuinely rare."
    }
  ]
},

{
  "id": "m16",
  "n": 16,
  "phase": 3,
  "days": "102–105",
  "title": "Technology, AI, and the Future of School",
  "sub": "From film to MOOCs to AI — why technology consistently fails to transform education, and what is genuinely novel now.",
  "bigIdea": "Every generation has believed a new technology would transform education. Every generation has been mostly wrong. This module asks what — if anything — is genuinely different about AI: and what school will remain irreplaceably for when content delivery is no longer a bottleneck.",
  "hook": null,
  "thinkers": [
    {
      "name": "Larry Cuban",
      "era": "b. 1934",
      "claim": "Technology amplifies existing practice rather than transforming it. The pattern has held from film through radio through television through computers."
    },
    {
      "name": "Neil Postman",
      "era": "1931–2003",
      "claim": "Technology is never neutral. It comes with an ideology — assumptions about efficiency, measurement, and the reduction of human relationship to information exchange."
    },
    {
      "name": "Kentaro Toyama",
      "era": "contemporary",
      "claim": "Technology amplifies human intent — in strong systems it adds value, in weak ones it amplifies dysfunction. It cannot substitute for teacher quality or political will."
    }
  ],
  "schedule": [
    {
      "day": 102,
      "type": "Read",
      "title": "Cuban, Oversold and Underused — Introduction only",
      "note": "The historical pattern: film, radio, TV, computers — all promised transformation, all absorbed by the grammar of schooling. Goodreads / Google Scholar. 40 min."
    },
    {
      "day": 103,
      "type": "Watch",
      "title": "Sugata Mitra — Build a School in the Cloud (TED, 2013)",
      "note": "ted.com/talks/sugata_mitra_build_a_school_in_the_cloud — 22 min. Watch critically: what does the Hole in the Wall actually demonstrate, and what does Mitra extrapolate beyond the evidence?"
    },
    {
      "day": 104,
      "type": "Read",
      "title": "Luckin et al., Intelligence Unleashed (2016)",
      "note": "The case for AI in education. Free Google PDF. 40 min. Search: \"Intelligence Unleashed Luckin 2016 PDF\""
    },
    {
      "day": 105,
      "type": "Quiz + Assign",
      "title": "Module quiz + Tier B Policy Memo (local)",
      "note": "Complete on-site quiz. Write your final debate essay locally."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Oversold and Underused — Introduction only",
      "author": "Larry Cuban",
      "year": "2001",
      "note": "The historical amplification pattern. Google Scholar / Goodreads.",
      "url": "https://goodreads.com/book/show/1035022"
    },
    {
      "type": "Primary",
      "title": "Intelligence Unleashed (2016)",
      "author": "Luckin et al.",
      "year": "2016",
      "note": "AI in education — the case. Free PDF.",
      "url": "https://static.googleusercontent.com/media/edu.google.com/en//pdfs/Intelligence-Unleashed-Publication.pdf"
    },
    {
      "type": "Secondary",
      "title": "OECD AI and the Future of Education (2023)",
      "author": "OECD",
      "year": "2023",
      "note": "Free OECD publication.",
      "url": "https://oecd.org/en/publications/ai-and-the-future-of-education_d59e8b56-en.html"
    },
    {
      "type": "Secondary",
      "title": "Geek Heresy — Ch. 1 only",
      "author": "Kentaro Toyama",
      "year": "2015",
      "note": "Technology as amplifier. Google Scholar / Goodreads.",
      "url": "https://goodreads.com/book/show/22928545"
    }
  ],
  "assessment": {
    "tier": "Tier B — Adversarial Policy Memo",
    "format": "memo",
    "title": "AI Will Not Fix This",
    "prompt": "A government proposes replacing 30% of classroom teachers with AI tutoring systems within 5 years, arguing that personalised AI instruction will eliminate the teacher quality problem and reduce education costs by 40%. In 400 words: (1) Use Cuban's amplification thesis to explain what this proposal misunderstands about how technology enters school systems. (2) Use Postman's ideological critique to identify one hidden assumption embedded in the \"personalised AI instruction\" framing. (3) Propose what AI should be used for instead, and what it should not be. Write and save locally."
  },
  "optional": [
    {
      "title": "Teachers and Machines: The Classroom Use of Technology Since 1920",
      "author": "Larry Cuban",
      "year": "1986",
      "note": "The historical foundation of Cuban's argument — documenting 60 years of transformative technology promises in education that were absorbed without structural change."
    },
    {
      "title": "The New Education: How to Revolutionize the University to Prepare Students for a World in Flux",
      "author": "Cathy Davidson",
      "year": "2017",
      "note": "A more optimistic account of how digital tools can genuinely reshape pedagogy — a necessary counterpoint to Cuban's historical scepticism."
    }
  ],
  "quiz": [
    {
      "q": "Cuban’s amplification effect in EdTech means:",
      "opts": [
        "Technology amplifies teacher voices in classrooms",
        "Technology tends to make existing educational practice more efficient rather than transforming it — amplifying good teaching and bad teaching alike",
        "AI amplifies student learning automatically",
        "EdTech amplifies inequality between rich and poor students"
      ],
      "ans": 1,
      "ex": "Cuban argues technology deployed in schools amplifies existing pedagogy rather than changing it. A teacher who delivers engaging lessons uses technology to make that richer; a teacher who drills tests uses technology to drill more tests."
    },
    {
      "q": "MOOCs failed to democratise higher education primarily because:",
      "opts": [
        "They were too expensive",
        "Completion rates are extremely low (3–15%) and completers are already highly educated — they served existing privilege",
        "Universities blocked access",
        "Technology was not advanced enough"
      ],
      "ans": 1,
      "ex": "MOOC advocates predicted they would open elite education globally. Research showed completion rates of 3–15%, and most completers were already university-educated professionals."
    },
    {
      "q": "Postman’s concern about educational technology was:",
      "opts": [
        "Computers are too expensive for schools",
        "Technology brings an ideology — assumptions about efficiency, measurement, and the reduction of human relationship to information exchange — that reshapes education in its own image",
        "Teachers cannot be trained to use technology",
        "Technology distracts students from content"
      ],
      "ans": 1,
      "ex": "Postman argued technology is never neutral — it embeds a particular epistemology. Reducing education to information delivery via screens accepts technology’s frame, potentially marginalising what is most irreplaceable about human teachers."
    },
    {
      "q": "Sugata Mitra’s hole-in-the-wall experiments showed:",
      "opts": [
        "Children can fully replace teachers with computers",
        "Children in poor Indian communities taught themselves to use computers — but his extrapolation to deschooling was widely critiqued as overstated",
        "Self-directed learning is impossible without adult supervision",
        "Government schools are the most effective learning environments"
      ],
      "ans": 1,
      "ex": "Mitra’s experiments were genuinely interesting. But critics argue his conclusion that teachers are unnecessary dramatically overstated what the experiments showed."
    },
    {
      "q": "What does school provide that an AI tutor currently cannot replicate?",
      "opts": [
        "Content delivery in multiple subjects",
        "Social learning, civic formation, peer relationships, identity development, and human mentorship",
        "Assessment and feedback on written work",
        "Vocabulary acquisition"
      ],
      "ans": 1,
      "ex": "Current consensus is that while AI can deliver content and provide feedback, it cannot replicate what school provides socially: safe peer relationships, democratic participation practice, adult mentorship, and identity formation."
    },
    {
      "q": "The digital divide in educational technology means:",
      "opts": [
        "The difference between digital and analogue teaching methods",
        "Unequal access to devices, connectivity, and digital literacy that means technology tends to amplify existing educational inequality",
        "The gap between what EdTech companies promise and deliver",
        "Differences in how teachers use digital tools"
      ],
      "ans": 1,
      "ex": "The digital divide means EdTech benefits disproportionately accrue to already-advantaged students. COVID remote schooling dramatically illustrated this."
    },
    {
      "q": "Cuban’s historical evidence about technology in schools covers:",
      "opts": [
        "Only computers since 1980",
        "Film (1920s), radio (1930s), and television (1950s) — each predicted to transform education but absorbed without fundamental change",
        "Only the internet era from 1995",
        "Only AI and machine learning"
      ],
      "ans": 1,
      "ex": "Cuban’s Teachers and Machines (1986) documented that film, radio, and television were each predicted to transform education. Each was absorbed by schooling without fundamentally changing pedagogy."
    },
    {
      "q": "The most defensible position on AI in education is:",
      "opts": [
        "AI will replace teachers within 10 years",
        "AI will have no impact on education",
        "AI will significantly change some aspects of learning — particularly content delivery and feedback — while leaving others, especially the social and relational, largely intact",
        "AI is already transforming education as we speak"
      ],
      "ans": 2,
      "ex": "The evidence-informed position distinguishes between what AI can plausibly do well (content delivery, feedback, personalisation) and what it cannot replicate (human relationships, civic formation, community)."
    },
    {
      "q": "Luckin et al.’s Intelligence Unleashed argues AI in education should focus on:",
      "opts": [
        "Replacing teachers to reduce costs",
        "Developing students’ metacognitive skills — their ability to learn how to learn — rather than simply delivering content",
        "Standardising curricula globally",
        "Reducing the need for schools as physical institutions"
      ],
      "ans": 1,
      "ex": "Luckin’s framework argues AI is most valuable in education when it helps students develop metacognition — awareness of their own learning processes — rather than automating content delivery."
    },
    {
      "q": "The Geek Heresy argument about technology in education is:",
      "opts": [
        "Technology is the primary solution to educational inequality",
        "Technology amplifies human intent — in strong systems it adds value, in weak ones it amplifies dysfunction; it cannot substitute for good pedagogy, teacher quality, or political will",
        "Technology is harmful in all educational contexts",
        "Developing countries should prioritise technology over teacher training"
      ],
      "ans": 1,
      "ex": "Toyama argues technology is an amplifier: it makes good things better and bad things worse. This explains both genuine successes and spectacular failures of educational technology."
    }
  ]
},

{
  "id": "m17",
  "n": 17,
  "phase": 3,
  "days": "106–110",
  "title": "Indian School Education: Structure, Pressure, and Purpose",
  "sub": "From Wood's Despatch to NEP 2020 — tracing the colonial grammar of Indian schooling, the independence-era clashes, the post-colonial structural ceiling, and the contemporary learning crisis.",
  "bigIdea": "India's school system is not broken — it is doing exactly what it was designed to do. Each layer of its design has a traceable historical origin: colonial compliance machinery, post-independence bureaucratic expansion, and a meritocracy built for elimination rather than formation. This module applies the full course toolkit — colonial history (M02), banking model (M01), structural reproduction (M06), reform theory (M15) — to one of the world's most consequential school systems.",
  "hook": null,
  "thinkers": [
    {
      "name": "Krishna Kumar",
      "era": "b. 1948",
      "claim": "Indian schooling inherited a colonial pedagogy built for compliance and textbook authority. His analysis of Wood's Despatch through to contemporary curriculum is the definitive account of how the grammar of Indian schooling was set."
    },
    {
      "name": "Mahatma Gandhi",
      "era": "1869–1948",
      "claim": "Nai Talim — Basic Education — proposed craft-centred, community-rooted, mother-tongue instruction as the anti-colonial alternative. The state's rejection of this blueprint at independence was a structural pivot point."
    },
    {
      "name": "Madhav Chavan / Pratham",
      "era": "contemporary",
      "claim": "ASER data dismantles the enrolment-as-success narrative. Millions attend school; millions cannot read. The learning crisis is the cumulative product of every structural decision traced in this module."
    }
  ],
  "schedule": [
    {
      "day": 106,
      "type": "Read",
      "title": "Wood's Despatch (1854) — selected passages + Kumar, Political Agenda of Education — Ch. 2 (\"Colonial Citizen\")",
      "note": "Wood's Despatch: the 1854 document that formalised colonial education policy — search Internet Archive or Google Scholar for: Woods Despatch 1854 Indian education full text. Then: Kumar Ch. 2 — the institutional focus was never universal education, but a rigid mechanism of socialisation and compliance that cemented the textbook as supreme authority over the teacher. Google Scholar: Krishna Kumar Political Agenda of Education Chapter 2. 50 min total."
    },
    {
      "day": 107,
      "type": "Read",
      "title": "The Sargent Plan (1944) — summary excerpts + Gandhi, Nai Talim (1937) / Hind Swaraj excerpts + Kumar, Political Agenda of Education — Ch. 5 (\"Pursuit of Socio-Political Alternatives\")",
      "note": "The tragic pivot: Gandhi's anti-colonial, craft-centred, decentralised education blueprint vs. the Sargent Plan's Westernised, bureaucratic expansion model. Kumar analyses why the post-independence state rejected Nai Talim in favour of the Sargent framework. Search ResearchGate or Google Scholar: \"Krishna Kumar Gandhi Nai Talim Political Agenda\". For Hind Swaraj: Internet Archive — free. 50 min total."
    },
    {
      "day": 108,
      "type": "Read",
      "title": "Kothari Commission Report (1964–66) — key recommendations (focus: 10+2+3 structure and Common School System mandate)",
      "note": "The post-colonial state's attempt to engineer a democratic meritocracy. The Kothari Commission's vision of a Common School System — one neighbourhood school serving all children regardless of class — was the most progressive structural proposal in Indian education history. Its failure reveals how deeply entrenched stratification defeated the formal policy. Search UNESCO Digital Library: \"Kothari Commission Report Education and National Development 1966\". 40 min."
    },
    {
      "day": 109,
      "type": "Read",
      "title": "NEP 2020 — Executive Summary (focus: 5+3+3+4 structural framework and foundational literacy mandate) + ASER 2023 National Report — key findings",
      "note": "A stark juxtaposition: the ambitious structural rhetoric of NEP 2020 against ASER's decades-long empirical documentation of learning poverty. NEP 2020 free: education.gov.in. ASER: asercentre.org/report — free. Read both in one session and note which ASER problems NEP 2020 addresses structurally, and which it does not. 45 min total."
    },
    {
      "day": 110,
      "type": "Quiz + Capstone",
      "title": "Module quiz + Capstone Synthesis Essay (local)",
      "note": "Complete on-site quiz. Then write your capstone locally (see assignment below). Finally: return to your Module 01 position paper and your Phase 1 capstone essay. In one paragraph, record what has changed in your thinking — or explain with precision why it has not."
    }
  ],
  "readings": [
    {
      "type": "Primary",
      "title": "Wood's Despatch (1854) — selected passages",
      "author": "Charles Wood (Board of Control for India)",
      "year": "1854",
      "note": "The 1854 document formalising colonial education policy. Internet Archive / Google Scholar: search Woods Despatch 1854 Indian education full text.",
      "url": "https://archive.org"
    },
    {
      "type": "Primary",
      "title": "Political Agenda of Education — Ch. 2 (\"Colonial Citizen\") and Ch. 5 (\"Socio-Political Alternatives\")",
      "author": "Krishna Kumar",
      "year": "1991",
      "note": "The definitive scholarly account of how colonial pedagogy was embedded in Indian institutional design — and what was rejected at independence. Google Scholar.",
      "url": "https://scholar.google.com"
    },
    {
      "type": "Primary",
      "title": "Nai Talim / Basic Education (1937) and Hind Swaraj excerpts",
      "author": "Mahatma Gandhi",
      "year": "1937 / 1909",
      "note": "Gandhi's anti-colonial education blueprint. Internet Archive — free.",
      "url": "https://archive.org"
    },
    {
      "type": "Primary",
      "title": "Kothari Commission Report — key recommendations (1964–66)",
      "author": "Education Commission of India",
      "year": "1966",
      "note": "The Common School System mandate. UNESCO Digital Library — free.",
      "url": "https://unesdoc.unesco.org"
    },
    {
      "type": "Primary",
      "title": "National Education Policy 2020 — Executive Summary",
      "author": "Government of India",
      "year": "2020",
      "note": "Free: education.gov.in — the contemporary structural framework.",
      "url": "https://education.gov.in"
    },
    {
      "type": "Primary",
      "title": "ASER 2023 — National Report (key findings)",
      "author": "Pratham / ASER Centre",
      "year": "2023",
      "note": "The learning crisis in data. Free: asercentre.org/report",
      "url": "https://asercentre.org/report"
    }
  ],
  "assessment": {
    "tier": "Tier A — Final Capstone: Assessment Reform Blueprint",
    "format": "essay",
    "title": "The Board Exam Paradox — Synthesis Essay and Policy Blueprint",
    "prompt": "This is your course capstone. In 1,000–1,500 words written locally:\n\n(1) DIAGNOSIS: Using Kumar's critique of the exam state alongside ASER's empirical data, identify the THREE most structurally embedded reasons why the current Indian assessment system produces high elimination rates but low learning outcomes.\n\n(2) BLUEPRINT: Drawing on the cognitive architecture frameworks from Module 04 (Sweller, Willingham, Rosenshine) and the reform theory from Module 15 (Fullan, Barber & Mourshed), outline an assessment system for Indian secondary schooling that prioritises cognitive formation over administrative elimination. Be specific: what is assessed, by whom, using what method, and how does this system prevent the coaching-industry capture that any high-stakes alternative will face?\n\n(3) RETURN: Go back to your Module 01 position paper. In one paragraph, record what has changed in your thinking across 110 days — or explain with precision why it has not. This paragraph is as important as the blueprint.\n\nWrite and save locally on your own device."
  },
  "optional": [
    {
      "title": "Rishi Valley School — philosophy and practice",
      "author": "Krishnamurti Foundation",
      "year": "ongoing",
      "note": "rishi-valley.org — an 80-year-old living proof of concept: education rooted in intrinsic motivation, community, and inquiry produces graduates of remarkable depth. The institutional counter-model to the board-exam pipeline."
    },
    {
      "title": "The Beautiful Tree",
      "author": "James Tooley",
      "year": "2009",
      "note": "A provocative economic argument that low-cost private schools in India outperform state schools on measurable outcomes — read critically as a counterpoint to the public-system framework that dominates this course, and ask what Bourdieu (M06) would say about Tooley's methodology."
    },
    {
      "title": "Learning Without Burden — Report of the National Advisory Committee (1993)",
      "author": "Yash Pal Committee",
      "year": "1993",
      "note": "The 1993 committee report that diagnosed the textbook burden, rote culture, and examination pressure in Indian schools — Kumar was a key contributor. Google Scholar. Remarkable for how completely its recommendations were ignored."
    }
  ],
  "quiz": [
    {
      "q": "Macaulay’s Minute (1835) designed Indian colonial education to:",
      "opts": [
        "Promote Indian culture and self-governance",
        "Produce clerks loyal to British administration who were Indian in blood but European in taste",
        "Teach Indians mathematics and science for industrial development",
        "Create an independent Indian university system"
      ],
      "ans": 1,
      "ex": "Macaulay explicitly stated the goal: a class of persons Indian in blood and colour, but English in tastes, opinions, morals, and intellect — administrative intermediaries useful to colonial government, not educated citizens."
    },
    {
      "q": "Krishna Kumar’s argument about Indian school pedagogy is that:",
      "opts": [
        "It is superior to Western models in its emphasis on discipline",
        "It inherited a colonial model that valued passive reception of knowledge over critical thinking",
        "India’s low outcomes are caused primarily by teacher shortages",
        "The exam system is a post-Independence invention"
      ],
      "ans": 1,
      "ex": "Kumar traces the direct line from Macaulay’s colonial design — obedience, textbook authority, certification — to contemporary Indian classroom practice. The colonial purpose persists in the pedagogical form."
    },
    {
      "q": "ASER data on Indian schools primarily shows:",
      "opts": [
        "India has achieved universal enrolment and high learning outcomes",
        "Enrolment has risen significantly but learning outcomes remain very low — millions attend school without basic literacy",
        "Private schools consistently outperform government schools",
        "The mid-day meal scheme has dramatically improved academic performance"
      ],
      "ans": 1,
      "ex": "ASER shifted the global conversation from access to learning — showing that despite high enrolment, enormous numbers of children in Class 5 cannot read a Class 2 text or do basic arithmetic."
    },
    {
      "q": "India’s extreme emphasis on board exam marks is best explained as:",
      "opts": [
        "A cultural preference for academic achievement in Hindu tradition",
        "A rational response to acute scarcity of university places and jobs — in high-scarcity systems, credentials become survival tools",
        "A result of poor teacher training",
        "An imposition of World Bank structural adjustment programmes"
      ],
      "ans": 1,
      "ex": "When university places and good jobs are scarce relative to population, competitive credentials become extraordinarily high-stakes. This is a structural, not cultural, explanation."
    },
    {
      "q": "Tagore’s The Parrot’s Training satirises:",
      "opts": [
        "British colonial policy directly",
        "Rote learning that fills students with information while killing their capacity for genuine understanding",
        "The caste-based exclusion of lower-class students",
        "The preference for English over Indian languages"
      ],
      "ans": 1,
      "ex": "Tagore’s parable shows a parrot stuffed with pages from the holy scriptures until it dies — unable to sing naturally. It is his sharpest critique of colonial-style schooling that destroys natural curiosity."
    },
    {
      "q": "India’s 10+2 structure refers to:",
      "opts": [
        "10 years of primary and 2 years of secondary education, culminating in Class 12 board exams that determine university access",
        "The ratio of teachers to students in government schools",
        "A policy requiring 10% reserved seats and 2% for disabled students",
        "10 compulsory subjects and 2 optional ones"
      ],
      "ans": 0,
      "ex": "The 10+2 structure — 10 years of school (Classes 1–10) followed by 2 years of senior secondary (Classes 11–12) — culminates in the Class 12 board exams, which for many students are the most consequential assessments of their lives."
    },
    {
      "q": "The coaching culture (kota factories, JEE coaching) in India is most directly caused by:",
      "opts": [
        "Indian parents’ excessive ambition",
        "A small number of elite institutions producing lifetime opportunity combined with a single high-stakes entrance exam — creating massive incentive to optimise for the test",
        "Poor quality school teaching",
        "Lack of vocational alternatives"
      ],
      "ans": 1,
      "ex": "The IITs admit roughly 10,000–15,000 students annually from hundreds of thousands of applicants. This scarcity creates an enormous industry dedicated to optimising for the entrance examination."
    },
    {
      "q": "Applying Freire’s framework (Module 1) to Indian classrooms, the dominant model is:",
      "opts": [
        "Problem-posing education",
        "Banking education — teachers deposit correct answers, students reproduce them in exams",
        "Engaged pedagogy in bell hooks’ sense",
        "Democratic schooling in Neill’s tradition"
      ],
      "ans": 1,
      "ex": "The Indian classroom archetype — teacher lectures from textbook, students copy notes, examinations test reproduction of correct answers — is the clearest real-world instantiation of Freire’s banking model."
    },
    {
      "q": "The Right to Education Act (2009) was criticised primarily because:",
      "opts": [
        "It excluded private schools entirely",
        "It focused on enrolment and infrastructure while mandating a no-detention policy, leaving learning outcomes largely unaddressed",
        "It raised teacher salaries beyond what states could afford",
        "It was not funded by the central government"
      ],
      "ans": 1,
      "ex": "The RTE’s no-detention policy was implemented without the teacher training and support systems that could have made it work — resulting in students reaching Class 8 without foundational literacy or numeracy."
    },
    {
      "q": "What does Tagore’s Shantiniketan model offer to contemporary Indian education?",
      "opts": [
        "A template for large-scale public school reform",
        "A proof of concept that education rooted in local culture, outdoor learning, arts, and intrinsic motivation can produce graduates of remarkable depth",
        "Evidence that elite private schooling always outperforms government schooling",
        "A model that has been fully adopted by India’s National Education Policy"
      ],
      "ans": 1,
      "ex": "Shantiniketan — and its descendants like Rishi Valley — demonstrate that education rooted in culture, development, and intrinsic motivation produces different kinds of people than the board-exam pipeline."
    }
  ]
},

];