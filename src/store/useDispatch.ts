import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemActionCreators from '../store/actions'


export const useItemActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(itemActionCreators, dispatch)
    }, [dispatch])
}