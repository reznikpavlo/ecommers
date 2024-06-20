package domain

import (
	"strconv"
	"strings"
	"time"
)

type Product struct {
	Id           int64
	Category     string
	Language     string
	CreatingDate time.Time
}

func (p Product) getDate() string {
	return p.CreatingDate.Format("02-01-2006 15:04:05")
}

func (p Product) String() string {
	builder := strings.Builder{}
	builder.WriteString("Product {")
	builder.WriteString("id : ")
	builder.WriteString(strconv.FormatInt(p.Id, 10))
	builder.WriteString(", Category: ")
	builder.WriteString(p.Category)
	builder.WriteString(", Language: ")
	builder.WriteString(p.Language)
	builder.WriteString(", CreatingDate: ")
	builder.WriteString(p.getDate())
	builder.WriteString(" }")
	return builder.String()
}
