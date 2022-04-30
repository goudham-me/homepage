<h1 align="center">Why I Don't Like Java... Anymore</h1>

<div style="display: flex; justify-content: space-between; margin-bottom: -15px; margin-top: -25px">
  <p><b>03/04/2022</b></p>
  <p><b>Goudham Suresh</b></p>
</div>

- - - -

<br>

<div align="center">
    <img src="../../images/blog/friendship_over_java.png" width="500">
</div>

So...

> **I don't like Java anymore**

And honestly, I'm kinda bummed about it.

Java has the privilege (or not, depending on how you look at it) of being one of the first programming languages I
interacted with. Throughout high school, we were taught... the monstrosity that
is... [Visual Basic 2010 Express.](https://ludovic.chabant.com/devblog/2010/01/09/visual-studio-express-limitations-lead-to-bad-practices//ceiling_cat_vs_express.jpg)

_**shudders**_

Casting those years aside, Java stormed its way into my life in my final years of high school through a foundation
apprenticeship that I was doing. I still vividly remember looking at some code on the lecturer's screen and thinking to
myself...

> What the f**k is going on? private static void wha? new Scanner()? cLaSsEs & oBjeCTs, what are those??????

However, at the same time, I was... excited! Even though I didn't know how to define an arraylist of strings or read in
files or whatever, some part of me was excited _because_ I didn't know. It was an opportunity for me to learn and work
towards proficiency. Unfortunately, that feeling has shifted towards another language as of late.

🦀 **Rust** 🦀

## It's Not You... It's Me!

Yes. I'm **The Problem**.

I never thought in a million years that I would be showing interest in low-level code and the issues that only appear
when you're that close to the metal. I'm pretty sure my Systems Programming lecturer is to blame for that one.

Systems Programming covered the C programming language in detail and how to design concurrent/parallel[^wut] code.
Learning C and all the tradeoffs of higher-level vs lower level was entertaining! During this course, I realised that
I _really_ like breaking down the abstraction layers that we're all so comfortable with and understanding the intricate
processes underneath the hood.

After reaching that conclusion, I realised that Java's whole design philosophy doesn't match my personal interests
anymore. The _whole point_ of a language like Java is that you don't have to worry about optimising performance for
embedded devices[^java] or manually managing memory. Whereas in a language like Rust, the challenges are closer to the
hardware. Not to mention, the utterly different memory model involves reasoning about your code entirely differently.

Spending free time in-between work and university on Rust has super-charged that feeling that I mentioned earlier. I'm
still just a beginner, but I'm _excited_ to learn more and understand more concepts.

## What Java Version Are We On Again?

While I might not have the motivation to be actively interested in Java within my spare time, that's not a reflection of
how the language is developing! I'd argue that it's been in the best place since its inception.

On 22nd March 2022, [Java 18](https://openjdk.java.net/projects/jdk/18/) was released as a public release candidate,
making it available for everyone; this marks the _**9th**_ release under the new 6-month release cadence.

There were some _really_ neat features that got bundled with 18!

- [x] A simple webserver to serve static files!
- [x] UTF-8 encoding by default!
- [x] Support code snippets in javadocs!
- [x] and more!

The overall direction of the java language seems to be heading towards
more [pattern matching](https://openjdk.java.net/jeps/420) [^amber] features. I like to think this shows Java is not
afraid to continue innovating and getting inspiration from other languages.

In my humble opinion, I think the Java programming language is in a really great position to continue dominating the
market as it has been for the past few decades!

## So Wait... Do You Like Java Or Not?

The title may be _slightly_ misleading.

If I was to rewrite the title right now. I would make it...

> Why I'm Not As Interested In Java Anymore

I still work in the JVM based team, so I won't be actively avoiding Java anytime soon. In fact, I think it's headed in a
really cool direction, and it's still the language that I'm most confident and proficient in. It just so happens to be
that I prefer low-level systems languages now!

Especially... 🦀 **Rust** 🦀

Just keep an eye out for the upcoming blog post:

> Why I Don't Like Rust... Anymore

:P

### Footnotes

[^wut]: What one is what again o.O

[^java]: Your first hurdle might be that you're trying to use Java on embedded devices :P

[^amber]: Check out [Project Amber](https://openjdk.java.net/projects/amber/). They're the main driver and advocate
behind _"smaller, productivity-oriented Java language features."_

{{#template ../../templates/footer.md path=../../images}}