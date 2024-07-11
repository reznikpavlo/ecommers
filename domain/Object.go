package domain

import "sync"

type Object struct {
	Wg sync.WaitGroup
}
