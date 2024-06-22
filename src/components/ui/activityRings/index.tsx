import InnerActivityRing from "./innerRings";

export interface ActivityRing {
  value: number;
  color: string;
}

export type ActivityRingsProps = {
  rings: ActivityRing[];
};

export default function Rings(props: ActivityRingsProps) {
  const viewBoxSize = 100 + props.rings.length * 22.25;

  return (
    <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} height='100%' width='100%'>
      <g>
        {props.rings.map((ring, index) => (
          <InnerActivityRing key={index} index={index} ring={ring} />
        ))}
      </g>
    </svg>
  );
}
