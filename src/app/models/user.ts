import { Servicesdem } from "./servicesdem";
import { Servicesoff } from "./servicesoff";
import { Solde } from "./solde";

export class User {
    id?:string
    nom?: string
    prenom?: string
    gender?: string
    soldeAux?: Number
    passwordHash?:string
    profession?:string
    isAdmin?:boolean
    ville?:string
    email?:string
    image?: string;
    //competance?:[]
    servicesdem?: Servicesdem[] |any
    servicesoff?: Servicesoff[] |any
    constructor(
        id?:string,
         nom?: string, 
         isAdmin?: boolean,
         prenom?: string,
         gender?: string,
         soldeAux?: Number,
         passwordHash?:string,
         ville?:string,
         email?:string,
         image?:string,
        // competance?:[],
         profession?: string,
         servicesdem?: Servicesdem[] | any ,
         servicesoff?: Servicesoff[] |any
    ){}
}