export function SelectEventLeftBlock() {
  return (
    <div className="w-[400px] p-4">
      <div className="mb-8">
        <h2 className="text-white font-mono text-base leading-7 font-medium mb-4">
          This section allows to track submitted predictions for selected event
          and compare them with correct event output
        </h2>

        <div className="flex items-center mb-2">
          <div className="w-3 h-2 bg-[#05FFE1] mr-2 shadow-[0_0_5px_#00FFFF]"></div>
          <span className="text-xs uppercase text-gray-400 font-mono">
            CORRECT RESULTS
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-3 h-2 bg-[#876FFB] mr-2 shadow-[0_0_5px_#2563EB]"></div>
          <span className="text-xs uppercase text-gray-400 font-mono">
            PREDICTED RESULTS
          </span>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-xs uppercase text-gray-500 font-ciutadella mb-2">
          PREDICTIONS FOR THE EVENT KEY:
        </h3>
        <p className="text-sm font-mono">
          Will the Department of Government Efficiency issue a public statement
          clarifying the directive by 26 February 2025? [cb8172] submitted by
          miner key: 69_5HBgwRud
        </p>
      </div>
    </div>
  );
}
