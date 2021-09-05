import {
  BleepsAudioSettings,
  BleepsPlayersSettings,
  BleepsSettings,
} from "@arwes/sounds";
import React from "react";

export type CustomBleepsProps = {
  audioSettings?: BleepsAudioSettings;
  playersSettings?: BleepsPlayersSettings;
  bleepsSettings?: BleepsSettings;
  children: React.ReactNode;
};

export type CustomCardProps = {
  title: string;
  btnText: string;
  url: string;
  description?: string;
};
