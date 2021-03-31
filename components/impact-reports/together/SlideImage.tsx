/*
 * SlideImage is currently a set of utility functions for
 * formatting Contentful Image URIs. However, it is intended
 * to provide the structure/separation necessary for migrating
 * to another CDN.
 */
import { Cloudinary } from 'cloudinary-core';
import { Asset } from "contentful";

export const IMAGE_FORMAT = "jpg";

export enum IMAGE_QUALITY {
  MOBILE = "80",
  MOBILE_LO = "40",
  DESKTOP = "60",
  DESKTOP_LO = "40",
  DESKTOP_VERT = "60",
}

export enum IMAGE_WIDTH {
  MOBILE = "600",
  MOBILE_LO = "300",
  MOBILE_VERT = "600",
  DESKTOP = "2000",
  DESKTOP_LO = "300",
  DESKTOP_VERT = "1200",
  DESKTOP_VERT_LO = "300",
  THUMBNAIL = "500",
}

// eslint-disable-next-line no-unused-vars
function getImageUrlv1(
  baseUrl: string,
  imgFormat: string,
  imgQuality: string,
  imgWidth: string
) {
  return `${baseUrl}?fm=${imgFormat}&q=${imgQuality}&w=${imgWidth}`;
}

export function getImageUrl(
  baseUrl: string,
  imgFormat: string,
  imgQuality: string,
  imgWidth: string
) {
  if (!baseUrl) return "";
  const cld = new Cloudinary({cloud_name: "hs9mwpicm", secure: true});
  const filename = "ir-19/images/" + baseUrl.substring(baseUrl.lastIndexOf("/") + 1, baseUrl.lastIndexOf("."));
  const img = cld.url(filename, {format: imgFormat, quality: imgQuality, width: parseInt(imgWidth), crop: 'fit'});
  return img;
}

export function parseImageProps({
  orientation,
  verticalImage,
  horizontalImage,
  mobilePortraitHalfImage,
}: {
  orientation: string;
  verticalImage: Asset;
  horizontalImage: Asset;
  mobilePortraitHalfImage: Asset;
}) {
  const baseImage = orientation === "vert" ? verticalImage : horizontalImage;
  const baseQuality =
    orientation === "vert" ? IMAGE_QUALITY.DESKTOP_VERT : IMAGE_QUALITY.DESKTOP;
  const baseWidth =
    orientation === "vert" ? IMAGE_WIDTH.DESKTOP_VERT : IMAGE_WIDTH.DESKTOP;
  const baseMobileImage = mobilePortraitHalfImage ?? baseImage;
  return {
    image: baseImage
      ? getImageUrl(
          baseImage.fields.file.url,
          IMAGE_FORMAT,
          baseQuality,
          baseWidth
        )
      : "",
    imageMobile: baseMobileImage
      ? getImageUrl(
          baseMobileImage.fields.file.url,
          IMAGE_FORMAT,
          IMAGE_QUALITY.MOBILE,
          IMAGE_WIDTH.MOBILE
        )
      : "",
    imageLowRes: baseImage
      ? getImageUrl(
          baseImage.fields.file.url,
          IMAGE_FORMAT,
          IMAGE_QUALITY.DESKTOP_LO,
          IMAGE_WIDTH.DESKTOP_LO
        )
      : "",
    imageDesc: baseImage?.fields?.description ?? "",
  };
}

export function parseThumbnail({ thumbnailImage }: { thumbnailImage: Asset }) {
  return {
    image: thumbnailImage
      ? getImageUrl(
          thumbnailImage.fields.file.url,
          IMAGE_FORMAT,
          IMAGE_QUALITY.DESKTOP,
          IMAGE_WIDTH.THUMBNAIL
        )
      : "",
    imageDesc: thumbnailImage?.fields?.description ?? "",
  };
}
