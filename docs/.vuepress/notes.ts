import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: 'auto',
})

const htmlcssNote = defineNoteConfig({
  dir: 'exam',
  link: '/exam',
  sidebar: 'auto',
});

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote, htmlcssNote],
})
