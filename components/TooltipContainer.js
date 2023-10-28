const TooltipContainer = ({ content, position }) => {
  return (
    //   tooltip
    <div className={`absolute ${position} hidden xl:group-hover:flex`}>
      <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
        <div className="text-[12px] leading-none font-semibold capitalize">
          {content}
        </div>
        {/* triangle for tooltip */}
        <div
          className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] 
          border-r-0 absolute -right-2"
        ></div>
      </div>
    </div>
  );
};

export default TooltipContainer;
