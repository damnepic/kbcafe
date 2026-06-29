// EXPERIMENTAL /beginner-ai section. Self-contained, noindex, NOT linked from the live
// site yet. Grandma-friendly AI literacy: topics, plain-language articles, honest tool list.
// (No star ratings on tools: we don't fabricate metrics.)

export const BG_TOPICS = [
  { id: 'ai-fundamentals', label: 'AI Fundamentals', blurb: 'Understand what AI is and how it works, at a beginner level.', icon: '🧠' },
  { id: 'prompting', label: 'Prompt Engineering', blurb: 'Learn to write effective prompts that get great results.', icon: '💬' },
  { id: 'image-generation', label: 'Image Generation', blurb: 'Create images with AI tools, no art skills required.', icon: '🎨' },
  { id: 'writing', label: 'Writing & Content', blurb: 'Use AI for writing, editing, and content, in your own voice.', icon: '✍️' },
  { id: 'productivity', label: 'Productivity', blurb: 'Save time on everyday tasks with AI assistants.', icon: '⚡' },
  { id: 'safety', label: 'Safety & Ethics', blurb: 'Understand responsible AI use, privacy, and pitfalls.', icon: '🛡️' },
];

export const BG_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export const BG_TOOLS = [
  { name: 'ChatGPT', cat: 'Writing & Chat', price: 'Free + Premium', ds: 'The most popular AI assistant for everyday questions, writing, and brainstorming.' },
  { name: 'Claude', cat: 'Writing & Chat', price: 'Free + Premium', ds: 'A thoughtful AI assistant, especially strong at writing and working through long documents.' },
  { name: 'Google Gemini', cat: 'Writing & Chat', price: 'Free + Premium', ds: 'Google&rsquo;s AI assistant, built into Search, Gmail, and Google Docs.' },
  { name: 'Microsoft Copilot', cat: 'Productivity', price: 'Free + Premium', ds: 'AI built into Windows and Microsoft Office apps like Word and Excel.' },
  { name: 'Midjourney', cat: 'Image Generation', price: 'Paid', ds: 'Turns a written description into striking, high-quality images.' },
  { name: 'DALL&middot;E 3', cat: 'Image Generation', price: 'Free + Premium', ds: 'Easy image generation built right inside ChatGPT.' },
];

export const BG_GUIDES = [
  {
    slug: 'what-is-ai', title: 'What is AI? A Simple Guide for Complete Beginners',
    topic: 'ai-fundamentals', level: 'Beginner', minutes: 6,
    excerpt: 'Artificial intelligence sounds complex, but the core idea is surprisingly simple. Here is what AI actually is, in plain language.',
    body: `
<p>You have probably heard the word &ldquo;AI&rdquo; everywhere lately. The good news is that the core idea is much simpler than it sounds. Let us walk through it slowly, with no jargon.</p>
<h2>AI is a very good guesser</h2>
<p>Today&rsquo;s AI is a computer program that has read an enormous amount of writing and learned to predict what words tend to come next. That is really the heart of it. When you ask it something, it makes an extremely well-educated guess, one word at a time, based on everything it has seen before.</p>
<p>Picture the most well-read person you know, someone who has skimmed millions of books and articles and can talk about almost anything in a friendly, confident voice. That is the feeling of using AI. Just remember: sounding confident is not the same as being correct.</p>
<h2>The tools you have heard of</h2>
<p>ChatGPT, Claude, and Gemini are all AI assistants. You type a question or a request, and they write back. They can explain things, draft an email, summarize a long document, suggest recipes, help plan a trip, and much more.</p>
<h2>What AI is great at, and where to be careful</h2>
<p><strong>Wonderful for:</strong> explaining, writing, summarizing, translating, brainstorming, and answering general questions.</p>
<p><strong>Be careful with:</strong> exact facts, recent news, math, and anything where being wrong really matters. AI can confidently make things up that sound true, which we cover in <a href="/beginner-ai/ai-hallucinations">Understanding AI Hallucinations</a>. Always double-check anything important.</p>
<h2>The best way to start</h2>
<p>Try it. Open a free AI assistant and ask about something you actually care about: &ldquo;Explain this like I am five,&rdquo; or &ldquo;Help me write a birthday message for my granddaughter.&rdquo; You cannot break anything, and the more specific you are, the better it answers. When you are ready, learn the simple recipe in <a href="/beginner-ai/first-ai-prompt">How to Write Your First AI Prompt</a>.</p>
<p>That is all AI really is: a powerful, friendly guessing machine, wonderful for a first draft and a great explainer, as long as you stay in the driver&rsquo;s seat.</p>`,
  },
  {
    slug: 'first-ai-prompt', title: 'How to Write Your First AI Prompt',
    topic: 'prompting', level: 'Beginner', minutes: 7,
    excerpt: 'A great prompt is the difference between a mediocre and an amazing AI response. Learn the simple framework that works every time.',
    body: `
<p>A &ldquo;prompt&rdquo; is just what you ask the AI. The quality of what you get back depends almost entirely on the quality of what you put in. The good news: there is a simple recipe, and you do not need to memorize anything fancy.</p>
<h2>The five-part recipe</h2>
<p>Think of giving instructions to a brand-new, very fast assistant who is eager but cannot read your mind. Tell it:</p>
<ul>
  <li><strong>The goal:</strong> what you actually want. &ldquo;Write a thank-you note&rdquo; beats &ldquo;help with a note.&rdquo;</li>
  <li><strong>Who it is for:</strong> &ldquo;for my doctor&rdquo; sounds very different from &ldquo;for my best friend.&rdquo;</li>
  <li><strong>Any context:</strong> paste the email you are replying to, or the details it needs to know.</li>
  <li><strong>Constraints:</strong> &ldquo;keep it under 100 words,&rdquo; &ldquo;warm but professional,&rdquo; &ldquo;no slang.&rdquo;</li>
  <li><strong>The format:</strong> a paragraph, a bulleted list, a table. Say which.</li>
</ul>
<h2>From vague to great</h2>
<p><strong>Vague:</strong> &ldquo;Write about exercise.&rdquo;</p>
<p><strong>Great:</strong> &ldquo;Write a friendly, encouraging 150-word note for my 70-year-old mother about gentle daily exercises she can do at home. Use simple language and end with one easy first step.&rdquo;</p>
<p>See the difference? The second one tells the AI the goal, the audience, the length, the tone, and how to finish. You will get something genuinely useful instead of generic filler.</p>
<h2>Then just talk to it</h2>
<p>You do not have to get it perfect on the first try. If the answer is not quite right, say so: &ldquo;Make it shorter,&rdquo; &ldquo;Sound warmer,&rdquo; &ldquo;Give me three options.&rdquo; A conversation with the AI is normal and expected. Each follow-up steers it closer to what you wanted.</p>
<p>Master those five parts and you have learned the single most useful AI skill there is.</p>`,
  },
  {
    slug: 'first-ai-image', title: 'Creating Your First AI Image: A Step-by-Step Guide',
    topic: 'image-generation', level: 'Beginner', minutes: 8,
    excerpt: 'Want to generate an image with AI? This walkthrough shows you exactly how, from choosing a tool to writing a description.',
    body: `
<p>AI can turn a written description into a picture, no drawing skills needed. It feels like magic the first time. Here is how to make your first one.</p>
<h2>Step 1: Pick a tool</h2>
<p>The easiest place to start is <strong>ChatGPT</strong> (it can make images with DALL&middot;E built in) or <strong>Microsoft Copilot</strong>, both of which have free options. <strong>Midjourney</strong> makes especially beautiful images but is paid. For your first try, the free options are perfect.</p>
<h2>Step 2: Describe what you want</h2>
<p>Type a plain description of the picture you imagine. The more detail, the closer it gets. A simple template:</p>
<p><em>[subject], [setting], [style], [mood or lighting]</em></p>
<p>For example: &ldquo;A cozy cottage in a snowy forest at sunset, warm lights in the windows, painted in a soft watercolor style.&rdquo; You can be as plain or as fancy as you like.</p>
<h2>Step 3: Look, then refine</h2>
<p>The AI will show you an image in a few seconds. If it is not quite right, just adjust your words: &ldquo;make it daytime,&rdquo; &ldquo;add a small dog,&rdquo; &ldquo;more realistic.&rdquo; Generating a few versions is normal, each round gets closer.</p>
<h2>A few gentle tips</h2>
<ul>
  <li>Naming a <strong>style</strong> (watercolor, photograph, cartoon, oil painting) makes a big difference. See <a href="/beginner-ai/ai-image-styles">Getting Started with AI Image Styles</a>.</li>
  <li>AI sometimes struggles with hands, text, and precise details. That is normal today.</li>
  <li>These images are great for fun, cards, and ideas. Be thoughtful about using them commercially.</li>
</ul>
<p>That is it. Describe, generate, refine. Within a few minutes you will have made something that did not exist before.</p>`,
  },
  {
    slug: 'everyday-ai-tasks', title: '10 Everyday Tasks AI Can Do For You',
    topic: 'productivity', level: 'Beginner', minutes: 7,
    excerpt: 'From inbox triage to meal planning, here are ten practical ways AI can save you time starting today.',
    body: `
<p>You do not need a special project to get value from AI. It shines on small, everyday tasks. Here are ten you can try right now with any free AI assistant.</p>
<ol>
  <li><strong>Write awkward emails.</strong> &ldquo;Help me politely decline this invitation.&rdquo;</li>
  <li><strong>Summarize long things.</strong> Paste an article or document and ask for the key points.</li>
  <li><strong>Plan meals.</strong> &ldquo;Give me three easy dinners using chicken, rice, and what is in season.&rdquo;</li>
  <li><strong>Explain anything.</strong> &ldquo;Explain how a mortgage works, simply.&rdquo;</li>
  <li><strong>Draft messages.</strong> Birthday notes, thank-you cards, tricky texts.</li>
  <li><strong>Make lists.</strong> Packing lists, grocery lists, a checklist for a trip.</li>
  <li><strong>Fix your writing.</strong> &ldquo;Make this clearer and fix any mistakes,&rdquo; then paste your text.</li>
  <li><strong>Brainstorm.</strong> Gift ideas, party themes, names for a pet or a business.</li>
  <li><strong>Translate.</strong> A phrase, an email, or a menu into another language.</li>
  <li><strong>Learn a little.</strong> &ldquo;Teach me one new thing about gardening each day.&rdquo;</li>
</ol>
<h2>The trick that ties them together</h2>
<p>Notice the pattern: you give the AI a clear, specific request, and it gives you a strong first draft. You stay in charge, you check the result, and you tweak as needed. For exact facts or anything important, always double-check.</p>
<p>Pick one task from this list today. Once one of them saves you ten minutes, the rest will feel obvious.</p>`,
  },
  {
    slug: 'ai-privacy', title: 'AI Privacy: What Happens to Your Data',
    topic: 'safety', level: 'Beginner', minutes: 6,
    excerpt: 'When you type into an AI tool, where does that data go? Here is what every beginner should know, without the scare tactics.',
    body: `
<p>It is a fair question: when you type something into an AI tool, where does it go? Here is the plain truth, without the fear.</p>
<h2>What usually happens</h2>
<p>When you use a tool like ChatGPT, your message is sent over the internet to the company&rsquo;s computers, which generate a reply and send it back. Your conversations are typically stored on your account, and, depending on the tool and your settings, may be used to help improve the AI.</p>
<h2>The simple rule</h2>
<p>Treat an AI chat a bit like talking to a helpful stranger at a company, not a private diary. It is great for most things. But <strong>do not paste in things you would not want stored</strong>: passwords, full credit card or bank numbers, government ID numbers, or other people&rsquo;s private details.</p>
<h2>A few easy protections</h2>
<ul>
  <li><strong>Check the settings.</strong> Most tools let you turn off &ldquo;use my chats to train the AI&rdquo; and let you delete your history.</li>
  <li><strong>Anonymize when you can.</strong> Replace real names or numbers with &ldquo;X&rdquo; if the details do not matter to your question.</li>
  <li><strong>Use the free version for low-stakes tasks.</strong> You do not need to share anything sensitive to get help with an email or a recipe.</li>
</ul>
<h2>A note on the friendlier tools</h2>
<p>Some tools are built to be private by design and run entirely on your own device, so nothing you type ever leaves your computer. When privacy matters, those are worth seeking out.</p>
<p>The bottom line: AI is safe to enjoy for everyday tasks. Just keep your most sensitive information out of the chat box, and you are in good shape.</p>`,
  },
  {
    slug: 'writing-with-ai', title: 'Writing Better with AI: A Practical Guide',
    topic: 'writing', level: 'Intermediate', minutes: 6,
    excerpt: 'AI will not replace your voice, but it can sharpen it. Here is how to use AI as a writing partner without sounding like a robot.',
    body: `
<p>AI is a wonderful writing partner, but used lazily it produces flat, generic text everyone can spot. The secret is to treat it like an editor and a sounding board, not a ghostwriter. Here is how.</p>
<h2>Use it for the hard parts, not the whole thing</h2>
<ul>
  <li><strong>Beating the blank page:</strong> &ldquo;Give me three ways to open this letter.&rdquo;</li>
  <li><strong>Tightening:</strong> &ldquo;Make this paragraph clearer and shorter, keep my voice.&rdquo;</li>
  <li><strong>Finding the right word:</strong> &ldquo;A warmer word for &lsquo;utilize&rsquo;?&rdquo;</li>
  <li><strong>A second opinion:</strong> &ldquo;Where is this confusing? What did I leave out?&rdquo;</li>
</ul>
<h2>Keep your voice</h2>
<p>This is the whole game. Write the first draft yourself, even roughly, then ask AI to polish it. If you let the AI write from scratch, you get the AI&rsquo;s voice, not yours. Start with your words and have it help you say them better.</p>
<h2>Tell the AI how to sound</h2>
<p>Generic in, generic out. Give it your tone: &ldquo;Casual and a little funny,&rdquo; &ldquo;Plain and direct, no buzzwords,&rdquo; or even paste a paragraph you have written and say &ldquo;match this style.&rdquo;</p>
<h2>The honesty rule</h2>
<p>AI writing often slips in clich&eacute;s and over-polished phrases. Read every sentence and cut anything that does not sound like you. The final pass should always be human. The result is your thinking, expressed more clearly, which is exactly what good writing help should do.</p>`,
  },
  {
    slug: 'ai-hallucinations', title: 'Understanding AI Hallucinations (and How to Avoid Them)',
    topic: 'safety', level: 'Intermediate', minutes: 8,
    excerpt: 'AI can confidently state things that are completely wrong. Learn why this happens and how to protect yourself.',
    body: `
<p>Here is the single most important thing to know about AI: it can be <strong>confidently wrong</strong>. It will state a made-up fact, invent a quote, or cite a book that does not exist, all in the same calm, sure voice it uses for true things. This is called a &ldquo;hallucination,&rdquo; and understanding it will protect you.</p>
<h2>Why it happens</h2>
<p>Remember that AI is a guessing machine that predicts likely words. It is not looking anything up in a fact book. When it does not actually know something, it does not say &ldquo;I am not sure.&rdquo; It generates the most plausible-sounding answer, and plausible is not the same as true.</p>
<p>It is a bit like a student who never wants to admit they did not study, so they give a confident, well-worded answer that happens to be invented.</p>
<h2>When to be extra careful</h2>
<ul>
  <li><strong>Specific facts and numbers:</strong> dates, statistics, prices, measurements.</li>
  <li><strong>Quotes and sources:</strong> AI invents real-sounding citations surprisingly often.</li>
  <li><strong>Recent events:</strong> it may not know what happened after its training.</li>
  <li><strong>Anything high-stakes:</strong> medical, legal, or financial decisions.</li>
</ul>
<h2>How to protect yourself</h2>
<ul>
  <li><strong>Verify what matters.</strong> For any important fact, check a trusted source.</li>
  <li><strong>Ask it to show its work.</strong> &ldquo;What are you basing that on?&rdquo; sometimes surfaces the shaky parts.</li>
  <li><strong>Give it the facts.</strong> Paste the real document and say &ldquo;answer only from this.&rdquo; AI is far more reliable summarizing what you give it than recalling from memory.</li>
</ul>
<p>None of this means AI is untrustworthy or not worth using. It means you keep your common sense switched on. Treat AI as a brilliant, fast assistant whose work you always glance over, and you get all the benefit with none of the nasty surprises.</p>`,
  },
  {
    slug: 'ai-glossary', title: 'The Beginner Glossary of AI Terms',
    topic: 'ai-fundamentals', level: 'Beginner', minutes: 5,
    excerpt: 'From conversational AI to tokens, this plain-language glossary explains the words you will see most often.',
    body: `
<p>Every field has its jargon, and AI is no exception. Here are the words you will bump into most, each in one plain sentence. Keep this handy.</p>
<ul>
  <li><strong>AI (Artificial Intelligence):</strong> software that can do tasks we used to think needed a human, like writing or answering questions.</li>
  <li><strong>Model:</strong> the actual trained AI &ldquo;brain&rdquo; that generates answers. GPT-5 and Claude are models.</li>
  <li><strong>LLM (Large Language Model):</strong> the kind of AI behind chat tools, trained on huge amounts of text to predict words.</li>
  <li><strong>Prompt:</strong> what you type in, your question or instructions.</li>
  <li><strong>Token:</strong> a small chunk of text, roughly a word or piece of one, that the AI reads and counts.</li>
  <li><strong>Context window:</strong> how much text the AI can keep in mind at once, its short-term memory.</li>
  <li><strong>Hallucination:</strong> when AI states something false with total confidence.</li>
  <li><strong>Training:</strong> the long process of teaching a model by having it read enormous amounts of data.</li>
  <li><strong>Generative AI:</strong> AI that creates new things, text, images, audio, rather than just sorting or labeling.</li>
  <li><strong>Chatbot:</strong> an AI you talk to in a back-and-forth conversation.</li>
  <li><strong>Agent:</strong> an AI that can take actions and use tools, not just answer.</li>
  <li><strong>Open source:</strong> AI whose inner workings are shared publicly for anyone to use or inspect.</li>
</ul>
<p>You do not need to memorize these. Skim them once, and they will click into place the next time you see them in the wild. Curious about a word that is not here? Just ask an AI assistant to &ldquo;explain it like I am five.&rdquo;</p>`,
  },
  {
    slug: 'ai-image-styles', title: 'Getting Started with AI Image Styles: A Visual Guide',
    topic: 'image-generation', level: 'Beginner', minutes: 7,
    excerpt: 'Photorealistic, painterly, anime, 3D render. Knowing the major image styles helps you get exactly the look you want.',
    body: `
<p>When you make an AI image, the single biggest lever you have is the <strong>style</strong> you ask for. The same subject can look like a photograph, an oil painting, or a cartoon, just by changing one word. Here are the main styles worth knowing.</p>
<h2>The common styles</h2>
<ul>
  <li><strong>Photorealistic:</strong> looks like a real photograph. Add words like &ldquo;photo, natural lighting, detailed.&rdquo;</li>
  <li><strong>Illustration / painterly:</strong> a hand-drawn or painted feel. Try &ldquo;watercolor,&rdquo; &ldquo;oil painting,&rdquo; or &ldquo;pencil sketch.&rdquo;</li>
  <li><strong>Cartoon / anime:</strong> bold, simplified, fun. Say &ldquo;cartoon style&rdquo; or &ldquo;anime style.&rdquo;</li>
  <li><strong>3D render:</strong> the smooth, modern look of an animated film. Try &ldquo;3D render, Pixar style.&rdquo;</li>
  <li><strong>Minimalist / flat:</strong> simple shapes and few colors, like a clean logo or icon.</li>
  <li><strong>Vintage / retro:</strong> the feel of an old photo or poster. Add &ldquo;1950s,&rdquo; &ldquo;sepia,&rdquo; or &ldquo;vintage.&rdquo;</li>
</ul>
<h2>How to use them</h2>
<p>Just add the style to the end of your description. &ldquo;A fox in a forest&rdquo; becomes &ldquo;A fox in a forest, watercolor style,&rdquo; and the whole mood changes. You can even mix and match: &ldquo;a cozy kitchen, photorealistic, warm morning light.&rdquo;</p>
<h2>Finding your look</h2>
<p>The fun is in experimenting. Generate the same subject in three different styles and see which one feels right. Save the words that work for you, they become your personal recipe. New to image generation entirely? Start with <a href="/beginner-ai/first-ai-image">Creating Your First AI Image</a>.</p>`,
  },
  {
    slug: 'ai-ethics', title: 'AI Ethics: A Beginner Introduction',
    topic: 'safety', level: 'Intermediate', minutes: 8,
    excerpt: 'AI raises real ethical questions. You do not need to be a philosopher to engage with them. Here is a practical starting point.',
    body: `
<p>As AI becomes part of daily life, it raises real questions about fairness, honesty, and impact. You do not need a philosophy degree to think about them clearly. Here are the big ones, in plain terms.</p>
<h2>Bias</h2>
<p>AI learns from human writing, and human writing contains human biases. So AI can quietly repeat unfair assumptions about people. Knowing this helps you stay alert: if an answer about a group of people feels off, it might be.</p>
<h2>Honesty and credit</h2>
<p>Is it honest to pass off AI writing as entirely your own? In school, at work, or in creative fields, norms are still forming. A good rule of thumb: be transparent when it matters, and always do the final thinking yourself.</p>
<h2>Misinformation</h2>
<p>Because AI can generate convincing text and images instantly, it can also generate convincing falsehoods at scale. This is why verifying important claims (see <a href="/beginner-ai/ai-hallucinations">AI Hallucinations</a>) is not just practical, it is a small act of responsibility.</p>
<h2>Jobs and impact</h2>
<p>AI changes how work gets done, helping in some roles and disrupting others. There are no easy answers here, but staying curious and learning to use these tools well is one of the best things you can do for yourself.</p>
<h2>A simple personal compass</h2>
<p>You do not have to solve these big debates. Just ask yourself three questions when you use AI: <strong>Is this honest? Could it harm someone? Have I checked it?</strong> Keep those in mind and you will use AI thoughtfully, which is most of what ethics asks of any of us.</p>`,
  },
  {
    slug: 'chatgpt-vs-claude-vs-gemini', title: 'ChatGPT vs Claude vs Gemini: Which Should You Use?',
    topic: 'ai-fundamentals', level: 'Beginner', minutes: 6,
    excerpt: 'The three leading AI assistants each have strengths. Here is a plain-language comparison to help you choose.',
    body: `
<p>There are three big AI assistants, and beginners often ask which one to pick. The honest answer: all three are excellent, free to try, and more alike than different. But each has a personality. Here is the plain-language rundown.</p>
<h2>ChatGPT (by OpenAI)</h2>
<p>The most popular and the most well-rounded. It writes well, can make images, and has the largest community, so help and tips are everywhere. If you want one tool and are not sure where to start, start here.</p>
<h2>Claude (by Anthropic)</h2>
<p>Many people find Claude the most thoughtful writer, and it is especially good at working through long documents and explaining things carefully and calmly. A favorite for writing, reading, and reasoning tasks.</p>
<h2>Google Gemini</h2>
<p>Built right into Google&rsquo;s world: Search, Gmail, and Google Docs. If you already live in Google products, Gemini meets you where you are and is wonderfully convenient.</p>
<h2>So which one?</h2>
<ul>
  <li><strong>Just starting out:</strong> ChatGPT.</li>
  <li><strong>Writing and reading-heavy work:</strong> Claude.</li>
  <li><strong>Deep in Gmail and Google Docs:</strong> Gemini.</li>
</ul>
<p>Here is the real secret: <strong>you do not have to choose forever.</strong> They are all free to start, so try the same question in two of them and see whose answer you like better. Many people keep two open and pick per task. You genuinely cannot go wrong.</p>`,
  },
  {
    slug: 'ai-loops', title: 'What Are AI Loops? Letting AI Check Its Own Work',
    topic: 'productivity', level: 'Intermediate', minutes: 6,
    excerpt: 'Most people use AI one question at a time. A loop hands it a goal and lets it keep improving and checking its own work until it is done. Here is the idea, in plain language.',
    body: `
<p>Most of us use AI like a vending machine: ask a question, get an answer, notice what is off, ask again. You are steering every step. An <strong>AI loop</strong> works differently. You give the goal once and let the AI keep working, and keep checking its own work, until it meets the mark. It is one of the simplest ways to get more out of AI with less back-and-forth.</p>
<h2>A prompt asks once. A loop keeps going.</h2>
<p>A prompt is a single request. A loop is a goal the AI keeps working toward. Instead of handing back one answer and waiting for you, it plans, does the work, looks at the result, and tries again if it is not good enough, all on its own.</p>
<p>Think of the difference between editing a sentence yourself, line by line, and telling a helper: &ldquo;keep editing this until it is under ten words and sounds friendly.&rdquo; The second one is a loop. You set the goal; they keep going until they hit it.</p>
<h2>The one thing that makes it work: a way to check</h2>
<p>The whole trick is giving the AI a clear way to check its own work. Without a real test, it just produces something and declares it finished. With a clear bar, &ldquo;every sentence under fifteen words,&rdquo; or &ldquo;the recipe uses only what is in my fridge,&rdquo; it can actually tell whether it is done, and keep improving until it is.</p>
<p>Two smaller things help too: it should remember what it already tried, so it improves instead of going in circles, and it needs a stop rule, so it does not run on forever.</p>
<h2>When a loop is worth it, and when it is overkill</h2>
<p>Loops shine when a task <strong>repeats</strong>, when there is a <strong>clear way to tell good from bad</strong>, and when &ldquo;done&rdquo; is not just a matter of taste. For a one-off, or anything judged purely by feel, a single well-written request is simpler and works better. More machinery is not always more help, and knowing when to skip it is half the skill.</p>
<h2>Try a tiny loop yourself</h2>
<p>You do not need any special tools. Paste something like this into ChatGPT or Claude, filling in the brackets:</p>
<p><em>&ldquo;Keep improving this [thing] until it meets all three: [1], [2], [3]. After each try, score yourself 1 to 10 on each and be honest about what is still weak. Only stop when all three are at least 8. Do not ask me questions, just keep going.&rdquo;</em></p>
<p>That is a loop in its simplest form: a goal, a clear bar, and a rule for when to stop. When you are ready to see how the bigger versions work, the ones behind tools like AI coding assistants, the main site breaks it down step by step.</p>`,
  },
];

// Graduation bridges: each beginner guide "levels up" into a matching destination on the main
// (warm) site. Kept honest, not forced: image topics, which the main site doesn't cover, point to
// the broadly-useful dictionary rather than a contrived tool.
export const BG_LEVELUP = {
  'what-is-ai':                 { href: '/ai',               label: 'See how AI actually works' },
  'first-ai-prompt':            { href: '/prompt-builder',   label: 'Build a pro-level prompt' },
  'first-ai-image':             { href: '/dictionary',       label: 'Browse the plain-English AI dictionary' },
  'everyday-ai-tasks':          { href: '/tools',            label: 'Try the free browser tools' },
  'ai-privacy':                 { href: '/tools',            label: 'Tools that run in your browser, nothing uploaded' },
  'writing-with-ai':            { href: '/prompt-optimizer', label: 'Sharpen any prompt with the Prompt Optimizer' },
  'ai-hallucinations':          { href: '/what-is-rag',      label: 'How RAG keeps AI honest' },
  'ai-glossary':                { href: '/dictionary',       label: 'The full 75-term plain-English dictionary' },
  'ai-image-styles':            { href: '/dictionary',       label: 'Browse the plain-English AI dictionary' },
  'ai-ethics':                  { href: '/ai',               label: 'Go deeper in AI Explained' },
  'chatgpt-vs-claude-vs-gemini':{ href: '/ai',               label: 'See how these models actually work' },
  'ai-loops':                   { href: '/what-are-ai-loops', label: 'See how AI loops actually work' },
};

export const bgGuide = (slug) => BG_GUIDES.find((g) => g.slug === slug);
export const bgTopic = (id) => BG_TOPICS.find((t) => t.id === id);
export const bgTopicLabel = (id) => (bgTopic(id) ? bgTopic(id).label : id);
