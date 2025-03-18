import { Logger, NotFoundException } from '@nestjs/common';
import {
    FilterQuery,
    Model,
    Types,
    UpdateQuery,
    SaveOptions,
    Connection,
    QueryOptions,
} from 'mongoose';
import { AbstractDocument } from './abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
    protected abstract readonly logger: Logger;

    constructor(
        protected readonly model: Model<TDocument>,
        private readonly connection: Connection,
    ) { }

    async create(
        document: Omit<TDocument, '_id'>,
        options?: SaveOptions,
    ): Promise<TDocument> {
        const createdDocument = new this.model({
            ...document,
            _id: new Types.ObjectId(),
        });
        return (
            await createdDocument.save(options)
        ).toJSON() as unknown as TDocument;
    }

    async findOne(query: FilterQuery<TDocument>) {
        const doc = await this.model.findOne(query);
        if (!doc) {
            throw new NotFoundException('Document not found');
        }
        return doc;
    }


    async findOneAndUpdate(
        query: FilterQuery<TDocument>,
        update: UpdateQuery<TDocument>,
        options?: QueryOptions,
    ) {
        const doc = await this.model.findOneAndUpdate(query, update, options);
        if (!doc) {
            throw new NotFoundException('Document not found');
        }
        return doc;
    }

    async find() {
        const doc = await this.model.find();
        if (!doc) {
            throw new NotFoundException('Document not found');
        }
        return doc;
    }
    async startTransaction() {
        const session = await this.connection.startSession();
        session.startTransaction();
        return session;
    }
}