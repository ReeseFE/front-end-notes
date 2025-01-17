import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: 'auto',
})

const htmlcssNote = defineNoteConfig({
  dir: 'htmlcss',
  link: '/htmlcss',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote, htmlcssNote],
})
