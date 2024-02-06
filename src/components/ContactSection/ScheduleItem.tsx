import AnimateElement from "../ui/AnimateElement";

type ScheduleItemProps = {
  id: number;
  day: string;
  hours: string;
};
const ScheduleItem = ({ id, day, hours }: ScheduleItemProps) => {
  return (
    <AnimateElement delay={id * 0.1}>
      <li key={day} className="flex justify-between gap-10">
        <p className="font-semibold sm:text-xl md:text-2xl">{day}</p>
        <p className="italic">{hours}</p>
      </li>
    </AnimateElement>
  );
};

export default ScheduleItem;
