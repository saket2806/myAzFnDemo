import * as dbConnection from '../shared/dbConnect';
import {PatientModels} from '../shared/model/patient';
import { Context, HttpRequest } from "@azure/functions";


export async function addPatient(context: Context, req: HttpRequest) {

    dbConnection.connect();
    try 
    {
         await PatientModels.create(req.body)
    }
    catch(error){

        console.log("error in patient add:-"+error);
        context.res={
            status:500,
            body:"Error occure in processing"
        }
    }
    dbConnection.disconnect();
    context.res={
        status:200,
        body:"Patient Added successfully, with name "+req.body.Name
    }

}

export async function deletePatient(context: Context, id: string) {

    dbConnection.connect();
    try 
    {
         await PatientModels.deleteOne({ PatientID: id})
    }
    catch(error){

        console.log("error in patient delete:-"+error);
        context.res={
            status:500,
            body:"Error occure in processing"
        }
    }
    dbConnection.disconnect();
    context.res={
        status:200,
        body:"Patient deleted successfully, with id :-"+id
    }

}

export async function getPatient(context: Context, req: HttpRequest) {

    dbConnection.connect();
    let patientDoc: any;
    try 
    {
        patientDoc= await PatientModels.find({});
    }
    catch(error){
        context.res={
            status:500,
            body:"Error occure in processing"
        }
    }
    dbConnection.disconnect();
    context.res={
        status:200,
        body:patientDoc
    }
}

export async function updatePatient(context: Context, req: HttpRequest) {

    dbConnection.connect();
    try 
    {
       await PatientModels.updateOne({PatientID: req.body.PatientID},{...req.body},{runValidator:true})
    }
    catch(error){

        console.log("error in patient update:-"+error);
        context.res={
            status:500,
            body:"Error occure in processing"
        }
    }
    dbConnection.disconnect();
    context.res={
        status:200,
        body:"Patient updated  successfully, with name "+req.body.Name
    }

}