import HorizontalStatePanel from "../components/HorizontalStatePanel";
import { GlobalProvider } from "../context/GlobalContext";

export default {
    title: "Components/HorizontalStatePanel",
    component: HorizontalStatePanel,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "This is the horizontal state panel that displays the states of the cards.",
            }
        }
    },
    decorators: [
        (Story) => (
            <GlobalProvider>
                <Story />
            </GlobalProvider>
        )
    ]
}

export const HorizontalStatePanelStory = {
    render: (args) => <HorizontalStatePanel {...args} />
}