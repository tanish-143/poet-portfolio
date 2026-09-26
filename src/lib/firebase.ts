import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import type { Poem } from "../data/poems";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const poems: Poem[] = [
    {
        id: '1',
        title: "Screaming of the Heart: perennial pain",
        slug: "screaming-of-the-heart-perennial-pain",
        category: "Masks",
        date: "2025",
        excerpt: "Heart beeps, Anesthetic pain. No one gazes at it...",
        content: `
            <p>Heart beeps,</p>
            <p>Anesthetic pain.</p>
            <p>No one gazes at it.</p>
            <p>A beautiful smile on the face</p>
            <p>Hides the smooth pain.</p>
            <br/>
            <p>Chaos in the heart,</p>
            <p>No one sees it.</p>
            <p>The mind asks the heart,</p>
            <p>“Are you fine, bro?</p>
            <p>Is everything fine?”</p>
            <br/>
            <p>The heart signals green.</p>
            <p>The face is still glowy.</p>
            <p>A gloomy heart can't be seen</p>
            <p>Through lenses, but needs</p>
            <p>An introspective gaze to feel it.</p>
            <br/>
            <p>Heart beeps,</p>
            <p>A smile on the face.</p>
            <p>Tears emptied the tank.</p>
            <p>The pain vanishes.</p>
            <p>The heart feels nothing</p>
            <p>Except the beeping.</p>
            <p>The smile is still the same.</p>
            <p>No one understands the pain.</p>
            <br/>
            <p>Self-annihilation to commence the self,</p>
            <p>But....</p>
            <p>The heart beeps,</p>
            <p>And the new self is made.</p>
            <br/>
            <p>Still, the pain remains the same.</p>
            <p>Nothing changes</p>
            <p>Except the persona.</p>
            <p>Pain numbs and replaces the self.</p>
            <p>Self-self fragmented forms.</p>
            <br/>
            <p>Decode it if you want,</p>
            <p>Forming to the Big Other.</p>
            <p>Still the pain.</p>
            <p>No other form.</p>
        `
    },
    {
        id: '2',
        title: "Echoes in the Womb",
        slug: "echoes-in-the-womb",
        category: "Reflection",
        date: "2025",
        excerpt: "The water is shouting: Save, save, save! I need your help...",
        content: `
            <p>The water is shouting:</p>
            <p>“Save, save, save!</p>
            <p>I need your help.</p>
            <p>The womb is like a cave.</p>
            <p>I am there within it.</p>
            <p>Save me from this hell;</p>
            <p>Let me come outside and see.</p>
            <p>Pray to God to save me.”</p>
            <br/>
            <p>I am all ears to my parents’ voices,</p>
            <p>voices filled with demands.</p>
            <p>Oh! I forgot—I am a girl.</p>
            <p>Will my family not accept me?</p>
            <p>They pressure Mumma</p>
            <p>to give birth to a boy.</p>
            <br/>
            <p>I have a question for God:</p>
            <p>Is it a sin to be a girl?</p>
            <p>Is it the law of nature,</p>
            <p>or is it something else?</p>
            <br/>
            <p>Nature, nature,</p>
            <p>shouts in the darkness.</p>
            <p>Yet I find silence in the cave.</p>
            <br/>
            <p>Then comes the sweet voice of Mother:</p>
            <p>“Don’t worry, my child.</p>
            <p>I will protect you and save you</p>
            <p>from misery and societal norms.</p>
            <p>It is only an ideology, not a rule.</p>
            <p>Nature and God are never biased.</p>
            <p>Humans simply fail to understand reality.”</p>
            <br/>
            <p>They worship goddesses—</p>
            <p>Shakti, Lakshmi, Durga, Kali—</p>
            <p>yet might not accept a girl</p>
            <p>to carry forward their dynasty.</p>
            <br/>
            <p>What a fault of society,</p>
            <p>what a failure of humanity.</p>
            <p>The hypocrisy of society</p>
            <p>stands revealed.</p>
            <br/>
            <p>I have found my answer</p>
            <p>in the voice of Mumma.</p>
            <p>The journey ahead may be difficult,</p>
            <p>but let me remain within this core,</p>
            <p>safe and secure,</p>
            <p>until the world outside</p>
            <p>learns to see me not as a burden,</p>
            <p>but as a life.</p>
        `
    },
    {
        id: '3',
        title: "Heart of Childhood",
        slug: "heart-of-childhood",
        category: "Heartbreak",
        date: "2025",
        excerpt: "Ivory and charcoal grey feathers of memories...",
        content: `
            <p>Ivory and charcoal grey feathers of memories</p>
            <p>Wings of time passes quickly</p>
            <p>Annihilate the innocence of the soul</p>
            <p>The childish and immaturity are the evidence of innocence</p>
            <p>The baggage of learning and</p>
            <p>Frolic mischieveness</p>
            <p>Marks the beauty of childhood creativeness</p>
            <p>Maturity of adulthood guide towards responsibility</p>
            <p>Acceptance of civility</p>
            <p>Lost the remembrance of childhood</p>
            <p>The innocence and stubbornness lost in this fear.</p>
            <p>And the baggage loads of responsibility</p>
            <p>Vanished the childhood and pure</p>
            <p>Blurred the smear of the golden and</p>
            <p>End of preadolescence era.</p>
        `
    },
    {
        id: '4',
        title: "Christmas:- Phase of Success",
        slug: "christmas-phase-of-success",
        category: "Love Dynamics",
        date: "2025",
        excerpt: "Through the lens of binary of perfect and imperfect, the celebration of Christmas...",
        content: `
            <p>Through the lens of</p>
            <p>binary of perfect and imperfect,</p>
            <p>the celebration of Christmas.</p>
            <p>Decorate fir tree with the artifacts and</p>
            <p>lighting.</p>
            <p>Cakes are baking.</p>
            <p>Streets are lighting</p>
            <p>with a hope.</p>
            <br/>
            <p>As I have a flaw in me,</p>
            <p>flaws are innate and</p>
            <p>appreciate.</p>
            <p>No individual is perfect,</p>
            <p>but appreciate.</p>
            <p>Flaws should be strength</p>
            <p>rather than a weakness.</p>
            <p>Flaws are stars in the sky of life.</p>
            <br/>
            <p>Christmas is a festival—</p>
            <p>celebrate the flaws</p>
            <p>with a flow.</p>
            <p>Peripheral of life—</p>
            <p>life without it</p>
            <p>is impossible to live.</p>
            <p>Two-sided of coin,</p>
            <p>binaries of perfect and imperfect.</p>
            <p>Glorious should be glorified.</p>
            <p>Imperfect is a learning.</p>
            <p>Learning is a phase,</p>
            <p>a phase of success.</p>
            <p>Christmas is the celebration of success.</p>
            <br/>
            <p>Shine like a sun,</p>
            <p>bright like a sun.</p>
            <p>Moon has calmness</p>
            <p>and purity.</p>
            <p>Christmas is the binary</p>
            <p>of sun and moon.</p>
            <p>Life is the binary of the sky</p>
        `
    },
    {
        id: '5',
        title: "The Chemistry of Marriage",
        slug: "the-chemistry-of-marriage",
        category: "Loss",
        date: "2025",
        excerpt: "The chemistry of marriage, A covalent bond, Sharing and caring...",
        content: `
            <p>The chemistry of marriage,</p>
            <p>A covalent bond,</p>
            <p>Sharing and caring</p>
            <p>For both families.</p>
            <p>Groom and bride,</p>
            <p>Excited for the wedding.</p>
            <p>The bride's father</p>
            <p>Skins the pain of separation,</p>
            <p>A psychological separation</p>
            <p>From his periphery,</p>
            <p>Whom he loved the most,</p>
            <p>His universe.</p>
            <p>He hides the injection mark</p>
            <p>From others,</p>
            <p>And simply blesses</p>
            <p>His little one.</p>
            <p>With the flash of a second,</p>
            <p>His little one grows up</p>
            <p>And empties his house—</p>
            <p>The one he raised</p>
            <p>With pamper and care.</p>
            <p>She goes to a new world</p>
            <p>Where her father</p>
            <p>Is no longer a part of it.</p>
            <p>Just think of the thought—</p>
            <p>His blood pressure rises and falls.</p>
            <p>The day comes</p>
            <p>When his heart separates from his soul.</p>
            <p>Midway through the marriage,</p>
            <p>The in-laws commence their drama.</p>
            <p>“I am the head of the family.</p>
            <p>The rules come from within me.</p>
            <p>I desire gifts.</p>
            <p>But give ample gifts</p>
            <p>For your daughter's sake,</p>
            <p>Not for us.</p>
            <p>If gifts are not a part of marriage,</p>
            <p>Then we return the procession.”</p>
            <p>The father's eyes are wide open.</p>
            <p>He puts his turban</p>
            <p>At the feet of the in-laws.</p>
            <p>His daughter screams</p>
            <p>And shuts down the drama.</p>
            <p>The turban returns</p>
            <p>To its real position.</p>
            <p>“Cancel this marriage.</p>
            <p>It's a deal rather than a bond.</p>
            <p>If this is an ionic bond</p>
            <p>Rather than a covalent one,</p>
            <p>I don't want this bond</p>
            <p>To work forever.</p>
            <p>I can't see an ocean of tears</p>
            <p>In my Papa's lovely eyes.</p>
            <p>I won't sacrifice his pride and respect</p>
            <p>In front of these bulky, nasty flies.</p>
            <p>I don't want an ionic bond</p>
            <p>That can't resist forever.”</p>
            <p>Marriage is a covalent bond,</p>
            <p>Yet ionic.</p>
            <p>Sacrifices are made by the bride's side,</p>
            <p>Not by the groom's,</p>
            <p>Yet the bride has to follow rules.</p>
            <p>Voices have been restricted.</p>
            <p>Agency and autonomy have been lost.</p>
            <p>The future of the marriage depends</p>
            <p>On whether we raise our voice</p>
            <p>Against these flies today.</p>
        `
    },
    {
        id: '6',
        title: "Burn the flame ; to ignite the self",
        slug: "burn-the-flame-to-ignite-the-self",
        category: "Resilience",
        date: "2025",
        excerpt: "Drape in white, Prepare for the rites...",
        content: `
            <p>Drape in white,</p>
            <p>Prepare for the rites,</p>
            <p>Red funeral of patriarchy.</p>
            <p>Beside him, his wife,</p>
            <p>Frightened to burn in the red flame,</p>
            <p>Fled from the pyre,</p>
            <p>Left the patriarchy there,</p>
            <p>Introspect for herself:</p>
            <p>Is it right to hear</p>
            <p>The voices of the self,</p>
            <p>Screaming loud to escape?</p>
            <p>Open the mouth for her autonomy,</p>
            <p>Singing the lyrics</p>
            <p>To protect the identity,</p>
            <p>Sounds of ode</p>
            <p>Reaching to her ears.</p>
            <p>Victory is close,</p>
            <p>Everyone, is this clear?</p>
            <p>Am I a woman,</p>
            <p>Not marginalised,</p>
            <p>Suppress my voice to sing the song of a lyric,</p>
            <p>Resist the patriarchy</p>
            <p>And the speech acts.</p>
            <p>I am proudly a woman,</p>
            <p>Not draped in white wear.</p>
            <p>Is that clear to all?</p>
            <p>I have the wardrobe of rainbow to wear.</p>
            <p>His soul left his corpus,</p>
            <p>Not mine.</p>
            <p>Why will I scapegoat in the superstitious belief?</p>
            <p>I am a human and a woman.</p>
            <p>My soul is alive, not</p>
            <p>Died...</p>
        `
    },
    {
        id: '7',
        title: "The Conch Shells: Maa’s Message",
        slug: "the-conch-shells-maas-message",
        category: "Humanity",
        date: "2025",
        excerpt: "Conch shells vibrating all ears, Earthen lamps full with oil and ghee are lightened up...",
        content: `
            <p>Conch shells vibrating all ears,</p>
            <p>Earthen lamps full with oil and ghee are lightened up.</p>
            <p>The universe is glowing and waiting</p>
            <p>To witness the birth of</p>
            <p>Durga.</p>
            <p>Yet, Devi doesn't want to land in the world.</p>
            <p>Devotees are praying:</p>
            <p>“Maa, it's a request from your child—</p>
            <p>Please come down to the Earth.”</p>
            <p>Maa replied,</p>
            <p>“I am already there, but you, my child, are beating me</p>
            <p>up,</p>
            <p>Causing horror which haunts me internally every second.</p>
            <p>And now you request me to come down to you.”</p>
            <p>“Maa, I never beat you up,</p>
            <p>Nor raise a finger against you.”</p>
            <p>“Dear child, think twice before saying.</p>
            <p>Make sure you have not committed a sin.”</p>
            <p>“Maa, I never commit the sin</p>
            <p>By creating chaos and horror in your life, Maa.”</p>
            <p>“Tell me one thing, my child—</p>
            <p>You never raised a finger against your wife,</p>
            <p>Yet you slayed your newborn baby girl.”</p>
            <p>“Maa, she committed mistakes, that's why,</p>
            <p>And Maa, lineage only belongs to a boy.”</p>
            <p>“I don't want to come to you. Such narrow thought cannot exist in a devotee of mine.</p>
            <p>You ask me to come down,</p>
            <p>But you make the lives</p>
            <p>of my periphery disastrous</p>
            <p>And cause horror in their lives.</p>
            <p>Do you realise it?</p>
            <p>You are praying in front of me,</p>
            <p>Asking for blessings to lighten up your life,</p>
            <p>While you make my life horrific and dark.</p>
            <p>She is a periphery of me,</p>
            <p>And you cause horror to her.</p>
            <p>If you worship her, treat and respect her,</p>
            <p>I will be more happy than this worship.</p>
            <p>You are born from women,</p>
            <p>And cause horror to them,</p>
            <p>Restrict their agency,</p>
            <p>And say,</p>
            <p>‘Maa, why are you not coming to us?’</p>
            <p>It is time to awaken before it is too late.</p>
            <p>She is black, red, and full of spectrum,</p>
            <p>Blessed with my energy.</p>
            <p>She is a flower—</p>
            <p>Where she goes, she blooms.”</p>
            <p>“Apologise, Maa, I forgot—</p>
            <p>She is also a periphery of you.</p>
            <p>I will make sure to light up her life.”</p>
        `
    },
    /*
            <p>Imperfect, human, as we stand</p>
            <p>In love's wild chaos, find our balm.</p>
        `
    },
    {
        id: '8',
        title: "Affirmation of Longing",
        slug: "affirmation-of-longing",
        category: "Desire",
        date: "2024",
        excerpt: "I WOULD DO ABSOLUTELY ANYTHING RIGHT NOW TO BE ABLE TO SNUGGLE UP NEXT TO YOU...",
        content: `
            <p class="uppercase font-bold tracking-wide">I WOULD DO ABSOLUTELY ANYTHING RIGHT NOW TO BE ABLE TO SNUGGLE UP NEXT TO YOU, BURY MY HEAD IN YOUR CHEST, AND INTERLOCK MY FINGERS WITH YOURS.</p>
            <br/>
            <p class="uppercase font-bold tracking-wide">I'D BE ABLE TO LOOK UP AT YOU AND SMILE WHENEVER I WANTED TO. I'D BE ABLE TO LEAN UP AND KISS YOU WHENEVER I WANTED TO. I'D BE ABLE TO TELL YOU HOW I FEEL ABOUT YOU WHENEVER I WANTED TO.</p>
            <br/>
            <p class="uppercase font-bold tracking-wide">ALL I NEED IS JUST A WORD OF AFFIRMATION THAT I MEAN SOMETHING TO YOU. I WOULD THEN GO TO DISTANCES THAT I HAVE NEVER BEEN BEFORE FOR YOU WITHOUT GETTING HURT LIKE ALWAYS...</p>
        `
    },
    {
        id: '9',
        title: "The Ache of Absence",
        slug: "the-ache-of-absence",
        category: "Friendship",
        date: "2024",
        excerpt: "The ache of absence, a hollowed heart, A friend, a confidant, now torn apart...",
        content: `
            <p>The ache of absence, a hollowed heart,</p>
            <p>A friend, a confidant, now torn apart.</p>
            <p>Memories of laughter, whispers, and tears,</p>
            <p>Echoes of moments, through all the years.</p>
            <br/>
            <p>We once shared secrets, hopes, and fears,</p>
            <p>Together we weathered life's joys and sneers.</p>
            <p>But now, the silence is deafening loud,</p>
            <p>A chasm deep, where our bond once proud.</p>
            <br/>
            <p>I miss the way you'd listen, eyes aglow,</p>
            <p>The way your smile could light the darkest woe.</p>
            <p>I miss our midnight talks, our silly fights,</p>
            <p>Our promises to stand, through life's plodding nights.</p>
            <br/>
            <p>Time, a thief, stole you away from me,</p>
            <p>Leaving only shadows, where you used to be.</p>
            <p>I'm left to wonder, what went awry,</p>
            <p>Why our paths diverged, and our bond did die.</p>
            <br/>
            <p>Yet, in my heart, a flame still burns bright,</p>
            <p>A beacon of hope, that our friendship will take flight.</p>
            <p>Perhaps someday, our paths will cross again,</p>
            <p>And we'll rekindle the love, the laughter, and the pain.</p>
            <br/>
            <p>Until then, I'll hold on to what we had,</p>
            <p>Cherish the memories, and the love we once shared, so sad.</p>
            <p>For in the end, it's not the distance that defines,</p>
            <p>But the love we shared, the bond that forever shines.</p>
        `
    },
    {
        id: '10',
        title: "Imagination vs Reality",
        slug: "imagination-vs-reality",
        category: "Longing",
        date: "2024",
        excerpt: "U ever just sit up at night thinking about life. What it would be like if u didn't meet someone...",
        content: `
            <p>U ever just sit up at night thinking about life. What it would be like if u didn't meet someone or what it would be like if u went up to that person. If u didn't miss the chance or if u just went for it. Do u ever just stay up thinking about what ur person is doing. When u will meet that one person. The person who will change ur life forever. Who will make a mark u could never erase. U lay there and wonder what they're doing right now. If u have already met that person, whether u know them or maybe u glanced a view of them while ur walking down the street.</p>
            <br/>
            <p>U ever wonder how it feels to love someone endlessly that no matter what they do u would go back in a second. They're just that special to u. And not only that, but it's actually that special to them. They're ur whole world and ur there. No matter what u do they'd love u even in the worst way. Someone u could love so much and care for with all ur heart. The one that u could give ur all to. Someone who would make u feel worth it.</p>
            <br/>
            <p>Someone who would make u feel as if u have a purpose in life. No matter how hard it got, u knew u had to live, to survive, just to be with them. One person u could give ur all to. U could give all the love in ur heart and they would actually take it in without lust, without lies, without fear that they'd take it and use it to abuse it. Someone who u know won't leave u even after seeing ur worst of the worst. Someone who u can share ur breath with. The one who could put a smile on ur face even at the darkest moments. Someone u could love without doubt....</p>
            <br/>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <br/>
            <p>Well but reality is harsh it's never going to let your imagination turn to reality.</p>
            <br/>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <br/>
            <p>The system won't allow you to think and it won't allow you to escape not even by death.....</p>
            <br/>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
        `
    },
    {
        id: '11',
        title: "Seasonal People",
        slug: "seasonal-people",
        category: "Acceptance",
        date: "2024",
        excerpt: "i know now that this is how it works, you don't get to keep everyone in your life forever...",
        content: `
            <p>i know now that this is how it works, you don't get to keep everyone in your life forever.</p>
            <p>and there are some people that are just meant</p>
            <p>to be a sunrise for you,</p>
            <p>a light to pull you out of the darkness,</p>
            <p>there are friends,lovers,</p>
            <p>relationships that are seasonal.</p>
            <br/>
            <p>no matter how deep of a conversation you had with that person at 2am,</p>
            <p>no matter how much you shared your heart,</p>
            <p>even if you can still draw the lines of their smile,there almost always comes a time to move on, a time to let go,and regardless of the letting go,</p>
            <p>i just wanted you to know,</p>
            <p>that you're always going to feel a little bit like home to me.</p>
        `
    },
    {
        id: '12',
        title: "Her Smile, My Anchor",
        slug: "her-smile-my-anchor",
        category: "Friendship",
        date: "2024",
        excerpt: "Through the chaos, her smile shone bright...",
        content: `
            <p>Through the chaos, her smile shone bright,</p>
            <p>A beacon that guided me through the night.</p>
            <p>A friend so dear, a bond so true,</p>
            <p>She became the priority in all I do.</p>
            <br/>
            <p>Her laughter, a melody that soothed my soul,</p>
            <p>Her presence, a warmth that made me whole.</p>
            <p>In her eyes, a depth of understanding,</p>
            <p>A companion on whom I could keep landing.</p>
            <br/>
            <p>As seasons changed, our friendship grew,</p>
            <p>A bond that time could never undo.</p>
            <p>Through ups and downs, she stood by my side,</p>
            <p>A constant companion, a friend to confide.</p>
            <br/>
            <p>Her radiance illuminated my darkest days,</p>
            <p>Her kindness a reminder of life's gentle ways.</p>
            <p>A priority she became, etched in my heart,</p>
            <p>A friend I could never bear to part.</p>
        `
    },
    {
        id: '13',
        title: "The Guiding Light",
        slug: "the-guiding-light",
        category: "Cherished",
        date: "2024",
        excerpt: "With her by my side, the world seemed brighter...",
        content: `
            <p>With her by my side, the world seemed brighter,</p>
            <p>Our bond, unbreakable, our friendship, tighter.</p>
            <p>A girl who became my guiding light,</p>
            <p>A friend I'll cherish, through day and night.</p>
            <p>It still hurts sometimes..</p>
        `
    },
    {
        id: '14',
        title: "The Good Times",
        slug: "the-good-times",
        category: "Grief",
        date: "2024",
        excerpt: "I'll catch myself thinking about it at night. While I'm healing and growing...",
        content: `
            <p>I'll catch myself thinking about it at night. While I'm healing and growing I feel like I have no one to share it with. That one part that I could tell everything to is gone and has been for a long time. The long nights are filled with silence as I'm processing through my trauma and each new discovery or milestone I'm met with a blank screen and a missing piece of my heart. We've been dead a long time but some nights it's nice to look back on the good times. Because there were some good times.</p>
            <br/>
            <p>There was also lack of communication, trust, toxic behaviors, un-dealt with trauma, and a list of other red flags. But the good times were that it wasn't happening. The times where we confided in each other and we're laughing being complete lunatics and understanding each other on a wavelength that no one else could keep up with. Even to this day it's hard to find someone who matches that intensity. I miss that. I miss that wave. I'll catch myself wondering, "what if I was wrong?"" "what if we could try again." But in all reality, you were gone long before we ever said goodbye. And so was I.</p>
        `
    },
    {
        id: '15',
        title: "Walls",
        slug: "walls",
        category: "Fear",
        date: "2024",
        excerpt: "There were walls between us that we never talked through...",
        content: `
            <p>There were walls between us that we never talked through. There were sides of me you never saw. And now you never will..</p>
            <p>And it is what I fear so much. That what If you see the way I see myself you'd come to resent me disgust me.. and you would leave me at a point and I would be so lost that there's no way back home.. so please don't leave me I beg of you ......</p>
        `
    },
    {
        id: '16',
        title: "Worthless",
        slug: "worthless",
        category: "Trauma",
        date: "2024",
        excerpt: "I'm dreading these thoughts. Verbal abuse, a sad youth...",
        content: `
            <p>I'm dreading these thoughts</p>
            <p>Verbal abuse, a sad youth</p>
            <p>The more you say</p>
            <p>The more I realize</p>
            <p>I've never been enough</p>
            <br/>
            <p>I hate the way</p>
            <p>It ruins my day</p>
            <p>And the power you gain When tears fall down my face</p>
            <p>I'm foolish to admit I believe you</p>
            <p>Nobody has ever really, truly said</p>
            <p>I am enough</p>
            <br/>
            <p>Maybe it's something</p>
            <p>I've got to find it on my own</p>
            <p>Because you downplay my achievements And downgrade my hard work</p>
            <p>But say you love and know me the most</p>
            <br/>
            <p>I'm breaking down And building up walls</p>
            <p>That trapped me in this evil hopelessness Burned out mentally</p>
            <p>Damn this discouragement</p>
            <p>I just feel worthless Seeking validation</p>
            <p>While my heart keeps breaking</p>
        `
    },
    {
        id: '17',
        title: "An Unexpected Bond",
        slug: "an-unexpected-bond",
        category: "Connection",
        date: "2024",
        excerpt: "I never thought that you would be, Someone so dear to me...",
        content: `
            <p>I never thought that you would be,</p>
            <p>Someone so dear to me.</p>
            <p>A stranger that soon felt like home,</p>
            <p>A kindred spirit I had known.</p>
            <br/>
            <p>With you I need not pretend,</p>
            <p>My truest self I can extend.</p>
            <p>No filter, no facade required,</p>
            <p>Together we are inspired.</p>
            <br/>
            <p>Though squabbles led to time apart,</p>
            <p>You still reside within my heart.</p>
            <p>Misunderstandings fade away,</p>
            <p>When two are meant to stay.</p>
            <br/>
            <p>Our bond is different from the rest,</p>
            <p>Of this connection I'm so blessed.</p>
            <p>You've become my closest friend,</p>
            <p>This is a love that need not end.</p>
            <br/>
            <p>What we have is true and right,</p>
            <p>Our souls are intertwined so tight.</p>
            <p>Fate brought us together, now I see,</p>
            <p>You were meant for me, and me for thee.</p>
        `
    },
    {
        id: '18',
        title: "People Scare Me",
        slug: "people-scare-me",
        category: "Trust",
        date: "2024",
        excerpt: "people scare me because you can never tell what they're thinking or feeling...",
        content: `
            <p>people scare me</p>
            <p>because you can never tell</p>
            <p>what they're thinking or feeling</p>
            <br/>
            <p>because people lie people lie</p>
            <p>all the damn time</p>
            <p>with their words their smiles</p>
            <p>their eyes people lie</p>
            <p>and the thing is, they</p>
            <p>tend to be good at it</p>
            <br/>
            <p>so good at it that</p>
            <p>they forget they're lying</p>
            <p>they forget they're hurting others</p>
            <p>they forget the power</p>
            <p>they have the power to hold</p>
            <p>someone's heart in their hand</p>
            <p>and at any given moment,</p>
            <p>they could squeeze just a bit too hard...</p>
        `
    },
    {
        id: '19',
        title: "Cultivation",
        slug: "cultivation",
        category: "Fear of Love",
        date: "2024",
        excerpt: "I've always been scared of you... you're the first Person I actually personally loved...",
        content: `
            <p>I've always been scared of you ....you're the first Person I actually personally loved with no influence besides the universe bringing us together...I was afraid that you would hurt me or leave, like everyone else I held close to me...I'm understanding that's why I always went overboard the fear of losing you caused me to push you away ...I always knew you were pure and beautiful and something natural like a diamond or a rainbow...the fear of me not knowing if I could step up with you in life because my whole childhood I was told I was nothing and would be nothing, I was dealing with trauma long before I could remember...</p>
            <br/>
            <p>the fear of you believing I was nothing, kept me on edge afraid that you.. I would lose you ...I was afraid that you weren't true that you would deceive me ...afraid that the uncontrollable love I had for you would be taken advantage of...anxiety flooded me everyday confused on how I should show you my love if you would think I was weak or not man enough...but in the end it came off as insecurities, controlling, abusive, ...I've never had anything not a pet not a home not love and when I thought I did i was taken away from me...</p>
            <br/>
            <p>I'm still afraid of you ...that you will never remember my love was real ...that you will forget that I always was there but lost in decision and confused by depression anxiety and trauma...it's like I made you sick and now you resent me... yet still i want you to be there for me no matter what I cannot stop foreseeing the evil thoughts that poision my mind...</p>
            <br/>
            <p>My heart, it keeps aching no matter how much I try to keep positive no matter who I talk to with... The saddest thing is I have been having these hallucinations since the moment you were far from me. These hallucinations conjure up without my intention they consume me yet I feel that false hope for you when I talk with my hallucinations that take your shape... Please I don't know what to do I'm drowning. I'm being pulled down by my very own thoughts and my introspection seems to be too broken. Losing human emotions, conjuring demons , manipulating people, I don't even know what I've become..... Please I want to be saved.. even if it means to die...</p>
        `
    },
    {
        id: '20',
        title: "A Special Friendship",
        slug: "a-special-friendship",
        category: "Bond",
        date: "2024",
        excerpt: "I never expected our paths to cross, Or that in you, I'd find no loss...",
        content: `
            <p>I never expected our paths to cross,</p>
            <p>Or that in you, I'd find no loss.</p>
            <p>Just a kindred spirit, wise and kind,</p>
            <p>With whom I'd share a special bond to find.</p>
            <br/>
            <p>Open and honest, wearing no disguise,</p>
            <p>All filters fade when I look in your eyes.</p>
            <p>Your gentle ways and thoughtful mind,</p>
            <p>Provide the comfort that is so hard to find.</p>
            <br/>
            <p>We've had our conflicts, said things we regret,</p>
            <p>But true friends can forgiveness beget.</p>
            <p>For it's not the petty spats that define,</p>
            <p>But the care and support that brightly shine.</p>
            <br/>
            <p>Now I see that fate brought you here,</p>
            <p>To fill my life with so much cheer.</p>
            <p>People come and go, but friends like you</p>
            <p>Are faithful, true, and oh so few.</p>
            <br/>
            <p>What we share is a precious gift,</p>
            <p>Of laughter, wisdom, joy so swift.</p>
            <p>You've become the sibling I've never had,</p>
            <p>A partner through good times and bad.</p>
            <br/>
            <p>This special friendship I'll forever treasure,</p>
            <p>A bond like ours is the richest measure.</p>
            <p>As kindred spirits, we're interlaced,</p>
            <p>By trust and love that will stand the test.</p>
        `
    }
    */
];
