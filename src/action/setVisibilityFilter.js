import {SET_VISIBILITY_FILTER} from '../constants/constants'

export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}