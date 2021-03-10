import { Asset, Entry } from "contentful";

export interface ISlide {
  label: string;
  layout: string;
  mobileLayout: string;
  title: string;
  displayTitle: boolean;
  body: any;
  bodyRegionPlacement: OverlayPosition;
  bodyAudio: any;
  bodyAudioText: string;
  bodyAudioCredit: string;
  verticalImage: Asset;
  horizontalImage: Asset;
  backgroundImage: Asset;
  backgroundVideo: string;
  playerVideo: string;
  lowResolutionBackgroundVideoPoster: Asset;
  ambientAudio: any;
  stopAmbientAudio: boolean;
  mobilePortraitFullImage: Asset;
  mobilePortraitHalfImage: Asset;
}

export interface IStory {
  label: string;
  title: string;
  body: any;
  credits: any;
  previewImage: Asset;
  mobilePreviewImage: Asset;
  lowResolutionPreviewImage: Asset;
  thumbnailImage: Asset;
  creditJumpText: string;
  includeInAr19: boolean;
  slides: Entry<ISlide>[];
  socialMediaSuggestedImage: Asset;
  socialMediaSuggestedDescription: string;
}

export enum OverlayPosition {
  UPPER_RIGHT = "Upper Right",
  UPPER_LEFT = "Upper Left",
  CENTER_TOP = "Center Top",
  CENTER_MIDDLE = "Center Middle",
  CENTER_BOTTOM = "Center Bottom",
  LOWER_LEFT = "Lower Left",
  LOWER_RIGHT = "Lower Right",
  DEFAULT = "Center Middle",
}
