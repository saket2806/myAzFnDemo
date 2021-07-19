import { Context, HttpRequest } from "@azure/functions";
import * as mypatient from '../../shared/patientRepo'


export async function httpTrigger(context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
     await mypatient.getPatient(context,req);
};
 