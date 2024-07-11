package dbconnections

type Connector interface {
	InitConnection(connector any)
	Disconnect()
}
