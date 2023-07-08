/**
 * An interface that represents a model that can be converted to an app model.
 *
 * Use the generic type to specify the type of the app model.
 *
 * ```ts
 * class DBUser implements ToAppModelConvertible<AppUser> {
 *   ...
 *   toAppModel(): AppUser {
 *     return {
 *       // Return your app model here.
 *     }
 *   }
 * }
 * ```
 */
export interface ToAppModelConvertible<T> {
  toAppModel(): T;
}
