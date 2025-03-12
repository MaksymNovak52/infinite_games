import { LEFT_ECHO_STYLES, RIGHT_ECHO_STYLES } from "@/constants/hero";
import { IDigitEffectProps } from "@/type";
import { PriceButton } from "./price-btn";

export const DigitEffect: React.FC<IDigitEffectProps> = ({ value }) => {
  const digits = value.toString().split("");

  const createLeftEchoLayers = (digit: string) => {
    return LEFT_ECHO_STYLES.map(({ key, className, style }) => (
      <div key={key} className={className} style={style}>
        {digit}
      </div>
    ));
  };

  const createRightEchoLayers = (digit: string) => {
    return RIGHT_ECHO_STYLES.map(({ key, className, style }) => (
      <div key={key} className={className} style={style}>
        {digit}
      </div>
    ));
  };

  const renderDigit = (digit: string, index: number) => {
    const isFirstDigit = index === 0;
    const isLastDigit = index === digits.length - 1;

    return (
      <div key={index} className="relative">
        {isFirstDigit && createLeftEchoLayers(digit)}
        {isLastDigit && createRightEchoLayers(digit)}

        <div className="relative">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              boxShadow: "0 0 20px 10px #F5F5F5",
              background: "#F5F5F5",
              borderRadius: "8px",
              zIndex: 5,
            }}
          />

          {isLastDigit && (
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "340px",
                transform: "translateX(-50%) rotate(10deg)",
                zIndex: 5,
                width: "100%",
              }}
            >
              <PriceButton title="1million" />
            </div>
          )}

          <div
            style={{
              color: "#FD7B08",
              fontSize: "176.188px",
              fontWeight: 500,
              lineHeight: "88%",
              borderRadius: "8px",
              filter: "blur(0.3px)",
              position: "relative",
              zIndex: 10,
            }}
          >
            {digit}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center relative">
      <div className="flex items-center relative">
        {digits.map(renderDigit)}
      </div>
    </div>
  );
};
