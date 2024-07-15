export type HabitsProps = {
    id: string;
    name: string;
    priority: string;
    days: Record<string, boolean | undefined>;
}

export type AlertModalProps = {
    loading: boolean;
    messageType: string;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
