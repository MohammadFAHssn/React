import { useEffect } from "react";
import "./style.css";
import { useState } from "react";

function App() {
  return (
    <>
      <StrictMode />

      <ComponentLifecycle />

      <FetchData />

      <Effects />

      <FetchDataUsingAsyncFunc />

      <AddingLoadingState />

      <HandlingErrorsForOMDBApi />

      <HandlingErrors />

      <TheUseEffectDependencyArray />

      <TheUseEffectCleanUpFunction />

      <ListenToKeyPress />

      <ReactHooksAndTheirRules />

      <UUseState />

      <PersistInLocalStorage />

      <UUseRef />

      <CustomHooks />

      <UUseLocalStorageState />

      <UUseKey />

      <section>
        <h1>later</h1>
        <ul>
          <li>160 - React Hooks and Their Rules: 5:03</li>
          <li>161 - The Rules of Hooks in Practice</li>
          <li>164 - useState Summary</li>
        </ul>
      </section>
    </>
  );
}

function StrictMode() {
  return (
    <section>
      <h1>Strict Mode</h1>

      <p>
        Now what I wanted to talk about is why we always have these two outputs.
        So, basically why we have these two requests here happening. Well, the
        reason for that is React's strict mode. So when strict mode is activated
        in React 18, our effects will not run only once, but actually twice. So
        React will call our effects twice but only in development. So when our
        application is in production, this will no longer be happening. And so
        this is just so that React can identify if there are any problems with
        our effects. So if we come here quickly just to index.JS and if we
        remove the strict mode from here. Let's save and let's reload. And then
        you see that we only get one output here, which means that there was
        only one HTTP request. So the effect was only called once indeed. But
        let's put it back because this is somehow a bit safer.
      </p>
    </section>
  );
}

function ComponentLifecycle() {
  return (
    <section>
      <h1>Component Lifecycle</h1>

      <p>
        <img src={require("./images/Component-Lifecycle.jpg")} alt=""></img>
      </p>

      <p>
        we can hook into different phases of this LIFECYCLE So we can basically
        define code to be executed at these specific points in time And we do so
        by using the useEffect Hook
      </p>
    </section>
  );
}

function FetchData() {
  return (
    <section>
      <h1>Fetch Data</h1>

      <p>
        <img
          src={require("./images/How-NOT-to-Fetch-Data-in-React.jpg")}
          alt=""
        ></img>
        So again, all this code that is here at the top level of the function is
        of course code that will run as the component first mounts and therefore
        it is called render logic. And so again, here we should have no side
        effects.
      </p>

      <p>
        I mean, in this example where we only log something to the console, it
        actually appears to work just fine, but watch what happens if we set
        some state here.
        <img
          src={require("./images/How-NOT-to-Fetch-Data-in-React-2.jpg")}
          alt=""
        />
        So you see that it's basically running an infinite number of requests
        here, so it keeps going and it never really stops. So every second our
        app is firing off multiple fetch requests to this API, which of course
        is a really, really bad idea.
      </p>

      <p>
        <img src={require("./images/useEffect-to-the-Rescue.jpg")} alt="" />
        dependency array: But for now, what you need to do here is to just pass
        in this empty array, which means that the effect that we just specified
        here will only run on mount. So it'll only run when this app component
        here renders for the very first time.
      </p>

      <p>
        Great, and so this is basically the very bare bones way in which we do
        data fetching in simple React applications like this one, at least if we
        want to fetch our data as soon as the application loads. Now, in a
        larger, more real world application, we may use some external library
        for data fetching. But again, in a small application like this one, this
        is now a great way to fetch some data on mount, so when our application
        first loads.
      </p>

      <p>
        And basically, register means that we want this code here not to run as
        the component renders, but actually after it has been painted onto the
        screen. And so that's exactly what useEffect does. So while before, the
        code was executed while the component was rendering, so while the
        function was being executed, now this effect will actually be executed
        after render. And so that's a lot better.
      </p>
    </section>
  );
}

function Effects() {
  return (
    <section>
      <h1>Effects</h1>

      <p>
        <img
          src={require("./images/where-to-create-side-effects.jpg")}
          alt=""
        />
      </p>

      <p>
        <img src={require("./images/event-handlers-vs-effects.jpg")} alt="" />
        cleanup function, which is a function that will be called before the
        component re-renders or unmounts.
        <br />
        we should actually not think about life cycles, but about
        synchronization. So the real reason why effects exist is not to run code
        at different points of the life cycle, but to keep a component
        synchronized with some external system. So in this example, that would
        be to keep the component in sync with the movie data that comes from
        some external API.
      </p>
    </section>
  );
}

function FetchDataUsingAsyncFunc() {
  return (
    <section>
      <h1>Fetch Data Using Async Func</h1>
      <p>
        <img src={require("./images/Using-an-async-Function.jpg")} alt="" />
        effect callbacks are synchronous to prevent race conditions.
      </p>
    </section>
  );
}

function AddingLoadingState() {
  return (
    <section>
      <h1>Adding Loading State</h1>

      <p>
        And to show you what I mean, let's come here to the Network tab, which
        is always a good friend when we're dealing with HTTP requests, and then
        let's throttle our network here to a slow 3G
      </p>

      <p>
        <img src={require("./images/Adding-a-Loading-State.jpg")} alt="" />
      </p>

      <p>and then we apply the state to the UI</p>
    </section>
  );
}

function HandlingErrors() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleCatch(err) {
    setIsLoading(false);
    setError(err.message);
  }

  useEffect(function () {
    async function handleError() {
      setIsLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setIsLoading(false);
    }
    handleError().catch(handleCatch);
  }, []);

  return (
    <section>
      <h1>Handling Errors</h1>

      <p>the advice is: {isLoading ? "Loading..." : advice ? advice : error}</p>
    </section>
  );
}

// const movieName = "inc";
const destroyLink = "";

function HandlingErrorsForOMDBApi() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [movieName, setMovieName] = useState("");

  const [SelectedMovieIndex, setSelectedMovieIndex] = useState(-1);

  function setSelectedMovieIndexFun(SelectedMovieIndex) {
    setSelectedMovieIndex(SelectedMovieIndex);
  }

  function handleCatch(err) {
    // as soon as a request get canceled,
    // JavaScript actually sees that as an error.
    if (err.name !== "AbortError") {
      setIsLoading(false);
      setError(err.message);
    }
  }

  useEffect(
    function () {
      // native browser API
      const controller = new AbortController();

      async function handleError() {
        setMovies([]);
        setIsLoading(true);
        setError("");
        setSelectedMovieIndex(-1);

        if (!movieName) return;
        const res = await fetch(
          `https://www.omdbapi${destroyLink}.com/?apikey=615294e1&s=${movieName}`,
          { signal: controller.signal }
        );
        // connect the abort controller whit the fetch function ☝

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovies(data.Search);
        // درسته که بالا
        // setError
        // داره ولی اینجا هم لازم داره
        // چون که عبارات بالا غیرهمزمان هستند و ممکنه
        // setError
        // بالا در زمان مناسب ارور رو ست نکنه
        setError("");

        setIsLoading(false);
      }
      handleError().catch(handleCatch);

      return function () {
        controller.abort();
      };
    },
    [movieName]
  );

  return (
    <section>
      <h1>Handling Errors</h1>

      <form>
        <input
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        ></input>
      </form>

      <section className="sub-sec">
        <p>the movies are:</p>

        {movieName === "" ? (
          <p>Please enter a movie</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Movies
            moviesList={movies}
            setSelectedMovieIndexFun={setSelectedMovieIndexFun}
          />
        )}

        {SelectedMovieIndex !== -1 && (
          <MovieDetails SelectedMovie={movies[SelectedMovieIndex]} />
        )}
      </section>
    </section>
  );
}

function Movies({ moviesList, setSelectedMovieIndexFun }) {
  return (
    <>
      {moviesList.map((m, i) => (
        <p onClick={() => setSelectedMovieIndexFun(i)} className="movie-title">
          {m.Title}
        </p>
      ))}
    </>
  );
}

function MovieDetails({ SelectedMovie }) {
  return (
    <section>
      <p>{SelectedMovie.Title}</p>
      {<img src={SelectedMovie.Poster} alt="" />}
    </section>
  );
}

function TheUseEffectDependencyArray() {
  return (
    <section>
      <h1>The Use Effect Dependency Array</h1>
      <p>
        <img
          src={require("./images/whats-the-useEffect-dependency-array.jpg")}
          alt=""
        />
      </p>
      <p>
        <img
          src={require("./images/useEffect-is-a-synchronization-mechanism.jpg")}
          alt=""
        />
        effects are used to keep a component synchronized with some external
        system And, if we think about it, that's exactly what is happening here.
        So, the state and props of our component are now in fact synchronized
        with an external system, which is, in this case, the title of the
        document. Now, updating the title in some other way will, of course, not
        magically update the title or user rating. So, the synchronization only
        works in one way, but that's not really the point. The same actually
        happens with state updates and we still say that the UI is in sync with
        state.
      </p>
      <p>
        <img
          src={require("./images/synchronization-and-lifecycle.jpg")}
          alt=""
        />
      </p>
      <p>
        <img src={require("./images/when-are-effects-executed.jpg")} alt="" />
        the reasons why effect work this way is that effects may contain
        long-running processes, such as fetching data.
      </p>

      <p>
        <img src={require("./images/Loading-Movie-Details.jpg")} alt="" />
        the component here is working pretty nice, isn't it? But watch what
        happens if I now try to select another movie here. So let's say this
        one. So nothing happened right now. If I close this and then open up the
        second one here for example, then you see that it's working fine. But
        again, if I now click on another one, then we got the same problem our
        component here is not updating. So why do you think that is? What might
        be happening here? Well, we told our effect here to load the movie data
        whenever the component first mounts, right? However, when we click here
        on one of these other movies this component is actually not mount again.
        So the initial render will not happen again because the component is
        already mounted. And the reason for that is the one that we learned in
        the previous section, it is because this component here so the movie
        detail component is rendered in exactly the same place in a component
        tree. And so as we click here on another movie simply another prop will
        be passed into the component but the component itself will not be
        destroyed. It will stay in the component tree. And so the only thing
        that is changing as we click on one of the other movies is the ID prop
        that is being passed in. Now of course, if I close this and then go to
        another one then the component has been unmounted first and then it is
        mounting again.
      </p>
    </section>
  );
}

function TheUseEffectCleanUpFunction() {
  return (
    <section>
      <h1>The Use Effect CleanUp Function</h1>
      <p>
        So remember that after the last effect run, the title of the page in the
        browser tab was set to Interstellar Wars, right? However, once we
        unmounted the movie details component, we would probably like the title
        to return to the original text, which was simply usePopcorn, so just the
        name of the application. But how could we do that? How can we ensure
        that the page title stays synchronized with the application, even after
        the component has disappeared? Well, basically what we need is a way to
        execute some code as the component unmounts. And we can do exactly that
        by returning a so-called cleanup function from the effect. And in this
        case, that's simply a function that sets the title back to usePopcorn.
        All right, but you see that we still have another hole here in the
        timeline, and that's because the cleanup function that we return from
        the effect is actually also executed on re-renders, so right before the
        next effect is executed again. (in order to clean up the results of the
        previous side effect.)
        <img src={require("./images/when-are-effects-executed-2.jpg")} alt="" />
      </p>
      <p>
        when do we actually need a cleanup function? Well, basically we need a
        cleanup function whenever the side effect keeps happening after the
        component has been re-rendered or unmounted. For example, you might be
        doing an HTTP request in your effect. Now if the component is
        re-rendered while the first request is still running, a new second
        request would be fired off, right? And so this might then create a bug
        called a race condition. And therefore it's a good idea to cancel the
        request in a cleanup function whenever the component re-renders or
        unmounts.
        <img src={require("./images/The-CleanUp-Function.jpg")} alt="" />
      </p>
      <p>
        Okay, and now to finish, let me give you one more important rule about
        effects, which is that each effect should only do one thing. So if you
        need to create multiple effects in your components, which is completely
        normal, just use multiple useEffect hooks. This not only makes each
        effect much easier to understand, but it also makes effects easier to
        clean up using a cleanup function.
      </p>
      <p>
        Next up, we also need to clean up our data fetching.
        <img src={require("./images/Cleaning-Up-Data-Fetching.jpg")} alt="" />
        And that has two problems. First of all, having so many requests at the
        same time will slow each of them down. And second, this means that we
        will end up downloading way too much data. And so let's now learn how we
        can clean up, basically our fetch requests, so that, as soon as a new
        request is fired off, the previous one will stop. So it will get
        canceled. And actually, I forgot to mention the third big problem with
        having all of these requests happening at the same time, which is,
        imagine that actually, for example, this request here would take a
        little bit longer than the other ones. So if this request here would be
        the last one to arrive, let's say this one, well here we then get the
        response if we click. But anyway, again, let's imagine that this
        request, for some reason, took a lot longer than all the other ones. And
        so then this one would be the last one to arrive. And so in that case,
        it would be the movies or the results from this request that would be
        stored in our state and that would be rendered in our UI. Which is of
        course not what we want. We always want exactly the last request of all
        to be the one that matters, right? So all these other ones, again, we
        are not interested in them. But if one of them takes longer than the
        rest, then that one will actually become the one that we see in our UI.
        And this is actually a pretty common problem, which even has the name of
        a race condition. Because all these requests here are basically racing
        with one another, seeing which one arrives first.{" "}
        <strong>This implement in OMDB Api</strong>
      </p>
    </section>
  );
}

function ListenToKeyPress() {
  return (
    <section>
      <h1>Listen To KeyPress</h1>
      <p>
        And so basically it's very simple. When we open up a movie here to see
        the details, instead of clicking here on this button to go back, we want
        to now implement a feature that the user can also just click on the
        Escape key.
      </p>
      <p>
        And the way in which we can react to a keypress event in the entire app
        is basically by simply attaching an event listener to the entire
        document. So let's do that here, right in the App component. And so
        since this is clearly a side effect because we will be directly touching
        the DOM,
      </p>
      <p>
        in the App component:
        <img src={require("./images/Listening-to-a-Keypress.jpg")} alt="" />
        1- so now all we need to do is to write document.addEventListener,
        which, remember, is simply a DOM function, so we are really doing
        basically now some DOM manipulation. And so we are stepping really
        outside of React here, then let's open up a movie, and then let's see
        what happens when I hit the Escape key. And indeed, the movie here was
        closed and we also got our closing logged to the console. But watch what
        happens right now as I hit the Escape key again. So you see we get
        closing again, So again, as I keep hitting the Escape key, we see here
        by this log that actually this callback function here, so the event
        listener, is still listening for the keydown event and it will then
        execute this function each time that the keypress happens, which is,
        however, not really what we want in this situation. So basically what we
        want instead is to only attach this event listener here to the document
        whenever we actually have the movie details in our tree, so whenever
        that component instance is actually mounted. So that's easy enough, we
        just cut the effect from here. And so after all, we want it in our
        MovieDetails component.
      </p>

      <p>
        <img src={require("./images/Listening-to-a-Keypress-2.jpg")} alt="" />
      </p>

      <p>
        Okay, let's do that again. And notice how now we are getting even more
        of these logs here. And so you see that we get dozens of these logs here
        saying closing, So the reason for that is that, actually, each time that
        a new MovieDetails component mounts, a new event listener is added to
        the document, And so what this means is that here we also need to clean
        up our event listeners, or in other words, we need to return a function
        here which will call or which will execute document.removeEventListener.
      </p>

      <p>
        <img src={require("./images/Listening-to-a-Keypress-3.jpg")} alt="" />
      </p>
    </section>
  );
}

function ReactHooksAndTheirRules() {
  return (
    <section>
      <h1>React Hooks And Their Rules</h1>

      <p>
        <img src={require("./images/what-are-REACT-hooks.jpg")} alt="" />
        hooks are basically APIs that expose some internal React functionality,
      </p>

      <p>
        <img
          src={require("./images/overview-of-all-build-in-hooks.jpg")}
          alt=""
        />
      </p>

      <p>
        <img src={require("./images/the-rules-of-hooks.jpg")} alt="" />
      </p>
    </section>
  );
}

function UUseState() {
  return (
    <section>
      <h1>UseState</h1>

      <p>
        these initial values that we pass into useState only really matter on
        the initial render. React will only look at this initial state on the
        initial render.
        <img src={require("./images/useState-initial-value.jpg")} alt="" />
        And we see that this log here coming from line 266 which is this one
        here, is indeed false even though the rating here is actually greater
        than eight. However, when the component first mounts here the IMDB
        rating will still be undefined And so it will stay false forever because
        nowhere we update the state and on the second render so when we then
        finally get the movie data {"'imdbRating > 8'"} will not be executed
        again. Now, one way of fixing this would be to use a useEffect: run
        whenever the imdbRating updated
      </p>
    </section>
  );
}

function PersistInLocalStorage() {
  return (
    <section>
      <h1>Persist In Local Storage</h1>

      <p>
        So we're going to do this in two parts. First, each time that the watch
        list state is updated we will update the local storage. So we will store
        that data into local storage and then each time that the application
        loads so when the app component(the component that owns this watched
        state) first mounts we will read that data from local storage and store
        it into the watched state.
      </p>

      <p>
        first part: we can actually do that in two different ways, or in two
        different places. So the first option is to store that data into local
        storage each time that a new movie is actually added. So basically right
        here in this event handler function that is responsible for adding new
        movies to the watch list. So each time that happens we can then store
        the new watch list into local storage. So that's the first option. And
        the second option is to simply do it in an useEffect.
      </p>

      <p>
        <img src={require("./images/Persist-In-Local-Storage.jpg")} alt="" />
        "watched": the name of the key so basically the name of the data that we
        want to store
      </p>

      <p>
        <img src={require("./images/Persist-In-Local-Storage-2.png")} alt="" />
      </p>

      <p>
        part 2: Well, we might think that we should use another effect in order
        to get the data from local storage on the initial render and then store
        that data in the watched state. However, there is actually a better way.
        <img src={require("./images/Persist-In-Local-Storage-3.png")} alt="" />
        So what we're going to do now is to, instead of just passing in a value
        is to pass in a callback function. And so that's because the useState
        hook also accepts a callback function instead of just a single value.
        And so we can then initialize the state with whatever value this
        callback function will return. this function here actually needs to be a
        pure function and it cannot receive any arguments
      </p>

      <p>
        we should not do this:
        <img
          src={require("./images/initialing-state-with-a-callback-function.png")}
          alt=""
        />
        Here we are calling a function, not passing a function in
      </p>
    </section>
  );
}

function UUseRef() {
  return (
    <section>
      <h1>UseRef</h1>

      <p>
        <img
          src={require("./images/How-NOT-to-Select-DOM-Elements-in-React.png")}
          alt=""
        />
      </p>

      <p>
        <img src={require("./images/what-are-ref.jpg")} alt="" />
      </p>

      <p>
        <img src={require("./images/state-vs-refs.jpg")} alt="" />
      </p>

      <p>
        So let's not do the same thing that we did before which was to
        automatically focus on the input element but this time using a ref. So
        using a ref with a DOM element happens in three steps.
        <img src={require("./images/Refs-to-Select-DOM-Elements.jpg")} alt="" />
        because the ref only gets added to this DOM element here after the DOM
        has already loaded. And so therefore we can only access it in effect
        which also runs after the DOM has been loaded. So this is the perfect
        place for using a ref that contains a DOM element.
      </p>

      <p>
        So to show you the new feature that we now want to implement, let's come
        to our demo here. And now when I'm anywhere in the application, I will
        hit the Enter key. So I just did that and then automatically this input
        field got focused. And so that's a really nice feature
        <img
          src={require("./images/Refs-to-Select-DOM-Elements-2.jpg")}
          alt=""
        />
        in this case, we do actually need to manually select here this document
        and then add an event listener there. So there we cannot use a ref but
        that's just the way that things work in React.
        <div>
          React is complaining about a missing dependency. And so yeah, this is
          once again really helpful because it tells us immediately what we have
          to do. So here we have to also place the setQuery function. And so
          that's because the setQuery function is indeed a prop to this
          component. And so therefore, since we are using it here in the effect
          we then need to declare it in the dependency array. Now dysfunction is
          not really ever going to change but React still needs this to be here
          in the dependency array.
        </div>
      </p>
    </section>
  );
}

function CustomHooks() {
  return (
    <section>
      <h1>CustomHooks</h1>

      <p>
        <img
          src={require("./images/What-are-Custom-Hooks-When-to-Create-One.jpg")}
          alt=""
        />
        now that we have had hooks for so many years in React, developers have
        started to share their custom hooks with the world. And so, there are
        now lots of custom hook libraries that you can download from NPM and use
        in your projects.
      </p>

      <p>
        So there are basically two strategies to decide if we want to create a
        new custom hook. So the first one is that we want to reuse some part of
        our non-visual logic, so just as we learned in the previous lecture. And
        the second factor might be that we simply want to extract a huge part of
        our component out into some custom hook.
      </p>

      <p>
        So what exactly should we actually return from this custom hook?
        <img
          src={require("./images/Creating-our-First-Custom-Hook-useMovies.jpg")}
          alt=""
        />
        And so that's basically exactly the three pieces of state that we just
        removed from here
      </p>

      <p>
        we can use this function here before it is actually defined. but for
        arrow function we don't.
        <img
          src={require("./images/Creating-our-First-Custom-Hook-useMovies-2.jpg")}
          alt=""
        />
      </p>
    </section>
  );
}

function UUseLocalStorageState() {
  return (
    <section>
      <h1>useLocalStorageState</h1>

      <p>
        basically, will behave exactly like the useState hook but where the
        state actually gets stored in local storage
        <img src={require("./images/useLocalStorageState.png")} alt="" />
      </p>

      <p>
        <img src={require("./images/useLocalStorageState-2.png")} alt="" />
      </p>

      <p>
        <img src={require("./images/useLocalStorageState-3.png")} alt="" />
      </p>

      <p>
        So, what we did, again, was to take all the code that belonged together
        and placed it into yet another hook. And in this case, we made it so
        that this hook looks as close as possible to the useState hook. So, we
        also pass in some initial state, and then we get back a state variable
        and the updated function as always. But thanks to our special custom
        hook, now these work a bit different. So, this piece of state here can
        be read from local storage as the component first mounts. While the
        setter function will not only update the state itself, but it will also
        update the local storage.
      </p>
    </section>
  );
}

function UUseKey() {
  return (
    <section>
      <h1>useKey</h1>
      <p>
        So, here, in the movie details component, we have that functionality
        that if we open a movie and then hit the escape key on our keyboard,
        then it'll close the movie. And so, we implemented that using a use
        effect hook. So, this one right here. And so, since this is using a
        React hook, we can abstract this into its own custom hook 1because
        actually we do something very similar to focus here on the search bar.
        1So, again, when I'm here and I hit the enter key, 1then that will
        automatically focus this. 1And so, that is using basically some similar
        functionality. And so, it's a good idea to abstract this functionality
        into a custom hook and then reuse that in both these places.
      </p>

      <p>
        <img src={require("./images/Creating -useKey.jpg")} alt="" />
        And so, again, never lie to React about your dependencies, and always
        make sure to include every single variable that is used here into your
        effect.
      </p>

      <p>
        <img src={require("./images/Creating -useKey-2.jpg")} alt="" />
        👇
        <img src={require("./images/Creating -useKey-3.jpg")} alt="" />
      </p>
    </section>
  );
}

export default App;
