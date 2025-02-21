export const main_axis_state_mapping = {
    2: "High Priority", //high priority tasks
    1: "Medium Priority",
    0: "Low Priority",
}
export const cross_axis_state_mapping = {
    0: "To Do",
    1: "In Progress",
    2: "Review",
    3: "Done"
}

export const main_axis_IsExpandable_init = {
    2: false,
    1: false,
    0: true
}

export const can_delete_at_cross_axis_state = {
    0: true,
    1: false,
    2: true,
    3: true
}

export const card_move_rules_horizontal = {
    0: [1],
    1: [2],
    2: [3],
    3: []
}

export const card_move_rules_vertical_cross_state = {
    0: [0],
    1: [1],
    2: [2],
    3: []
}