export const themeInit = () => {
  let theme = 'light'

  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'dark') {
      theme = 'dark'
    }
  } else if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
  }

  if (theme === 'dark') {
    document.documentElement.setAttribute('theme', 'dark')
  }
}
