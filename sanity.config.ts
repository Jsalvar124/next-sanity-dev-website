// define everything for the sanity desk
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "smiwdeb9",
    dataset: "production",
    title: "Julián Salvá's Website",
    apiVersion: "2023-08-18",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config