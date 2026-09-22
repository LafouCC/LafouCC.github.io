// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "* denotes equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Collection of some of my course and independent research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-my-first-paper-is-accepted-to-iccv-2025-sparkles",
          title: 'My first paper is accepted to ICCV 2025! :sparkles:',
          description: "",
          section: "News",},{id: "news-my-paper-is-accepted-to-emnlp-findings",
          title: 'My paper is accepted to EMNLP Findings',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-cvpr-findings-many-thanks-to-all-collaborators-purple-heart",
          title: 'One paper accepted to CVPR Findings, many thanks to all collaborators :purple_heart:',
          description: "",
          section: "News",},{id: "news-started-my-ph-d-journey-at-ut-see-you-in-austin",
          title: 'Started my Ph.D. journey at UT, see you in Austin!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
