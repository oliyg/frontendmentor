import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDbStore = defineStore('home', () => {
  /* ---------------------------------- theme --------------------------------- */
  const lightTheme = ref(true)
  if (localStorage.getItem('theme')) {
    lightTheme.value = localStorage.getItem('theme') === 'light'
  }
  const toggleTheme = () => {
    lightTheme.value = !lightTheme.value
    localStorage.setItem('theme', lightTheme.value ? 'light' : 'dark')
    document.documentElement.setAttribute('theme', lightTheme.value ? 'light' : 'dark')
  }

  /* --------------------------------- search --------------------------------- */
  const kw = ref('')
  const setKw = (val) => (kw.value = val)

  /* --------------------------------- regions -------------------------------- */
  const regions = computed(() => {
    const list = []
    db.value.forEach((item) => {
      !list.includes(item.region) && list.push(item.region)
    })
    return list.map((itm) => ({ name: itm }))
  })
  const selectedRegion = ref('')
  const setSelectedRegion = (val) => (selectedRegion.value = val)

  /* ----------------------------------- db ----------------------------------- */
  const db = ref([])
  const queryAllData = async () => {
    const res = await fetch('./data.json', {
      method: 'get'
    })
    db.value = await res.json()
  }
  const queryDataByCode = (code) => {
    return db.value.find((itm) => itm.alpha3Code === code)
  }
  const filteredDb = computed(() => {
    if (!kw.value && !selectedRegion.value) return db.value
    return db.value.filter((itm) => {
      const regionCondition = itm.region === selectedRegion.value
      const kwCondition = itm.name.toLowerCase().includes(kw.value.toLowerCase())
      if (selectedRegion.value) {
        return regionCondition && kwCondition
      } else {
        return kwCondition
      }
    })
  })

  return {
    db,
    filteredDb,
    regions,
    selectedRegion,
    setSelectedRegion,
    kw,
    setKw,
    queryAllData,
    queryDataByCode,
    toggleTheme
  }
})
