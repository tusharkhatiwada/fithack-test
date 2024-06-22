import { ActivityRing } from ".";

interface InnerRingsProps {
  index: number;
  ring: ActivityRing;
}

export default function InnerActivityRing(props: InnerRingsProps) {
  const radius = 30 + props.index * 12.75;
  const maxValue = 200;
  const dashArrayPart =
    Math.min(0.999, props.ring.value / maxValue) * (2 * radius * Math.PI);

  return (
    <>
      <circle
        cx='50%'
        cy='50%'
        r={radius}
        stroke={props.ring.color}
        strokeOpacity={0.4}
        strokeWidth={12}
        className='origin-[50%] -rotate-90 fill-none'
      />
      <circle
        cx='50%'
        cy='50%'
        r={radius}
        strokeDasharray={`${dashArrayPart} ${"9".repeat(props.index + 4)}`}
        stroke={props.ring.color}
        strokeWidth={12}
        style={{
          animationDuration: "1000ms",
          animationTimingFunction: "ease-in-out",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        className='origin-[50%] -rotate-90 fill-none animate-[ring-progress]'
      />
    </>
  );
}
