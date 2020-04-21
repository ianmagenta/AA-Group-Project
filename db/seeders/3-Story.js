'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [
      {
        title: "The Black Cat",
        subHeading: "",
        body: "For the most wild, yet most homely narrative which I am about to pen, I neither expect nor solicit belief. Mad indeed would I be to expect it, in a case where my very senses reject their own evidence. Yet, mad am I not—and very surely do I not dream. But to-morrow I die, and to-day I would unburthen my soul. My immediate purpose is to place before the world, plainly, succinctly, and without comment, a series of mere household events. In their consequences, these events have terrified—have tortured—have destroyed me. Yet I will not attempt to expound them. To me, they have presented little but Horror—to many they will seem less terrible than barroques. Hereafter, perhaps, some intellect may be found which will reduce my phantasm to the common-place—some intellect more calm, more logical, and far less excitable than my own, which will perceive, in the circumstances I detail with awe, nothing more than an ordinary succession of very natural causes and effects. From my infancy I was noted for the docility and humanity of my disposition. My tenderness of heart was even so conspicuous as to make me the jest of my companions. I was especially fond of animals, and was indulged by my parents with a great variety of pets. With these I spent most of my time, and never was so happy as when feeding and caressing them. This peculiarity of character grew with my growth, and in my manhood, I derived from it one of my principal sources of pleasure. To those who have cherished an affection for a faithful and sagacious dog, I need hardly be at the trouble of explaining the nature or the intensity of the gratification thus derivable. There is something in the unselfish and self-sacrificing love of a brute, which goes directly to the heart of him who has had frequent occasion to test the paltry friendship and gossamer fidelity of mere Man.",
        userId: 5,
        categoryId: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Tell-Tale Heart",
        subHeading: "Another part of my classic works",
        body: "TRUE!—nervous—very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses—not destroyed—not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how healthily—how calmly I can tell you the whole story. It is impossible to say how first the idea entered my brain; but once conceived, it haunted me day and night. Object there was none. Passion there was none. I loved the old man. He had never wronged me. He had never given me insult. For his gold I had no desire. I think it was his eye! yes, it was this! He had the eye of a vulture—a pale blue eye, with a film over it. Whenever it fell upon me, my blood ran cold; and so by degrees—very gradually—I made up my mind to take the life of the old man, and thus rid myself of the eye forever. Now this is the point. You fancy me mad. Madmen know nothing. But you should have seen me. You should have seen how wisely I proceeded—with what caution—with what foresight—with what dissimulation I went to work! I was never kinder to the old man than during the whole week before I killed him. And every night, about midnight, I turned the latch of his door and opened it—oh so gently! And then, when I had made an opening sufficient for my head, I put in a dark lantern, all closed, closed, that no light shone out, and then I thrust in my head. Oh, you would have laughed to see how cunningly I thrust it in! I moved it slowly—very, very slowly, so that I might not disturb the old man’s sleep. It took me an hour to place my whole head within the opening so far that I could see him as he lay upon his bed. Ha! would a madman have been so wise as this? And then, when my head was well in the room, I undid the lantern cautiously—oh, so cautiously—cautiously (for the hinges creaked)—I undid it just so much that a single thin ray fell upon the vulture eye. And this I did for seven long nights—every night just at midnight—but I found the eye always closed; and so it was impossible to do the work; for it was not the old man who vexed me, but his Evil Eye. And every morning, when the day broke, I went boldly into the chamber, and spoke courageously to him, calling him by name in a hearty tone, and inquiring how he has passed the night. So you see he would have been a very profound old man, indeed, to suspect that every night, just at twelve, I looked in upon him while he slept. ",
        userId: 5,
        categoryId: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Raven",
        subHeading: "Part of my classic poem",
        body: "Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten lore, While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door. 'Tis some visiter,' I muttered, 'tapping at my chamber door— Only this, and nothing more.'",
        userId: 5,
        categoryId: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Pride and Prejudice",
        subHeading: "Draft of Chapter 1",
        body: ` It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.

“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”

Mr. Bennet replied that he had not.

“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.”

Mr. Bennet made no answer.

“Do you not want to know who has taken it?” cried his wife impatiently.

“You want to tell me, and I have no objection to hearing it.”

This was invitation enough.

“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.”

“What is his name?”

“Bingley.”

“Is he married or single?”

“Oh! Single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!”

“How so? How can it affect them?”

“My dear Mr. Bennet,” replied his wife, “how can you be so tiresome! You must know that I am thinking of his marrying one of them.”

“Is that his design in settling here?”

“Design! Nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes.”

“I see no occasion for that. You and the girls may go, or you may send them by themselves, which perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley may like you the best of the party.”

“My dear, you flatter me. I certainly have had my share of beauty, but I do not pretend to be anything extraordinary now. When a woman has five grown-up daughters, she ought to give over thinking of her own beauty.”

“In such cases, a woman has not often much beauty to think of.”

“But, my dear, you must indeed go and see Mr. Bingley when he comes into the neighbourhood.”

“It is more than I engage for, I assure you.”

“But consider your daughters. Only think what an establishment it would be for one of them. Sir William and Lady Lucas are determined to go, merely on that account, for in general, you know, they visit no newcomers. Indeed you must go, for it will be impossible for us to visit him if you do not.”

“You are over-scrupulous, surely. I dare say Mr. Bingley will be very glad to see you; and I will send a few lines by you to assure him of my hearty consent to his marrying whichever he chooses of the girls; though I must throw in a good word for my little Lizzy.”

“I desire you will do no such thing. Lizzy is not a bit better than the others; and I am sure she is not half so handsome as Jane, nor half so good-humoured as Lydia. But you are always giving her the preference.”

“They have none of them much to recommend them,” replied he; “they are all silly and ignorant like other girls; but Lizzy has something more of quickness than her sisters.”

“Mr. Bennet, how can you abuse your own children in such a way? You take delight in vexing me. You have no compassion for my poor nerves.”

“You mistake me, my dear. I have a high respect for your nerves. They are my old friends. I have heard you mention them with consideration these last twenty years at least.”

“Ah, you do not know what I suffer.”

“But I hope you will get over it, and live to see many young men of four thousand a year come into the neighbourhood.”

“It will be no use to us, if twenty such should come, since you will not visit them.”

“Depend upon it, my dear, that when there are twenty, I will visit them all.”

Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character. Her mind was less difficult to develop. She was a woman of mean understanding, little information, and uncertain temper. When she was discontented, she fancied herself nervous. The business of her life was to get her daughters married; its solace was visiting and news. `,
        userId: 6,
        categoryId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Importance of Being Earnest",
        subHeading: "Act 1",
        body: `![These two know The Importance of Being Earnest](https://upload.wikimedia.org/wikipedia/commons/8/8a/The_Importance_of_Being_Earnest_-_Cigarettecase.jpg)

Morning-room in Algernon’s flat in Half-Moon Street. The room is luxuriously and artistically furnished. The sound of a piano is heard in the adjoining room.

[**Lane** is arranging afternoon tea on the table, and after the music has ceased, **Algernon** enters.]

**Algernon.** Did you hear what I was playing, Lane?

**Lane.** I didn’t think it polite to listen, sir.

**Algernon.** I’m sorry for that, for your sake. I don’t play accurately—any one can play accurately—but I play with wonderful expression. As far as the piano is concerned, sentiment is my forte. I keep science for Life.

**Lane.** Yes, sir.

**Algernon.** And, speaking of the science of Life, have you got the cucumber sandwiches cut for Lady Bracknell?

**Lane.** Yes, sir. [Hands them on a salver.]

**Algernon.** [Inspects them, takes two, and sits down on the sofa.] Oh! . . . by the way, Lane, I see from your book that on Thursday night, when Lord Shoreman and Mr. Worthing were dining with me, eight bottles of champagne are entered as having been consumed.

**Lane.** Yes, sir; eight bottles and a pint.

**Algernon.** Why is it that at a bachelor’s establishment the servants invariably drink the champagne? I ask merely for information.

**Lane.** I attribute it to the superior quality of the wine, sir. I have often observed that in married households the champagne is rarely of a first-rate brand.

**Algernon.** Good heavens! Is marriage so demoralising as that?

**Lane.** I believe it _is_ a very pleasant state, sir. I have had very little experience of it myself up to the present. I have only been married once. That was in consequence of a misunderstanding between myself and a young person.

**Algernon.** [Languidly_._] I don’t know that I am much interested in your family life, Lane.

**Lane.** No, sir; it is not a very interesting subject. I never think of it myself.

**Algernon.** Very natural, I am sure. That will do, Lane, thank you.

**Lane.** Thank you, sir. [**Lane** goes out.]

**Algernon.** Lane’s views on marriage seem somewhat lax. Really, if the lower orders don’t set us a good example, what on earth is the use of them? They seem, as a class, to have absolutely no sense of moral responsibility.

[Enter **Lane**.]

**Lane.** Mr. Ernest Worthing.

[Enter **Jack**.]

[**Lane** goes out_._]

**Algernon.** How are you, my dear Ernest? What brings you up to town?

**Jack.** Oh, pleasure, pleasure! What else should bring one anywhere? Eating as usual, I see, Algy!

**Algernon.** [Stiffly_._] I believe it is customary in good society to take some slight refreshment at five o’clock. Where have you been since last Thursday?

**Jack.** [Sitting down on the sofa.] In the country.

**Algernon.** What on earth do you do there?

**Jack.** [Pulling off his gloves_._] When one is in town one amuses oneself. When one is in the country one amuses other people. It is excessively boring.

**Algernon.** And who are the people you amuse?

**Jack.** [Airily_._] Oh, neighbours, neighbours.

**Algernon.** Got nice neighbours in your part of Shropshire?

**Jack.** Perfectly horrid! Never speak to one of them.

**Algernon.** How immensely you must amuse them! [Goes over and takes sandwich.] By the way, Shropshire is your county, is it not?

**Jack.** Eh? Shropshire? Yes, of course. Hallo! Why all these cups? Why cucumber sandwiches? Why such reckless extravagance in one so young? Who is coming to tea?

**Algernon.** Oh! merely Aunt Augusta and Gwendolen.

**Jack.** How perfectly delightful!

**Algernon.** Yes, that is all very well; but I am afraid Aunt Augusta won’t quite approve of your being here.

**Jack.** May I ask why?

**Algernon.** My dear fellow, the way you flirt with Gwendolen is perfectly disgraceful. It is almost as bad as the way Gwendolen flirts with you.

**Jack.** I am in love with Gwendolen. I have come up to town expressly to propose to her.

**Algernon.** I thought you had come up for pleasure? . . . I call that business.

**Jack.** How utterly unromantic you are!

**Algernon.** I really don’t see anything romantic in proposing. It is very romantic to be in love. But there is nothing romantic about a definite proposal. Why, one may be accepted. One usually is, I believe. Then the excitement is all over. The very essence of romance is uncertainty. If ever I get married, I’ll certainly try to forget the fact.

**Jack.** I have no doubt about that, dear Algy. The Divorce Court was specially invented for people whose memories are so curiously constituted.

**Algernon.** Oh! there is no use speculating on that subject. Divorces are made in Heaven—[**Jack** puts out his hand to take a sandwich. **Algernon** at once interferes.] Please don’t touch the cucumber sandwiches. They are ordered specially for Aunt Augusta. [Takes one and eats it.]

**Jack.** Well, you have been eating them all the time.

**Algernon.** That is quite a different matter. She is my aunt. [Takes plate from below.] Have some bread and butter. The bread and butter is for Gwendolen. Gwendolen is devoted to bread and butter.

**Jack.** [Advancing to table and helping himself.] And very good bread and butter it is too.

**Algernon.** Well, my dear fellow, you need not eat as if you were going to eat it all. You behave as if you were married to her already. You are not married to her already, and I don’t think you ever will be.

**Jack.** Why on earth do you say that?

**Algernon.** Well, in the first place girls never marry the men they flirt with. Girls don’t think it right.

**Jack.** Oh, that is nonsense!

**Algernon.** It isn’t. It is a great truth. It accounts for the extraordinary number of bachelors that one sees all over the place. In the second place, I don’t give my consent.

**Jack.** Your consent!

**Algernon.** My dear fellow, Gwendolen is my first cousin. And before I allow you to marry her, you will have to clear up the whole question of Cecily. [Rings bell.]

**Jack.** Cecily! What on earth do you mean? What do you mean, Algy, by Cecily! I don’t know any one of the name of Cecily.

[Enter **Lane**.]

**Algernon.** Bring me that cigarette case Mr. Worthing left in the smoking-room the last time he dined here.

**Lane.** Yes, sir. [**Lane** goes out.]

**Jack.** Do you mean to say you have had my cigarette case all this time? I wish to goodness you had let me know. I have been writing frantic letters to Scotland Yard about it. I was very nearly offering a large reward.

**Algernon.** Well, I wish you would offer one. I happen to be more than usually hard up.

**Jack.** There is no good offering a large reward now that the thing is found.

[Enter **Lane** with the cigarette case on a salver. **Algernon** takes it at once. **Lane** goes out.]

**Algernon.** I think that is rather mean of you, Ernest, I must say. [Opens case and examines it.] However, it makes no matter, for, now that I look at the inscription inside, I find that the thing isn’t yours after all.

**Jack.** Of course it’s mine. [Moving to him.] You have seen me with it a hundred times, and you have no right whatsoever to read what is written inside. It is a very ungentlemanly thing to read a private cigarette case.

**Algernon.** Oh! it is absurd to have a hard and fast rule about what one should read and what one shouldn’t. More than half of modern culture depends on what one shouldn’t read.

**Jack.** I am quite aware of the fact, and I don’t propose to discuss modern culture. It isn’t the sort of thing one should talk of in private. I simply want my cigarette case back.

**Algernon.** Yes; but this isn’t your cigarette case. This cigarette case is a present from some one of the name of Cecily, and you said you didn’t know any one of that name.

**Jack.** Well, if you want to know, Cecily happens to be my aunt.

**Algernon.** Your aunt!

**Jack.** Yes. Charming old lady she is, too. Lives at Tunbridge Wells. Just give it back to me, Algy.

**Algernon.** [Retreating to back of sofa.] But why does she call herself little Cecily if she is your aunt and lives at Tunbridge Wells? [Reading.] ‘From little Cecily with her fondest love.’

**Jack.** [Moving to sofa and kneeling upon it.] My dear fellow, what on earth is there in that? Some aunts are tall, some aunts are not tall. That is a matter that surely an aunt may be allowed to decide for herself. You seem to think that every aunt should be exactly like your aunt! That is absurd! For Heaven’s sake give me back my cigarette case. [Follows **Algernon** round the room.]

**Algernon.** Yes. But why does your aunt call you her uncle? ‘From little Cecily, with her fondest love to her dear Uncle Jack.’ There is no objection, I admit, to an aunt being a small aunt, but why an aunt, no matter what her size may be, should call her own nephew her uncle, I can’t quite make out. Besides, your name isn’t Jack at all; it is Ernest.

**Jack.** It isn’t Ernest; it’s Jack.

**Algernon.** You have always told me it was Ernest. I have introduced you to every one as Ernest. You answer to the name of Ernest. You look as if your name was Ernest. You are the most earnest-looking person I ever saw in my life. It is perfectly absurd your saying that your name isn’t Ernest. It’s on your cards. Here is one of them. [Taking it from case.] ‘Mr. Ernest Worthing, B. 4, The Albany.’ I’ll keep this as a proof that your name is Ernest if ever you attempt to deny it to me, or to Gwendolen, or to any one else. [Puts the card in his pocket.]

**Jack.** Well, my name is Ernest in town and Jack in the country, and the cigarette case was given to me in the country.

**Algernon.** Yes, but that does not account for the fact that your small Aunt Cecily, who lives at Tunbridge Wells, calls you her dear uncle. Come, old boy, you had much better have the thing out at once.

**Jack.** My dear Algy, you talk exactly as if you were a dentist. It is very vulgar to talk like a dentist when one isn’t a dentist. It produces a false impression.

**Algernon.** Well, that is exactly what dentists always do. Now, go on! Tell me the whole thing. I may mention that I have always suspected you of being a confirmed and secret Bunburyist; and I am quite sure of it now.

**Jack.** Bunburyist? What on earth do you mean by a Bunburyist?

**Algernon.** I’ll reveal to you the meaning of that incomparable expression as soon as you are kind enough to inform me why you are Ernest in town and Jack in the country.

**Jack.** Well, produce my cigarette case first.

**Algernon.** Here it is. [Hands cigarette case.] Now produce your explanation, and pray make it improbable. [Sits on sofa.]

**Jack.** My dear fellow, there is nothing improbable about my explanation at all. In fact it’s perfectly ordinary. Old Mr. Thomas Cardew, who adopted me when I was a little boy, made me in his will guardian to his grand-daughter, Miss Cecily Cardew. Cecily, who addresses me as her uncle from motives of respect that you could not possibly appreciate, lives at my place in the country under the charge of her admirable governess, Miss Prism.

**Algernon.** Where is that place in the country, by the way?

**Jack.** That is nothing to you, dear boy. You are not going to be invited . . . I may tell you candidly that the place is not in Shropshire.

**Algernon.** I suspected that, my dear fellow! I have Bunburyed all over Shropshire on two separate occasions. Now, go on. Why are you Ernest in town and Jack in the country?

**Jack.** My dear Algy, I don’t know whether you will be able to understand my real motives. You are hardly serious enough. When one is placed in the position of guardian, one has to adopt a very high moral tone on all subjects. It’s one’s duty to do so. And as a high moral tone can hardly be said to conduce very much to either one’s health or one’s happiness, in order to get up to town I have always pretended to have a younger brother of the name of Ernest, who lives in the Albany, and gets into the most dreadful scrapes. That, my dear Algy, is the whole truth pure and simple.

**Algernon.** The truth is rarely pure and never simple. Modern life would be very tedious if it were either, and modern literature a complete impossibility!

**Jack.** That wouldn’t be at all a bad thing.

**Algernon.** Literary criticism is not your forte, my dear fellow. Don’t try it. You should leave that to people who haven’t been at a University. They do it so well in the daily papers. What you really are is a Bunburyist. I was quite right in saying you were a Bunburyist. You are one of the most advanced Bunburyists I know.

**Jack.** What on earth do you mean?

**Algernon.** You have invented a very useful younger brother called Ernest, in order that you may be able to come up to town as often as you like. I have invented an invaluable permanent invalid called Bunbury, in order that I may be able to go down into the country whenever I choose. Bunbury is perfectly invaluable. If it wasn’t for Bunbury’s extraordinary bad health, for instance, I wouldn’t be able to dine with you at Willis’s to-night, for I have been really engaged to Aunt Augusta for more than a week.

**Jack.** I haven’t asked you to dine with me anywhere to-night.

**Algernon.** I know. You are absurdly careless about sending out invitations. It is very foolish of you. Nothing annoys people so much as not receiving invitations.

**Jack.** You had much better dine with your Aunt Augusta.

**Algernon.** I haven’t the smallest intention of doing anything of the kind. To begin with, I dined there on Monday, and once a week is quite enough to dine with one’s own relations. In the second place, whenever I do dine there I am always treated as a member of the family, and sent down with either no woman at all, or two. In the third place, I know perfectly well whom she will place me next to, to-night. She will place me next Mary Farquhar, who always flirts with her own husband across the dinner-table. That is not very pleasant. Indeed, it is not even decent . . . and that sort of thing is enormously on the increase. The amount of women in London who flirt with their own husbands is perfectly scandalous. It looks so bad. It is simply washing one’s clean linen in public. Besides, now that I know you to be a confirmed Bunburyist I naturally want to talk to you about Bunburying. I want to tell you the rules.

**Jack.** I’m not a Bunburyist at all. If Gwendolen accepts me, I am going to kill my brother, indeed I think I’ll kill him in any case. Cecily is a little too much interested in him. It is rather a bore. So I am going to get rid of Ernest. And I strongly advise you to do the same with Mr. . . . with your invalid friend who has the absurd name.

**Algernon.** Nothing will induce me to part with Bunbury, and if you ever get married, which seems to me extremely problematic, you will be very glad to know Bunbury. A man who marries without knowing Bunbury has a very tedious time of it.

**Jack.** That is nonsense. If I marry a charming girl like Gwendolen, and she is the only girl I ever saw in my life that I would marry, I certainly won’t want to know Bunbury.

**Algernon.** Then your wife will. You don’t seem to realise, that in married life three is company and two is none.

**Jack.** [Sententiously.] That, my dear young friend, is the theory that the corrupt French Drama has been propounding for the last fifty years.

**Algernon.** Yes; and that the happy English home has proved in half the time.

**Jack.** For heaven’s sake, don’t try to be cynical. It’s perfectly easy to be cynical.

**Algernon.** My dear fellow, it isn’t easy to be anything nowadays. There’s such a lot of beastly competition about. [The sound of an electric bell is heard.] Ah! that must be Aunt Augusta. Only relatives, or creditors, ever ring in that Wagnerian manner. Now, if I get her out of the way for ten minutes, so that you can have an opportunity for proposing to Gwendolen, may I dine with you to-night at Willis’s?

**Jack.** I suppose so, if you want to.

**Algernon.** Yes, but you must be serious about it. I hate people who are not serious about meals. It is so shallow of them.

[Enter **Lane**.]

**Lane.** Lady Bracknell and Miss Fairfax.

[**Algernon** goes forward to meet them. Enter **Lady Bracknell** and **Gwendolen**.]

**Lady Bracknell.** Good afternoon, dear Algernon, I hope you are behaving very well.

**Algernon.** I’m feeling very well, Aunt Augusta.

**Lady Bracknell.** That’s not quite the same thing. In fact the two things rarely go together. [Sees **Jack** and bows to him with icy coldness.]

**Algernon.** [To **Gwendolen**.] Dear me, you are smart!

**Gwendolen.** I am always smart! Am I not, Mr. Worthing?

**Jack.** You’re quite perfect, Miss Fairfax.

**Gwendolen.** Oh! I hope I am not that. It would leave no room for developments, and I intend to develop in many directions. [**Gwendolen** and **Jack** sit down together in the corner.]

**Lady Bracknell.** I’m sorry if we are a little late, Algernon, but I was obliged to call on dear Lady Harbury. I hadn’t been there since her poor husband’s death. I never saw a woman so altered; she looks quite twenty years younger. And now I’ll have a cup of tea, and one of those nice cucumber sandwiches you promised me.

**Algernon.** Certainly, Aunt Augusta. [Goes over to tea-table.]

**Lady Bracknell.** Won’t you come and sit here, Gwendolen?

**Gwendolen.** Thanks, mamma, I’m quite comfortable where I am.

**Algernon.** [Picking up empty plate in horror.] Good heavens! Lane! Why are there no cucumber sandwiches? I ordered them specially.

**Lane.** [Gravely.] There were no cucumbers in the market this morning, sir. I went down twice.

**Algernon.** No cucumbers!

**Lane.** No, sir. Not even for ready money.

**Algernon.** That will do, Lane, thank you.

**Lane.** Thank you, sir. [Goes out.]

**Algernon.** I am greatly distressed, Aunt Augusta, about there being no cucumbers, not even for ready money.

**Lady Bracknell.** It really makes no matter, Algernon. I had some crumpets with Lady Harbury, who seems to me to be living entirely for pleasure now.

**Algernon.** I hear her hair has turned quite gold from grief.

**Lady Bracknell.** It certainly has changed its colour. From what cause I, of course, cannot say. [**Algernon** crosses and hands tea.] Thank you. I’ve quite a treat for you to-night, Algernon. I am going to send you down with Mary Farquhar. She is such a nice woman, and so attentive to her husband. It’s delightful to watch them.

**Algernon.** I am afraid, Aunt Augusta, I shall have to give up the pleasure of dining with you to-night after all.

**Lady Bracknell.** [Frowning.] I hope not, Algernon. It would put my table completely out. Your uncle would have to dine upstairs. Fortunately he is accustomed to that.

**Algernon.** It is a great bore, and, I need hardly say, a terrible disappointment to me, but the fact is I have just had a telegram to say that my poor friend Bunbury is very ill again. [Exchanges glances with **Jack**.] They seem to think I should be with him.

**Lady Bracknell.** It is very strange. This Mr. Bunbury seems to suffer from curiously bad health.

**Algernon.** Yes; poor Bunbury is a dreadful invalid.

**Lady Bracknell.** Well, I must say, Algernon, that I think it is high time that Mr. Bunbury made up his mind whether he was going to live or to die. This shilly-shallying with the question is absurd. Nor do I in any way approve of the modern sympathy with invalids. I consider it morbid. Illness of any kind is hardly a thing to be encouraged in others. Health is the primary duty of life. I am always telling that to your poor uncle, but he never seems to take much notice . . . as far as any improvement in his ailment goes. I should be much obliged if you would ask Mr. Bunbury, from me, to be kind enough not to have a relapse on Saturday, for I rely on you to arrange my music for me. It is my last reception, and one wants something that will encourage conversation, particularly at the end of the season when every one has practically said whatever they had to say, which, in most cases, was probably not much.

**Algernon.** I’ll speak to Bunbury, Aunt Augusta, if he is still conscious, and I think I can promise you he’ll be all right by Saturday. Of course the music is a great difficulty. You see, if one plays good music, people don’t listen, and if one plays bad music people don’t talk. But I’ll run over the programme I’ve drawn out, if you will kindly come into the next room for a moment.

**Lady Bracknell.** Thank you, Algernon. It is very thoughtful of you. [Rising, and following **Algernon**.] I’m sure the programme will be delightful, after a few expurgations. French songs I cannot possibly allow. People always seem to think that they are improper, and either look shocked, which is vulgar, or laugh, which is worse. But German sounds a thoroughly respectable language, and indeed, I believe is so. Gwendolen, you will accompany me.

**Gwendolen.** Certainly, mamma.

[**Lady Bracknell** and **Algernon** go into the music-room, **Gwendolen** remains behind.]

**Jack.** Charming day it has been, Miss Fairfax.

**Gwendolen.** Pray don’t talk to me about the weather, Mr. Worthing. Whenever people talk to me about the weather, I always feel quite certain that they mean something else. And that makes me so nervous.

**Jack.** I do mean something else.

**Gwendolen.** I thought so. In fact, I am never wrong.

**Jack.** And I would like to be allowed to take advantage of Lady Bracknell’s temporary absence . . .

**Gwendolen.** I would certainly advise you to do so. Mamma has a way of coming back suddenly into a room that I have often had to speak to her about.

**Jack.** [Nervously.] Miss Fairfax, ever since I met you I have admired you more than any girl . . . I have ever met since . . . I met you.

**Gwendolen.** Yes, I am quite well aware of the fact. And I often wish that in public, at any rate, you had been more demonstrative. For me you have always had an irresistible fascination. Even before I met you I was far from indifferent to you. [**Jack** looks at her in amazement.] We live, as I hope you know, Mr. Worthing, in an age of ideals. The fact is constantly mentioned in the more expensive monthly magazines, and has reached the provincial pulpits, I am told; and my ideal has always been to love some one of the name of Ernest. There is something in that name that inspires absolute confidence. The moment Algernon first mentioned to me that he had a friend called Ernest, I knew I was destined to love you.

**Jack.** You really love me, Gwendolen?

**Gwendolen.** Passionately!

**Jack.** Darling! You don’t know how happy you’ve made me.

**Gwendolen.** My own Ernest!

**Jack.** But you don’t really mean to say that you couldn’t love me if my name wasn’t Ernest?

**Gwendolen.** But your name is Ernest.

**Jack.** Yes, I know it is. But supposing it was something else? Do you mean to say you couldn’t love me then?

**Gwendolen.** [Glibly.] Ah! that is clearly a metaphysical speculation, and like most metaphysical speculations has very little reference at all to the actual facts of real life, as we know them.

**Jack.** Personally, darling, to speak quite candidly, I don’t much care about the name of Ernest . . . I don’t think the name suits me at all.

**Gwendolen.** It suits you perfectly. It is a divine name. It has a music of its own. It produces vibrations.

**Jack.** Well, really, Gwendolen, I must say that I think there are lots of other much nicer names. I think Jack, for instance, a charming name.

**Gwendolen.** Jack? . . . No, there is very little music in the name Jack, if any at all, indeed. It does not thrill. It produces absolutely no vibrations . . . I have known several Jacks, and they all, without exception, were more than usually plain. Besides, Jack is a notorious domesticity for John! And I pity any woman who is married to a man called John. She would probably never be allowed to know the entrancing pleasure of a single moment’s solitude. The only really safe name is Ernest.

**Jack.** Gwendolen, I must get christened at once—I mean we must get married at once. There is no time to be lost.

**Gwendolen.** Married, Mr. Worthing?

**Jack.** [Astounded.] Well . . . surely. You know that I love you, and you led me to believe, Miss Fairfax, that you were not absolutely indifferent to me.

**Gwendolen.** I adore you. But you haven’t proposed to me yet. Nothing has been said at all about marriage. The subject has not even been touched on.

**Jack.** Well . . . may I propose to you now?

**Gwendolen.** I think it would be an admirable opportunity. And to spare you any possible disappointment, Mr. Worthing, I think it only fair to tell you quite frankly before-hand that I am fully determined to accept you.

**Jack.** Gwendolen!

**Gwendolen.** Yes, Mr. Worthing, what have you got to say to me?

**Jack.** You know what I have got to say to you.

**Gwendolen.** Yes, but you don’t say it.

**Jack.** Gwendolen, will you marry me? [Goes on his knees.]

**Gwendolen.** Of course I will, darling. How long you have been about it! I am afraid you have had very little experience in how to propose.

**Jack.** My own one, I have never loved any one in the world but you.

**Gwendolen.** Yes, but men often propose for practice. I know my brother Gerald does. All my girl-friends tell me so. What wonderfully blue eyes you have, Ernest! They are quite, quite, blue. I hope you will always look at me just like that, especially when there are other people present. [Enter **Lady Bracknell**.]

**Lady Bracknell.** Mr. Worthing! Rise, sir, from this semi-recumbent posture. It is most indecorous.

**Gwendolen.** Mamma! [He tries to rise; she restrains him.] I must beg you to retire. This is no place for you. Besides, Mr. Worthing has not quite finished yet.

**Lady Bracknell.** Finished what, may I ask?

**Gwendolen.** I am engaged to Mr. Worthing, mamma. [They rise together.]

**Lady Bracknell.** Pardon me, you are not engaged to any one. When you do become engaged to some one, I, or your father, should his health permit him, will inform you of the fact. An engagement should come on a young girl as a surprise, pleasant or unpleasant, as the case may be. It is hardly a matter that she could be allowed to arrange for herself . . . And now I have a few questions to put to you, Mr. Worthing. While I am making these inquiries, you, Gwendolen, will wait for me below in the carriage.

**Gwendolen.** [Reproachfully.] Mamma!

**Lady Bracknell.** In the carriage, Gwendolen! [**Gwendolen** goes to the door. She and **Jack** blow kisses to each other behind **Lady Bracknell’s** back. **Lady Bracknell** looks vaguely about as if she could not understand what the noise was. Finally turns round.] Gwendolen, the carriage!

**Gwendolen.** Yes, mamma. [Goes out, looking back at **Jack**.]

**Lady Bracknell.** [Sitting down.] You can take a seat, Mr. Worthing.

[Looks in her pocket for note-book and pencil.]

**Jack.** Thank you, Lady Bracknell, I prefer standing.

**Lady Bracknell.** [Pencil and note-book in hand.] I feel bound to tell you that you are not down on my list of eligible young men, although I have the same list as the dear Duchess of Bolton has. We work together, in fact. However, I am quite ready to enter your name, should your answers be what a really affectionate mother requires. Do you smoke?

**Jack.** Well, yes, I must admit I smoke.

**Lady Bracknell.** I am glad to hear it. A man should always have an occupation of some kind. There are far too many idle men in London as it is. How old are you?

**Jack.** Twenty-nine.

**Lady Bracknell.** A very good age to be married at. I have always been of opinion that a man who desires to get married should know either everything or nothing. Which do you know?

**Jack.** [After some hesitation.] I know nothing, Lady Bracknell.

**Lady Bracknell.** I am pleased to hear it. I do not approve of anything that tampers with natural ignorance. Ignorance is like a delicate exotic fruit; touch it and the bloom is gone. The whole theory of modern education is radically unsound. Fortunately in England, at any rate, education produces no effect whatsoever. If it did, it would prove a serious danger to the upper classes, and probably lead to acts of violence in Grosvenor Square. What is your income?

**Jack.** Between seven and eight thousand a year.

**Lady Bracknell.** [Makes a note in her book.] In land, or in investments?

**Jack.** In investments, chiefly.

**Lady Bracknell.** That is satisfactory. What between the duties expected of one during one’s lifetime, and the duties exacted from one after one’s death, land has ceased to be either a profit or a pleasure. It gives one position, and prevents one from keeping it up. That’s all that can be said about land.

**Jack.** I have a country house with some land, of course, attached to it, about fifteen hundred acres, I believe; but I don’t depend on that for my real income. In fact, as far as I can make out, the poachers are the only people who make anything out of it.

**Lady Bracknell.** A country house! How many bedrooms? Well, that point can be cleared up afterwards. You have a town house, I hope? A girl with a simple, unspoiled nature, like Gwendolen, could hardly be expected to reside in the country.

**Jack.** Well, I own a house in Belgrave Square, but it is let by the year to Lady Bloxham. Of course, I can get it back whenever I like, at six months’ notice.

**Lady Bracknell.** Lady Bloxham? I don’t know her.

**Jack.** Oh, she goes about very little. She is a lady considerably advanced in years.

**Lady Bracknell.** Ah, nowadays that is no guarantee of respectability of character. What number in Belgrave Square?

**Jack.** 149.

**Lady Bracknell.** [Shaking her head.] The unfashionable side. I thought there was something. However, that could easily be altered.

**Jack.** Do you mean the fashion, or the side?

**Lady Bracknell.** [Sternly.] Both, if necessary, I presume. What are your politics?

**Jack.** Well, I am afraid I really have none. I am a Liberal Unionist.

**Lady Bracknell.** Oh, they count as Tories. They dine with us. Or come in the evening, at any rate. Now to minor matters. Are your parents living?

**Jack.** I have lost both my parents.

**Lady Bracknell.** To lose one parent, Mr. Worthing, may be regarded as a misfortune; to lose both looks like carelessness. Who was your father? He was evidently a man of some wealth. Was he born in what the Radical papers call the purple of commerce, or did he rise from the ranks of the aristocracy?

**Jack.** I am afraid I really don’t know. The fact is, Lady Bracknell, I said I had lost my parents. It would be nearer the truth to say that my parents seem to have lost me . . . I don’t actually know who I am by birth. I was . . . well, I was found.

**Lady Bracknell.** Found!

**Jack.** The late Mr. Thomas Cardew, an old gentleman of a very charitable and kindly disposition, found me, and gave me the name of Worthing, because he happened to have a first-class ticket for Worthing in his pocket at the time. Worthing is a place in Sussex. It is a seaside resort.

**Lady Bracknell.** Where did the charitable gentleman who had a first-class ticket for this seaside resort find you?

**Jack.** [Gravely.] In a hand-bag.

**Lady Bracknell.** A hand-bag?

**Jack.** [Very seriously.] Yes, Lady Bracknell. I was in a hand-bag—a somewhat large, black leather hand-bag, with handles to it—an ordinary hand-bag in fact.

**Lady Bracknell.** In what locality did this Mr. James, or Thomas, Cardew come across this ordinary hand-bag?

**Jack.** In the cloak-room at Victoria Station. It was given to him in mistake for his own.

**Lady Bracknell.** The cloak-room at Victoria Station?

**Jack.** Yes. The Brighton line.

**Lady Bracknell.** The line is immaterial. Mr. Worthing, I confess I feel somewhat bewildered by what you have just told me. To be born, or at any rate bred, in a hand-bag, whether it had handles or not, seems to me to display a contempt for the ordinary decencies of family life that reminds one of the worst excesses of the French Revolution. And I presume you know what that unfortunate movement led to? As for the particular locality in which the hand-bag was found, a cloak-room at a railway station might serve to conceal a social indiscretion—has probably, indeed, been used for that purpose before now—but it could hardly be regarded as an assured basis for a recognised position in good society.

**Jack.** May I ask you then what you would advise me to do? I need hardly say I would do anything in the world to ensure Gwendolen’s happiness.

**Lady Bracknell.** I would strongly advise you, Mr. Worthing, to try and acquire some relations as soon as possible, and to make a definite effort to produce at any rate one parent, of either sex, before the season is quite over.

**Jack.** Well, I don’t see how I could possibly manage to do that. I can produce the hand-bag at any moment. It is in my dressing-room at home. I really think that should satisfy you, Lady Bracknell.

**Lady Bracknell.** Me, sir! What has it to do with me? You can hardly imagine that I and Lord Bracknell would dream of allowing our only daughter—a girl brought up with the utmost care—to marry into a cloak-room, and form an alliance with a parcel? Good morning, Mr. Worthing!

[**Lady Bracknell** sweeps out in majestic indignation.]

**Jack.** Good morning! [**Algernon**, from the other room, strikes up the Wedding March. Jack looks perfectly furious, and goes to the door.] For goodness’ sake don’t play that ghastly tune, Algy. How idiotic you are!

[The music stops and **Algernon** enters cheerily.]

**Algernon.** Didn’t it go off all right, old boy? You don’t mean to say Gwendolen refused you? I know it is a way she has. She is always refusing people. I think it is most ill-natured of her.

**Jack.** Oh, Gwendolen is as right as a trivet. As far as she is concerned, we are engaged. Her mother is perfectly unbearable. Never met such a Gorgon . . . I don’t really know what a Gorgon is like, but I am quite sure that Lady Bracknell is one. In any case, she is a monster, without being a myth, which is rather unfair . . . I beg your pardon, Algy, I suppose I shouldn’t talk about your own aunt in that way before you.

**Algernon.** My dear boy, I love hearing my relations abused. It is the only thing that makes me put up with them at all. Relations are simply a tedious pack of people, who haven’t got the remotest knowledge of how to live, nor the smallest instinct about when to die.

**Jack.** Oh, that is nonsense!

**Algernon.** It isn’t!

**Jack.** Well, I won’t argue about the matter. You always want to argue about things.

**Algernon.** That is exactly what things were originally made for.

**Jack.** Upon my word, if I thought that, I’d shoot myself . . . [A pause.] You don’t think there is any chance of Gwendolen becoming like her mother in about a hundred and fifty years, do you, Algy?

**Algernon.** All women become like their mothers. That is their tragedy. No man does. That’s his.

**Jack.** Is that clever?

**Algernon.** It is perfectly phrased! and quite as true as any observation in civilised life should be.

**Jack.** I am sick to death of cleverness. Everybody is clever nowadays. You can’t go anywhere without meeting clever people. The thing has become an absolute public nuisance. I wish to goodness we had a few fools left.

**Algernon.** We have.

**Jack.** I should extremely like to meet them. What do they talk about?

**Algernon.** The fools? Oh! about the clever people, of course.

**Jack.** What fools!

**Algernon.** By the way, did you tell Gwendolen the truth about your being Ernest in town, and Jack in the country?

**Jack.** [In a very patronising manner.] My dear fellow, the truth isn’t quite the sort of thing one tells to a nice, sweet, refined girl. What extraordinary ideas you have about the way to behave to a woman!

**Algernon.** The only way to behave to a woman is to make love to her, if she is pretty, and to some one else, if she is plain.

**Jack.** Oh, that is nonsense.

**Algernon.** What about your brother? What about the profligate Ernest?

**Jack.** Oh, before the end of the week I shall have got rid of him. I’ll say he died in Paris of apoplexy. Lots of people die of apoplexy, quite suddenly, don’t they?

**Algernon.** Yes, but it’s hereditary, my dear fellow. It’s a sort of thing that runs in families. You had much better say a severe chill.

**Jack.** You are sure a severe chill isn’t hereditary, or anything of that kind?

**Algernon.** Of course it isn’t!

**Jack.** Very well, then. My poor brother Ernest to carried off suddenly, in Paris, by a severe chill. That gets rid of him.

**Algernon.** But I thought you said that . . . Miss Cardew was a little too much interested in your poor brother Ernest? Won’t she feel his loss a good deal?

**Jack.** Oh, that is all right. Cecily is not a silly romantic girl, I am glad to say. She has got a capital appetite, goes long walks, and pays no attention at all to her lessons.

**Algernon.** I would rather like to see Cecily.

**Jack.** I will take very good care you never do. She is excessively pretty, and she is only just eighteen.

**Algernon.** Have you told Gwendolen yet that you have an excessively pretty ward who is only just eighteen?

**Jack.** Oh! one doesn’t blurt these things out to people. Cecily and Gwendolen are perfectly certain to be extremely great friends. I’ll bet you anything you like that half an hour after they have met, they will be calling each other sister.

**Algernon.** Women only do that when they have called each other a lot of other things first. Now, my dear boy, if we want to get a good table at Willis’s, we really must go and dress. Do you know it is nearly seven?

**Jack.** [Irritably.] Oh! It always is nearly seven.

**Algernon.** Well, I’m hungry.

**Jack.** I never knew you when you weren’t . . .

**Algernon.** What shall we do after dinner? Go to a theatre?

**Jack.** Oh no! I loathe listening.

**Algernon.** Well, let us go to the Club?

**Jack.** Oh, no! I hate talking.

**Algernon.** Well, we might trot round to the Empire at ten?

**Jack.** Oh, no! I can’t bear looking at things. It is so silly.

**Algernon.** Well, what shall we do?

**Jack.** Nothing!

**Algernon.** It is awfully hard work doing nothing. However, I don’t mind hard work where there is no definite object of any kind.

[Enter **Lane**.]

**Lane.** Miss Fairfax.

[Enter **Gwendolen**. **Lane** goes out.]

**Algernon.** Gwendolen, upon my word!

**Gwendolen.** Algy, kindly turn your back. I have something very particular to say to Mr. Worthing.

**Algernon.** Really, Gwendolen, I don’t think I can allow this at all.

**Gwendolen.** Algy, you always adopt a strictly immoral attitude towards life. You are not quite old enough to do that. [**Algernon** retires to the fireplace.]

**Jack.** My own darling!

**Gwendolen.** Ernest, we may never be married. From the expression on mamma’s face I fear we never shall. Few parents nowadays pay any regard to what their children say to them. The old-fashioned respect for the young is fast dying out. Whatever influence I ever had over mamma, I lost at the age of three. But although she may prevent us from becoming man and wife, and I may marry some one else, and marry often, nothing that she can possibly do can alter my eternal devotion to you.

**Jack.** Dear Gwendolen!

**Gwendolen.** The story of your romantic origin, as related to me by mamma, with unpleasing comments, has naturally stirred the deeper fibres of my nature. Your Christian name has an irresistible fascination. The simplicity of your character makes you exquisitely incomprehensible to me. Your town address at the Albany I have. What is your address in the country?

**Jack.** The Manor House, Woolton, Hertfordshire.

[**Algernon**, who has been carefully listening, smiles to himself, and writes the address on his shirt-cuff. Then picks up the Railway Guide.]

**Gwendolen.** There is a good postal service, I suppose? It may be necessary to do something desperate. That of course will require serious consideration. I will communicate with you daily.

**Jack.** My own one!

**Gwendolen.** How long do you remain in town?

**Jack.** Till Monday.

**Gwendolen.** Good! Algy, you may turn round now.

**Algernon.** Thanks, I’ve turned round already.

**Gwendolen.** You may also ring the bell.

**Jack.** You will let me see you to your carriage, my own darling?

**Gwendolen.** Certainly.

**Jack.** [To **Lane**, who now enters.] I will see Miss Fairfax out.

**Lane.** Yes, sir. [**Jack** and **Gwendolen** go off.]

[**Lane** presents several letters on a salver to **Algernon**. It is to be surmised that they are bills, as **Algernon**, after looking at the envelopes, tears them up.]

**Algernon.** A glass of sherry, Lane.

**Lane.** Yes, sir.

**Algernon.** To-morrow, Lane, I’m going Bunburying.

**Lane.** Yes, sir.

**Algernon.** I shall probably not be back till Monday. You can put up my dress clothes, my smoking jacket, and all the Bunbury suits . . .

**Lane.** Yes, sir. [Handing sherry.]

**Algernon.** I hope to-morrow will be a fine day, Lane.

**Lane.** It never is, sir.

**Algernon.** Lane, you’re a perfect pessimist.

**Lane.** I do my best to give satisfaction, sir.

[Enter **Jack**. **Lane** goes off.]

**Jack.** There’s a sensible, intellectual girl! the only girl I ever cared for in my life. [**Algernon** is laughing immoderately.] What on earth are you so amused at?

**Algernon.** Oh, I’m a little anxious about poor Bunbury, that is all.

**Jack.** If you don’t take care, your friend Bunbury will get you into a serious scrape some day.

**Algernon.** I love scrapes. They are the only things that are never serious.

**Jack.** Oh, that’s nonsense, Algy. You never talk anything but nonsense.

**Algernon.** Nobody ever does.

[**Jack** looks indignantly at him, and leaves the room. **Algernon** lights a cigarette, reads his shirt-cuff, and smiles.]

ACT DROP
`,
        userId: 8,
        categoryId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Frankenstein",
        subHeading: "Chapter 1",
        body: `
![Illustration by Theodor von Holst from the frontispiece of the 1831 edition](https://upload.wikimedia.org/wikipedia/commons/e/e6/Frontispiece_to_Frankenstein_1831.jpg)

I am by birth a Genevese, and my family is one of the most distinguished of that republic. My ancestors had been for many years counsellors and syndics, and my father had filled several public situations with honour and reputation. He was respected by all who knew him for his integrity and indefatigable attention to public business. He passed his younger days perpetually occupied by the affairs of his country; a variety of circumstances had prevented his marrying early, nor was it until the decline of life that he became a husband and the father of a family.

As the circumstances of his marriage illustrate his character, I cannot refrain from relating them. One of his most intimate friends was a merchant who, from a flourishing state, fell, through numerous mischances, into poverty. This man, whose name was Beaufort, was of a proud and unbending disposition and could not bear to live in poverty and oblivion in the same country where he had formerly been distinguished for his rank and magnificence. Having paid his debts, therefore, in the most honourable manner, he retreated with his daughter to the town of Lucerne, where he lived unknown and in wretchedness. My father loved Beaufort with the truest friendship and was deeply grieved by his retreat in these unfortunate circumstances. He bitterly deplored the false pride which led his friend to a conduct so little worthy of the affection that united them. He lost no time in endeavouring to seek him out, with the hope of persuading him to begin the world again through his credit and assistance.

Beaufort had taken effectual measures to conceal himself, and it was ten months before my father discovered his abode. Overjoyed at this discovery, he hastened to the house, which was situated in a mean street near the Reuss. But when he entered, misery and despair alone welcomed him. Beaufort had saved but a very small sum of money from the wreck of his fortunes, but it was sufficient to provide him with sustenance for some months, and in the meantime he hoped to procure some respectable employment in a merchant’s house. The interval was, consequently, spent in inaction; his grief only became more deep and rankling when he had leisure for reflection, and at length it took so fast hold of his mind that at the end of three months he lay on a bed of sickness, incapable of any exertion.

His daughter attended him with the greatest tenderness, but she saw with despair that their little fund was rapidly decreasing and that there was no other prospect of support. But Caroline Beaufort possessed a mind of an uncommon mould, and her courage rose to support her in her adversity. She procured plain work; she plaited straw and by various means contrived to earn a pittance scarcely sufficient to support life.

Several months passed in this manner. Her father grew worse; her time was more entirely occupied in attending him; her means of subsistence decreased; and in the tenth month her father died in her arms, leaving her an orphan and a beggar. This last blow overcame her, and she knelt by Beaufort’s coffin weeping bitterly, when my father entered the chamber. He came like a protecting spirit to the poor girl, who committed herself to his care; and after the interment of his friend he conducted her to Geneva and placed her under the protection of a relation. Two years after this event Caroline became his wife.

There was a considerable difference between the ages of my parents, but this circumstance seemed to unite them only closer in bonds of devoted affection. There was a sense of justice in my father’s upright mind which rendered it necessary that he should approve highly to love strongly. Perhaps during former years he had suffered from the late-discovered unworthiness of one beloved and so was disposed to set a greater value on tried worth. There was a show of gratitude and worship in his attachment to my mother, differing wholly from the doting fondness of age, for it was inspired by reverence for her virtues and a desire to be the means of, in some degree, recompensing her for the sorrows she had endured, but which gave inexpressible grace to his behaviour to her. Everything was made to yield to her wishes and her convenience. He strove to shelter her, as a fair exotic is sheltered by the gardener, from every rougher wind and to surround her with all that could tend to excite pleasurable emotion in her soft and benevolent mind. Her health, and even the tranquillity of her hitherto constant spirit, had been shaken by what she had gone through. During the two years that had elapsed previous to their marriage my father had gradually relinquished all his public functions; and immediately after their union they sought the pleasant climate of Italy, and the change of scene and interest attendant on a tour through that land of wonders, as a restorative for her weakened frame.

From Italy they visited Germany and France. I, their eldest child, was born at Naples, and as an infant accompanied them in their rambles. I remained for several years their only child. Much as they were attached to each other, they seemed to draw inexhaustible stores of affection from a very mine of love to bestow them upon me. My mother’s tender caresses and my father’s smile of benevolent pleasure while regarding me are my first recollections. I was their plaything and their idol, and something better—their child, the innocent and helpless creature bestowed on them by Heaven, whom to bring up to good, and whose future lot it was in their hands to direct to happiness or misery, according as they fulfilled their duties towards me. With this deep consciousness of what they owed towards the being to which they had given life, added to the active spirit of tenderness that animated both, it may be imagined that while during every hour of my infant life I received a lesson of patience, of charity, and of self-control, I was so guided by a silken cord that all seemed but one train of enjoyment to me.

For a long time I was their only care. My mother had much desired to have a daughter, but I continued their single offspring. When I was about five years old, while making an excursion beyond the frontiers of Italy, they passed a week on the shores of the Lake of Como. Their benevolent disposition often made them enter the cottages of the poor. This, to my mother, was more than a duty; it was a necessity, a passion—remembering what she had suffered, and how she had been relieved—for her to act in her turn the guardian angel to the afflicted. During one of their walks a poor cot in the foldings of a vale attracted their notice as being singularly disconsolate, while the number of half-clothed children gathered about it spoke of penury in its worst shape. One day, when my father had gone by himself to Milan, my mother, accompanied by me, visited this abode. She found a peasant and his wife, hard working, bent down by care and labour, distributing a scanty meal to five hungry babes. Among these there was one which attracted my mother far above all the rest. She appeared of a different stock. The four others were dark-eyed, hardy little vagrants; this child was thin and very fair. Her hair was the brightest living gold, and despite the poverty of her clothing, seemed to set a crown of distinction on her head. Her brow was clear and ample, her blue eyes cloudless, and her lips and the moulding of her face so expressive of sensibility and sweetness that none could behold her without looking on her as of a distinct species, a being heaven-sent, and bearing a celestial stamp in all her features.

The peasant woman, perceiving that my mother fixed eyes of wonder and admiration on this lovely girl, eagerly communicated her history. She was not her child, but the daughter of a Milanese nobleman. Her mother was a German and had died on giving her birth. The infant had been placed with these good people to nurse: they were better off then. They had not been long married, and their eldest child was but just born. The father of their charge was one of those Italians nursed in the memory of the antique glory of Italy—one among the _schiavi ognor frementi,_ who exerted himself to obtain the liberty of his country. He became the victim of its weakness. Whether he had died or still lingered in the dungeons of Austria was not known. His property was confiscated; his child became an orphan and a beggar. She continued with her foster parents and bloomed in their rude abode, fairer than a garden rose among dark-leaved brambles.

When my father returned from Milan, he found playing with me in the hall of our villa a child fairer than pictured cherub—a creature who seemed to shed radiance from her looks and whose form and motions were lighter than the chamois of the hills. The apparition was soon explained. With his permission my mother prevailed on her rustic guardians to yield their charge to her. They were fond of the sweet orphan. Her presence had seemed a blessing to them, but it would be unfair to her to keep her in poverty and want when Providence afforded her such powerful protection. They consulted their village priest, and the result was that Elizabeth Lavenza became the inmate of my parents’ house—my more than sister—the beautiful and adored companion of all my occupations and my pleasures.

Everyone loved Elizabeth. The passionate and almost reverential attachment with which all regarded her became, while I shared it, my pride and my delight. On the evening previous to her being brought to my home, my mother had said playfully, “I have a pretty present for my Victor—tomorrow he shall have it.” And when, on the morrow, she presented Elizabeth to me as her promised gift, I, with childish seriousness, interpreted her words literally and looked upon Elizabeth as mine—mine to protect, love, and cherish. All praises bestowed on her I received as made to a possession of my own. We called each other familiarly by the name of cousin. No word, no expression could body forth the kind of relation in which she stood to me—my more than sister, since till death she was to be mine only.
`,
        userId: 9,
        categoryId: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Some of my Deepest Personal Thoughts",
        subHeading: "Please take time to read through them carefully",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nisl odio. Sed varius in neque ut sagittis. Praesent at dolor interdum, ullamcorper dolor nec, blandit augue. Sed lobortis quam erat, sed **vestibulum mi tempus sit amet. Curabitur nec magna in quam aliquam** ullamcorper. Vivamus vitae ornare felis. Aenean eget faucibus sapien. Nullam ante felis, maximus ac ullamcorper quis, tempus sed nisl. Ut condimentum malesuada dictum. Duis dapibus metus id eleifend fermentum. Sed imperdiet fermentum tellus vitae imperdiet. Phasellus vel viverra eros, at sollicitudin lectus. Curabitur nec suscipit nibh. Suspendisse vel semper elit. Praesent dignissim mi eleifend eros feugiat semper. Ut tincidunt ligula nulla, eu gravida massa elementum vitae.

Integer nec consequat turpis. Vivamus a tincidunt elit. Maecenas vitae faucibus est. Sed varius faucibus nunc. Integer fermentum erat orci, vitae viverra quam dictum in. Phasellus odio ex, sagittis ac lacinia non, interdum eget sapien. *Pellentesque rhoncus gravida diam, vel scelerisque diam hendrerit vitae. Integer ac metus blandit, maximus tellus a, maximus turpis*. Sed ac neque nec nulla scelerisque molestie eleifend et leo. In felis ante, efficitur eget ullamcorper id, accumsan laoreet risus. Donec laoreet egestas risus, non pellentesque odio pharetra quis. Quisque ac consequat velit, eget aliquam ipsum. Maecenas pretium tincidunt varius. Integer hendrerit convallis ante eget ullamcorper. Donec venenatis metus tellus, eu interdum dui tempus non. Pellentesque vestibulum massa ac efficitur convallis.

> Nunc ultrices, lacus eu tempus auctor, ex nisi suscipit nisl, in
> maximus mauris urna vel turpis. Nam bibendum ac libero eget tincidunt.
> Maecenas a aliquam mi, eu eleifend urna. Sed euismod lacus nunc, sed
> porta purus consequat nec. Proin vitae purus vel tellus ultrices
> luctus. Phasellus et est posuere, mollis magna sit amet, porta orci.
> Vestibulum malesuada, odio eget consequat malesuada, augue erat
> tristique arcu, ut fringilla nunc urna id mauris. Morbi commodo non
> turpis at mattis. Etiam pharetra metus arcu, in ultricies enim
> tristique a. Ut urna nisi, lacinia at diam a, laoreet dictum arcu.

~~Curabitur et lorem id metus feugiat accumsan. Fusce malesuada feugiat malesuada. Suspendisse hendrerit volutpat tincidunt. Mauris hendrerit felis sed facilisis posuere. Aenean dui enim, gravida ut porta nec, cursus et eros. Vestibulum facilisis odio nisl, id volutpat erat molestie sit amet. Aenean turpis odio, ultrices a dui non, posuere convallis dolor. Quisque odio sapien, ullamcorper non commodo a, porttitor id neque. Vestibulum vestibulum elit nec tellus aliquet dictum ac at ex. Fusce id orci non lectus finibus pulvinar et in dolor. Nullam gravida lectus eget porta lobortis. Sed dictum, sem vel condimentum ullamcorper, sapien metus rutrum magna, in lacinia sem neque sit amet turpis. Nam ac molestie mi. Integer malesuada bibendum nunc at elementum.~~

Proin maximus, leo et venenatis iaculis, lectus quam lacinia odio, id tincidunt sapien leo eget erat. Aliquam mattis, metus eget viverra euismod, dui elit feugiat libero, nec elementum sapien est ac leo. Fusce purus mauris, efficitur id posuere nec, ultricies ut metus. Aliquam quis luctus enim, tempus commodo dolor. Praesent dictum placerat mauris, nec tincidunt dui efficitur in. Proin vitae feugiat orci. Mauris a condimentum nisl. Integer non nulla non lorem porta euismod. Praesent scelerisque vulputate orci, non laoreet ligula gravida sed. Suspendisse congue neque at erat blandit placerat.
`,
        userId: 17,
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "General Thoughts",
        subHeading: "On things in general",
        body: `## Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis lacinia dolor. Vestibulum finibus, ipsum id laoreet bibendum, velit mi gravida velit, et dapibus justo tellus non mi. Donec porttitor ullamcorper sodales. Vivamus at elit quis arcu vestibulum lobortis at sit amet mi. Curabitur tincidunt eros at ex accumsan, vel interdum urna pretium. Proin dapibus malesuada erat, vitae congue dolor tristique non. Nam cursus eget felis id dignissim. Nam sagittis augue a tellus facilisis tristique. Nulla id ipsum mi. Morbi enim erat, pellentesque nec ornare a, aliquet eget neque. Vestibulum tempus, nunc eget imperdiet sagittis, mi justo fermentum nisi, sit amet accumsan sapien sem non ipsum.

 1. Nunc sit amet ex felis. Donec hendrerit nisi eget orci luctus, sit
 2. amet mattis velit blandit. Fusce id felis id eros tincidunt rhoncus.
 3. Phasellus at nunc leo. Sed nec augue urna. Ut a sodales magna, vitae
 4. tempor felis. Nullam nunc arcu, lobortis non condimentum eu,
 5. pulvinar at quam. Aenean interdum tortor quis justo viverra, id
 6. facilisis justo interdum.

Pellentesque ac pretium est, et laoreet nulla. Praesent fringilla tortor

 - facilisis pellentesque lacinia. Vestibulum sodales, ligula ut
 - condimentum scelerisque, ligula justo commodo velit, a
 - condimentum
 - sapien ipsum a est. Pellentesque dapibus dictum bibendum. Duis
 - tempor
 - non massa in sodales. Morbi at efficitur mauris. Aenean malesuada
 - justo ac diam consequat, at placerat risus sagittis. Donec blandit
 - pulvinar interdum. Mauris commodo vehicula tempus. Donec
 - bibendum
 - sapien sit amet sapien interdum, vitae pretium libero feugiat. Donec
 - tempor accumsan finibus. Ut non est sit amet eros gravida pharetra a
 - sed diam. Integer nec mauris et dolor commodo molestie.

 - [x] Praesent maximus tincidunt tincidunt. Suspendisse egestas
       tincidunt mi eget auctor. Nunc ipsum metus, elementum eu ligula
       sit amet, vehicula rhoncus turpis. Sed eu enim tempus neque
       suscipit blandit. Etiam tincidunt velit mi. In a pretium odio. Ut
       eget sem ut sapien tincidunt viverra id at sapien. Pellentesque
       fermentum placerat finibus. Sed fringilla venenatis tellus sed
       egestas. Orci varius natoque penatibus et magnis dis parturient
       montes, nascetur ridiculus mus. Nam viverra nulla aliquet,
       egestas sem sed, convallis mi.

`,
        userId: 18,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
