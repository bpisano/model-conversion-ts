/**
 * An interface that represents a model that can be converted to a public model.
 *
 * Use the generic type to specify the type of the public model.
 *
 * ```ts
 * class AppUser implements ToApiModelConvertible<PublicUser> {
 *   ...
 *   toPublicModel(): PublicUser {
 *     return {
 *       // Return your public model here.
 *     }
 *   }
 * }
 * ```
 */
export interface ToPublicModelConvertible<T> {
  toPublicModel(): T;
}
