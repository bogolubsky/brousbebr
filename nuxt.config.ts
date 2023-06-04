// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  // modules: ['@pinia/nuxt'],
  app: {
    head: {
      title: 'brousbebr',
      meta: [
        {name: 'description', content: 'online store of everything and more'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    },
  }
})