import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface NumericStatProps {
  label: string,
  variant?: string,
  number: number
}

export default function NumericStat({label, variant, number}: NumericStatProps) {
  switch (variant) {
    case 'icon-left':
      return (
        <figure className="text-center flex flex-col items-center">
          <div className={"flex flex-row justify-around w-full"}>
            <span>dd</span>
            <span>dd</span>
          </div>
          <figcaption className="text-4xl pt-4">{label}</figcaption>
        </figure>
      );
    default:
      return (
        <figure className="text-center flex flex-col items-center">
          <div style={{width: 175, height: 175}}>
            <CircularProgressbar
              value={number}
              text={`${number}`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                // rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                // strokeLinecap: 'butt',

                // Text size
                textSize: '16px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(207, 184, 124, ${number / 100})`,
                textColor: '#000',
                trailColor: '#9da1a2',
                backgroundColor: '#3e98c7',
              })}
            />
          </div>
          <figcaption className="text-4xl pt-4">{label}</figcaption>
        </figure>
      );
  }

}