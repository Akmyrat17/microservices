import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false, timestamps: true })
export class Order extends AbstractDocument {
    @Prop()
    name: string

    @Prop()
    price: number

    @Prop()
    phoneNumber: string
}

export const OrderSchema = SchemaFactory.createForClass(Order);