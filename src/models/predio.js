import Model from './model';
export default class Predio extends Model{
    constructor(){
        super();
    }
    getAll(params,next){
        let data = [
            {
                vNombre:'Predio 1',
                latitude:'-12.056139',
                longitude:'-75.267322',
                uc:'323254'
            },
            {
                vNombre:'Predio 2',
                latitude:'-12.055739',
                longitude:'-75.234078',
                uc:'324255'
            }
        ]
        next(null,data);
    }
}


