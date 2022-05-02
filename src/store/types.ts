 export enum ItemActionTypes{
    FETCH_ITEMS ='FETCH_ITEMS',
 
    SET_BOARD_AFTER_DND='SET_BOARD_AFTER_DND'
 }
 
 export interface InitState{
   stages: StageItem[]
 }


 
export type StageItem = {
    items:TaskState[],
    stage:string,
    stageName:string
}
export type TasksResponse = StageItem[]

export interface TaskState{
    clientId:string
    clientName: string
    createTimestamp: string
    plannedEndTime: string
    plannedStartTime: string
    taskId:string
    taskTypeId: number,
    taskTypeName: string
}

type SetItemAction = {
    type:ItemActionTypes.FETCH_ITEMS,
    payload: StageItem[]
}
type DndHappenedAction = {
    type:ItemActionTypes.SET_BOARD_AFTER_DND,
    payload: StageItem[]
}
export type ItemAction = SetItemAction | DndHappenedAction