import AddTaskDialog from "../components/AddTaskDialog";
import { CardProvider } from "../context/CardContext";
import { GlobalContext } from "../context/GlobalContext";

import { main_axis_state_mapping } from "../context/constants";
import { fn } from "@storybook/test";
const withContexts = (Story) => (
    <GlobalContext.Provider value={{main_axis_state_mapping}}>
        <CardProvider>
            <Story />
        </CardProvider>
    </GlobalContext.Provider>
)

export default {
    title: "Components/AddTaskDialog",
    component: AddTaskDialog,
    tags: ['autodocs'],
    decorators: [withContexts],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A dialog that allows you to add a new task to the board.',
            },
        },
    },
    args: {
        openModal: true,
        closeModal: fn(),
        card: null,
    },
};

export const AddTaskDialogStory = {
    render: (args) => <AddTaskDialog {...args} />
}

export const ViewTaskDialogStory = {
    args: {
        card: {
            id: "1",
            title: "Task 1",
            description: "Task 1 description",
            status: "To Do",
            priority: 2,
            dueDate: "2024-01-01",
            assignee: "John Doe",
        }
    },
    render: (args) => <AddTaskDialog {...args} />
}

export const EditTaskDialogStory = {
    args: {
        card: {
            id: "1",
            title: "Task 1",
            description: "Task 1 description",
            status: "To Do",
            priority: 2,
            dueDate: "2024-01-01",
            assignee: "John Doe",
        },
        initialEditMode: true,
    },
    render: (args) => <AddTaskDialog {...args} />
}
