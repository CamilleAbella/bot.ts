import * as app from "../app"

export interface Paginator {
  message_id: string
}

const table = new app.Table<Paginator>({
  name: "paginator",
  setup: (table) => {
    // setup table columns => http://knexjs.org/#Schema-Building
  },
})

export default table
