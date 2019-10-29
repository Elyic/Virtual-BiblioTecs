import { CategoriaModel } from './Categoria.Model';

export default class RespuestaModel{
    constructor(
        public ok:boolean
        ,public rowsAffected:number
        ,public recordset:
        CategoriaModel[]
                        ){

    }
}