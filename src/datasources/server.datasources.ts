import {inject, lifeCycleObserver, LifeCycleObserver} from "@loopback/core"
import { juggler } from "@loopback/repository"
// import dotenv from "dotenv"
import path from "path"


const config = {
  name: "mongodb",
  connector: "mongodb",
  url: process.env.MONGODB_URL as string,
  host: "",
  port: 0,
  user: "",
  password: "",
  database: "",
  useNewUrlParser: true,
  connectionTimeout: 30000,
};

@lifeCycleObserver("datasource")
export class ServerDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = "server"
  static readonly defaultConfig = config

  constructor(
    @inject("datasources.config.server", { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig)
  }
}