# Model Conversion

A package to simplify conversion between models.

# Table of contents

1. [Installation](#installation)
2. [Documentation](#documentation)
   - [Interfaces](#interfaces)
   - [Quick start](#quick-start)

# Installation

You can install the package using the following commands:

```bash
# yarn
yarn add model-conversion

# npm
npm install model-conversion
```

# Documentation

## Interfaces

As your app is growing up, you'll get to work with different services like database, other APIs, apps you're handling request for, etc. Maintaining models can rapidly become an hard task. This is where this package comes into place.

This package includes 3 interfaces to helps you convert your models:

- `ToAppModelConvertible`: used to convert a model to the model you use inside your app/api/project. App models are camel cased and contains property that are helpful for your app logic.
- `ToPublicModelConvertible`: used to convert a model to the public model sent to external services. Public models are pascal cased and does not contains any sensitive data.
- `ToDatabaseModelConvertible`: used to convert a model to the database model you use in your app.api/project. Database models are camel cased and contains information that needs to be stored.

## Quick start

To convert a model to the desired one, make your model conform to one of the provided interfaces by this package. Those interfaces are generic, so you need to specify the type of the model that will be converted to.

```ts
import { ToPublicModelConvertible } from 'model-conversion'

class AppUser implement ToPublicModelConvertible<PublicUser> {
   public readonly id: string;
   public readonly createdAt: Date;
   public readonly password: string;
   public readonly firstName: string;
   public readonly lastName: string;

   public toPublicModel(): PublicUser {
      return new PublicUser(this.id, this.createdAt.toISOString(), `${this.firstName} ${this.lastName}`);
   }
}
```

`AppUser` can now be converted to its public representation like so:

```ts
const appUser: AppUser = new AppUser(
  "id",
  new Date(),
  "password",
  "Duke",
  "Caboom",
);
const publicUser: PublicUser = appUser.toPublicModel();
```

A model can be converted to multiple models. Just make it conforms to multiple interfaces.

```ts
import { ToDatabaseModelConvertible, ToPublicModelConvertible } from 'model-conversion'

class AppUser implement ToPublicModelConvertible<PublicUser>, ToDatabaseModelConvertible<DBUser> {
   public readonly id: string;
   public readonly createdAt: Date;
   public readonly password: string;
   public readonly firstName: string;
   public readonly lastName: string;

   public toPublicModel(): PublicUser {
      return new PublicUser(this.id, this.createdAt.toISOString(), `${this.firstName} ${this.lastName}`);
   }

   public toDatabaseModel(): DBUser {
      return new DBUser(this.id, this.createdAt, this.firstName, this.lastName);
   }
}
```
