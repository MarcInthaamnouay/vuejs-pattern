const state = {
  todos: [],
}

/**
 * Getters
 */
const getters = {
  /**
   * Todos By User
   * 
   * @param {Object} state
   * @param {Number} id
   * @return {Array}
   */
  todosByUser: (state, _, rootState) => {
    const id = rootState.user.user

    if (!id) {
      return state.todos
    }

    return state.todos.filter(t => t.userId === id)
  }
}

/**
 * Actions
 */
const actions = {
  /**
   * Set Todos
   * 
   * @param {Object} commit 
   * @param {Array} todos 
   */
  setTodos({ commit }, todos) {
    if (todos.length === 0) {
      return
    }
    commit('pushTodos', todos)
  },
  /**
   * Remove Todo
   * 
   * @param {Object} commit
   * @param {Number} id
   */
  removeTodo({ commit }, id) {
    if (typeof(id) !== 'number') {
      return
    }

    commit('removeTodo', id)
  },
  /**
   * Complete Todo
   * 
   * @param {Object} commit 
   * @param {Number} id 
   */
  completeTodo({ commit }, id) {
    if (typeof(id) !== 'number') {
      return
    }

    commit('completeTodo', id)
  }
}

/**
 * Mutations
 */
const mutations = {
  /**
   * Push Todos
   * 
   * @param {Object} state
   * @param {Array} todos
   */
  pushTodos(state, todos) {
    const updatedTodos = [...state.todos, ...todos]
    state.todos = updatedTodos
  },
  /**
   * Remove Todo
   * 
   * @param {Object} state
   * @param {Number} id
   */
  removeTodo(state, id) {
    const todos = state.todos.slice()
    for (let idx = 0; idx < todos.length; idx++) {
      if (todos[idx].id === id) {
        todos.splice(idx, 1)
      }
    }

    state.todos = todos
  },
  /**
   * Complete Todo
   * 
   * @param {Object} state
   * @param {Number} id
   */
  completeTodo(state, id) {
    const currentTodos = state.todos
    const newTodos = currentTodos.map(t => {
      if (t.id === id) {
        t.completed = true
      }

      return t
    })

    state.todos = newTodos
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
