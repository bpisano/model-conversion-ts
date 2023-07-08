/**
 * An interface that represents a model that can be converted to an api model.
 *
 * Use the generic type to specify the type of the app model.
 *
 * ```ts
 * class DBUser implements ToApiModelConvertible<AppUser> {
 *   ...
 *   toApiModel(): ApiUser {
 *     return {
 *       // Return your app model here.
 *     }
 *   }
 * }
 * ```
 */
export interface ToApiModelConvertible<T> {
  toApiModel(): T;
}
