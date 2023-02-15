import { createStore } from 'vuex'

export default createStore({
  state: {
    xml: '',
    selectedSamplePad: 0,
    mode: 'pads',
    activePreset: {},
  },
  mutations: {
    SELECT_SAMPLEPAD(state, payload) {
      state.selectedSamplePad = payload
    },
    SET_ACTIVE_PRESET(state, payload) {
      state.activePreset = payload
    },
    SET_MODE(state, payload) {
      state.mode = payload
    }
  },
  actions: {
    setMode({ commit }, payload) {
      commit('SET_MODE', payload)
    },
    selectSamplePad({ commit }, payload) {
      commit('SELECT_SAMPLEPAD', payload)
    },
    setActivePreset({ commit }, payload) {
      commit('SET_ACTIVE_PRESET', payload)
    },
  },
  getters: {
    getSelectedSamplePad: (state) => state.selectedSamplePad,
    getActivePresetName: (state) => state.activePreset,
    getActivePreset: (state) => state.activePreset,
    getMode: (state) => state.mode,
    getCells(state) {
      return state.activePreset.document.session.cell
    },
    getActivePads(state) {
      const cells = state.activePreset.document.session.cell
      return cells.filter((cell) => {
        if (state.mode === 'pads') {
          return cell['@_type'] === 'sample'
        } else if (state.mode === 'fx') {
          return cell['@_type'] === 'delay'
        }
      })
    },
    getActiveSampleSlot(state, getters) {
      const cells = getters.getCells
      const row = Math.floor(getters.getSelectedSamplePad / 4)
      const colum = getters.getSelectedSamplePad % 4
      return cells.find((cell) => {
        return cell['@_column'] == colum && cell['@_row'] == row
      })
    },
  },
})
