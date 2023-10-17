import classNames from "classnames";

export const InfoNode = ({ icon, iconClassName, label }) => {
  return (
    <div className="px-4 flex items-center gap-4">
      <img
        className={classNames(
          "rounded-full w-6 h-6 bg-gray-100",
          iconClassName
        )}
        src={icon}
      />
      <label>{label}</label>
    </div>
  );
};
