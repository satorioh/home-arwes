import { BleepsProvider } from "@arwes/sounds";
import { CustomBleepsProps } from "types";

const SOUND_OBJECT_URL = "/assets/sounds/object.mp3";
const SOUND_ASSEMBLE_URL = "/assets/sounds/assemble.mp3";
const SOUND_TYPE_URL = "/assets/sounds/type.mp3";
const SOUND_CLICK_URL = "/assets/sounds/click.mp3";

const defaultAudioSettings = { common: { volume: 0.25 } };
const defaultPlayersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  assemble: { src: [SOUND_ASSEMBLE_URL], loop: true },
  type: { src: [SOUND_TYPE_URL], loop: true },
  click: { src: [SOUND_CLICK_URL] },
};
const defaultBleepsSettings = {
  object: { player: "object" },
  assemble: { player: "assemble" },
  type: { player: "type" },
  click: { player: "click" },
};

const CustomBleepsProvider = ({
  audioSettings = defaultAudioSettings,
  playersSettings = defaultPlayersSettings,
  bleepsSettings = defaultBleepsSettings,
  children,
}: CustomBleepsProps) => {
  return (
    <BleepsProvider
      audioSettings={audioSettings}
      playersSettings={playersSettings}
      bleepsSettings={bleepsSettings}
    >
      {children}
    </BleepsProvider>
  );
};

export default CustomBleepsProvider;
