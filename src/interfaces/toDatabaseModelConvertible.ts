/**
 * An interface that represents a model that can be converted to a database model.
 *
 * Use the generic type to specify the type of the database model.
 *
 * ```ts
 * class AppUser implements ToDatabaseModelConvertible<DBUser> {
 *   ...
 *   toDatabaseModel(): DBUser {
 *     return {
 *       // Return your database model here.
 *     }
 *   }
 * }
 * ```
 */
export interface ToDatabaseModelConvertible<T> {
  toDatabaseModel(): T;
}
