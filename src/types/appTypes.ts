export type HabitsProps = {
    [key: string]: {
        priority: string;
        days: Object;
    }
}

export type AlertModalProps = {
    loading: boolean;
    messageType: string;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// export type ErrorProps = {
//     duplicate: boolean
// }