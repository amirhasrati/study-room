import type { FC } from "react";

const SrButton: FC<{ onClick: () => void; btnText: string }> = ({ onClick, btnText }) => {
  return (
    <button type="button" onClick={onClick} className="w-fit py-2 px-4 text-lg border border-emerald-900 rounded-md">
      {btnText}
    </button>
  );
};

export default SrButton;
