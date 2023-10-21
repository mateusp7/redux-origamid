const COMPLETAR_AULA = "aulas/COMPLETAR_AULA"
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO"
const RESETAR_CURSO = "aulas/RESETAR_CURSO"

export const completar_aula = (id) => ({ type: COMPLETAR_AULA, id })
export const completar_curso = () => ({ type: COMPLETAR_CURSO })
export const resetar_curso = () => ({ type: RESETAR_CURSO })

const initialState = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "CSS",
    completa: false,
  },
  {
    id: 4,
    nome: "JavaScript",
    completa: false,
  },
]

const completeClassById = (aulas, id) => {
  if (!aulas) return
  return aulas.map((aula) => {
    if (aula.id === id) return { ...aula, completa: true }
    return aula
  })
}

const completeAllClass = (aulas) => {
  return aulas.forEach((aula) => ({ ...aula, completa: true }))
}

const resetCourse = (aulas) => {
  return aulas.forEach((aula) => ({ ...aula, completa: false }))
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      return completeClassById(state, action.payload)
    case COMPLETAR_CURSO:
      return completeAllClass(state)
    case RESETAR_CURSO:
      return resetCourse(state)
    default:
      return state
  }
}

export default reducer
