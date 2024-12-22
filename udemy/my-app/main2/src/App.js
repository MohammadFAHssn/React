import "./style.css";

function App() {
  return (
    <>
      {/* create a random ID */}
      <section>
        <h1>create a random ID</h1>
        <p>{crypto.randomUUID()}</p>
      </section>

      {/* Optional chaining (?.) */}
      <section>
        <h1>Optional chaining (?.)</h1>
        <p>
          The optional chaining (?.) operator accesses an object's property or
          calls a function. If the object accessed or function called using this
          operator is undefined or null, the expression short circuits and
          evaluates to undefined instead of throwing an error.
        </p>
      </section>

      <ComponentSizeMatters />

      <section>
        <ComponentComposition />

        <FixProbDrillingWithComponentComposition />
      </section>

      <section>
        <DefaultValueInComponentProperty />

        <SetClassForReusableComponent className="test" />
      </section>

      <ComponentVSInstancesVSElements />

      <HowRenderingWorks />

      <KeyProp />

      <RulesForRenderLogicPureComponents />

      <StateUpdatesBatching />

      <HowEventsWorkInReact />

      <LibrariesVSFrameWorksAndTheREACTEcosystem />

      <section>
        <h1>later</h1>
        <ul>
          <li>137 - How Events Work in React</li>
          <li>139 - Section Summary Practical Takeaways</li>
        </ul>
      </section>
    </>
  );
}

function ComponentSizeMatters() {
  return (
    <section>
      <h1>Component Size Matters</h1>
      <p>
        One way of doing it would be to create just one huge component for the
        entire card.
      </p>
      <p>
        <img src={require("./Images/component-size-matters.jpg")} alt=""></img>
      </p>
      <p>
        So for example, if we need like 10 or 15 props to properly configure a
        certain component, that component is probably way too big, and should be
        split up.
      </p>
      <p>
        if you're not familiar with the term abstraction, in programming, it
        basically means to create something new in order to hide the
        implementation details of that thing.
      </p>
      <p>
        <img
          src={require("./Images/how-to-Split-a-UI-Into-Components.jpg")}
          alt=""
        ></img>
      </p>
      <p>
        each of these components has a well-defined responsibility, like
        displaying the price or the rating,
      </p>
      <p>
        <img
          src={require("./Images/how-to-Split-a-UI-Into-Components-2.jpg")}
          alt=""
        ></img>
      </p>
    </section>
  );
}

function ComponentComposition() {
  return (
    <section className="sub-sec">
      <h2>Component Composition</h2>
      <p>
        Now, in order to talk about component composition we first need to take
        a look at what happens when we simply use or include a component in
        another component in JSX
        <img src={require("./Images/component-composition.png")} alt="" />
        However, when it comes to re-usability this creates a big problem That's
        because right now the success component really is inside of modal
        They're deeply linked together in the JSX right now, and therefore we
        cannot reuse this modal component to display some other message inside
        of it, for example, an error message But as you can imagine, in order to
        solve this, we now bring in the technique of component composition where
        we can compose the model and success components together
        <img src={require("./Images/component-composition-2.png")} alt="" />
        So this component does not include a predefined component
      </p>
      <p>
        So in the first example, the success component is really tied to the
        model And so that model might as well be called a success model because
        we can't use it for anything else anymore
      </p>
      <p>
        <img
          src={require("./Images/reasons-for-using-component-composition.png")}
          alt=""
        />
        So basically prop drilling means that we need to pass some prop through
        several nested child components in order to get that data into some
        deeply nested component,
      </p>
    </section>
  );
}

function FixProbDrillingWithComponentComposition() {
  return (
    <section className="sub-sec">
      <h2>Fix Prob Drilling With Component Composition</h2>

      <p>
        <img
          src={require("./Images/Fix-Prob-Drilling-With-Component-Composition.png")}
          alt=""
        />
      </p>

      <p>
        <img
          src={require("./Images/Fix-Prob-Drilling-With-Component-Composition-2.png")}
          alt=""
        />
      </p>

      <p>
        We could also say, for example, that we do not need to display or to
        include the logo right here. So we could, for example, cut it here and
        place it here and then it works just exactly the same as before. So this
        logo here is just completely stateless anyway, and it's not really
        relevant to the app. And so we could say that it should always be a part
        of the NavBar, but maybe these two here can be optional.
        <img
          src={require("./Images/Fix-Prob-Drilling-With-Component-Composition-3.png")}
          alt=""
        />
      </p>
    </section>
  );
}

function DefaultValueInComponentProperty({ defaultValue = 10 }) {
  return (
    <section className="sub-sec">
      <h2>Default Value In Component Property</h2>
      <p>
        But now what if someone used this component without specifying the max
        rating property So since we're building a highly reusable component. So
        what we need to do is to set a default value for the rating 👆
      </p>
    </section>
  );
}

function SetClassForReusableComponent({ className = "" }) {
  return (
    <section className="className sub-sec">
      <h2>set Class For Reusable Component</h2>
      <p>
        Now, sometimes consumers or users of the component want to have even
        more control over the styling. So, sometimes it's a good idea to allow
        users to pass in a class name. So, for example, if the user wants to
        somehow change the font style, they can do that right inside this class
        name that they pass in
      </p>
    </section>
  );
}

console.log(<ComponentVSInstancesVSElements test="23" />);
console.log(ComponentVSInstancesVSElements());
function ComponentVSInstancesVSElements() {
  return (
    <section className="alaki">
      <h1>Component VS Instances VS Elements</h1>
      <p>
        <img
          src={require("./Images/Component-Instances-Elements.png")}
          alt=""
        />
      </p>

      <p>
        <img
          src={require("./Images/Component-Instances-Elements-2.png")}
          alt=""
        />
      </p>

      <p>
        <img
          src={require("./Images/Component-Instances-Elements-3.jpg")}
          alt=""
        />
      </p>

      <p>
        <img
          src={require("./Images/Component-Instances-Elements-4.jpg")}
          alt=""
        />
      </p>

      <section className="sub-sec">
        <p>
          <img
            src={require("./Images/Instances and Elements in Practice.jpg")}
            alt=""
          />
        </p>

        <p>console.log(&lt;ComponentVSInstancesVSElements /&gt;)</p>

        <p>
          Now if you're wondering what this weird dollar dollar type of thing
          here is, well this is simply a security feature that React has
          implemented in order to protect us against cross-site scripting
          attacks So, notice how this is a symbol and symbols are one of the
          JavaScript primitives, which cannot be transmitted via JSON, or in
          other words, this means that a symbol like this cannot come from an
          API call So if some hacker would try to send us a fake React element
          from that API, then React would not see this type of as a symbol And
          so then React would not include that fake React element into the DOM
        </p>

        <p>console.log(ComponentVSInstancesVSElements())</p>

        <p>
          So what this means is that right now, React does no longer see this as
          a component instance and instead it just sees the raw React element
        </p>
      </section>
    </section>
  );
}

function HowRenderingWorks() {
  return (
    <section>
      <h1>how rendering works</h1>

      <p>
        <img
          src={require("./Images/how-components-are-displayed-on-the-screen.jpg")}
          alt=""
        />
        Then finally, the browser will notice that the DOM has been updated and
        so it repaints the screen
      </p>

      <p>
        <img src={require("./Images/How-Renders-are-triggered.jpg")} alt="" />
        Now that doesn't mean that the entire DOM is updated because remember,
        in React rendering is only about calling the component functions and
        figuring out what needs to change in the DOM later
      </p>

      <RenderPhase />

      <CommitPhase />

      <Diffing />
    </section>
  );
}

function RenderPhase() {
  return (
    <section className="sub-sec">
      <h2>Render Phase</h2>
      <p>
        So, at the beginning of the render phase React will go through the
        entire component tree take all the component instances that triggered a
        re-render and actually render them, which simply means to call the
        corresponding component functions
        <img src={require("./Images/the-render-phase.jpg")} alt="" />
      </p>

      <p>
        <img
          src={require("./Images/the-virtual-DOM-react-element-tree.jpg")}
          alt=""
        />
        Also, keep in mind once again that this does not mean that the entire
        DOM is updated
      </p>

      <p>
        <img src={require("./Images/the-render-phase-2.jpg")} alt="" />
      </p>

      <p>
        <img
          src={require("./Images/what-is-reconciliation-and-why-do-we-need-it.jpg")}
          alt=""
        />
        So the result of the reconciliation process is gonna be a list of DOM
        operations that are necessary to update the current DOM with a new state
      </p>

      <p>
        <img src={require("./Images/the-reconciler-fiber.jpg")} alt="" />
        So the Fiber tree is never destroyed Instead, it's a mutable data
        structure and once it has been created during the initial render it's
        simply mutated over and over again in future reconciliation steps And
        this makes Fibers the perfect place for keeping track of things like the
        current component state, props side effects, list of used hooks and more
        So the actual state and props of any component instance that we see on
        the screen are internally stored inside the corresponding Fiber in the
        Fiber tree.
        <br />
        After reconciliation, this queue of work will contain the DOM updates
        that are needed for that element.
      </p>

      <p>
        <img src={require("./Images/reconciliation-in-action.jpg")} alt="" />
        Now the computation of these DOM updates is performed by a diffing
        algorithm, which step by step compares the elements in the new virtual
        DOM with the elements in the current fiber tree, so to see what has
        changed.
        <br /> Now, once this process is over, all these DOM mutations will be
        placed into a list called the list of effects which will be used in the
        next phase so in a commit phase, to actually mutate the DOM
      </p>

      <p>
        <img src={require("./Images/the-render-phase-3.jpg")} alt="" />
      </p>
    </section>
  );
}

function CommitPhase() {
  return (
    <section className="sub-sec">
      <h2>Commit Phase</h2>

      <p>
        React goes through the effects list that was created during rendering
        and applies them one by one to the actual DOM elements that were in the
        already existing DOM tree
        <img
          src={require("./Images//the-commit-phase-and-browser-paint.jpg")}
          alt=""
        />
        In fact, that's the whole point of dividing the entire process into the
        render phase and the commit phase in the first place It's so that
        rendering can be paused, resumed, and discarded and the results of all
        that rendering can then be flushed to the DOM in one go
      </p>

      <p>
        <img
          src={require("./Images//the-commit-phase-and-browser-paint-2.jpg")}
          alt=""
        />
        And the reason for that is that React itself was designed to be used
        independently from the platform where elements will actually be shown,
        and therefore React can be used with many different so-called hosts.
      </p>

      <p>
        <img
          src={require("./Images//the-commit-phase-and-browser-paint-3.jpg")}
          alt=""
        />
        But anyway, in all these situations, the results of the render phase is
        not really a list of DOM updates, but a list of updates of whatever
        elements are used in the host that's being used. So the term virtual
        DOM, then, also doesn't really make much sense when we look at it from
        this angle, which is just one more reason why the React team prefers the
        more accurate name of React Elementary.
      </p>
    </section>
  );
}

function Diffing() {
  return (
    <section className="sub-sec">
      <h2>Diffing</h2>
      <p>
        <img src={require("./Images/How-Diffing-Works.jpg")} alt="" />
        So as we see in this example, both the diff element and the search bar
        component will be removed from the DOM and will then be rebuilt as a
        header with a brand new search bar component instance as the child. So
        if the child elements stays the same across renders, the tree will
        actually get rebuilt, but it gets rebuilt with brand new elements. And
        so if there were any components with state that state will not be
        recovered. So this effectively resets state and this has huge
        implications for the way that React applications work in practice.
      </p>

      <p>
        <img src={require("./Images/How-Diffing-Works-2.jpg")} alt="" />
        And so what React is gonna do is to simply mutate the DOM element
        attributes And in the case of React elements it'll pass in the new
        props, but that's it
      </p>

      <p>
        <img src={require("./Images/Diffing-Rules-in-Practice.jpg")} alt="" />
        what happens as we use this tab component. So again, here we have this
        button that when we click, we'll hide that paragraph, right? And also
        when we click here, then we update the state and the likes number
        increases. So that's what happens in this tab. But now, watch what
        happens when we go to another tab. So you see that the text is still
        hidden and the number of likes is still at four. So what this means is
        that the state of this TabComponent instance has been preserved. So what
        is actually happening? Well, basically each time that we click on one of
        these tabs, the TabComponent down here is re-rendered. However, as we
        can see down here in this component tree as we keep clicking around, we
        see that the tabContent component instance always stays in the exact
        same position in the tree. And so with this, we are now in the situation
        that we learned in the previous lecture, where we have the same element.
        So in this case, the same component in the same position. and the only
        thing that changes is the props that it receives.
        <br />
        But what if we now click on this tab number four? So as we can see in
        our code, in this case, so when the tab num is three, actually this
        DifferentContent component will be rendered, right? And so let's see
        what's going to happen. So we have number four here and we have the text
        closed. So now we click here. And immediately we see that we get a
        completely DifferentComponent instance right here. So it's still in the
        same position of the tree but it's no longer TabContent, but
        DifferentContent. And so now when I go back, watch what happens. So now
        the state has actually been reset. And so that's because the TabContent
        that we had here before has been completely destroyed and removed from
        the DOM in the meantime. So while we were at the DifferentContent,
      </p>
    </section>
  );
}

function KeyProp() {
  return (
    <section>
      <h1>key prop</h1>

      <p>
        <img src={require("./Images/What-Is-The-Key-Prop.jpg")} alt="" />
      </p>

      <p>
        <img src={require("./Images/keys-in-lists-stable-key.jpg")} alt="" />
      </p>

      <p>
        <img
          src={require("./Images/key-prob-to-reset-state-changing-key.jpg")}
          alt=""
        />
        <img
          src={require("./Images/key-prob-to-reset-state-changing-key-2.jpg")}
          alt=""
        />
      </p>

      <p>
        <img
          src={require("./Images/Resetting-State-With-the-Key-Prop.jpg")}
          alt=""
        />
      </p>

      <p dir="rtl">
        اینجا دقت کن ببین چجوری این برنامه رو نوشته!
        <img
          src={require("./Images/Using-the-Key-Prop-to-Fix-Our-EatNSplit-App.jpg")}
          alt=""
        />
      </p>
    </section>
  );
}

function RulesForRenderLogicPureComponents() {
  return (
    <section>
      <h1>Rules For Render Logic Pure Components</h1>
      <p>
        In order for the rendering process to work in the way that we just
        learned before our render logic needs to follow some simple rules but
        first of all, what actually is render logic
      </p>

      <p>
        <img
          src={require("./Images/the-two-types-of-logic-in-react-components.jpg")}
          alt=""
        />
      </p>

      <p>Now why is this all so important</p>

      <p>
        Well, it's important because React requires that components are pure
        when it comes to render logic in order for everything to work as
        expected
      </p>

      <p>
        <img
          src={require("./Images/refresher-functional-programming-principles.jpg")}
          alt=""
        />
      </p>

      <p>
        <img src={require("./Images/Rules-for-Render-Logic.jpg")} alt="" />
      </p>
    </section>
  );
}

function StateUpdatesBatching() {
  return (
    <section>
      <h1>State Updates Batching</h1>

      <p>
        <img
          src={require("./Images/how-state-updates-are-batched.jpg")}
          alt=""
        />
      </p>

      <p>
        <img
          src={require("./Images/how-state-updates-are-batched-2.jpg")}
          alt=""
        />
      </p>

      <p>
        <img
          src={require("./Images/updating-states-is-asynchronous.jpg")}
          alt=""
        />
        So React is still reading the function line by line to figure out what
        state needs to be updated.
        <br />
        So at this point we say that our state is stale meaning that the state
        is no longer fresh and updated.{" "}
        <strong>
          because in fact, a state update will only be reflected in the state
          variable after the re-render.
        </strong>
        <br />
        Now, sometimes we actually do need the new value immediately after
        updating it, and in the case, that we need the new value in order to
        update the same state again. Or in other words, if we need to update
        state based on a previous state update in the same event handler, we can
        pass a callback function into the set state function instead of a single
        value. And we have actually done this in practice all the time, right
      </p>

      <p>
        <img
          src={require("./Images/batching-beyond-event-handler-function.jpg")}
          alt=""
        />
      </p>

      <p>
        Now, by the way, what do you think will happen, so what do you think
        will get rendered if we click the undo button again? So let's clear
        this. And so let's see what happens. So I click this now, and you see
        that no RENDER was logged to the console. So why do you think that is?
        Why was the component instance not re-rendered this time? Well, it's
        because both of the state values were already at their default
        basically. So details was already true and likes was already zero. And
        so then as we attempted to update the state, both of them were actually
        not updated. And again, that's because the new state was equal to the
        current state. And so in that situation, React will not even try to
        attempt to update the state, and then of course, it will also not
        re-render the component instance. And so that's why, well, nothing
        happens. So as we keep clicking here, of course, the console.log keeps
        getting executed, but again, the component itself is not re-rendered.
        <img
          src={require("./Images/State-Update-Batching-in-Practice.jpg")}
          alt=""
        />
      </p>

      <p>
        <img
          src={require("./Images/State-Update-Batching-in-Practice-2.jpg")}
          alt=""
        />
        So let's see why that is. So right here at the beginning of dysfunction
        likes was zero, right? And so then here, setLikes would be zero plus 1
        equals 1, right? So this one is pretty clear, but then what in the next
        line? So what is the value of likes here in this line? Well, it is
        actually still zero.
        <img
          src={require("./Images/State-Update-Batching-in-Practice-3.jpg")}
          alt=""
        />
      </p>
    </section>
  );
}

function HowEventsWorkInReact() {
  return (
    <section>
      <h1>How Events Work In React</h1>
      <p>
        and so here is what's gonna happen in the browser. As soon as the event
        fires, a new event object will be created, but it will not be created
        where the click actually happened. Instead, the object will be created
        at the root of the document, so at the very top of the tree.
        <img
          src={require("./Images/dom-refresher-event-propagation-and-delegation.jpg")}
          alt=""
        />
        From there, the event will then travel down the entire tree during the
        so-called capturing phase, all the way, until it reaches the target
        element, and the target element is simply the element on which the event
        was actually first triggered. So at the target, we can choose to handle
        the event by placing an event handler function on that element, which
        usually is exactly what we do.
        <img
          src={require("./Images/dom-refresher-event-propagation-and-delegation-2.jpg")}
          alt=""
        />
        Then immediately after the target element has been reached, the event
        object travels all the way back up the entire tree during the so-called
        bubbling phase.
        <img
          src={require("./Images/dom-refresher-event-propagation-and-delegation-3.jpg")}
          alt=""
        />
        Now, there are two very important things to understand about this
        process. The first is that during the capturing and bubbling phase, the
        event really goes through every single child and parent element one by
        one. In fact, it's if the event originated or happened in each of these
        DOM elements. The second important thing is that by default, event
        handlers listen to events not only on the target element, but also
        during the bubbling phase, so if we put these two things together, it
        means that every single event handler in a parent element will also be
        executed during the bubbling phase as long as it's also listening for
        the same type of event. For example, if we edit another click event
        handler to the header element, then during this whole process, both the
        handlers at the target and the header element would be executed when the
        click happens.<span style={{ fontSize: "30px" }}>❓</span>
        <img
          src={require("./Images/dom-refresher-event-propagation-and-delegation-4.jpg")}
          alt=""
        />
        Now, sometimes we actually don't want this behavior, and so in that
        case, we can prevent the event from bubbling up any further simply by
        calling the stopPropagation method on the event object, and this works
        in vanilla JavaScript, and also in React, but it's actually very rarely
        necessary, so only use this if there really is no other solution.
        <img
          src={require("./Images/dom-refresher-event-propagation-and-delegation-5.jpg")}
          alt=""
        />
      </p>
    </section>
  );
}

function LibrariesVSFrameWorksAndTheREACTEcosystem() {
  return (
    <section>
      <h1>Libraries VS FrameWorks And The REACT Ecosystem</h1>

      <p>REACT is a library</p>

      <p>
        So imagine that you want to make your own sushi for the first time,
        <img src={require("./Images/first-an-analogy.jpg")} alt="" />
      </p>

      <p>
        <img src={require("./Images/first-an-analogy-2.jpg")} alt="" />
      </p>

      <p>
        <img src={require("./Images/FrameWorks-vs-Library.jpg")} alt="" />
        Now, on the other hand, we have JavaScript libraries, which are
        basically pieces of code that developers share for other developers to
        use. And the prime example here is of course, React,
      </p>

      <p>
        <img
          src={require("./Images/REACT-3RD-party-library-ecosystem.jpg")}
          alt=""
        />
      </p>

      <p>
        Now, many React developers actually do feel overwhelmed by having to
        take so many decisions and choosing between so many third party
        libraries. And so this fact, among some other reasons, has led to the
        development of multiple opinionated React frameworks
        <img
          src={require("./Images/FrameWorks-Built-On-Top-Of-React.jpg")}
          alt=""
        />
        and they are opinionated because other developers basically included
        their own opinions into how to handle stuff like routing, state
        management or styling into these frameworks
      </p>
    </section>
  );
}

export default App;
