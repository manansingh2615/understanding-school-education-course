// course-data.js — All 17 modules
// Edit this file to add/change modules, readings, quiz questions, or URLs.

const MODULES = [
  {
    "id": "m1",
    "n": 1,
    "phase": 1,
    "days": "1–8",
    "title": "The purpose of schooling",
    "sub": "Why does mass education exist? Plato, Dewey, Freire, Durkheim, and Illich on what school is fundamentally for.",
    "bigIdea": "Every school system rests on assumptions about what education is for. This module surfaces those assumptions and forces you to examine your own.",
    "thinkers": [
      {
        "name": "Plato",
        "era": "c.428–348 BCE",
        "claim": "Education forms just citizens. The philosopher-kings must be schooled above all."
      },
      {
        "name": "John Dewey",
        "era": "1859–1952",
        "claim": "Education is not preparation for life — it is life itself. School must be democratic and experiential."
      },
      {
        "name": "Paulo Freire",
        "era": "1921–1997",
        "claim": "Traditional schooling is the banking model. Liberation requires critical dialogue between equals."
      },
      {
        "name": "Émile Durkheim",
        "era": "1858–1917",
        "claim": "Education is society reproducing itself in the individual. Its primary function is social solidarity."
      },
      {
        "name": "Ivan Illich",
        "era": "1926–2002",
        "claim": "School is a harmful institution manufacturing inequality. We should deschool society entirely."
      }
    ],
    "week": [
      {
        "day": 1,
        "type": "read",
        "main": "Plato, The Republic — Books II & VII",
        "sub": "The allegory of the cave and the guardians’ education. 45 min",
        "url": "https://classics.mit.edu/Plato/republic.html"
      },
      {
        "day": 2,
        "type": "read",
        "main": "Dewey, Experience and Education (Ch. 1–3)",
        "sub": "Traditional vs. progressive education. 40 min",
        "url": "https://archive.org/details/experienceandeducation"
      },
      {
        "day": 3,
        "type": "watch",
        "main": "Yale Open Course: Philosophy of Education — Lecture 1",
        "sub": "YouTube search: Yale Philosophy of Education lecture",
        "url": "https://www.youtube.com/results?search_query=Yale+Philosophy+of+Education+lecture"
      },
      {
        "day": 4,
        "type": "read",
        "main": "Freire, Pedagogy of the Oppressed (Ch. 1–2)",
        "sub": "The banking concept of education. 45 min",
        "url": "https://envs.ucsc.edu/internships/internship-readings/freire-pedagogy-of-the-oppressed.pdf"
      },
      {
        "day": 5,
        "type": "read",
        "main": "Durkheim, Education and Sociology (Ch. 1)",
        "sub": "The sociological function of schooling. 35 min",
        "url": "https://archive.org/details/educationsociolo0000durk"
      },
      {
        "day": 6,
        "type": "reflect",
        "main": "Reflection: Where do you stand?",
        "sub": "Write 300 words: Is school primarily for the individual, society, or liberation?"
      },
      {
        "day": 7,
        "type": "read",
        "main": "Illich, Deschooling Society (Ch. 1 & 6)",
        "sub": "School as an institution manufacturing dependency. 40 min",
        "url": "https://archive.org/details/deschoolingsociety00ivan"
      },
      {
        "day": 8,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on the purpose of schooling."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Experience and Education",
        "note": "John Dewey (1938). Archive.org — free.",
        "url": "https://archive.org/details/experienceandeducation"
      },
      {
        "type": "primary",
        "title": "Pedagogy of the Oppressed, Ch. 1–2",
        "note": "Paulo Freire (1968). UCSC PDF — free.",
        "url": "https://envs.ucsc.edu/internships/internship-readings/freire-pedagogy-of-the-oppressed.pdf"
      },
      {
        "type": "primary",
        "title": "The Republic, Books II & VII",
        "note": "Plato. MIT Classics — free.",
        "url": "https://classics.mit.edu/Plato/republic.html"
      },
      {
        "type": "primary",
        "title": "Education and Sociology, Ch. 1",
        "note": "Émile Durkheim (1922). Archive.org.",
        "url": "https://archive.org/details/educationsociolo0000durk"
      },
      {
        "type": "secondary",
        "title": "Deschooling Society, Ch. 1 & 6",
        "note": "Ivan Illich (1971). Archive.org — free.",
        "url": "https://archive.org/details/deschoolingsociety00ivan"
      }
    ],
    "videos": [
      {
        "title": "Yale: Philosophy of Education — Lecture 1",
        "source": "YouTube",
        "duration": "50 min",
        "url": "https://www.youtube.com/results?search_query=Yale+Philosophy+of+Education+lecture"
      },
      {
        "title": "Paulo Freire — the banking concept of education",
        "source": "YouTube",
        "duration": "25 min",
        "url": "https://www.youtube.com/results?search_query=Paulo+Freire+banking+concept+education"
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
      }
    ]
  },

  {
    "id": "m2",
    "n": 2,
    "phase": 1,
    "days": "9–15",
    "title": "The history of compulsory schooling",
    "sub": "From Prussia to post-colonial India — why states made schooling compulsory, and what it was designed to produce.",
    "bigIdea": "Compulsory schooling is not natural or inevitable. It was invented for specific political purposes by specific states at specific moments. Understanding that history changes how you see every school system.",
    "thinkers": [
      {
        "name": "Andy Green",
        "era": "b. 1952",
        "claim": "Mass schooling emerged with nation-states because states needed literate, loyal, unified populations for industry and war."
      },
      {
        "name": "Ivan Illich",
        "era": "1926–2002",
        "claim": "Compulsory schooling creates institutional dependency and legitimises inequality under the guise of meritocracy."
      },
      {
        "name": "Larry Cuban",
        "era": "b. 1934",
        "claim": "Despite wave after wave of reform, classroom practice has remained remarkably stable across the 20th century."
      }
    ],
    "week": [
      {
        "day": 9,
        "type": "read",
        "main": "Andy Green, Education and State Formation (Intro & Ch. 1)",
        "sub": "Why states built mass schooling systems in the 19th century. 40 min",
        "url": "https://www.goodreads.com/book/show/2299474.Education_and_State_Formation"
      },
      {
        "day": 10,
        "type": "read",
        "main": "Macaulay’s Minute on Indian Education (1835) — full text",
        "sub": "The founding document of colonial education policy. 30 min",
        "url": "https://www.columbia.edu/itc/mealac/pritchett/00generallinks/macaulay/txt_minute_education_1835.html"
      },
      {
        "day": 11,
        "type": "read",
        "main": "Illich, Deschooling Society (Ch. 1–2)",
        "sub": "The political history of compulsory schooling as institutionalisation. 40 min",
        "url": "https://archive.org/details/deschoolingsociety00ivan"
      },
      {
        "day": 12,
        "type": "watch",
        "main": "Ken Robinson, Do Schools Kill Creativity? (TED)",
        "sub": "Essential popular critique — watch critically. 20 min",
        "url": "https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity"
      },
      {
        "day": 13,
        "type": "case",
        "main": "Case: Prussia and the origins of compulsory schooling",
        "sub": "YouTube search: Prussian origins compulsory education history",
        "url": "https://www.youtube.com/results?search_query=Prussian+origins+compulsory+education+history"
      },
      {
        "day": 14,
        "type": "reflect",
        "main": "Reflection: What was your own schooling designed for?",
        "sub": "300 words using today’s reading as a lens on your own education experience."
      },
      {
        "day": 15,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on the political history of compulsory schooling."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Education and State Formation (Intro & Ch. 1)",
        "note": "Andy Green (1990). Goodreads.",
        "url": "https://www.goodreads.com/book/show/2299474.Education_and_State_Formation"
      },
      {
        "type": "primary",
        "title": "Macaulay’s Minute on Indian Education (1835)",
        "note": "Full text. Columbia University — free.",
        "url": "https://www.columbia.edu/itc/mealac/pritchett/00generallinks/macaulay/txt_minute_education_1835.html"
      },
      {
        "type": "secondary",
        "title": "Tinkering Toward Utopia",
        "note": "Tyack & Cuban (1995). Goodreads.",
        "url": "https://www.goodreads.com/book/show/1052068.Tinkering_Toward_Utopia"
      }
    ],
    "videos": [
      {
        "title": "Ken Robinson — Do Schools Kill Creativity?",
        "source": "TED.com",
        "duration": "20 min",
        "url": "https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity"
      },
      {
        "title": "History of compulsory education — Prussian origins",
        "source": "YouTube",
        "duration": "25 min",
        "url": "https://www.youtube.com/results?search_query=Prussian+origins+compulsory+education+history"
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
    "id": "m3",
    "n": 3,
    "phase": 1,
    "days": "15–21",
    "title": "The classroom as a designed space",
    "sub": "Pedagogy, curriculum design, assessment theory, and what research shows about effective teaching.",
    "bigIdea": "Every classroom embeds a theory of knowledge and a theory of the learner. This module makes those theories explicit — and shows what a rigorous, evidence-informed alternative looks like.",
    "thinkers": [
      {
        "name": "Benjamin Bloom",
        "era": "1913–1999",
        "claim": "A taxonomy of objectives — from recall to synthesis — should structure both curriculum design and assessment."
      },
      {
        "name": "Dylan Wiliam",
        "era": "b. 1954",
        "claim": "Formative assessment — eliciting evidence of student thinking — is the most powerful tool any teacher has."
      },
      {
        "name": "Nel Noddings",
        "era": "b. 1929",
        "claim": "An ethic of care must be the foundation of educational relationships. The classroom is a moral space before it is a cognitive one."
      },
      {
        "name": "Barak Rosenshine",
        "era": "1930–2017",
        "claim": "Ten evidence-backed principles — reviewing, questioning, scaffolding, practice — consistently raise achievement."
      }
    ],
    "week": [
      {
        "day": 15,
        "type": "read",
        "main": "Bloom’s Taxonomy — original and revised (Anderson & Krathwohl, 2001)",
        "sub": "From recall to creation. Free Vanderbilt guide. 35 min",
        "url": "https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/"
      },
      {
        "day": 16,
        "type": "read",
        "main": "Rosenshine’s Principles of Instruction (2012)",
        "sub": "American Educator, Spring 2012. Free AFT PDF — 10 pages, among the most practically useful texts in this course.",
        "url": "https://www.aft.org/sites/default/files/Rosenshine.pdf"
      },
      {
        "day": 17,
        "type": "read",
        "main": "Philip Jackson, Life in Classrooms — Introduction & Ch. 1",
        "sub": "The hidden curriculum: crowds, praise, and power. 40 min",
        "url": "https://www.goodreads.com/book/show/1014060.Life_in_Classrooms"
      },
      {
        "day": 18,
        "type": "watch",
        "main": "Dylan Wiliam on formative assessment",
        "sub": "YouTube search: Dylan Wiliam formative assessment",
        "url": "https://www.youtube.com/results?search_query=Dylan+Wiliam+formative+assessment"
      },
      {
        "day": 19,
        "type": "read",
        "main": "Nel Noddings, The Challenge to Care in Schools (Ch. 1–2)",
        "sub": "The ethics of care as a foundational framework. 40 min",
        "url": "https://www.goodreads.com/book/show/1102073.The_Challenge_to_Care_in_Schools"
      },
      {
        "day": 20,
        "type": "case",
        "main": "Apply Bloom, Wiliam, and Rosenshine to a real lesson",
        "sub": "Find any published lesson plan. Analyse it through all three frameworks. 300 words."
      },
      {
        "day": 21,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on pedagogy, assessment, and the hidden curriculum."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Bloom’s Taxonomy — Vanderbilt CFT guide",
        "note": "Free. Vanderbilt University.",
        "url": "https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/"
      },
      {
        "type": "primary",
        "title": "Rosenshine’s Principles of Instruction (2012)",
        "note": "American Educator. Free AFT PDF.",
        "url": "https://www.aft.org/sites/default/files/Rosenshine.pdf"
      },
      {
        "type": "primary",
        "title": "The Challenge to Care in Schools (Ch. 1–2)",
        "note": "Nel Noddings (1992). Goodreads.",
        "url": "https://www.goodreads.com/book/show/1102073.The_Challenge_to_Care_in_Schools"
      },
      {
        "type": "secondary",
        "title": "Life in Classrooms",
        "note": "Philip Jackson (1968). Goodreads.",
        "url": "https://www.goodreads.com/book/show/1014060.Life_in_Classrooms"
      }
    ],
    "videos": [
      {
        "title": "Dylan Wiliam on formative assessment",
        "source": "YouTube",
        "duration": "25 min",
        "url": "https://www.youtube.com/results?search_query=Dylan+Wiliam+formative+assessment"
      },
      {
        "title": "Rosenshine’s Principles — Tom Sherrington (ResearchED 2019)",
        "source": "YouTube",
        "duration": "35 min",
        "url": "https://www.youtube.com/watch?v=gdqRM9nNBB4"
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
    "id": "m4",
    "n": 4,
    "phase": 1,
    "days": "22–28",
    "title": "Schools of educational thought",
    "sub": "Perennialism, essentialism, progressivism, constructivism, critical pedagogy — where each comes from and what each demands.",
    "bigIdea": "Every educational decision implies a philosophy. This module lets you identify those philosophies — in other systems and in your own thinking.",
    "thinkers": [
      {
        "name": "E.D. Hirsch Jr.",
        "era": "b. 1928",
        "claim": "Cultural literacy — shared background knowledge — is the foundation of reading comprehension and social equity."
      },
      {
        "name": "Lev Vygotsky",
        "era": "1896–1934",
        "claim": "Learning happens in the Zone of Proximal Development — what a child can do with guidance just beyond solo capability."
      },
      {
        "name": "bell hooks",
        "era": "1952–2021",
        "claim": "Engaged pedagogy honours every student’s voice and experience. Education must be a practice of freedom."
      },
      {
        "name": "Elliot Eisner",
        "era": "1933–2014",
        "claim": "Schools wrongly privilege verbal-logical intelligence. Arts are equally valid forms of knowing."
      }
    ],
    "week": [
      {
        "day": 22,
        "type": "read",
        "main": "E.D. Hirsch, Cultural Literacy (Intro & Ch. 1)",
        "sub": "The knowledge-rich curriculum case — essential and contested. 45 min",
        "url": "https://archive.org/details/culturalliteracy00edhi"
      },
      {
        "day": 23,
        "type": "read",
        "main": "Vygotsky, Mind in Society (Ch. 6)",
        "sub": "The Zone of Proximal Development and social learning. 40 min",
        "url": "https://archive.org/details/mindinsociety00lsvy"
      },
      {
        "day": 24,
        "type": "read",
        "main": "bell hooks, Teaching to Transgress (Ch. 1 & 5)",
        "sub": "Engaged pedagogy and education as the practice of freedom. 40 min",
        "url": "https://archive.org/details/teachingtotransgress"
      },
      {
        "day": 25,
        "type": "watch",
        "main": "Ken Robinson — Do Schools Kill Creativity? (TED)",
        "sub": "Watch critically — note weaknesses alongside influence. 20 min",
        "url": "https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity"
      },
      {
        "day": 26,
        "type": "read",
        "main": "Stanford Encyclopedia of Philosophy: Constructivism in Education",
        "sub": "Grounding the philosophical tradition. Free. 30 min",
        "url": "https://plato.stanford.edu/entries/constructivism-education/"
      },
      {
        "day": 27,
        "type": "reflect",
        "main": "Which philosophy matches your intuitions? Which challenges them most?",
        "sub": "300 words comparing two traditions from this module."
      },
      {
        "day": 28,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "Match educational scenarios to their philosophical tradition."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Cultural Literacy: Intro + Ch. 1",
        "note": "E.D. Hirsch Jr. (1987). Archive.org.",
        "url": "https://archive.org/details/culturalliteracy00edhi"
      },
      {
        "type": "primary",
        "title": "Mind in Society, Ch. 6",
        "note": "Lev Vygotsky (1978). Archive.org.",
        "url": "https://archive.org/details/mindinsociety00lsvy"
      },
      {
        "type": "primary",
        "title": "Teaching to Transgress, Ch. 1 & 5",
        "note": "bell hooks (1994). Archive.org.",
        "url": "https://archive.org/details/teachingtotransgress"
      },
      {
        "type": "secondary",
        "title": "Stanford Encyclopedia: Constructivism in Education",
        "note": "Free. Stanford University.",
        "url": "https://plato.stanford.edu/entries/constructivism-education/"
      }
    ],
    "videos": [
      {
        "title": "Ken Robinson — Do Schools Kill Creativity?",
        "source": "TED.com",
        "duration": "20 min",
        "url": "https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity"
      },
      {
        "title": "John Hattie — what works in education",
        "source": "YouTube",
        "duration": "35 min",
        "url": "https://www.youtube.com/results?search_query=John+Hattie+visible+learning+lecture"
      }
    ],
    "quiz": [
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
    "id": "m5",
    "n": 5,
    "phase": 1,
    "days": "29–35",
    "title": "Non-Western and indigenous education philosophies",
    "sub": "Ubuntu, Confucian traditions, indigenous knowledge systems, and the decolonisation of educational thought.",
    "bigIdea": "The Western canon of education philosophy represents a small fraction of human thinking about learning. This module introduces traditions that are not exceptions — they are alternatives with their own rigour and depth.",
    "thinkers": [
      {
        "name": "Julius Nyerere",
        "era": "1922–1999",
        "claim": "Education for Self-Reliance: African education must serve African communities, not reproduce colonial hierarchies."
      },
      {
        "name": "Rabindranath Tagore",
        "era": "1861–1941",
        "claim": "Education must be rooted in joy, nature, and the child’s own culture — not the factory discipline of colonial schooling."
      },
      {
        "name": "Confucius",
        "era": "551–479 BCE",
        "claim": "Self-cultivation, moral formation, and harmonious social relations are the proper ends of education."
      }
    ],
    "week": [
      {
        "day": 29,
        "type": "read",
        "main": "The Analects of Confucius — Books I, II, XV (excerpts)",
        "sub": "Self-cultivation and moral formation as educational goals. 35 min",
        "url": "https://classics.mit.edu/Confucius/analects.html"
      },
      {
        "day": 30,
        "type": "read",
        "main": "Nyerere, Education for Self-Reliance (1967) — full text",
        "sub": "A postcolonial education manifesto. Essential. 40 min",
        "url": "https://www.juliusnyerere.info/resources/view/education_for_self_reliance"
      },
      {
        "day": 31,
        "type": "read",
        "main": "Metz, Ubuntu as a moral theory — ResearchGate",
        "sub": "Ubuntu philosophy and its educational implications. 35 min",
        "url": "https://www.researchgate.net/publication/233271580_Ubuntu_as_a_Moral_Theory_and_Human_Rights_in_South_Africa"
      },
      {
        "day": 32,
        "type": "watch",
        "main": "Māori education — kura kaupapa",
        "sub": "YouTube search: kura kaupapa Maori education New Zealand",
        "url": "https://www.youtube.com/results?search_query=kura+kaupapa+Maori+education+New+Zealand"
      },
      {
        "day": 33,
        "type": "read",
        "main": "Linda Tuhiwai Smith, Decolonizing Methodologies (Ch. 1)",
        "sub": "Indigenous research paradigms and the challenge to Western knowledge. 40 min",
        "url": "https://www.goodreads.com/book/show/56632.Decolonizing_Methodologies"
      },
      {
        "day": 34,
        "type": "reflect",
        "main": "Reflection: What does your own cultural tradition say about the purpose of education?",
        "sub": "300 words drawing on one tradition from this module."
      },
      {
        "day": 35,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on non-Western and indigenous education philosophies."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Education for Self-Reliance (1967)",
        "note": "Julius Nyerere. Full text — free.",
        "url": "https://www.juliusnyerere.info/resources/view/education_for_self_reliance"
      },
      {
        "type": "primary",
        "title": "The Analects — Books I, II, XV (excerpts)",
        "note": "Confucius. MIT Classics — free.",
        "url": "https://classics.mit.edu/Confucius/analects.html"
      },
      {
        "type": "secondary",
        "title": "Decolonizing Methodologies, Ch. 1",
        "note": "Linda Tuhiwai Smith (1999). Goodreads.",
        "url": "https://www.goodreads.com/book/show/56632.Decolonizing_Methodologies"
      }
    ],
    "videos": [
      {
        "title": "Māori education — kura kaupapa Māori",
        "source": "YouTube",
        "duration": "25 min",
        "url": "https://www.youtube.com/results?search_query=kura+kaupapa+Maori+education+New+Zealand"
      },
      {
        "title": "Ubuntu philosophy and education",
        "source": "YouTube / TED-Ed",
        "duration": "15 min",
        "url": "https://www.youtube.com/watch?v=HED4h00xPPA"
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
    "id": "m6",
    "n": 6,
    "phase": 1,
    "days": "36–42",
    "title": "Education and society",
    "sub": "How school systems create and perpetuate advantage — Bourdieu, Coleman, Sen, and the sociology of educational inequality.",
    "bigIdea": "Schools are often imagined as great equalisers. The sociology of education reveals they are more often great reproducers. Understanding why is the first step to changing it.",
    "thinkers": [
      {
        "name": "Pierre Bourdieu",
        "era": "1930–2002",
        "claim": "Cultural capital — familiarity with dominant culture — determines school success more than innate ability."
      },
      {
        "name": "James S. Coleman",
        "era": "1926–1995",
        "claim": "Social capital — family and community relationships — is more predictive of outcomes than school resources."
      },
      {
        "name": "Amartya Sen",
        "era": "b. 1933",
        "claim": "Education is a capability — it expands what people can be and do. The goal is human flourishing, not economic output."
      }
    ],
    "week": [
      {
        "day": 36,
        "type": "read",
        "main": "Bourdieu, Cultural Reproduction and Social Reproduction (excerpt)",
        "sub": "How cultural capital converts into academic capital and social advantage. 45 min"
      },
      {
        "day": 37,
        "type": "read",
        "main": "Coleman Report — Equality of Educational Opportunity (1966) summary",
        "sub": "Free ERIC PDF. Family background vs. school resources. 40 min",
        "url": "https://files.eric.ed.gov/fulltext/ED012275.pdf"
      },
      {
        "day": 38,
        "type": "read",
        "main": "Bowles & Gintis, Schooling in Capitalist America (Ch. 2)",
        "sub": "The correspondence principle. 40 min",
        "url": "https://archive.org/details/schoolingincapitalistamerica"
      },
      {
        "day": 39,
        "type": "watch",
        "main": "Amartya Sen on education and human capability",
        "sub": "YouTube search: Amartya Sen education capability lecture",
        "url": "https://www.youtube.com/results?search_query=Amartya+Sen+education+capability+lecture"
      },
      {
        "day": 40,
        "type": "case",
        "main": "Case: Social mobility and education — OECD data",
        "sub": "OECD Education at a Glance. How much does education equalise?",
        "url": "https://www.oecd.org/en/topics/education-at-a-glance.html"
      },
      {
        "day": 41,
        "type": "reflect",
        "main": "Debate preparation",
        "sub": "Prepare both sides: Schools reproduce inequality more than they reduce it."
      },
      {
        "day": 42,
        "type": "quiz",
        "main": "Module quiz + Phase 1 milestone essay",
        "sub": "10 questions + 600-word position paper prompt."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Coleman Report — key findings summary",
        "note": "James Coleman (1966). Free ERIC PDF.",
        "url": "https://files.eric.ed.gov/fulltext/ED012275.pdf"
      },
      {
        "type": "primary",
        "title": "Schooling in Capitalist America, Ch. 2",
        "note": "Bowles & Gintis (1976). Archive.org.",
        "url": "https://archive.org/details/schoolingincapitalistamerica"
      },
      {
        "type": "secondary",
        "title": "Development as Freedom, Ch. 1",
        "note": "Amartya Sen (1999). Archive.org.",
        "url": "https://archive.org/details/developmentasfre00sena_0"
      },
      {
        "type": "secondary",
        "title": "OECD Education at a Glance",
        "note": "Current edition. Free online.",
        "url": "https://www.oecd.org/en/topics/education-at-a-glance.html"
      }
    ],
    "videos": [
      {
        "title": "Amartya Sen on education and capability",
        "source": "YouTube",
        "duration": "30 min",
        "url": "https://www.youtube.com/results?search_query=Amartya+Sen+education+capability+lecture"
      },
      {
        "title": "Bourdieu and cultural capital explained",
        "source": "YouTube",
        "duration": "20 min",
        "url": "https://www.youtube.com/results?search_query=Bourdieu+cultural+capital+education+explained"
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
    "id": "m7",
    "n": 7,
    "phase": 2,
    "days": "43–50",
    "title": "The high-performing systems",
    "sub": "Finland, Singapore, Estonia, Japan, South Korea, Canada. What PISA reveals — and what it misses.",
    "bigIdea": "Some school systems consistently produce excellent, equitable outcomes. This module asks what they actually have in common — and what conclusions we should and should not draw.",
    "thinkers": [
      {
        "name": "Pasi Sahlberg",
        "era": "b. 1959",
        "claim": "Finland’s success comes from trust in teachers, no standardised testing, and play-based early education — the opposite of global reform trends."
      },
      {
        "name": "Andreas Schleicher",
        "era": "b. 1964",
        "claim": "PISA reveals that excellence and equity can coexist. Systems that achieve both share common structural features."
      },
      {
        "name": "Yong Zhao",
        "era": "b. 1965",
        "claim": "High PISA scores and entrepreneurial creativity are in systematic tension — systems that top rankings may suppress the qualities modern economies need."
      }
    ],
    "week": [
      {
        "day": 43,
        "type": "read",
        "main": "Sahlberg, Finnish Lessons (Ch. 1–3)",
        "sub": "Why Finland’s system looks different — and what is actually behind it. 50 min",
        "url": "https://www.goodreads.com/book/show/11002234-finnish-lessons"
      },
      {
        "day": 44,
        "type": "watch",
        "main": "The Finland Phenomenon documentary",
        "sub": "YouTube search: Finland Phenomenon documentary education",
        "url": "https://www.youtube.com/results?search_query=Finland+Phenomenon+documentary+education"
      },
      {
        "day": 45,
        "type": "case",
        "main": "Case: Singapore’s education system",
        "sub": "Bilingualism, streaming, Confucian values. OECD Singapore report — free PDF.",
        "url": "https://www.oecd.org/education/school/46581101.pdf"
      },
      {
        "day": 46,
        "type": "case",
        "main": "Case: Japan and South Korea — pressure and performance",
        "sub": "Juku culture, exam hell, and the psychological cost of high performance."
      },
      {
        "day": 47,
        "type": "case",
        "main": "Case: Estonia — post-Soviet digital transformation",
        "sub": "How a tiny nation went from Soviet schooling to top PISA ranks in 30 years."
      },
      {
        "day": 48,
        "type": "read",
        "main": "Schleicher, World Class (Ch. 1–2)",
        "sub": "PISA lead author on what the data really shows. Free OECD iLibrary. 40 min",
        "url": "https://www.oecd-ilibrary.org/education/world-class_9789264300002-en"
      },
      {
        "day": 49,
        "type": "case",
        "main": "Case: Canada (Ontario) — from mediocrity to excellence",
        "sub": "How policy design matters. Surpassing Shanghai (Ontario chapter).",
        "url": "https://www.hepg.org/hep-home/books/surpassing-shanghai"
      },
      {
        "day": 50,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on high-performing systems."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Finnish Lessons (Ch. 1–3)",
        "note": "Pasi Sahlberg (2011). Goodreads.",
        "url": "https://www.goodreads.com/book/show/11002234-finnish-lessons"
      },
      {
        "type": "primary",
        "title": "World Class (Ch. 1–2)",
        "note": "Andreas Schleicher (2018). Free OECD iLibrary.",
        "url": "https://www.oecd-ilibrary.org/education/world-class_9789264300002-en"
      },
      {
        "type": "secondary",
        "title": "The Singapore Story — OECD report",
        "note": "Free PDF.",
        "url": "https://www.oecd.org/education/school/46581101.pdf"
      },
      {
        "type": "secondary",
        "title": "Surpassing Shanghai (Ontario chapter)",
        "note": "HEPG.",
        "url": "https://www.hepg.org/hep-home/books/surpassing-shanghai"
      }
    ],
    "videos": [
      {
        "title": "The Finland Phenomenon documentary",
        "source": "YouTube",
        "duration": "60 min",
        "url": "https://www.youtube.com/results?search_query=Finland+Phenomenon+documentary+education"
      },
      {
        "title": "Andreas Schleicher on PISA and quality",
        "source": "YouTube",
        "duration": "30 min",
        "url": "https://www.youtube.com/results?search_query=Andreas+Schleicher+PISA+education+quality"
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
    "id": "m8",
    "n": 8,
    "phase": 2,
    "days": "51–57",
    "title": "Alternative and experimental schools",
    "sub": "Montessori, Waldorf, Reggio Emilia, Summerhill, democratic schools, unschooling — outcomes and access.",
    "bigIdea": "The most student-centred, experientially rich educational approaches are often the least accessible. This module asks what the alternatives produce — and who actually has access to them.",
    "thinkers": [
      {
        "name": "Maria Montessori",
        "era": "1870–1952",
        "claim": "Children have a natural drive to learn. Prepared environments, not teacher instruction, enable this."
      },
      {
        "name": "Loris Malaguzzi",
        "era": "1920–1994",
        "claim": "Children have a hundred languages. The environment is the third teacher. Documentation of learning matters."
      },
      {
        "name": "A.S. Neill",
        "era": "1883–1973",
        "claim": "Freedom, not discipline, enables healthy development. Children should govern their own school community."
      },
      {
        "name": "Peter Gray",
        "era": "b. 1943",
        "claim": "Children are self-educating by nature. Unschooling and free play are not radical — they are evolutionarily normal."
      }
    ],
    "week": [
      {
        "day": 51,
        "type": "read",
        "main": "Montessori, The Absorbent Mind (Ch. 1–4)",
        "sub": "The child’s natural learning drive and the prepared environment. 45 min",
        "url": "https://archive.org/details/absorbentmind00mont"
      },
      {
        "day": 52,
        "type": "case",
        "main": "Case: What does Montessori research show?",
        "sub": "Lillard et al. (2006) in Science — the strongest data on Montessori outcomes.",
        "url": "https://www.science.org/doi/10.1126/science.1132362"
      },
      {
        "day": 53,
        "type": "read",
        "main": "Malaguzzi, No Way — The Hundred is There + Reggio Emilia overview",
        "sub": "Documentation, project-based inquiry, and the environment as teacher. 40 min"
      },
      {
        "day": 54,
        "type": "watch",
        "main": "Most Likely to Succeed documentary",
        "sub": "High Tech High and project-based learning. YouTube search.",
        "url": "https://www.youtube.com/results?search_query=Most+Likely+to+Succeed+documentary+education"
      },
      {
        "day": 55,
        "type": "read",
        "main": "Neill, Summerhill (excerpts)",
        "sub": "Democratic schooling in practice. 40 min",
        "url": "https://archive.org/details/summerhill00neil"
      },
      {
        "day": 56,
        "type": "read",
        "main": "Gray, Free to Learn (Ch. 1–3)",
        "sub": "The evolutionary case for self-directed education. 45 min",
        "url": "https://www.goodreads.com/book/show/15843042-free-to-learn"
      },
      {
        "day": 57,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on founders, philosophies, and evidence."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "The Absorbent Mind, Ch. 1–4",
        "note": "Maria Montessori (1949). Archive.org — free.",
        "url": "https://archive.org/details/absorbentmind00mont"
      },
      {
        "type": "primary",
        "title": "Free to Learn, Ch. 1–3",
        "note": "Peter Gray (2013). Goodreads.",
        "url": "https://www.goodreads.com/book/show/15843042-free-to-learn"
      },
      {
        "type": "secondary",
        "title": "Summerhill (excerpts)",
        "note": "A.S. Neill (1960). Archive.org.",
        "url": "https://archive.org/details/summerhill00neil"
      },
      {
        "type": "secondary",
        "title": "Evaluating Montessori Education (Science, 2006)",
        "note": "Lillard & Else-Quest. DOI link.",
        "url": "https://www.science.org/doi/10.1126/science.1132362"
      }
    ],
    "videos": [
      {
        "title": "Most Likely to Succeed documentary",
        "source": "YouTube",
        "duration": "60 min",
        "url": "https://www.youtube.com/results?search_query=Most+Likely+to+Succeed+documentary+education"
      },
      {
        "title": "Montessori method explained",
        "source": "YouTube",
        "duration": "20 min",
        "url": "https://www.youtube.com/results?search_query=Montessori+method+explained"
      },
      {
        "title": "Reggio Emilia approach",
        "source": "YouTube",
        "duration": "20 min",
        "url": "https://www.youtube.com/results?search_query=Reggio+Emilia+approach+explained"
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
    "id": "m9",
    "n": 9,
    "phase": 2,
    "days": "58–64",
    "title": "Education in the Global South",
    "sub": "India’s Right to Education Act, sub-Saharan Africa’s teacher crisis, Brazil, colonial curricula, and decolonisation.",
    "bigIdea": "The dominant narratives of global education are written by and for the Global North. This module centres the majority of the world’s students.",
    "thinkers": [
      {
        "name": "Julius Nyerere",
        "era": "1922–1999",
        "claim": "African education must serve African communities, not reproduce colonial hierarchies."
      },
      {
        "name": "Ngugi wa Thiong’o",
        "era": "b. 1938",
        "claim": "Teaching African children in colonial languages is a colonisation of the mind — the language of instruction determines whose knowledge counts."
      },
      {
        "name": "Malala Yousafzai",
        "era": "b. 1997",
        "claim": "Education is a right, not a privilege. One child, one teacher, one book, one pen can change the world."
      }
    ],
    "week": [
      {
        "day": 58,
        "type": "read",
        "main": "Nyerere, Education for Self-Reliance (1967) — full text",
        "sub": "A founding postcolonial education manifesto. 40 min",
        "url": "https://www.juliusnyerere.info/resources/view/education_for_self_reliance"
      },
      {
        "day": 59,
        "type": "case",
        "main": "Case: India’s Right to Education Act (2009) — promise vs. reality",
        "sub": "ASER Reports: access has improved but learning outcomes remain very low.",
        "url": "https://asercentre.org/reports/"
      },
      {
        "day": 60,
        "type": "case",
        "main": "Case: Sub-Saharan Africa — the teacher crisis",
        "sub": "UNESCO GEM Report on teacher shortages, training quality, and learning outcomes.",
        "url": "https://www.unesco.org/gem-report/en"
      },
      {
        "day": 61,
        "type": "read",
        "main": "Ngugi wa Thiong’o, Decolonising the Mind (Ch. 1)",
        "sub": "The politics of language in African education. 40 min",
        "url": "https://www.goodreads.com/book/show/765180.Decolonising_the_Mind"
      },
      {
        "day": 62,
        "type": "case",
        "main": "Case: Brazil — Paulo Freire’s legacy in practice",
        "sub": "Literacy campaigns and what happened to progressive education in Brazilian politics."
      },
      {
        "day": 63,
        "type": "watch",
        "main": "Malala Yousafzai TED talk",
        "sub": "ted.com — on education as a right. 18 min",
        "url": "https://www.ted.com/talks/malala_yousafzai_my_own_words"
      },
      {
        "day": 64,
        "type": "quiz",
        "main": "Module quiz + Phase 2 milestone essay prompt",
        "sub": "10 questions + 1,000-word comparative analysis of two countries."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Education for Self-Reliance (1967)",
        "note": "Julius Nyerere. Full text — free.",
        "url": "https://www.juliusnyerere.info/resources/view/education_for_self_reliance"
      },
      {
        "type": "primary",
        "title": "Decolonising the Mind, Ch. 1",
        "note": "Ngugi wa Thiong’o (1986). Goodreads.",
        "url": "https://www.goodreads.com/book/show/765180.Decolonising_the_Mind"
      },
      {
        "type": "primary",
        "title": "ASER India Annual Reports",
        "note": "Pratham Foundation. Free online.",
        "url": "https://asercentre.org/reports/"
      },
      {
        "type": "secondary",
        "title": "UNESCO GEM Report",
        "note": "Current edition. Free.",
        "url": "https://www.unesco.org/gem-report/en"
      }
    ],
    "videos": [
      {
        "title": "Malala Yousafzai TED talk",
        "source": "TED.com",
        "duration": "18 min",
        "url": "https://www.ted.com/talks/malala_yousafzai_my_own_words"
      },
      {
        "title": "Decolonising the curriculum — debate",
        "source": "YouTube",
        "duration": "30 min",
        "url": "https://www.youtube.com/results?search_query=decolonising+curriculum+debate"
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
    "id": "m10",
    "n": 10,
    "phase": 2,
    "days": "65–71",
    "title": "Western systems compared",
    "sub": "Germany’s tripartite tracking, France’s grandes écoles pipeline, the UK’s grammar school debate, and the US’s decentralised system.",
    "bigIdea": "Each Western system reflects its society’s values — about meritocracy, equality, and the purpose of schooling. Comparing them reveals assumptions that usually go unstated.",
    "thinkers": [
      {
        "name": "Diane Ravitch",
        "era": "b. 1938",
        "claim": "Market-based reforms have not improved US schools and have systematically undermined the public education system."
      },
      {
        "name": "Pierre Bourdieu",
        "era": "1930–2002",
        "claim": "France’s grandes écoles reproduce elite advantage while appearing meritocratic — the illusion of equal opportunity."
      }
    ],
    "week": [
      {
        "day": 65,
        "type": "case",
        "main": "Case: Germany — tracking and the Hauptschule crisis",
        "sub": "Tripartite system, early selection at 10, and growing equity concerns. 40 min"
      },
      {
        "day": 66,
        "type": "case",
        "main": "Case: France — equality, elitism, and the grandes écoles",
        "sub": "Republican universalism vs. systemic elite reproduction. Bourdieu’s critique. 40 min"
      },
      {
        "day": 67,
        "type": "case",
        "main": "Case: United Kingdom — comprehensives, grammar schools, and academies",
        "sub": "The grammar school debate, Thatcher’s reforms, Blair’s academies. 40 min"
      },
      {
        "day": 68,
        "type": "read",
        "main": "Ravitch, Reign of Error (Ch. 1–3)",
        "sub": "The case against market-based US education reform. 45 min",
        "url": "https://www.goodreads.com/book/show/17262365-reign-of-error"
      },
      {
        "day": 69,
        "type": "watch",
        "main": "Waiting for Superman documentary",
        "sub": "The pro-charter, anti-union argument. YouTube. Watch critically.",
        "url": "https://www.youtube.com/results?search_query=Waiting+for+Superman+documentary"
      },
      {
        "day": 70,
        "type": "reflect",
        "main": "Which Western system is most equitable?",
        "sub": "400 words: Compare any two. Which would you prefer for your own children, and why?"
      },
      {
        "day": 71,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on Germany, France, UK, and US education."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Reign of Error, Ch. 1–3",
        "note": "Diane Ravitch (2013). Goodreads.",
        "url": "https://www.goodreads.com/book/show/17262365-reign-of-error"
      },
      {
        "type": "secondary",
        "title": "Death and Life of the Great American School System",
        "note": "Diane Ravitch (2010). Goodreads.",
        "url": "https://www.goodreads.com/book/show/6898033-the-death-and-life-of-the-great-american-school-system"
      },
      {
        "type": "secondary",
        "title": "OECD PISA country profiles",
        "note": "Free online.",
        "url": "https://www.oecd.org/en/topics/pisa.html"
      }
    ],
    "videos": [
      {
        "title": "Waiting for Superman documentary",
        "source": "YouTube",
        "duration": "90 min",
        "url": "https://www.youtube.com/results?search_query=Waiting+for+Superman+documentary"
      },
      {
        "title": "Diane Ravitch on market-based reform",
        "source": "YouTube",
        "duration": "35 min",
        "url": "https://www.youtube.com/results?search_query=Diane+Ravitch+market+reform+education+lecture"
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
    "id": "m11",
    "n": 11,
    "phase": 2,
    "days": "72–77",
    "title": "The teacher",
    "sub": "The single strongest in-school predictor of outcomes — who becomes a teacher, training models, status, and what research shows.",
    "bigIdea": "Teacher quality explains more variation in student outcomes than class size, school type, or resources. Yet teacher policy remains the most contested area of education reform.",
    "thinkers": [
      {
        "name": "John Hattie",
        "era": "b. 1950",
        "claim": "Meta-analysis of 1,400+ studies: teacher clarity, feedback, and relationships have the largest in-school effect sizes."
      },
      {
        "name": "Linda Darling-Hammond",
        "era": "b. 1951",
        "claim": "Investing in teacher education and working conditions produces better outcomes than testing and accountability frameworks."
      },
      {
        "name": "Raj Chetty",
        "era": "b. 1979",
        "claim": "Longitudinal data shows teacher quality in early grades has measurable effects on lifetime earnings, health, and civic participation."
      }
    ],
    "week": [
      {
        "day": 72,
        "type": "read",
        "main": "Hattie, Visible Learning for Teachers (Ch. 1–2)",
        "sub": "What 1,400+ meta-analyses show about in-school effect sizes. 45 min",
        "url": "https://www.goodreads.com/book/show/13155126-visible-learning-for-teachers"
      },
      {
        "day": 73,
        "type": "read",
        "main": "Chetty, Friedman & Rockoff — The Long-Term Impact of Teachers (2014)",
        "sub": "Longitudinal data on lifetime effects of teacher quality. Free PDF.",
        "url": "https://rajchetty.com/wp-content/uploads/2024/08/w17699.pdf"
      },
      {
        "day": 74,
        "type": "case",
        "main": "Case: Finland’s teacher selection and training model",
        "sub": "Why teaching is a prestigious profession in Finland, and what that produces.",
        "url": "https://www.youtube.com/results?search_query=Finland+teacher+education+training+system"
      },
      {
        "day": 75,
        "type": "case",
        "main": "Case: The US teacher quality debate — TFA, performance pay, value-added",
        "sub": "How market-based approaches to teacher quality have played out."
      },
      {
        "day": 76,
        "type": "read",
        "main": "Darling-Hammond, The Flat World and Education (Ch. 1)",
        "sub": "What teacher preparation systems in top-performing countries share. 40 min",
        "url": "https://www.goodreads.com/book/show/6462838-the-flat-world-and-education"
      },
      {
        "day": 77,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on teacher quality, research, and policy."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Visible Learning for Teachers, Ch. 1–2",
        "note": "John Hattie (2012). Goodreads.",
        "url": "https://www.goodreads.com/book/show/13155126-visible-learning-for-teachers"
      },
      {
        "type": "primary",
        "title": "The Long-Term Impact of Teachers (2014)",
        "note": "Chetty, Friedman & Rockoff. Free PDF.",
        "url": "https://rajchetty.com/wp-content/uploads/2024/08/w17699.pdf"
      },
      {
        "type": "primary",
        "title": "The Flat World and Education, Ch. 1",
        "note": "Linda Darling-Hammond (2010). Goodreads.",
        "url": "https://www.goodreads.com/book/show/6462838-the-flat-world-and-education"
      },
      {
        "type": "secondary",
        "title": "OECD TALIS — Teaching and Learning survey",
        "note": "Free online.",
        "url": "https://www.oecd.org/education/talis/"
      }
    ],
    "videos": [
      {
        "title": "John Hattie on teacher impact",
        "source": "YouTube",
        "duration": "35 min",
        "url": "https://www.youtube.com/results?search_query=John+Hattie+teacher+impact+visible+learning"
      },
      {
        "title": "Finland’s teacher education system",
        "source": "YouTube",
        "duration": "25 min",
        "url": "https://www.youtube.com/results?search_query=Finland+teacher+education+training+system"
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
    "id": "m12",
    "n": 12,
    "phase": 2,
    "days": "78–79",
    "title": "What systems produce",
    "sub": "Connecting system design to human outcomes — social mobility, civic participation, creativity, wellbeing, and longitudinal evidence.",
    "bigIdea": "Most system comparisons focus on what students score. This module asks what systems produce in the people who go through them — not just at 15, but across a lifetime.",
    "thinkers": [
      {
        "name": "James Heckman",
        "era": "b. 1944",
        "claim": "Early childhood investment produces the highest economic and social returns — the earlier the investment, the greater the long-run payoff."
      },
      {
        "name": "Raj Chetty",
        "era": "b. 1979",
        "claim": "Longitudinal data shows teacher quality in early grades has measurable effects on lifetime earnings, health, and civic participation."
      },
      {
        "name": "Yong Zhao",
        "era": "b. 1965",
        "claim": "High PISA scores and entrepreneurial creativity are in systematic tension — nations that top rankings may suppress the qualities modern economies actually need."
      }
    ],
    "week": [
      {
        "day": 78,
        "type": "read",
        "main": "Heckman Equation — Invest in early childhood development",
        "sub": "The rate-of-return evidence. Free at heckmanequation.org. 50 min",
        "url": "https://heckmanequation.org/resource/invest-in-early-childhood-development-reduce-deficits-strengthen-the-economy/"
      },
      {
        "day": 79,
        "type": "reflect",
        "main": "Synthesis: What do the Phase 2 systems actually produce?",
        "sub": "Write 500 words. Choose any two systems from Modules 7–11. What do they produce beyond test scores — social mobility, civic participation, creativity, wellbeing?"
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Invest in early childhood development — Heckman Equation",
        "note": "James Heckman. Free online.",
        "url": "https://heckmanequation.org/resource/invest-in-early-childhood-development-reduce-deficits-strengthen-the-economy/"
      },
      {
        "type": "primary",
        "title": "The Long-Term Impact of Teachers (2014)",
        "note": "Chetty, Friedman & Rockoff. Free PDF.",
        "url": "https://rajchetty.com/wp-content/uploads/2024/08/w17699.pdf"
      },
      {
        "type": "secondary",
        "title": "The Spirit Level — Ch. 5: Education",
        "note": "Wilkinson & Pickett (2009). Goodreads.",
        "url": "https://www.goodreads.com/book/show/6304611-the-spirit-level"
      }
    ],
    "videos": [
      {
        "title": "James Heckman on early childhood investment",
        "source": "YouTube",
        "duration": "25 min",
        "url": "https://www.youtube.com/results?search_query=James+Heckman+early+childhood+investment+Nobel"
      },
      {
        "title": "Raj Chetty — big data and social problems",
        "source": "YouTube",
        "duration": "20 min",
        "url": "https://www.youtube.com/results?search_query=Raj+Chetty+big+data+economic+social+problems"
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
    "id": "m13",
    "n": 13,
    "phase": 3,
    "days": "80–86",
    "title": "Special education, inclusion, and neurodiversity",
    "sub": "From segregation to mainstreaming — the history, philosophy, and evidence on educating students with diverse needs.",
    "bigIdea": "How a school system treats its most vulnerable students reveals its deepest values. The debate between inclusion and specialisation is one of the most contested in contemporary education.",
    "thinkers": [
      {
        "name": "UNESCO",
        "era": "1994",
        "claim": "The Salamanca Statement: all children should be educated together in mainstream schools wherever possible."
      },
      {
        "name": "Mel Ainscow",
        "era": "contemporary",
        "claim": "Inclusive education is not about placing disabled students in mainstream classrooms — it is about transforming those classrooms to be responsive to all learners."
      }
    ],
    "week": [
      {
        "day": 80,
        "type": "read",
        "main": "UNESCO Salamanca Statement (1994) — full text",
        "sub": "The foundational document of inclusive education policy. Free PDF. 30 min",
        "url": "https://unesdoc.unesco.org/ark:/48223/pf0000098427"
      },
      {
        "day": 81,
        "type": "case",
        "main": "Case: The history of special education",
        "sub": "From institutional segregation to mainstreaming to inclusion — and the evidence at each stage.",
        "url": "https://www.youtube.com/results?search_query=history+of+special+education"
      },
      {
        "day": 82,
        "type": "read",
        "main": "Ainscow, Developing Inclusive Education Systems (2005)",
        "sub": "What inclusion actually requires structurally. ResearchGate open access. 35 min",
        "url": "https://www.researchgate.net/publication/43501703_Developing_Inclusive_Education_Systems_What_are_the_Levers_for_Change"
      },
      {
        "day": 83,
        "type": "case",
        "main": "Case: Neurodiversity and schooling",
        "sub": "Dyslexia, ADHD, autism — what does research show about effective approaches?",
        "url": "https://www.youtube.com/results?search_query=neurodiversity+learning+schools"
      },
      {
        "day": 84,
        "type": "case",
        "main": "Case: Finland and UK — contrasting approaches to special education",
        "sub": "Finland’s early intervention model vs. the UK’s Education, Health and Care Plan (EHCP) system."
      },
      {
        "day": 85,
        "type": "reflect",
        "main": "Debate: Is full inclusion always preferable to specialist settings?",
        "sub": "Write 400 words taking a clear position with evidence."
      },
      {
        "day": 86,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on special education, inclusion, and neurodiversity."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "UNESCO Salamanca Statement (1994)",
        "note": "Free UNESCO PDF.",
        "url": "https://unesdoc.unesco.org/ark:/48223/pf0000098427"
      },
      {
        "type": "primary",
        "title": "Developing Inclusive Education Systems (2005)",
        "note": "Mel Ainscow. ResearchGate open access.",
        "url": "https://www.researchgate.net/publication/43501703_Developing_Inclusive_Education_Systems_What_are_the_Levers_for_Change"
      },
      {
        "type": "secondary",
        "title": "Dilemmas of Difference",
        "note": "Brahm Norwich (2008). Goodreads.",
        "url": "https://www.goodreads.com/book/show/4406524-dilemmas-of-difference-inclusion-and-disability"
      }
    ],
    "videos": [
      {
        "title": "What is inclusive education?",
        "source": "YouTube",
        "duration": "15 min",
        "url": "https://www.youtube.com/results?search_query=what+is+inclusive+education+explained"
      },
      {
        "title": "Neurodiversity and learning",
        "source": "YouTube",
        "duration": "20 min",
        "url": "https://www.youtube.com/results?search_query=neurodiversity+learning+schools"
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
    "id": "m14",
    "n": 14,
    "phase": 3,
    "days": "87–93",
    "title": "Education reform — what works and why it is hard",
    "sub": "The graveyard of well-intentioned reforms. What made Finland’s transformation succeed. Teacher capacity, system coherence, and the politics of change.",
    "bigIdea": "Education reform has a remarkable record of failure. Understanding why — and what the exceptions tell us — is the most practically important topic in this course.",
    "thinkers": [
      {
        "name": "Michael Fullan",
        "era": "b. 1940",
        "claim": "Reform fails when it focuses on structural changes rather than building professional capacity and coherent culture."
      },
      {
        "name": "Larry Cuban",
        "era": "b. 1934",
        "claim": "Teaching has been remarkably stable despite waves of reform — schools resist change because core practices are deeply embedded."
      },
      {
        "name": "Barber & Mourshed",
        "era": "2007",
        "claim": "The quality of an education system cannot exceed the quality of its teachers — the teacher pipeline matters most."
      }
    ],
    "week": [
      {
        "day": 87,
        "type": "read",
        "main": "Fullan, The New Meaning of Educational Change (Ch. 1–2)",
        "sub": "Why reform fails — and what the change process actually requires. 45 min",
        "url": "https://www.goodreads.com/book/show/436571.The_New_Meaning_of_Educational_Change"
      },
      {
        "day": 88,
        "type": "read",
        "main": "Barber & Mourshed, How the World’s Best School Systems Come Out on Top (2007)",
        "sub": "Free McKinsey report. How top systems recruit, develop, and retain teachers. 40 min",
        "url": "https://www.mckinsey.com/industries/education/our-insights/how-the-worlds-best-performing-school-systems-come-out-on-top"
      },
      {
        "day": 89,
        "type": "case",
        "main": "Case: Finland’s 1970s comprehensive school reform",
        "sub": "What political conditions, teacher union support, and 10-year timelines made it work."
      },
      {
        "day": 90,
        "type": "case",
        "main": "Case: England’s academy programme",
        "sub": "Structural reform without capacity building — a cautionary case."
      },
      {
        "day": 91,
        "type": "watch",
        "main": "Michael Fullan on system thinking and change",
        "sub": "YouTube search: Michael Fullan coherence educational change",
        "url": "https://www.youtube.com/results?search_query=Michael+Fullan+coherence+educational+change"
      },
      {
        "day": 92,
        "type": "reflect",
        "main": "What does effective reform require?",
        "sub": "Draft 5 principles of successful education reform from this module. 300 words."
      },
      {
        "day": 93,
        "type": "quiz",
        "main": "Module quiz",
        "sub": "10 questions on what makes reform succeed or fail."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "The New Meaning of Educational Change, Ch. 1–2",
        "note": "Michael Fullan (2001). Goodreads.",
        "url": "https://www.goodreads.com/book/show/436571.The_New_Meaning_of_Educational_Change"
      },
      {
        "type": "primary",
        "title": "How the World’s Best School Systems Come Out on Top (2007)",
        "note": "Barber & Mourshed. Free McKinsey PDF.",
        "url": "https://www.mckinsey.com/industries/education/our-insights/how-the-worlds-best-performing-school-systems-come-out-on-top"
      },
      {
        "type": "secondary",
        "title": "Coherence: The Right Drivers in Action",
        "note": "Fullan & Quinn (2016). Goodreads.",
        "url": "https://www.goodreads.com/book/show/25734067-coherence"
      }
    ],
    "videos": [
      {
        "title": "Michael Fullan on system thinking and change",
        "source": "YouTube",
        "duration": "30 min",
        "url": "https://www.youtube.com/results?search_query=Michael+Fullan+coherence+educational+change"
      },
      {
        "title": "Why education reform fails — lecture",
        "source": "YouTube",
        "duration": "25 min",
        "url": "https://www.youtube.com/results?search_query=why+education+reform+fails+lecture"
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
    "id": "m15",
    "n": 15,
    "phase": 3,
    "days": "94–97",
    "title": "Technology, AI, and the future of school",
    "sub": "From television to MOOCs to AI — why technology keeps failing to transform education, and what is genuinely different now.",
    "bigIdea": "Every generation has believed that new technology would transform education. Every generation has been mostly wrong. This module asks what is different about AI — and what school will remain irreplaceably for.",
    "thinkers": [
      {
        "name": "Larry Cuban",
        "era": "b. 1934",
        "claim": "Technology consistently amplifies existing educational practice rather than transforming it. The pattern has held for over 100 years."
      },
      {
        "name": "Neil Postman",
        "era": "1931–2003",
        "claim": "Technology is never neutral. It comes with an ideology that shapes how we think — often without our awareness."
      },
      {
        "name": "Justin Reich",
        "era": "contemporary",
        "claim": "EdTech has consistently failed to deliver on transformational promises — it amplifies existing practice rather than changing it."
      }
    ],
    "week": [
      {
        "day": 94,
        "type": "read",
        "main": "Larry Cuban, Oversold and Underused (Intro & Ch. 1)",
        "sub": "Why technology keeps failing to transform teaching. 50 min",
        "url": "https://www.goodreads.com/book/show/1035022.Oversold_and_Underused"
      },
      {
        "day": 95,
        "type": "watch",
        "main": "Sugata Mitra, Build a School in the Cloud (TED)",
        "sub": "ted.com — the hole-in-the-wall experiments. Then read a critical response.",
        "url": "https://www.ted.com/talks/sugata_mitra_build_a_school_in_the_cloud"
      },
      {
        "day": 96,
        "type": "read",
        "main": "Luckin et al., Intelligence Unleashed (2016)",
        "sub": "On AI in education. Free Google PDF.",
        "url": "https://static.googleusercontent.com/media/edu.google.com/en//pdfs/Intelligence-Unleashed-Publication.pdf"
      },
      {
        "day": 97,
        "type": "debate",
        "main": "Final debate: AI will fundamentally transform school education within 20 years",
        "sub": "Write 600 words — for and against — drawing on evidence from across the course."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Oversold and Underused (Intro & Ch. 1)",
        "note": "Larry Cuban (2001). Goodreads.",
        "url": "https://www.goodreads.com/book/show/1035022.Oversold_and_Underused"
      },
      {
        "type": "primary",
        "title": "Intelligence Unleashed (2016)",
        "note": "Luckin et al. Free Google PDF.",
        "url": "https://static.googleusercontent.com/media/edu.google.com/en//pdfs/Intelligence-Unleashed-Publication.pdf"
      },
      {
        "type": "secondary",
        "title": "OECD AI and the Future of Education (2023)",
        "note": "Free OECD publication.",
        "url": "https://www.oecd.org/en/publications/ai-and-the-future-of-education_d59e8b56-en.html"
      },
      {
        "type": "secondary",
        "title": "Geek Heresy, Ch. 1–2",
        "note": "Kentaro Toyama (2015). Goodreads.",
        "url": "https://www.goodreads.com/book/show/22928545-geek-heresy"
      }
    ],
    "videos": [
      {
        "title": "Sugata Mitra — Build a School in the Cloud (TED)",
        "source": "TED.com",
        "duration": "22 min",
        "url": "https://www.ted.com/talks/sugata_mitra_build_a_school_in_the_cloud"
      },
      {
        "title": "Neil Selwyn on ed-tech myths",
        "source": "YouTube",
        "duration": "30 min",
        "url": "https://www.youtube.com/results?search_query=Neil+Selwyn+edtech+myths+technology+education"
      },
      {
        "title": "AI in education — what is real?",
        "source": "YouTube",
        "duration": "25 min",
        "url": "https://www.youtube.com/results?search_query=AI+artificial+intelligence+education+future+schools"
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
    "id": "m16",
    "n": 16,
    "phase": 3,
    "days": "101–107",
    "title": "Indian school education: structure, pressure, and purpose",
    "sub": "The colonial inheritance, exam culture, rote pedagogy, the learning crisis, and what a reformed system could look like.",
    "bigIdea": "India’s school system is not broken — it is doing exactly what it was designed to do. Understanding it requires understanding the colonial inheritance, post-Independence anxiety about meritocracy, and the social function of the board exam.",
    "thinkers": [
      {
        "name": "Krishna Kumar",
        "era": "b. 1948",
        "claim": "Indian schooling is rooted in a colonial pedagogy that valorised passive obedience, rote learning, and the certification of loyalty over the development of mind."
      },
      {
        "name": "Rabindranath Tagore",
        "era": "1861–1941",
        "claim": "Education must be rooted in joy, nature, and the child’s own culture — not the factory discipline of colonial schooling. His Parrot’s Training is the most devastating satire of rote education ever written."
      },
      {
        "name": "Madhav Chavan",
        "era": "contemporary",
        "claim": "ASER data shows India’s exam success masks a learning crisis: millions pass boards while unable to read a simple paragraph."
      }
    ],
    "week": [
      {
        "day": 101,
        "type": "read",
        "main": "Macaulay’s Minute on Indian Education (1835) — full text",
        "sub": "The founding document of colonial education policy. What was it designed to produce? 30 min",
        "url": "https://www.columbia.edu/itc/mealac/pritchett/00generallinks/macaulay/txt_minute_education_1835.html"
      },
      {
        "day": 102,
        "type": "read",
        "main": "Krishna Kumar, Political Agenda of Education (Ch. 1–2)",
        "sub": "How colonial pedagogy shaped Indian schooling. 45 min",
        "url": "https://www.goodreads.com/book/show/2408040.Political_Agenda_of_Education"
      },
      {
        "day": 103,
        "type": "watch",
        "main": "Satyamev Jayate — Education episode (Aamir Khan, 2012)",
        "sub": "Direct examination of exam pressure and coaching culture. YouTube: search Satyamev Jayate education episode.",
        "url": "https://www.youtube.com/results?search_query=Satyamev+Jayate+education+episode+Aamir+Khan"
      },
      {
        "day": 104,
        "type": "read",
        "main": "ASER 2023 Annual Report — executive summary",
        "sub": "The most rigorous data on actual learning outcomes in Indian schools. Free at asercentre.org.",
        "url": "https://asercentre.org/reports/"
      },
      {
        "day": 105,
        "type": "case",
        "main": "NCERT National Curriculum Framework (2005) — overview",
        "sub": "India’s own curriculum reform vision — and why it has not been implemented at scale. Free at ncert.nic.in.",
        "url": "https://ncert.nic.in/pdf/nc-framework/nf2005-10-11-2007.pdf"
      },
      {
        "day": 106,
        "type": "read",
        "main": "Tagore, The Parrot’s Training (1918)",
        "sub": "The most devastating satire of rote education ever written. Free at tagoreweb.in. 20 min",
        "url": "https://www.tagoreweb.in/Render/ShowContent.aspx?ct=Essays&bi=72EE92F5-BE50-40D7-7B2E-0000392E7946&ti=72EE92F5-BE50-4D17-7B2E-00003978A246"
      },
      {
        "day": 107,
        "type": "quiz",
        "main": "Module quiz + essay assignment",
        "sub": "10 questions + 600-word essay: What three reforms, grounded in evidence from this course, would most improve Indian schooling?"
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Macaulay’s Minute on Indian Education (1835)",
        "note": "Full text. Columbia University — free.",
        "url": "https://www.columbia.edu/itc/mealac/pritchett/00generallinks/macaulay/txt_minute_education_1835.html"
      },
      {
        "type": "primary",
        "title": "Political Agenda of Education, Ch. 1–2",
        "note": "Krishna Kumar (1991). Goodreads.",
        "url": "https://www.goodreads.com/book/show/2408040.Political_Agenda_of_Education"
      },
      {
        "type": "primary",
        "title": "ASER 2023 Annual Report",
        "note": "Pratham Foundation. Free online.",
        "url": "https://asercentre.org/reports/"
      },
      {
        "type": "primary",
        "title": "The Parrot’s Training (1918)",
        "note": "Rabindranath Tagore. Free at tagoreweb.in.",
        "url": "https://www.tagoreweb.in/Render/ShowContent.aspx?ct=Essays&bi=72EE92F5-BE50-40D7-7B2E-0000392E7946&ti=72EE92F5-BE50-4D17-7B2E-00003978A246"
      },
      {
        "type": "secondary",
        "title": "NCERT National Curriculum Framework (2005)",
        "note": "Free at ncert.nic.in.",
        "url": "https://ncert.nic.in/pdf/nc-framework/nf2005-10-11-2007.pdf"
      },
      {
        "type": "secondary",
        "title": "Rishi Valley School",
        "note": "Krishnamurti Foundation’s living alternative model.",
        "url": "https://www.rishi-valley.org/"
      }
    ],
    "videos": [
      {
        "title": "Satyamev Jayate — Education episode (Aamir Khan, 2012)",
        "source": "YouTube",
        "duration": "45 min",
        "url": "https://www.youtube.com/results?search_query=Satyamev+Jayate+education+episode+Aamir+Khan"
      },
      {
        "title": "Krishnamurti on the purpose of education",
        "source": "YouTube",
        "duration": "18 min",
        "url": "https://www.youtube.com/results?search_query=Krishnamurti+purpose+of+education"
      },
      {
        "title": "ASER 2023 findings — India learning crisis",
        "source": "YouTube",
        "duration": "20 min",
        "url": "https://www.youtube.com/results?search_query=ASER+2023+India+learning+outcomes+Pratham"
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

  {
    "id": "m17",
    "n": 17,
    "phase": 3,
    "days": "108–110",
    "title": "Designing a school system — final capstone",
    "sub": "Synthesise everything from 110 days of study to design a coherent, philosophically grounded school system for a context of your choice.",
    "bigIdea": "This is the course’s final exercise. You are not describing an existing system — you are designing one. Every decision must be justified using the thinkers, evidence, and country cases you have encountered. This is what 110 days of study was for.",
    "thinkers": [
      {
        "name": "All 50+ thinkers in this course",
        "era": "Plato to Chetty",
        "claim": "This module introduces no new thinkers. It asks you to orchestrate the ones you already know into a coherent design position."
      }
    ],
    "week": [
      {
        "day": 108,
        "type": "reflect",
        "main": "Design Day 1: Choose your context + philosophical foundation",
        "sub": "Choose a context: a real country, an imagined state, a city, or a community school. Write 400 words establishing your theory of what school is for, your equity commitments, and the three thinkers most grounding your design."
      },
      {
        "day": 109,
        "type": "reflect",
        "main": "Design Day 2: Five structural decisions",
        "sub": "Write 500 words making and justifying: (1) curriculum approach, (2) assessment model, (3) teacher model, (4) early years policy, (5) tracking or mixed-ability. Cite at least five country cases or empirical studies from the course."
      },
      {
        "day": 110,
        "type": "quiz",
        "main": "Design Day 3: Equity provisions + submit capstone + final quiz",
        "sub": "Complete your 1,500-word design document. Final sections: who might your system fail, and how does it prevent that? Then: complete the final course quiz."
      }
    ],
    "readings": [
      {
        "type": "primary",
        "title": "Your own position paper from Module 1",
        "note": "Read it again. How has your thinking evolved across 110 days?"
      },
      {
        "type": "primary",
        "title": "Finnish Lessons — Chapter 5",
        "note": "Pasi Sahlberg. Goodreads.",
        "url": "https://www.goodreads.com/book/show/11002234-finnish-lessons"
      },
      {
        "type": "secondary",
        "title": "World Class — Chapter 6",
        "note": "Schleicher. Free OECD iLibrary.",
        "url": "https://www.oecd-ilibrary.org/education/world-class_9789264300002-en"
      },
      {
        "type": "secondary",
        "title": "The New Meaning of Educational Change — Ch. 8",
        "note": "Fullan. Goodreads.",
        "url": "https://www.goodreads.com/book/show/436571.The_New_Meaning_of_Educational_Change"
      }
    ],
    "videos": [
      {
        "title": "Andreas Schleicher — Use data to build better schools (TED)",
        "source": "TED.com",
        "duration": "18 min",
        "url": "https://www.ted.com/talks/andreas_schleicher_use_data_to_build_better_schools"
      },
      {
        "title": "Michael Fullan on system coherence and change",
        "source": "YouTube",
        "duration": "22 min",
        "url": "https://www.youtube.com/results?search_query=Michael+Fullan+coherence+educational+change"
      }
    ],
    "quiz": [
      {
        "q": "A school system producing high PISA scores but low civic participation and high adolescent anxiety should be evaluated as:",
        "opts": [
          "Successful by any reasonable measure",
          "Achieving narrow measured outcomes at the expense of broader educational goals",
          "A strong foundation needing only incremental improvement",
          "The necessary trade-off for economic competitiveness"
        ],
        "ans": 1,
        "ex": "Sen’s capability approach and Dewey’s democratic education framework both challenge any evaluation of schooling that reduces success to cognitive test scores, ignoring wellbeing, citizenship, and creative development."
      },
      {
        "q": "Across the full course, which factor do researchers most consistently identify as the strongest in-school predictor of student outcomes?",
        "opts": [
          "School type (public vs private)",
          "Class size",
          "Teacher quality and effectiveness",
          "School funding level"
        ],
        "ans": 2,
        "ex": "The research consensus (Hattie, OECD, Chetty) identifies teacher effectiveness as the strongest in-school predictor of student learning — outweighing class size, school type, and resources."
      },
      {
        "q": "The equity-excellence tension is resolved by evidence showing:",
        "opts": [
          "Equity and excellence always trade off — you must choose",
          "Finland and Canada demonstrate both can be achieved through inclusive high-quality teaching for all",
          "Private schools are necessary to maintain excellence",
          "Ability tracking is the fairest approach"
        ],
        "ans": 1,
        "ex": "Finland, Canada, and Japan demonstrate that systems explicitly committed to equity can simultaneously achieve high mean performance. The trade-off assumption reflects market logic, not research evidence."
      },
      {
        "q": "Fullan argues reform fails when:",
        "opts": [
          "Governments underfund it",
          "It focuses on structural changes without building professional capacity and culture",
          "Teacher unions oppose it",
          "It is implemented too slowly"
        ],
        "ans": 1,
        "ex": "Fullan consistently argues restructuring without reculturing fails — the political and professional conditions for genuine reform are rare and difficult to sustain across government terms."
      },
      {
        "q": "Heckman’s evidence most strongly supports which structural decision?",
        "opts": [
          "Extending the school day",
          "Investing heavily in high-quality early childhood education before formal schooling",
          "Increasing university places",
          "Reducing class sizes in secondary school"
        ],
        "ans": 1,
        "ex": "Heckman consistently shows that the return on educational investment is highest in the earliest years. This challenges budget allocation that concentrates resources on secondary and higher education."
      },
      {
        "q": "A knowledge-rich curriculum (Hirsch) is supported over a generic skills curriculum because:",
        "opts": [
          "Skills can be taught without content",
          "Reading comprehension and critical thinking require background knowledge — you cannot think critically about nothing",
          "Traditional approaches are always superior",
          "Skills-based curricula are more expensive"
        ],
        "ans": 1,
        "ex": "Hirsch’s argument, supported by cognitive science, is that comprehension and thinking are content-dependent. Students who lack background knowledge cannot self-direct into deeper learning from a knowledge vacuum."
      },
      {
        "q": "Which combination best describes systems achieving both high performance and high equity?",
        "opts": [
          "Selective admissions + high funding",
          "Universal high-quality early education + trusted well-trained teachers + coherent curriculum + low-stakes assessment",
          "Competition between schools + parental choice",
          "High-stakes national exams + performance pay"
        ],
        "ans": 1,
        "ex": "The comparative evidence consistently identifies this cluster: well-prepared, trusted teachers; coherent curriculum; high-quality early years; and assessment used for learning rather than accountability."
      },
      {
        "q": "The most intellectually honest capstone will explicitly address:",
        "opts": [
          "Why your system is perfect",
          "The specific groups your system is most likely to fail and why",
          "Why other systems are inferior to yours",
          "How your system would score on PISA"
        ],
        "ans": 1,
        "ex": "Every school system fails some students. A rigorous design document identifies who those students are — based on evidence about which groups current systems underserve — and builds specific provisions to prevent those failures."
      },
      {
        "q": "Drawing on Module 2, what does political history suggest about implementing a new system?",
        "opts": [
          "Change can happen overnight with sufficient political will",
          "Educational systems are deeply embedded in political and cultural structures — durable reform requires broad coalition and long timelines",
          "External consultants are the key to successful reform",
          "Testing and accountability drive all successful reform"
        ],
        "ans": 1,
        "ex": "Every successful system reform — Finland, Ontario, Singapore — took decades, built broad political consensus, and worked with the teaching profession rather than against it."
      },
      {
        "q": "The most important single insight from 110 days of studying global school education is arguably:",
        "opts": [
          "Finland is the best system and should be copied globally",
          "There is no single best system — but there are transferable principles: teacher quality, equity commitment, coherence, trust, and a clear theory of what school is for",
          "PISA rankings determine which systems work and which do not",
          "Technology will solve education’s fundamental challenges within a generation"
        ],
        "ans": 1,
        "ex": "The comparative and historical evidence consistently resists simple solutions. No system is perfect; every system reflects its context. But the principles that distinguish high-performing, equitable systems recur across cultures and continents."
      }
    ]
  },

];
