import {getModelForClass,prop} from "@typegoose/typegoose";

class Patient{

    readonly _id: string;

    @prop({ required: true})
    public PatientID :string;

    @prop({required: true})
    public Name :string;

    @prop({required: true})
    public DOB :string;

    @prop({required: true})
    public Address :string;

    @prop({required: true})
    public phone :string;

}
export const PatientModels=getModelForClass(Patient);