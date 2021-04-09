import React from 'react';
import { Cloudinary } from "cloudinary-core";

function getAudioUrl(
    baseUrl: string
  ) {
    if (!baseUrl) return "";
    const cld = new Cloudinary({cloud_name: "hs9mwpicm", secure: true});
    const directoryPrefix = baseUrl.includes("AR19_Ambient") ? "ambient-audio/" : "audio-quotes/";
    const filename = "ir-19/" + directoryPrefix + baseUrl.substring(baseUrl.lastIndexOf("/") + 1, baseUrl.lastIndexOf("."));
    const img = cld.video_url(filename, {format: "mp3"});
    return img;
  }

const AudioCredits = ({children}: {children: string}) => <p className="story-audio-credit">{children}</p>;

export const AmbientAudio = ({
    ambientAudio,
    stopAmbientAudio,
    children,
  }: {
    ambientAudio: any;
    stopAmbientAudio: boolean;
    children: React.ReactNode;
  }) => (
    <div
      className="js-section-story__audio"
      {...{
        "data-ambienturl": ambientAudio?.[0]?.secure_url ? getAudioUrl(ambientAudio?.[0]?.secure_url) : null,
        "data-ambientstop": stopAmbientAudio ? "true" : null,
      }}
    >
      {children}
    </div>
  );

interface SlideAudioProps {
  audioBody: string;
  audioBodyText: string;
  audioBodyCredit: string;
  audioBodyDuration: string;
}
export default function SlideAudio({audioBody, audioBodyText, audioBodyCredit, audioBodyDuration}: SlideAudioProps) {
    return (<>
        {
            (audioBodyText || audioBody) && (<>
            { audioBody ? 
                <p className="story-audio-body large-2">
                    <span className="soundcite" data-url={getAudioUrl(audioBody)} data-start="0" data-end={`${audioBodyDuration}`} data-plays="1">
                    {audioBodyText}
                    </span>
                </p> : 
                <p className="story-audio-body large-2">
                    {audioBodyText}
                </p>

              }
            { audioBodyCredit && <AudioCredits>{audioBodyCredit}</AudioCredits>}
            </>)
        }
    </>);
}