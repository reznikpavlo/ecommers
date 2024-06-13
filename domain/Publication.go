package domain

import (
	"time"
)

type Publication struct {
	Id        int64
	Duration  string
	EndAt     time.Time
	StartAt   time.Time
	Status    string
	Republish bool
	EndBy     string
}
