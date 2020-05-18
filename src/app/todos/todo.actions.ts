import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Create', 
    props<{ text:string }>() 
);

export const toggle = createAction(
    '[TODO] Toggle',
    props<{ id:number }>()
)

export const edit = createAction(
    '[TODO] Edit',
    props<{ id:number, text:string }>()
)

export const erase = createAction(
    '[TODO] Delete',
    props<{ id:number }>()
)

export const toggleAll = createAction(
    '[TODO] Toggle All',
    props<{ completed:boolean }>()
)

export const deleteCompleted = createAction( '[TODO] Delete Completed' )
