package structs

type Paginaciones struct {
	Pagina         int `json:"Pagina"`
	LongitudPagina int `json:"LongitudPagina"`
	CantidadTotal  int `json:"CantidadTotal"`
}
