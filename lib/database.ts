import mongoose from 'mongoose';

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // Preserve a single connection across Next.js development reloads.
  var mongooseCache: MongooseCache | undefined;
}

const cache = (globalThis.mongooseCache ??= {
  connection: null,
  promise: null,
});

const connectToDatabase = async () => {
  if (cache.connection?.connection.readyState === 1) {
    return cache.connection;
  }

  if (cache.connection?.connection.readyState === 0) {
    cache.connection = null;
    cache.promise = null;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not configured.');
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(uri, { dbName: 'portfolio' })
      .then((connection) => connection)
      .catch((error: unknown) => {
        cache.promise = null;
        throw error;
      });
  }

  cache.connection = await cache.promise;
  return cache.connection;
};

export default connectToDatabase;
