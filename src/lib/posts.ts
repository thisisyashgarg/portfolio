export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: { src: string; width: number; height: number; alt: string; caption: string };
  html: string;
};

const makedecks = '<a href="https://makedecks.com" target="_blank" rel="noopener noreferrer">MakeDecks</a>';

export const posts: Post[] = [
  {
    slug: "first-10-days-305-users",
    title: "305 people tried my AI slide maker in 10 days. Here is what they actually did.",
    description: "The real funnel, who signed up, where they came from and what it cost, from the first 10 days of MakeDecks.",
    date: "2026-11-01",
    image: { src: "/blog/first-10-days.png", width: 1568, height: 604, alt: "MakeDecks admin page showing 305 users, 471 decks and daily charts", caption: "My admin page on October 31." },
    html: `<p>I built ${makedecks}, a tool that turns notes, PDFs, spreadsheets and links into an editable slide deck. I started writing the code on October 18 and shared it on Reddit on October 22. Ten days later, 305 people have signed up.</p>
<p>My admin page shows me what those people did, in counts, without reading anyone's slides. Here is the honest version, including the parts that surprised me.</p>
<h2>The funnel</h2>
<p>Out of 304 sign-ups in the last 30 days:</p>
<ul><li>274 started a deck</li><li>272 got a finished deck</li><li>143 edited it</li><li>131 downloaded it</li><li>112 made a second deck</li><li>33 hit a free limit</li><li>1 paid</li></ul>
<p>The first two numbers made me happy. Almost everyone who signs up gets a finished deck, which means the hard part, turning messy input into slides, mostly works.</p>
<p>The drop after that is where the real work is. Half the people who get a deck never edit it. They look at it and leave. Some probably took what they needed, some decided it wasn't for them. I can't tell which, and that is a gap in my own tracking.</p>
<h2>I built it for founders. Students showed up.</h2>
<p>I added four one-tap questions at sign-up. 97 people said they were students and 21 said they teach. Five said they were founders.</p>
<p>When I asked what the deck was for, school won by a wide margin. The tool they use today is PowerPoint (76 people), far ahead of Canva (18) and Google Slides (5).</p>
<p>That changed my roadmap. My landing page talked about investor updates and board meetings. The people actually using it have a class presentation due on Thursday and need a file their teacher can open. Since then I have added a student price for anyone with a school email and templates for things like a thesis defense.</p>
<h2>Most people found it through an AI assistant</h2>
<p>This was the biggest surprise. When asked how they heard about MakeDecks, 83 people picked "ChatGPT or an AI assistant". Google brought 10. Friends brought 5. Reddit, where I actually launched, brought 2 who said so.</p>
<p>The site is a few weeks old and barely ranks on Google yet. But people ask assistants things like "what's a free AI tool to make a PowerPoint from my notes?" and the assistants answer. I don't fully know why we get named, but I had done a few boring things early: a plain-text llms.txt file that says what the product does and what it costs, a page for each specific job like "PDF to presentation", and honest comparison pages. My guess is that clear, consistent facts in many places make an assistant comfortable recommending you.</p>
<h2>People come for one deck</h2>
<p>32 people signed up and never made a deck. 160 made exactly one. 107 made two or three. Five made between four and ten. Nobody has made more than ten.</p>
<p>Only 11 of 268 people came back the day after their first visit. On a day someone uses it, the median time spent is about six minutes.</p>
<p>That is not a habit product. It is a deadline product. Someone has a presentation, they get it done in six minutes, and they leave until the next one. Once I accepted that, a few decisions got easier, pricing most of all.</p>
<h2>What it cost</h2>
<p>In its first month MakeDecks spent $152.87 on AI calls for 471 decks. Two thirds of that, $102, went to the illustrations on title and section slides. Writing the decks themselves cost $44.</p>
<p>If you are building something with AI images, look at that split before anything else. It is why the free plan now gets illustrations on 10 decks a month instead of every deck.</p>
<h2>What I would tell myself on day one</h2>
<ul><li>Ask people who they are at sign-up. Four one-tap questions told me more than a week of guessing.</li><li>Count the whole funnel from day one, including boring steps like edited and downloaded.</li><li>Write down plainly what your product does and costs, somewhere a machine can read it. Assistants are a real channel now.</li><li>Find out which call is expensive. Mine was not the one I expected.</li><li>Don't fight the way people use you. A deadline tool should be priced and designed like one.</li></ul>
<p>I will keep sharing the numbers as they change. If you have built something people use once in a while rather than every day, I would like to hear how you handled it.</p>`,
  },
  {
    slug: "first-paying-customer-bought-a-week",
    title: "My first paying customer didn't buy the plan. They bought a week.",
    description: "33 people hit a free limit and nobody subscribed. What the first sale of MakeDecks taught me about pricing a deadline product.",
    date: "2026-11-01",
    image: { src: "/blog/first-paying-customer.png", width: 2880, height: 2000, alt: "MakeDecks pricing page with Free, Pro and Enterprise plans", caption: "The MakeDecks pricing page. The 7-day pass sits under the Pro button." },
    html: `<p>For ten days, ${makedecks} had 300 users and no revenue. Then someone paid, and what they bought told me more about my pricing than anything I had planned.</p>
<h2>The wall nobody climbed</h2>
<p>The free plan is generous on purpose: 30 decks a month, no watermark, PowerPoint and PDF downloads. Pro is $15 a month and adds unlimited decks, unlimited AI edits, brand kits, team editing and more download formats.</p>
<p>In the first month, 33 people hit a free limit. Some ran out of decks, some used up the five AI edits a free deck gets. Every one of them saw an upgrade screen at that exact moment. For ten days, nobody paid.</p>
<p>I tried the obvious fix first. Early users who hit a limit now see a lower price, $10 a month instead of $15, right on that screen. Still nothing.</p>
<h2>Looking at it from their side</h2>
<p>When I looked at who was hitting the limit, the pattern was plain. Mostly students and teachers, with something due. They made two or three decks in one sitting, needed one more, and hit the wall.</p>
<p>Asking that person to subscribe is asking them to start a relationship when they want to finish one assignment. A subscription is a promise to come back, and they had no plan to come back until the next deadline.</p>
<p>So I added a third option: a 7-day pass. $5, one payment, full Pro for a week, no renewal. On October 31 I moved it to the front of the limit screen, under the line "Need it for one deadline?". The monthly plan is still there, just second.</p>
<h2>The first sale</h2>
<p>On October 31, someone bought the pass. After local pricing it came to about three dollars.</p>
<p>It is a tiny number. It still made my week, because it was the first time a stranger looked at what I made and decided it was worth money. I emailed them to say thank you and to ask what they were working on, and sent a second copy in their own language in case that was easier to reply in.</p>
<h2>What I took from it</h2>
<ul><li>Price the way people use you. A deadline product can sell short passes, not just subscriptions.</li><li>Put the offer at the moment of need. The limit screen is the one place where someone has proven they want more.</li><li>A discount doesn't fix the wrong shape. $10 a month was still a monthly plan.</li><li>Count revenue honestly. After the sale my own admin page still said "Pro: 0", because a pass isn't a subscription. It now counts paying customers, whatever they bought.</li><li>Thank your first customer personally. They are the only person who can tell you why they paid.</li></ul>
<p>One sale proves nothing yet. But it is the first time the numbers moved, and it moved in the direction of selling people what they actually came for.</p>`,
  },
  {
    slug: "cheaper-ai-model-fact-check",
    title: "A cheaper AI model made my slide decks better. Then it started making things up.",
    description: "A blind test of 10 inputs cut the cost per deck to about a fifth. The fact check I added when the cheaper model invented details.",
    date: "2026-11-01",
    image: { src: "/blog/cheaper-model-fact-check.png", width: 2800, height: 2509, alt: "TypeScript code of the MakeDecks fact check prompt and function", caption: "The fact check, straight from the MakeDecks codebase." },
    html: `<p>${makedecks} turns notes and documents into slide decks with Google's Gemini models. Generating a deck ran on the big Pro model, and in production it averaged $0.128 a deck. Most of that wasn't the input. Output and the model's thinking tokens were 80% of the bill.</p>
<p>With a free plan that allows 30 decks a month, that number matters. So I ran a test.</p>
<h2>A blind test</h2>
<p>I took 10 kinds of real input: eight written briefs, a PDF report and a photo of a table. I generated a deck from each with Pro and with the smaller, newer Flash model, using the same prompt, and scored every deck without knowing which model made it.</p>
<p>Flash scored 7.65 out of 10. Pro scored 7.1. Flash cost about $0.018 a deck in the test, against $0.074 for Pro, and it didn't misread a single figure from the PDF or the table.</p>
<p>Three more things came out of the test:</p>
<ul><li>Turning Flash's reasoning down to low halved the price again, but it got noticeably worse on analytical inputs like the report. I kept the default.</li><li>An even newer model scored 8.4, the best of all. Its price was about to double, so I left it out. A model you can't afford next month isn't a model.</li><li>My own prompt had a bug. Three of the eight brief-only decks contained placeholders like "[Metric 2]" where the model had no number. I rewrote the prompt to allow placeholders only for a bare topic, and to never invent plausible-sounding specifics.</li></ul>
<h2>Why caching didn't save me</h2>
<p>The usual advice is to cache your prompt. I checked. My fixed instructions and output schema are about 3,100 tokens of a typical 12,900-token request. That is below the size where the provider caches automatically, and paying for explicit caching would cost more in storage than it saves at my volume. Caching helps when you have a huge fixed prefix. I don't.</p>
<h2>Then it made things up</h2>
<p>The first Flash deck in production read well. It also added a market trend that wasn't in the user's material, and said a project was on schedule when the source said nothing about a schedule. Nothing wild. Just confident, plausible sentences that weren't true.</p>
<p>That is the most dangerous kind of error in a presentation, because someone will stand up and say it out loud.</p>
<p>So I added a second step. Whenever there is source material, a fast model reads every text on the generated slides next to the source and returns only the lines that state an unsupported cause, judgement or number, each with a trimmed version. A fix longer than the original is thrown away, and if the check fails, the deck is saved as generated.</p>
<p>On that first deck, the check removed every invented line and kept the real figures. It adds about 7.5 seconds and half a cent.</p>
<p>I first tried the cheapest model for the check. It removed a true number. The check has to be smarter than "delete anything specific", so it runs on the middle model.</p>
<h2>Where it landed</h2>
<p>About $0.018 to write a deck plus $0.005 to check it, against $0.128 before. Roughly a fifth of the cost, with decks that scored higher and stay closer to the source. Flash's price is scheduled to rise in January, and it stays well under Pro after that too.</p>
<h2>If you are doing the same</h2>
<ul><li>Measure cost per finished thing (per deck, per report), not per token.</li><li>Blind-test on your real inputs. General benchmarks didn't predict which model won for slides.</li><li>Check where the money goes. For me it was output and thinking, which caching doesn't touch.</li><li>Read the first outputs in production by hand. My test didn't catch the invented sentences. Real use did.</li><li>A cheap second pass that checks facts is worth more than a bigger model.</li></ul>`,
  },
  {
    slug: "prices-in-emails-promotions-tab",
    title: "Putting prices in my emails sent them to Gmail's Promotions tab",
    description: "Running out of email quota, landing in Promotions and getting turned down by a provider: three email lessons from launching MakeDecks.",
    date: "2026-11-01",
    image: { src: "/blog/prices-in-emails.png", width: 2800, height: 1608, alt: "TypeScript code that routes MakeDecks email between two providers", caption: "How MakeDecks routes email, and the line that ends every personal email." },
    html: `<p>${makedecks} sends a few kinds of email: sign-in codes, a welcome note, and short personal emails from me to people who use it. In the first two weeks, three things went wrong with email. Fixing them taught me more about inboxes than any guide I had read.</p>
<h2>Problem one: running out of email</h2>
<p>On October 28, 60 people signed up in a day. My email provider's free plan allows 100 emails a day, and every sign-up needs a code, as does every login on a new browser. Welcome emails were eating the same quota. If it ran out, nobody could log in.</p>
<p>I paused welcome emails that day. Then I split email in two. Sign-in codes and account notices go through a provider built for transactional mail, and personal emails from me go through another. If the first one fails, codes fall back to the second, so a login code always goes out.</p>
<h2>Problem two: my emails landed in Promotions</h2>
<p>I wanted to thank engaged users and offer them a lower Pro price. The first version said exactly that, with the dollar amounts. I sent it to my own Gmail accounts to check.</p>
<p>In my tests it landed in Promotions. Even after I stripped the branded layout and the unsubscribe headers, the dollar amounts alone were enough.</p>
<p>Then I rewrote it as a plain note: thank you for using it, I've set aside a lower Pro price for you, here's a link to see it. No numbers. Same sender, same link. It landed in Primary.</p>
<p>The price is still real. It is shown on the page the link opens, not in the email.</p>
<h2>The unsubscribe link problem</h2>
<p>The same tests showed that an unsubscribe link or a List-Unsubscribe header also pushed a personal email towards Promotions. That is a hard one, because people must always be able to stop hearing from you.</p>
<p>My answer: every personal email ends with "reply stop and I won't email you again". Replies come to me, I mark that person in my admin panel, and every send skips them from then on. Sign-in codes still go out, because those aren't marketing.</p>
<p>This works because the volume is small and every email is really from me. It would not scale to a newsletter, and it isn't meant to.</p>
<h2>Problem three: describing myself badly</h2>
<p>When I applied to the transactional provider, their review asked what kind of email I would send. I wrote "signup flow, promotional, email marketing", because I was thinking about everything I send. They turned it down: their service is for transactional mail only.</p>
<p>They were right. I had described my whole email life instead of the part I wanted to send through them. I resubmitted with exactly what goes through them: sign-in codes, receipts and account notices to people who signed up.</p>
<h2>What I would do from day one</h2>
<ul><li>Separate transactional email (codes, receipts) from personal or marketing email. Your login codes should never compete with anything.</li><li>Test where your emails land with real inboxes before you send them to users.</li><li>Keep prices out of personal emails. Put them on the page the email links to.</li><li>Write personal emails like personal emails: your name as the sender, plain words, one link.</li><li>Give people a clear way to stop, and honour it every time.</li></ul>`,
  },
  {
    slug: "free-limits-ai-product",
    title: "How I set the free limits on my AI product without going broke",
    description: "Where the AI money really went, the limits I chose for the MakeDecks free plan, and the one rule I'm happiest with.",
    date: "2026-11-01",
    image: { src: "/blog/free-limits.png", width: 2800, height: 1725, alt: "TypeScript code that claims an image quota in one SQL statement", caption: "Each illustration is claimed in one database statement before any model is called." },
    html: `<p>Every AI product with a free plan has the same problem. Each free user costs real money, and the users who love you most cost the most. Here is how I set the limits on ${makedecks}, what they cost, and what I changed after watching 300 people use it.</p>
<h2>Find your expensive call first</h2>
<p>I assumed generating the deck would be the cost. It wasn't. In the first month, 471 decks cost $152.87 in AI calls: $44 to write them and $102 for the illustrations on title and section slides.</p>
<p>So the first fixes were all about images:</p>
<ul><li>I tested image models side by side on real slides and switched to one that matched the expensive model's quality at $0.044 an image instead of $0.140.</li><li>Free decks get three illustrations: the title slide, one section or statement slide, and the closing slide.</li><li>Free accounts get those illustrations automatically on their first 10 decks a month. After that, decks are made without them. That cut the cost of a free user who maxes everything out from about $15 a month to about $7.</li></ul>
<h2>A limit people can understand</h2>
<p>My first free plan was 3 decks a day. It felt stingy to anyone with a real project, and it still let a determined person make 90 a month. Now it is 30 decks a month. That is easier to understand and kinder to how people really work, in bursts before a deadline.</p>
<p>Every route that costs money also has a per-minute limit per user and a looser one per network, so one script can't run up a bill before anyone notices.</p>
<h2>Per-deck limits that teach</h2>
<p>Some limits are per deck: 5 AI edits, 3 AI illustrations and 3 of your own images on the free plan. They show up exactly when someone is getting value from a deck, which is the best time to show what Pro adds.</p>
<p>In the first month, 33 people hit a free limit of some kind. 11 of them hit the AI edit limit on a deck.</p>
<h2>The rule I'm happiest with</h2>
<p>Only adding something new needs Pro. Anything you already have keeps working. If someone on Pro adds a logo and brand colours and later stops paying, their decks still show that logo in the editor, when presenting and in every download. They just can't add a new one.</p>
<p>Taking things away from people who stop paying feels like holding their work hostage. Not adding new things is fair, and people understand it.</p>
<h2>Check before you spend</h2>
<p>A limit that is checked after the AI call is a limit you have already paid for. Every cap in MakeDecks is checked on the server, in the same database statement that records the use, before any model is called. Two requests at the same moment can't both slip through.</p>
<h2>What I would suggest</h2>
<ul><li>Find the expensive call before you set any limit.</li><li>Keep the limits you sell, the ones on your pricing page, separate from the guards that stop abuse.</li><li>Put limits where value shows up, like per document, not only per month.</li><li>Never take back what someone already has.</li><li>Check limits before spending, in one atomic step.</li></ul>`,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
