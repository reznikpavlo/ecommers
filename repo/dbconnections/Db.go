package dbconnections

import "ecommers/repo/dbconnections/connectors"

type Db struct {
	MongoDb *connectors.MongoConnector
}
