export type HabitsProps = {
    name: string;
    priority: string;
}

export type AlertModalProps = {
    messageType: string;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// export type ErrorProps = {
//     duplicate: boolean
// }