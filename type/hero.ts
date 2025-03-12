import { CSSProperties } from "react";

interface IDigitEffectProps {
  value: string;
}

interface IEchoStyle {
  key: string;
  className: string;
  style: CSSProperties;
}

export type { IDigitEffectProps, IEchoStyle };
