import React from 'react';

const AudioCredits = ({children}: {children: string}) => <p className="story-audio-credit">{children}</p>;

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
                    <span className="soundcite" data-url={audioBody} data-start="0" data-end={`${audioBodyDuration}`} data-plays="1">
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