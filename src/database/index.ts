import { Connection, createConnection, getConnectionOptions } from "typeorm";

// Conforme a variável de ambiente, escolhe qual BD utilizar
export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite": defaultOptions.database
        })
    );
};