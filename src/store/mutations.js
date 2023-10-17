export const newItems = (state, data) => {
    state.items = data
}

export const addNewItem = (state, data) => {
    state.items = [ ...state.items, data ]
}

export const getItem = (state,  { email, pass, id }) => {
    state.item = {
        email,
        pass,
        id
    }
}

export const updateItem = (state, { email, pass, id } ) => {
    const items = [ ...state.items ]

    const index = items.findIndex((item) => item.id === id)
    const updated = items.filter((item) => item.id === id)[0]
    const arrClean = items.filter((item) => item.id !== id)
    const itemUpdated = { ...updated }
    itemUpdated.email = email
    itemUpdated.pass = pass

    arrClean.splice(0, index, itemUpdated)

    state.items = [ ...arrClean ]

}