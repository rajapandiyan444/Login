import  {configureStore} from '@reduxjs/toolkit'
import todos from './Slice'
import Load from './Load'
export default configureStore({
reducer:{
datas:todos,
suc:Load
}
})