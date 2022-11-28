import { Organisation } from "./organisation";
import { Roles } from "./roles";
import { Warehouse } from "./warehouse";

export class User{
idUser!:string;
Role!:Roles[];
Org!:Organisation[];
Wh!:Warehouse[];
username!: string;
password!: string;



}