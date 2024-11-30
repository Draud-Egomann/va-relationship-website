import { stringHelper } from "~/utils/stringHelper";

export class BlogEntry extends ImageBaseItem {
  public Title: string;
  public Text: string;
  public Date: Date;
  public PrimaryLink: string | null;
  public SecondaryLink: string | null;

  constructor(
    title: string,
    text: string,
    date: Date,
    primaryLink: string | null,
    secondaryLink: string | null,
    imageUrl: string | null = null,
    imageAltText: string = "",
    imageClass: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null,
    thumbnailClass: string | null = null
  ) {
    super(imageUrl, imageAltText, imageClass, thumbnailUrl, thumbnailAltText, thumbnailClass);
    this.Title = title;
    this.Text = text;
    this.Date = date;
    this.PrimaryLink = primaryLink;
    this.SecondaryLink = secondaryLink
  }

  get FormattedDate(): string {
    return `${this.Date.getDate()}/${this.Date.getMonth() + 1}/${this.Date.getFullYear()}`;
  }

  get HasPrimaryLink(): boolean {
    return !stringHelper.IsNullOrEmpty(this.PrimaryLink);
  }

  get HasSecondaryLink(): boolean {
    return !stringHelper.IsNullOrEmpty(this.SecondaryLink);
  }
}