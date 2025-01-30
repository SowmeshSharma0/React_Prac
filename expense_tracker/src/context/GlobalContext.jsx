import { createContext, useReducer } from "react";

export const TransactionActions = {
    ADD_TRANSACTION: 'ADD_TRANSACTION',
    DELETE_TRANSACTION: 'DELETE_TRANSACTION',
}

export const UiActions = {
    SET_FORM_DATA: 'SET_FORM_DATA',
    RESET_FORM_DATA: 'RESET_FORM_DATA',
    TOGGLE_OPEN_ITEMS: 'TOGGLE_OPEN_ITEMS',
    TOGGLE_EXPANDED: 'TOGGLE_EXPANDED',
}

const transactionReducer = (state, action) => {
    switch (action.type) {
        case TransactionActions.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        case TransactionActions.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
            }
        default:
            return state
    }
}

const UiReducer = (state, action) => {
    switch (action.type) {
        case UiActions.SET_FORM_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.field]: action.payload.value
                }
            };
        case UiActions.RESET_FORM_DATA:
            return {
                ...state,
                formData: {
                    title: '',
                    amount: '',
                    description: ''
                },
            };
        case UiActions.TOGGLE_OPEN_ITEMS:
            return {
                ...state,
                isOpenItems: !state.isOpenItems,
            };
        case UiActions.TOGGLE_EXPANDED:
            return {
                ...state,
                isExpanded: !state.isExpanded,
            };
        default:
            return state;
    }
};

export const GlobalContext = createContext()

//provider component:
export const GlobalProvider = ({children}) => {

    const initTransactionState = {
        transactions: [],
    };
    
    const initUiState = {
        formData: {
            title: '',
            amount: '',
            description: ''
        },
        isOpenItems: false,
        isExpanded: false,
    };

    const [TransactionState, TransactionDispatch] = useReducer(transactionReducer, initTransactionState)
    const [UiState, UiDispatch] = useReducer(UiReducer, initUiState)

    return (
        <GlobalContext.Provider 
            value={{
                TransactionState,
                TransactionDispatch,
                UiState,
                UiDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}