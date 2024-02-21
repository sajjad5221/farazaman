import { create } from "zustand";

type State = {
    cvFileState: {cvFile:  File | ''};
    filePostPitch: {pitchDeckFile:  File | ''},
}

type Action = {
    handleCvFileChange: (file: State['cvFileState']) => void,
    handlePitchFileChange: (file: State['filePostPitch']) => void,
}

const useFile = create<State & Action>((set) => {
    return {
        cvFileState: { cvFile: "" },
        filePostPitch: { pitchDeckFile: ""},
        handleCvFileChange: (file) => set(() => ({cvFileState: file})),
        handlePitchFileChange: (file) => set(() => ({filePostPitch: file})),
    };
});

export { useFile }