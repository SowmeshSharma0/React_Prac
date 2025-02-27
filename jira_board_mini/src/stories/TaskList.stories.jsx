import TaskList from "../components/TaskList";
import { CardProvider } from "../context/CardContext";
import { GlobalProvider } from "../context/GlobalContext";


const withContexts = (Story) => (
    <GlobalProvider >
        <CardProvider>
            <Story />
        </CardProvider>
    </GlobalProvider>
)

export default {
    title: "Components/TaskList",
    component: TaskList,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "This consists of a list of cards that can be dragged and dropped.",
            }
        }
    },
    decorators: [withContexts],
}

export const TaskListStory = {
    render: (args) => <TaskList {...args} />
}