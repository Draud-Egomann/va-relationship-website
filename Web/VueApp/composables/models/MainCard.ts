export class MainCard extends Card {
  public LinkUrl: string | null = null;
  public LinkText: string | null = null;

  constructor(
    linkUrl: string | null = null,
    linkText: string | null = null,
    title: string,
    text: string,
    imageUrl: string | null = null,
    imageAltText: string = "",
    imageClass: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null,
    thumbnailClass: string | null = null
  ) {
    super(title, text, imageUrl, imageAltText, imageClass, thumbnailUrl, thumbnailAltText, thumbnailClass);
    this.LinkUrl = linkUrl;
    this.LinkText = linkText;
  }

  public get hasLink(): boolean {
    return this.LinkUrl !== null && this.LinkText !== null;
  }
}