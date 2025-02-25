
import AddTask from "../components/AddTask";
import { GlobalContext } from "../context/GlobalContext";
// import { CardContext } from "../context/CardContext";
import { CardProvider } from "../context/CardContext";
import { fn } from "@storybook/test";
import { main_axis_state_mapping } from "../context/constants";

// Decorator to provide necessary contexts
const withContexts = (Story) => (
    <GlobalContext.Provider value={{main_axis_state_mapping}}>
        <CardProvider>
            <Story />
        </CardProvider>
    </GlobalContext.Provider>
);

export default {
    title: 'Components/AddTask',
    component: AddTask,
    tags: ['autodocs'],
    decorators: [withContexts],
    parameters: {
        docs: {
            description: {
                component: 'A floating action button that opens a dialog to add new tasks. The button is fixed to the bottom-right corner of the viewport.'
            }
        }
    },
    args: {
        onClick: fn(),
    },
};

/**
 * The default state of the AddTask component.
 * Displays a "+" button that opens a dialog when clicked.
 */
export const AddTaskButton = {
    render: (args) => <AddTask {...args} />
};