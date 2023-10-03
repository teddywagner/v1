import { FunctionComponent } from "react";

type KeywordPillProps = {
  keyword: string;
};

const KeywordPill: FunctionComponent<KeywordPillProps> = ({ keyword }) => {
  return (
    <div className="flex items-center px-3 py-1 bg-amber-400/10 text-amber-300 rounded-full font-medium">
      {keyword}
    </div>
  );
};

export default KeywordPill;
