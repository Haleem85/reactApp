import React from "react";
import PageNav from "./components/PageNav";

const App = () => {
  return (
    <>
      <header>
        <PageNav />
      </header>

      <main>
        <article>
          <h1>My web page</h1>
          <p>
            This is my web page. There are many like it but this one is mine.
          </p>
          <p>
            I’m using the HyperText Markup Language (<dfn>HTML</dfn>) to give
            structure to this page.
          </p>
          <p>
            For example, this text is inside a paragraph which is inside an
            article which is inside the main content.
          </p>
          <p>
            For the tangential information that follows, I’m using the{" "}
            <code>aside</code> element.
          </p>
        </article>
        <aside>
          <h2>History</h2>
          <p>
            Did you know that{" "}
            <a href="http://info.cern.ch/hypertext/WWW/TheProject.html">
              the first web page ever made
            </a>{" "}
            is still online at its original URL?
          </p>
          <p>
            The page was created by Tim Berners-Lee in the early 90s and it
            still works in a modern web browser.
          </p>
        </aside>
      </main>
      <footer>
        <small>I made this!</small>
      </footer>
    </>
  );
};

export default App;
