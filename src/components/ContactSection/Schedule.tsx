import { workingHoursData } from "../../data/scheduleData";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => {
  return (
    <div className="mx-auto w-[min(370px,100%)] py-10 lg:w-[440px] lg:border-2 lg:px-14 lg:text-light lg:backdrop-blur-md lg:backdrop-brightness-75">
      <h3 className="pb-10 text-center text-2xl font-medium md:text-3xl">
        Working hours
      </h3>
      <ul className="grid gap-5">
        {workingHoursData.map((day) => (
          <ScheduleItem key={day.day} {...day} />
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
