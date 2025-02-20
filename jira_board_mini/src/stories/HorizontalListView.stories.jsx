import HorizontalListView from "../components/HorizontalListView"
import { GlobalProvider } from "../context/GlobalContext"
import { CardProvider } from "../context/CardContext"

const withContexts = (Story) => (
    <GlobalProvider>
        <CardProvider>
            <Story />
        </CardProvider>
    </GlobalProvider>
)
export default {
    title: "Components/HorizontalListView",
    component: HorizontalListView,
    decorators: [withContexts],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "A horizontal list view of tasks.",
            }
        }
    }
}

export const NonExpandable = {
    args: {
        state: 2,
        isExpandable: false
    },
    render: (args) => <HorizontalListView {...args} />
}

export const Expandable = {
    args: {
        state: 0,
        isExpandable: true
    },
    render: (args) => <HorizontalListView {...args} />
}

