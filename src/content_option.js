const logotext = "ADAM";
const meta = {
    title: "Adam",
    description: "I’m Adam, writer, currently working in Metro Detroit",
};

const introdata = {
    title: "I’m Adam",
    animated: {
        first: "blah",
        second: "blah blah",
        third: "blah blah blah",
    },
    description: "whatever this says",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About Myself",
    aboutme: "this is where you put a description of yourself.",
};
const worktimeline = [{
        jobtitle: "Job title",
        where: "location",
        date: "date",
    },
//     {
//         jobtitle: "Designer of week",
//         where: "Jamalya",
//         date: "2019",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "ALquds",
//         date: "2019",
    // },
];

const skills = [{
        name: "Skills",
        value: 100,
    },
    // {
    //     name: "Djano",
    //     value: 85,
    // },
    // {
    //     name: "Javascript",
    //     value: 80,
    // },
    // {
    //     name: "React",
    //     value: 60,
    // },
    // {
    //     name: "Jquery",
    //     value: 85,
    // },
];

const services = [{
        title: "Service",
        description: "description here.",
    },
    // {
    //     title: "Mobile Apps",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
    // {
    //     title: "Wordpress Design",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
];

const dataportfolio = [
    {
      id: "article1",
      img: "${process.env.PUBLIC_URL}/previews/article1.png",
      description: "An exploration of how music theory shapes the sounds we hear every day.",
      detailedContent: `
        <br>
        <h3>The Power of Music Theory</h3>
        <p>Music theory provides the framework behind the melodies and harmonies that move us. It’s a universal language that allows musicians to communicate emotions, create tension, and resolve harmony in powerful ways.</p>
        <h2>What is Music Theory?</h2>
        <p>At its core, music theory explains why certain notes and rhythms work well together. It covers concepts like scales, chords, and progressions that help composers and performers craft compelling pieces.</p>
        <h2>Modern Applications</h2>
        <p>Today, music theory isn’t just for classical composers. It’s the backbone of modern genres like pop, jazz, and electronic music. From creating infectious hooks to crafting evocative soundscapes, music theory continues to shape the evolution of sound.</p>
        <p>Understanding even the basics can unlock a deeper appreciation for the music we consume daily and provide a creative edge for aspiring musicians.</p>
      `,
      title: "The Role of Music Theory in Modern Soundscapes",
      link: "${process.env.PUBLIC_URL}/portfolio/article1",
    },
    {
      id: "article2",
      img: "${process.env.PUBLIC_URL}/previews/article2.png",
      description: "Discover how artificial intelligence is changing the way we create and experience music.",
      detailedContent: `
        <br>
        <h3>Artificial Intelligence Meets Music</h3>
        <p>Artificial intelligence (AI) is revolutionizing many industries, and music is no exception. From composing symphonies to curating personalized playlists, AI is transforming the way we engage with music.</p>
        <h2>AI-Generated Music</h2>
        <p>One of the most fascinating applications of AI is its ability to generate music. Algorithms like OpenAI’s MuseNet can create compositions in various genres and styles, blending classical and modern influences seamlessly.</p>
        <h2>Personalized Listening</h2>
        <p>AI also powers platforms like Spotify and Apple Music, tailoring playlists and recommendations to individual preferences. By analyzing listening habits, these algorithms ensure you discover music that resonates with your taste.</p>
        <h2>The Future of Music and AI</h2>
        <p>As AI continues to evolve, its potential to assist musicians in composing, mixing, and mastering tracks is becoming more apparent. While it’s unlikely to replace human creativity, AI serves as a powerful tool that expands the boundaries of what’s possible in music.</p>
      `,
      title: "How AI is Reshaping the World of Music",
      link: "${process.env.PUBLIC_URL}/portfolio/article2",
    },
    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "a little description about what they should contact you about.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};