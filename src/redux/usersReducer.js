import { EDIT_USERS, REMOVE_USERS, GET_USERS, ADD_USERS } from "./actionTypes";

const initialState = []

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return payload
    case ADD_USERS:
      return [...state, {
        id: state.length + 1,
        name: payload.name,
        username: payload.username,
        email: payload.email,
        address: {
          street: payload.street,
          suite: payload.suite,
          city: payload.city,
          zipcode: payload.zipcode,
          geo: {
            lat: payload.lat,
            lng: payload.lng
          },
        },
        phone: payload.phone,
        website: payload.website,
        company: {
          name: payload.companyName,
          catchPhrase: payload.catchPhrase,
          bs: payload.bs
        }
      }]
    case EDIT_USERS:
      return [...state.map(item => item.id === payload.id ? ({
        id: payload.id,
        name: payload.name,
        username: payload.username,
        email: payload.email,
        address: {
          street: payload.street,
          suite: payload.suite,
          city: payload.city,
          zipcode: payload.zipcode,
          geo: {
            lat: payload.lat,
            lng: payload.lng
          },
        },
        phone: payload.phone,
        website: payload.website,
        company: {
          name: payload.companyName,
          catchPhrase: payload.catchPhrase,
          bs: payload.bs
        }
      }) : item)]  
    case REMOVE_USERS:
      return [...state.filter(item => item.id !== payload)]
    default:
      return state
  }
}