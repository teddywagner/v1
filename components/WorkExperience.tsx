import { FunctionComponent } from "react";
import { KeywordPill } from "@/components/index";

type WorkExperienceProps = {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  keywords: string[];
};

const WorkExperience: FunctionComponent<WorkExperienceProps> = ({
  name,
  position,
  startDate,
  endDate,
  highlights,
  keywords,
}) => {
  const parseWorkDates = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const startMonth = start.toLocaleString("default", { month: "short" });
    const startYear = start.getFullYear();

    if (endDate.length === 0) return `${startMonth} ${startYear} — Present`;

    const end = new Date(endDate);
    const endMonth = end.toLocaleString("default", { month: "short" });
    const endYear = end.getFullYear();

    if (startYear === endYear) return `${startMonth} — ${endMonth} ${endYear}`;

    return `${startMonth} ${startYear} — ${endMonth} ${endYear}`.toUpperCase();
  };

  return (
    <div className="flex mb-8">
      <div className="w-24 text-sm">{parseWorkDates(startDate, endDate)}</div>
      <div className="flex flex-col flex-1">
        <h1 className="text-white text-xl font-medium">
          {position} | {name}
        </h1>
        <p className="mt-2 text-sm">{highlights.join(". ")}</p>
        <div className="flex flex-wrap mt-2 gap-3">
          {keywords.map((k, i) => (
            <KeywordPill keyword={k} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
