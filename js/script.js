/* ======================================
BLOGORA
BLOG DATA
====================================== */

const blogPosts = [


{
    id: 1,

    title:
        "How Artificial Intelligence Is Changing the Way We Create",

    category:
        "Technology",

    description:
        "Exploring how AI is transforming creativity, productivity and the digital world.",

    author:
        "Jatin",

    role:
        "Technology Writer",

    date:
        "Sep 30, 2026",

    readTime:
        "5 min read",

    featured:
        true,

    content: `

        <p>
            Artificial Intelligence has quickly become one of the
            most important technologies shaping the modern digital
            world. From creating images and writing content to
            analyzing information, AI is changing the way people
            work and create.
        </p>

        <p>
            One of the most interesting areas is creativity.
            Designers, writers, developers and creators can now
            use AI tools to explore ideas faster and experiment
            with possibilities that previously required much more
            time.
        </p>

        <h2>
            AI as a Creative Assistant
        </h2>

        <p>
            AI does not necessarily replace the creative process.
            Instead, it can work as an assistant that helps people
            generate ideas, organize information and explore
            different directions.
        </p>

        <p>
            A designer might use AI to generate visual concepts.
            A developer can use it to understand code or create
            prototypes. Writers can use AI to brainstorm topics
            and improve the structure of their work.
        </p>

        <h2>
            The Future of Creativity
        </h2>

        <p>
            As AI technology continues to develop, the relationship
            between humans and intelligent tools will continue to
            evolve. Human creativity, judgment and originality
            remain important parts of the process.
        </p>

        <p>
            The most interesting future may not be humans versus AI,
            but humans working together with AI to create things
            that were previously difficult or impossible.
        </p>

    `
},


{
    id: 2,

    title:
        "Small Habits That Can Completely Change Your Everyday Life",

    category:
        "Lifestyle",

    description:
        "Simple habits and routines that can help you become more productive and focused.",

    author:
        "Alex",

    role:
        "Lifestyle Writer",

    date:
        "Sep 28, 2026",

    readTime:
        "4 min read",

    featured:
        true,

    content: `

        <p>
            Big changes often begin with very small actions.
            Developing simple daily habits can gradually improve
            productivity, focus and overall organization.
        </p>

        <p>
            Instead of trying to completely change your lifestyle
            overnight, it can be more practical to introduce one
            small improvement at a time.
        </p>

        <h2>
            Start With Simple Changes
        </h2>

        <p>
            Preparing your tasks the night before, keeping your
            workspace organized and setting aside time for learning
            are examples of small habits that can make everyday
            activities easier.
        </p>

        <h2>
            Consistency Matters
        </h2>

        <p>
            A habit becomes useful when it is repeated consistently.
            Progress does not always have to be dramatic. Small
            improvements repeated over a long period can have a
            meaningful effect.
        </p>

    `
},


{
    id: 3,

    title:
        "Places You Should Visit at Least Once",

    category:
        "Travel",

    description:
        "A collection of beautiful destinations worth adding to your travel list.",

    author:
        "Rahul",

    role:
        "Travel Writer",

    date:
        "Sep 25, 2026",

    readTime:
        "6 min read",

    featured:
        false,

    content: `

        <p>
            Traveling allows us to experience different cultures,
            landscapes and ways of life. Every destination has
            something unique to offer.
        </p>

        <p>
            From peaceful mountains to busy cities and beautiful
            beaches, exploring new places can create memories that
            stay with us for years.
        </p>

        <h2>
            Discover Something New
        </h2>

        <p>
            A good trip does not always require an expensive
            destination. Sometimes the most memorable experiences
            come from exploring places that are close to home.
        </p>

        <h2>
            Travel With Curiosity
        </h2>

        <p>
            Try local food, talk to people, explore local streets
            and learn about the history of the place you visit.
            These experiences often become more meaningful than
            simply visiting famous tourist attractions.
        </p>

    `
},


{
    id: 4,

    title:
        "Why Learning to Code Is a Superpower",

    category:
        "Education",

    description:
        "Understanding how programming can change the way you solve problems.",

    author:
        "Priya",

    role:
        "Education Writer",

    date:
        "Sep 23, 2026",

    readTime:
        "5 min read",

    featured:
        false,

    content: `

        <p>
            Programming is more than writing lines of code.
            It teaches you how to break complex problems into
            smaller and more manageable pieces.
        </p>

        <p>
            Learning programming can also help students understand
            how websites, applications and digital systems work.
        </p>

        <h2>
            Problem Solving Through Code
        </h2>

        <p>
            When programmers encounter a difficult problem,
            they usually divide it into smaller steps. This way
            of thinking can be useful far beyond programming.
        </p>

        <h2>
            Building Your Own Ideas
        </h2>

        <p>
            Once you understand the basics, you can start creating
            your own projects. A simple website or application can
            become the foundation for much larger ideas.
        </p>

    `
},


{
    id: 5,

    title:
        "From Idea to Business: Where to Start",

    category:
        "Business",

    description:
        "Important things to consider when turning an idea into a real business.",

    author:
        "Arjun",

    role:
        "Business Writer",

    date:
        "Sep 20, 2026",

    readTime:
        "7 min read",

    featured:
        false,

    content: `

        <p>
            Every business starts with an idea, but turning that
            idea into something useful requires planning,
            experimentation and understanding the people who may
            use the product or service.
        </p>

        <p>
            Before investing significant resources, it can be
            useful to test whether people actually need the
            proposed solution.
        </p>

        <h2>
            Understand the Problem
        </h2>

        <p>
            A strong starting point is identifying a real problem.
            The clearer the problem, the easier it becomes to
            understand what kind of solution could provide value.
        </p>

        <h2>
            Start Small
        </h2>

        <p>
            Instead of trying to build everything immediately,
            create a simple version of the idea and learn from
            the feedback you receive.
        </p>

        <p>
            Building a business is a process of learning,
            testing and improving.
        </p>

    `
}


];

/* ======================================
CHECK CURRENT PAGE
====================================== */

const isArticlePage =
document.getElementById("articleContainer") !== null;

/* ======================================
HOMEPAGE ELEMENTS
====================================== */

const featuredContainer =
document.getElementById("featuredPosts");

const latestContainer =
document.getElementById("latestPosts");

const categoryButtons =
document.querySelectorAll(".category-btn");

const searchBtn =
document.getElementById("searchBtn");

const searchContainer =
document.getElementById("searchContainer");

const searchInput =
document.getElementById("searchInput");

const closeSearch =
document.getElementById("closeSearch");

const noResults =
document.getElementById("noResults");

/* ======================================
DISPLAY POSTS
====================================== */

function displayPosts(posts) {


if (!featuredContainer || !latestContainer) {
    return;
}


featuredContainer.innerHTML = "";

latestContainer.innerHTML = "";


const featuredPosts =
    posts.filter(post => post.featured);

const latestPosts =
    posts.filter(post => !post.featured);



/* ==================================
   FEATURED POSTS
================================== */

featuredPosts.forEach(post => {

    const card =
        document.createElement("article");

    card.classList.add("featured-card");

    card.innerHTML = `

        <a
            href="blog.html?id=${post.id}"
            class="post-link"
        >

            <div class="post-image ${post.category.toLowerCase()}">

                <span>
                    ${post.category.toUpperCase()}
                </span>

            </div>


            <div class="post-content">

                <div class="post-meta">

                    <span>
                        ${post.readTime}
                    </span>

                    <span>•</span>

                    <span>
                        ${post.date}
                    </span>

                </div>


                <h3>
                    ${post.title}
                </h3>


                <p>
                    ${post.description}
                </p>


                <div class="author">

                    <div class="author-avatar">
                        ${post.author.charAt(0)}
                    </div>


                    <div>

                        <strong>
                            ${post.author}
                        </strong>

                        <small>
                            ${post.role}
                        </small>

                    </div>

                </div>

            </div>

        </a>

    `;


    featuredContainer.appendChild(card);

});



/* ==================================
   LATEST POSTS
================================== */

latestPosts.forEach(post => {

    const card =
        document.createElement("article");

    card.classList.add("latest-card");


    card.innerHTML = `

        <div class="latest-image ${post.category.toLowerCase()}">

            <span>
                ${post.category.toUpperCase()}
            </span>

        </div>


        <div class="latest-content">

            <p class="post-meta">

                ${post.date}

                •

                ${post.readTime}

            </p>


            <h3>
                ${post.title}
            </h3>


            <p>
                ${post.description}
            </p>


            <a href="blog.html?id=${post.id}">
                Read Article →
            </a>

        </div>

    `;


    latestContainer.appendChild(card);

});



/* ==================================
   NO RESULTS
================================== */

if (posts.length === 0) {

    noResults.classList.add("show");

} else {

    noResults.classList.remove("show");

}


}

/* ======================================
CATEGORY FILTER
====================================== */

let selectedCategory = "All";

categoryButtons.forEach(button => {


button.addEventListener("click", function () {

    categoryButtons.forEach(btn => {

        btn.classList.remove("active-category");

    });


    this.classList.add("active-category");


    selectedCategory =
        this.dataset.category;


    filterPosts();

});


});

/* ======================================
SEARCH
====================================== */

if (searchBtn) {


searchBtn.addEventListener("click", function () {

    searchContainer.classList.toggle("show");


    if (
        searchContainer.classList.contains("show")
    ) {

        searchInput.focus();

    }

});


}

if (closeSearch) {


closeSearch.addEventListener("click", function () {

    searchContainer.classList.remove("show");

    searchInput.value = "";

    filterPosts();

});


}

if (searchInput) {


searchInput.addEventListener("input", function () {

    filterPosts();

});


}

/* ======================================
FILTER POSTS
====================================== */

function filterPosts() {


if (!searchInput) {
    return;
}


const searchText =
    searchInput.value.toLowerCase().trim();


const filteredPosts =
    blogPosts.filter(post => {

        const categoryMatch =
            selectedCategory === "All" ||
            post.category === selectedCategory;


        const searchMatch =

            post.title
                .toLowerCase()
                .includes(searchText)

            ||

            post.description
                .toLowerCase()
                .includes(searchText)

            ||

            post.category
                .toLowerCase()
                .includes(searchText)

            ||

            post.author
                .toLowerCase()
                .includes(searchText);


        return categoryMatch && searchMatch;

    });


displayPosts(filteredPosts);


}

/* ======================================
THEME
====================================== */

const themeBtn =
document.getElementById("themeBtn");

function updateThemeButton() {


if (!themeBtn) {
    return;
}


if (
    document.body.classList.contains("dark-mode")
) {

    themeBtn.textContent = "☀️";

} else {

    themeBtn.textContent = "🌙";

}


}

if (themeBtn) {


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        localStorage.setItem(
            "theme",
            "light"
        );

    }


    updateThemeButton();

});


}

const savedTheme =
localStorage.getItem("theme");

if (savedTheme === "dark") {


document.body.classList.add("dark-mode");


}

updateThemeButton();

/* ======================================
ARTICLE PAGE
====================================== */

function loadArticle() {


const articleContainer =
    document.getElementById("articleContainer");


if (!articleContainer) {
    return;
}


const params =
    new URLSearchParams(
        window.location.search
    );


const id =
    Number(params.get("id"));


const post =
    blogPosts.find(
        item => item.id === id
    );


if (!post) {

    articleContainer.innerHTML = `

        <div class="article-not-found">

            <h1>
                Article Not Found
            </h1>

            <p>
                The article you are looking for does not exist.
            </p>

            <a href="index.html">
                ← Back to Blogora
            </a>

        </div>

    `;

    return;

}



document.title =
    `${post.title} - Blogora`;



articleContainer.innerHTML = `

    <article class="full-article">


        <a
            href="index.html"
            class="back-link"
        >
            ← Back to Blogora
        </a>


        <div
            class="article-category ${post.category.toLowerCase()}"
        >

            ${post.category.toUpperCase()}

        </div>


        <h1 class="article-title">

            ${post.title}

        </h1>


        <p class="article-description">

            ${post.description}

        </p>


        <div class="article-meta">

            <div class="author">

                <div class="author-avatar">

                    ${post.author.charAt(0)}

                </div>


                <div>

                    <strong>
                        ${post.author}
                    </strong>

                    <small>
                        ${post.role}
                    </small>

                </div>

            </div>


            <div class="article-date">

                ${post.date}

                •

                ${post.readTime}

            </div>

        </div>


        <div class="article-actions">

            <button
                id="likeBtn"
                class="article-action"
            >
                ♡ Like
            </button>


            <button
                id="bookmarkBtn"
                class="article-action"
            >
                🔖 Bookmark
            </button>

        </div>


        <div class="article-hero ${post.category.toLowerCase()}">

            <span>
                ${post.category}
            </span>

        </div>


        <div class="article-content">

            ${post.content}

        </div>


    </article>

`;



setupArticleActions(post.id);

loadRelatedPosts(post);


}

/* ======================================
LIKE + BOOKMARK
====================================== */

function setupArticleActions(id) {


const likeBtn =
    document.getElementById("likeBtn");

const bookmarkBtn =
    document.getElementById("bookmarkBtn");



const likeKey =
    `blogora-like-${id}`;

const bookmarkKey =
    `blogora-bookmark-${id}`;



if (localStorage.getItem(likeKey) === "true") {

    likeBtn.classList.add("selected");

    likeBtn.innerHTML =
        "♥ Liked";

}



if (
    localStorage.getItem(bookmarkKey) === "true"
) {

    bookmarkBtn.classList.add("selected");

    bookmarkBtn.innerHTML =
        "🔖 Saved";

}



likeBtn.addEventListener("click", function () {

    const liked =
        localStorage.getItem(likeKey) === "true";


    if (liked) {

        localStorage.removeItem(likeKey);

        likeBtn.classList.remove("selected");

        likeBtn.innerHTML =
            "♡ Like";

    } else {

        localStorage.setItem(
            likeKey,
            "true"
        );

        likeBtn.classList.add("selected");

        likeBtn.innerHTML =
            "♥ Liked";

    }

});



bookmarkBtn.addEventListener(
    "click",
    function () {

        const saved =
            localStorage.getItem(
                bookmarkKey
            ) === "true";


        if (saved) {

            localStorage.removeItem(
                bookmarkKey
            );

            bookmarkBtn.classList.remove(
                "selected"
            );

            bookmarkBtn.innerHTML =
                "🔖 Bookmark";

        } else {

            localStorage.setItem(
                bookmarkKey,
                "true"
            );

            bookmarkBtn.classList.add(
                "selected"
            );

            bookmarkBtn.innerHTML =
                "🔖 Saved";

        }

    }
);


}

/* ======================================
RELATED POSTS
====================================== */

function loadRelatedPosts(currentPost) {


const relatedContainer =
    document.getElementById("relatedPosts");


if (!relatedContainer) {
    return;
}


const relatedPosts =
    blogPosts
        .filter(
            post =>
                post.id !== currentPost.id &&
                post.category === currentPost.category
        )
        .slice(0, 3);


const fallbackPosts =
    blogPosts
        .filter(
            post =>
                post.id !== currentPost.id
        )
        .slice(0, 3);


const postsToShow =
    relatedPosts.length > 0
        ? relatedPosts
        : fallbackPosts;


relatedContainer.innerHTML = "";


postsToShow.forEach(post => {

    const card =
        document.createElement("article");

    card.classList.add("related-card");


    card.innerHTML = `

        <div
            class="related-image ${post.category.toLowerCase()}"
        >

            <span>
                ${post.category.toUpperCase()}
            </span>

        </div>


        <div class="related-content">

            <p>
                ${post.date}
                •
                ${post.readTime}
            </p>


            <h3>
                ${post.title}
            </h3>


            <a href="blog.html?id=${post.id}">
                Read Article →
            </a>

        </div>

    `;


    relatedContainer.appendChild(card);

});


}

/* ======================================
INITIALIZE
====================================== */

if (isArticlePage) {


loadArticle();


} else {


displayPosts(blogPosts);


}

console.log(
"Blogora loaded successfully!"
);
