import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  motherboard: null,
  cpu:null,
  psu:null,
  storage:null,
  ram:null,
  monitor:null
}

export const pcBuilderSlice = createSlice({
  name: 'pcbuilder',
  initialState,
  reducers: {
    setMotherBoard: (state, action)=> {
      state.motherboard = action.payload;
    },
    setCpu: (state, action)=> {
      state.cpu = action.payload;
    },
    setPsu: (state, action)=> {
      state.psu = action.payload;
    },
    setStorage: (state, action)=> {
      state.storage = action.payload;
    },
    setRam: (state, action)=> {
      state.ram = action.payload;
    },
    setMonitor: (state, action)=> {
      state.monitor = action.payload;
    },
    reset: (state)=> {
      state = {
        motherboard: null,
        cpu:null,
        psu:null,
        storage:null,
        ram:null,
        monitor:null
      };
    }
}
})

// Action creators are generated for each case reducer function
export const { setCpu, setMonitor, setMotherBoard, setPsu, setRam, setStorage, reset } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer