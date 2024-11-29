import { stringHelper } from "~/utils/stringHelper";

export class HorizontalCard extends ImageBaseItem {
  public Title: string;
  public SubTitle: string;
  public Text: string;
  public Link: string;
  public LinkUrl: string | null;

  constructor(
    title: string,
    subTitle: string,
    text: string,
    Link: string,
    linkUrl: string | null,
    imageUrl: string | null = null,
    imageAltText: string = "",
    imageClass: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null,
    thumbnailClass: string | null = null
  ) {
    super(imageUrl, imageAltText, imageClass, thumbnailUrl, thumbnailAltText, thumbnailClass);
    this.Title = title;
    this.SubTitle = subTitle;
    this.Text = text;
    this.Link = Link;
    this.LinkUrl = linkUrl;
  }

  get HasLink(): boolean {
    return !stringHelper.IsNullOrEmpty(this.LinkUrl);
  }
}