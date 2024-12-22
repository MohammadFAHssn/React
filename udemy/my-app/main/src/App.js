import { useState } from "react";
import "./style.css";
import { dataList } from "./data";

function App() {
  // alert("this is just an alert!");

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice"); // fetch request!
    const data = await res.json();
    // console.log(data);
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);

    setCount((count) => count + 1);
    // in setSomething if we need to set state base on current state
    // we always must use a callback just like above becouse
    // the code below is not work fine!
    // setCount(count + 1);
    // setCount(count + 1);
    // but with a callback, work!
  }

  // getAdvice();
  // 👆 take this on and see changes!

  return (
    // jsx👇
    <div>
      <h1>React Tutorial</h1>

      {/* alert */}
      <section>
        <p>
          when it is loaded in the first time, the alert is shown twice. when we
          click on button, this the alert is shown again. that sounds that any
          changes occur, that is a state changes, the component execute again!
        </p>
      </section>

      {/* Building Our First React App */}
      <section>
        <h2>Building Our First React App</h2>
        <p>
          whenever i click on this button, we want to get a new advice from an
          api (fetch some data from an api)
        </p>

        <p className="advice">"{advice}"</p>
        <button
          onClick={getAdvice}
          // note that parentheses are not used here!
          onMouseEnter={() => {
            // this will call when hovering over the button
          }}
        >
          Get advice
        </button>
        {/* we add some javascript code using {} */}
        {/* in HTML we use onclick="" -> without camel case */}
        <Message count={count} />
      </section>

      <TheRiseOfSinglePageApplication />

      {/* front-end web applications are all about... */}
      <section>
        <p>
          <img
            src={require("./images/front-end-web-applications-are-all-about.png")}
            alt=""
          />
        </p>
        <p>
          or in other words, is to make sure that the UI always displays the
          current state of the data.
        </p>
      </section>

      <States />

      {/* Next.js and Remix */}
      <section>
        <p>
          Now, there's always been some debate over whether React is actually a
          framework or just a library. Well, the short answer is that React is
          actually just a library, even though I keep calling it a framework.
          And the reason for that is that React itself is really only the
          so-called view layer. So if we want to build a complete real world
          application, we need to choose multiple external libraries to add to
          our project. For example, for routing or for data fetching. Now to
          address this, there are actually multiple frameworks that have been
          built on top of React. So frameworks that include all these
          functionalities that React is missing out of the box, and the most
          popular ones are called <strong>Next.js</strong> and{" "}
          <strong>Remix</strong>. But again, more about all that later in the
          course.
        </p>
      </section>

      {/* snippets */}
      <section>
        <h2>snippets:</h2>
        <p>
          let's just set up some snippets: So, snippets are basically some
          pieces of predefined code that we can use to greatly speed up
          development:
        </p>
        <p>
          <a href="./snippets.json" target="_blank">
            snippets
          </a>
        </p>
        <p>
          copy this and go to setting -> user snippets -> if you have one before
          paste it, but create and paste!
        </p>
      </section>

      {/* create-react-app and vite */}
      <section>
        <p>
          <img
            src={require("./images/the-tow-options-for-setting-up-the-react-project.png")}
            alt=""
          />
        </p>

        <p>
          So you might have read all the articles, saying that Create-React-App
          is dead and that you should never use it again But that's only true
          for Again, for learning, it's still 100% fine building real apps
          because you will not encounter the problems that large scale apps will
          face,
          <strong>like slow refresh times</strong>
        </p>

        <p>
          Now, if you have spent any time looking at the React documentation,
          you might have read that the React team now advises developers to use
          a so-called React framework like Next.js or Remix to build new
          projects. but for now, all you need to know is that a framework like
          Next.js contains solutions for things like routing, data fetching, and
          server side rendering, so things that React itself does not provide
          easily out of the box. So essentially, a React framework is a
          framework built on top of the React library and which is gonna make it
          even easier to build applications than with just vanilla React itself.
          And this sounds great, right? Well, yeah, it kind of does, but only
          for some applications. However, many people, and that include me,
          think that telling developers to always immediately go for a React
          framework is not the best idea and not always necessary. Vanilla React
          apps, so apps built only using React, still have a very important
          place, too. And so forcing this opinion on everyone seems kind of
          strange, but again, we will discuss this later on. Now, in any case,
          this advice only makes sense for building actual production ready
          products, but not for learning React, which is, of course, what we are
          trying to do in this course. So even if at some point you want to
          learn Next.js as well, of course you still need to learn React,
          itself, first.
        </p>
      </section>

      {/* for debug */}
      <section>
        <p>for debug, keep the terminal of the browser open!</p>
      </section>

      {/* components tree */}
      <section>
        <h2>components tree</h2>
        <p>
          <img src={require("./images/components-tree.png")} alt="" />
        </p>
      </section>

      {/* babel */}
      <section>
        <p>
          But now, you might be thinking if React is a JavaScript framework then
          how will it understand this HTML looking code?
        </p>
        <p>
          there is a simple way of converting JSX to JavaScript. This is done by
          a tool called <strong>Babel</strong>, which was automatically included
          in our application by Create-React-App. And the result of this
          conversion looks something like this code on the right where each JSX
          element was converted to a React.createElement function call. And
          these function calls are what in the end, create the HTML elements
          that we see on the screen.
        </p>
      </section>

      {/* Styling */}
      <section>
        <h2>Styling</h2>
        <p style={{ color: "red" }}>
          this styled using inline css and is different from before, go a head!
          i mean we define inline styles using javascript object! and doing that
          is completely fine and natural. as an example of differences is for
          example font-size is converted to fontSize because we work in object
          and the keys must be?
        </p>

        <p>
          in external css file: one thing that is different is that when we want
          to declare a class for our element in jsx, we have to use the
          "className" word!
        </p>
      </section>

      <Props test1="t1" test2={1} />

      <JSX />

      <section>
        <h2>DataList</h2>
        {[<DataList />, <DataList />]}
      </section>

      {/* DataListRendering */}
      <section>
        <h2>DataListRendering</h2>
        {dataList.map((person) => (
          <DataListRendering
            name={person.name}
            age={person.age}
            key={person.name}
          />
        ))}
      </section>

      <section>
        <p>
          Now notice how we have like <strong>an error</strong> here in the
          console. So let's scroll up a little bit and see what we get. So we
          have this warning saying that each child in a list should have a
          "unique" key property. So basically what this means is that each time
          we render a list like this. Where is it? Yeah so each time we render a
          list with the map method, each of the items that gets rendered needs a
          unique key property. So key is basically a prop that is internal to
          React, which it needs in order for some performance optimizations and
          for now, it's not really important what that means as we will learn
          later what exactly this key property is and what it does.
        </p>
      </section>

      {/* DataListRendering2 */}
      <section>
        <h2>DataListRendering2</h2>
        <ul>
          {dataList.map((person) => (
            <DataListRendering2 person={person} key={person.name} />
          ))}
        </ul>
      </section>

      {/* DataListRendering3 */}
      <section>
        <h2>DataListRendering3</h2>
        <ul>
          {dataList.map((person) => (
            <DataListRendering3 person={person} key={person.name} />
          ))}
        </ul>
      </section>

      <ConditionalRendering />

      <ConditionalRenderingClassName />

      <ConditionalRenderingWithMultipleAnd level={1} />

      {/* React Fragments */}
      <section>
        <ReactFragments />
      </section>

      <Hooks />

      {/* it can wait! */}
      <section>
        <h2>it can wait!</h2>
        <ul>
          <li>40 - Separation of Concerns</li>
          <li>91 - More Reusability With the children Prop</li>
          <li>108 - Splitting Components in Practice</li>
          <li>114 - Passing Elements as Props Alternative to children</li>
        </ul>
      </section>
    </div>
  );
}

function Message(props) {
  // a new component
  return (
    <p>
      you have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
}

function TheRiseOfSinglePageApplication() {
  return (
    <section>
      <h2>The Rise Of Single-Page Application</h2>
      <p>by reviewing how website used to be built in the past.</p>
      <p>before around 2010, all websites were always rendered on the server</p>
      <p>
        <img
          src={require("./images/The-Rise-Of-Single-Page-Application.jpg")}
          alt=""
        />
      </p>
      <p>
        a typical example of server side rendered websites are all website build
        with WordPress.
      </p>
      <p>
        Now, the JavaScript that used to be included in these websites was
        initially only to add some simple dynamics to the page, like simple
        animations, hover effects, and other stuff like that. And usually a very
        popular library at the time called jQuery was used for this because it
        made JavaScript work the exact same way across all browsers back then.
      </p>
      <p>
        However, over time, developers started writing more and more JavaScript
        code to be executed by the browser, until at some point these became
        fully fledged web applications, which then led to the rise of so-called
        single page applications.
      </p>
      <p>
        <img src={require("./images/Single-Page-Application.png")} alt="" />
      </p>

      <p>
        Now a web application still needs data, which usually comes from the
        backend in the form of an API.
      </p>
      <p>
        server side rendering is actually making a comeback right now, driven by
        frameworks that are built on top of modern client side rendering such as
        Next.js, Remix and many others frameworks
      </p>
    </section>
  );
}

function States() {
  return (
    <section>
      <h2>States</h2>
      <p>
        So state is basically data that a component can hold over time, and we
        use it for information that a component needs to remember throughout its
        lifecycle. Therefore, we can think of state as being the memory of a
        component. so React preserves the component state throughout re-renders.
        <strong>
          track data that changes over the life cycle of an application
        </strong>
      </p>
      <p>
        <img src={require("./images/examples-of-states.png")} alt="" />
        like a notification count, the text content of an input field, or the
        active tab in a tab component. It can also be a bit more complex data,
        for example, the content of a shopping cart.
      </p>
      <p>
        don't update states manually because React has no way of knowing a state
        changes and rerender the component, so "always treat state as immutable
        in React"
      </p>
      <p>thinking in state transitions not element mutation</p>
      <p>
        <img src={require("./images/thinking-react-as-a-process.jpg")} alt="" />
      </p>
      <p>
        <img src={require("./images/states-when-and-where.jpg")} alt="" />
      </p>
    </section>
  );
}

function Props(props) {
  return (
    <section>
      <h2>props</h2>
      <p>
        this is test1: {props.test1}, {props.test2}
      </p>
      <p>so we can pass even other react components!</p>
      <p>
        in this Props function normally (in javascript) we can mutate the
        "probs" but in react probs is immutable.
      </p>
      <p>91 - More Reusability With the children Prop: in "step" project</p>
    </section>
  );
}

function JSX() {
  return (
    <section>
      <h2>jsx</h2>
      <p>
        in javascript mode in jsx we can loop over array using "map" but we
        cannot use statements like "if", "for" loops, switch! write something
        that actually produced a value.
      </p>
      <p>
        in javascript:
        <img src={require("./images/html-in-js.png")} alt="" />
      </p>
      <p>
        a piece of JSX produces a JavaScript expression. Or in other words, a
        piece of JSX is just like any other JavaScript expression. And this
        makes sense because we already learned that JSX is simply converted to a
        create element function call, which is in fact also an expression. Now,
        this fact has two important implications. First, it means that we can
        place other pieces of JSX inside the curly braces. So inside the
        JavaScript note. And again, this is only possible because we can put any
        JavaScript expression inside those curly braces and that includes the
        expressions produced by JSX. The second implication of the fact that JSX
        produces an expression is that we can write JSX anywhere inside a
        component. For example, we can assign a piece of JSX to a variable like
        in this code snippet. We can also use it inside in if/else statement,
        pass it into functions and many other things.
      </p>
    </section>
  );
}

function DataList() {
  // return <section>{[<p>1</p>, <p>2</p>]}</section>;
  return (
    <section className="sub-sec">
      {dataList.map((person) => (
        <p>
          name: {person.name}, age: {person.age}
        </p>
      ))}
    </section>
  );
}

function DataListRendering(props) {
  return (
    <section className="sub-sec">
      <p>
        name:{props.name}, age: {props.age}
      </p>
    </section>
  );
}

function DataListRendering2(props) {
  return (
    <li>
      name:{props.person.name}, age:{props.person.age}
    </li>
  );
}

function DataListRendering3({ person }) {
  return (
    <li>
      name:{person.name}, age:{person.age}
    </li>
  );
}

function ConditionalRendering() {
  let hour = new Date().getHours();
  hour = 9;
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (1) {
    // this conditional returning approach is mostly useful for
    // return entire component ont a pice of jsx
    return (
      <section>
        <h2>ConditionalRendering</h2>
        <p>the restaurant is:</p>
        {isOpen && <p>open</p>}
        {!isOpen && <p>close</p>}

        <p>the restaurant is:</p>
        {isOpen ? <p>open</p> : <p>close</p>}
      </section>
    );
  } else {
    return null;
  }
}

function ConditionalRenderingClassName() {
  const fontStyle = "bold";

  return (
    <section>
      <h2>ConditionalRenderingClassName</h2>
      <p className={`${fontStyle}Style`}>the result</p>
    </section>
  );
}

function ConditionalRenderingWithMultipleAnd({ level }) {
  return (
    <section>
      <h2>ConditionalRenderingWithMultipleAnd</h2>
      <p>
        {level === 1 && "🍕"}
        {level === 2 && "🍔"}
        {level === 3 && "🍟"}
      </p>
    </section>
  );
}

function ReactFragments() {
  return (
    <>
      <h2>React Fragments</h2>
      <p>
        We do not want to render one element which contains these two, but we
        really want to render these two elements here, so these two elements in
        separate without having one element as a parent of these two, right. And
        so this is the case in which we need a React Fragment. React Fragment
        basically lets us group some elements without leaving any trace in the
        HTML tree, so in the DOM if we inspect this didn't create any new
        element at all
      </p>
    </>
  );
}

function Hooks() {
  return (
    <section>
      <h2>Hooks</h2>
      <p>
        this use state function here is what we call a hook in React. And we can
        identify hooks because they start with this use keyword here. So all the
        React functions that start with use like this, for example, use effect
        or use reducer, and of course, this use state, are React hooks. And we
        will learn in detail what a React hook is a bit later. But for now, what
        you need to know is that we can only call hooks like use state, on the
        top level of the function. So of this component function right here. So
        only here is it allowed to call use state not inside an if statement, or
        inside another function, or inside a loop.
      </p>
    </section>
  );
}

export default App;
