import { BlogEntry } from "~/composables/models/BlogEntry";
import { Card } from "~/composables/models/Card";
import { HorizontalCard } from "../models/HorizontalCard";
import { MainCard } from "../models/MainCard";
import { Slide } from "../models/Slide";
import { AudioPlayer } from "../models/AudioPlayer";
import { TableData } from "../models/Table";
import { ImageBaseItem } from "../models/ImageBaseItem";

export class DataProvider {
  static GetHeaderLinks(): { title: string; sublinks: string[]; }[] {
    return [
      {
        title: "Zwischen Welten",
        sublinks: ["Sublink 1", "Sublink 2", "Sublink 3"],
      },
      {
        title: "KI in der Bildung",
        sublinks: ["Sublink 1", "Sublink 2", "Sublink 3"],
      },
      {
        title: "Bindungen mit KI",
        sublinks: ["Sublink 1", "Sublink 2", "Sublink 3"],
      },
    ]
  }

  static GetFooterLinks(): { title: string; url: string; }[] {
    return [
      { title: "Über uns", url: "/about" },
      { title: "Datenschutzbedingungen", url: "/legal/privacy" },
      { title: "Impressum", url: "/legal/imprint" },
    ]
  }

  static GetBlogEntries(): BlogEntry[] {
    return [
      new BlogEntry(
        "Timeline Entry 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        new Date(2023, 5, 12),
        null,
        null,
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
      new BlogEntry(
        "Timeline Entry 2",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        new Date(2023, 8, 17),
        null,
        null,
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
      new BlogEntry(
        "Timeline Entry 3",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        new Date(2023, 3, 24),
        null,
        null,
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
    ]
  }

  static GetVideoBanner(): { videoUrl: string, title: string, description: string, linkText: string | null, linkUrl: string | null } {
    return {
      videoUrl: "https://videos.pexels.com/video-files/6752408/6752408-uhd_2160_4096_25fps.mp4",
      title: "Engaging Video Banner Title",
      description: "Brief description that aligns with the website's message, adding more context or information.",
      linkText: "Learn More",
      linkUrl: "#"
    }
  }

  static GetGalleryImages(): { title: string, text: string, images: ImageBaseItem[] } {
    return {
      title: "Gallery Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: [
        new ImageBaseItem("https://picsum.photos/300/300", "Placeholder Image", null, null, null),
        new ImageBaseItem("https://picsum.photos/300/300", "Placeholder Image", null, null, null),
        new ImageBaseItem("https://picsum.photos/300/300", "Placeholder Image", null, null, null),
        new ImageBaseItem("https://picsum.photos/300/300", "Placeholder Image", null, null, null),
      ]
    }
  }

  static GetImageBanner(): { title: string, text: string, imageUrl: string }[] {
    return [
      {
        title: "Image Banner 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "https://picsum.photos/150",
      },
      {
        title: "Image Banner 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "https://picsum.photos/seed/heading2/150",
      },
      {
        title: "Image Banner 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "https://picsum.photos/seed/heading3/150",
      },
    ]
  }

  static GetAudioTracks1(): { title: string, text: string, people: { name: string, profession: string, description: string, image: string, audio: string }[] } {
    return {
      title: "Audio Tracks 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      people: [
        {
          name: "John Doe",
          profession: "Software Engineer",
          description: "An experienced developer in web technologies.",
          image: "https://picsum.photos/seed/code/48",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
        {
          name: "Jane Smith",
          profession: "Graphic Designer",
          description: "Specializes in UI/UX design with a passion for typography.",
          image: "https://picsum.photos/seed/uiux/48",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        },
        {
          name: "Alice Johnson",
          profession: "Product Manager",
          description: "Focused on delivering seamless user experiences.",
          image: "https://picsum.photos/seed/tea/48",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        },
        {
          name: "Bob Lee",
          profession: "Data Scientist",
          description: "Expert in machine learning and data analytics.",
          image: "https://picsum.photos/seed/bread/48",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        },
      ]
    }
  }

  static GetCall2Action(): { title: string, text: string, ctaText: string } {
    return {
      title: "Call to Action",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ctaText: "Learn More",
    }
  }

  static GetStickyCards(): { title: string, text: string, cards: { title: string, text: string }[] } {
    return {
      title: "Sticky Cards",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cards: [
        { title: "Card 1", text: "Description for the first card." },
        { title: "Card 2", text: "Description for the second card." },
        { title: "Card 3", text: "Description for the third card." },
        { title: "Card 4", text: "Description for the fourth card." },
      ]
    }
  }

  static GetTextKeywords(): { text: string, keyword: string, image: ImageBaseItem }[] {
    return [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        keyword: "Insight",
        image: new ImageBaseItem("https://picsum.photos/seed/insight/500", "Placeholder Image", null, null, null),
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        keyword: "Focus",
        image: new ImageBaseItem("https://picsum.photos/seed/focus/500", "Placeholder Image", null, null, null),
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        keyword: "Perspective",
        image: new ImageBaseItem("https://picsum.photos/seed/perspective/500", "Placeholder Image", null, null, null),
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        keyword: "Innovation",
        image: new ImageBaseItem("https://picsum.photos/seed/innovation/500", "Placeholder Image", null, null, null),
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        keyword: "Inspiration",
        image: new ImageBaseItem("https://picsum.photos/seed/inspiration/500", "Placeholder Image", null, null, null),
      }
    ]
  }

  static GetMainHeading(): [string, string] {
    return ["Title", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."];
  }

  static GetCards(): Card[] {
    return [
      new Card(
        "Card 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
      new Card(
        "Card 2",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
      new Card(
        "Card 3",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
      new Card(
        "Card 4",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
    ]
  }

  static GetAccordions(): { title: string; content: string; }[] {
    return [
      { title: "Accordion 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { title: "Accordion 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { title: "Accordion 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ]
  }

  static GetStatCards(): { heading: string; value: string; description: string; }[] {
    return [
      { heading: "Stat 1", value: "100", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { heading: "Stat 2", value: "20/20", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { heading: "Stat 3", value: "300", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ]
  }

  static GetHorizontalCard(): HorizontalCard {
    return new HorizontalCard(
      "Horizontal Card",
      "Subtitle",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Learn More",
      "https://example.com",
      "https://picsum.photos/200/200",
      "image alt text",
      null,
      null,
      null,
      null
    );
  }

  static GetMainCards(): MainCard[] {
    return [
      new MainCard(
        "https://example.com",
        "Learn More",
        "Main Card 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
      new MainCard(
        "https://example.com",
        "Learn More",
        "Main Card 2",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
      new MainCard(
        "https://example.com",
        "Learn More",
        "Main Card 3",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://picsum.photos/300/300",
        "Placeholder Image",
        null,
        null,
        null,
        null,
      ),
    ]
  }

  static GetSlides(): Slide[] {
    return [
      new Slide("First Slide", "https://picsum.photos/id/716/600/", "Slide 1"),
      new Slide("Second Slide", "https://picsum.photos/id/111/600/", "Slide 2"),
      new Slide(null, "https://picsum.photos/id/588/600/", "Slide 3"),
    ]
  }

  static GetAudioPlayers(): AudioPlayer[] {
    return [
      new AudioPlayer(
        "Trap Template",
        "https://static.soundtrap.com/contentful-audio/bbpb82zmp9gd/2UzmfVz8RA7ML6T2IDrKY3/b4897207600480dac34aa84d5efe60bd/Trap_Template__3_.mp3",
        "Soundtrap",
        "https://static.soundtrap.com/contentful-images/bbpb82zmp9gd/2zrfzbNChJwvttdzWVPvnk/edf1789c92513dd56e95f5b6e1cc236c/trap-producers.jpg?fm=webp&q=80&w=1920",
        "Placeholder Image",
      ),
      new AudioPlayer(
        "Drill Template",
        "https://static.soundtrap.com/contentful-audio/bbpb82zmp9gd/2UzmfVz8RA7ML6T2IDrKY3/b4897207600480dac34aa84d5efe60bd/Trap_Template__3_.mp3",
        "Soundtrap",
        "https://static.soundtrap.com/contentful-images/bbpb82zmp9gd/1oGNeIdscSmLcECuq8yW9m/2100a1d9d2771a96108983b6a9d8a8d8/jersey-drill-rapper.jpg?fm=webp&q=80&w=1920",
        "Placeholder Image",
      ),
      new AudioPlayer(
        "Jersey Club Template",
        "https://static.soundtrap.com/contentful-audio/bbpb82zmp9gd/2ov1Hqqqossr3OLdeXh5Po/327e5a27181a09053ab55977398fb7db/Jersey_Template.mp3",
        "Soundtrap",
        "https://static.soundtrap.com/contentful-images/bbpb82zmp9gd/1oGNeIdscSmLcECuq8yW9m/2100a1d9d2771a96108983b6a9d8a8d8/jersey-drill-rapper.jpg?fm=webp&q=80&w=1920",
        "Placeholder Image",
      ),
    ]
  }

  static GetTableData(): TableData {
    return new TableData(
      ["Model", "Overall", "Technical Robustness and Safety", "Privacy and Data Governance", "Transparency", "Diversity, Non-discrimination, and Fairness", "Societal and Environmental Well-being"],
      [
        {
          model: "GPT-4 Turbo",
          data: [0.84, 0.83, 1.00, 0.71, 0.68, 0.98],
        },
        {
          model: "Claude 3 Opus",
          data: [0.82, 0.81, 1.00, 0.64, 0.68, 0.99],
        },
        {
          model: "Llama 3-70B Instruct",
          data: [0.79, 0.69, 0.99, 0.65, 0.65, 0.97],
        },
        {
          model: "GPT-3.5 Turbo",
          data: [0.77, 0.70, 1.00, 0.58, 0.63, 0.96],
        },
        {
          model: "Llama 3-8B Instruct",
          data: [0.77, 0.62, 1.00, 0.61, 0.65, 0.97],
        },
      ]
    )
  }
}