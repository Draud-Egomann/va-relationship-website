import { BlogEntry } from "~/composables/models/BlogEntry";
import { Card } from "~/composables/models/Card";
import { HorizontalCard } from "../models/HorizontalCard";

export class DataProvider {
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
}