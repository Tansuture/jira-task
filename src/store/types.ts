 export enum ItemActionTypes{
    FETCH_ITEMS ='FETCH_ITEMS',
    FETCH_STAGE='FETCH_STAGE',
    FETCH_STAGE_NAME = 'FETCH_STAGE_NAME'
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
export type ItemAction= SetItemAction 