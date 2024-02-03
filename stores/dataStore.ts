import { ContactInfo, WorkSpaceInfo, StartupsInfo, HiringInfo, IntershipInfo } from "@/types/global";
import { create } from "zustand";


type State = {
    isSubmitting: boolean;
    isSuccess: boolean;
    send: boolean;
    Message: string;
    formData: HiringInfo;
    filePost: {resume: File | null};
    startupsFilePost: {pitch: File | null}
    csrfToken: string;
    startupsFormData: any;
    contactUsFormData: ContactInfo;
    workSpaceFormData: WorkSpaceInfo;
    intershipFormData: IntershipInfo;
}

type Action = {
    handleSubmitingChange: (bool: State['isSubmitting']) => void;
    handleSuccessChange: (bool: State['isSuccess']) => void;
    handleSendChange: (bool: State['send']) => void;
    handleMessageChange: (str: State['Message']) => void;
    handleFormDataChange: (obj: State['formData']) => void;
    handleFilePostChange: (file: State['filePost']) => void;
    handleTokenChange: (str: State['csrfToken']) => void;
    handleStartupsFormDataChange: (obj: State['startupsFormData']) => void;
    handleStartupsFilePost: (file: State['startupsFilePost']) => void;
    handleContactUsFormData: (obj: State['contactUsFormData']) => void;
    handleWorkSpaceFormData: (obj: State['workSpaceFormData']) => void;
    handleInternshipFormData: (obj: State['intershipFormData']) => void;
}

const useData = create<State & Action>((set) => {
    return {
        isSubmitting: false,
        isSuccess: true,
        send: false,
        Message: '',
        formData: {
            name: '',
            email: '',
            phone: '',
            hireType: 0,
            resume: null as File | null,
        },
        startupsFormData: {
            name: '',
            email: '',
            phone: '',
            members_count: 0,
            resume: null as File | null,
        },
        workSpaceFormData: {
            name: '',
            email: '',
            phone: '',
        },
        filePost: {resume: null},
        startupsFilePost: {pitch: null},
        csrfToken: "",
        contactUsFormData: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        intershipFormData: {
            name: '',
            phone: '',
            email: '',
            university: '',
            resume: null as File | null,
        },

        handleSubmitingChange: (bool) => set(() => ({isSubmitting: bool})),
        handleSuccessChange: (bool) => set(() => ({isSuccess: bool})),
        handleSendChange: (bool) => set(() => ({send: bool})),
        handleMessageChange: (str) => set(() => ({Message: str})),
        handleFormDataChange: (obj) => set(() => ({formData: obj})),
        handleFilePostChange: (file) => set(() => ({filePost: file})),
        handleTokenChange: (str) => set(() => ({csrfToken: str})),
        handleStartupsFormDataChange: (obj) => set(() => ({startupsFormData: obj})),
        handleStartupsFilePost: (file) => set(() => ({startupsFilePost: file})),
        handleContactUsFormData: (obj) => set(() => ({contactUsFormData: obj})),
        handleWorkSpaceFormData: (obj) => set(() => ({workSpaceFormData: obj})),
        handleInternshipFormData: (obj) => set(() => ({intershipFormData: obj})),
    };
});

export { useData }