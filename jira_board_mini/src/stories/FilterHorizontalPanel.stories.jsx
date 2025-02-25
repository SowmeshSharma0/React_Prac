import { useContext } from "react"
import FilterHorizontalPanel from "../components/FilterHorizontalPanel"
import { CardProvider } from "../context/CardContext"

//mock assginee filters:
const mockAssignees = {
    "John Doe": {
        count: 5,
        isFilterActive: true
    },
    "Jane Smith": {
        count: 3,
        isFilterActive: false
    },
    "Alice Johnson": {
        count: 2,
        isFilterActive: true
    },
    "Bob Brown": {
        count: 1,
        isFilterActive: false
    }
}

const withContexts = (Story) => (
    <CardProvider initialAssignees={mockAssignees}>
        <Story />
    </CardProvider>
)
export default {
    title: "Components/FilterHorizontalPanel",
    component: FilterHorizontalPanel,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "A horizontal panel of filters; You can filter the cards by assignee",
            }
        }
    },
    decorators: [withContexts],
}

export const FilterHorizontalPanelStory = {
    render: (args) => <FilterHorizontalPanel {...args} />
}