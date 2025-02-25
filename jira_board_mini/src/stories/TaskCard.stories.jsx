import TaskCard from "../components/TaskCard";
import { CardProvider } from "../context/CardContext";
import { GlobalContext } from "../context/GlobalContext";
import {card_move_rules_horizontal, card_move_rules_vertical_cross_state, main_axis_state_mapping} from "../context/constants";

const withContexts = (Story) => (
    <GlobalContext.Provider value={{card_move_rules_horizontal, card_move_rules_vertical_cross_state, main_axis_state_mapping}}>
        <CardProvider>
            <Story />
        </CardProvider>
    </GlobalContext.Provider>
)

export default {
    title: "Components/TaskCard",
    component: TaskCard,
    decorators: [withContexts],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "A card that displays a task.",
            }
        }
    },
}

export const TaskCardStoryHighPriority = {
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
    render: (args) => <TaskCard {...args} />
}

export const TaskCardStoryMediumPriority = {
    args: {
        card: {
            id: "1",
            title: "Task 1",
            description: "Task 1 description",
            status: "To Do",
            priority: 1,
            dueDate: "2024-01-01",
            assignee: "John Doe",
        }
    },
    render: (args) => <TaskCard {...args} />
}

export const TaskCardStoryLowPriority = {
    args: {
        card: {
            id: "1",
            title: "Task 1",
            description: "Task 1 description",
            status: "To Do",
            priority: 0,
            dueDate: "2024-01-01",
            assignee: "John Doe",
        }
    },
    render: (args) => <TaskCard {...args} />
}