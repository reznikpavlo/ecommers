package domain

import (
	"time"
)

type Delivery struct {
	Id             string
	HandlingTime   string
	SRates         *ShippingRates
	AdditionalInfo string
	ShipmentDate   time.Time
}
