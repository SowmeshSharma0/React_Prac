import Confirmation from "../components/Confirmation";
import { fn } from "@storybook/test";

export default {
    title: "Components/Confirmation",
    component: Confirmation,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "A confirmation dialog that allows you to confirm or cancel an action."
            }
        }
    },
    args: {
        isConfirmModalOpen: true,
        closeConfirmModal: fn(),
        callBack: fn(),
        card: {
            id: "1",
            title: "Task 1",
            description: "Task 1 description",
            status: "To Do",
            priority: 2,
        },
        setEditingCard: fn(),
        isEditing: false,
        setIsEditing: fn(),
    }
}

export const ConfirmationStory = {
    render: (args) => <Confirmation {...args} />
}