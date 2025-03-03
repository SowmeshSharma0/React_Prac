
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

// maintains insertion order
export const main_axis_IsExpandable_init = new Map([
    [2, false],
    [1, false],
    [0, true]
]);

//set and get methods can be used

// export const main_axis_IsExpandable_init = {
//     1: false,
//     0: true,
//     2: false,
// }

//can change drag rules here; convenient way to change the rules; no merge conflicts
export const card_move_rules_horizontal = {
    0: [1],
    1: [0, 2],
    2: [1, 3],
    3: [2]
}

export const card_move_rules_vertical= {
    0: [1,2],
    1: [0,2],
    2: [0,1]
}