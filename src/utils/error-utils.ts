import {setAppError, SetAppErrorActionType, setAppStatus, SetAppStatusActionType} from '../app/app-reducer'
import {ResponseType} from '../api/todolists-api'
import {Dispatch} from 'redux'

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
    if (data.messages.length) {
        dispatch(setAppError({error: data.messages[0]}))
    } else {
        dispatch(setAppError({error: 'Some error occurred'}))
    }
    dispatch(setAppStatus({status: 'failed'} ))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch
// <SetAppErrorActionType | SetAppStatusActionType>
) => {
    dispatch(setAppError({error: error.message ?  error.message :  'Some error occurred'}))
    dispatch(setAppStatus({status: 'failed'}))
}
